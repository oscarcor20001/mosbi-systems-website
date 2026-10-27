(function () {
  "use strict";

  const SUPPORTED = ["es", "en", "fr"];
  const STORAGE_KEY = "mosbi_lang"; // same key as the main mosbisystems.com site

  let currentLang = detectInitialLang();
  let currentMode = "distributedSystem";
  let currentSlotIndex = 0;
  let scanTimers = [];

  function detectInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* storage unavailable */ }
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : "en";
  }

  /* ------------------------------------------------------------------ UI strings */
  const UI_STRINGS = {
    es: {
      "doc.title": "MachId™ Machine Identifier AI (v2.0) — Demo Interactiva | MOSBI Systems",
      "nav.back": "← MOSBI Systems",
      "nav.sim": "Simulador en Vivo",
      "nav.pillars": "Arquitectura v2.0",
      "nav.fieldops": "FieldOps Gen Pro™",
      "nav.run_demo": "▶ Probar Escaneo Animado",
      "nav.lang_title": "Cambiar idioma (ES / EN / FR)",
      "brand.sub": "v2.0 • MOSBI Systems LLC",
      "hero.eyebrow": "DEMO INTERACTIVA EN VIVO • GEMINI 3.6 FLASH MULTIMODAL + GROUNDING",
      "hero.title_1": "De la Fotografía en Campo al",
      "hero.title_2": "Dossier de Ingeniería en Segundos",
      "hero.lead": "Selecciona cualquiera de los 4 modos operativos de MachId™ v2.0, cambia entre las fotografías reales de inspección y ejecuta el escaneo forense animado para ver cómo la IA identifica equipos completos, sistemas multi-nodo, repuestos OEM y auditorías CAPEX.",
      "mode.aria": "Modos operativos de MachId v2.0",
      "mode.tag_new": "NUEVO v2.0",
      "mode.m1_title": "Sistema Distribuido (Multi-Nodo)",
      "mode.m1_desc": "Compactadora / Enfardadora Horizontal Model 72 Closed End Baler con rampa in-feed, cámara y unidad hidráulica.",
      "mode.tag_oem": "CROSS-REF OEM",
      "mode.m2_title": "Componente / Repuesto",
      "mode.m2_desc": "Bomba Cat Pumps 5CP2120W con tabla de equivalencias Aftermarket.",
      "mode.tag_3d": "SILUETA 3D",
      "mode.m3_title": "Máquina Completa",
      "mode.m3_desc": "Reconocimiento estructural ignorando pintura superficial o placas dañadas.",
      "mode.tag_capex": "CAPEX Y VIDA ÚTIL",
      "mode.m4_title": "Auditoría Financiera",
      "mode.m4_desc": "Dictamen de depreciación, vida útil remanente y Reemplazo vs. Overhaul.",
      "step.aria": "Flujo de trabajo de 3 pasos",
      "step.s1_title": "Captura Guiada Multi-Ángulo",
      "step.s1_sub": "Fotos reales + Etiquetas de Nodo",
      "step.s2_title": "Escaneo Forense IA Multimodal",
      "step.s2_sub": "Morfología 3D + OCR + Search Grounding",
      "step.s3_title": "Ficha Técnica v2.0 y Dossier PDF",
      "step.s3_sub": "Impresión 1 página + Puente FieldOps™",
      "phone.brand": "MachId™ Inspector v2.0",
      "sim.alt": "Inspección industrial",
      "sim.slots_label": "Tomas Fotográficas Capturadas (haz clic para cambiar ángulo):",
      "sim.counter": "3 / 3 Tomas",
      "sim.shot1": "📸 Toma 1",
      "sim.shot2": "🏷️ Toma 2",
      "sim.shot3": "🎛️ Toma 3",
      "sim.btn_rescan": "⚡ Simular Captura y Escaneo Forense IA en Vivo",
      "scan.s1": "📸 Paso 1/3: Capturando ángulos y etiquetas de nodo...",
      "scan.s2": "🔍 Paso 2/3: Analizando silueta 3D (ignorando pintura)...",
      "scan.s2b": "🌐 Consultando Gemini 3.6 Flash + Google Search Grounding...",
      "scan.s3": "✔ Paso 3/3: Ficha Técnica v2.0 y Dossier PDF Generados",
      "scan.done": "✔ Análisis Forense Completado (100%)",
      "ds.forensic_heading": "Dictamen Forense Multimodal (Ignorando Pintura Superficial)",
      "ds.btn_pdf": "Ver / Imprimir Dossier PDF (1 Página)",
      "ds.btn_fieldops": "Exportar a FieldOps Gen Pro™ (JSON)",
      "pil.title": "¿Por qué MachId™ v2.0 transforma la Ingeniería de Campo?",
      "pil.sub": "Diseñado por MOSBI Systems LLC para eliminar la pérdida de tiempo buscando placas ilegibles, manuales extraviados o repuestos descontinuados.",
      "pil.p1_t": "1. Regla Forense Anti-Repintado",
      "pil.p1_d": "La IA ignora el color de pintura superficial (equipos repintados en planta) y clasifica exclusivamente por geometría 3D de fundición, bridas, nervaduras y silueta estructural.",
      "pil.p2_t": "2. Sistemas Distribuidos Multi-Nodo",
      "pil.p2_d": "Inspecciona activos que atraviesan múltiples pisos o salas (chutes, trenes de bombeo, HVAC, tableros PLC) consolidando cada nodo en un único expediente coherente.",
      "pil.p3_t": "3. Cross-Reference OEM y Aftermarket",
      "pil.p3_d": "Identifica bombas, válvulas, sellos y resortes individuales entregando equivalencias directas en Parker, SKF, Grainger y McMaster-Carr cuando el OEM está obsoleto.",
      "pil.p4_t": "4. Puente Nativo FieldOps Gen Pro™",
      "pil.p4_d": "Exporta en 1 clic el activo identificado y sus hallazgos (Findings → Proposals → Work Orders) respetando la regla de oro de auditoría SC ≠ WO.",
      "pdfm.title": "MachId™ v2.0 — Vista Previa del Dossier Ejecutivo en PDF (1 Página US Letter)",
      "pdfm.print": "🖨️ Imprimir / Guardar PDF",
      "pdfm.close": "✕ Cerrar",
      "pdf.subtitle": "DOSSIER EJECUTIVO DE INSPECCIÓN FORENSE • MOSBI SYSTEMS LLC • info@mosbisystems.com",
      "pdf.date": "Fecha:",
      "pdf.mode": "Modo:",
      "pdf.pages": "Páginas:",
      "pdf.pages_val": "1 de 1 (US Letter)",
      "pdf.sec1": "1. Identificación Positiva del Activo",
      "pdf.sec2": "2. Dictamen Forense Multimodal (Gemini 3.6 Flash)",
      "pdf.sec3": "3. Evidencia Fotográfica Multi-Ángulo / Nodos Inspeccionados",
      "pdf.sec4": "4. Especificaciones Nominales de Ingeniería",
      "pdf.footer_l": "Generado por MachId™ Machine Identifier AI v2.0 • © 2026 MOSBI Systems LLC (info@mosbisystems.com)",
      "pdf.footer_r": "Compatible con FieldOps Gen Pro™ (SC ≠ WO)",
      "fom.title": "FieldOpsMachineAdapter — Payload de Sincronización Directa (SC ≠ WO)",
      "fom.close": "✕ Cerrar",
      "fom.intro": "Este es el paquete JSON estructurado generado automáticamente por <code>FieldOpsMachineAdapter</code> en <strong>MachId™ v2.0</strong> para registrar el equipo y convertir anomalías visuales en <em>Findings</em> dentro de <strong>FieldOps Gen Pro™</strong>:",
      "fom.go": "Ir al Simulador de FieldOps Gen Pro™ →",
      "foot.main": "<strong>MachId™ Machine Identifier AI (v2.0)</strong> — Un producto insignia de <a href=\"../index.html\">MOSBI Systems LLC</a>.",
      "foot.contact": "info@mosbisystems.com • Maryland, EE. UU."
    },

    en: {
      "doc.title": "MachId™ Machine Identifier AI (v2.0) — Interactive Demo | MOSBI Systems",
      "nav.back": "← MOSBI Systems",
      "nav.sim": "Live Simulator",
      "nav.pillars": "v2.0 Architecture",
      "nav.fieldops": "FieldOps Gen Pro™",
      "nav.run_demo": "▶ Run Animated Scan",
      "nav.lang_title": "Change language (ES / EN / FR)",
      "brand.sub": "v2.0 • MOSBI Systems LLC",
      "hero.eyebrow": "LIVE INTERACTIVE DEMO • GEMINI 3.6 FLASH MULTIMODAL + GROUNDING",
      "hero.title_1": "From Field Photographs to",
      "hero.title_2": "Engineering Dossier in Seconds",
      "hero.lead": "Select any of the 4 operating modes in MachId™ v2.0, switch across real inspection photos, and run the animated forensic scan to see how AI identifies complete machines, multi-node systems, OEM parts, and CAPEX audits.",
      "mode.aria": "MachId v2.0 operating modes",
      "mode.tag_new": "NEW v2.0",
      "mode.m1_title": "Distributed System (Multi-Node)",
      "mode.m1_desc": "Model 72 Closed End Baler horizontal hydraulic baler with in-feed conveyor ramp, compaction chamber and HPU.",
      "mode.tag_oem": "OEM CROSS-REF",
      "mode.m2_title": "Component / Spare Part",
      "mode.m2_desc": "Cat Pumps 5CP2120W triplex plunger pump with aftermarket cross-references.",
      "mode.tag_3d": "3D SILHOUETTE",
      "mode.m3_title": "Complete Machine",
      "mode.m3_desc": "Structural 3D recognition ignoring surface paint or corroded nameplates.",
      "mode.tag_capex": "CAPEX & LIFECYCLE",
      "mode.m4_title": "Financial Audit",
      "mode.m4_desc": "Depreciation assessment, remaining useful life, and Replace vs. Overhaul.",
      "step.aria": "3-step workflow",
      "step.s1_title": "Guided Multi-Angle Capture",
      "step.s1_sub": "Real photos + Node Tags",
      "step.s2_title": "Multimodal Forensic AI Scan",
      "step.s2_sub": "3D Morphology + OCR + Search Grounding",
      "step.s3_title": "v2.0 Technical Sheet & PDF Dossier",
      "step.s3_sub": "1-Page Print + FieldOps™ Bridge",
      "phone.brand": "MachId™ Inspector v2.0",
      "sim.alt": "Industrial inspection",
      "sim.slots_label": "Captured Inspection Photos (click to switch angle):",
      "sim.counter": "3 / 3 Shots",
      "sim.shot1": "📸 Shot 1",
      "sim.shot2": "🏷️ Shot 2",
      "sim.shot3": "🎛️ Shot 3",
      "sim.btn_rescan": "⚡ Simulate Live Capture & Forensic AI Scan",
      "scan.s1": "📸 Step 1/3: Capturing angles and node tags...",
      "scan.s2": "🔍 Step 2/3: Analyzing 3D silhouette (ignoring paint)...",
      "scan.s2b": "🌐 Querying Gemini 3.6 Flash + Google Search Grounding...",
      "scan.s3": "✔ Step 3/3: v2.0 Technical Sheet & PDF Dossier Generated",
      "scan.done": "✔ Forensic Analysis Complete (100%)",
      "ds.forensic_heading": "Multimodal Forensic Verdict (Ignoring Surface Paint)",
      "ds.btn_pdf": "View / Print Executive PDF (1 Page)",
      "ds.btn_fieldops": "Export to FieldOps Gen Pro™ (JSON)",
      "pil.title": "Why MachId™ v2.0 Transforms Field Engineering",
      "pil.sub": "Engineered by MOSBI Systems LLC to eliminate wasted hours decoding unreadable nameplates, missing manuals, or obsolete spare parts.",
      "pil.p1_t": "1. Anti-Repaint Forensic Rule",
      "pil.p1_d": "The AI ignores surface paint color (equipment repainted in the plant) and classifies exclusively by 3D casting geometry, flanges, ribbing and structural silhouette.",
      "pil.p2_t": "2. Multi-Node Distributed Systems",
      "pil.p2_d": "Inspects assets that span multiple floors or rooms (chutes, pump trains, HVAC, PLC panels), consolidating every node into a single coherent record.",
      "pil.p3_t": "3. OEM & Aftermarket Cross-Reference",
      "pil.p3_d": "Identifies individual pumps, valves, seals and springs, delivering direct equivalents from Parker, SKF, Grainger and McMaster-Carr when the OEM part is obsolete.",
      "pil.p4_t": "4. Native FieldOps Gen Pro™ Bridge",
      "pil.p4_d": "Exports the identified asset and its findings (Findings → Proposals → Work Orders) in 1 click, honoring the golden audit rule SC ≠ WO.",
      "pdfm.title": "MachId™ v2.0 — Executive PDF Dossier Preview (1 Page US Letter)",
      "pdfm.print": "🖨️ Print / Save PDF",
      "pdfm.close": "✕ Close",
      "pdf.subtitle": "EXECUTIVE FORENSIC INSPECTION DOSSIER • MOSBI SYSTEMS LLC • info@mosbisystems.com",
      "pdf.date": "Date:",
      "pdf.mode": "Mode:",
      "pdf.pages": "Pages:",
      "pdf.pages_val": "1 of 1 (US Letter)",
      "pdf.sec1": "1. Positive Asset Identification",
      "pdf.sec2": "2. Multimodal Forensic Verdict (Gemini 3.6 Flash)",
      "pdf.sec3": "3. Multi-Angle Photographic Evidence / Inspected Nodes",
      "pdf.sec4": "4. Nominal Engineering Specifications",
      "pdf.footer_l": "Generated by MachId™ Machine Identifier AI v2.0 • © 2026 MOSBI Systems LLC (info@mosbisystems.com)",
      "pdf.footer_r": "Compatible with FieldOps Gen Pro™ (SC ≠ WO)",
      "fom.title": "FieldOpsMachineAdapter — Direct Sync Payload (SC ≠ WO)",
      "fom.close": "✕ Close",
      "fom.intro": "This is the structured JSON package automatically generated by <code>FieldOpsMachineAdapter</code> in <strong>MachId™ v2.0</strong> to register the equipment and turn visual anomalies into <em>Findings</em> inside <strong>FieldOps Gen Pro™</strong>:",
      "fom.go": "Go to the FieldOps Gen Pro™ Simulator →",
      "foot.main": "<strong>MachId™ Machine Identifier AI (v2.0)</strong> — A flagship product of <a href=\"../index.html\">MOSBI Systems LLC</a>.",
      "foot.contact": "info@mosbisystems.com • Maryland, USA"
    },

    fr: {
      "doc.title": "MachId™ Machine Identifier AI (v2.0) — Démo Interactive | MOSBI Systems",
      "nav.back": "← MOSBI Systems",
      "nav.sim": "Simulateur en Direct",
      "nav.pillars": "Architecture v2.0",
      "nav.fieldops": "FieldOps Gen Pro™",
      "nav.run_demo": "▶ Lancer le Scan Animé",
      "nav.lang_title": "Changer de langue (ES / EN / FR)",
      "brand.sub": "v2.0 • MOSBI Systems LLC",
      "hero.eyebrow": "DÉMO INTERACTIVE EN DIRECT • GEMINI 3.6 FLASH MULTIMODAL + GROUNDING",
      "hero.title_1": "De la Photo sur le Terrain au",
      "hero.title_2": "Dossier d'Ingénierie en Quelques Secondes",
      "hero.lead": "Sélectionnez l'un des 4 modes de MachId™ v2.0, changez de photo d'inspection réelle et lancez l'analyse forensique animée pour voir comment l'IA identifie les machines complètes, les systèmes multi-nœuds, les pièces OEM et les audits CAPEX.",
      "mode.aria": "Modes de fonctionnement de MachId v2.0",
      "mode.tag_new": "NOUVEAU v2.0",
      "mode.m1_title": "Système Distribué (Multi-Nœuds)",
      "mode.m1_desc": "Compacteur / Presse à balles horizontale Model 72 Closed End Baler avec convoyeur d'alimentation, chambre et groupe hydraulique.",
      "mode.tag_oem": "CROSS-RÉF. OEM",
      "mode.m2_title": "Composant / Pièce de Rechange",
      "mode.m2_desc": "Pompe triplex Cat Pumps 5CP2120W avec équivalences Aftermarket.",
      "mode.tag_3d": "SILHOUETTE 3D",
      "mode.m3_title": "Machine Complète",
      "mode.m3_desc": "Reconnaissance structurelle 3D ignorant la peinture de surface ou les plaques corrodées.",
      "mode.tag_capex": "CAPEX ET DURÉE DE VIE",
      "mode.m4_title": "Audit Financier",
      "mode.m4_desc": "Évaluation de l'amortissement, durée de vie restante et Remplacement vs. Révision.",
      "step.aria": "Flux de travail en 3 étapes",
      "step.s1_title": "Capture Guidée Multi-Angles",
      "step.s1_sub": "Photos réelles + Étiquettes de Nœud",
      "step.s2_title": "Scan Forensique IA Multimodal",
      "step.s2_sub": "Morphologie 3D + OCR + Search Grounding",
      "step.s3_title": "Fiche Technique v2.0 et Dossier PDF",
      "step.s3_sub": "Impression 1 page + Pont FieldOps™",
      "phone.brand": "MachId™ Inspecteur v2.0",
      "sim.alt": "Inspection industrielle",
      "sim.slots_label": "Photos d'Inspection Capturées (cliquez pour changer d'angle) :",
      "sim.counter": "3 / 3 Prises",
      "sim.shot1": "📸 Prise 1",
      "sim.shot2": "🏷️ Prise 2",
      "sim.shot3": "🎛️ Prise 3",
      "sim.btn_rescan": "⚡ Simuler la Capture et le Scan Forensique IA",
      "scan.s1": "📸 Étape 1/3 : Capture des angles et des étiquettes de nœud...",
      "scan.s2": "🔍 Étape 2/3 : Analyse de la silhouette 3D (peinture ignorée)...",
      "scan.s2b": "🌐 Interrogation de Gemini 3.6 Flash + Google Search Grounding...",
      "scan.s3": "✔ Étape 3/3 : Fiche Technique v2.0 et Dossier PDF Générés",
      "scan.done": "✔ Analyse Forensique Terminée (100 %)",
      "ds.forensic_heading": "Verdict Forensique Multimodal (Peinture de Surface Ignorée)",
      "ds.btn_pdf": "Voir / Imprimer le Dossier PDF (1 Page)",
      "ds.btn_fieldops": "Exporter vers FieldOps Gen Pro™ (JSON)",
      "pil.title": "Pourquoi MachId™ v2.0 Transforme l'Ingénierie de Terrain",
      "pil.sub": "Conçu par MOSBI Systems LLC pour éliminer le temps perdu à déchiffrer des plaques illisibles, des manuels introuvables ou des pièces obsolètes.",
      "pil.p1_t": "1. Règle Forensique Anti-Repeinture",
      "pil.p1_d": "L'IA ignore la couleur de la peinture (équipements repeints en usine) et classe uniquement selon la géométrie 3D de fonderie, les brides, les nervures et la silhouette structurelle.",
      "pil.p2_t": "2. Systèmes Distribués Multi-Nœuds",
      "pil.p2_d": "Inspecte les actifs répartis sur plusieurs étages ou locaux (vide-ordures, trains de pompage, CVC, armoires automates) en consolidant chaque nœud dans un dossier unique et cohérent.",
      "pil.p3_t": "3. Cross-Référence OEM et Aftermarket",
      "pil.p3_d": "Identifie pompes, vannes, joints et ressorts individuels et fournit des équivalences directes chez Parker, SKF, Grainger et McMaster-Carr lorsque la pièce OEM est obsolète.",
      "pil.p4_t": "4. Pont Natif FieldOps Gen Pro™",
      "pil.p4_d": "Exporte en 1 clic l'actif identifié et ses constats (Findings → Proposals → Work Orders) en respectant la règle d'or d'audit SC ≠ WO.",
      "pdfm.title": "MachId™ v2.0 — Aperçu du Dossier Exécutif PDF (1 Page US Letter)",
      "pdfm.print": "🖨️ Imprimer / Enregistrer en PDF",
      "pdfm.close": "✕ Fermer",
      "pdf.subtitle": "DOSSIER EXÉCUTIF D'INSPECTION FORENSIQUE • MOSBI SYSTEMS LLC • info@mosbisystems.com",
      "pdf.date": "Date :",
      "pdf.mode": "Mode :",
      "pdf.pages": "Pages :",
      "pdf.pages_val": "1 sur 1 (US Letter)",
      "pdf.sec1": "1. Identification Positive de l'Actif",
      "pdf.sec2": "2. Verdict Forensique Multimodal (Gemini 3.6 Flash)",
      "pdf.sec3": "3. Preuves Photographiques Multi-Angles / Nœuds Inspectés",
      "pdf.sec4": "4. Spécifications Nominales d'Ingénierie",
      "pdf.footer_l": "Généré par MachId™ Machine Identifier AI v2.0 • © 2026 MOSBI Systems LLC (info@mosbisystems.com)",
      "pdf.footer_r": "Compatible avec FieldOps Gen Pro™ (SC ≠ WO)",
      "fom.title": "FieldOpsMachineAdapter — Payload de Synchronisation Directe (SC ≠ WO)",
      "fom.close": "✕ Fermer",
      "fom.intro": "Voici le paquet JSON structuré généré automatiquement par <code>FieldOpsMachineAdapter</code> dans <strong>MachId™ v2.0</strong> pour enregistrer l'équipement et transformer les anomalies visuelles en <em>Findings</em> dans <strong>FieldOps Gen Pro™</strong> :",
      "fom.go": "Aller au Simulateur FieldOps Gen Pro™ →",
      "foot.main": "<strong>MachId™ Machine Identifier AI (v2.0)</strong> — Un produit phare de <a href=\"../index.html\">MOSBI Systems LLC</a>.",
      "foot.contact": "info@mosbisystems.com • Maryland, États-Unis"
    }
  };

  function t(key) {
    const dict = UI_STRINGS[currentLang] || UI_STRINGS.en;
    return dict[key] !== undefined ? dict[key] : UI_STRINGS.en[key] || key;
  }

  /* ------------------------------------------------------------------ mode data (merged base + localized text) */
  function getModeData() {
    const base = MACHID_BASE[currentMode];
    const txt = (MACHID_TEXT[currentLang] || MACHID_TEXT.en)[currentMode];
    return {
      marketClass: base.marketClass,
      chip: txt.chip,
      category: txt.category,
      title: txt.title,
      marketBadge: txt.marketBadge,
      confidence: txt.confidence,
      forensicText: txt.forensicText,
      specs: txt.specs,
      logs: txt.logs,
      v2Title: txt.v2Title,
      v2Badge: txt.v2Badge,
      v2Items: txt.v2Items,
      slots: base.slots.map(function (b, i) {
        const s = txt.slots[i];
        return {
          img: b.img,
          bbox1: b.bbox1,
          bbox2: b.bbox2,
          tag: s.tag,
          role: s.role,
          hudNode: s.hudNode,
          hudMethod: s.hudMethod,
          bbox1Label: s.bbox1Label,
          bbox2Label: s.bbox2Label
        };
      })
    };
  }

  /* ------------------------------------------------------------------ rendering */
  function renderCurrentMode() {
    const data = getModeData();

    document.getElementById("phoneModeBadge").textContent = data.chip;
    document.getElementById("dsCategory").textContent = data.category;
    document.getElementById("dsTitle").textContent = data.title;

    const marketBadge = document.getElementById("dsMarketBadge");
    marketBadge.textContent = data.marketBadge;
    marketBadge.className = "market-badge " + data.marketClass;

    document.getElementById("dsConfidence").textContent = data.confidence;
    document.getElementById("dsForensicText").textContent = data.forensicText;

    document.getElementById("dsSpecsGrid").innerHTML = data.specs
      .map(function (s) {
        return (
          '<div class="spec-cell">' +
          '<span class="spec-cell-label">' + s.label + "</span>" +
          '<span class="spec-cell-val">' + s.val + "</span>" +
          "</div>"
        );
      })
      .join("");

    document.getElementById("v2ModuleTitle").textContent = data.v2Title;
    document.getElementById("v2ModuleBadge").textContent = data.v2Badge;
    document.getElementById("v2ModuleContent").innerHTML = data.v2Items
      .map(function (item) {
        return (
          '<div class="v2-node-item">' +
          '<div class="v2-node-item-head"><span>' + item.head + '</span><span style="color:#34d399;">' + item.status + "</span></div>" +
          "<p>" + item.body + "</p>" +
          "</div>"
        );
      })
      .join("");

    data.slots.forEach(function (slot, idx) {
      const tagEl = document.getElementById("slotTag" + idx);
      const roleEl = document.getElementById("slotRole" + idx);
      if (tagEl) tagEl.textContent = slot.tag;
      if (roleEl) roleEl.textContent = slot.role;
    });

    selectSlot(currentSlotIndex < data.slots.length ? currentSlotIndex : 0, false);
  }

  function renderIdleScanState() {
    const data = getModeData();
    document.getElementById("scanStatusText").textContent = t("scan.done");
    document.getElementById("scanPercentText").textContent = "100%";
    document.getElementById("scanProgressBar").style.width = "100%";
    document.getElementById("telemetryLog").innerHTML = data.logs
      .map(function (l) { return '<div class="log-item done">' + l + "</div>"; })
      .join("");
  }

  function selectSlot(slotIndex, triggerFlash) {
    const data = getModeData();
    if (!data.slots[slotIndex]) return;
    currentSlotIndex = slotIndex;
    const slot = data.slots[slotIndex];

    document.querySelectorAll(".slot-card").forEach(function (btn, idx) {
      btn.classList.toggle("active", idx === slotIndex);
    });

    if (triggerFlash) {
      const flash = document.getElementById("cameraFlash");
      flash.classList.remove("trigger");
      void flash.offsetWidth;
      flash.classList.add("trigger");
    }

    const img = document.getElementById("viewportImg");
    img.src = slot.img;
    img.alt = slot.role;
    document.getElementById("hudNodeTag").textContent = slot.hudNode;
    document.getElementById("hudMethodTag").textContent = slot.hudMethod;

    ["bbox1", "bbox2"].forEach(function (id) {
      const box = document.getElementById(id);
      const pos = slot[id];
      box.style.top = pos.top;
      box.style.left = pos.left;
      box.style.width = pos.width;
      box.style.height = pos.height;
      document.getElementById(id + "Label").textContent = slot[id + "Label"];
    });
  }

  function clearScanTimers() {
    scanTimers.forEach(function (tm) { clearTimeout(tm); });
    scanTimers = [];
  }

  function stopScanVisuals() {
    document.getElementById("opticalViewport").classList.remove("scanning");
    document.getElementById("datasheetPanel").classList.remove("scanning-blur");
  }

  function runAnimatedScan() {
    clearScanTimers();
    const data = getModeData();
    const viewport = document.getElementById("opticalViewport");
    const dsPanel = document.getElementById("datasheetPanel");
    const progressBar = document.getElementById("scanProgressBar");
    const statusText = document.getElementById("scanStatusText");
    const percentText = document.getElementById("scanPercentText");
    const logBox = document.getElementById("telemetryLog");
    const step1 = document.getElementById("stepPill1");
    const step2 = document.getElementById("stepPill2");
    const step3 = document.getElementById("stepPill3");

    step1.className = "step-pill active";
    step2.className = "step-pill";
    step3.className = "step-pill";
    selectSlot(0, true);

    viewport.classList.add("scanning");
    dsPanel.classList.add("scanning-blur");
    progressBar.style.width = "12%";
    statusText.textContent = t("scan.s1");
    percentText.textContent = "12%";
    logBox.innerHTML = '<div class="log-item">' + data.logs[0] + "</div>";

    scanTimers.push(setTimeout(function () {
      step1.className = "step-pill completed";
      step2.className = "step-pill active";
      selectSlot(1, true);
      progressBar.style.width = "38%";
      statusText.textContent = t("scan.s2");
      percentText.textContent = "38%";
      logBox.innerHTML += '<div class="log-item">' + data.logs[1] + "</div>";
    }, 650));

    scanTimers.push(setTimeout(function () {
      selectSlot(2, true);
      progressBar.style.width = "68%";
      statusText.textContent = t("scan.s2b");
      percentText.textContent = "68%";
      logBox.innerHTML += '<div class="log-item">' + data.logs[2] + "</div>";
      logBox.innerHTML += '<div class="log-item">' + data.logs[3] + "</div>";
    }, 1350));

    scanTimers.push(setTimeout(function () {
      selectSlot(0, false);
      stopScanVisuals();
      step2.className = "step-pill completed";
      step3.className = "step-pill active";
      progressBar.style.width = "100%";
      statusText.textContent = t("scan.s3");
      percentText.textContent = "100%";
      logBox.innerHTML = data.logs
        .map(function (l) { return '<div class="log-item done">' + l + "</div>"; })
        .join("");
    }, 2100));
  }

  /* ------------------------------------------------------------------ modals */
  function openPdfModal() {
    const data = getModeData();
    const sheet = document.getElementById("pdfSheetContent");
    const nowStr = new Date().toISOString().slice(0, 10);

    sheet.innerHTML =
      '<div class="pdf-header-strip">' +
        '<div style="display:flex;align-items:center;gap:12px;">' +
          '<img src="./assets/app_icon.png" alt="MachId" style="width:44px;height:44px;border-radius:8px;" />' +
          "<div>" +
            '<div style="font-size:18px;font-weight:800;color:#1e4d5c;">MachId™ MACHINE IDENTIFIER AI (v2.0)</div>' +
            '<div style="font-size:11px;color:#475569;">' + t("pdf.subtitle") + "</div>" +
          "</div>" +
        "</div>" +
        '<div style="text-align:right;font-size:12px;color:#334155;">' +
          "<strong>" + t("pdf.date") + "</strong> " + nowStr + "<br/>" +
          "<strong>" + t("pdf.mode") + "</strong> " + data.chip + "<br/>" +
          "<strong>" + t("pdf.pages") + "</strong> " + t("pdf.pages_val") +
        "</div>" +
      "</div>" +

      '<div class="pdf-grid-2">' +
        '<div class="pdf-box">' +
          "<h4>" + t("pdf.sec1") + "</h4>" +
          '<div style="font-size:15px;font-weight:800;color:#0f172a;margin-bottom:4px;">' + data.title + "</div>" +
          '<div style="font-size:12px;color:#475569;margin-bottom:6px;">' + data.category + "</div>" +
          '<div style="font-size:12px;font-weight:700;color:#047857;">' + data.marketBadge + " | " + data.confidence + "</div>" +
        "</div>" +
        '<div class="pdf-box">' +
          "<h4>" + t("pdf.sec2") + "</h4>" +
          '<p style="font-size:12px;color:#1e293b;line-height:1.45;">' + data.forensicText + "</p>" +
        "</div>" +
      "</div>" +

      '<div class="pdf-box" style="margin-bottom:14px;">' +
        "<h4>" + t("pdf.sec3") + "</h4>" +
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:8px;">' +
          data.slots.map(function (s) {
            return (
              '<div style="border:1px solid #cbd5e1;border-radius:6px;padding:6px;background:#fff;">' +
                '<img src="' + s.img + '" alt="' + s.role + '" style="width:100%;height:110px;object-fit:cover;border-radius:4px;" />' +
                '<div style="font-size:11px;font-weight:800;color:#1e4d5c;margin-top:4px;">[' + s.tag + "] " + s.role + "</div>" +
              "</div>"
            );
          }).join("") +
        "</div>" +
      "</div>" +

      '<div class="pdf-box" style="margin-bottom:14px;">' +
        "<h4>" + t("pdf.sec4") + "</h4>" +
        '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px;">' +
          data.specs.map(function (sp) {
            return (
              '<div style="font-size:12px;padding:6px;background:#fff;border:1px solid #e2e8f0;border-radius:4px;">' +
                '<span style="color:#64748b;display:block;font-size:10px;">' + sp.label + "</span>" +
                '<strong style="color:#0f172a;">' + sp.val + "</strong>" +
              "</div>"
            );
          }).join("") +
        "</div>" +
      "</div>" +

      '<div class="pdf-box" style="margin-bottom:14px;">' +
        "<h4>5. " + data.v2Title + "</h4>" +
        data.v2Items.map(function (it) {
          return (
            '<div style="margin-top:6px;padding-top:6px;border-top:1px solid #e2e8f0;font-size:12px;">' +
              "<strong>" + it.head + '</strong> — <span style="color:#047857;font-weight:700;">' + it.status + "</span>" +
              '<div style="color:#334155;">' + it.body + "</div>" +
            "</div>"
          );
        }).join("") +
      "</div>" +

      '<div style="font-size:10px;color:#64748b;border-top:1px solid #cbd5e1;padding-top:8px;display:flex;justify-content:space-between;">' +
        "<span>" + t("pdf.footer_l") + "</span>" +
        "<span>" + t("pdf.footer_r") + "</span>" +
      "</div>";

    document.getElementById("pdfModalBackdrop").classList.add("open");
  }

  function openFieldOpsModal() {
    const data = getModeData();
    const payload = {
      adapterVersion: "FieldOpsMachineAdapter v2.0.0",
      complianceRule: "SC != WO (Service Calls generate Findings; Work Orders require approved Proposal)",
      language: currentLang,
      targetMode: currentMode,
      assetPayload: {
        assetName: data.title,
        category: data.category,
        confidenceScore: 0.964,
        marketStatus: data.marketBadge,
        nominalSpecs: data.specs,
        distributedNodesCount: data.slots.length
      },
      findingPayloads: data.v2Items.map(function (it, idx) {
        return {
          findingId: "FND-MACHID-0" + (idx + 1),
          title: it.head,
          severity: idx === 1 ? "MEDIUM" : "LOW",
          status: it.status,
          recommendedAction: it.body,
          requiresClientProposalBeforeWorkOrder: true
        };
      })
    };

    document.getElementById("fieldopsJsonPre").textContent = JSON.stringify(payload, null, 2);
    document.getElementById("fieldopsModalBackdrop").classList.add("open");
  }

  /* ------------------------------------------------------------------ i18n application */
  function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.title = t("doc.title");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    const langBtn = document.getElementById("langBtn");
    langBtn.textContent = currentLang.toUpperCase();
    langBtn.title = t("nav.lang_title");
    langBtn.setAttribute("aria-label", t("nav.lang_title"));
  }

  function refreshAll() {
    applyTranslations();
    renderCurrentMode();
    renderIdleScanState();
  }

  function setLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    clearScanTimers();
    stopScanVisuals();
    ["stepPill1", "stepPill2", "stepPill3"].forEach(function (id, i) {
      document.getElementById(id).className = "step-pill" + (i === 1 ? " active" : " completed");
    });
    refreshAll();

    // Keep any open modal consistent with the new language
    if (document.getElementById("pdfModalBackdrop").classList.contains("open")) openPdfModal();
    if (document.getElementById("fieldopsModalBackdrop").classList.contains("open")) openFieldOpsModal();
  }

  /* ------------------------------------------------------------------ init */
  document.addEventListener("DOMContentLoaded", function () {
    refreshAll();

    document.querySelectorAll(".mode-card-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".mode-card-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        currentMode = btn.getAttribute("data-mode");
        renderCurrentMode();
        runAnimatedScan();
      });
    });

    document.querySelectorAll(".slot-card").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectSlot(parseInt(btn.getAttribute("data-slot"), 10), true);
      });
    });

    document.querySelectorAll(".step-pill").forEach(function (pill) {
      pill.addEventListener("click", runAnimatedScan);
    });

    document.getElementById("runScanBtn").addEventListener("click", runAnimatedScan);
    document.getElementById("topRunScanBtn").addEventListener("click", runAnimatedScan);

    document.getElementById("openPdfBtn").addEventListener("click", openPdfModal);
    document.getElementById("closePdfModalBtn").addEventListener("click", function () {
      document.getElementById("pdfModalBackdrop").classList.remove("open");
    });
    document.getElementById("printPdfNowBtn").addEventListener("click", function () { window.print(); });

    document.getElementById("openFieldOpsBtn").addEventListener("click", openFieldOpsModal);
    document.getElementById("closeFieldOpsModalBtn").addEventListener("click", function () {
      document.getElementById("fieldopsModalBackdrop").classList.remove("open");
    });

    document.getElementById("langBtn").addEventListener("click", function () {
      setLanguage(SUPPORTED[(SUPPORTED.indexOf(currentLang) + 1) % SUPPORTED.length]);
    });
  });
})();
