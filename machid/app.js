(function () {
  "use strict";

  let currentLang = "es";
  let currentMode = "distributedSystem";
  let currentSlotIndex = 0;
  let scanTimers = [];

  const UI_STRINGS = {
    es: {
      "nav.sim": "Simulador en Vivo",
      "nav.pillars": "Arquitectura v2.0",
      "nav.fieldops": "FieldOps Gen Pro™",
      "nav.run_demo": "▶ Probar Escaneo Animado",
      "hero.eyebrow": "DEMO INTERACTIVA EN VIVO • GEMINI 3.6 FLASH MULTIMODAL + GROUNDING",
      "hero.title_1": "De la Fotografía en Campo al",
      "hero.title_2": "Dossier de Ingeniería en Segundos",
      "hero.lead": "Selecciona cualquiera de los 4 modos operativos de MachId™ v2.0, cambia entre las fotografías reales de inspección y ejecuta el escaneo forense animado para ver cómo la IA identifica equipos completos, sistemas multi-nodo, repuestos OEM y auditorías CAPEX.",
      "mode.tag_new": "NUEVO v2.0",
      "mode.m1_title": "Sistema Distribuido (Multi-Nodo)",
      "mode.m1_desc": "Compactador estacionario con chute multi-piso, unidad hidráulica y panel.",
      "mode.tag_oem": "CROSS-REF OEM",
      "mode.m2_title": "Componente / Repuesto",
      "mode.m2_desc": "Bomba Cat Pumps 5CP2120W con tabla de equivalencias Aftermarket.",
      "mode.tag_3d": "SILUETA 3D",
      "mode.m3_title": "Máquina Completa",
      "mode.m3_desc": "Reconocimiento estructural ignorando pintura superficial o placas dañadas.",
      "mode.tag_capex": "CAPEX & VIDA ÚTIL",
      "mode.m4_title": "Auditoría Financiera",
      "mode.m4_desc": "Dictamen de depreciación, vida útil remanente y Reemplazo vs. Overhaul.",
      "step.s1_title": "Captura Guiada Multi-Ángulo",
      "step.s1_sub": "Fotos reales + Etiquetas de Nodo",
      "step.s2_title": "Escaneo Forense IA Multimodal",
      "step.s2_sub": "Morfología 3D + OCR + Search Grounding",
      "step.s3_title": "Ficha Técnica v2.0 y Dossier PDF",
      "step.s3_sub": "Impresión 1 página + Puente FieldOps™",
      "sim.slots_label": "Tomas Fotográficas Capturadas (Haz clic para cambiar ángulo):",
      "sim.btn_rescan": "⚡ Simular Captura y Escaneo Forense IA en Vivo",
      "ds.forensic_heading": "Dictamen Forense Multimodal (Ignorando Pintura Superficial)",
      "ds.btn_pdf": "Ver / Imprimir Dossier PDF (1 Página)",
      "ds.btn_fieldops": "Exportar a FieldOps Gen Pro™ (JSON)",
      "pil.title": "¿Por qué MachId™ v2.0 transforma la Ingeniería de Campo?",
      "pil.sub": "Diseñado por MOSBI Systems LLC para eliminar la pérdida de tiempo buscando placas ilegibles, manuales extraviados o repuestos descontinuados."
    },
    en: {
      "nav.sim": "Live Simulator",
      "nav.pillars": "v2.0 Architecture",
      "nav.fieldops": "FieldOps Gen Pro™",
      "nav.run_demo": "▶ Run Animated Scan",
      "hero.eyebrow": "LIVE INTERACTIVE DEMO • GEMINI 3.6 FLASH MULTIMODAL + GROUNDING",
      "hero.title_1": "From Field Photographs to",
      "hero.title_2": "Engineering Dossier in Seconds",
      "hero.lead": "Select any of the 4 operating modes in MachId™ v2.0, switch across real inspection photos, and run the animated forensic scan to see how AI identifies complete machines, multi-node systems, OEM parts, and CAPEX audits.",
      "mode.tag_new": "NEW v2.0",
      "mode.m1_title": "Distributed System (Multi-Node)",
      "mode.m1_desc": "Stationary apartment compactor with multi-floor chute, HPU, and PLC panel.",
      "mode.tag_oem": "OEM CROSS-REF",
      "mode.m2_title": "Component / Spare Part",
      "mode.m2_desc": "Cat Pumps 5CP2120W triplex plunger pump with aftermarket cross-references.",
      "mode.tag_3d": "3D SILHOUETTE",
      "mode.m3_title": "Complete Machine",
      "mode.m3_desc": "Structural 3D recognition ignoring surface paint or corroded nameplates.",
      "mode.tag_capex": "CAPEX & LIFECYCLE",
      "mode.m4_title": "Financial Audit",
      "mode.m4_desc": "Depreciation assessment, remaining useful life, and Replace vs. Overhaul.",
      "step.s1_title": "Guided Multi-Angle Capture",
      "step.s1_sub": "Real photos + Node Tags",
      "step.s2_title": "Multimodal Forensic AI Scan",
      "step.s2_sub": "3D Morphology + OCR + Search Grounding",
      "step.s3_title": "v2.0 Technical Sheet & PDF Dossier",
      "step.s3_sub": "1-Page Print + FieldOps™ Bridge",
      "sim.slots_label": "Captured Inspection Photos (Click to switch angle):",
      "sim.btn_rescan": "⚡ Simulate Live Capture & Forensic AI Scan",
      "ds.forensic_heading": "Multimodal Forensic Verdict (Ignoring Surface Paint)",
      "ds.btn_pdf": "View / Print Executive PDF (1 Page)",
      "ds.btn_fieldops": "Export to FieldOps Gen Pro™ (JSON)",
      "pil.title": "Why MachId™ v2.0 Transforms Field Engineering",
      "pil.sub": "Engineered by MOSBI Systems LLC to eliminate wasted hours decoding unreadable nameplates, missing manuals, or obsolete spare parts."
    },
    fr: {
      "nav.sim": "Simulateur en Direct",
      "nav.pillars": "Architecture v2.0",
      "nav.fieldops": "FieldOps Gen Pro™",
      "nav.run_demo": "▶ Lancer le Scan Animé",
      "hero.eyebrow": "DÉMO INTERACTIVE EN DIRECT • GEMINI 3.6 FLASH MULTIMODAL + GROUNDING",
      "hero.title_1": "De la Photo sur le Terrain au",
      "hero.title_2": "Dossier d'Ingénierie en Secondes",
      "hero.lead": "Sélectionnez l'un des 4 modes de MachId™ v2.0, changez les photos d'inspection réelles et lancez l'analyse forensique animée pour voir comment l'IA identifie les machines, les systèmes multi-nœuds, les pièces OEM et les audits CAPEX.",
      "mode.tag_new": "NOUVEAU v2.0",
      "mode.m1_title": "Système Distribué (Multi-Nœuds)",
      "mode.m1_desc": "Compacteur stationnaire avec chute multi-étages, groupe hydraulique et panneau.",
      "mode.tag_oem": "CROSS-REF OEM",
      "mode.m2_title": "Composant / Pièce de Rechange",
      "mode.m2_desc": "Pompe triplex Cat Pumps 5CP2120W avec équivalences Aftermarket.",
      "mode.tag_3d": "SILHOUETTE 3D",
      "mode.m3_title": "Machine Complète",
      "mode.m3_desc": "Reconnaissance structurelle 3D ignorant la peinture de surface.",
      "mode.tag_capex": "CAPEX & DURÉE DE VIE",
      "mode.m4_title": "Audit Financier",
      "mode.m4_desc": "Évaluation de dépréciation, durée de vie restante et Remplacement vs Révision.",
      "step.s1_title": "Capture Guidée Multi-Angles",
      "step.s1_sub": "Photos réelles + Étiquettes de Nœud",
      "step.s2_title": "Scan Forensique IA Multimodal",
      "step.s2_sub": "Morphologie 3D + OCR + Search Grounding",
      "step.s3_title": "Fiche Technique v2.0 & Dossier PDF",
      "step.s3_sub": "Impression 1 page + Pont FieldOps™",
      "sim.slots_label": "Photos d'Inspection Capturées (Cliquez pour changer d'angle) :",
      "sim.btn_rescan": "⚡ Simuler la Capture et le Scan Forensique IA",
      "ds.forensic_heading": "Verdict Forensique Multimodal (Ignorant la Peinture)",
      "ds.btn_pdf": "Voir / Imprimer Dossier PDF (1 Page)",
      "ds.btn_fieldops": "Exporter vers FieldOps Gen Pro™ (JSON)",
      "pil.title": "Pourquoi MachId™ v2.0 Transforme l'Ingénierie de Terrain",
      "pil.sub": "Conçu par MOSBI Systems LLC pour éliminer le temps perdu à chercher des plaques illisibles ou des pièces obsolètes."
    }
  };

  const MODE_DATA = {
    distributedSystem: {
      chip: "MODO: MULTI-NODO (v2.0)",
      category: "SISTEMA DISTRIBUIDO DE COMPACTACIÓN CON CHUTE VERTICAL MULTI-PISO",
      title: "Compactador Hidráulico Estacionario Chute-Fed (Serie Wastequip / Marathon)",
      marketBadge: "● Activa (Soporte OEM & Repuestos Estándar ANSI)",
      marketClass: "market-active",
      confidence: "Confianza IA: 96.4% • Correlación Multi-Nodo + Silueta 3D",
      forensicText:
        "Regla Forense aplicada: se ignora el color naranja/verde de repintado en campo. La IA correlaciona 3 nodos físicos conectados: (1) Ducto vertical de caída por gravedad con compuerta cortafuego fusible a 165°F (NFPA 82), (2) Tolva receptora acampanada y cámara de prensado horizontal con tensor de trinquete lateral y contenedor rodante de 2 yd³, y (3) Unidad de potencia hidráulica (HPU) superior con motor trifásico TEFC y gabinete de control con parada de emergencia.",
      specs: [
        { label: "Capacidad Cámara", val: "0.52 yd³ (Ciclo 38 s)" },
        { label: "Fuerza de Compactación", val: "28,500 lbf (2,000 PSI)" },
        { label: "Motor Hidráulico (HPU)", val: "5.0 HP • 208-230/460V 3F" },
        { label: "Diámetro de Chute", val: "24 in (610 mm) Cal. 16" },
        { label: "Normativa Aplicable", val: "ANSI Z245.2 / NFPA 82" },
        { label: "Contenedor Acoplado", val: "2.0 yd³ Front/Rear Load" }
      ],
      slots: [
        {
          img: "./assets/compactor_chute_1.jpg",
          tag: "NODO 1",
          role: "Descarga Chute y Tolva",
          hudNode: "[NODO 1: CHUTE Y COMPUERTA NFPA 82]",
          hudMethod: "SILUETA 3D + MULTI-NODO",
          bbox1: { top: "8%", left: "28%", width: "44%", height: "24%", label: "Ducto Chute + Compuerta Cortafuego" },
          bbox2: { top: "33%", left: "26%", width: "46%", height: "54%", label: "Tolva Receptora + Tensor Lateral" }
        },
        {
          img: "./assets/compactor_chute_2.jpg",
          tag: "NODO 2",
          role: "Cámara y Contenedor 2 yd³",
          hudNode: "[NODO 2: CÁMARA Y CONTENEDOR]",
          hudMethod: "GEOMETRÍA ESTRUCTURAL",
          bbox1: { top: "27%", left: "31%", width: "43%", height: "45%", label: "Cámara Compactadora + Tolva Naranja" },
          bbox2: { top: "42%", left: "16%", width: "31%", height: "26%", label: "Contenedor Rodante Verde 2 yd³" }
        },
        {
          img: "./assets/compactor_chute_3.jpg",
          tag: "NODO 3",
          role: "Unidad Hidráulica y Panel",
          hudNode: "[NODO 3: HPU Y GABINETE ELÉCTRICO]",
          hudMethod: "ANÁLISIS SUBSISTEMA HPU",
          bbox1: { top: "36%", left: "58%", width: "17%", height: "26%", label: "Motor Trifásico HPU + Mangueras SAE" },
          bbox2: { top: "45%", left: "66%", width: "12%", height: "16%", label: "Panel Control NEMA 12 + E-Stop" }
        }
      ],
      logs: [
        "[01] Procesando 3 fotografías con etiquetas [NODO 1], [NODO 2] y [NODO 3]...",
        "[02] Aplicando Regla Forense: ignorando pintura naranja/verde; aislando geometría 3D...",
        "[03] Detectada transición vertical Chute -> Compuerta Cortafuego (NFPA 82) -> Tolva...",
        "[04] Identificada unidad hidráulica superior (5 HP TEFC) y gabinete NEMA 12...",
        "[05] Topología Multi-Nodo consolidada y adaptador FieldOps Gen Pro™ generado."
      ],
      v2Title: "🔗 Desglose de Topología Multi-Nodo (DistributedNodeAnalysis v2.0)",
      v2Badge: "3 NODOS CONECTADOS",
      v2Items: [
        {
          head: "NODO 1 — Cabezal de Descarga de Chute y Compuerta Cortafuego",
          status: "Operativo • Verificar Eslabón Fusible",
          body: "Ducto cilíndrico superior aislado conectado a guillotina cortafuego inclinada con contrapeso. Conectividad hacia Nodo 2 mediante brida superior de tolva."
        },
        {
          head: "NODO 2 — Tolva de Transición, Cámara de Prensado y Contenedor #2",
          status: "Atención • Desgaste Cosmético y Sellos",
          body: "Cámara de compactación estacionaria anclada al piso con tensor de trinquete amarillo acoplado a contenedor verde de 2 yd³. Presenta abrasión superficial sin deformación estructural."
        },
        {
          head: "NODO 3 — Unidad de Potencia Hidráulica (HPU) y Tablero de Control",
          status: "Operativo • Inspeccionar Mangueras",
          body: "Motor eléctrico trifásico montado sobre el bastidor lateral derecho con mangueras de alta presión envueltas en espiral protectora y gabinete eléctrico con selector y parada de emergencia."
        }
      ]
    },

    componentOrPart: {
      chip: "MODO: CROSS-REF OEM (v2.0)",
      category: "BOMBA TRIPLEX DE ÉMBOLOS CERÁMICOS DE ALTA PRESIÓN",
      title: "Cat Pumps 5CP2120W — Triplex Plunger Pump",
      marketBadge: "● Activa (Amplio Soporte OEM & Aftermarket)",
      marketClass: "market-active",
      confidence: "Confianza IA: 98.9% • OCR Placa + Geometría de Cabezal",
      forensicText:
        "Lectura híbrida de placa metálica y morfología del cabezal de latón forjado cromado con cárter de aluminio anodizado azul. MachId™ v2.0 extrae automáticamente el número de parte OEM (5CP2120W) y genera la matriz de equivalencias Aftermarket para sellos, válvulas, resortes de retorno y bombas completas sustitutas.",
      specs: [
        { label: "Caudal Nominal", val: "4.0 GPM (15.0 L/min)" },
        { label: "Presión Máxima", val: "2,500 PSI (172 bar)" },
        { label: "Velocidad Nominal", val: "950 RPM (Eje Sólido 20 mm)" },
        { label: "Puertos Admisión/Desc.", val: "1/2\" NPTF / 3/8\" NPTF" },
        { label: "Material Cabezal", val: "Latón Forjado (Nickel-Plated)" },
        { label: "Kit Sellos / Válvulas", val: "PN 33628 / PN 30821" }
      ],
      slots: [
        {
          img: "./assets/5cp2120w_pump.jpg",
          tag: "COMPONENTE",
          role: "Bomba Cat Pumps 5CP2120W",
          hudNode: "[COMPONENTE: CAT PUMPS 5CP2120W]",
          hudMethod: "OCR + CROSS-REFERENCE OEM",
          bbox1: { top: "14%", left: "18%", width: "62%", height: "68%", label: "Cabezal Triplex Latón + Cárter 5CP2120W" },
          bbox2: { top: "24%", left: "46%", width: "30%", height: "28%", label: "Placa OEM: 5CP2120W • 2500 PSI" }
        },
        {
          img: "./assets/resorte.jpg",
          tag: "SUB-PIEZA",
          role: "Resorte de Retorno / Válvula",
          hudNode: "[SUB-PIEZA: RESORTE HELICOIDAL INOX]",
          hudMethod: "MORFOLOGÍA DE ELEMENTO",
          bbox1: { top: "18%", left: "22%", width: "56%", height: "64%", label: "Resorte Compresión Acero Inox 316" },
          bbox2: { top: "35%", left: "32%", width: "36%", height: "30%", label: "Paso constante • Extremos esmerilados" }
        },
        {
          img: "./assets/compactor_chute_3.jpg",
          tag: "INSTALACIÓN",
          role: "Subsistema Motriz en Planta",
          hudNode: "[CONTEXTO: ACOPLAMIENTO MOTRIZ]",
          hudMethod: "VERIFICACIÓN DE MONTAJE",
          bbox1: { top: "34%", left: "56%", width: "22%", height: "30%", label: "Conjunto Motor-Bomba en Bastidor" },
          bbox2: { top: "45%", left: "64%", width: "15%", height: "20%", label: "Líneas Hidráulicas SAE 100R2" }
        }
      ],
      logs: [
        "[01] Analizando geometría de componente individual y placa grabada...",
        "[02] OCR Positivo: Fabricante CAT PUMPS — Modelo exacto 5CP2120W (4.0 GPM @ 2500 PSI)...",
        "[03] Consultando catálogos de partes y kits de reparación con Google Search Grounding...",
        "[04] Generando tabla de equivalencias OEM y Aftermarket (General Pump, AR, Grainger)...",
        "[05] Ficha de repuesto v2.0 lista para solicitud de compra o inventario de furgoneta."
      ],
      v2Title: "⚙️ Matriz de Cross-Reference OEM y Repuestos Equivalentes (v2.0)",
      v2Badge: "4 EQUIVALENCIAS VERIFICADAS",
      v2Items: [
        {
          head: "Número de Parte Original (OEM): CAT PUMPS 5CP2120W",
          status: "En Producción • Entrega Inmediata",
          body: "Kit de Sellos OEM: #33628 | Kit de Válvulas OEM: #30821 | Aceite Cárter: ISO VG 68 (#6107)."
        },
        {
          head: "Equivalentes Directos Aftermarket (Drop-In / Mismo Rango 4 GPM @ 2500 PSI)",
          status: "100% Compatibles en Caudal/Presión",
          body: "• General Pump (Interpump): Serie TS1511 / T1011  |  • Annovi Reverberi (AR): RKA4G25N  |  • Comet: FW2 4025S."
        },
        {
          head: "Distribuidores Industriales Verificados (Búsqueda en Tiempo Real)",
          status: "Stock Confirmado USA",
          body: "• Grainger SKU: 2P223 / 5CP2120W  |  • Kleen-Rite Corp: CAT-5CP2120W  |  • McMaster-Carr (Sellos Viton/NBR y Resortes 316 SS)."
        }
      ]
    },

    completeMachine: {
      chip: "MODO: MÁQUINA COMPLETA",
      category: "MAQUINARIA DE MANEJO Y COMPACTACIÓN DE RESIDUOS SÓLIDOS",
      title: "Unidad Compactadora Hidráulica Estacionaria con Tolva de Carga",
      marketBadge: "● Activa (Soporte Oficial & Repuestos)",
      marketClass: "market-active",
      confidence: "Confianza IA: 95.8% • Silueta Morfológica 3D",
      forensicText:
        "Aunque la unidad presenta desgaste severo de pintura naranja en la cámara frontal y carece de placa frontal legible a simple vista, el motor forense de MachId™ identifica el modelo por su arquitectura estructural: bastidor de vigas en U de acero laminado, geometría trapezoidal de la tolva de alimentación a 45°, disposición lateral del grupo hidráulico y mecanismo de anclaje por trinquete al contenedor.",
      specs: [
        { label: "Tipo de Equipo", val: "Compactador Estacionario" },
        { label: "Accionamiento", val: "Electro-Hidráulico Trifásico" },
        { label: "Relación Compactación", val: "4:1 Nominal" },
        { label: "Presión de Trabajo", val: "1,800 - 2,200 PSI" },
        { label: "Estructura Principal", val: "Acero A36 Soldadura Continua" },
        { label: "Año Estimado Fab.", val: "2012 - 2017" }
      ],
      slots: [
        {
          img: "./assets/compactor_chute_2.jpg",
          tag: "VISTA 3D",
          role: "Perspectiva Diagonal 3D",
          hudNode: "[TOMA 1: SILUETA 3D COMPLETA]",
          hudMethod: "MORFOLOGÍA 3D PURA",
          bbox1: { top: "26%", left: "30%", width: "44%", height: "46%", label: "Cuerpo Principal + Tolva Trapezoidal" },
          bbox2: { top: "55%", left: "43%", width: "16%", height: "16%", label: "Tensor de Acoplamiento de Alta Carga" }
        },
        {
          img: "./assets/compactor_chute_1.jpg",
          tag: "FRONTAL",
          role: "Frente y Señalización OSHA",
          hudNode: "[TOMA 2: FRENTE Y ETIQUETAS ANSI]",
          hudMethod: "OCR DE SEGURIDAD OSHA",
          bbox1: { top: "33%", left: "34%", width: "10%", height: "8%", label: "Rótulo DANGER • Riesgo de Aplastamiento" },
          bbox2: { top: "28%", left: "26%", width: "48%", height: "58%", label: "Bastidor Frontal + Compuerta Lateral" }
        },
        {
          img: "./assets/compactor_chute_3.jpg",
          tag: "CONEXIONES",
          role: " Alimentación y Desconectador",
          hudNode: "[TOMA 3: ACOMETIDA ELÉCTRICA]",
          hudMethod: "INSPECCIÓN NEC / NFPA 70",
          bbox1: { top: "30%", left: "83%", width: "8%", height: "10%", label: "Desconectador Local LOTO (NEC 430)" },
          bbox2: { top: "36%", left: "58%", width: "18%", height: "30%", label: "Mangueras Hidráulicas y Gabinete" }
        }
      ],
      logs: [
        "[01] Descartando color de pintura superficial (Regla Forense Anti-Repintado)...",
        "[02] Midiendo proporciones geométricas de tolva, cámara y contenedor acoplado...",
        "[03] Detectando calcomanías de seguridad ANSI Z245.2 y desconectador eléctrico LOTO...",
        "[04] Verificando especificaciones nominales de cilindros y presión hidráulica...",
        "[05] Expediente de Máquina Completa generado con éxito."
      ],
      v2Title: "🛡️ Diagnóstico de Seguridad Industrial y Mantenimiento Preventivo",
      v2Badge: "CUMPLIMIENTO OSHA / ANSI",
      v2Items: [
        {
          head: "Seguridad de Bloqueo y Etiquetado (OSHA 29 CFR 1910.147 — LOTO)",
          status: "Desconectador Visible en Pared",
          body: "Se verifica caja de desconexión eléctrica metálica en el muro derecho para aplicar candado LOTO antes de intervenir la cámara o el chute."
        },
        {
          head: "Integridad Mecánica y Sellado Perimetral",
          status: "Requiere Limpieza y Ajuste",
          body: "Se recomienda reemplazo de empaque inferior de puerta de acceso y verificación de torque en los pernos de anclaje al piso de concreto."
        }
      ]
    },

    financialAudit: {
      chip: "MODO: AUDITORÍA CAPEX (v2.0)",
      category: "AUDITORÍA TÉCNICO-FINANCIERA Y VALORACIÓN DE ACTIVOS (CAPEX / OPEX)",
      title: "Dictamen de Vida Útil y Reemplazo — Sistema Compactador Chute-Fed",
      marketBadge: "● Soporte Activo (Overhaul Viable)",
      marketClass: "market-active",
      confidence: "Confianza IA: 94.7% • Tasación de Mercado + Condición Física",
      forensicText:
        "El módulo de Auditoría Financiera v2.0 evalúa la edad estimada del activo (10-12 años), el estado estructural del acero (sano, sin fisuras en zonas de reacción del cilindro) y el desgaste de periféricos (mangueras, sellos de cilindro, contactores). Dictamina que un Overhaul Mayor ahorra un 68% frente al CAPEX de reemplazo completo.",
      specs: [
        { label: "CAPEX Equipo Nuevo", val: "$18,500 - $24,000 USD" },
        { label: "Valor Actual (As-Is)", val: "$5,800 - $7,200 USD" },
        { label: "Costo Estimado Overhaul", val: "$4,200 - $5,600 USD" },
        { label: "Vida Útil Remanente", val: "4 - 6 Años (+8 con Overhaul)" },
        { label: "Depreciación Acumulada", val: "68% (Línea Recta 15 años)" },
        { label: "Veredicto Financiero", val: "REPARAR / OVERHAUL (ROI 3.4x)" }
      ],
      slots: [
        {
          img: "./assets/compactor_chute_3.jpg",
          tag: "TASACIÓN 1",
          role: "Estado de HPU y Controles",
          hudNode: "[AUDITORÍA: HPU Y COMPONENTES]",
          hudMethod: "TASACIÓN CAPEX / OPEX",
          bbox1: { top: "36%", left: "58%", width: "17%", height: "28%", label: "HPU 5 HP: Candidato a Preventivo ($1,100)" },
          bbox2: { top: "28%", left: "30%", width: "35%", height: "54%", label: "Chasis Acero A36: 85% Integridad Estructural" }
        },
        {
          img: "./assets/compactor_chute_1.jpg",
          tag: "TASACIÓN 2",
          role: "Infraestructura Fija de Chute",
          hudNode: "[AUDITORÍA: DUCTO Y COMPUERTA]",
          hudMethod: "EVALUACIÓN VIDA ÚTIL",
          bbox1: { top: "8%", left: "28%", width: "44%", height: "24%", label: "Chute y Compuerta: Vida Remanente >10 años" },
          bbox2: { top: "48%", left: "26%", width: "46%", height: "40%", label: "Cámara: Requiere Sandblasting + Epóxico" }
        },
        {
          img: "./assets/compactor_chute_2.jpg",
          tag: "TASACIÓN 3",
          role: "Contenedor Rodante Acoplado",
          hudNode: "[AUDITORÍA: CONTENEDOR 2 YD³]",
          hudMethod: "VALOR RESIDUAL",
          bbox1: { top: "42%", left: "16%", width: "31%", height: "26%", label: "Contenedor 2 yd³: Buen Estado Operativo" },
          bbox2: { top: "56%", left: "43%", width: "16%", height: "16%", label: "Tensor Mecánico: Operativo" }
        }
      ],
      logs: [
        "[01] Evaluando severidad de corrosión superficial vs. integridad estructural del chasis...",
        "[02] Consultando precios de mercado USA para compactadores estacionarios de 0.5 yd³...",
        "[03] Calculando depreciación acumulada (68%) y vida útil remanente estimada (4-6 años)...",
        "[04] Comparando CAPEX de reemplazo total ($21,000) vs. Overhaul Hidráulico/Eléctrico ($4,900)...",
        "[05] Dictamen CAPEX completado: RECOMENDACIÓN DE OVERHAUL (Ahorro neto ~$16,100 USD)."
      ],
      v2Title: "📊 Dictamen de Auditoría Financiera y Recomendación CAPEX (FinancialAuditInfo v2.0)",
      v2Badge: "VEREDICTO: OVERHAUL / REACONDICIONAR",
      v2Items: [
        {
          head: "Comparativa CAPEX Reemplazo ($21,000 USD) vs. Overhaul Integral ($4,900 USD)",
          status: "Ahorro Directo de Capital: 76%",
          body: "El bastidor estructural y el chute vertical tienen más de 10 años de vida remanente. No se justifica el desembolso CAPEX de reemplazo completo."
        },
        {
          head: "Alcance Recomendado del Overhaul ($4,900 USD Estimado)",
          status: "Extensión de Vida Útil: +8 Años",
          body: "1) Reempaque de cilindro hidráulico y cambio de aceite AW-46 + filtro, 2) Reemplazo de 2 mangueras SAE 100R2, 3) Actualización de contactores y relé térmico, 4) Limpieza mecánica y recubrimiento epóxico anticorrosivo."
        }
      ]
    }
  };

  function renderCurrentMode() {
    const data = MODE_DATA[currentMode];
    if (!data) return;

    document.getElementById("phoneModeBadge").textContent = data.chip;
    document.getElementById("dsCategory").textContent = data.category;
    document.getElementById("dsTitle").textContent = data.title;

    const marketBadge = document.getElementById("dsMarketBadge");
    marketBadge.textContent = data.marketBadge;
    marketBadge.className = "market-badge " + data.marketClass;

    document.getElementById("dsConfidence").textContent = data.confidence;
    document.getElementById("dsForensicText").textContent = data.forensicText;

    // Render 6 nominal specs
    const specsGrid = document.getElementById("dsSpecsGrid");
    specsGrid.innerHTML = data.specs
      .map(
        (s) => `
        <div class="spec-cell">
          <span class="spec-cell-label">${s.label}</span>
          <span class="spec-cell-val">${s.val}</span>
        </div>
      `
      )
      .join("");

    // Render v2.0 module
    document.getElementById("v2ModuleTitle").textContent = data.v2Title;
    document.getElementById("v2ModuleBadge").textContent = data.v2Badge;
    const v2Content = document.getElementById("v2ModuleContent");
    v2Content.innerHTML = data.v2Items
      .map(
        (item) => `
        <div class="v2-node-item">
          <div class="v2-node-item-head">
            <span>${item.head}</span>
            <span style="color:#34d399;">${item.status}</span>
          </div>
          <p>${item.body}</p>
        </div>
      `
      )
      .join("");

    // Update slot cards labels
    data.slots.forEach((slot, idx) => {
      const tagEl = document.getElementById("slotTag" + idx);
      const roleEl = document.getElementById("slotRole" + idx);
      if (tagEl) tagEl.textContent = slot.tag;
      if (roleEl) roleEl.textContent = slot.role;
    });

    selectSlot(0, false);
  }

  function selectSlot(slotIndex, triggerFlash) {
    const data = MODE_DATA[currentMode];
    if (!data || !data.slots[slotIndex]) return;
    currentSlotIndex = slotIndex;
    const slot = data.slots[slotIndex];

    // Highlight active slot card
    document.querySelectorAll(".slot-card").forEach((btn, idx) => {
      btn.classList.toggle("active", idx === slotIndex);
    });

    if (triggerFlash) {
      const flash = document.getElementById("cameraFlash");
      flash.classList.remove("trigger");
      void flash.offsetWidth;
      flash.classList.add("trigger");
    }

    document.getElementById("viewportImg").src = slot.img;
    document.getElementById("hudNodeTag").textContent = slot.hudNode;
    document.getElementById("hudMethodTag").textContent = slot.hudMethod;

    const bbox1 = document.getElementById("bbox1");
    bbox1.style.top = slot.bbox1.top;
    bbox1.style.left = slot.bbox1.left;
    bbox1.style.width = slot.bbox1.width;
    bbox1.style.height = slot.bbox1.height;
    document.getElementById("bbox1Label").textContent = slot.bbox1.label;

    const bbox2 = document.getElementById("bbox2");
    bbox2.style.top = slot.bbox2.top;
    bbox2.style.left = slot.bbox2.left;
    bbox2.style.width = slot.bbox2.width;
    bbox2.style.height = slot.bbox2.height;
    document.getElementById("bbox2Label").textContent = slot.bbox2.label;
  }

  function clearScanTimers() {
    scanTimers.forEach((t) => clearTimeout(t));
    scanTimers = [];
  }

  function runAnimatedScan() {
    clearScanTimers();
    const data = MODE_DATA[currentMode];
    const viewport = document.getElementById("opticalViewport");
    const dsPanel = document.getElementById("datasheetPanel");
    const progressBar = document.getElementById("scanProgressBar");
    const statusText = document.getElementById("scanStatusText");
    const percentText = document.getElementById("scanPercentText");
    const logBox = document.getElementById("telemetryLog");

    const step1 = document.getElementById("stepPill1");
    const step2 = document.getElementById("stepPill2");
    const step3 = document.getElementById("stepPill3");

    // Step 1: Camera capture flash
    step1.className = "step-pill active";
    step2.className = "step-pill";
    step3.className = "step-pill";
    selectSlot(0, true);

    viewport.classList.add("scanning");
    dsPanel.classList.add("scanning-blur");
    progressBar.style.width = "12%";
    statusText.textContent = "📸 Paso 1/3: Capturando ángulos y etiquetas de nodo...";
    percentText.textContent = "12%";
    logBox.innerHTML = `<div class="log-item">${data.logs[0]}</div>`;

    // Cycle through slots during scan
    scanTimers.push(
      setTimeout(() => {
        step1.className = "step-pill completed";
        step2.className = "step-pill active";
        selectSlot(1, true);
        progressBar.style.width = "38%";
        statusText.textContent = "🔍 Paso 2/3: Analizando Silueta 3D (Ignorando pintura)...";
        percentText.textContent = "38%";
        logBox.innerHTML += `<div class="log-item">${data.logs[1]}</div>`;
      }, 650)
    );

    scanTimers.push(
      setTimeout(() => {
        selectSlot(2, true);
        progressBar.style.width = "68%";
        statusText.textContent = "🌐 Consultando Gemini 3.6 Flash + Google Search Grounding...";
        percentText.textContent = "68%";
        logBox.innerHTML += `<div class="log-item">${data.logs[2]}</div>`;
        logBox.innerHTML += `<div class="log-item">${data.logs[3]}</div>`;
      }, 1350)
    );

    scanTimers.push(
      setTimeout(() => {
        selectSlot(0, false);
        viewport.classList.remove("scanning");
        dsPanel.classList.remove("scanning-blur");
        step2.className = "step-pill completed";
        step3.className = "step-pill active";
        progressBar.style.width = "100%";
        statusText.textContent = "✔ Paso 3/3: Ficha Técnica v2.0 y Dossier PDF Generados";
        percentText.textContent = "100%";
        logBox.innerHTML = data.logs
          .map((l) => `<div class="log-item done">${l}</div>`)
          .join("");
      }, 2100)
    );
  }

  function openPdfModal() {
    const data = MODE_DATA[currentMode];
    const sheet = document.getElementById("pdfSheetContent");
    const nowStr = new Date().toISOString().slice(0, 10);

    sheet.innerHTML = `
      <div class="pdf-header-strip">
        <div style="display:flex;align-items:center;gap:12px;">
          <img src="./assets/app_icon.png" alt="MachId" style="width:44px;height:44px;border-radius:8px;" />
          <div>
            <div style="font-size:18px;font-weight:800;color:#1e4d5c;">MachId™ MACHINE IDENTIFIER AI (v2.0)</div>
            <div style="font-size:11px;color:#475569;">DOSSIER EJECUTIVO DE INSPECCIÓN FORENSE • MOSBI SYSTEMS LLC • info@mosbisystems.com</div>
          </div>
        </div>
        <div style="text-align:right;font-size:12px;color:#334155;">
          <strong>Fecha:</strong> ${nowStr}<br/>
          <strong>Modo:</strong> ${data.chip}<br/>
          <strong>Páginas:</strong> 1 de 1 (US Letter)
        </div>
      </div>

      <div class="pdf-grid-2">
        <div class="pdf-box">
          <h4>1. Identificación Positiva del Activo</h4>
          <div style="font-size:15px;font-weight:800;color:#0f172a;margin-bottom:4px;">${data.title}</div>
          <div style="font-size:12px;color:#475569;margin-bottom:6px;">${data.category}</div>
          <div style="font-size:12px;font-weight:700;color:#047857;">${data.marketBadge} | ${data.confidence}</div>
        </div>
        <div class="pdf-box">
          <h4>2. Dictamen Forense Multimodal (Gemini 3.6 Flash)</h4>
          <p style="font-size:12px;color:#1e293b;line-height:1.45;">${data.forensicText}</p>
        </div>
      </div>

      <div class="pdf-box" style="margin-bottom:14px;">
        <h4>3. Evidencia Fotográfica Multi-Ángulo / Nodos Inspeccionados</h4>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:8px;">
          ${data.slots
            .map(
              (s) => `
            <div style="border:1px solid #cbd5e1;border-radius:6px;padding:6px;background:#fff;">
              <img src="${s.img}" alt="${s.role}" style="width:100%;height:110px;object-fit:cover;border-radius:4px;" />
              <div style="font-size:11px;font-weight:800;color:#1e4d5c;margin-top:4px;">[${s.tag}] ${s.role}</div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="pdf-box" style="margin-bottom:14px;">
        <h4>4. Especificaciones Nominales de Ingeniería</h4>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px;">
          ${data.specs
            .map(
              (sp) => `
            <div style="font-size:12px;padding:6px;background:#fff;border:1px solid #e2e8f0;border-radius:4px;">
              <span style="color:#64748b;display:block;font-size:10px;">${sp.label}</span>
              <strong style="color:#0f172a;">${sp.val}</strong>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="pdf-box" style="margin-bottom:14px;">
        <h4>5. ${data.v2Title}</h4>
        ${data.v2Items
          .map(
            (it) => `
          <div style="margin-top:6px;padding-top:6px;border-top:1px solid #e2e8f0;font-size:12px;">
            <strong>${it.head}</strong> — <span style="color:#047857;font-weight:700;">${it.status}</span>
            <div style="color:#334155;">${it.body}</div>
          </div>
        `
          )
          .join("")}
      </div>

      <div style="font-size:10px;color:#64748b;border-top:1px solid #cbd5e1;padding-top:8px;display:flex;justify-content:space-between;">
        <span>Generado por MachId™ Machine Identifier AI v2.0 • © 2026 MOSBI Systems LLC (info@mosbisystems.com)</span>
        <span>Compatible con FieldOps Gen Pro™ (SC ≠ WO)</span>
      </div>
    `;

    document.getElementById("pdfModalBackdrop").classList.add("open");
  }

  function openFieldOpsModal() {
    const data = MODE_DATA[currentMode];
    const payload = {
      adapterVersion: "FieldOpsMachineAdapter v2.0.0",
      complianceRule: "SC != WO (Service Calls generate Findings; Work Orders require approved Proposal)",
      targetMode: currentMode,
      assetPayload: {
        assetName: data.title,
        category: data.category,
        confidenceScore: 0.964,
        marketStatus: data.marketBadge,
        nominalSpecs: data.specs,
        distributedNodesCount: data.slots.length
      },
      findingPayloads: data.v2Items.map((it, idx) => ({
        findingId: "FND-MACHID-0" + (idx + 1),
        title: it.head,
        severity: idx === 1 ? "MEDIUM" : "LOW",
        status: it.status,
        recommendedAction: it.body,
        requiresClientProposalBeforeWorkOrder: true
      }))
    };

    document.getElementById("fieldopsJsonPre").textContent = JSON.stringify(payload, null, 2);
    document.getElementById("fieldopsModalBackdrop").classList.add("open");
  }

  function applyTranslations() {
    const dict = UI_STRINGS[currentLang] || UI_STRINGS.es;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.getElementById("langBtn").textContent =
      currentLang.toUpperCase() + " ▾ (ES | EN | FR)";
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCurrentMode();
    applyTranslations();

    // Mode buttons
    document.querySelectorAll(".mode-card-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".mode-card-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentMode = btn.getAttribute("data-mode");
        renderCurrentMode();
        runAnimatedScan();
      });
    });

    // Photo slot buttons
    document.querySelectorAll(".slot-card").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-slot"), 10);
        selectSlot(idx, true);
      });
    });

    // Stepper clicks
    document.querySelectorAll(".step-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        runAnimatedScan();
      });
    });

    // Scan trigger buttons
    document.getElementById("runScanBtn").addEventListener("click", runAnimatedScan);
    document.getElementById("topRunScanBtn").addEventListener("click", runAnimatedScan);

    // Modals
    document.getElementById("openPdfBtn").addEventListener("click", openPdfModal);
    document.getElementById("closePdfModalBtn").addEventListener("click", () => {
      document.getElementById("pdfModalBackdrop").classList.remove("open");
    });
    document.getElementById("printPdfNowBtn").addEventListener("click", () => {
      window.print();
    });

    document.getElementById("openFieldOpsBtn").addEventListener("click", openFieldOpsModal);
    document.getElementById("closeFieldOpsModalBtn").addEventListener("click", () => {
      document.getElementById("fieldopsModalBackdrop").classList.remove("open");
    });

    // Language switcher
    document.getElementById("langBtn").addEventListener("click", () => {
      const order = ["es", "en", "fr"];
      const nextIdx = (order.indexOf(currentLang) + 1) % order.length;
      currentLang = order[nextIdx];
      applyTranslations();
    });
  });
})();
