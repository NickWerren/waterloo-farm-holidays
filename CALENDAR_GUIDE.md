# Local Calendar - Events Management Guide

## Overview

The Local Calendar page displays an interactive monthly calendar with local events in Cornwall. Events appear on the calendar grid and in an upcoming events list below.

## Adding Events

Events are defined in the calendar layout file at:
`layouts/calendar/list.html`

### Event Data Structure

Events are stored in a JavaScript array (starting around line 157). Each event has:

```javascript
{
    date: 'YYYY-MM-DD',           // Event date
    title: 'Event Name',          // Event title
    description: 'Details...',    // Event description
    location: 'Location Name',    // Where it happens
    type: 'market'                // Event type (optional)
}
```

### Example Event

```javascript
{
    date: '2025-12-01',
    title: 'Bude Christmas Market',
    description: 'Annual Christmas market with local artisans, festive food, and entertainment.',
    location: 'Bude',
    type: 'festival'
}
```

## How to Add a New Event

1. **Open the calendar layout file:**
   `/Users/nicholaswerren/repos/test/layouts/calendar/list.html`

2. **Find the events array** (around line 157)

3. **Add your event** to the array:

```javascript
const events = [
    // Existing events...
    {
        date: '2025-12-15',
        title: 'Your New Event',
        description: 'Description of your event here.',
        location: 'Event Location',
        type: 'festival'
    },
    // More events...
];
```

4. **Save the file**

5. **Rebuild the site:**
   ```bash
   hugo
   ```

The event will now appear on the calendar!

## Event Types

You can categorize events by type:

- `market` - Farmers markets, craft markets
- `festival` - Festivals and celebrations
- `holiday` - Public holidays
- `concert` - Music events
- `sports` - Sporting events
- `fair` - Local fairs
- Custom types as needed

## Current Sample Events

The calendar comes pre-populated with example events:

1. **Launceston Farmers Market** - Every Saturday
2. **Bude Christmas Market** - December 1st
3. **Christmas Lights Switch On** - December 6th
4. **Christmas Day** - December 25th
5. **New Year's Day** - January 1st

**Replace these with actual local events!**

## Recurring Events

For weekly/monthly recurring events (like farmers markets), you need to add each occurrence separately:

```javascript
// Weekly Saturday market
{ date: '2025-11-15', title: 'Launceston Farmers Market', ... },
{ date: '2025-11-22', title: 'Launceston Farmers Market', ... },
{ date: '2025-11-29', title: 'Launceston Farmers Market', ... },
```

## Calendar Features

### Navigation
- **Previous/Next buttons** - Move between months
- **Current month display** - Shows which month you're viewing

### Calendar Grid
- **Today highlighted** - Current day shown in blue
- **Events on days** - Events appear as small cards on calendar dates
- **Clickable events** - Click any event for quick details popup

### Upcoming Events List
- Shows all events for current and next month
- Sorted chronologically
- Full event details displayed
- Location with map marker icon

## Styling Events

Events are styled automatically:
- Event cards on calendar days (light blue background)
- Hover effects for better UX
- Border color coding (can be customized by type)
- Responsive design for mobile

## Tips for Managing Events

### 1. Keep Dates Accurate
- Use format `YYYY-MM-DD` (e.g., `2025-12-25`)
- Double-check dates before adding

### 2. Write Clear Descriptions
- Brief but informative
- Include key details (time, cost, what to expect)
- Keep it under 2-3 sentences for readability

### 3. Include Locations
- Be specific (e.g., "Town Square, Launceston" not just "Launceston")
- Makes it easy for guests to find events

### 4. Update Regularly
- Remove past events periodically
- Add upcoming events in advance
- Keep at least 3 months of events visible

### 5. Local Events to Consider

**Regular Events:**
- Weekly farmers markets
- Monthly craft fairs
- Car boot sales
- Church services/events

**Seasonal Events:**
- Easter celebrations
- Summer fairs and fêtes
- Harvest festivals
- Christmas markets and lights
- New Year celebrations

**Annual Events:**
- Royal Cornwall Show
- Food festivals
- Music festivals
- Agricultural shows
- Regattas (Port Isaac, Padstow)

**Sports Events:**
- Running races
- Surfing competitions
- Cycling events

## Future Enhancement Ideas

If you need more advanced features:

1. **Event Categories with Colors** - Color-code different event types
2. **External Calendar File** - Move events to separate JSON file
3. **Admin Interface** - Build a form to add events without editing code
4. **Integration** - Connect to external calendar APIs
5. **Filtering** - Filter events by type
6. **Search** - Search events by keyword

## Example: Adding Multiple Events

Here's how to add several events at once:

```javascript
const events = [
    {
        date: '2025-12-06',
        title: 'Launceston Christmas Lights',
        description: 'Town Christmas lights switch-on with carol singing and Santa.',
        location: 'Launceston Town Center',
        type: 'festival'
    },
    {
        date: '2025-12-13',
        title: 'Bude Jazz Festival',
        description: 'Annual jazz festival featuring local and national artists.',
        location: 'Various venues, Bude',
        type: 'concert'
    },
    {
        date: '2025-12-20',
        title: 'Carol Service',
        description: 'Traditional carol service with mulled wine and mince pies after.',
        location: 'St. Mary Magdalene Church, Launceston',
        type: 'holiday'
    }
];
```

## Need Help?

The calendar layout file is located at:
`layouts/calendar/list.html`

The events array starts around line 157. Simply add your events following the examples provided!
