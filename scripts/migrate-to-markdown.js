#!/usr/bin/env node

import { BatchMigrator } from '../lib/migration-utils.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Migration script for converting JSON blog posts to Markdown
 */
async function main() {
  const args = process.argv.slice(2);
  const options = {
    backup: true,
    validate: true,
    dryRun: false
  };

  // Parse command line arguments
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--no-backup':
        options.backup = false;
        break;
      case '--no-validate':
        options.validate = false;
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--help':
      case '-h':
        showHelp();
        process.exit(0);
      default:
        console.error(`Unknown option: ${args[i]}`);
        showHelp();
        process.exit(1);
    }
  }

  console.log('🚀 JSON to Markdown Migration Tool');
  console.log('=====================================');
  
  if (options.dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified');
  }

  const contentDir = path.join(__dirname, '..', 'app', 'journal', 'content');
  console.log(`📁 Content directory: ${contentDir}`);
  console.log(`⚙️  Options:`, options);
  console.log('');

  try {
    const migrator = new BatchMigrator();
    const results = await migrator.migrateDirectory(contentDir, options);

    console.log('');
    console.log('📊 Migration Results:');
    console.log('====================');
    console.log(`✅ Successfully converted: ${results.success.length} files`);
    console.log(`❌ Failed conversions: ${results.errors.length} files`);

    if (results.success.length > 0) {
      console.log('');
      console.log('✅ Successful conversions:');
      results.success.forEach(file => console.log(`   • ${file}`));
    }

    if (results.errors.length > 0) {
      console.log('');
      console.log('❌ Failed conversions:');
      results.errors.forEach(({ file, error }) => {
        console.log(`   • ${file}: ${error}`);
      });
    }

    if (options.validate && results.validationResults.length > 0) {
      console.log('');
      console.log('🔍 Validation Results:');
      console.log('======================');
      
      const validFiles = results.validationResults.filter(r => r.valid);
      const invalidFiles = results.validationResults.filter(r => !r.valid);
      const warningFiles = results.validationResults.filter(r => r.warnings.length > 0);

      console.log(`✅ Valid conversions: ${validFiles.length}`);
      console.log(`❌ Invalid conversions: ${invalidFiles.length}`);
      console.log(`⚠️  Conversions with warnings: ${warningFiles.length}`);

      if (invalidFiles.length > 0) {
        console.log('');
        console.log('❌ Validation errors:');
        invalidFiles.forEach(({ file, errors }) => {
          console.log(`   • ${file}:`);
          errors.forEach(error => console.log(`     - ${error}`));
        });
      }

      if (warningFiles.length > 0) {
        console.log('');
        console.log('⚠️  Validation warnings:');
        warningFiles.forEach(({ file, warnings }) => {
          console.log(`   • ${file}:`);
          warnings.forEach(warning => console.log(`     - ${warning}`));
        });
      }
    }

    console.log('');
    if (options.dryRun) {
      console.log('🔍 Dry run completed. Use without --dry-run to perform actual migration.');
    } else {
      console.log('✨ Migration completed!');
      
      if (results.success.length > 0) {
        console.log('');
        console.log('📝 Next steps:');
        console.log('   1. Test your site: npm run dev');
        console.log('   2. Verify converted content displays correctly');
        console.log('   3. Remove JSON files when satisfied with conversion');
        
        if (options.backup) {
          console.log('   4. Remove backup directory when no longer needed');
        }
      }
    }

    // Exit with error code if there were failures
    if (results.errors.length > 0) {
      process.exit(1);
    }

  } catch (error) {
    console.error('💥 Migration failed:', error.message);
    process.exit(1);
  }
}

function showHelp() {
  console.log(`
🚀 JSON to Markdown Migration Tool

Usage: node scripts/migrate-to-markdown.js [options]

Options:
  --dry-run       Preview changes without modifying files
  --no-backup     Skip creating backup of original JSON files
  --no-validate   Skip validation of converted content
  -h, --help      Show this help message

Examples:
  node scripts/migrate-to-markdown.js                    # Full migration with backup and validation
  node scripts/migrate-to-markdown.js --dry-run          # Preview changes only
  node scripts/migrate-to-markdown.js --no-backup        # Migrate without backup
  node scripts/migrate-to-markdown.js --no-validate      # Migrate without validation

The script will:
1. Find all JSON files in app/journal/content/
2. Create backup copies (unless --no-backup)
3. Convert each JSON file to Markdown format
4. Validate conversions (unless --no-validate)
5. Report results and next steps
`);
}

// Run the migration
main().catch(error => {
  console.error('💥 Unexpected error:', error);
  process.exit(1);
});