/**
 * Google Apps Script for Waterloo Farm Holidays Calendar
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Create a Google Form with these fields:
 *    - Event Name (Short answer, required)
 *    - Event Date (Short answer, required) — e.g. "April 24-26, 2026"
 *    - Location (Short answer, required) — e.g. "Porthleven Harbour"
 *    - Event Type (Multiple choice, required) — Family, Food/Drink, Music, Traditional, Seasonal
 *    - Short Description (Short answer, required) — one sentence
 *    - Full Description (Paragraph, required) — a paragraph or two about the event
 *    - Website or Link (Short answer, optional)
 *
 * 2. Link the form to a Google Sheet (Responses tab > spreadsheet icon)
 *
 * 3. In the Google Sheet, add two extra columns after the form responses:
 *    - Column H: "Approved" (you'll type YES here to publish)
 *    - Column I: "Published" (the script fills this in automatically)
 *
 * 4. Open Extensions > Apps Script in the Google Sheet
 *
 * 5. Paste this entire script, replacing any default code
 *
 * 6. Update the CONFIG section below with your GitHub token and details
 *    - To create a GitHub token: GitHub > Settings > Developer Settings >
 *      Personal Access Tokens > Fine-grained tokens
 *    - Give it "Contents: Read and write" permission for your repo only
 *
 * 7. Set up a trigger: Run > Triggers > Add Trigger
 *    - Function: checkForApprovedEvents
 *    - Event source: Time-driven
 *    - Type: Minutes timer > Every 5 minutes
 *    (Or run it manually whenever you mark rows as approved)
 *
 * HOW IT WORKS:
 * - External parties fill in the Google Form
 * - You see their submissions in the Google Sheet
 * - You type YES in the "Approved" column for events you want to publish
 * - The script picks up approved rows, creates a calendar markdown file,
 *   and commits it to your GitHub repo via the API
 * - The existing GitHub Pages workflow automatically rebuilds the site
 */

// ============ CONFIG — UPDATE THESE ============
var CONFIG = {
  githubToken: 'YOUR_GITHUB_TOKEN_HERE',  // Fine-grained token with Contents write access
  githubOwner: 'NickWerren',
  githubRepo: 'waterloo-farm-holidays',
  approvedColumn: 8,   // Column H (1-indexed)
  publishedColumn: 9   // Column I (1-indexed)
};
// ================================================

/**
 * Checks the sheet for rows where Approved = YES and Published is empty.
 * For each one, creates a calendar event file on GitHub.
 */
function checkForApprovedEvents() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  // Skip header row
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var approved = String(row[CONFIG.approvedColumn - 1]).trim().toUpperCase();
    var published = String(row[CONFIG.publishedColumn - 1]).trim();

    if (approved === 'YES' && published === '') {
      try {
        var event = {
          timestamp: row[0],
          name: String(row[1]).trim(),
          eventDate: String(row[2]).trim(),
          location: String(row[3]).trim(),
          eventType: String(row[4]).trim(),
          shortDescription: String(row[5]).trim(),
          fullDescription: String(row[6]).trim()
        };

        publishEvent(event);

        // Mark as published
        sheet.getRange(i + 1, CONFIG.publishedColumn).setValue(
          'Published ' + new Date().toLocaleDateString()
        );

        Logger.log('Published: ' + event.name);
      } catch (e) {
        // Mark the error
        sheet.getRange(i + 1, CONFIG.publishedColumn).setValue('ERROR: ' + e.message);
        Logger.log('Error publishing row ' + (i + 1) + ': ' + e.message);
      }
    }
  }
}

/**
 * Creates a markdown file for the event and commits it to GitHub.
 */
