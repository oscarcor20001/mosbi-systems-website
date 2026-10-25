/*!
 * FieldOps Gen Pro — Product Landing Page Script (Phase 10).
 * Vanilla ES6+, zero dependencies, bilingual EN/ES, Multi-Industry Simulator & ROI Calculator.
 */
(function () {
  'use strict';

  const PACK_SCENARIOS = {
    hvac: {
      name: {en: 'HVAC & Refrigeration', es: 'HVAC y Refrigeración'},
      asset: {en: 'Split AC 24,000 BTU — Seven Springs Apt', es: 'Split 24,000 BTU — Seven Springs Apt'},
      call: {
        en: 'Unit not cooling; evaporator coil obstructed and possible refrigerant leak.',
        es: 'Equipo no enfría; evaporador obstruido y posible fuga de refrigerante.'
      },
      kit: {en: 'Split Coil & Brazing Kit', es: 'Kit de Limpieza de Evaporador y Soldadura'},
      readiness: 92,
      warranty: 'IN WARRANTY',
      have: [
        'MPN: CU-ELBOW-12 — 1/2" Copper Elbows (10 in van)',
        'MPN: AG-ROD-15 — Silver Brazing Rod (10 in van)',
        'MPN: CAP-35-5 — Dual Run Capacitor 35/5 uF (6 in van)'
      ],
      missing: ['MPN: R410A-25LB — Refrigerant Cylinder (Below min: 1/2)']
    },
    roofing: {
      name: {en: 'Commercial Roofing', es: 'Techos Comerciales'},
      asset: {en: 'TPO Membrane Roof Zone B', es: 'Membrana TPO Zona B'},
      call: {
        en: 'Active TPO membrane leak around roof drain #3 after storm.',
        es: 'Filtración activa en membrana TPO alrededor del drenaje #3.'
      },
      kit: {en: 'TPO Drain Flash & Patch Kit', es: 'Kit de Parcheo y Drenaje TPO'},
      readiness: 100,
      warranty: 'IN WARRANTY',
      have: [
        'MPN: TPO-PATCH-6 — Reinforced TPO Roll 6"',
        'MPN: TPO-PRIMER-1G — Low-VOC Primer',
        'MPN: DRAIN-RING-SS — Stainless Clamping Ring'
      ],
      missing: []
    },
    security: {
      name: {en: 'Security & Access Control', es: 'Seguridad y Control de Acceso'},
      asset: {en: 'Intrusion Panel Zone 4 — North Lobby', es: 'Panel de Intrusión Zona 4 — Lobby Norte'},
      call: {
        en: 'Zone 4 motion fault and backup battery trouble alert.',
        es: 'Falla de sensor de movimiento en Zona 4 y batería de respaldo baja.'
      },
      kit: {en: 'Panel Battery & Sensor Service Kit', es: 'Kit de Batería de Panel y Sensor PIR'},
      readiness: 88,
      warranty: 'WARRANTY EXPIRED',
      have: [
        'MPN: BAT-12V7AH — Sealed Lead Acid Battery 12V 7Ah',
        'MPN: EOL-2K2 — End-of-Line Resistor Pack'
      ],
      missing: ['MPN: PIR-DUAL-360 — Dual-Tech Motion Detector']
    },
    plumbing: {
      name: {en: 'Commercial Plumbing', es: 'Plomería Comercial'},
      asset: {en: 'RPZ Backflow Preventer 2"', es: 'Preventor deContraflujo RPZ 2"'},
      call: {
        en: 'Relief valve discharging intermittently; annual test due.',
        es: 'Válvula de alivio descargando intermitentemente; prueba anual pendiente.'
      },
      kit: {en: 'RPZ Rubber Repair & Check Kit', es: 'Kit de Sellos y Retención RPZ'},
      readiness: 95,
      warranty: 'IN WARRANTY',
      have: [
        'MPN: RPZ-RUBBER-2 — Complete Elastomer Kit 2"',
        'MPN: GAUGE-DIFF-5 — 5-Valve Test Cock Adapter Set'
      ],
      missing: []
    },
    solar: {
      name: {en: 'Solar & Energy Storage', es: 'Energía Solar y Baterías'},
      asset: {en: 'String Inverter 25kW — Array East', es: 'Inversor de Cadena 25kW — Arreglo Este'},
      call: {
        en: 'Arc-fault alarm AFCI triggered on MPPT channel 2.',
        es: 'Alarma de falla de arco AFCI activada en canal MPPT 2.'
      },
      kit: {en: 'PV String Diagnostics & MC4 Kit', es: 'Kit de Diagnóstico Fotovoltaico y MC4'},
      readiness: 90,
      warranty: 'IN WARRANTY',
      have: [
        'MPN: MC4-PAIR-1000V — UL Listed Connectors',
        'MPN: FUSE-PV-15A — 1000VDC Inline Fuse'
      ],
      missing: ['MPN: SPD-DC-1000 — Type 2 DC Surge Module']
    },
    compactors: {
      name: {en: 'Waste & Compaction', es: 'Residuos y Compactadoras'},
      asset: {en: 'Stationary Compactor 34 Yd — Dock 2', es: 'Compactadora Estacionaria 34 Yd — Muelle 2'},
      call: {
        en: 'Hydraulic hose weeping near directional valve; ram cycle slow.',
        es: 'Manguera hidráulica con fuga cerca de válvula direccional; ciclo lento.'
      },
      kit: {en: 'High-Pressure Hose & Limit Switch Kit', es: 'Kit de Manguera de Alta Presión y Fin de Carrera'},
      readiness: 85,
      warranty: 'WARRANTY EXPIRED',
      have: [
        'MPN: HYD-HOSE-38-72 — 3/8" 4000 PSI Hose Assembly',
        'MPN: LIM-SW-NEMA4 — Sealed Roller Limit Switch'
      ],
      missing: ['MPN: MANIFOLD-DIR-24V — Conditional Directional Valve']
    }
  };

  const I18N = {
    en: {
      'nav.mosbi': '← MOSBI Systems',
      'nav.simulator': 'Simulator',
      'nav.pillars': 'How It Works',
      'nav.editions': 'Team vs Enterprise',
      'nav.chat': 'AI Chatbox',
      'nav.roi': 'ROI Calculator',
      'nav.launch': 'Launch Web App',
      'hero.eyebrow': 'MOSBI SYSTEMS LLC • FIELD SERVICE PLATFORM',
      'hero.title': 'One Field Service Platform. Every Trade. From 5-Tech Teams to Enterprise Fleets.',
      'hero.lead': 'Zero hard-coded trades. Equipment attributes, van inventory groups, predictive repair kits, carbonless digital receipts, 90 OSHA standards and a Gemini AI chat dispatcher adapt dynamically through Industry Packs.',
      'hero.cta_app': 'Open FieldOps Gen Pro App',
      'hero.cta_sim': 'Try Multi-Trade Simulator',
      'hero.cta_pilot': 'Request Enterprise Pilot',
      'sim.title': 'Interactive Multi-Industry Dispatch & Van Readiness Simulator',
      'sim.sub': 'Select any Industry Pack below. See how FieldOps Gen Pro verifies van stock against the predicted Repair Kit before the technician leaves the shop.',
      'sim.select_label': 'Active Industry Pack:',
      'sim.call_label': 'Incoming Service Call:',
      'sim.kit_label': 'Matched Predictive Repair Kit:',
      'sim.readiness_label': 'Van Readiness Score:',
      'sim.have_label': 'Verified in Van Inventory:',
      'sim.missing_label': 'Missing / Below Minimum Alert:',
      'sim.all_ready': 'All required parts on board — 0 repeat trips needed.',
      'pillars.title': 'End-to-End Operational Discipline',
      'pillars.sub': 'Built around strict field-service workflows that prevent lost parts, unauthorized work orders, and unverified warranty claims.',
      'pillars.p1_t': '1. Dynamic Van Inventory & Day Check',
      'pillars.p1_d': 'Tabs come from pack.vanGroups with mandatory MPNs, predictive VanReadinessAnalyzer, and 1-tap Restock.',
      'pillars.p2_t': '2. Guided 2-Step Digital Receipt',
      'pillars.p2_d': 'Mirrors the physical carbonless invoice with pack.receiptExtras, immutable audit trail, and supervisor warranty review.',
      'pillars.p3_t': '3. Strict Rule: SC ≠ WO',
      'pillars.p3_d': 'Service Calls never convert directly into Work Orders. Work Orders originate only from client-approved Proposals built from Findings.',
      'pillars.p4_t': '4. 90 OSHA Standards & AI Chat Gateway',
      'pillars.p4_d': '29 CFR 1910 & 1926 arrival reminders with immutable acknowledgments, plus an embeddable Gemini AI chatbox with 1-click lead conversion.',
      'ed.title': 'Team Edition vs Enterprise Edition',
      'ed.sub': 'Identical Firestore data model — upgrade from Team (~5 employees) to Enterprise in one click with zero data migration.',
      'ed.team_t': 'Team Edition (~5 Employees)',
      'ed.team_d': 'Properties, Dispatch, Service Calls, Guided Receipts, Findings → Proposals → Work Orders, Single-Van Inventory, 90 OSHA Standards, and AI Chat Inbox (500 msg/mo).',
      'ed.ent_t': 'Enterprise Edition (Multi-Crew & Fleets)',
      'ed.ent_d': 'Everything in Team plus Multi-Van Fleet Dashboard (/fleet), Formal Training Records (/training-records), Pluggable Webhook Connectors, and 5,000+ AI Chat messages/mo.',
      'chat.title': 'Turnkey Embeddable AI Chatbox (fieldops-chat.js)',
      'chat.sub': 'Every tenant receives a 1-line Shadow DOM script for their website. Grounded in their active Industry Packs and Knowledge Base, with live human handoff to /chat-inbox.',
      'chat.open_btn': 'Test Live AI Chat Widget',
      'roi.title': 'Interactive Field Service ROI Calculator',
      'roi.sub': 'Estimate monthly and annual savings from eliminating repeat trips for missing parts and capturing field findings as approved proposals.',
      'roi.techs': 'Number of Technicians',
      'roi.calls': 'Service Calls / Tech / Day',
      'roi.repeat': 'Repeat-Trip Rate for Missing Parts (%)',
      'roi.cost': 'Avg Cost per Repeat Trip (USD)',
      'roi.monthly_label': 'Estimated Monthly Savings',
      'roi.annual_label': 'Estimated Annual Savings',
      'roi.trips_saved': 'Repeat trips eliminated / month:'
    },
    es: {
      'nav.mosbi': '← MOSBI Systems',
      'nav.simulator': 'Simulador',
      'nav.pillars': 'Cómo Funciona',
      'nav.editions': 'Team vs Enterprise',
      'nav.chat': 'Chat IA',
      'nav.roi': 'Calculadora ROI',
      'nav.launch': 'Abrir App Web',
      'hero.eyebrow': 'MOSBI SYSTEMS LLC • PLATAFORMA DE SERVICIO EN CAMPO',
      'hero.title': 'Una Plataforma de Servicio en Campo. Todos los Oficios. De 5 Técnicos a Flotas Enterprise.',
      'hero.lead': 'Sin oficios fijos en el código. Atributos de activos, grupos de inventario de van, kits predictivos, recibos digitales autocopiativos, 90 estándares OSHA y un despachador IA con Gemini se adaptan dinámicamente mediante Industry Packs.',
      'hero.cta_app': 'Abrir App FieldOps Gen Pro',
      'hero.cta_sim': 'Probar Simulador Multi-Oficio',
      'hero.cta_pilot': 'Solicitar Piloto Enterprise',
      'sim.title': 'Simulador Interactivo de Despacho y Preparación de Van',
      'sim.sub': 'Seleccione cualquier Industry Pack. Vea cómo FieldOps Gen Pro verifica el stock de la van frente al Kit de Reparación antes de que el técnico salga.',
      'sim.select_label': 'Industry Pack Activo:',
      'sim.call_label': 'Llamada de Servicio Entrante:',
      'sim.kit_label': 'Kit de Reparación Predictivo:',
      'sim.readiness_label': 'Índice de Preparación de Van:',
      'sim.have_label': 'Verificado en el Inventario de la Van:',
      'sim.missing_label': 'Alerta de Faltantes / Bajo Mínimo:',
      'sim.all_ready': 'Todas las piezas requeridas a bordo — 0 segundas visitas.',
      'pillars.title': 'Disciplina Operativa de Principio a Fin',
      'pillars.sub': 'Diseñado con reglas estrictas de servicio en campo que evitan pérdida de piezas, órdenes sin aprobar y reclamos de garantía sin verificar.',
      'pillars.p1_t': '1. Inventario de Van Dinámico y Day Check',
      'pillars.p1_d': 'Pestañas dinámicas desde pack.vanGroups con MPN obligatorio, VanReadinessAnalyzer predictivo y Restock en 1 toque.',
      'pillars.p2_t': '2. Recibo Digital Guiado en 2 Pasos',
      'pillars.p2_d': 'Espejo de factura autocopiativa con pack.receiptExtras, registro inmutable y revisión diaria de garantía por el supervisor.',
      'pillars.p3_t': '3. Regla Estricta: SC ≠ WO',
      'pillars.p3_d': 'Las Llamadas de Servicio nunca se convierten directo en Órdenes de Trabajo. Las WO nacen solo de Propuestas aprobadas desde Hallazgos.',
      'pillars.p4_t': '4. 90 Estándares OSHA y Pasarela de Chat IA',
      'pillars.p4_d': 'Recordatorios 29 CFR 1910 y 1926 al llegar con acuses inmutables, más widget de chat Gemini con conversión a Service Call en 1 clic.',
      'ed.title': 'Edición Team vs Edición Enterprise',
      'ed.sub': 'Mismo modelo de datos en Firestore — pase de Team (~5 empleados) a Enterprise en un clic sin migración de datos.',
      'ed.team_t': 'Edición Team (~5 Empleados)',
      'ed.team_d': 'Propiedades, Despacho, Llamadas de Servicio, Recibos Guiados, Hallazgos → Propuestas → Work Orders, Inventario de Van, 90 Estándares OSHA y Bandeja de Chat IA (500 msj/mes).',
      'ed.ent_t': 'Edición Enterprise (Múltiples Cuadrillas y Flotas)',
      'ed.ent_d': 'Todo lo de Team más Panel de Flota Multi-Van (/fleet), Registros Formales de Capacitación (/training-records), Conectores Webhook y 5,000+ mensajes IA/mes.',
      'chat.title': 'Chatbox con IA Embebible Llave en Mano (fieldops-chat.js)',
      'chat.sub': 'Cada empresa recibe un script Shadow DOM de 1 línea para su web. Conectado a sus Industry Packs y Base de Conocimiento, con traspaso humano en vivo a /chat-inbox.',
      'chat.open_btn': 'Probar Widget de Chat IA en Vivo',
      'roi.title': 'Calculadora Interactiva de ROI en Servicio de Campo',
      'roi.sub': 'Calcule el ahorro mensual y anual al eliminar segundas visitas por falta de repuestos y convertir hallazgos en propuestas aprobadas.',
      'roi.techs': 'Número de Técnicos',
      'roi.calls': 'Llamadas / Técnico / Día',
      'roi.repeat': 'Tasa de Segundas Visitas (%)',
      'roi.cost': 'Costo Promedio por Segunda Visita (USD)',
      'roi.monthly_label': 'Ahorro Mensual Estimado',
      'roi.annual_label': 'Ahorro Anual Estimado',
      'roi.trips_saved': 'Segundas visitas eliminadas / mes:'
    }
  };

  let currentLang = (typeof localStorage !== 'undefined' && (localStorage.getItem('mosbi_lang') || localStorage.getItem('fop_lang'))) || 'en';
  if (currentLang !== 'en' && currentLang !== 'es') currentLang = 'en';
  let currentPack = 'hvac';

  function renderPack(packKey) {
    if (!PACK_SCENARIOS[packKey]) packKey = 'hvac';
    currentPack = packKey;
    const p = PACK_SCENARIOS[packKey];

    const selectEl = document.getElementById('packSelect');
    if (selectEl && selectEl.value !== packKey) selectEl.value = packKey;

    document.querySelectorAll('.trade-pill').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-pack') === packKey);
    });

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt('heroPackName', p.name[currentLang]);
    setTxt('heroAssetTitle', p.asset[currentLang]);
    setTxt('heroCallDesc', p.call[currentLang]);
    setTxt('heroKitName', p.kit[currentLang]);
    setTxt('heroReadiness', p.readiness + '%');

    const badge = document.getElementById('heroWarrantyBadge');
    if (badge) {
      badge.textContent = '[' + p.warranty + ']';
      badge.className = p.warranty === 'IN WARRANTY' ? 'badge-warranty-ok' : 'badge-warranty-exp';
    }

    setTxt('simCallText', p.call[currentLang]);
    setTxt('simKitText', p.kit[currentLang]);
    setTxt('simReadinessVal', p.readiness + '%');

    const haveList = document.getElementById('simHaveList');
    if (haveList) {
      haveList.innerHTML = '';
      p.have.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = '✓ ' + item;
        haveList.appendChild(li);
      });
    }

    const missList = document.getElementById('simMissingList');
    if (missList) {
      missList.innerHTML = '';
      if (p.missing.length === 0) {
        const li = document.createElement('li');
        li.textContent = I18N[currentLang]['sim.all_ready'];
        missList.appendChild(li);
      } else {
        p.missing.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = '⚠ ' + item;
          missList.appendChild(li);
        });
      }
    }
  }

  function computeRoi() {
    const techs = Number((document.getElementById('roiTechs') || {}).value || 8);
    const calls = Number((document.getElementById('roiCalls') || {}).value || 4);
    const repeatPct = Number((document.getElementById('roiRepeat') || {}).value || 18);
    const cost = Number((document.getElementById('roiCost') || {}).value || 145);

    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt('roiTechsVal', String(techs));
    setTxt('roiCallsVal', String(calls));
    setTxt('roiRepeatVal', repeatPct + '%');
    setTxt('roiCostVal', '$' + cost);

    const monthlyCalls = techs * calls * 22;
    const currentRepeatTrips = monthlyCalls * (repeatPct / 100);
    const eliminatedTrips = Math.round(currentRepeatTrips * 0.45);
    const monthlySavings = Math.round(eliminatedTrips * cost);
    const annualSavings = monthlySavings * 12;

    setTxt('roiTripsSaved', String(eliminatedTrips));
    setTxt('roiMonthlyOut', '$' + monthlySavings.toLocaleString('en-US'));
    setTxt('roiAnnualOut', '$' + annualSavings.toLocaleString('en-US'));
  }

  function applyLanguage(lang) {
    currentLang = lang === 'es' ? 'es' : 'en';
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('mosbi_lang', currentLang);
        localStorage.setItem('fop_lang', currentLang);
      } catch (e) {}
    }
    if (typeof document === 'undefined') return;
    document.documentElement.lang = currentLang;
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (dict[key]) node.textContent = dict[key];
    });
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
      langBtn.textContent = currentLang.toUpperCase();
      langBtn.title = currentLang === 'es' ? 'Cambiar a Inglés (EN)' : 'Switch to Spanish (ES)';
      langBtn.setAttribute('aria-label', langBtn.title);
    }
    renderPack(currentPack);
    computeRoi();

    // Synchronize embedded FieldOps chat widget
    if (typeof window !== 'undefined') {
      if (window.FieldOpsChat && typeof window.FieldOpsChat.setLang === 'function') {
        window.FieldOpsChat.setLang(currentLang);
      }
      window.dispatchEvent(new CustomEvent('mosbi_lang_change', {detail: currentLang}));
    }
  }

  function init() {
    if (typeof document === 'undefined') return;
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        applyLanguage(currentLang === 'en' ? 'es' : 'en');
      });
    }

    // Listen for language changes from embedded widgets (e.g. FieldOps chat header button)
    if (typeof window !== 'undefined') {
      window.addEventListener('mosbi_lang_change', (e) => {
        if (e && e.detail && e.detail !== currentLang) {
          applyLanguage(e.detail);
        }
      });
    }

    const selectEl = document.getElementById('packSelect');
    if (selectEl) {
      selectEl.addEventListener('change', (e) => renderPack(e.target.value));
    }

    document.querySelectorAll('.trade-pill').forEach((btn) => {
      btn.addEventListener('click', () => renderPack(btn.getAttribute('data-pack')));
    });

    ['roiTechs', 'roiCalls', 'roiRepeat', 'roiCost'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', computeRoi);
    });

    const openChatBtn = document.getElementById('openDemoChatBtn');
    if (openChatBtn) {
      openChatBtn.addEventListener('click', () => {
        const host = document.querySelector('[data-fieldops-chat]');
        if (host && host.shadowRoot) {
          const launcher = host.shadowRoot.querySelector('.launcher');
          if (launcher) launcher.click();
        }
      });
    }

    applyLanguage(currentLang);
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();
