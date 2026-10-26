# Changelog — MOSBI Systems Landing Page

All notable changes to this project will be documented in this file.

Format: `[version] - YYYY-MM-DD` following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

> Changes approved but not yet in a versioned release.

---

## [0.9.4] - 2026-10-25

### Refactored & Enhanced
- **Consultative Conversational Courtesy & Time-of-Day Greetings**:
  - Implemented dynamic client-side getTimeGreeting(lang) detecting visitor local hour (Buenos días / Buenas tardes / Buenas noches).
  - Polite greetings on casual hellos without aggressive sales pitches or premature lead forms.
- **Incoherent & Ambiguous Query Clarification Loop**:
  - Replaced immediate catalog dumping on filler words (e.g., "aja", "ok", "ah", "bueno") or vague/incoherent messages with a polite clarification inquiry: *"¿Podría ser más específico en su requerimiento o consulta? ¿O requiere alguna orientación para su empresa?"*
  - Interactive choices provided: `[ ✅ Sí, deseo orientación ]` and `[ ❌ No, gracias ]`.
  - Dynamic branching based on response:
    - If user affirms ("sí", "claro", "por favor"): presents the three core SaaS areas with structured action buttons.
    - If user declines ("no", "no gracias"): respectfully signs off wishing them a pleasant day/night without forcing sales pitches.
- **Maximized Chat Viewport & Screen Space Architecture**:
  - Re-architected quick chips into a single-row horizontally scrollable pill strip.
  - Expanded chat panel viewport (440px x 720px max).

---

## [0.9.3] - 2026-10-25

