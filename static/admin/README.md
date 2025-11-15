# Decap CMS Setup Guide

Your admin panel is now ready! To complete the setup, you need to configure GitHub authentication.

## Setup Steps (One-time, 5 minutes)

### Option 1: Using Netlify (Easiest - Recommended)

1. **Create free Netlify account** at https://app.netlify.com/signup
2. **Connect to GitHub** when prompted
3. **Go to Site settings → Access control → OAuth**
4. **Install GitHub provider**
5. Done! Your admin will be at: `https://nickwerren.github.io/waterloo-farm-holidays/admin/`

### Option 2: GitHub OAuth App (Alternative)

1. **Go to GitHub Settings** → Developer settings → OAuth Apps
2. **New OAuth App** with:
   - Application name: `Waterloo Farm Holidays CMS`
   - Homepage URL: `https://nickwerren.github.io/waterloo-farm-holidays/`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
3. **Copy Client ID and Client Secret**
4. **Sign up for free Netlify account** (needed for OAuth handling)
5. **Add to Netlify** under Access Control → OAuth

## How to Use the Admin Panel

### Accessing Admin
1. Visit: `https://nickwerren.github.io/waterloo-farm-holidays/admin/`
2. Click "Login with GitHub"
3. You'll see the admin dashboard

### What Your Mum Can Do

**Add Calendar Events:**
- Click "Calendar Events" → "New Calendar Event"
- Fill in the form (title, date, location, type, description)
- Click "Save" → "Publish"
- Event appears on the calendar automatically

**Add Activities:**
- Choose category (Cycling Routes, Swimming Spots, Family Days Out, etc.)
- Click "New [Type]"
- Fill in details
- Save and publish

**Add Food & Drink Venues:**
- Click "Food & Drink" → "New Venue"
- Select category (Cafes, Pubs, Restaurants, etc.)
- Fill in details
- Save and publish

### Publishing Changes
- Changes are saved as "Drafts" first
- Click "Publish" to make them live
- Site rebuilds automatically (takes 2-3 minutes)

## Access Control

Only people you add as collaborators on the GitHub repository can access the admin panel.

To give your mum access:
1. Go to: https://github.com/NickWerren/waterloo-farm-holidays/settings/access
2. Click "Add people"
3. Enter her GitHub username
4. Give her "Write" access
5. She can now log in and manage content

## Local Development (Optional)

To test the CMS locally:
1. Uncomment `local_backend: true` in `config.yml`
2. Run: `npx decap-server` in one terminal
3. Run Hugo server in another terminal
4. Visit: `http://localhost:1313/waterloo-farm-holidays/admin/`

## Need Help?

- Decap CMS Docs: https://decapcms.org/docs/
- GitHub OAuth Setup: https://decapcms.org/docs/github-backend/
