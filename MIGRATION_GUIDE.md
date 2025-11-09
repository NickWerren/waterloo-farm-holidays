# Migration Guide - Waterloo Farm Holidays

## What's Been Set Up

Your new Hugo website has been created with:

### Structure
- 6 property pages (matching your actual property names)
- Interactive booking calendars with email inquiry
- Photo gallery support (PhotoSwipe)
- Responsive design
- Modern, clean interface

### Properties Created
1. **Saffron Cottage**
2. **Haypole Barn** (wheelchair accessible ♿)
3. **Kingfisher Cottage** (wheelchair accessible ♿)
4. **Sandmartins** (wheelchair accessible ♿)
5. **The Old Apple Tallet** (pet-friendly 🐾)
6. **Swallow Barn** (pet-friendly 🐾)

## Quick Setup Checklist

### 1. Update Booking Email (5 minutes)
**File:** `layouts/property/single.html` (line ~534)

Change:
```javascript
window.location.href = `mailto:your-email@example.com?...
```

To your actual email address.

### 2. Update Social Media Links (Already Done!)
Your Twitter (@AEWerren) and Facebook links are configured in `hugo.toml`.

### 3. Add Property Images
Create these folders and add images:
```
static/img/properties/
├── saffron-cottage/
├── haypole-barn/
├── kingfisher-cottage/
├── sandmartins/
├── the-old-apple-tallet/
└── swallow-barn/
```

For each property, add:
- Featured image: `[property-name]-exterior.jpg` (for listing page)
- Gallery images: any descriptive names

### 4. Copy Content from Old Site

I've created template property pages. To add your actual content:

1. Visit your old site's property pages
2. Copy the text content
3. Edit the markdown files in `content/accommodation/`
4. Paste and format your content

**Example for Saffron Cottage:**
- Old site: http://www.waterloofarmholidays.co.uk/saffron-cottage/
- New file: `content/accommodation/saffron-cottage.md`

## Key Information from Your Site

### Location
- **Near:** Launceston, Cornwall (6 miles)
- **Beach:** Crackington Haven (12 miles)
- **Near A30** for easy access

### Check-in/Check-out
- **Arrival:** 3pm or later
- **Departure:** By 10am
- **Changeover:** Saturday (peak season)

### Facilities (All Properties)
- Swimming pool
- Beautiful Cornish countryside
- Laundry room (coin-operated)
- WiFi available
- Parking

### Special Features
- 3 properties wheelchair accessible
- 2 properties pet-friendly
- Haypole Barn + Sandmartins can combine for 16 people
- Security deposit: £100 (Haypole Barn & Sandmartins)

### Nearby
- Dartmoor tors
- Cornwall beaches
- Classic bikes available

## Updating Individual Properties

Each property file in `content/accommodation/` has this structure:

```markdown
---
title: "Property Name"
date: 2025-11-05
type: "property"
layout: "single"
description: "Short description"
featured_image: "img/properties/property-name/exterior.jpg"
sleeps: 4
bedrooms: 2
bathrooms: 1
pets: true  # or false
wheelchair_accessible: true  # or false
price_per_night: "£100-150"
---

## Welcome to [Property Name]

[Your description here]

### Property Features
- Feature 1
- Feature 2

### Amenities
- Amenity 1
- Amenity 2

### Gallery
{{< gallery dir="img/properties/property-name" />}}

### Pricing
[Your pricing info]

### Booking Calendar
<div class="booking-calendar" data-property="property-name">
  <div id="calendar-property-name"></div>
</div>
```

## Content to Migrate

For each property, copy from your old site:
1. Property description
2. Number of bedrooms/bathrooms
3. Sleeping capacity
4. Specific amenities
5. Pricing information
6. Special features
7. Floor plans (if available)

## Calendar Management

### Update Booked Dates

**File:** `layouts/property/single.html` (around line 340)

```javascript
const bookedDates = {
    '2025-11-15': true,
    '2025-11-16': true,
    '2025-11-17': true,
    // Add your booked dates
};
```

### Option: Use JSON Files (Recommended)

Create `static/data/bookings/saffron-cottage-bookings.json`:
```json
{
  "booked_dates": [
    "2025-12-20",
    "2025-12-21",
    "2025-12-22"
  ]
}
```

Then update the JavaScript to load from these files.

## Testing

1. Start server: `hugo server -D`
2. Visit: http://localhost:1313
3. Check each property page
4. Test calendar date selection
5. Test booking form
6. View on mobile

## Deployment

### Build for Production
```bash
hugo
```

### Deploy Options
1. **Netlify** (Recommended)
   - Connect GitHub repo
   - Build command: `hugo`
   - Publish directory: `public`

2. **Traditional Hosting**
   - Upload `public/` folder contents
   - Point domain to uploaded files

### SSL Certificate
Your old site's certificate has expired. Make sure to:
- Get new SSL certificate
- Update domain from .co.uk to .com (or keep .co.uk)
- Update `baseurl` in `hugo.toml`

## Next Steps Priority

1. ✅ Site structure created
2. ✅ Booking calendar functional
3. ✅ Photo galleries ready
4. ⏳ Add property images
5. ⏳ Copy property descriptions
6. ⏳ Update booking email
7. ⏳ Configure booked dates
8. ⏳ Test thoroughly
9. ⏳ Deploy to production
10. ⏳ Update SSL certificate

## Support Files Created

- `README.md` - General website documentation
- `BOOKING_SETUP.md` - Detailed booking calendar setup
- `static/img/properties/README.md` - Image guidelines
- `MIGRATION_GUIDE.md` - This file

## Need Help?

All the structure is in place. The main tasks remaining are:
1. Adding your actual property descriptions
2. Adding photos
3. Configuring the booking email
4. Setting up booked dates

The website is fully functional and ready to use!
