# Changelog — MOSBI Systems Landing Page

All notable changes to this project will be documented in this file.

Format: `[version] - YYYY-MM-DD` following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

> Changes approved but not yet in a versioned release.

---

## [0.7.0] - 2026-09-27

### Changed — Project Restructuring (Best Practices)

**Proposal A — Cleanup**
- Deleted 4 empty stub files (`script.js`, `styles.css` from root and `Landing page/`)
- Improved `.gitignore`: added OS, editors, Node, `.env`, and binary asset entries
- Created `README.md` with project structure, tech stack, i18n guide, and local dev instructions

**Proposal B — Folder consolidation**
- Moved `Landing page/landing page.md` → `docs/project.md`
- Removed `Landing page/` subfolder — root is now the single source of truth
- Eliminated manual `Copy-Item` sync step after every change

**Proposal C — Separate CSS and JS from HTML**
- Extracted all CSS → `assets/css/styles.css` (2,723 lines)
- Extracted app logic → `assets/js/main.js` (1,191 lines)
- Extracted i18n dictionary → `assets/js/translations.js` (901 lines)
- `index.html` reduced from **6,044 → 1,256 lines** (79% reduction, pure markup)
- `index.html` references: `<link rel="stylesheet">` + `<script src="">` for external files

**Proposal D — Replace PNG with SVG**
- Removed `mosbi-logo.png` (777 KB) from repository
- Official logo is now `logo.svg` — the Infinity-M (3 KB, vector, scalable)

**Proposal E — SEO meta tags**
- Added `<link rel="canonical" href="https://mosbisystems.com/">`
- Added `<link rel="icon" href="logo.svg" type="image/svg+xml">` (SVG favicon)
- Added `<meta name="robots" content="index, follow">`
- Added `<meta name="theme-color" content="#050917">`
- Added `<meta name="author" content="MOSBI Systems LLC">`

**Logo update**
- Replaced generic M logo in navbar with the **Infinity-M** SVG (∞ symbol integrated into the M letterform, neon cyan-to-blue gradient with depth layers)

### Fixed
- JS syntax error: 3 missing commas between injected translation key blocks (EN, ES, FR)
- `translations.js` and `main.js` both pass `node --check` syntax validation

---

## [0.6.0] - 2026-09-27

### Fixed
- **i18n — Mission section**: All elements now have `data-i18n` attributes (sub-badge, h2 heading, card-kicker, card-headline, paragraphs, pillar tags, vision feature titles/descriptions)
- **i18n — Capabilities section**: Tagged `sub-badge "Technology Stack"`, `h2 "What We Do"`, Card 2 (Computer Vision) title/badge/description
- **i18n — setLanguage()**: Now uses `innerHTML` for keys containing HTML tags (`mission.para1`, `mission.para2`) to preserve `<strong>` formatting
- **UI — Console telemetry panel**: Added `min-width: 0; overflow: hidden` to `.telemetry-panel`, `.console-body-grid`, and `.asset-spec-card` to fix right panel clipping

### Added
- 30+ new translation keys per language (EN/ES/FR) for mission & capabilities sections

---

## [0.5.0] - 2026-09-27

### Added
- Translations for **Why MOSBI** and **Future Products Roadmap** sections (EN/ES/FR)

### Fixed
- Navbar link spacing and header overflow
- Optical scanner bounding box alignment (switched from `right:` to `left:` positioning for all 4 machines)

---

## [0.4.0] - 2026-09-27

### Fixed
- Full multilingual translation coverage across all sections (EN/ES/FR)
- Removed duplicate Founder contact channel card (was showing `info@mosbisystems.com` twice)
- French apostrophe JS syntax error (`d'urgence` causing string parse failure) — fixed with `json.dumps()` serialization

### Changed
- Documentation (`landing page.md`) updated to reflect 3 contact channels and multi-language support

---

## [0.3.0] - 2026-09-27

### Added
- **Multi-language selector (EN / ES / FR)**: Globe icon dropdown in navigation bar
- `TRANSLATIONS` dictionary (EN/ES/FR) — all sections: nav, hero, metrics, mission, capabilities, product, industries, architecture, ROI, why, roadmap, company, contact, footer
- `setLanguage()` function with `localStorage` persistence and browser auto-detect
- `MACHINE_DATABASE_I18N` and `INDUSTRY_DATA_I18N` for dynamic section translations
- `data-i18n` attributes on all static DOM elements

---

## [0.2.0] - 2026-09-27

### Removed
- `founder@mosbisystems.com` contact channel card

---

## [0.1.0] - 2026-09-27

### Added
- Official **Infinity Loop M** logo integrated across site
- Brand typography gradient applied

### Changed
- Logo updated from Optical Wave M → Geometric Dual-Stroke M → Infinity Loop M (approved by owner)
- Location cleaned to "Maryland, USA" (removed "College Park" reference)

---

## [0.0.1] - 2026-09-26

### Added
- Initial landing page commit
- GitHub Pages configuration (`CNAME`: `mosbisystems.com`)
- Hero section with animated console scanner
- Metrics strip, Mission/Vision bento cards
- Core Capabilities (AI, Computer Vision, Mobile Apps, Cloud Software)
- Featured Product: Machine Identifier AI™
- Industries tabs (Manufacturing, Industrial, Facilities, Field Service, O&G, Utilities)
- Edge-to-Cloud architecture diagram
- ROI Calculator
- Why MOSBI differentiators
- Future Products roadmap
- Company profile section
- Contact form with 3 channels (info, sales, support)
- Animated neural canvas background, spotlight card effects
