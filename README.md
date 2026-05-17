# WhatsApp AI Agent with Gemini (Pairing Code Mode)

This repository contains a WhatsApp AI agent powered by Google's Gemini API. It uses the **Pairing Code** method, so you don't need to scan a QR code.

## Setup Instructions

1.  **Add Secrets**: Go to your GitHub Repository Settings -> Secrets and variables -> Actions.
    -   Add `GEMINI_API_KEY`: The API key you provided.
2.  **Run the Bot**:
    -   Go to the **Actions** tab.
    -   Select **WhatsApp Bot Run**.
    -   Click **Run workflow**.
3.  **Link WhatsApp via Pairing Code**:
    -   Check the workflow logs.
    -   Wait for a message: `YOUR WHATSAPP PAIRING CODE IS: XXXXXXXX`.
    -   Open WhatsApp on your phone (+8801627280992).
    -   Go to **Linked Devices** -> **Link a Device**.
    -   Select **Link with phone number instead**.
    -   Enter the 8-digit code shown in the GitHub Actions log.

Once linked, the bot will automatically reply to any messages received using the Gemini AI.
