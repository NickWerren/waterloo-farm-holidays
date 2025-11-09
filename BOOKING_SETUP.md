# Booking Calendar Setup Guide

Your holiday let website now includes an interactive booking calendar with email inquiry functionality!

## How It Works

Each property page includes:
1. **Interactive Calendar** - Shows available and booked dates
2. **Date Selection** - Guests can select check-in and check-out dates
3. **Booking Form** - Collects guest information
4. **Email Inquiry** - Sends booking requests to your email

## Setup Instructions

### 1. Configure Your Email Address

Update the email address that receives booking inquiries:

**File:** `layouts/property/single.html` (line ~534)

Find this line:
```javascript
window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
```

Replace `your-email@example.com` with your actual email address.

### 2. Update Booked Dates

The calendar currently shows sample booked dates. You need to update these for each property.

**File:** `layouts/property/single.html` (around line 340)

Find the `bookedDates` object:
```javascript
const bookedDates = {
    '2025-11-15': true,
    '2025-11-16': true,
    // ... more dates
};
```

**To update booked dates:**

#### Option A: Manual Update (Simple)
Edit the `bookedDates` object in the layout file for each property. Add dates in `YYYY-MM-DD` format.

#### Option B: JSON File (Recommended)
1. Create a JSON file for each property in `static/data/bookings/`:
   - `barn-bookings.json`
   - `cottage-bookings.json`
   - etc.

2. Format:
```json
{
  "booked_dates": [
    "2025-11-15",
    "2025-11-16",
    "2025-11-17"
  ]
}
```

3. Update the JavaScript to load from JSON:
```javascript
// Fetch booked dates from JSON
fetch(`/data/bookings/${propertyName}-bookings.json`)
    .then(response => response.json())
    .then(data => {
        const bookedDates = {};
        data.booked_dates.forEach(date => {
            bookedDates[date] = true;
        });
        renderCalendar();
    });
```

#### Option C: Backend Integration (Advanced)
For a fully automated system, you can:
1. Create a backend API endpoint (e.g., `/api/bookings/{property}`)
2. Fetch booked dates from your booking management system
3. Update the calendar automatically

### 3. Configure Booking Form Submission

Currently, the form opens the user's email client with pre-filled information. You have several options:

#### Option 1: Keep Email Client (Current)
- Simplest option
- No server required
- Update email address as described in Step 1

#### Option 2: Form Service (Recommended)
Use a form submission service like:
- **Formspree** (https://formspree.io)
- **Netlify Forms** (if hosted on Netlify)
- **EmailJS** (https://www.emailjs.com)

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

#### Option 3: Custom Backend
Create a server endpoint to handle submissions:
```javascript
fetch('/api/booking-enquiry', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    alert('Booking enquiry sent! We will contact you soon.');
});
```

## Features

### Calendar Features
- ✅ Visual availability display (green = available, red = booked)
- ✅ Click to select check-in date
- ✅ Click again to select check-out date
- ✅ Prevents selection of past dates
- ✅ Prevents selection of booked dates
- ✅ Month navigation (previous/next)
- ✅ Automatic calculation of number of nights

### Booking Form Features
- ✅ Guest name and email (required)
- ✅ Phone number (optional)
- ✅ Number of guests (required)
- ✅ Additional information/special requests
- ✅ Hidden fields for selected dates
- ✅ Form validation
- ✅ Disabled submit button until dates selected

## Customization

### Changing Colors

Edit the CSS in `layouts/property/single.html`:

```css
/* Available dates */
.calendar-day.available {
    background: #e8f5e9;  /* Light green */
    border-color: #4caf50;
}

/* Booked dates */
.calendar-day.booked {
    background: #ffebee;  /* Light red */
    border-color: #f44336;
}

/* Selected dates */
.calendar-day.selected {
    background: #0085a1;  /* Your brand color */
    color: white;
}
```

### Changing Minimum Stay Requirements

Update in each property's markdown file (e.g., `content/accommodation/the-barn.md`):

```markdown
### Pricing
- **Minimum Stay:** 3 nights (7 nights in peak season)
```

You can also add JavaScript validation to enforce minimum stays in the calendar.

## Testing

1. Start Hugo server:
```bash
hugo server
```

2. Navigate to a property page (e.g., http://localhost:1313/accommodation/the-barn/)

3. Test the calendar:
   - Click on an available date (should highlight in blue)
   - Click on another date (should select date range)
   - Fill out the booking form
   - Submit (should open email client or submit via your chosen method)

## Updating Bookings

After confirming a booking:

1. Add the dates to your `bookedDates` object or JSON file
2. Rebuild your site (`hugo`)
3. Deploy the update

For a production system, consider:
- Creating an admin panel to manage bookings
- Using a booking management system (Lodgify, Streamline, etc.)
- Syncing with Airbnb/Booking.com calendars via iCal

## Support

The calendar uses vanilla JavaScript (no dependencies needed). It works with:
- All modern browsers
- Mobile devices (touch-friendly)
- Progressive enhancement (degrades gracefully)

## Future Enhancements

Consider adding:
- iCal sync with external booking platforms
- Real-time availability checks
- Instant booking (payment integration)
- Email notifications
- Admin dashboard for managing bookings
- Multi-property calendar view
- Pricing calculator based on dates
- Special offer indicators
