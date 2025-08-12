#!/usr/bin/env node

/**
 * Authentication Testing Script for Netlify CMS
 * Tests the authentication configuration and provides debugging information
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
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

function checkFile(filePath, description) {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    log(`✅ ${description} exists`, 'green');
    return true;
  } else {
    log(`❌ ${description} missing`, 'red');
    return false;
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

    // Simple string-based validation (since we don't have yaml parser)
    if (configContent.includes('name: git-gateway')) {
      log('✅ Git Gateway backend configured', 'green');
    } else {
      log('❌ Git Gateway backend not properly configured', 'red');
    }

    // Check authentication settings
    if (configContent.includes('identity_url:')) {
      log('✅ Netlify Identity URL configured', 'green');
    } else {
      log('⚠️  Netlify Identity URL not explicitly set (will use default)', 'yellow');
    }

    // Check auth providers
    if (configContent.includes('auth:') && configContent.includes('providers:')) {
      log('✅ Authentication providers configured', 'green');
      if (configContent.includes('name: "github"')) {
        log('   - GitHub provider configured', 'cyan');
      }
      if (configContent.includes('name: "google"')) {
        log('   - Google provider configured', 'cyan');
      }
    } else {
      log('⚠️  No explicit auth providers configured (will use Netlify Identity defaults)', 'yellow');
    }

    return true;
  } catch (error) {
    log(`❌ Error reading CMS config: ${error.message}`, 'red');
    return false;
  }
}

function validateNetlifyConfig() {
  log('\n🔍 Validating Netlify Configuration...', 'blue');
  
  const netlifyPath = path.join(__dirname, '../netlify.toml');
  
  if (!fs.existsSync(netlifyPath)) {
    log('❌ netlify.toml not found!', 'red');
    return false;
  }

  try {
    const content = fs.readFileSync(netlifyPath, 'utf8');
    
    // Check for Identity configuration
    if (content.includes('[identity]')) {
      log('✅ Netlify Identity configuration found', 'green');
    } else {
      log('⚠️  Netlify Identity configuration not found in netlify.toml', 'yellow');
    }
    
    // Check for Git Gateway configuration
    if (content.includes('[git_gateway]')) {
      log('✅ Git Gateway configuration found', 'green');
    } else {
      log('⚠️  Git Gateway configuration not found in netlify.toml', 'yellow');
    }
    
    // Check for admin security headers
    if (content.includes('/admin/*')) {
      log('✅ Admin security headers configured', 'green');
    } else {
      log('⚠️  Admin security headers not configured', 'yellow');
    }
    
    return true;
  } catch (error) {
    log(`❌ Error reading netlify.toml: ${error.message}`, 'red');
    return false;
  }
}

function validateHTMLFiles() {
  log('\n🔍 Validating HTML Files...', 'blue');
  
  let allValid = true;
  
  // Check main index.html
  const indexPath = path.join(__dirname, '../index.html');
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    if (content.includes('netlify-identity-widget.js')) {
      log('✅ Netlify Identity widget included in main HTML', 'green');
    } else {
      log('❌ Netlify Identity widget missing from main HTML', 'red');
      allValid = false;
    }
  }
  
  // Check admin index.html
  const adminPath = path.join(__dirname, '../public/admin/index.html');
  if (fs.existsSync(adminPath)) {
    const content = fs.readFileSync(adminPath, 'utf8');
    if (content.includes('netlify-identity-widget.js')) {
      log('✅ Netlify Identity widget included in admin HTML', 'green');
    } else {
      log('❌ Netlify Identity widget missing from admin HTML', 'red');
      allValid = false;
    }
    
    if (content.includes('decap-cms')) {
      log('✅ Decap CMS script included', 'green');
    } else {
      log('❌ Decap CMS script missing', 'red');
      allValid = false;
    }
  }
  
  return allValid;
}

function printSetupInstructions() {
  log('\n📋 Setup Instructions:', 'magenta');
  log('1. Deploy your site to Netlify', 'cyan');
  log('2. Enable Netlify Identity in your site settings', 'cyan');
  log('3. Configure GitHub OAuth in GitHub Developer Settings', 'cyan');
  log('4. Configure Google OAuth in Google Cloud Console', 'cyan');
  log('5. Add OAuth credentials to Netlify Identity settings', 'cyan');
  log('6. Enable Git Gateway in Netlify Identity settings', 'cyan');
  log('7. Invite users through Netlify Identity', 'cyan');
  log('8. Test authentication at /admin/', 'cyan');
  
  log('\n📖 For detailed instructions, see:', 'magenta');
  log('   docs/AUTHENTICATION_SETUP.md', 'cyan');
}

function main() {
  log('🔐 Netlify CMS Authentication Test', 'bright');
  log('=====================================', 'bright');
  
  let allChecks = true;
  
  // File existence checks
  log('\n📁 Checking Required Files...', 'blue');
  allChecks &= checkFile('public/admin/config.yml', 'CMS Configuration');
  allChecks &= checkFile('public/admin/index.html', 'Admin Interface');
  allChecks &= checkFile('netlify.toml', 'Netlify Configuration');
  allChecks &= checkFile('index.html', 'Main HTML File');
  
  // Configuration validation
  allChecks &= validateCMSConfig();
  allChecks &= validateNetlifyConfig();
  allChecks &= validateHTMLFiles();
  
  // Summary
  log('\n📊 Test Summary:', 'magenta');
  if (allChecks) {
    log('🎉 All authentication configuration checks passed!', 'green');
    log('✅ Your CMS is ready for authentication setup.', 'green');
  } else {
    log('⚠️  Some configuration issues were found.', 'yellow');
    log('Please review the errors above and fix them.', 'yellow');
  }
  
  printSetupInstructions();
  
  log('\n🚀 Next Steps:', 'magenta');
  log('1. Run: npm run build', 'cyan');
  log('2. Deploy to Netlify', 'cyan');
  log('3. Follow the authentication setup guide', 'cyan');
  log('4. Test at: https://your-site.netlify.app/admin/', 'cyan');
}

// Run the test
main();
