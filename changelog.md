# Changelog — MOSBI Systems Landing Page

All notable changes to this project will be documented in this file.

Format: `[version] - YYYY-MM-DD` following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

> Changes approved but not yet in a versioned release.

---

## [0.8.0] - 2026-10-25

### Added
- **Machine Identifier AI™ Forensic Showcase Engine**:
  - Rebuilt the Hero interactive showcase to reflect what **Machine Identifier AI™** actually does, based directly on the source code and documentation from `C:\Users\hogar\Desktop\plugin maquinas` (`MACHINE_IDENTIFIER_SPECS.md` and `DOCUMENTACION_EJECUTIVA.md`).
  - Implemented multi-angle visual inspection slots (`PhotoRole`: 3D Silhouette Morphology, Nameplate OCR, Control Panel / Instrumentation, Connections & Flanges) with clickable switching and dynamic bounding box refocusing.
  - Featured the core forensic principle: *"⚡ Regla Forense: Ignora color de pintura (análisis estructural puro en equipos repintados)"*.
  - Configured 4 real-world test cases:
    1. **Goulds 3196 ANSI i-FRAME (ITT)**: 40% unreadable/repainted plate identified by 3D volute morphology, ANSI B73.1 flange spacing, and i-FRAME bearing housing.
    2. **Atlas Copco GA 55 VSD**: Direct OCR reading of rear stamped nameplate with Elektronikon controller and cyclonic separator match.
    3. **Siemens SIMOTICS GP 1LE1**: Hybrid forensic matching combining partial terminal box OCR with aluminum cooling fins and IEC 132M standard.
    4. **Joy Twistair TA-025**: Legacy 1980s unit with **Descontinuada (Obsolescente)** market condition warning, analog gauges, and downtime alert.
  - Implemented the official **Market Condition (Obsolescence) Badges**: `Activa (Soporte Oficial OEM)`, `Soporte Limitado`, and `Descontinuada (Obsolescente)`.
  - Added structured nominal technical specifications table (Power HP/kW, Pressure/Head, Nominal Flow, Voltage/RPM, Frame/Weight, Estimated Year).
  - Integrated direct links to verified OEM manufacturers and official service manual PDFs.
  - Created an interactive **Executive 10-Section PDF Datasheet Modal** (`#machinePdfModal`) with print/download simulation, formal audit header, photo evidence gallery, AI reasoning, inspector field notes, and cryptographic compliance watermark.

### Changed
- **Preserved & Archived Optical Scanner Simulator**:
  - Extracted the complete legacy HUD console, laser animation styles, SVG wireframes, and live telemetry log stream into `docs/future-projects/optical-inspection-simulator.md` for future AR smart glasses, drone navigation, and fixed GigE camera projects.
- **Localization (i18n) Engine**:
  - Added new localized translation keys across English, Spanish, and French for the entire showcase, multi-angle slots, forensic rules, specs table, and PDF preview modal.
  - Verified 100% dictionary coverage (253 of 253 keys resolved with 0 missing in EN, ES, and FR).
  - Incremented asset cache-busting tokens to `styles.css?v=13`, `translations.js?v=6`, and `main.js?v=11`.
  - Replaced the text prefix `MOSBI` in the PDF datasheet header with the official vector Mosbi infinity-M logo icon alongside `MACHINE IDENTIFIER AI™`.

### Fixed
- **Single-Page Executive PDF Print Layout (`@media print`)**:
  - Replaced `body * { visibility: hidden }` with `body > *:not(#machinePdfModal) { display: none !important }` so all surrounding website sections are removed from the print layout flow, eliminating the 30 blank pages.
  - Removed `max-height: 92vh` and `overflow: hidden` / `overflow-y: auto` clipping on `.pdf-modal-container` and `.pdf-sheet-scroll` during print so all 10 numbered sections render completely.
  - Scoped responsive mobile grid collapse to `@media screen and (max-width: 900px)` so 2-column metadata and 4-column photo grids stay intact on US Letter paper (`816px`), fitting all 10 sections onto a single sheet of paper (`1 of 1`).

