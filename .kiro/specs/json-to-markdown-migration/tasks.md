# Implementation Plan

- [x] 1. Install required dependencies for markdown processing
  - Add gray-matter, remark, remark-html, and remark-gfm packages to package.json
  - Install packages using npm install
  - _Requirements: 1.1, 4.1_

- [x] 2. Create markdown content parser utility
  - Implement MarkdownContentParser class that extracts YAML frontmatter and parses markdown content
  - Create utility functions to convert markdown to ContentBlock structure for compatibility
  - Write unit tests for markdown parsing functionality
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 3. Create content parser factory and interfaces
  - Define TypeScript interfaces for UnifiedContent, ContentItem, and ContentBlock
  - Implement ContentParserFactory that returns appropriate parser based on file extension
  - Create base ContentParser interface that both JSON and markdown parsers implement
  - _Requirements: 2.1, 2.2, 4.1_

- [x] 4. Update getHeaders.js to support both JSON and markdown files
  - Modify file filtering logic to include both .json and .md files
  - Integrate ContentParserFactory to parse both formats
  - Ensure returned data structure remains consistent for existing components
  - Write tests to verify both formats are processed correctly
  - _Requirements: 2.1, 2.2, 4.2, 4.3_

- [x] 5. Update journal slug page to handle both content formats
  - Modify generateStaticParams to include both .json and .md files
  - Update content loading logic to use ContentParserFactory
  - Ensure metadata extraction works for both formats
  - Test that existing JSON posts continue to render correctly
  - _Requirements: 2.1, 2.2, 4.1, 4.2_

- [x] 6. Implement enhanced image syntax parser for markdown
  - Create parser for extended markdown image syntax with position, location, gear, and copyright attributes
  - Convert enhanced image syntax to existing ImageBlock component format
  - Write tests for various image syntax combinations
  - _Requirements: 1.1, 5.1, 5.2, 5.3_

- [x] 7. Create JSON to markdown migration utility
  - Implement converter function that transforms JSON content structure to markdown with YAML frontmatter
  - Handle all content block types (headers, paragraphs, images, code, blockquotes, info blocks)
  - Preserve all metadata including thumbnails, technologies, and timestamps
  - Write comprehensive tests for conversion accuracy
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 8. Add migration script with validation
  - Create command-line script that processes all JSON files in content directory
  - Implement backup mechanism before migration
  - Add validation to compare original JSON and converted markdown output
  - Include rollback functionality in case of issues
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 9. Implement custom callout syntax for info blocks
  - Add support for :::info callout syntax in markdown parser
  - Convert info callouts to existing info block component structure
  - Ensure styling remains consistent with JSON format info blocks
  - _Requirements: 1.1, 1.2_

- [x] 10. Add error handling and logging throughout the system
  - Implement comprehensive error handling for file processing, parsing, and migration
  - Add detailed logging for debugging and monitoring
  - Create fallback mechanisms for invalid content
  - Write tests for error scenarios
  - _Requirements: 2.1, 2.2, 3.1, 4.1_

- [x] 11. Update RSS feed generation to support both formats
  - Modify RSS route to use updated getHeaders function
  - Ensure RSS feed includes content from both JSON and markdown posts
  - Test RSS feed output with mixed content formats
  - _Requirements: 4.4_

- [x] 12. Create integration tests for the complete system
  - Write end-to-end tests that verify both formats work in journal listing and individual post pages
  - Test mixed content directory scenarios
  - Verify metadata extraction and display consistency
  - Test build process with both content formats
  - _Requirements: 2.1, 2.2, 4.1, 4.2, 4.3, 4.4_