### Added
- **Waste & Compaction Suite Agent Packaged (`fieldops-gen-pro/`)**:
    - Packaged and isolated the specialized Waste Compactor & Chute Agent into `fieldops-gen-pro/waste-compactor-chat.js` and `fieldops-gen-pro/waste-compactor-chat.css`.
    - Fully preserves all deep domain expertise for waste compactors, 24" chutes, AutoPak 1830-STD (Toronita Corp 115V 1HP), Precision 1830-2000 vs 1830-4000, Front vs Rear Load, and WasteCaddy (DJ Products 36V DC 550 lbs drawbar pull) user guide for client embedding and trade-specific deployment.
  - **MOSBI Systems Core SaaS & Field Software Bot Architecture (`mosbisystems.com`)**:
    - Re-aligned the main landing page AI assistant (`assets/js/mosbi-chat.js`) to reflect MOSBI Systems LLC's core commercial offerings:
      - **MachId™ Machine Identifier AI (v2.0)**: Visual AI recognition for industrial assets, zero-barcode identification, forensic OCR, schematics retrieval, and live demos.
      - **FieldOps Gen Pro (SaaS)**: Field service management across all trade packs (HVAC, Roofing, Plumbing, Electrical, Security, Solar, Waste Management) with van inventory, smart dispatch, Findings → Proposals → Work Orders, and 90 OSHA safety standards.
      - **High-Converting Software & Web Portals for Trade Contractors**: Custom websites, web platforms, and mobile apps engineered for field service companies managing fleets, technicians, and continuous service calls.
      - **Custom AI & Mobile Engineering**: Offline-first Flutter mobile apps and CMMS/ERP cloud integrations.
    - Preserves autonomous robot mascot animations (floating, head-scratching, winking with OK sparkle, 28s inactivity sleep mode with floating Zzz, instant wake-up jolt).
    - Preserves confidential lead qualification and human handoff: silently transmits complete structured dossiers and conversation logs to `oscar@mosbisys.com` while confirming a warm, professional follow-up on screen.
  - **Consultative Lead Qualification & Human Handoff Architecture (To `oscar@mosbisys.com`)**:
    - Defined the core operational role of the bot: it acts as a technical intake and qualification assistant (*Discovery & Triage Copilot*) rather than an encyclopedia. It uses its engineering knowledge to ask the right questions and extract key parameters (room size, sill height, load door dimensions, front vs rear load, ramps/distance for Waste Caddy, voltage, and building address).
    - Guarantees the customer that **they will be attended to as soon as possible by a human representative from MOSBI Systems** to close the sale or conduct an on-site technical inspection to craft their formal Proposal.
    - **Strict Commercial Confidentiality & Sales Engineering Protection**:
      - Eliminated technical model capacity leakage (e.g., removed explicit mention of `~0.5 yd³` and specific factor counts) preventing prospective clients from price-shopping competing manufacturers.
      - Standardized commercial positioning: affirms that **MOSBI Systems possesses machines and systems meeting the customer's exact requirements**.
      - Enforced mandatory on-site inspection protocol: establishes that **it is indispensable to audit the technical characteristics of the site**, mandating an **on-site visit by a technical service representative** to determine equipment requirements and draft a formal proposal.
      - **Confidential Backend Transmission**: suppressed any client-facing exposure of the internal recipient email (`oscar@mosbisys.com`). The dispatch button cleanly prompts `Solicitar Inspección Técnica / Enviar Información`.
      - **Warm & Professional Client Handoff**: upon form submission, the bot warmly confirms that *their valuable interaction has been of great help and that their request will be attended to as soon as possible by technical service personnel to coordinate the on-site inspection and prepare their proposal*, while dispatching the complete dossier to `oscar@mosbisys.com` in the background.
  - **Animated Vector Robot Character (Mascot)**:
    - High-tech SVG robot with metallic head chassis, glowing cyan antenna pulse light, reactor core, and LED visor eyes.
    - **Head-Scratch Animation (`.is-scratching`)**: tilts head quizzically, articulates right arm to the temple/antenna, and performs realistic scratching motions with kinetic motion lines while analyzing knowledge base queries or idling.
    - **Wink & OK Animation (`.is-winking`)**: right LED eye winks into a cheerful digital arc (`;-)`) with head nod and glowing cyan OK sparkle pop whenever answers or confirmations are delivered.
    - **Inactivity Sleep / Standby Mode (`.is-sleeping`)**: if the visitor pauses or takes too long to type (28 seconds of inactivity), the robot automatically droops its head, closes its eyes into relaxed horizontal resting lines, dims its antenna to low-power pulse, and emits floating animated cyan `Zzz` particles.
    - **Instant Wake-up Jolt (`.is-waking`)**: as soon as the client starts typing, presses a key, or clicks the input area, the robot jolts awake immediately, expands its eyes, and winks in ready stance.
  - **MOSBI Knowledge Base & Natural Engine**:
    - Specialized conversational understanding covering **MachId™ Machine Identifier AI (v2.0)** (3D morphology, zero-barcode vision, schematics), **FieldOps Gen Pro** (van inventory, 90 OSHA standards, guided receipts), custom enterprise software/AI consulting, and ROI calculation.
    - Interactive 1-click Quick Action Chips (Pills) for instant topic navigation.
    - Embedded interactive demo links with smooth scrolling to `#contact` and direct links to `machid/index.html` and `fieldops-gen-pro/index.html`.
    - In-chat lead capture card for rapid consultation/pilot booking.
  - **Multi-Storey Compaction & Waste Chute Domain Knowledge**:
    - Elevated waste compaction consultation from rigid model recommendation to an engineering survey checklist:
      - Explains critical distinction between **Precision 1830-4000** (tight/restricted trash rooms) and **Precision 1830-2000** (standard/spacious rooms).
      - **Datasheet Knowledge Ingestion (AutoPak 1830-STD by Toronita Corporation)**:
        - Ingested official forensic datasheet (`Datasheet_AutoPak_1830-STD.pdf`, Ref ID: 8CC11EF7):
          - OEM Manufacturer: AutoPak / Toronita Corporation (York, PA 17402).
          - Model & Serial: MOD. NO. 1830-STD, S/N 793-6302, 1980–1995 vintage (Discontinued / Active Retrofit status).
          - Electrical Ratings: 1.0 HP motor, 115V Single-Phase (1 Ph), 60 Hz, 15.2A current (dedicated 20A branch circuit).
          - Forensic Context: Overhead gravity refuse chute application docking into a green mobile container with turnbuckle tensioners.
          - Engineered response logic for 115V single-phase building inquiries, contrasting vintage 115V 1HP Toronita units with modern 208V/230V/460V 3Ph 2–3HP Precision 1830-2000 / 1830-4000 equipment.
      - **Manual Knowledge Ingestion (WasteCaddy Standard User Guide by DJ Products, Inc.)**:
        - Ingested official operating manual (`WasteCaddy-Standard-User-Guide.pdf`):
          - Power Train: 36V DC electric motor (1.0 HP nominal / 2.0 HP peak) with 36V solid-state controller.
          - Battery System: Three (3) 12V deep-cycle marine lead-acid batteries in series (36V system), with onboard 110V AC automatic charger (~8 hr charge, ~8 hr runtime).
          - Drawbar Pull: 550 lbs (249 kg) max draw bar pull to safely haul loaded 2,000–3,000 lb commercial dumpsters.
          - Ergonomics & Speed: Twist-grip handlebars (0–3 mph forward, 0–1.5 mph reverse) with instrument panel speed governor (1–3).
          - Dimensions & Chassis: 44" L x 26.4" W x 41.1" H, 700 lbs total weight, dual 12" front foam-filled drive tires, 8" rear swivel caster.
          - Safety Systems: 5th wheel pivoting dumpster arm (90° left/right) with locking pin, red belly-bumper emergency stop switch (auto halts and inches forward to unpin operator), and manual free-wheel lever at 7 o'clock position for unpowered pushing.
          - Integrated PM protocols into **FieldOps Gen Pro** (monthly distilled water checks, quarterly caster grease & 80/90W transaxle gear oil checks).
      - Added comprehensive hauler compatibility & handling logistics:
        - Audits container mechanical pickup style: **Front Load** (fork pockets) vs **Rear Load** (trunnion bar/winch) to match the waste collection hauler fleet.
        - Audits container tow hitch availability and transport logistics from compactor room to truck pickup point:
          - Flat/single-level, no ramps -> recommends **Waste Caddy Light** for ergonomic zero-strain hauling.
          - Ramp, incline, or long transfer distances -> mandates **Waste Caddy Heavy Duty** (electromagnetic braking and high-torque transaxle for 1,500+ lb containers under OSHA guidelines).
      - Mandates surveying available building voltage (208V/230V/460V 3Ph vs 1Ph), floor-to-container sill height (so machine discharge snout penetrates inside container and prevents trash spillover), container load door width/height (preventing snout wider than container door opening disaster), and existing vs standard container reuse.
      - Connects directly with **MachId™** for photographic asset measurement and OEM tag OCR.
    - Accurately recommends **Chute-Fed Apartment Compactors** (specifically benchmarked to the **Precision Machinery Systems Auto-Pak 1830-4000** 2.0-3.0 HP unit), covering NFPA 82 165°F fusible-link fire dampers, 2 yd³ caster containers, photo-electric eye automatic gravity cycling, and cross-integration with **MachId™** and **FieldOps Gen Pro**.
    - Added dedicated quick action chip `🏢 Compactadores & Chutes` across ES, EN, and FR.
  - **Full Tri-lingual Synchronization (ES, EN, FR)**:
    - Automatically syncs with `translations.js` via `mosbi_lang_change` event and `localStorage.getItem("mosbi_lang")`.
    - In-chat language toggle button to seamlessly flip between Spanish, English, and French.

