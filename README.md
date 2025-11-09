# Waterloo Farm Holidays Website

A Hugo-based website for a holiday let business featuring 6 properties with interactive booking calendars and photo galleries.

## Features

### Property Management
- **6 Individual Property Pages** with detailed information:
  - The Barn (sleeps 6)
  - The Cottage (sleeps 2)
  - The Stable (sleeps 4)
  - The Farmhouse (sleeps 8)
  - The Loft (sleeps 4)
  - The Retreat (sleeps 2)

### Interactive Booking Calendar
- Visual availability calendar showing booked and available dates
- Click to select check-in and check-out dates
- Prevents booking of past dates and already-booked dates
- Automatic calculation of number of nights
- Email inquiry form with guest details
- Month-by-month navigation

### Photo Galleries
- PhotoSwipe integration for beautiful lightbox viewing
- Support for unlimited photos per property
- Automatic thumbnail generation
- Mobile-friendly touch navigation
- Zoom and fullscreen capabilities

### Property Listing Page
- Overview of all 6 properties
- Quick comparison of key features (bedrooms, bathrooms, capacity)
- Pet-friendly indicators
- Pricing information
- Direct links to detailed property pages

## Quick Start

### 1. Development Server

```bash
hugo server -D
```

Visit: http://localhost:1313

### 2. Build for Production

```bash
hugo
```

The built site will be in the `public/` directory.

## Project Structure

```
.
├── content/
│   └── accommodation/          # Property pages
│       ├── _index.md          # Accommodation landing page
│       ├── the-barn.md
│       ├── the-cottage.md
│       ├── the-stable.md
│       ├── the-farmhouse.md
│       ├── the-loft.md
│       └── the-retreat.md
├── layouts/
│   ├── accommodation/
│   │   └── list.html          # Accommodation listing layout
│   ├── property/
│   │   └── single.html        # Individual property layout
│   └── shortcodes/
│       └── load-photoswipe.html
├── static/
│   └── img/
│       └── properties/        # Property images go here
│           ├── barn/
│           ├── cottage/
│           ├── stable/
│           ├── farmhouse/
│           ├── loft/
│           └── retreat/
├── hugo.toml                  # Site configuration
├── BOOKING_SETUP.md          # Booking system setup guide
└── README.md                 # This file
```

## Setup Instructions

### 1. Update Site Configuration

Edit `hugo.toml`:

```toml
baseurl = "https://your-domain.com"  # Your actual domain
title = "Waterloo Farm Holidays"

[params]
  SEOTitle = "Waterloo Farm Holidays | Luxury Holiday Lets"
  description = "Your site description"
```

### 2. Configure Booking Email

Edit `layouts/property/single.html` (line ~534):

```javascript
window.location.href = `mailto:your-email@example.com?...`;
```

Replace `your-email@example.com` with your actual email address.

### 3. Add Property Images

Add images to `static/img/properties/[property-name]/`:

**Featured images** (for listing page):
- `barn-exterior.jpg`
- `cottage-exterior.jpg`
- `stable-exterior.jpg`
- `farmhouse-exterior.jpg`
- `loft-exterior.jpg`
- `retreat-exterior.jpg`

**Gallery images** (any descriptive names):
- `living-room.jpg`
- `kitchen.jpg`
- `bedroom-1.jpg`
- `garden.jpg`
- etc.

See `static/img/properties/README.md` for detailed guidelines.

### 4. Update Booked Dates

The calendar shows sample booked dates. Update them in `layouts/property/single.html`:

```javascript
const bookedDates = {
    '2025-11-15': true,
    '2025-11-16': true,
    // Add your booked dates in YYYY-MM-DD format
};
```

See `BOOKING_SETUP.md` for advanced options (JSON files, API integration, etc.).

### 5. Customize Property Details

Edit the markdown files in `content/accommodation/` to update:
- Property descriptions
- Amenities
- Pricing
- House rules
- Features

## Navigation Menu

The site includes these menu items (configured in `hugo.toml`):

- **ACCOMMODATION** - Shows all 6 properties
- **LOCAL ACTIVITIES** - (create content/localactivities/)
- **LOCAL FOOD & DRINK** - (create content/localfoodanddrink/)
- **LOCAL CALENDAR** - (create content/localcalendar/)
- **ABOUT** - (update content/about/)

## Deployment

### Option 1: Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `hugo`
4. Publish directory: `public`

### Option 2: GitHub Pages
```bash
hugo
cd public
git init
git add .
git commit -m "Deploy"
git push
```

### Option 3: Traditional Web Hosting
1. Run `hugo` to build
2. Upload contents of `public/` directory to your web host
3. Point your domain to the uploaded files

## Technologies Used

- **Hugo** - Static site generator
- **CleanWhite Theme** - Clean, blog-focused Hugo theme
- **PhotoSwipe** - Touch-friendly image gallery
- **Vanilla JavaScript** - No frameworks needed for calendar
- **Responsive Design** - Mobile-friendly layouts

## Customization

### Change Colors

Edit the CSS in `layouts/property/single.html` to match your brand colors.

### Add More Properties

1. Create new markdown file in `content/accommodation/`
2. Add image directory in `static/img/properties/`
3. Follow the format of existing property pages

### Modify Calendar Behavior

Edit the JavaScript in `layouts/property/single.html`:
- Change minimum stay requirements
- Modify date selection logic
- Add pricing calculations
- Customize form fields

## Support & Documentation

- **Booking Setup**: See `BOOKING_SETUP.md`
- **Image Guidelines**: See `static/img/properties/README.md`
- **Hugo Documentation**: https://gohugo.io/documentation/
- **PhotoSwipe Documentation**: https://photoswipe.com/

## Testing

### Test Checklist

- [ ] All property pages load correctly
- [ ] Images display in galleries
- [ ] Calendar navigation works (prev/next month)
- [ ] Date selection highlights properly
- [ ] Booked dates are blocked
- [ ] Past dates are disabled
- [ ] Booking form collects all information
- [ ] Email submission works
- [ ] Mobile responsive design
- [ ] All menu links work
- [ ] Property listing page displays all properties

### Local Testing

```bash
# Start development server
hugo server -D

# Test on mobile
hugo server -D --bind 0.0.0.0

# Access from phone: http://YOUR_IP:1313
```

## Next Steps

1. **Add your property images** to `static/img/properties/`
2. **Update property descriptions** in `content/accommodation/*.md`
3. **Configure booking email** in `layouts/property/single.html`
4. **Update booked dates** for current bookings
5. **Customize site branding** (colors, logo, header image)
6. **Create content** for other sections (local activities, food & drink)
7. **Test thoroughly** on desktop and mobile
8. **Deploy to production**

## Features to Consider Adding

- Payment integration (Stripe, PayPal)
- iCal sync with Airbnb/Booking.com
- Admin dashboard for managing bookings
- Customer reviews/testimonials
- Email newsletter signup
- Multi-currency support
- Automated email confirmations
- Availability API

## License

This website uses the Hugo CleanWhite theme. Check the theme's license for details.

## Contact

For questions about this website setup, refer to the documentation files or Hugo's official documentation.
