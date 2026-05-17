# WhatsApp AI Agent with Gemini

This repository contains a WhatsApp AI agent powered by Google's Gemini API.

## Setup Instructions

1.  **Add Secrets**: Go to your GitHub Repository Settings -> Secrets and variables -> Actions.
    -   Add `GEMINI_API_KEY`: The API key you provided (`AIzaSyAnZdztSfs6oCGyCnnhzRvk2BHl4II4Nk4`). *Note: It is recommended to keep this secret.*
2.  **Run the Bot**:
    -   Go to the **Actions** tab.
    -   Select **WhatsApp Bot Run**.
    -   Click **Run workflow**.
3.  **Link WhatsApp**:
    -   Check the workflow logs.
    -   A QR code will be printed in the logs.
    -   Open WhatsApp on your phone (+8801627280992).
    -   Go to Linked Devices -> Link a Device.
    -   Scan the QR code from the GitHub Actions log.

Once linked, the bot will automatically reply to any messages received using the Gemini AI.
