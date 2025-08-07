# Bharatvan CMS Troubleshooting Guide

## 🔧 Common Issues and Solutions

### YAML Configuration Errors

#### Error: "Map keys must be unique"
**Problem**: Duplicate keys in the YAML configuration file.

**Solution**:
1. Run the validation script: `npm run test:cms`
2. Look for duplicate top-level keys in `public/admin/config.yml`
3. Remove or rename duplicate keys
4. Common duplicates: `local_backend`, `display_url`, `site_url`

**Example Fix**:
```yaml
# ❌ Wrong - duplicate keys
backend:
  name: git-gateway
local_backend: true
# ... other config ...
local_backend: true  # This causes the error

# ✅ Correct - single declaration
backend:
  name: git-gateway
local_backend: true
# ... other config ...
```

#### Error: "Invalid YAML syntax"
**Problem**: Incorrect YAML formatting.

**Common Causes**:
- Inconsistent indentation (mixing spaces and tabs)
- Missing colons after keys
- Incorrect list formatting
- Unescaped special characters

**Solution**:
1. Use consistent 2-space indentation
2. Ensure all keys have colons
3. Validate YAML syntax online or with tools
4. Run `npm run test:cms` for validation

### CMS Loading Issues

#### Error: "CMS won't load"
**Possible Causes**:
- Development server not running
- Incorrect URL
- JavaScript errors
- Network connectivity issues

**Solutions**:
1. Ensure dev server is running: `npm run dev`
2. Check URL: `http://localhost:5174/admin/`
3. Clear browser cache and cookies
4. Check browser console for JavaScript errors
5. Try incognito/private browsing mode

#### Error: "Authentication failed"
**Problem**: Cannot log into CMS.

**Solutions**:
1. **Local Development**: Ensure `local_backend: true` is set
2. **Production**: Check Netlify Identity configuration
3. **Git Gateway**: Verify repository permissions
4. Clear browser storage and try again

### Content Management Issues

#### Error: "Content not saving"
**Possible Causes**:
- Required fields missing
- Field validation errors
- Network connectivity issues
- File permission problems

**Solutions**:
1. Check all required fields are filled
2. Verify field formats (email, phone, URL)
3. Check character limits on text fields
4. Ensure stable internet connection
5. Try refreshing the page and saving again

#### Error: "Images won't upload"
**Common Causes**:
- File size too large (>10MB)
- Unsupported file format
- Network issues
- Upload directory permissions

**Solutions**:
1. Compress images before uploading
2. Use supported formats: JPG, PNG, GIF, WebP, SVG
3. Check file size limits
4. Verify upload directory exists: `public/uploads/`
5. Try uploading smaller files first

### Preview and Display Issues

#### Error: "Preview not working"
**Problem**: Content preview doesn't display correctly.

**Solutions**:
1. Check preview CSS file: `public/admin/preview.css`
2. Verify preview path configuration
3. Clear browser cache
4. Check for JavaScript console errors
5. Ensure content format is correct

#### Error: "Changes not reflecting on website"
**Problem**: Published content doesn't appear on live site.

**Solutions**:
1. Verify content is published (not draft)
2. Check if using editorial workflow
3. Ensure build process includes content files
4. Clear CDN cache if using one
5. Check deployment logs for errors

### Validation and Testing

#### Running Diagnostics

Use the built-in validation script:
```bash
npm run test:cms
```

This checks:
- ✅ CMS configuration validity
- ✅ Content file structure
- ✅ Admin file presence
- ✅ Upload directory setup
- ✅ Required dependencies

#### Manual Validation Steps

1. **Configuration Check**:
   - Open `public/admin/config.yml`
   - Verify no duplicate keys
   - Check indentation consistency
   - Validate required sections exist

2. **Content Files Check**:
   - Ensure all JSON files in `src/content/` are valid
   - Check for missing required fields
   - Verify data structure matches CMS config

3. **Dependencies Check**:
   - Verify `decap-cms` is installed
   - Check package.json for required scripts
   - Ensure development server runs correctly

### Performance Issues

#### Error: "CMS loading slowly"
**Causes**:
- Large content files
- Many images in media library
- Network connectivity
- Browser performance

**Solutions**:
1. Optimize content file sizes
2. Compress images before uploading
3. Clear browser cache
4. Close unnecessary browser tabs
5. Use modern browser versions

#### Error: "Build failures"
**Problem**: Site doesn't build after CMS changes.

**Solutions**:
1. Check build logs for specific errors
2. Verify JSON syntax in content files
3. Ensure all required fields are present
4. Check for circular references in content
5. Validate image paths and file existence

### Getting Help

#### Self-Diagnosis Steps
1. Run `npm run test:cms` for automated validation
2. Check browser console for JavaScript errors
3. Verify network connectivity
4. Try different browsers or incognito mode
5. Check recent changes in Git history

#### When to Contact Support
- Persistent authentication issues
- Configuration errors you can't resolve
- Data corruption or loss
- Performance problems affecting productivity
- Need for additional CMS features

#### Support Information
- **Email**: bharatvanfarming@gmail.com
- **Phone**: 8819855558
- **Documentation**: Check `/docs` folder
- **Validation**: Run `npm run test:cms`

### Best Practices for Prevention

#### Configuration Management
- Always validate YAML before committing changes
- Use consistent indentation (2 spaces)
- Comment complex configurations
- Keep backups of working configurations

#### Content Management
- Save work frequently
- Use descriptive filenames for images
- Follow naming conventions for content
- Test changes in preview before publishing

#### Development Workflow
- Run validation tests before deploying
- Use version control for all changes
- Test CMS functionality after updates
- Monitor error logs regularly

---

**Last Updated**: December 2024
**Next Review**: March 2025
