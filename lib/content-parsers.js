import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

/**
 * Base ContentParser class
 */
class ContentParser {
  /**
   * Parse content from file
   * @param {string} filePath - Path to the content file
   * @param {string} content - Raw file content
   * @returns {Promise<import('./types').ContentItem>}
   */
  async parse(filePath, content) {
    throw new Error('parse method must be implemented');
  }
}

/**
 * JSON Content Parser - handles existing JSON format
 */
class JSONContentParser extends ContentParser {
  async parse(filePath, content) {
    try {
      const data = JSON.parse(content);
      
      // Validate required fields
      if (!data.title) {
        console.warn(`[JSONParser] Missing title in ${filePath}`);
        data.title = 'Untitled';
      }
      
      if (!data.slug) {
        console.warn(`[JSONParser] Missing slug in ${filePath}, generating from filename`);
        data.slug = this.generateSlugFromPath(filePath);
      }
      
      if (!data.datetime) {
        console.warn(`[JSONParser] Missing datetime in ${filePath}, using current date`);
        data.datetime = new Date().toISOString();
      }
      
      return {
        ...data,
        format: 'json'
      };
    } catch (error) {
      throw new Error(`Failed to parse JSON file ${filePath}: ${error.message}`);
    }
  }

  generateSlugFromPath(filePath) {
    const fileName = filePath.split('/').pop();
    return fileName.replace(/\.(md|json)$/, '');
  }
}

/**
 * Markdown Content Parser - handles new markdown format
 */
class MarkdownContentParser extends ContentParser {
  constructor() {
    super();
    this.processor = remark()
      .use(remarkGfm)
      .use(remarkHtml);
  }

  async parse(filePath, content) {
    try {
      const { data: frontmatter, content: markdownContent } = matter(content);
      
      // Validate frontmatter
      if (!frontmatter.title) {
        console.warn(`[MarkdownParser] Missing title in ${filePath}`);
        frontmatter.title = 'Untitled';
      }
      
      if (!frontmatter.slug) {
        console.warn(`[MarkdownParser] Missing slug in ${filePath}, generating from filename`);
        frontmatter.slug = this.generateSlugFromPath(filePath);
      }
      
      if (!frontmatter.datetime) {
        console.warn(`[MarkdownParser] Missing datetime in ${filePath}, using current date`);
        frontmatter.datetime = new Date().toISOString();
      }
      
      // Convert markdown to HTML for processing
      let processedContent, htmlContent;
      try {
        processedContent = await this.processor.process(markdownContent);
        htmlContent = processedContent.toString();
      } catch (error) {
        console.error(`[MarkdownParser] Failed to process markdown in ${filePath}:`, error.message);
        htmlContent = markdownContent; // Fallback to raw markdown
      }
      
      // Convert markdown content to ContentBlock structure for compatibility
      let contentBlocks;
      try {
        contentBlocks = this.convertMarkdownToBlocks(markdownContent);
      } catch (error) {
        console.error(`[MarkdownParser] Failed to convert blocks in ${filePath}:`, error.message);
        contentBlocks = [{ type: 'p', content: markdownContent }]; // Fallback
      }
      
      return {
        title: frontmatter.title,
        slug: frontmatter.slug,
        description: frontmatter.description || '',
        keywords: Array.isArray(frontmatter.keywords) ? frontmatter.keywords : [],
        datetime: frontmatter.datetime,
        thumbnails: Array.isArray(frontmatter.thumbnails) ? frontmatter.thumbnails : [],
        technologies: Array.isArray(frontmatter.technologies) ? frontmatter.technologies : [],
        content: contentBlocks,
        format: 'markdown',
        rawMarkdown: markdownContent,
        processedHtml: htmlContent
      };
    } catch (error) {
      throw new Error(`Failed to parse markdown file ${filePath}: ${error.message}`);
    }
  }

