#!/usr/bin/env node

/**
 * Netlify CMS Configuration Validator
 * Validates the CMS configuration and content structure
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateCMSConfig() {
  log('🔍 Validating Netlify CMS Configuration...', 'blue');
  
  const configPath = path.join(__dirname, '../public/admin/config.yml');
  
  if (!fs.existsSync(configPath)) {
    log('❌ CMS config file not found!', 'red');
    return false;
  }
  
  try {
    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(configContent);
    
    // Validate basic structure
    if (!config.backend) {
      log('❌ Backend configuration missing!', 'red');
      return false;
    }
    
    if (!config.collections || !Array.isArray(config.collections)) {
      log('❌ Collections configuration missing or invalid!', 'red');
      return false;
    }
    
    log('✅ CMS configuration is valid YAML', 'green');
    log(`✅ Found ${config.collections.length} collections`, 'green');
    
    // Validate collections
    config.collections.forEach((collection, index) => {
      if (!collection.name || !collection.label) {
        log(`❌ Collection ${index} missing name or label`, 'red');
        return false;
      }
      log(`  ✅ Collection: ${collection.label}`, 'green');
    });
    
    return true;
  } catch (error) {
    log(`❌ Invalid YAML configuration: ${error.message}`, 'red');
    return false;
  }
}

function validateContentFiles() {
  log('\n🔍 Validating Content Files...', 'blue');
  
  const contentDir = path.join(__dirname, '../src/content');
  const requiredFiles = [
    'home.json',
    'about.json',
    'services.json',
    'careers.json',
    'faq.json',
    'media.json',
    'contact.json',
    'gallery.json',
    'farms.json',
    'blog-posts.json',
    'testimonials.json',
    'media-logos.json',
    'site-settings.json'
  ];
  
  let allValid = true;
  
  requiredFiles.forEach(file => {
    const filePath = path.join(contentDir, file);
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        JSON.parse(content);
        log(`  ✅ ${file}`, 'green');
      } catch (error) {
        log(`  ❌ ${file} - Invalid JSON: ${error.message}`, 'red');
        allValid = false;
      }
    } else {
      log(`  ⚠️  ${file} - File not found`, 'yellow');
    }
  });
  
  return allValid;
}

function validateMediaFolders() {
  log('\n🔍 Validating Media Folders...', 'blue');
  
  const uploadsDir = path.join(__dirname, '../public/uploads');
  const requiredFolders = [
    'farms',
    'blog',
    'team',
    'gallery',
    'media',
    'testimonials',
    'logos'
  ];
  
  if (!fs.existsSync(uploadsDir)) {
    log('❌ Uploads directory not found!', 'red');
    return false;
  }
  
  requiredFolders.forEach(folder => {
    const folderPath = path.join(uploadsDir, folder);
    if (fs.existsSync(folderPath)) {
      log(`  ✅ ${folder}/`, 'green');
    } else {
      log(`  ⚠️  ${folder}/ - Folder not found`, 'yellow');
    }
  });
  
  return true;
}

function validateAdminFiles() {
  log('\n🔍 Validating Admin Files...', 'blue');
  
  const adminDir = path.join(__dirname, '../public/admin');
  const requiredFiles = [
    'index.html',
    'config.yml',
    'preview.css'
  ];
  
  let allValid = true;
  
  requiredFiles.forEach(file => {
    const filePath = path.join(adminDir, file);
    if (fs.existsSync(filePath)) {
      log(`  ✅ ${file}`, 'green');
    } else {
      log(`  ❌ ${file} - File not found`, 'red');
      allValid = false;
    }
  });
  
  return allValid;
}

function generateReport() {
  log('\n📊 Validation Report', 'blue');
  log('==================', 'blue');
  
  const results = {
    config: validateCMSConfig(),
    content: validateContentFiles(),
    media: validateMediaFolders(),
    admin: validateAdminFiles()
  };
  
  const allPassed = Object.values(results).every(result => result);
  
  if (allPassed) {
    log('\n🎉 All validations passed! CMS is ready to use.', 'green');
  } else {
    log('\n⚠️  Some validations failed. Please check the issues above.', 'yellow');
  }
  
  return allPassed;
}

// Run validation
generateReport();

export {
  validateCMSConfig,
  validateContentFiles,
  validateMediaFolders,
  validateAdminFiles,
  generateReport
};
