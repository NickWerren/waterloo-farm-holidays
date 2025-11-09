# Local Activities & Food & Drink - Content Guide

## Overview

This guide explains the new content sections added to the Waterloo Farm Holidays website: **Local Activities** and **Local Food & Drink**.

Both sections use an industry-standard blog/review architecture that makes it easy to add, update, and organize content.

---

## Local Activities Section

### Structure

```
content/activities/
├── _index.md              # Landing page for all activities
├── cycling.md             # 4 cycling routes
├── hiking.md              # 5 walking routes + Coast Path sections
├── trail-running.md       # Off-road running routes
├── road-running.md        # Road running routes
├── surfing.md             # 5 surf beaches with conditions
└── swimming.md            # Beach & wild swimming spots
```

### Content Features

Each activity page includes:
- **Detailed Routes** - Distance, difficulty, elevation, duration
- **Starting Points** - Where to begin each route
- **Facilities** - Parking, amenities, equipment hire
- **Safety Information** - Specific to each activity
- **Best Times** - When to visit for optimal conditions
- **Local Clubs & Groups** - Community connections
- **Equipment Recommendations** - What to bring
- **Tips & Advice** - Local knowledge

### Example: Cycling Page

The cycling page ([cycling.md](content/activities/cycling.md)) includes:
- Launceston Loop (25 miles, Moderate)
- Bodmin Moor Challenge (40 miles, Hard)
- Tamar Valley Trail (30 miles, Moderate)
- Cornish Lanes Discovery (15 miles, Easy)

Each route has:
- Distance and difficulty
- Elevation gain
- Highlights
- Starting points
- Best times to ride
- Safety tips

### Tags & Categories

All activities use:
- **Categories:** `activities`
- **Tags:** Activity-specific (e.g., `cycling`, `surfing`, `wild-swimming`)

This allows for filtering and organization.

---

## Local Food & Drink Section

### Structure

```
content/food-and-drink/
├── _index.md                    # Landing page with rating system
├── the-eliot-arms.md            # Village pub review
├── life-s-a-beach.md            # Beachside restaurant
├── jo-and-cos-cafe.md           # Local café
├── cornish-orchards.md          # Cider producer & farm shop
├── richards-fish-and-chips.md   # Takeaway
├── the-mill-house-inn.md        # Gastropub
├── buttervilla-farm-shop.md     # Farm shop & butchery
└── pengenna-pasties.md          # Bakery & Cornish pasties
```

### Review Format

Each review includes front matter metadata:

```yaml
---
title: "Establishment Name"
date: 2025-11-05
description: "Brief description"
establishment_type: "Pub" | "Restaurant" | "Café" | "Farm Shop" | "Bakery" | "Takeaway"
location: "Village/Town name"
distance: "X minutes from farm"
cuisine: ["British", "Seafood", "etc"]
price_range: "£" | "££" | "£££"
rating: 1-5
features: ["Dog Friendly", "Garden", "Parking", etc]
website: "https://..."
tags: ["pub", "seafood", "dog-friendly", etc]
categories: ["food-and-drink"]
---
```

### Review Content Structure

Each review follows a consistent format:

1. **Introduction** - Brief overview
2. **Our Review** - Detailed assessment with star ratings for:
   - Food Quality
   - Atmosphere
   - Service
   - Value
3. **Highlights** - Bullet point features
4. **Menu Recommendations** - Specific dishes
5. **Practical Information** - Hours, parking, booking
6. **Perfect For** - Use cases
7. **Our Verdict** - Summary recommendation
8. **Top Tips** - Insider advice

### Establishment Types Covered

- **Pubs** - The Eliot Arms, The Mill House Inn
- **Restaurants** - Life's a Beach (beachside fine dining)
- **Cafés** - Jo & Co's Café (breakfast & lunch)
- **Farm Shops** - Buttervilla Farm Shop, Cornish Orchards
- **Bakeries** - Pengenna Pasties (Cornish pasties)
- **Takeaway** - Richards Fish & Chips

### Price Ranges

- **£** - Budget-friendly (under £10 per person)
- **££** - Mid-range (£10-20 per person)
- **£££** - Premium (£20+ per person)

### Rating System

Uses 5-star ratings (⭐) for:
- Overall rating (in front matter)
- Individual categories (in content):
  - Food Quality
  - Atmosphere
  - Service
  - Value

---

## Adding New Content

### Adding a New Activity

1. Create a new file in `content/activities/`
2. Copy the front matter structure from existing files
3. Include:
   - Title and description
   - Date
   - Tags (specific to activity type)
   - Categories: `activities`
4. Structure content with:
   - Route descriptions
   - Practical information
   - Safety tips
   - Equipment needs

### Adding a New Food Review

1. Create a new file in `content/food-and-drink/`
2. Use this front matter template:

```yaml
---
title: "Establishment Name"
date: YYYY-MM-DD
description: "One-line description"
establishment_type: "Type"
location: "Location"
distance: "X minutes"
cuisine: ["Type1", "Type2"]
price_range: "£/££/£££"
rating: 1-5
features: ["Feature1", "Feature2"]
website: "URL"
tags: ["tag1", "tag2"]
categories: ["food-and-drink"]
---
```