  /**
   * Convert markdown content to ContentBlock structure
   */
  convertMarkdownToBlocks(markdown) {
    const blocks = [];
    
    if (!markdown || typeof markdown !== 'string') {
      console.warn('[MarkdownParser] Invalid markdown content, returning empty blocks');
      return blocks;
    }
    
    const lines = markdown.split('\n');
    let currentBlock = null;
    let inCodeBlock = false;
    let codeLanguage = '';
    let codeContent = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      try {
        // Handle code blocks
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          // Starting code block
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim() || 'text';
          codeContent = [];
        } else {
          // Ending code block
          inCodeBlock = false;
          blocks.push({
            type: 'code',
            content: codeContent.join('\n'),
            language: codeLanguage
          });
          codeContent = [];
        }
        continue;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        continue;
      }

      // Handle headers
      if (line.startsWith('#')) {
        const level = line.match(/^#+/)[0].length;
        const content = line.replace(/^#+\s*/, '');
        blocks.push({
          type: `h${level}`,
          content: content
        });
        continue;
      }

      // Handle blockquotes
      if (line.startsWith('>')) {
        const content = line.replace(/^>\s*/, '');
        blocks.push({
          type: 'blockquote',
          content: content
        });
        continue;
      }

      // Handle images with enhanced syntax
      const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)(?:\s+"([^"]*)")?(?:\s+(.+))?/);
      if (imageMatch) {
        const [, alt, src, caption, attributes] = imageMatch;
        const imageBlock = {
          type: 'image',
          src: src,
          alt: alt || '',
          caption: caption || ''
        };

        // Parse additional attributes (position, location, gear, copyright)
        if (attributes) {
          const attrMatches = attributes.matchAll(/(\w+)=([^\s]+)/g);
          for (const [, key, value] of attrMatches) {
            const cleanValue = value.replace(/['"]/g, '');
            
            // Map attribute names to expected properties
            switch (key.toLowerCase()) {
              case 'position':
                if (['left', 'right', 'full'].includes(cleanValue)) {
                  imageBlock.position = cleanValue;
                }
                break;
              case 'location':
                imageBlock.location = cleanValue;
                break;
              case 'gear':
                imageBlock.gear = cleanValue;
                break;
              case 'copyright':
                imageBlock.copyright = cleanValue;
                break;
              default:
                // Store any other attributes as-is
                imageBlock[key] = cleanValue;
            }
          }
        }

        blocks.push(imageBlock);
        continue;
      }

      // Handle info callouts (:::info, :::warning, :::note, etc.)
      const calloutMatch = line.match(/^:::(\w+)(?:\s+(.*))?$/);
      if (calloutMatch) {
        const [, calloutType, title] = calloutMatch;
        const calloutContent = [];
        i++; // Move to next line
        
        while (i < lines.length && !lines[i].startsWith(':::')) {
          calloutContent.push(lines[i]);
          i++;
        }
        
        // Map different callout types to our info block type
        const blockType = ['info', 'warning', 'note', 'tip'].includes(calloutType.toLowerCase()) 
          ? 'info' 
          : 'info'; // Default to info for unknown types
        
        blocks.push({
          type: blockType,
          content: calloutContent.join('\n').trim(),
          calloutType: calloutType.toLowerCase(),
          title: title || ''
        });
        continue;
      }

      // Handle clear divs
      if (line.includes('<div class="clear-both"></div>')) {
        blocks.push({
          type: 'clear'
        });
        continue;
      }

      // Handle regular paragraphs
      if (line.trim() && !line.startsWith('#') && !line.startsWith('>')) {
        blocks.push({
          type: 'p',
          content: line.trim()
        });
      }
      } catch (error) {
        console.warn(`[MarkdownParser] Error processing line ${i + 1}: "${line}" - ${error.message}`);
        // Continue processing other lines
      }
    }

    return blocks;
  }

  /**
   * Generate slug from file path
   */
  generateSlugFromPath(filePath) {
    const fileName = filePath.split('/').pop();
    return fileName.replace(/\.(md|json)$/, '');
  }
}

/**
 * Content Parser Factory
 */
class ContentParserFactory {
  static createParser(filePath) {
    if (filePath.endsWith('.json')) {
      return new JSONContentParser();
    } else if (filePath.endsWith('.md')) {
      return new MarkdownContentParser();
    }
    throw new Error(`Unsupported file format: ${filePath}`);
  }
}

export {
  ContentParser,
  JSONContentParser,
  MarkdownContentParser,
  ContentParserFactory
};