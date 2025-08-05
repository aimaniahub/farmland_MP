# Netlify CMS Guide for Farmland Website

## Overview

This guide explains how to use the Netlify CMS admin interface to manage content for the Farmland website. The CMS provides a user-friendly interface for editing all website content without needing to touch code.

## Accessing the CMS

### Local Development
1. Start the development server: `npm run dev`
2. Navigate to: `http://localhost:5174/admin/`
3. For local development, you may need to run the CMS proxy server: `npm run cms`

### Production
1. Navigate to: `https://your-farmland-site.netlify.app/admin/`
2. Login with your Netlify Identity credentials

## Content Structure

The CMS is organized into several main sections:

### 📄 Pages
Manage all static page content:

- **🏠 Home Page**: Hero section, introduction, features, CTA sections
- **ℹ️ About Page**: Company story, team, mission/vision, impact metrics
- **🛠️ Services Page**: Service offerings, packages, testimonials
- **💼 Careers Page**: Job listings, company culture, recruitment process
- **❓ FAQ Page**: Frequently asked questions organized by categories
- **📺 Media Page**: News articles, press releases, events, videos
- **📞 Contact Page**: Office locations, contact information
- **🖼️ Gallery Page**: Image galleries organized by categories

### 🚜 Farms
Manage farm listings and details:
- Farm information (name, location, pricing)
- Images and features
- Availability and status
- Payment plans and amenities

### 📝 Blog Posts
Manage blog content:
- Create and edit blog posts
- Set categories and tags
- Upload featured images
- Control publication status

### 💬 Testimonials
Manage customer testimonials:
- Customer information and photos
- Testimonial text and ratings
- Featured testimonials

### 📰 Media Logos
Manage media publication logos and links

### ⚙️ Site Settings
Global site configuration:
- Contact information
- Social media links
- SEO settings
- Business information

## Content Management Best Practices

### Images
- **Recommended sizes**:
  - Hero images: 1920x1080px
  - Farm images: 800x600px
  - Team photos: 400x400px
  - Blog featured images: 1200x630px
- **Format**: Use JPG for photos, PNG for logos/graphics
- **Optimization**: Compress images before upload
- **Alt text**: Always provide descriptive alt text for accessibility

### Text Content
- **Headlines**: Keep concise and descriptive
- **Descriptions**: Write for both users and SEO
- **Call-to-actions**: Use action-oriented language
- **Consistency**: Maintain consistent tone and style

### SEO Optimization
- **Meta descriptions**: 150-160 characters
- **Keywords**: Use relevant keywords naturally
- **URLs**: Keep clean and descriptive
- **Images**: Include alt text and descriptive filenames

## Field Types Guide

### Basic Fields
- **String**: Single line text (titles, names)
- **Text**: Multi-line text (descriptions, addresses)
- **Number**: Numeric values (prices, quantities)
- **Boolean**: True/false toggles (featured, published)
- **DateTime**: Date and time picker
- **Select**: Dropdown with predefined options

### Advanced Fields
- **Image**: File upload with preview
- **File**: Document upload (PDFs, etc.)
- **List**: Repeatable items (features, amenities)
- **Object**: Grouped fields (contact info, social media)
- **Markdown**: Rich text editor for blog posts

### Special Widgets
- **Relation**: Link to other content
- **Hidden**: Fields not shown in editor
- **Code**: Syntax-highlighted code blocks

## Workflow

### Editorial Workflow
The CMS uses an editorial workflow with three states:
1. **Draft**: Work in progress
2. **In Review**: Ready for review
3. **Ready**: Approved and ready to publish

### Publishing Process
1. Create or edit content
2. Save as draft
3. Submit for review
4. Admin approves and publishes
5. Changes go live on the website

## Common Tasks

### Adding a New Farm
1. Go to "🚜 Farms" section
2. Click "New Farm" or edit existing
3. Fill in all required fields:
   - Basic information (name, location, price)
   - Upload images
   - Add features and amenities
   - Set availability status
4. Save and publish

### Creating a Blog Post
1. Go to "📝 Blog Posts" section
2. Click "New Post"
3. Add title, excerpt, and content
4. Select category and add tags
5. Upload featured image
6. Set publication date
7. Save as draft or publish

### Updating Page Content
1. Go to "📄 Pages" section
2. Select the page to edit
3. Modify content in the form fields
4. Preview changes if available
5. Save and publish

### Managing Testimonials
1. Go to "💬 Testimonials" section
2. Add customer information
3. Upload customer photo
4. Enter testimonial text
5. Set rating and featured status
6. Save changes

## Troubleshooting

### Common Issues

**CMS won't load**
- Check internet connection
- Clear browser cache
- Try incognito/private mode

**Images won't upload**
- Check file size (max 10MB)
- Ensure supported format (JPG, PNG, GIF)
- Check file permissions

**Changes not appearing**
- Wait for build to complete (2-5 minutes)
- Check if content is published
- Clear browser cache

**Login issues**
- Verify Netlify Identity is enabled
- Check email/password
- Contact administrator

### Getting Help
- Check this documentation first
- Contact the development team
- Submit issues through the project repository

## Security Notes

- Never share login credentials
- Use strong passwords
- Log out when finished
- Report suspicious activity immediately

## Backup and Recovery

- All content is version controlled in Git
- Previous versions can be restored
- Regular backups are maintained
- Contact admin for recovery assistance

---

For technical support or questions about this CMS, contact the development team.
