#!/usr/bin/env node

/**
 * Clean Build Script for Netlify Deployment
 * Ensures a clean build environment and checks for potential issues
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

function cleanDirectory(dirPath, description) {
  const fullPath = path.join(__dirname, '..', dirPath);
  if (fs.existsSync(fullPath)) {
    try {
      fs.rmSync(fullPath, { recursive: true, force: true });
      log(`✅ Cleaned ${description}`, 'green');
      return true;
    } catch (error) {
      log(`❌ Failed to clean ${description}: ${error.message}`, 'red');
      return false;
    }
  } else {
    log(`ℹ️  ${description} doesn't exist (already clean)`, 'cyan');
    return true;
  }
}

function checkForProblematicFiles() {
  log('\n🔍 Checking for problematic files...', 'blue');
  
  const projectRoot = path.join(__dirname, '..');
  let foundIssues = false;
  
  // Check for Vue.js files
  function checkDirectory(dir, relativePath = '') {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const relativeItemPath = path.join(relativePath, item);
        
        // Skip node_modules and other build directories
        if (['node_modules', 'dist', '.git', '.vite', '.cache'].includes(item)) {
          continue;
        }
        
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          checkDirectory(itemPath, relativeItemPath);
        } else if (item.endsWith('.vue')) {
          log(`⚠️  Found Vue.js file: ${relativeItemPath}`, 'yellow');
          foundIssues = true;
        } else if (item.includes('AddFarmerForm') || item.includes('AddFieldForm')) {
          log(`⚠️  Found problematic file: ${relativeItemPath}`, 'yellow');
          foundIssues = true;
        }
      }
    } catch (error) {
      // Ignore permission errors for system directories
    }
  }
  
  checkDirectory(projectRoot);
  
  if (!foundIssues) {
    log('✅ No problematic files found', 'green');
  }
  
  return !foundIssues;
}

function validatePackageJson() {
  log('\n📦 Validating package.json...', 'blue');
  
  const packagePath = path.join(__dirname, '../package.json');
  
  try {
    const packageContent = fs.readFileSync(packagePath, 'utf8');
    const packageJson = JSON.parse(packageContent);
    
    // Check for Vue.js dependencies
    const allDeps = {
      ...packageJson.dependencies || {},
      ...packageJson.devDependencies || {}
    };
    
    const vueDeps = Object.keys(allDeps).filter(dep => 
      dep.includes('vue') && !dep.includes('vite')
    );
    
    if (vueDeps.length > 0) {
      log(`⚠️  Found Vue.js dependencies: ${vueDeps.join(', ')}`, 'yellow');
      return false;
    }
    
    // Check for React dependencies
    if (allDeps.react && allDeps['react-dom']) {
      log('✅ React dependencies found', 'green');
    } else {
      log('❌ Missing React dependencies', 'red');
      return false;
    }
    
    // Check build script
    if (packageJson.scripts && packageJson.scripts.build) {
      log('✅ Build script found', 'green');
    } else {
      log('❌ Missing build script', 'red');
      return false;
    }
    
    return true;
  } catch (error) {
    log(`❌ Error reading package.json: ${error.message}`, 'red');
    return false;
  }
}

function validateViteConfig() {
  log('\n⚡ Validating Vite configuration...', 'blue');
  
  const viteConfigPath = path.join(__dirname, '../vite.config.ts');
  
  if (!fs.existsSync(viteConfigPath)) {
    log('❌ vite.config.ts not found', 'red');
    return false;
  }
  
  try {
    const configContent = fs.readFileSync(viteConfigPath, 'utf8');
    
    if (configContent.includes('@vitejs/plugin-react')) {
      log('✅ React plugin configured', 'green');
    } else {
      log('❌ React plugin not found in Vite config', 'red');
      return false;
    }
    
    if (configContent.includes('vue')) {
      log('⚠️  Vue.js references found in Vite config', 'yellow');
      return false;
    }
    
    return true;
  } catch (error) {
    log(`❌ Error reading vite.config.ts: ${error.message}`, 'red');
    return false;
  }
}

function main() {
  log('🧹 Clean Build Script for Netlify Deployment', 'bright');
  log('==============================================', 'bright');
  
  let allChecks = true;
  
  // Clean build artifacts
  log('\n🗑️  Cleaning build artifacts...', 'blue');
  allChecks &= cleanDirectory('dist', 'dist directory');
  allChecks &= cleanDirectory('node_modules/.vite', 'Vite cache');
  allChecks &= cleanDirectory('.cache', 'general cache');
  
  // Check for problematic files
  allChecks &= checkForProblematicFiles();
  
  // Validate configuration
  allChecks &= validatePackageJson();
  allChecks &= validateViteConfig();
  
  // Summary
  log('\n📊 Clean Build Summary:', 'magenta');
  if (allChecks) {
    log('🎉 All checks passed! Ready for clean build.', 'green');
    log('✅ Project is clean and ready for deployment.', 'green');
  } else {
    log('⚠️  Some issues were found that may cause build failures.', 'yellow');
    log('Please review the errors above and fix them.', 'yellow');
  }
  
  log('\n🚀 Next Steps:', 'magenta');
  log('1. Run: npm ci --legacy-peer-deps', 'cyan');
  log('2. Run: npx vite build', 'cyan');
  log('3. Deploy to Netlify', 'cyan');
  
  process.exit(allChecks ? 0 : 1);
}

// Run the script
main();
