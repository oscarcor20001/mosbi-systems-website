# MOSBI Systems — Landing Page

**Intelligent Software for Industrial Operations**

> Live site: [mosbisystems.com](https://mosbisystems.com)

---

## About

MOSBI Systems LLC is a software company developing AI-powered tools for industrial asset management, computer vision, and field operations.

This repository contains the official landing page hosted on **GitHub Pages**.

---

## Project Structure

```
Mosbi systems/
├── index.html              # Main page (HTML markup only, ~250 lines)
├── logo.svg                # Official logo — Infinity-M (use this, not PNG)
├── CNAME                   # GitHub Pages custom domain
├── changelog.md            # Version history
├── README.md               # This file
├── mach_update.md          # Integration spec for the MachId™ demo page
├── .gitignore
├── machid/                 # MachId™ Machine Identifier AI (v2.0) interactive demo
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── assets/
├── fieldops-gen-pro/       # FieldOps Gen Pro demo page
├── docs/                   # Project docs and archived future projects
└── assets/
    ├── css/
    │   └── styles.css      # All CSS (2,700+ lines)
    └── js/
        ├── main.js         # App logic (canvas, scanner, industries, ROI, contact)
        └── translations.js # i18n dictionary — EN / ES / FR
```

---

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JavaScript — no framework dependencies
- GitHub Pages for hosting (static files served directly)
- Custom domain via `CNAME`: `mosbisystems.com`

---

## Multi-Language Support

The site supports **English (EN)**, **Spanish (ES)**, and **French (FR)** via a 🌐 globe dropdown in the navbar.

To add or edit translations, open [`assets/js/translations.js`](assets/js/translations.js) and find the `TRANSLATIONS` object. Each language is a nested object keyed by the same `data-i18n` attribute values used in the HTML.

---

## Running Locally

No build step needed. Open `index.html` directly in a browser, or use any static file server:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Editing Content

| What to edit | Where |
|---|---|
| HTML structure / copy | `index.html` |
| Visual styles (colors, layout, animations) | `assets/css/styles.css` |
| Interactive logic (scanner, ROI calc, contact form) | `assets/js/main.js` |
| Translations (EN/ES/FR) | `assets/js/translations.js` |
| Version history | `changelog.md` |

---

## Contact

- General: info@mosbisystems.com
- Sales: sales@mosbisystems.com
- Support: support@mosbisystems.com

---

© 2026 MOSBI Systems LLC
