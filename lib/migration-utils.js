import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

/**
 * Convert JSON content to Markdown format
 */
export class JSONToMarkdownConverter {
  /**
   * Convert a JSON content object to markdown string
   * @param {Object} jsonData - The JSON content data
   * @returns {string} - Markdown content with YAML frontmatter
   */
  convertToMarkdown(jsonData) {
    // Extract metadata for frontmatter
    const frontmatter = {
      title: jsonData.title,
      slug: jsonData.slug,
      description: jsonData.description,
      keywords: jsonData.keywords || [],
      datetime: jsonData.datetime,
      ...(jsonData.thumbnails && { thumbnails: jsonData.thumbnails }),
      ...(jsonData.technologies && { technologies: jsonData.technologies })
    };

    // Convert frontmatter to YAML
    const yamlFrontmatter = yaml.dump(frontmatter, {
      indent: 2,
      lineWidth: -1
    });

    // Convert content blocks to markdown
    const markdownContent = this.convertContentBlocks(jsonData.content || []);

    // Combine frontmatter and content
    return `---\n${yamlFrontmatter}---\n\n${markdownContent}`;
  }

  /**
   * Convert content blocks array to markdown string
   * @param {Array} blocks - Array of content blocks
   * @returns {string} - Markdown content
   */
  convertContentBlocks(blocks) {
    return blocks.map(block => this.convertBlock(block)).join('\n\n');
  }

  /**
   * Convert a single content block to markdown
   * @param {Object} block - Content block object
   * @returns {string} - Markdown representation
   */
  convertBlock(block) {
    switch (block.type) {
      case 'h1':
        return `# ${block.content}`;
      case 'h2':
        return `## ${block.content}`;
      case 'h3':
        return `### ${block.content}`;
      case 'h4':
        return `#### ${block.content}`;
      case 'h5':
        return `##### ${block.content}`;
      case 'h6':
        return `###### ${block.content}`;
      
      case 'p':
        return block.content;
      
      case 'blockquote':
        return `> ${block.content}`;
      
      case 'code':
        const language = block.language || 'text';
        return `\`\`\`${language}\n${block.content}\n\`\`\``;
      
      case 'image':
        return this.convertImageBlock(block);
      
      case 'info':
        return `:::info\n${block.content}\n:::`;
      
      case 'clear':
        return '<div class="clear-both"></div>';
      
      default:
        console.warn(`Unknown block type: ${block.type}`);
        return '';
    }
  }

  /**
   * Convert image block to enhanced markdown syntax
   * @param {Object} imageBlock - Image block object
   * @returns {string} - Enhanced markdown image syntax
   */
  convertImageBlock(imageBlock) {
    let markdown = `![${imageBlock.alt || ''}](${imageBlock.src})`;
    
    // Add caption if present
    if (imageBlock.caption) {
      markdown += ` "${imageBlock.caption}"`;
    }

    // Add additional attributes
    const attributes = [];
    if (imageBlock.position) attributes.push(`position=${imageBlock.position}`);
    if (imageBlock.location) attributes.push(`location="${imageBlock.location}"`);
    if (imageBlock.gear) attributes.push(`gear="${imageBlock.gear}"`);
    if (imageBlock.copyright) attributes.push(`copyright="${imageBlock.copyright}"`);

    if (attributes.length > 0) {
      markdown += ` ${attributes.join(' ')}`;
    }

    return markdown;
  }

  /**
   * Convert JSON file to markdown file
   * @param {string} jsonFilePath - Path to JSON file
   * @param {string} outputDir - Output directory for markdown file
   * @returns {Promise<string>} - Path to created markdown file
   */
  async convertFile(jsonFilePath, outputDir = null) {
    try {
      // Read JSON file
      const jsonContent = await fs.readFile(jsonFilePath, 'utf-8');
      const jsonData = JSON.parse(jsonContent);

      // Convert to markdown
      const markdownContent = this.convertToMarkdown(jsonData);

      // Determine output path
      const fileName = path.basename(jsonFilePath, '.json');
      const outputPath = outputDir 
        ? path.join(outputDir, `${fileName}.md`)
        : jsonFilePath.replace('.json', '.md');

      // Write markdown file
      await fs.writeFile(outputPath, markdownContent, 'utf-8');

      return outputPath;
    } catch (error) {
      throw new Error(`Failed to convert ${jsonFilePath}: ${error.message}`);
    }
  }

