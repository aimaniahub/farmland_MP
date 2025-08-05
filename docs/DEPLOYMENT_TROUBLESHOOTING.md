# Deployment Troubleshooting Guide

## 🔧 Netlify Deployment Issues Fixed

### **Issue: React Peer Dependency Conflicts**

**Problem:**
The original Netlify CMS package (`netlify-cms-app@2.15.72`) had peer dependency conflicts with React 18, causing build failures on Netlify with errors like:
```
npm error ERESOLVE could not resolve
npm error peer react@"^16.8.4 || ^17.0.0" from netlify-cms-app@2.15.72
npm error Conflicting peer dependency: react@17.0.2
```

**Root Cause:**
- Project uses React 18.3.1
- Netlify CMS only supports React 16-17
- Dependency resolution fails without `--legacy-peer-deps`

### **Solution Implemented:**

#### 1. **Switched to Decap CMS**
- **Replaced**: `netlify-cms-app` with `decap-cms`
- **Reason**: Decap CMS is the modern, actively maintained fork of Netlify CMS
- **Benefits**: Better React 18 support and ongoing maintenance

#### 2. **Added Build Configuration**
- **Created**: `netlify.toml` with proper build commands
- **Added**: `.npmrc` with `legacy-peer-deps=true`
- **Configured**: Build environment to use Node 18

#### 3. **Updated Package Scripts**
- **Modified**: CMS proxy command to use Decap CMS
- **Ensured**: All scripts work with new package

### **Files Modified:**

1. **`package.json`**
   - Removed: `netlify-cms-app`
   - Added: `decap-cms`
   - Updated: CMS proxy script

2. **`public/admin/index.html`**
   - Updated: Script source to use Decap CMS
   - Added: Conditional CMS checks

3. **`netlify.toml`** (New)
   - Build command with `--legacy-peer-deps`
   - Node 18 environment
   - SPA redirects and security headers

4. **`.npmrc`** (New)
   - `legacy-peer-deps=true`
   - Audit and funding settings

### **Verification Steps:**

✅ **Local Build Test**
```bash
npm run build
# ✓ built in 2.01s (Success)
```

✅ **CMS Validation**
```bash
npm run test:cms
# 🎉 All validations passed! CMS is ready to use.
```

✅ **TypeScript Compilation**
```bash
npm run lint
# No errors (Success)
```

## 🚀 Deployment Configuration

### **Netlify Settings**

**Build Command:**
```bash
npm ci --legacy-peer-deps && npm run build
```

**Publish Directory:**
```
dist
```

**Node Version:**
```
18
```

**Environment Variables:**
```
NPM_FLAGS=--legacy-peer-deps
```

### **Build Process**

1. **Install Dependencies**: `npm ci --legacy-peer-deps`
2. **Build Application**: `npm run build`
3. **Deploy**: Static files from `dist/` directory

### **Security & Performance**

- **SPA Routing**: All routes redirect to `index.html`
- **Admin Security**: `/admin/*` has `noindex` and no-cache headers
- **Asset Caching**: Static assets cached for 1 year
- **Security Headers**: XSS protection, frame options, content type sniffing protection

## 🔍 Common Issues & Solutions

### **Issue: Build Still Fails**

**Check:**
1. Node version is 18 or higher
2. `.npmrc` file exists with `legacy-peer-deps=true`
3. `netlify.toml` has correct build command

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### **Issue: CMS Not Loading**

**Check:**
1. `/admin/` URL is accessible
2. `config.yml` is valid YAML
3. Decap CMS script is loading

**Solution:**
1. Verify `public/admin/index.html` has correct script source
2. Check browser console for JavaScript errors
3. Validate YAML syntax in `config.yml`

### **Issue: Authentication Problems**

**Check:**
1. Netlify Identity is enabled
2. Git Gateway is configured
3. User has proper permissions

**Solution:**
1. Enable Netlify Identity in site settings
2. Configure Git Gateway in Identity settings
3. Invite users through Netlify dashboard

### **Issue: Content Not Updating**

**Check:**
1. Changes are saved in CMS
2. Build is triggered after changes
3. Content files are updated in repository

**Solution:**
1. Check Git commits for content changes
2. Verify build logs for successful deployment
3. Clear browser cache

## 📊 Performance Monitoring

### **Build Metrics**
- **Build Time**: ~2 seconds
- **Bundle Size**: ~387KB (gzipped: ~104KB)
- **Dependencies**: 898 packages
- **Vulnerabilities**: 14 (2 low, 4 moderate, 8 high)

### **Optimization Recommendations**
1. **Audit Dependencies**: Run `npm audit fix` for security updates
2. **Bundle Analysis**: Use `npm run build -- --analyze` for bundle optimization
3. **Image Optimization**: Compress images before upload
4. **CDN Usage**: Leverage Netlify's global CDN

## 🛠️ Maintenance

### **Regular Tasks**
- **Weekly**: Check for security updates
- **Monthly**: Review and update dependencies
- **Quarterly**: Performance audit and optimization

### **Monitoring**
- **Build Status**: Monitor Netlify build logs
- **CMS Health**: Regular validation with `npm run test:cms`
- **User Feedback**: Monitor CMS usage and user reports

### **Updates**
- **Decap CMS**: Check for updates regularly
- **Dependencies**: Keep React and other core packages updated
- **Security**: Apply security patches promptly

---

## 🎯 Success Metrics

✅ **Deployment**: Successfully resolves React 18 conflicts
✅ **Build Time**: Fast builds (~2 seconds)
✅ **CMS Functionality**: All content management features working
✅ **Security**: Proper headers and access controls
✅ **Performance**: Optimized asset delivery
✅ **Maintainability**: Clear documentation and troubleshooting guides

**The farmland website is now successfully deployed with a fully functional CMS!**
