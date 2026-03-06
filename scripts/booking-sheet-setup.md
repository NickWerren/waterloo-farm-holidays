# Booking Availability — Google Form & Sheet Setup

This connects a simple Google Form to the website's availability calendar.
Your mum (or anyone) fills in a form when a booking is confirmed, and the
website updates automatically — no code, no GitHub, no rebuilds.

## Step 1: Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Waterloo Farm Bookings"**
3. In Row 1, add these column headers exactly:

   | A | B | C | D |
   |---|---|---|---|
   | Cottage | Check-in | Check-out | Guest Name |

4. The **Cottage** column must use the exact cottage names:
   - Haypole Barn
   - Sandmartins
   - Kingfisher Cottage
   - Saffron Cottage
   - Swallow Barn
   - The Old Apple Tallet

5. **Dates** should be in DD/MM/YYYY format (e.g. 12/07/2026)

## Step 2: Create the Google Form (optional but recommended)

This gives your mum a simple form instead of editing the spreadsheet directly.

1. Go to [forms.google.com](https://forms.google.com) and create a new form
2. Name it **"Add Booking"**
3. Add these questions:

   - **Cottage** (Dropdown, required)
     - Haypole Barn
     - Sandmartins
     - Kingfisher Cottage
     - Saffron Cottage
     - Swallow Barn
     - The Old Apple Tallet

   - **Check-in Date** (Date, required)

   - **Check-out Date** (Date, required)

   - **Guest Name** (Short answer, optional)

4. Link the form to your spreadsheet:
   - Click the **Responses** tab
   - Click the green spreadsheet icon
   - Choose **"Select existing spreadsheet"** and pick your "Waterloo Farm Bookings" sheet

5. **Important:** After linking, the form will create a new tab in the sheet.
   The column order may differ. Make sure the columns are:
   A=Cottage, B=Check-in, C=Check-out, D=Guest Name
   (You may need to delete the "Timestamp" column or rearrange)

## Step 3: Publish the Sheet as CSV

This is what lets the website read the booking data.

1. Open your Google Sheet
2. Go to **File > Share > Publish to web**
3. In the dropdown, select **Sheet1** (or whichever sheet has the bookings)
4. Change the format from "Web page" to **CSV**
5. Click **Publish**
6. **Copy the URL** it gives you — it will look like:
   `https://docs.google.com/spreadsheets/d/e/XXXXX/pub?gid=0&single=true&output=csv`

## Step 4: Add the URL to the Website

Give the CSV URL to Nick. He needs to add it to `hugo.toml`:

```toml
availability_sheet_url = "https://docs.google.com/spreadsheets/d/e/XXXXX/pub?gid=0&single=true&output=csv"
```

Then push to GitHub. After that, the availability page will be live and
will automatically show any bookings added via the form.

## How It Works Day-to-Day

1. A booking comes in (phone, email, etc.)
2. Your mum opens the Google Form bookmark on her phone/tablet/computer
3. She selects the cottage, enters check-in and check-out dates, and the guest name
4. She clicks Submit
5. The website availability calendar updates within a few minutes (Google caches the published CSV for ~5 minutes)

No logins, no code, no technical knowledge needed. Just a simple form.

## Tips

- **Block bookings**: Add one row per booking. A week's stay from Sat 4th July to Sat 11th July = Check-in 04/07/2026, Check-out 11/07/2026
- **Cancellations**: Just delete the row from the Google Sheet
- **Multiple weeks**: One row per continuous stay. If someone books 2 weeks, that's one row with the full date range
- **Past bookings**: You don't need to clear old bookings — the calendar shows past dates as greyed out automatically