---

## [0.9.2] - 2026-10-25

### Fixed
- **MachId™ compactor identification precision (`machid/`)**:
  - Replaced generic/unverified "Marathon / Wastequip" placeholder references with the exact machine shown in the inspection photograph (`compactor_chute_3.jpg`): **Precision Machinery Systems Auto-Pak Model No. 1830-4000** (York, PA - S/N 871344-015, 208V / 3Ph / 60 Hz / 7.1A / 2 HP).
  - Aligned bounding boxes in `machid/data.js` for `compactor_chute_3.jpg` to accurately enclose the manufacturer & model title (`bbox1: top: 11%, left: 31%, width: 58%, height: 23%`) and the stamped serial number & electrical ratings (`bbox2: top: 34%, left: 31%, width: 58%, height: 15%`).
  - Updated Shot 3 role, HUD nodes, and forensic analysis across ES, EN, and FR: replaced "Unidad Hidráulica y Panel / Three-Phase HPU Motor" with "Placa OEM y Datos Eléctricos / OEM Nameplate & Electrical Specs", correctly attributing the photo to the riveted factory nameplate with direct industrial OCR.
  - Synchronized fallback HTML in `machid/index.html` and UI strings in `machid/app.js`.
  - **Language switcher button styling (`machid/`)**: simplified the multi-language label string (`ES | [EN] | FR`) which caused awkward multiline wrapping to display only the single active language code (`ES`, `EN`, or `FR`), perfectly centered inside a dedicated button container with `white-space: nowrap` and responsive topbar spacing.
  - **FieldOps Gen Pro Dark Industrial Theme (`fieldops-gen-pro/`)**: transformed the FieldOps Gen Pro landing page from its previous light theme (`#F1F6FC`) to MachId high-tech dark industrial theme (`#060b16` / `#0d1627` / `#132038` with radial teal/amber glow, glassmorphic cards, vibrant warranty/readiness badges, and dark-themed AI chatbox widget).
  - **FieldOps Gen Pro Header & Navigation Cleanup (`fieldops-gen-pro/`)**: removed the redundant "Abrir App Web" / "Launch Web App" link from the top navigation and elevated the language switcher button to the primary top-bar action, displaying only the single centered language code (`ES` or `EN`) with shared persistence via `mosbi_lang`.
  - **FieldOps Gen Pro Official Branding Assets (`fieldops-gen-pro/`)**: imported the official high-resolution `app_icon.png` from the Flutter codebase into `fieldops-gen-pro/assets/`, replacing the generic "FO" placeholder in the topbar with the official brand icon and configuring the favicon.
  - **FieldOps Gen Pro AI Demo Chat Language Synchronization (`fieldops-gen-pro/`)**:
    - Fixed initial language mismatch where the chat widget booted in English (`en`) even when viewing the Spanish page. Updated `detectLang` to inspect `document.documentElement.lang` and `localStorage.getItem('mosbi_lang')` / `fop_lang` before falling back to `navigator.language`.
    - Harmonized chat header language toggle button to display the clean active language code (`ES` or `EN`) instead of the inverse full word ("Español" / "English"), matching the topbar style with tooltip and centered typography.
    - Synchronized dynamic language switching between the page (`app.js`) and chat widget (`fieldops-chat.js`) via `mosbi_lang_change` event and `FieldOpsChat.setLang()`.
    - Added dynamic message update in `applyLang()` so the demo greeting ("¡Hola! Soy el asistente de IA de Cielo Frío HVAC..." vs "Hello! I am the AI assistant for Cool Sky HVAC...") and branding title switch language instantly without page reloads.

