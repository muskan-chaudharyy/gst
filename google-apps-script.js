// Paste this entire script in Google Apps Script editor
// Extensions → Apps Script → replace everything → Save → Deploy (new deployment)

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; // always uses the first sheet

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submittedAt  || new Date().toLocaleString("en-IN", {timeZone: "Asia/Calcutta"}),
      data.name         || "",
      data.email        || "",
      data.phone        || "",
      data.course       || "",
      data.background   || "",
      data.message      || "",
      data.source       || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test this manually inside Apps Script:
// Run → doGet won't work, but you can test doPost by clicking Run after
// temporarily calling doPost with dummy data (optional, not required)
