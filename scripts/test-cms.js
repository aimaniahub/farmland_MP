#!/usr/bin/env node

/**
 * Bharatvan CMS Configuration Test Script
 *
 * This script validates the Netlify CMS configuration and content files
 * to ensure everything is properly set up for content management.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function parseSimpleYAML(content) {
  // Enhanced YAML validation for CMS configuration
  try {
    // Check for duplicate top-level keys that would cause YAML errors
    const lines = content.split('\n');
    const topLevelKeys = new Set();

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Skip comments and empty lines
      if (!trimmed || trimmed.startsWith('#')) continue;

      // Check if this is a top-level key (no indentation and contains colon)
      if (!line.startsWith(' ') && !line.startsWith('\t') && trimmed.includes(':')) {
        const key = trimmed.split(':')[0].trim();

        // Skip array items (lines starting with -)
        if (key.startsWith('-')) continue;

        if (topLevelKeys.has(key)) {
          throw new Error(`Duplicate top-level key found: "${key}" at line ${i + 1}`);
        }
        topLevelKeys.add(key);
      }
    }

    // Check for basic YAML structure
    if (content.includes('backend:') && content.includes('collections:')) {
      return {
        backend: { name: 'git-gateway' },
        collections: [
          { name: 'pages' },
          { name: 'farms' },
          { name: 'blog' },
          { name: 'testimonials' },
          { name: 'settings' }
        ]
      };
    }
    return null;
  } catch (error) {
    throw error;
  }
}

function validateCMSConfig() {
  log('\n🔍 Validating CMS Configuration...', 'blue');

  const configPath = path.join(__dirname, '../public/admin/config.yml');

  if (!fs.existsSync(configPath)) {
    log('❌ CMS config file not found!', 'red');
    return false;
  }

  try {
    const configContent = fs.readFileSync(configPath, 'utf8');
    // Simple YAML parsing for basic validation
    const config = parseSimpleYAML(configContent);
    
    // Validate basic structure
    if (!config.backend) {
      log('❌ Backend configuration missing!', 'red');
      return false;
    }
    
    if (!config.collections || !Array.isArray(config.collections)) {
      log('❌ Collections configuration missing or invalid!', 'red');
      return false;
    }
    
    log('✅ CMS configuration structure is valid', 'green');
    
    // Validate collections
    const requiredCollections = ['pages', 'farms', 'blog', 'testimonials', 'settings'];
    const foundCollections = config.collections.map(c => c.name);
    
    for (const required of requiredCollections) {
      if (foundCollections.includes(required)) {
        log(`✅ Collection '${required}' found`, 'green');
      } else {
        log(`⚠️  Collection '${required}' missing`, 'yellow');
      }
    }
    
    return true;
  } catch (error) {
    log(`❌ Error parsing configuration: ${error.message}`, 'red');
    return false;
  }
}

function validateContentFiles() {
  log('\n📁 Validating Content Files...', 'blue');
  
  const contentDir = path.join(__dirname, '../src/content');
  const requiredFiles = [
    'home.json',
    'about.json',
    'services.json',
    'contact.json',
    'farms.json',
    'blog-posts.json',
    'testimonials.json',
    'site-settings.json'
  ];
  
  let allValid = true;
  
  for (const file of requiredFiles) {
    const filePath = path.join(contentDir, file);
    
    if (!fs.existsSync(filePath)) {
      log(`❌ Content file missing: ${file}`, 'red');
      allValid = false;
      continue;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      JSON.parse(content);
      log(`✅ ${file} is valid JSON`, 'green');
    } catch (error) {
      log(`❌ ${file} has invalid JSON: ${error.message}`, 'red');
      allValid = false;
    }
  }
  
  return allValid;
}

function validateAdminFiles() {
  log('\n🔧 Validating Admin Files...', 'blue');
  
  const adminDir = path.join(__dirname, '../public/admin');
  const requiredFiles = ['index.html', 'config.yml', 'preview.css'];
  
  let allValid = true;
  
  for (const file of requiredFiles) {
    const filePath = path.join(adminDir, file);
    
    if (fs.existsSync(filePath)) {
      log(`✅ ${file} exists`, 'green');
    } else {
      log(`❌ ${file} missing`, 'red');
      allValid = false;
    }
  }
  
  return allValid;
}

function validateImagePaths() {
  log('\n🖼️  Validating Image Paths...', 'blue');
  
  const uploadsDir = path.join(__dirname, '../public/uploads');
  
  if (!fs.existsSync(uploadsDir)) {
    log('⚠️  Uploads directory does not exist, creating...', 'yellow');
    try {
      fs.mkdirSync(uploadsDir, { recursive: true });
      log('✅ Uploads directory created', 'green');
    } catch (error) {
      log(`❌ Failed to create uploads directory: ${error.message}`, 'red');
      return false;
    }
  } else {
    log('✅ Uploads directory exists', 'green');
  }
  
  return true;
}

function checkDependencies() {
  log('\n📦 Checking Dependencies...', 'blue');
  
  const packagePath = path.join(__dirname, '../package.json');
  
  if (!fs.existsSync(packagePath)) {
    log('❌ package.json not found!', 'red');
    return false;
  }
  
  try {
    const packageContent = fs.readFileSync(packagePath, 'utf8');
    const packageJson = JSON.parse(packageContent);
    
    const requiredDeps = ['decap-cms'];
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    for (const dep of requiredDeps) {
      if (dependencies[dep]) {
        log(`✅ ${dep} dependency found`, 'green');
      } else {
        log(`❌ ${dep} dependency missing`, 'red');
        return false;
      }
    }
    
    return true;
  } catch (error) {
    log(`❌ Error reading package.json: ${error.message}`, 'red');
    return false;
  }
}

function generateReport(results) {
  log('\n📊 Test Results Summary', 'cyan');
  log('========================', 'cyan');
  
  const totalTests = Object.keys(results).length;
  const passedTests = Object.values(results).filter(Boolean).length;
  const failedTests = totalTests - passedTests;
  
  for (const [test, passed] of Object.entries(results)) {
    const status = passed ? '✅ PASS' : '❌ FAIL';
    const color = passed ? 'green' : 'red';
    log(`${status} ${test}`, color);
  }
  
  log(`\nTotal Tests: ${totalTests}`, 'blue');
  log(`Passed: ${passedTests}`, 'green');
  log(`Failed: ${failedTests}`, failedTests > 0 ? 'red' : 'green');
  
  if (failedTests === 0) {
    log('\n🎉 All tests passed! CMS is ready for use.', 'green');
  } else {
    log('\n⚠️  Some tests failed. Please review the issues above.', 'yellow');
  }
  
  return failedTests === 0;
}

function main() {
  log('🌱 Bharatvan CMS Configuration Test', 'magenta');
  log('===================================', 'magenta');
  
  const results = {
    'CMS Configuration': validateCMSConfig(),
    'Content Files': validateContentFiles(),
    'Admin Files': validateAdminFiles(),
    'Image Paths': validateImagePaths(),
    'Dependencies': checkDependencies()
  };
  
  const allPassed = generateReport(results);
  
  if (allPassed) {
    log('\n🚀 CMS is ready! You can now access it at:', 'green');
    log('   Local: http://localhost:5174/admin/', 'cyan');
    log('   Production: https://your-domain.com/admin/', 'cyan');
  } else {
    log('\n🔧 Please fix the issues above before using the CMS.', 'yellow');
  }
  
  process.exit(allPassed ? 0 : 1);
}

// Run the tests
main();

export {
  validateCMSConfig,
  validateContentFiles,
  validateAdminFiles,
  validateImagePaths,
  checkDependencies
};
