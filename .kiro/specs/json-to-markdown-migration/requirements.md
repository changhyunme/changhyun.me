# Requirements Document

## Introduction

This feature involves migrating the current JSON-based blog post system to a markdown-based content management system. The current system stores blog posts as JSON files in `app/journal/content/` and this migration will enable more natural content authoring while maintaining all existing functionality and data integrity.

## Requirements

### Requirement 1

**User Story:** As a content author, I want to write blog posts in markdown format, so that I can use familiar markdown syntax for formatting and have a more natural writing experience.

#### Acceptance Criteria

1. WHEN a markdown file is created in the content directory THEN the system SHALL parse and display the content correctly
2. WHEN markdown content includes standard formatting (headers, lists, links, images) THEN the system SHALL render them properly
3. WHEN markdown content includes frontmatter metadata THEN the system SHALL extract and use the metadata for post properties

### Requirement 2

**User Story:** As a developer, I want to maintain backward compatibility with existing JSON posts, so that existing content continues to work during and after the migration.

#### Acceptance Criteria

1. WHEN the system encounters existing JSON files THEN it SHALL continue to parse and display them correctly
2. WHEN both JSON and markdown files exist THEN the system SHALL handle both formats seamlessly
3. IF a JSON file has the same slug as a markdown file THEN the system SHALL prioritize one format consistently

### Requirement 3

**User Story:** As a content manager, I want to migrate existing JSON posts to markdown format, so that all content uses the same authoring system.

#### Acceptance Criteria

1. WHEN migration is triggered THEN the system SHALL convert JSON content to markdown format
2. WHEN converting JSON to markdown THEN the system SHALL preserve all metadata (title, date, tags, etc.)
3. WHEN converting JSON content THEN the system SHALL maintain proper formatting and structure
4. WHEN migration is complete THEN the system SHALL validate that converted content displays identically

### Requirement 4

**User Story:** As a developer, I want the markdown parsing system to integrate with the existing journal routing and display logic, so that the user experience remains consistent.

#### Acceptance Criteria

1. WHEN markdown posts are accessed via existing routes THEN they SHALL display using the same layout and styling
2. WHEN the journal listing page loads THEN it SHALL show both JSON and markdown posts in the correct order
3. WHEN post metadata is needed for listings THEN the system SHALL extract it from both JSON and markdown sources
4. WHEN RSS feed is generated THEN it SHALL include content from both formats

### Requirement 5

**User Story:** As a content author, I want image and media handling to work seamlessly with markdown, so that I can include images and other media in my posts naturally.

#### Acceptance Criteria

1. WHEN markdown content includes image references THEN the system SHALL resolve and display them correctly
2. WHEN images are referenced with relative paths THEN the system SHALL resolve them relative to the content directory
3. WHEN markdown includes media that exists in the current thumbs system THEN it SHALL integrate properly