# Bharatvan CMS Setup Guide

## Overview

This guide covers the comprehensive Netlify CMS (Decap CMS) setup for the Bharatvan farmland investment website. The CMS provides complete content management capabilities for all pages, components, and media assets.

## 🚀 Features Implemented

### ✅ Page Management
- **Home Page**: Complete hero, story, team, and CTA sections
- **About Page**: Mission, vision, team, and company information
- **Farms Page**: Individual farm listings with detailed information
- **Gallery Page**: Image galleries with metadata
- **Media Page**: Press releases, events, videos, and awards
- **Why Managed Farmland**: Educational content about managed farmland benefits
- **Farm Details**: Dynamic page configuration for individual farm pages

### ✅ Component Management
- **Statistics Section**: Configurable stats with icons and descriptions
- **ROI Section**: Investment projections and gallery images
- **Partners Section**: Partner logos and information
- **Amenities Section**: Farm facilities and infrastructure

### ✅ Advanced Section Management
- **Hero Sections**: Multiple templates for different page types
- **Feature Sections**: Grid layouts with customizable features
- **Testimonial Sections**: Various display styles (carousel, grid, single)
- **CTA Sections**: Call-to-action templates with different styles

### ✅ Enhanced Image Management
- **Comprehensive Upload**: Support for multiple image formats
- **Organized Folders**: Structured media organization by type
- **Responsive Images**: Desktop and mobile versions
- **Accessibility**: Alt text and captions for all images
- **Image Optimization**: Automatic compression and resizing

### ✅ Content Collections
- **Farms**: Complete farm property management
- **Blog Posts**: Full blog content with featured images
- **Testimonials**: Customer reviews with photos
- **Media Logos**: Publication logos and links
- **Gallery Images**: Organized photo galleries

## 🔧 Technical Implementation

### Authentication
- **Git Gateway**: Configured for GitHub authentication
- **Admin Access**: Available at `/admin` route
- **Local Development**: Local backend support for testing

### Media Management
- **Upload Folder**: `public/uploads/` with organized subfolders
- **File Types**: Images, documents, videos supported
- **Size Limits**: 15MB maximum file size
- **Optimization**: Automatic image compression

### Content Structure
- **JSON Files**: All content stored in `src/content/` directory
- **Type Safety**: Structured data with validation
- **Responsive**: Mobile-first design considerations

## 📁 Directory Structure

```
src/content/
├── components/           # Reusable component content
│   ├── statistics.json
│   ├── roi-section.json
│   ├── partners.json
│   └── amenities.json
├── sections/            # Section templates
│   ├── hero-sections.json
│   ├── feature-sections.json
│   ├── testimonial-sections.json
│   └── cta-sections.json
├── home.json           # Homepage content
├── about.json          # About page content
├── gallery.json        # Gallery content
├── media.json          # Media page content
├── why-managed-farmland.json  # Educational content
├── farm-details-config.json   # Farm details configuration
├── farms/              # Individual farm data
├── blog/               # Blog posts
├── testimonials/       # Customer testimonials
└── media-logos.json    # Media publication logos

public/uploads/         # Media files
├── hero/              # Hero/banner images
├── farms/             # Farm property photos
├── blog/              # Blog images
├── team/              # Team photos
├── testimonials/      # Customer photos
├── gallery/           # Gallery images
├── logos/             # Company/media logos
└── media/             # General media files
```

## 🎯 Usage Instructions

### Accessing the CMS
1. Navigate to `/admin` on your website
2. Authenticate using GitHub credentials
3. Use the intuitive interface to manage content

### Managing Pages
1. Go to "Pages" collection
2. Select the page you want to edit
3. Modify content using the visual editor
4. Preview changes before publishing

### Managing Components
1. Access "Components" collection
2. Edit reusable component content
3. Changes automatically reflect across all pages using the component

### Managing Images
1. Use the media library for all image uploads
2. Organize images in appropriate folders
3. Always add alt text for accessibility
4. Use appropriate image sizes for performance

### Managing Sections
1. Use "Page Sections" for advanced layouts
2. Create reusable section templates
3. Configure display settings and content

## 🔒 Security & Best Practices

### Authentication
- Git Gateway provides secure GitHub-based authentication
- Admin access is restricted to authorized users
- All changes are tracked through Git history

### Content Validation
- Required fields ensure content completeness
- Pattern validation for URLs and structured data
- Image format and size restrictions

### Performance
- Image optimization and compression
- Lazy loading for media content
- Efficient content structure

## 🚀 Deployment

### Prerequisites
- GitHub repository with proper permissions
- Netlify account connected to repository
- Git Gateway enabled in Netlify

### Configuration
1. Ensure `public/admin/config.yml` is properly configured
2. Set up Git Gateway in Netlify dashboard
3. Configure build settings for static site generation

### Testing
1. Test CMS functionality in local development
2. Verify image uploads and media management
3. Test content editing and preview functionality
4. Validate responsive design across devices

## 📞 Support

For technical support or questions about the CMS setup:
- Review this documentation
- Check the Decap CMS documentation
- Contact the development team

## 🔄 Updates and Maintenance

### Regular Tasks
- Monitor image storage usage
- Review and organize media files
- Update content regularly
- Test CMS functionality after updates

### Backup
- All content is version-controlled through Git
- Media files are stored in the repository
- Regular backups through Netlify

---

**Note**: This CMS setup maintains the existing responsive design and mobile-first approach while adding comprehensive content management capabilities.
