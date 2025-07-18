/**
 * Content types and interfaces for the journal system
 */

export interface Thumbnail {
  src: string;
  alt: string;
}

export interface Technology {
  name: string;
  icon: string;
  size?: number;
}

export interface ContentBlock {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'image' | 'code' | 'blockquote' | 'info' | 'clear';
  content?: string;
  language?: string; // for code blocks
  src?: string; // for images
  alt?: string; // for images
  position?: 'left' | 'right' | 'full'; // for images
  location?: string; // for images
  copyright?: string; // for images
  gear?: string; // for images
  caption?: string; // for images
}

export interface ContentItem {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  datetime: string;
  thumbnails?: Thumbnail[];
  technologies?: Technology[];
  content: ContentBlock[];
  format: 'json' | 'markdown';
  rawMarkdown?: string; // only for markdown format
  processedHtml?: string; // only for markdown format
}

export interface UnifiedContent {
  metadata: {
    title: string;
    slug: string;
    description: string;
    keywords: string[];
    datetime: string;
    thumbnails?: Thumbnail[];
    technologies?: Technology[];
    format: 'json' | 'markdown';
  };
  blocks: ContentBlock[];
}

export abstract class ContentParser {
  abstract parse(filePath: string, content: string): Promise<ContentItem>;
}

export interface ParserOptions {
  validateContent?: boolean;
  includeRawContent?: boolean;
}