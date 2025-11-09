# Property Images

This directory contains images for each holiday let property.

## Directory Structure

Each property has its own subdirectory:
- `barn/` - Images for The Barn
- `cottage/` - Images for The Cottage
- `stable/` - Images for The Stable
- `farmhouse/` - Images for The Farmhouse
- `loft/` - Images for The Loft
- `retreat/` - Images for The Retreat

## Adding Images

### For Property Listings (Featured Images)

Add a featured/main exterior image to each property directory with the filename:
- `barn-exterior.jpg`
- `cottage-exterior.jpg`
- `stable-exterior.jpg`
- `farmhouse-exterior.jpg`
- `loft-exterior.jpg`
- `retreat-exterior.jpg`

These images will appear on the accommodation listing page and as the main header image.

### For Property Galleries

Add multiple images to each property directory to create photo galleries. The gallery shortcode will automatically display all images in the directory.

**Image naming suggestions:**
- `exterior-1.jpg`, `exterior-2.jpg` - Outside views
- `living-room.jpg` - Living areas
- `kitchen.jpg` - Kitchen
- `bedroom-1.jpg`, `bedroom-2.jpg` - Bedrooms
- `bathroom-1.jpg` - Bathrooms
- `garden.jpg` - Outdoor spaces
- `view.jpg` - Scenic views

### Thumbnail Images (Optional)

For faster loading, you can create thumbnail versions:
- Name them with `-thumb` suffix: `exterior-1-thumb.jpg`
- Recommended size: 300x200 pixels
- The gallery will automatically use thumbs if available

### Image Guidelines

- **Format:** JPG or PNG
- **Recommended size:** 1920x1080 pixels for main images
- **File size:** Keep under 500KB for web performance
- **Quality:** High quality but web-optimized
- Use descriptive filenames (e.g., `cozy-living-room.jpg` instead of `IMG_1234.jpg`)

## How the Gallery Works

The gallery uses the Hugo easy-gallery shortcode with PhotoSwipe for beautiful lightbox viewing:

```markdown
{{< gallery dir="img/properties/barn" />}}
```

This will display all images in the `static/img/properties/barn/` directory as a clickable gallery with:
- Thumbnail grid view
- Lightbox/fullscreen viewing
- Swipe navigation
- Zoom functionality
- Responsive design

## Testing

1. Add some images to a property directory
2. Run `hugo server` to preview
3. Navigate to the property page
4. Click on any image to open the lightbox gallery