---

## [0.7.6] - 2026-10-25

### Fixed
- **Comprehensive Multi-Language (i18n) Audit & Gap Resolution**:
  - Connected the Core Capabilities cards to the localization engine: added translations and `data-i18n` bindings for Card titles, descriptions, and all 12 capability bullet items across Artificial Intelligence, Computer Vision, Mobile Applications, and Cloud Software.
  - Linked Mission and Vision descriptive paragraphs (`mission.para1`, `mission.para2`, `mission.vision_para`, `mission.secondary`) to localized dictionary keys.
  - Bound ROI Calculator input labels, impact kickers, metrics, and CTA buttons to localized translation keys.
  - Enhanced `setLanguage()` to support rich HTML rendering (`.innerHTML` when tags are present) so formatted elements display properly.
  - Added real-time localization for the contact form department dropdown options.
  - Refined technical phrasing: replaced anglicisms like "Latencia en el Edge" with "Tiempo de Respuesta", updated "Pares de apriete inmediatos" to "Información técnica inmediata", and naturalized on-device edge references.
  - Incremented script cache-busting tokens to `translations.js?v=4` and `main.js?v=9`.

---

## [0.7.5] - 2026-10-25

### Added
- **Two-Way Channel Routing & Form Synchronization**:
  - Isolated copy-to-clipboard functionality strictly to the `.ch-copy-btn` element with `e.stopPropagation()`.
  - Converted `.ch-send-btn` and `.channel-box` cards into interactive department selectors (`data-department` and `data-target-dept`) that dynamically select the chosen department in the contact form, display an informative toast, and smoothly focus the form.
  - Added two-way state synchronization: changing the department in the form's `<select>` highlights the corresponding channel card with `.channel-active` glow styling.
  - Incremented cache query versions to `styles.css?v=10` and `main.js?v=8`.

---

## [0.7.4] - 2026-10-25

### Added
- **Silent Background Form Submission (Web3Forms API Integration)**:
  - Replaced the browser `mailto:` prompt with asynchronous `fetch()` API submission to `https://api.web3forms.com/submit` using the official MOSBI Systems Access Key.
  - Added native anti-spam honeypot botcheck field and structured JSON payload routing (`name`, `email`, `organization`, `department`, `message`).
  - Added localized multi-lingual success and error notifications across English, Spanish, and French with inline feedback and toast alerts.
  - Incremented script cache-busting version token to `v=7` in `index.html`.

---

## [0.7.3] - 2026-10-25

### Fixed
- **Contact Form Submission**: Resolved form field ID mapping mismatch in initContactForm() (ullName, workEmail, message). Added real-time input error clearing, multi-language validation messages, department routing, and direct mailto: dispatch with confirmation feedback.

---

## [0.7.2] - 2026-09-27

### Fixed
- **Console Grid Proportion (60% / 40%)**:
  - Configured `.console-body-grid` to `minmax(0, 60fr) minmax(0, 40fr)` giving 60% width to the interactive scanner HUD and 40% to the telemetry panel.
  - Sized `.optical-stage` to `240px` height with clean bounding box alignment.
  - Centered detection bounding box 2 (`box2`) coordinates in `MACHINE_DATABASE_I18N` across EN, ES, and FR so long labels like `Filtro de Aceite • INSPECCIONADO` never clip against the right edge.
  - Compacted `.machine-tab` and `.viewport-footer` stats with clean flex alignment and spacing.

- **High-Impact Metrics Strip Layout**:
  - Removed 3 ghost `<div class="metric-divider"></div>` DOM elements from `index.html`.
  - Replaced divider elements with native CSS right borders (`.metric-card:not(:last-child)`).
  - Adjusted responsive media queries so the 4 metrics stay in a single horizontal 4-column row on desktop and laptop displays, avoiding premature 2x2 wrapping with orphan slots.

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
