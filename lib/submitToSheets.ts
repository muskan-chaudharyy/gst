/**
 * Submits form data to a Google Apps Script web app, which appends
 * a row to the GS Technology leads Google Sheet.
 *
 * HOW TO GET THE URL (see README or ask Kiro):
 * 1. Create a Google Sheet with headers in Row 1
 * 2. Extensions → Apps Script → paste the script → Deploy as web app
 * 3. Copy the web app URL and paste it in .env.local as NEXT_PUBLIC_SHEETS_URL
 */

const SHEETS_URL = process.env.NEXT_PUBLIC_SHEETS_URL ?? "";

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  course: string;
  background?: string;
  message?: string;
  submittedAt: string;
  source: "contact-page" | "home-form";
}

export async function submitToSheets(payload: LeadPayload): Promise<void> {
  if (!SHEETS_URL) {
    console.warn(
      "[submitToSheets] NEXT_PUBLIC_SHEETS_URL is not set. " +
        "Add it to .env.local once the Apps Script is deployed."
    );
    return;
  }

  console.log("[submitToSheets] Sending payload →", JSON.stringify(payload, null, 2));
  console.log("[submitToSheets] Target URL →", SHEETS_URL);

  try {
    // Use a URL with query params — works cleanly with no-cors and
    // Google Apps Script can read them via e.parameter in doGet/doPost.
    // We also send the body as plain text (not application/json) so the
    // browser doesn't trigger a CORS preflight that Apps Script can't handle.
    await fetch(SHEETS_URL, {
      method: "POST",
      mode: "no-cors",
      // "text/plain" is a CORS-safelisted content-type — no preflight needed
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    console.log("[submitToSheets] ✅ Request fired (no-cors — response is opaque, check your Sheet)");
  } catch (err) {
    console.error("[submitToSheets] ❌ Request failed:", err);
  }
}
