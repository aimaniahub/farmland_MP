# Media Management Guide for Farmland CMS

## Overview

This guide covers best practices for managing images, videos, and other media assets through the Netlify CMS interface.

## Folder Structure

The media library is organized into the following folders:

```
public/uploads/
├── farms/          # Farm property images
├── blog/           # Blog post featured images
├── team/           # Team member photos
├── gallery/        # Gallery images
├── media/          # Press and media assets
├── testimonials/   # Customer photos
└── logos/          # Company and partner logos
```

## Image Guidelines

### Recommended Sizes

**Hero Images**
- Size: 1920x1080px (16:9 ratio)
- Format: JPG
- Quality: 80-90%
- Max file size: 500KB

**Farm Images**
- Size: 800x600px (4:3 ratio)
- Format: JPG
- Quality: 85%
- Max file size: 200KB

**Blog Featured Images**
- Size: 1200x630px (1.91:1 ratio)
- Format: JPG
- Quality: 85%
- Max file size: 300KB

**Team Photos**
- Size: 400x400px (1:1 ratio)
- Format: JPG
- Quality: 90%
- Max file size: 100KB

**Testimonial Photos**
- Size: 300x300px (1:1 ratio)
- Format: JPG
- Quality: 90%
- Max file size: 80KB

**Gallery Images**
- Size: 800x600px or 600x800px
- Format: JPG
- Quality: 85%
- Max file size: 250KB

**Logos**
- Size: Variable (maintain aspect ratio)
- Format: PNG (with transparency) or SVG
- Quality: 100%
- Max file size: 50KB

### Image Optimization

**Before Upload:**
1. Resize images to recommended dimensions
2. Compress using tools like TinyPNG or ImageOptim
3. Use appropriate format (JPG for photos, PNG for graphics)
4. Ensure good contrast and lighting

**Naming Convention:**
- Use descriptive, SEO-friendly names
- Use hyphens instead of spaces
- Include relevant keywords
- Examples:
  - `green-valley-farm-aerial-view.jpg`
  - `organic-mango-plantation.jpg`
  - `team-member-john-doe.jpg`

### Alt Text Guidelines

Always provide descriptive alt text for accessibility:

**Good Examples:**
- "Aerial view of Green Valley Farm showing mango orchards and irrigation systems"
- "John Doe, Farm Manager, standing in organic vegetable garden"
- "Modern drip irrigation system in action at Sunrise Orchards"

**Avoid:**
- Generic descriptions like "farm image" or "photo"
- Keyword stuffing
- Overly long descriptions (keep under 125 characters)

## Video Management

### Supported Formats
- MP4 (recommended)
- WebM
- MOV

### Video Guidelines

**Farm Tour Videos**
- Resolution: 1920x1080 (Full HD)
- Frame rate: 30fps
- Duration: 2-5 minutes
- Format: MP4
- Compression: H.264

**Testimonial Videos**
- Resolution: 1280x720 (HD)
- Frame rate: 30fps
- Duration: 30-90 seconds
- Format: MP4
- Compression: H.264

**Promotional Videos**
- Resolution: 1920x1080 (Full HD)
- Frame rate: 30fps
- Duration: 1-3 minutes
- Format: MP4
- Compression: H.264

### Video Optimization
1. Compress videos before upload
2. Use appropriate bitrate (2-5 Mbps for HD)
3. Include captions for accessibility
4. Create thumbnail images
5. Consider hosting on YouTube/Vimeo for large files

## File Management Best Practices

### Organization
1. **Use consistent naming conventions**
2. **Organize by content type and date**
3. **Delete unused files regularly**
4. **Keep backup copies of original files**

### File Sizes
- **Images**: Keep under 500KB
- **Videos**: Keep under 50MB
- **Documents**: Keep under 10MB

### Quality Control
1. **Review images before publishing**
2. **Check for proper orientation**
3. **Ensure good lighting and focus**
4. **Verify alt text is descriptive**

## SEO Optimization

### Image SEO
1. **Use descriptive filenames**
2. **Include relevant keywords naturally**
3. **Optimize file sizes for fast loading**
4. **Use appropriate image formats**
5. **Implement lazy loading**

### Video SEO
1. **Create engaging thumbnails**
2. **Write descriptive titles**
3. **Include video transcripts**
4. **Use structured data markup**
5. **Optimize for mobile viewing**

## Accessibility

### Images
- Always include alt text
- Use high contrast images
- Avoid text in images when possible
- Provide image descriptions for complex graphics

### Videos
- Include captions or subtitles
- Provide video transcripts
- Ensure good audio quality
- Use descriptive video titles

## Performance Optimization

### Image Loading
1. **Use WebP format when supported**
2. **Implement responsive images**
3. **Use lazy loading**
4. **Optimize for different screen sizes**

### Video Loading
1. **Use video compression**
2. **Implement lazy loading**
3. **Provide multiple quality options**
4. **Use poster images**

## Troubleshooting

### Common Issues

**Upload Fails**
- Check file size (max 10MB)
- Verify file format is supported
- Check internet connection
- Try refreshing the page

**Image Quality Issues**
- Use higher resolution source images
- Reduce compression level
- Check image format compatibility
- Verify color profile settings

**Slow Loading**
- Optimize file sizes
- Use appropriate formats
- Check server performance
- Implement caching

### Getting Help
- Check file format requirements
- Verify file size limits
- Contact technical support
- Review this documentation

## Security Considerations

### File Safety
- Only upload trusted files
- Scan files for malware
- Avoid executable file types
- Use secure file naming

### Privacy
- Remove metadata from images
- Avoid personal information in filenames
- Check image backgrounds for sensitive content
- Obtain proper permissions for photos

---

For technical support with media management, contact the development team.
