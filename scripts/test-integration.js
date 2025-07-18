#!/usr/bin/env node

import { getHeaders } from '../app/journal/getHeaders.js';
import { ContentParserFactory } from '../lib/content-parsers.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Integration test suite for the JSON to Markdown migration system
 */
class IntegrationTester {
  constructor() {
    this.contentDir = path.join(__dirname, '..', 'app', 'journal', 'content');
    this.results = {
      passed: 0,
      failed: 0,
      tests: []
    };
  }

  /**
   * Run a test and record the result
   */
  async runTest(testName, testFn) {
    console.log(`🧪 Running: ${testName}`);
    
    try {
      await testFn();
      console.log(`✅ PASSED: ${testName}`);
      this.results.passed++;
      this.results.tests.push({ name: testName, status: 'PASSED' });
    } catch (error) {
      console.error(`❌ FAILED: ${testName} - ${error.message}`);
      this.results.failed++;
      this.results.tests.push({ name: testName, status: 'FAILED', error: error.message });
    }
  }

  /**
   * Test that getHeaders returns both JSON and markdown files
   */
  async testGetHeadersBothFormats() {
    const headers = await getHeaders();
    
    if (!Array.isArray(headers)) {
      throw new Error('getHeaders should return an array');
    }

    if (headers.length === 0) {
      throw new Error('getHeaders should return at least one post');
    }

    // Check for both formats
    const jsonPosts = headers.filter(h => h.format === 'json');
    const markdownPosts = headers.filter(h => h.format === 'markdown');

    console.log(`   Found ${jsonPosts.length} JSON posts and ${markdownPosts.length} markdown posts`);

    // Verify required fields exist
    for (const post of headers) {
      if (!post.title) throw new Error(`Post missing title: ${post.slug}`);
      if (!post.slug) throw new Error(`Post missing slug`);
      if (!post.datetime) throw new Error(`Post missing datetime: ${post.slug}`);
      if (!post.format) throw new Error(`Post missing format: ${post.slug}`);
    }
  }

  /**
   * Test that individual parsers work correctly
   */
  async testIndividualParsers() {
    const files = await fs.readdir(this.contentDir);
    const contentFiles = files.filter(f => f.endsWith('.json') || f.endsWith('.md'));

    for (const file of contentFiles) {
      if (file.startsWith('.')) continue;

      const filePath = path.join(this.contentDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      
      const parser = ContentParserFactory.createParser(file);
      const parsed = await parser.parse(file, content);

      // Verify parsed content has required fields
      if (!parsed.title) throw new Error(`Parser failed to extract title from ${file}`);
      if (!parsed.slug) throw new Error(`Parser failed to extract slug from ${file}`);
      if (!parsed.content) throw new Error(`Parser failed to extract content from ${file}`);
      if (!parsed.format) throw new Error(`Parser failed to set format for ${file}`);

      console.log(`   ✓ Successfully parsed ${file} (${parsed.format})`);
    }
  }

  /**
   * Test that content blocks are properly structured
   */
  async testContentBlockStructure() {
    const headers = await getHeaders();

    for (const post of headers) {
      if (!Array.isArray(post.content)) {
        throw new Error(`Content should be an array for post: ${post.slug}`);
      }

      for (const block of post.content) {
        if (!block.type) {
          throw new Error(`Content block missing type in post: ${post.slug}`);
        }

        // Verify block types are valid
        const validTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'image', 'code', 'blockquote', 'info', 'clear'];
        if (!validTypes.includes(block.type)) {
          throw new Error(`Invalid block type '${block.type}' in post: ${post.slug}`);
        }
      }

      console.log(`   ✓ Content structure valid for ${post.slug} (${post.content.length} blocks)`);
    }
  }