  /**
   * Validate that converted content matches original
   * @param {string} jsonFilePath - Original JSON file path
   * @param {string} markdownFilePath - Converted markdown file path
   * @returns {Promise<Object>} - Validation result
   */
  async validateConversion(jsonFilePath, markdownFilePath) {
    try {
      // Read original JSON
      const jsonContent = await fs.readFile(jsonFilePath, 'utf-8');
      const originalData = JSON.parse(jsonContent);

      // Read converted markdown and parse it back
      const { ContentParserFactory } = await import('./content-parsers.js');
      const markdownContent = await fs.readFile(markdownFilePath, 'utf-8');
      const parser = ContentParserFactory.createParser(markdownFilePath);
      const parsedData = await parser.parse(markdownFilePath, markdownContent);

      // Compare key fields
      const validation = {
        valid: true,
        errors: [],
        warnings: []
      };

      // Check metadata
      if (originalData.title !== parsedData.title) {
        validation.errors.push(`Title mismatch: "${originalData.title}" vs "${parsedData.title}"`);
        validation.valid = false;
      }

      if (originalData.slug !== parsedData.slug) {
        validation.errors.push(`Slug mismatch: "${originalData.slug}" vs "${parsedData.slug}"`);
        validation.valid = false;
      }

      if (originalData.description !== parsedData.description) {
        validation.errors.push(`Description mismatch`);
        validation.valid = false;
      }

      // Check content blocks count
      if (originalData.content?.length !== parsedData.content?.length) {
        validation.warnings.push(`Content blocks count differs: ${originalData.content?.length} vs ${parsedData.content?.length}`);
      }

      return validation;
    } catch (error) {
      return {
        valid: false,
        errors: [`Validation failed: ${error.message}`],
        warnings: []
      };
    }
  }
}

/**
 * Batch migration utility
 */
export class BatchMigrator {
  constructor() {
    this.converter = new JSONToMarkdownConverter();
  }

  /**
   * Migrate all JSON files in a directory
   * @param {string} contentDir - Directory containing JSON files
   * @param {Object} options - Migration options
   * @returns {Promise<Object>} - Migration results
   */
  async migrateDirectory(contentDir, options = {}) {
    const {
      backup = true,
      validate = true,
      dryRun = false
    } = options;

    const results = {
      success: [],
      errors: [],
      validationResults: []
    };

    try {
      // Get all JSON files
      const files = await fs.readdir(contentDir);
      const jsonFiles = files.filter(f => f.endsWith('.json') && !f.startsWith('.'));

      console.log(`Found ${jsonFiles.length} JSON files to migrate`);

      // Create backup if requested
      if (backup && !dryRun) {
        await this.createBackup(contentDir);
      }

      // Process each file
      for (const file of jsonFiles) {
        const jsonPath = path.join(contentDir, file);
        
        try {
          if (dryRun) {
            console.log(`[DRY RUN] Would convert: ${file}`);
            results.success.push(file);
          } else {
            const markdownPath = await this.converter.convertFile(jsonPath, contentDir);
            console.log(`✓ Converted: ${file} → ${path.basename(markdownPath)}`);
            results.success.push(file);

            // Validate if requested
            if (validate) {
              const validation = await this.converter.validateConversion(jsonPath, markdownPath);
              results.validationResults.push({
                file,
                ...validation
              });

              if (!validation.valid) {
                console.warn(`⚠ Validation issues for ${file}:`, validation.errors);
              }
            }
          }
        } catch (error) {
          console.error(`✗ Failed to convert ${file}:`, error.message);
          results.errors.push({
            file,
            error: error.message
          });
        }
      }

      return results;
    } catch (error) {
      throw new Error(`Migration failed: ${error.message}`);
    }
  }

  /**
   * Create backup of JSON files
   * @param {string} contentDir - Content directory
   */
  async createBackup(contentDir) {
    const backupDir = path.join(contentDir, 'backup-' + Date.now());
    await fs.mkdir(backupDir, { recursive: true });

    const files = await fs.readdir(contentDir);
    const jsonFiles = files.filter(f => f.endsWith('.json') && !f.startsWith('.'));

    for (const file of jsonFiles) {
      const sourcePath = path.join(contentDir, file);
      const backupPath = path.join(backupDir, file);
      await fs.copyFile(sourcePath, backupPath);
    }

    console.log(`✓ Backup created: ${backupDir}`);
    return backupDir;
  }
}