function publishEvent(event) {
  var slug = event.name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  var month = getMonthFromDateString(event.eventDate);
  var sortDate = getSortDate(event.eventDate);
  var filePath = 'content/calendar/' + month + '/' + slug + '.md';

  var content = '---\n'
    + 'title: "' + event.name + '"\n'
    + 'date: ' + sortDate + '\n'
    + 'event_date: "' + event.eventDate + '"\n'
    + 'location: "' + event.location + '"\n'
    + 'event_type: "' + event.eventType + '"\n'
    + 'description: "' + event.shortDescription + '"\n'
    + 'type: "calendar"\n'
    + 'featured: false\n'
    + '---\n\n'
    + '## ' + event.name + '\n\n'
    + event.fullDescription + '\n\n'
    + '**Date:** ' + event.eventDate + '\n'
    + '**Location:** ' + event.location + '\n'
    + '**Type:** ' + event.eventType + '\n';

  commitToGitHub(filePath, content, 'Add calendar event: ' + event.name);
}

/**
 * Commits a file to GitHub via the API.
 */
function commitToGitHub(path, content, message) {
  var url = 'https://api.github.com/repos/' + CONFIG.githubOwner + '/' + CONFIG.githubRepo + '/contents/' + path;

  // Check if file already exists (to get its SHA for updates)
  var sha = null;
  var checkResponse = UrlFetchApp.fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + CONFIG.githubToken,
      'Accept': 'application/vnd.github.v3+json'
    },
    muteHttpExceptions: true
  });

  if (checkResponse.getResponseCode() === 200) {
    sha = JSON.parse(checkResponse.getContentText()).sha;
  }

  var payload = {
    message: message,
    content: Utilities.base64Encode(content)
  };

  if (sha) {
    payload.sha = sha;
  }

  var response = UrlFetchApp.fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + CONFIG.githubToken,
      'Accept': 'application/vnd.github.v3+json'
    },
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });

  if (response.getResponseCode() !== 200 && response.getResponseCode() !== 201) {
    throw new Error('GitHub API returned ' + response.getResponseCode() + ': ' + response.getContentText());
  }
}

/**
 * Extracts the month name from a date string like "April 24-26, 2026"
 */
function getMonthFromDateString(dateStr) {
  var months = {
    'jan': 'january', 'feb': 'february', 'mar': 'march', 'apr': 'april',
    'may': 'may', 'jun': 'june', 'jul': 'july', 'aug': 'august',
    'sep': 'september', 'oct': 'october', 'nov': 'november', 'dec': 'december'
  };

  var lower = dateStr.toLowerCase();
  for (var key in months) {
    if (lower.indexOf(key) === 0 || lower.indexOf(' ' + key) !== -1) {
      return months[key];
    }
  }

  // Default to the first word if it matches a month
  var firstWord = lower.split(' ')[0].replace(/[^a-z]/g, '');
  for (var key in months) {
    if (firstWord.indexOf(key) === 0) {
      return months[key];
    }
  }

  return 'recurring'; // fallback
}

/**
 * Tries to extract a YYYY-MM-DD date from a string like "April 24-26, 2026"
 */
function getSortDate(dateStr) {
  var months = {
    'january': '01', 'february': '02', 'march': '03', 'april': '04',
    'may': '05', 'june': '06', 'july': '07', 'august': '08',
    'september': '09', 'october': '10', 'november': '11', 'december': '12'
  };

  var lower = dateStr.toLowerCase();
  var monthNum = '01';
  var year = '2026';
  var day = '01';

  // Find month
  for (var name in months) {
    if (lower.indexOf(name) !== -1 || lower.indexOf(name.substring(0, 3)) !== -1) {
      monthNum = months[name];
      break;
    }
  }

  // Find year
  var yearMatch = dateStr.match(/20\d{2}/);
  if (yearMatch) {
    year = yearMatch[0];
  }

  // Find first day number
  var dayMatch = dateStr.match(/\b(\d{1,2})\b/);
  if (dayMatch) {
    day = dayMatch[1].length === 1 ? '0' + dayMatch[1] : dayMatch[1];
  }

  return year + '-' + monthNum + '-' + day;
}
