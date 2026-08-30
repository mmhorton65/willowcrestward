# Willow Crest Church Directory

A lightweight, mobile-first ministry directory for Willow Crest Church. Attendees can scan a QR code or tap an NFC link to quickly find ministry information and the latest shared document.

## Run locally

```bash
npm install
npm run dev
```

Check the production build with `npm run build`.

## Update organization content

Edit the `organizations` array in [`src/data/organizations.ts`](src/data/organizations.ts). Each entry contains the organization name, category, description, icon, accent color, Google Doc preview URL, meeting time, and location. Use a Google Docs `/preview` URL for the embedded document.

The app uses `/` for the home page and `/organization/:id` for each ministry detail page. Configure your production host to serve `index.html` for these routes.