  /**
   * Test that metadata is properly extracted
   */
  async testMetadataExtraction() {
    const headers = await getHeaders();

    for (const post of headers) {
      // Check required metadata
      if (typeof post.title !== 'string') {
        throw new Error(`Invalid title type for post: ${post.slug}`);
      }

      if (typeof post.description !== 'string') {
        throw new Error(`Invalid description type for post: ${post.slug}`);
      }

      if (!Array.isArray(post.keywords)) {
        throw new Error(`Keywords should be an array for post: ${post.slug}`);
      }

      // Check datetime format
      const date = new Date(post.datetime);
      if (isNaN(date.getTime())) {
        throw new Error(`Invalid datetime format for post: ${post.slug}`);
      }

      console.log(`   ✓ Metadata valid for ${post.slug}`);
    }
  }

  /**
   * Test that posts are sorted by date (newest first)
   */
  async testPostSorting() {
    const headers = await getHeaders();

    if (headers.length < 2) {
      console.log('   ⚠ Skipping sort test - need at least 2 posts');
      return;
    }

    for (let i = 0; i < headers.length - 1; i++) {
      const currentDate = new Date(headers[i].datetime);
      const nextDate = new Date(headers[i + 1].datetime);

      if (currentDate < nextDate) {
        throw new Error(`Posts not sorted correctly: ${headers[i].slug} should come after ${headers[i + 1].slug}`);
      }
    }

    console.log(`   ✓ Posts correctly sorted by date (${headers.length} posts)`);
  }

  /**
   * Test that image blocks have proper structure
   */
  async testImageBlocks() {
    const headers = await getHeaders();

    for (const post of headers) {
      const imageBlocks = post.content.filter(block => block.type === 'image');

      for (const imageBlock of imageBlocks) {
        if (!imageBlock.src) {
          throw new Error(`Image block missing src in post: ${post.slug}`);
        }

        if (!imageBlock.alt) {
          console.warn(`   ⚠ Image block missing alt text in post: ${post.slug}`);
        }

        // Check if position is valid (if present)
        if (imageBlock.position && !['left', 'right', 'full'].includes(imageBlock.position)) {
          throw new Error(`Invalid image position '${imageBlock.position}' in post: ${post.slug}`);
        }
      }

      if (imageBlocks.length > 0) {
        console.log(`   ✓ Image blocks valid for ${post.slug} (${imageBlocks.length} images)`);
      }
    }
  }

  /**
   * Run all tests
   */
  async runAllTests() {
    console.log('🚀 Starting Integration Tests');
    console.log('============================');
    console.log('');

    await this.runTest('getHeaders returns both JSON and markdown files', () => this.testGetHeadersBothFormats());
    await this.runTest('Individual parsers work correctly', () => this.testIndividualParsers());
    await this.runTest('Content blocks have proper structure', () => this.testContentBlockStructure());
    await this.runTest('Metadata is properly extracted', () => this.testMetadataExtraction());
    await this.runTest('Posts are sorted by date', () => this.testPostSorting());
    await this.runTest('Image blocks have proper structure', () => this.testImageBlocks());

    console.log('');
    console.log('📊 Test Results');
    console.log('===============');
    console.log(`✅ Passed: ${this.results.passed}`);
    console.log(`❌ Failed: ${this.results.failed}`);
    console.log(`📈 Total: ${this.results.passed + this.results.failed}`);

    if (this.results.failed > 0) {
      console.log('');
      console.log('❌ Failed Tests:');
      this.results.tests
        .filter(t => t.status === 'FAILED')
        .forEach(t => console.log(`   • ${t.name}: ${t.error}`));
    }

    console.log('');
    if (this.results.failed === 0) {
      console.log('🎉 All tests passed! The migration system is working correctly.');
    } else {
      console.log('💥 Some tests failed. Please review the errors above.');
      process.exit(1);
    }
  }
}

// Run the tests
const tester = new IntegrationTester();
tester.runAllTests().catch(error => {
  console.error('💥 Test suite failed:', error);
  process.exit(1);
});