3. Follow the review structure:
   - Introduction
   - Our Review (with star ratings)
   - Highlights
   - Recommendations
   - Practical Information
   - Our Verdict
   - Tips

---

## Content Guidelines

### Writing Style

- **Conversational but informative**
- **Practical and helpful**
- **Honest assessments**
- **Local knowledge** - Insider tips and recommendations

### Information to Include

**Activities:**
- Distances and durations
- Difficulty levels
- Best times/seasons
- Safety considerations
- Facilities and parking
- Local contacts

**Food & Drink:**
- Distance from farm
- Opening hours
- Price ranges
- Booking requirements
- Parking information
- Specific recommendations
- Best dishes
- Who it's perfect for

### Photography

Each review/activity can include images:
- Add images to `static/img/food-and-drink/` or `static/img/activities/`
- Reference in markdown: `![Alt text](/img/folder/image.jpg)`

---

## Technical Details

### How Hugo Displays This Content

**List Pages** (`_index.md`):
- Display all items in the section
- Automatically generated from individual pages
- Can be filtered by tags/categories

**Individual Pages**:
- Each activity or review has its own page
- URL structure: `site.com/activities/cycling/`
- Accessible via menu: LOCAL ACTIVITIES, LOCAL FOOD & DRINK

### Menu Configuration

Already configured in `hugo.toml`:

```toml
[[menu.main]]
    name = "LOCAL ACTIVITIES"
    url = "/activities/"
    weight = 2

[[menu.main]]
    name = "LOCAL FOOD & DRINK"
    url = "/food-and-drink/"
    weight = 3
```

### Tags & Taxonomies

The site automatically generates:
- Tag pages (e.g., `/tags/cycling/`)
- Category pages (e.g., `/categories/activities/`)

This allows filtering like:
- "Show me all surfing content"
- "Show me all dog-friendly establishments"
- "Show me all budget-friendly restaurants"

---

## Current Content Summary

### Activities Section - 7 Pages

1. **Landing Page** - Overview of all activities
2. **Cycling** - 4 routes (25-40 miles)
3. **Hiking & Walking** - 5 featured walks
4. **Trail Running** - Off-road routes and training loops
5. **Road Running** - Road routes and interval training
6. **Surfing** - 5 beaches from beginner to advanced
7. **Swimming** - Beach and wild swimming locations

### Food & Drink Section - 9 Pages

1. **Landing Page** - Overview and rating system
2. **The Eliot Arms** - Village pub (5 min)
3. **Life's a Beach** - Beachside restaurant (30 min)
4. **Jo & Co's Café** - Local café (10 min)
5. **Cornish Orchards** - Cider producer (40 min)
6. **Richards Fish & Chips** - Takeaway (10 min)
7. **The Mill House Inn** - Gastropub (35 min)
8. **Buttervilla Farm Shop** - Farm shop (20 min)
9. **Pengenna Pasties** - Bakery (15 min)

---

## Site Statistics

After adding this content:
- **Total Pages:** 134
- **Activities Pages:** 7
- **Food & Drink Pages:** 9
- **Accommodation Pages:** 7 (6 properties + listing)
- **Build Time:** ~158ms

---

## Next Steps

### Content Expansion Ideas

**Activities:**
- Rock climbing spots
- Kayaking locations
- Horse riding stables
- Golf courses
- Fishing spots
- Wildlife watching
- Photography locations

**Food & Drink:**
- More pubs in different villages
- Restaurants in Tintagel, Boscastle, Port Isaac
- Beach cafés
- Ice cream shops
- Breweries and distilleries
- Farmers' markets
- More farm shops

### Seasonal Content

Consider adding seasonal guides:
- "Best Summer Activities"
- "Winter Walks in Cornwall"
- "Where to Eat After Surfing"
- "Rainy Day Food Stops"

### User-Generated Content

Encourage guests to:
- Submit their own reviews
- Share favorite routes
- Recommend hidden gems
- Upload photos

---

## Maintaining the Content

### Regular Updates

- Check opening hours seasonally
- Update pricing when it changes
- Add new establishments as discovered
- Remove or update closed venues
- Refresh seasonal recommendations

### Guest Feedback

Use guest feedback to:
- Add new locations they recommend
- Update reviews based on experiences
- Identify popular activities
- Discover new routes

---

## Industry Best Practices

This content structure follows industry standards used by:
- **Travel Blogs** - Detailed, helpful content
- **Review Sites** - Structured ratings and information
- **Activity Guides** - Practical route information
- **Food Blogs** - Detailed reviews with recommendations

### Benefits of This Approach

1. **Easy to Maintain** - Simple markdown files
2. **SEO-Friendly** - Rich content with keywords
3. **Scalable** - Easy to add more content
4. **Organized** - Tags and categories for filtering
5. **User-Friendly** - Consistent format, easy to read
6. **Professional** - Industry-standard review structure

---

## Questions or Updates?

To add or update content:
1. Edit markdown files in `content/activities/` or `content/food-and-drink/`
2. Follow the existing format
3. Run `hugo` to rebuild the site
4. Verify changes with `hugo server`

For questions about the structure or adding new sections, refer to the [Hugo documentation](https://gohugo.io/documentation/).