---

## [0.9.1] - 2026-10-25

### Fixed
- **MachId™ demo (`machid/`) language (i18n) errors**:
  - Previously only the surrounding UI labels were translated; all mode content (titles, forensic verdicts, specs, node/bbox labels, scan logs, v2.0 modules), scan status messages, PDF dossier, FieldOps modal, pillar texts and footer stayed in Spanish when EN/FR was selected.
  - Added `machid/data.js` with fully localized mode content for **ES / EN / FR** (language-independent images and bounding boxes are kept separate).
  - Rewrote `machid/app.js`: every visible string now resolves through `t()`; `data-i18n` / `data-i18n-html` / `data-i18n-aria` bindings added in `machid/index.html`; document `<title>` and `<html lang>` follow the selected language.
  - Language now defaults to the visitor's saved `mosbi_lang` (shared with the main site) or browser language, persists on change, and re-renders the datasheet and any open modal instantly.
  - Fixed inconsistent figure in the Financial Audit verdict (68% vs 76% overhaul savings) and removed literal backticks shown in the FieldOps pillar text.
  - Verified: 0 missing keys across ES/EN/FR (UI strings, HTML bindings and all 4 modes).

---
## [0.9.0] - 2026-10-25

### Added
- **MachId™ Machine Identifier AI (v2.0) Interactive Demo Page (`machid/`)**:
  - New standalone demo (`machid/index.html`, `machid/styles.css`, `machid/app.js`, `machid/assets/`) with a 3-step animated simulator (mode selection and capture, forensic AI scan, structured datasheet with printable PDF and FieldOps Gen Pro™ export).
  - Four v2.0 operating modes: Distributed System (Multi-Node), Component / Spare Part (OEM Cross-Reference), Complete Machine, and Financial Audit & CAPEX.
  - Back-link to `MOSBI Systems` and bridge to `fieldops-gen-pro/index.html`.
- **Documentation**: Added `mach_update.md` (integration spec for the `machid/` page) with its checklist completed.

### Changed
- **Official Product Trademark Rebranding (`MachId™ Machine Identifier AI`)**:
  - Updated all product brand references across `index.html`, `assets/js/translations.js` (EN, ES, FR), `assets/js/main.js`, and `docs/project.md`.
  - `#hero` CTA, `#product` heading and a new `Launch Interactive MachId™ Simulator (v2.0)` button now link to `machid/index.html`.
  - Added localized key `prod.cta_interactive` (EN, ES, FR); cache-busting tokens now `translations.js?v=8` and `main.js?v=12`.
- `README.md` and `docs/project.md` updated with the new structure and product name.

### Known Issues
- Several language (i18n) errors remained in the `machid/` demo page (resolved in 0.9.1).

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
  - Replaced the text prefix `MOSBI` in the PDF datasheet header with the official vector Mosbi infinity-M logo icon alongside `MachId™ MACHINE IDENTIFIER AI`.

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
