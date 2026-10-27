/* MachId™ demo — language-independent geometry + fully localized mode content (ES / EN / FR) */
(function () {
  "use strict";

  // Language-independent data: images, bounding boxes and style classes.
  const MACHID_BASE = {
    distributedSystem: {
      marketClass: "market-active",
      slots: [
        {
          img: "./assets/horizontal_baler_1.jpg",
          bbox1: { top: "18%", left: "34%", width: "32%", height: "55%" },
          bbox2: { top: "22%", left: "58%", width: "36%", height: "38%" }
        },
        {
          img: "./assets/horizontal_baler_2.jpg",
          bbox1: { top: "34%", left: "33%", width: "48%", height: "42%" },
          bbox2: { top: "54%", left: "64%", width: "12%", height: "6%" }
        },
        {
          img: "./assets/horizontal_baler_3.jpg",
          bbox1: { top: "42%", left: "17%", width: "9%", height: "11%" },
          bbox2: { top: "45%", left: "42%", width: "16%", height: "28%" }
        }
      ]
    },
    componentOrPart: {
      marketClass: "market-active",
      slots: [
        {
          img: "./assets/5cp2120w_pump.jpg",
          bbox1: { top: "14%", left: "18%", width: "62%", height: "68%" },
          bbox2: { top: "24%", left: "46%", width: "30%", height: "28%" }
        },
        {
          img: "./assets/resorte.jpg",
          bbox1: { top: "18%", left: "22%", width: "56%", height: "64%" },
          bbox2: { top: "35%", left: "32%", width: "36%", height: "30%" }
        },
        {
          img: "./assets/horizontal_baler_3.jpg",
          bbox1: { top: "42%", left: "17%", width: "9%", height: "11%" },
          bbox2: { top: "45%", left: "42%", width: "16%", height: "28%" }
        }
      ]
    },
    completeMachine: {
      marketClass: "market-active",
      slots: [
        {
          img: "./assets/horizontal_baler_2.jpg",
          bbox1: { top: "34%", left: "33%", width: "48%", height: "42%" },
          bbox2: { top: "33%", left: "43%", width: "14%", height: "4%" }
        },
        {
          img: "./assets/horizontal_baler_3.jpg",
          bbox1: { top: "41%", left: "26%", width: "52%", height: "39%" },
          bbox2: { top: "42%", left: "17%", width: "9%", height: "11%" }
        },
        {
          img: "./assets/horizontal_baler_1.jpg",
          bbox1: { top: "18%", left: "34%", width: "32%", height: "55%" },
          bbox2: { top: "22%", left: "58%", width: "36%", height: "38%" }
        }
      ]
    },
    financialAudit: {
      marketClass: "market-active",
      slots: [
        {
          img: "./assets/horizontal_baler_2.jpg",
          bbox1: { top: "34%", left: "33%", width: "48%", height: "42%" },
          bbox2: { top: "54%", left: "64%", width: "12%", height: "6%" }
        },
        {
          img: "./assets/horizontal_baler_3.jpg",
          bbox1: { top: "42%", left: "17%", width: "9%", height: "11%" },
          bbox2: { top: "45%", left: "42%", width: "16%", height: "28%" }
        },
        {
          img: "./assets/horizontal_baler_1.jpg",
          bbox1: { top: "18%", left: "34%", width: "32%", height: "55%" },
          bbox2: { top: "67%", left: "12%", width: "76%", height: "33%" }
        }
      ]
    }
  };

  const MACHID_TEXT = {
    /* ===================================================== ES ===================================================== */
    es: {
      distributedSystem: {
        chip: "MODO: MULTI-NODO (v2.0)",
        category: "SISTEMA DISTRIBUIDO DE COMPACTACIÓN INDUSTRIAL CON TRANSPORTADOR IN-FEED",
        title: "Compactadora / Enfardadora Horizontal Model 72 Closed End Baler",
        marketBadge: "● Activa (Soporte Estándar ANSI / Repuestos Industriales)",
        confidence: "Confianza IA: 98.6% • Inferencia Morfológica Multi-Nodo + Cinemática de Prensa Horizontal",
        forensicText:
          "Regla Forense aplicada: se descarta el color verde industrial repintado en campo y la acumulación superficial de recortes de papel. La IA correlaciona 3 nodos físicos conectados: (1) rampa transportadora metálica de alimentación continua tipo in-feed desde fosa de carga, (2) cámara de compresión horizontal reforzada con puerta de extremo cerrado (Closed-End Door), traba con cilindro hidráulico y 5 ranuras pasahilos de amarre, y (3) unidad de potencia hidráulica remota con motor eléctrico TEFC trifásico de alto par, depósito de fluido y gabinete eléctrico NEMA con botonera de mando. Identificación positiva: Horizontal Closed-End Baler Model 72 para fardos mill-size de 72 pulgadas.",
        specs: [
          { label: "Tipo de Maquinaria", val: "Enfardadora / Compactadora Horizontal" },
          { label: "Modelo / Configuración", val: "Model 72 Closed End Baler" },
          { label: "Dimensiones de Fardo", val: "72 in × 30 in × 44 in (Mill-Size)" },
          { label: "Motor / Hidráulica", val: "20 - 30 HP TEFC • 230/460V 3F (60 Hz)" },
          { label: "Cilindro / Presión", val: "Cilindro 6-7 in • 2,500 - 3,000 PSI" },
          { label: "Sistema de Carga", val: "Transportador In-Feed Inclinado + Tolva" }
        ],
        slots: [
          { tag: "NODO 1", role: "Rampa In-Feed y Fosa", hudNode: "[NODO 1: TRANSPORTADOR Y FOSA DE CARGA]", hudMethod: "CINEMÁTICA DE TRANSPORTE 3D", bbox1Label: "Transportador Metálico In-Feed", bbox2Label: "Prensa Horizontal y Sección Closed-End" },
          { tag: "NODO 2", role: "Cámara y Puerta Closed-End", hudNode: "[NODO 2: CÁMARA Y PUERTA CLOSED-END]", hudMethod: "GEOMETRÍA ESTRUCTURAL DE PRENSADO", bbox1Label: "Cámara de Compresión + Ranuras Pasahilos", bbox2Label: "Cilindro Hidráulico de Traba de Compuerta" },
          { tag: "NODO 3", role: "Unidad Hidráulica y Gabinete NEMA", hudNode: "[NODO 3: UNIDAD HIDRÁULICA Y CONTROL]", hudMethod: "TOPOLOGÍA ELECTROMECÁNICA", bbox1Label: "Motor Eléctrico TEFC + Bomba Hidráulica", bbox2Label: "Gabinete Eléctrico NEMA de Fuerza y Mando" }
        ],
        logs: [
          "[01] Procesando 3 fotografías con etiquetas [NODO 1: Rampa In-Feed], [NODO 2: Cámara] y [NODO 3: HPU]...",
          "[02] Aplicando Regla Forense: ignorando pintura verde superficial y recortes de papel; aislando geometría 3D...",
          "[03] Correlacionando flujo continuo: Fosa de Carga → Rampa In-Feed → Tolva Superior → Cilindro Horizontal...",
          "[04] Identificando puerta de extremo cerrado (Closed-End) de 72 pulgadas con traba hidráulica y ranuras de amarre...",
          "[05] Topología Multi-Nodo consolidada y adaptador FieldOps Gen Pro™ generado para Model 72 Closed End Baler."
        ],
        v2Title: "🔗 Desglose de Topología Multi-Nodo (DistributedNodeAnalysis v2.0)",
        v2Badge: "3 NODOS CONECTADOS",
        v2Items: [
          { head: "NODO 1 — Rampa Transportadora In-Feed y Fosa de Concreto", status: "Operativo • Verificar Tensión de Banda y Rodillos", body: "Rampa transportadora inclinada de placas de acero que traslada recortes de fibra y papel hacia la boca de carga de la prensa. Bancada y guías laterales en condición operativa sin deflexión estructural." },
          { head: "NODO 2 — Cámara de Compresión y Puerta de Extremo Cerrado (Closed-End)", status: "Atención • Desgaste Mecánico Normal y Limpieza", body: "Cámara de prensado con vigas maestras y ranuras horizontales para paso de alambre calibre 13-14. Puerta de extremo cerrado operada por cilindro de traba hidráulico; requiere lubricación en bisagras." },
          { head: "NODO 3 — Unidad de Potencia Hidráulica (HPU), Motor TEFC y Gabinete NEMA", status: "Identificación Positiva • Especificación Industrial", body: "Conjunto motor trifásico de alto rendimiento montado sobre depósito de fluido hidráulico. Gabinete eléctrico NEMA con contactores, relés de protección y estación de pulsadores industriales." }
        ]
      },

      componentOrPart: {
        chip: "MODO: CROSS-REF OEM (v2.0)",
        category: "BOMBA TRIPLEX DE ÉMBOLOS CERÁMICOS DE ALTA PRESIÓN",
        title: "Cat Pumps 5CP2120W — Bomba Triplex de Émbolos",
        marketBadge: "● Activa (Amplio Soporte OEM y Aftermarket)",
        confidence: "Confianza IA: 98.9% • OCR Placa + Geometría de Cabezal",
        forensicText:
          "Lectura híbrida de placa metálica y morfología del cabezal de latón forjado cromado con cárter de aluminio anodizado azul. MachId™ v2.0 extrae automáticamente el número de parte OEM (5CP2120W) y genera la matriz de equivalencias Aftermarket para sellos, válvulas, resortes de retorno y bombas completas sustitutas.",
        specs: [
          { label: "Caudal Nominal", val: "4.0 GPM (15.0 L/min)" },
          { label: "Presión Máxima", val: "2,500 PSI (172 bar)" },
          { label: "Velocidad Nominal", val: "950 RPM (Eje Sólido 20 mm)" },
          { label: "Puertos Admisión/Desc.", val: "1/2 in NPTF / 3/8 in NPTF" },
          { label: "Material Cabezal", val: "Latón Forjado (Niquelado)" },
          { label: "Kit Sellos / Válvulas", val: "PN 33628 / PN 30821" }
        ],
        slots: [
          { tag: "COMPONENTE", role: "Bomba Cat Pumps 5CP2120W", hudNode: "[COMPONENTE: CAT PUMPS 5CP2120W]", hudMethod: "OCR + CROSS-REFERENCE OEM", bbox1Label: "Cabezal Triplex Latón + Cárter 5CP2120W", bbox2Label: "Placa OEM: 5CP2120W • 2500 PSI" },
          { tag: "SUB-PIEZA", role: "Resorte de Retorno / Válvula", hudNode: "[SUB-PIEZA: RESORTE HELICOIDAL INOX]", hudMethod: "MORFOLOGÍA DE ELEMENTO", bbox1Label: "Resorte Compresión Acero Inox 316", bbox2Label: "Paso constante • Extremos esmerilados" },
          { tag: "PLACA OEM", role: "Placa y Datos de Placa", hudNode: "[CONTEXTO: METROLOGÍA DE PLACA]", hudMethod: "OCR INDUSTRIAL INTEGRADO", bbox1Label: "OCR: Fabricante y Modelo OEM", bbox2Label: "Datos Eléctricos y Serie Verificados" }
        ],
        logs: [
          "[01] Analizando geometría de componente individual y placa grabada...",
          "[02] OCR positivo: fabricante CAT PUMPS — modelo exacto 5CP2120W (4.0 GPM @ 2500 PSI)...",
          "[03] Consultando catálogos de partes y kits de reparación con Google Search Grounding...",
          "[04] Generando tabla de equivalencias OEM y Aftermarket (General Pump, AR, Grainger)...",
          "[05] Ficha de repuesto v2.0 lista para solicitud de compra o inventario de furgoneta."
        ],
        v2Title: "⚙️ Matriz de Cross-Reference OEM y Repuestos Equivalentes (v2.0)",
        v2Badge: "4 EQUIVALENCIAS VERIFICADAS",
        v2Items: [
          { head: "Número de Parte Original (OEM): CAT PUMPS 5CP2120W", status: "En Producción • Entrega Inmediata", body: "Kit de Sellos OEM: #33628 | Kit de Válvulas OEM: #30821 | Aceite de Cárter: ISO VG 68 (#6107)." },
          { head: "Equivalentes Directos Aftermarket (Drop-In / Mismo Rango 4 GPM @ 2500 PSI)", status: "100% Compatibles en Caudal/Presión", body: "• General Pump (Interpump): Serie TS1511 / T1011 | • Annovi Reverberi (AR): RKA4G25N | • Comet: FW2 4025S." },
          { head: "Distribuidores Industriales Verificados (Búsqueda en Tiempo Real)", status: "Stock Confirmado EE. UU.", body: "• Grainger SKU: 2P223 / 5CP2120W | • Kleen-Rite Corp: CAT-5CP2120W | • McMaster-Carr (Sellos Viton/NBR y Resortes 316 SS)." }
        ]
      },

      completeMachine: {
        chip: "MODO: MÁQUINA COMPLETA",
        category: "MAQUINARIA PESADA DE RECICLAJE Y MANEJO DE RESIDUOS SÓLIDOS",
        title: "Compactadora / Enfardadora Horizontal Model 72 Closed End Baler",
        marketBadge: "● Activa (Soporte Técnico y Repuestos Industriales)",
        confidence: "Confianza IA: 98.4% • Silueta Morfológica 3D + Arquitectura de Prensa Horizontal",
        forensicText:
          "Aunque la unidad presenta desgaste de pintura verde por operación continua en planta de recuperación de fibras, el motor forense de MachId™ analiza la disposición del bastidor en acero estructural A36, la carrera del ariete horizontal, la compuerta de extremo cerrado con cilindro de traba y las 5 ranuras guía para atado manual de fardos mill-size de 72 pulgadas.",
        specs: [
          { label: "Tipo de Equipo", val: "Enfardadora Horizontal Closed-End" },
          { label: "Modelo / Serie", val: "Model 72 Closed End Baler" },
          { label: "Tamaño de Fardo", val: "72 in × 30 in × 44 in (~1,200 lbs OCC)" },
          { label: "Fuerza de Empuje", val: "~70,000 - 95,000 lbs (Cilindro 6-7 in)" },
          { label: "Estructura Principal", val: "Acero Laminado A36 Soldado Continuo" },
          { label: "Normativa Aplicable", val: "ANSI Z245.5 / OSHA 1910" }
        ],
        slots: [
          { tag: "FRONTAL", role: "Cámara y Puerta Closed-End", hudNode: "[TOMA 1: CÁMARA Y PUERTA CLOSED-END]", hudMethod: "MORFOLOGÍA 3D DE PRENSA", bbox1Label: "Cámara de Compresión + Ranuras de Amarre", bbox2Label: "Botonera de Control y Parada de Emergencia" },
          { tag: "BASTIDOR", role: "Unidad Hidráulica y Motor", hudNode: "[TOMA 2: BASTIDOR Y POTENCIA HIDRÁULICA]", hudMethod: "INSPECCIÓN ELECTROMECÁNICA", bbox1Label: "Chasis A36 + Cilindro de Prensado", bbox2Label: "Motor Eléctrico TEFC de Alto Par" },
          { tag: "CONJUNTO", role: "Rampa In-Feed y Alimentación", hudNode: "[TOMA 3: VISTA PANORÁMICA DE CONJUNTO]", hudMethod: "INTEGRACIÓN DE LÍNEA DE PROCESO", bbox1Label: "Rampa Transportadora In-Feed", bbox2Label: "Prensa Horizontal y Descarga" }
        ],
        logs: [
          "[01] Descartando color de pintura verde envejecida y residuos de papel (Regla Forense Anti-Repintado)...",
          "[02] Midiendo dimensiones cinemáticas del bastidor horizontal y carrera de compactación de 72 pulgadas...",
          "[03] Identificando compuerta frontal cerrada (Closed-End) con cilindro de pestillo hidráulico y ranuras pasahilos...",
          "[04] Verificando especificaciones nominales de potencia hidráulica y normas de seguridad ANSI Z245.5...",
          "[05] Expediente de Máquina Completa generado con éxito para Model 72 Closed End Baler."
        ],
        v2Title: "🛡️ Diagnóstico de Seguridad Industrial y Mantenimiento Mecánico (OSHA / ANSI Z245.5)",
        v2Badge: "CUMPLIMIENTO ANSI Z245.5 / OSHA",
        v2Items: [
          { head: "Procedimiento de Bloqueo y Etiquetado (OSHA 29 CFR 1910.147 — LOTO)", status: "Desconectador Visible en Gabinete NEMA", body: "Interruptor de desconexión principal con traba de seguridad ubicado en el lateral del gabinete eléctrico. Obligatorio aplicar candado LOTO antes de ingresar a la tolva o destrabar la compuerta de fardos." },
          { head: "Integridad del Cilindro de Traba y Guías de Ranura de Amarre", status: "Requiere Lubricación y Ajuste Preventivo", body: "Se recomienda inspección de sellos en el cilindro hidráulico de compuerta, lubricación de pasadores de pivote y limpieza de restos de fleje/alambre en las 5 ranuras de expulsión." }
        ]
      },

      financialAudit: {
        chip: "MODO: AUDITORÍA CAPEX (v2.0)",
        category: "AUDITORÍA TÉCNICO-FINANCIERA Y VALORACIÓN DE ACTIVOS (CAPEX / OPEX)",
        title: "Dictamen CAPEX — Model 72 Closed End Baler",
        marketBadge: "● Soporte Activo (Overhaul Altamente Rentable)",
        confidence: "Confianza IA: 97.4% • Tasación Industrial + Resistencia Estructural de Chasis",
        forensicText:
          "El módulo de Auditoría Financiera v2.0 evalúa el estado del bastidor de acero estructural A36 de la enfardadora horizontal Model 72 Closed End Baler. Adquirir un equipo nuevo equivalente con transportador in-feed representa un desembolso CAPEX de ~$75,000 USD, mientras que un reacondicionamiento integral (Overhaul de cilindros, bomba hidráulica, mangueras y tablero eléctrico) cuesta ~$14,200 USD, generando un ahorro directo del 81% y extendiendo su vida útil entre 10 y 15 años.",
        specs: [
          { label: "Tipo / Modelo", val: "Model 72 Closed End Baler" },
          { label: "CAPEX Equipo Nuevo", val: "$68,000 - $85,000 USD" },
          { label: "Valor Actual (As-Is)", val: "$15,000 - $19,500 USD" },
          { label: "Costo Estimado Overhaul", val: "$13,500 - $15,800 USD" },
          { label: "Vida Útil Remanente", val: "6 - 8 Años (+12 con Overhaul)" },
          { label: "Veredicto Financiero", val: "REACONDICIONAR / OVERHAUL (ROI 4.8x)" }
        ],
        slots: [
          { tag: "TASACIÓN 1", role: "Cámara y Puerta Closed-End", hudNode: "[AUDITORÍA: CÁMARA Y PUERTA CLOSED-END]", hudMethod: "INTEGRIDAD ESTRUCTURAL A36", bbox1Label: "Cámara Closed-End 72: Estructura A36 Recuperable", bbox2Label: "Cilindro de Traba Operativo" },
          { tag: "TASACIÓN 2", role: "Unidad Hidráulica y Control", hudNode: "[AUDITORÍA: UNIDAD DE POTENCIA Y NEMA]", hudMethod: "EVALUACIÓN ELECTROMECÁNICA", bbox1Label: "Motor TEFC y Tanque Hidráulico", bbox2Label: "Gabinete Eléctrico: Reemplazo Preventivo Contactores" },
          { tag: "TASACIÓN 3", role: "Rampa In-Feed y Fosa", hudNode: "[AUDITORÍA: INFRAESTRUCTURA DE ALIMENTACIÓN]", hudMethod: "VALOR RESIDUAL DE LÍNEA", bbox1Label: "Transportador In-Feed: Vida Remanente >10 años", bbox2Label: "Fosa de Carga: Estructura Sólida" }
        ],
        logs: [
          "[01] Vinculando tipología de activo industrial: Horizontal Closed End Baler Model 72 en planta de reciclaje...",
          "[02] Consultando base de precios de maquinaria pesada en EE. UU. para prensas horizontales de fardo 72 pulgadas...",
          "[03] Calculando depreciación contable acumulada y valor residual de chasis reforzado en vigas de acero A36...",
          "[04] Comparando CAPEX de reemplazo completo ($75,000 USD) vs. overhaul hidráulico y electromecánico ($14,200 USD)...",
          "[05] Dictamen CAPEX completado: RECOMENDACIÓN DE REACONDICIONAMIENTO (ahorro neto ~$60,800 USD)."
        ],
        v2Title: "📊 Dictamen de Auditoría Financiera y Recomendación CAPEX (FinancialAuditInfo v2.0)",
        v2Badge: "VEREDICTO: REACONDICIONAR / OVERHAUL",
        v2Items: [
          { head: "Comparativa CAPEX: Reemplazo Nuevo ($75,000 USD) vs. Overhaul Integral ($14,200 USD)", status: "Ahorro Directo de Capital: 81%", body: "El chasis pesado de vigas de acero laminado A36 no presenta fatiga plástica ni fisuras. Un reemplazo total por equipo nuevo no se justifica financieramente frente a un reacondicionamiento." },
          { head: "Alcance Recomendado del Overhaul ($14,200 USD Estimado)", status: "Extensión de Vida Útil: +12 a 15 Años", body: "1) Reempaque de sellos de poliuretano en cilindro principal y cilindro de puerta, 2) cambio total de fluido hidráulico ISO VG 46 y filtros de succión/retorno, 3) reemplazo de mangueras de alta presión SAE 100R2, 4) actualización de contactores y relevador térmico en gabinete NEMA, 5) limpieza por chorro de arena y pintura epóxica anticorrosiva." }
        ]
      }
    },

    /* ===================================================== EN ===================================================== */
    en: {
      distributedSystem: {
        chip: "MODE: MULTI-NODE (v2.0)",
        category: "DISTRIBUTED INDUSTRIAL BALING SYSTEM WITH IN-FEED CONVEYOR",
        title: "Model 72 Closed End Baler Horizontal Hydraulic Compactor",
        marketBadge: "● Active (Standard ANSI Support & Industrial Spares)",
        confidence: "AI Confidence: 98.6% • Multi-Node Morphological Inference + Horizontal Ram Kinematics",
        forensicText:
          "Forensic Rule applied: field green repaint and paper scrap accumulations are discarded. The AI correlates 3 connected physical nodes: (1) steel slat/belt in-feed conveyor ramp rising from a pit feed hopper, (2) reinforced horizontal compaction chamber with a closed-end discharge door, hydraulic door latch cylinder, and 5 wire tie-through slots, and (3) remote chassis-mounted hydraulic power unit (HPU) with a high-torque TEFC 3-phase electric motor, fluid reservoir, and NEMA control enclosure. Positive engineering ID: Model 72 Closed End Baler for 72-inch mill-size bales.",
        specs: [
          { label: "Machinery Type", val: "Horizontal Closed-End Baler" },
          { label: "Model / Config", val: "Model 72 Closed End Baler" },
          { label: "Bale Dimensions", val: "72 in × 30 in × 44 in (Mill-Size)" },
          { label: "Motor / Powertrain", val: "20 - 30 HP TEFC • 230/460V 3Ph (60 Hz)" },
          { label: "Cylinder / Pressure", val: "6 - 7 in Bore • 2,500 - 3,000 PSI" },
          { label: "Feed System", val: "Inclined In-Feed Conveyor + Top Hopper" }
        ],
        slots: [
          { tag: "NODE 1", role: "In-Feed Ramp & Pit", hudNode: "[NODE 1: IN-FEED CONVEYOR & FEED PIT]", hudMethod: "3D TRANSPORT KINEMATICS", bbox1Label: "In-Feed Steel Slat Conveyor", bbox2Label: "Horizontal Baler & Closed-End Section" },
          { tag: "NODE 2", role: "Chamber & Closed-End Door", hudNode: "[NODE 2: CHAMBER & CLOSED-END DOOR]", hudMethod: "STRUCTURAL PRESS GEOMETRY", bbox1Label: "Compaction Chamber + Tie Slots", bbox2Label: "Hydraulic Door Latch Cylinder" },
          { tag: "NODE 3", role: "Hydraulic Power Unit & NEMA Panel", hudNode: "[NODE 3: HPU & NEMA CONTROL]", hudMethod: "ELECTROMECHANICAL TOPOLOGY", bbox1Label: "TEFC Motor + Hydraulic Pump", bbox2Label: "NEMA Control & Power Enclosure" }
        ],
        logs: [
          "[01] Processing 3 photographs tagged [NODE 1: In-Feed], [NODE 2: Chamber] and [NODE 3: HPU]...",
          "[02] Applying Forensic Rule: ignoring green surface paint and paper trimmings; isolating 3D geometry...",
          "[03] Correlating process flow: Feed Pit → In-Feed Conveyor → Top Hopper → Horizontal Ram Chamber...",
          "[04] Verifying 72-inch closed-end discharge door geometry with hydraulic latch and manual tie slots...",
          "[05] Multi-Node topology consolidated and FieldOps Gen Pro™ adapter generated for Model 72 Closed End Baler."
        ],
        v2Title: "🔗 Multi-Node Topology Breakdown (DistributedNodeAnalysis v2.0)",
        v2Badge: "3 CONNECTED NODES",
        v2Items: [
          { head: "NODE 1 — In-Feed Conveyor Ramp & Concrete Pit", status: "Operational • Verify Belt Tension & Rollers", body: "Inclined steel-plate conveyor delivering scrap paper and cardboard into the baler's feed throat. Side guides and structural bed in operational condition without beam sagging." },
          { head: "NODE 2 — Compaction Chamber & Closed-End Discharge Door", status: "Attention • Normal Mechanical Wear & Cleaning", body: "Horizontal compression chamber with channel stiffeners and 5 slots for 13-14 gauge wire tying. Closed-end door operated by a hydraulic latch cylinder; hinge pin lubrication recommended." },
          { head: "NODE 3 — Hydraulic Power Unit (HPU), TEFC Motor & NEMA Panel", status: "Positive ID • Heavy Industrial Spec", body: "High-torque 3-phase electric motor mounted over a heavy-duty hydraulic fluid reservoir. NEMA electrical panel with industrial contactors, thermal overloads, and operator pushbuttons." }
        ]
      },

      componentOrPart: {
        chip: "MODE: OEM CROSS-REF (v2.0)",
        category: "HIGH-PRESSURE CERAMIC-PLUNGER TRIPLEX PUMP",
        title: "Cat Pumps 5CP2120W — Triplex Plunger Pump",
        marketBadge: "● Active (Wide OEM & Aftermarket Support)",
        confidence: "AI Confidence: 98.9% • Nameplate OCR + Pump-Head Geometry",
        forensicText:
          "Hybrid reading of the metal nameplate and the morphology of the chrome-plated forged brass head with blue anodized aluminum crankcase. MachId™ v2.0 automatically extracts the OEM part number (5CP2120W) and builds the aftermarket equivalence matrix for seals, valves, return springs and complete replacement pumps.",
        specs: [
          { label: "Rated Flow", val: "4.0 GPM (15.0 L/min)" },
          { label: "Maximum Pressure", val: "2,500 PSI (172 bar)" },
          { label: "Rated Speed", val: "950 RPM (20 mm Solid Shaft)" },
          { label: "Inlet/Outlet Ports", val: "1/2 in NPTF / 3/8 in NPTF" },
          { label: "Head Material", val: "Forged Brass (Nickel-Plated)" },
          { label: "Seal / Valve Kit", val: "PN 33628 / PN 30821" }
        ],
        slots: [
          { tag: "COMPONENT", role: "Cat Pumps 5CP2120W Pump", hudNode: "[COMPONENT: CAT PUMPS 5CP2120W]", hudMethod: "OCR + OEM CROSS-REFERENCE", bbox1Label: "Brass Triplex Head + 5CP2120W Crankcase", bbox2Label: "OEM Nameplate: 5CP2120W • 2500 PSI" },
          { tag: "SUB-PART", role: "Return Spring / Valve", hudNode: "[SUB-PART: STAINLESS HELICAL SPRING]", hudMethod: "ELEMENT MORPHOLOGY", bbox1Label: "316 Stainless Steel Compression Spring", bbox2Label: "Constant pitch • Ground ends" },
          { tag: "OEM PLATE", role: "Nameplate & Stamped Specs", hudNode: "[CONTEXT: METROLOGY INSPECTION]", hudMethod: "INTEGRATED INDUSTRIAL OCR", bbox1Label: "OCR: Manufacturer & Model Stamp", bbox2Label: "Verified Serial & Electrical Ratings" }
        ],
        logs: [
          "[01] Analyzing individual component geometry and stamped nameplate...",
          "[02] Positive OCR: manufacturer CAT PUMPS — exact model 5CP2120W (4.0 GPM @ 2500 PSI)...",
          "[03] Querying parts catalogs and repair kits with Google Search Grounding...",
          "[04] Generating OEM and aftermarket equivalence table (General Pump, AR, Grainger)...",
          "[05] Spare-part sheet v2.0 ready for purchase request or van inventory."
        ],
        v2Title: "⚙️ OEM Cross-Reference Matrix & Equivalent Spare Parts (v2.0)",
        v2Badge: "4 VERIFIED EQUIVALENTS",
        v2Items: [
          { head: "Original Part Number (OEM): CAT PUMPS 5CP2120W", status: "In Production • Immediate Delivery", body: "OEM Seal Kit: #33628 | OEM Valve Kit: #30821 | Crankcase Oil: ISO VG 68 (#6107)." },
          { head: "Direct Aftermarket Equivalents (Drop-In / Same 4 GPM @ 2500 PSI Range)", status: "100% Flow/Pressure Compatible", body: "• General Pump (Interpump): TS1511 / T1011 Series | • Annovi Reverberi (AR): RKA4G25N | • Comet: FW2 4025S." },
          { head: "Verified Industrial Distributors (Real-Time Search)", status: "Stock Confirmed in the USA", body: "• Grainger SKU: 2P223 / 5CP2120W | • Kleen-Rite Corp: CAT-5CP2120W | • McMaster-Carr (Viton/NBR seals and 316 SS springs)." }
        ]
      },

      completeMachine: {
        chip: "MODE: COMPLETE MACHINE",
        category: "HEAVY INDUSTRIAL RECYCLING & BALING MACHINERY",
        title: "Model 72 Closed End Baler Horizontal Hydraulic Baler",
        marketBadge: "● Active (Technical Support & Industrial Parts)",
        confidence: "AI Confidence: 98.4% • 3D Morphology + Horizontal Ram Architecture",
        forensicText:
          "Although the unit displays green paint wear from continuous operation in a fiber recycling plant, the MachId™ forensic engine cross-references the A36 structural steel frame, the horizontal ram cylinder stroke, the closed-end door with hydraulic latch, and the 5 tie slots for 72-inch mill-size bales.",
        specs: [
          { label: "Equipment Type", val: "Horizontal Closed-End Baler" },
          { label: "Model / Series", val: "Model 72 Closed End Baler" },
          { label: "Bale Size", val: "72 in × 30 in × 44 in (~1,200 lbs OCC)" },
          { label: "Ram Force", val: "~70,000 - 95,000 lbs (6-7 in Cylinder)" },
          { label: "Main Structure", val: "A36 Rolled Steel, Continuously Welded" },
          { label: "Standard Compliance", val: "ANSI Z245.5 / OSHA 1910" }
        ],
        slots: [
          { tag: "FRONT", role: "Chamber & Closed-End Door", hudNode: "[SHOT 1: CHAMBER & CLOSED-END DOOR]", hudMethod: "3D BALER MORPHOLOGY", bbox1Label: "Compaction Chamber + 5 Tie Slots", bbox2Label: "Operator Control & Emergency Stop" },
          { tag: "CHASSIS", role: "HPU & Drive Motor", hudNode: "[SHOT 2: CHASSIS & HYDRAULIC POWER]", hudMethod: "ELECTROMECHANICAL INSPECTION", bbox1Label: "A36 Frame + Main Ram Housing", bbox2Label: "High-Torque TEFC Electric Motor" },
          { tag: "OVERALL", role: "In-Feed Conveyor & Feed Area", hudNode: "[SHOT 3: OVERVIEW & IN-FEED]", hudMethod: "PROCESS LINE INTEGRATION", bbox1Label: "In-Feed Conveyor Ramp", bbox2Label: "Horizontal Baler & Discharge" }
        ],
        logs: [
          "[01] Discarding weathered green paint and fiber dust (Anti-Repaint Forensic Rule)...",
          "[02] Measuring kinematic proportions of horizontal frame and 72-inch compaction stroke...",
          "[03] Identifying closed-end discharge door with hydraulic latch cylinder and wire channels...",
          "[04] Verifying nominal hydraulic ratings and ANSI Z245.5 safety guidelines...",
          "[05] Complete Machine dossier generated successfully for Model 72 Closed End Baler."
        ],
        v2Title: "🛡️ Industrial Safety Diagnosis & Mechanical Maintenance (OSHA / ANSI Z245.5)",
        v2Badge: "ANSI Z245.5 / OSHA COMPLIANT",
        v2Items: [
          { head: "Lockout/Tagout Safety Procedure (OSHA 29 CFR 1910.147 — LOTO)", status: "Main Disconnect Visible on NEMA Panel", body: "Lockable power disconnect switch located on the side of the electrical cabinet. Mandatory LOTO padlock application required prior to clearing hopper jams or opening the door." },
          { head: "Hydraulic Latch Cylinder & Wire Slot Integrity", status: "Lubrication & Adjustment Recommended", body: "Check rod seals on the door latch cylinder, grease pivot pins, and clear wire/strap debris from the 5 horizontal tie channels." }
        ]
      },

      financialAudit: {
        chip: "MODE: CAPEX AUDIT (v2.0)",
        category: "TECHNICAL-FINANCIAL AUDIT & ASSET VALUATION (CAPEX / OPEX)",
        title: "CAPEX Audit Verdict — Model 72 Closed End Baler",
        marketBadge: "● Active Support (Overhaul Highly Profitable)",
        confidence: "AI Confidence: 97.4% • Industrial Valuation + Structural Steel Integrity",
        forensicText:
          "The v2.0 Financial Audit module assesses the condition of the A36 structural steel frame on the Model 72 Closed End Baler. Procuring a brand-new equivalent 72-inch horizontal baler with an in-feed conveyor requires ~$75,000 USD CAPEX, whereas a complete mechanical and hydraulic overhaul (re-sealing cylinders, replacing hydraulic pump, hoses, and panel components) costs ~$14,200 USD, delivering direct capital savings of 81% and adding 10-15 years of useful life.",
        specs: [
          { label: "Equipment / Model", val: "Model 72 Closed End Baler" },
          { label: "New Equipment CAPEX", val: "$68,000 - $85,000 USD" },
          { label: "Current Value (As-Is)", val: "$15,000 - $19,500 USD" },
          { label: "Estimated Overhaul Cost", val: "$13,500 - $15,800 USD" },
          { label: "Remaining Useful Life", val: "6 - 8 Years (+12 with Overhaul)" },
          { label: "Financial Verdict", val: "REFURBISH / OVERHAUL (ROI 4.8x)" }
        ],
        slots: [
          { tag: "APPRAISAL 1", role: "Chamber & Closed-End Door", hudNode: "[AUDIT: CHAMBER & CLOSED-END DOOR]", hudMethod: "A36 STRUCTURAL INTEGRITY", bbox1Label: "72 Closed-End Chamber: Salvageable A36 Frame", bbox2Label: "Hydraulic Latch Cylinder: Operational" },
          { tag: "APPRAISAL 2", role: "Hydraulic Power Unit & Panel", hudNode: "[AUDIT: HPU & NEMA ENCLOSURE]", hudMethod: "ELECTROMECHANICAL APPRAISAL", bbox1Label: "TEFC Motor & Hydraulic Tank", bbox2Label: "NEMA Panel: Proactive Contactor Refresh" },
          { tag: "APPRAISAL 3", role: "In-Feed Conveyor & Pit", hudNode: "[AUDIT: INFEED INFRASTRUCTURE]", hudMethod: "LINE RESIDUAL VALUE", bbox1Label: "In-Feed Conveyor: Remaining Life >10 yrs", bbox2Label: "Feed Pit: Solid Concrete Bed" }
        ],
        logs: [
          "[01] Linking industrial asset class: Horizontal Closed End Baler Model 72 in recycling facility...",
          "[02] Querying U.S. industrial machinery database for 72-inch closed-end horizontal balers...",
          "[03] Calculating accumulated depreciation and residual value of heavy A36 beam frame...",
          "[04] Comparing full replacement CAPEX ($75,000 USD) vs. electromechanical overhaul ($14,200 USD)...",
          "[05] CAPEX verdict completed: OVERHAUL RECOMMENDED (net capital savings ~$60,800 USD)."
        ],
        v2Title: "📊 Financial Audit Verdict & CAPEX Recommendation (FinancialAuditInfo v2.0)",
        v2Badge: "VERDICT: OVERHAUL / REFURBISH",
        v2Items: [
          { head: "CAPEX Comparison: New Replacement ($75,000 USD) vs. Comprehensive Overhaul ($14,200 USD)", status: "Direct Capital Savings: 81%", body: "The heavy rolled A36 steel channel and beam chassis shows no plastic fatigue or mainframe cracking. A full replacement is financially unviable compared to an overhaul." },
          { head: "Recommended Overhaul Scope ($14,200 USD Estimated)", status: "Useful Life Extension: +12 to 15 Years", body: "1) Re-pack polyurethane seals on main ram and door latch cylinders, 2) complete flush and refill of ISO VG 46 hydraulic oil + suction/return filters, 3) replace high-pressure SAE 100R2 hoses, 4) update motor starter contactors and overload relays in NEMA cabinet, 5) sandblast and recoat with industrial anticorrosive epoxy." }
        ]
      }
    },

    /* ===================================================== FR ===================================================== */
    fr: {
      distributedSystem: {
        chip: "MODE : MULTI-NŒUDS (v2.0)",
        category: "SYSTÈME DE COMPACTAGE INDUSTRIEL DISTRIBUÉ AVEC CONVOYEUR D'ALIMENTATION",
        title: "Compacteur / Presse Horizontale Model 72 Closed End Baler",
        marketBadge: "● Actif (Support Standard ANSI et Pièces Industrielles)",
        confidence: "Confiance IA : 98.6 % • Inférence Morphologique Multi-Nœuds + Cinématique de Presse Horizontale",
        forensicText:
          "Règle Forensique appliquée : la peinture verte industrielle refaite sur site et les accumulations de rognures de papier sont ignorées. L'IA corrèle 3 nœuds physiques connectés : (1) rampe métallique d'alimentation continue par convoyeur depuis la fosse de déchargement, (2) chambre de compactage horizontale renforcée avec porte d'extrémité fermée (Closed-End Door), verrouillage par vérin hydraulique et 5 fentes horizontales de passage de fil d'attache, et (3) groupe hydraulique déporté sur châssis avec moteur électrique TEFC triphasé à fort couple, réservoir de fluide et coffret électrique NEMA avec pupitre de commande. Identification positive : Presse horizontale Closed-End Baler Model 72 pour balles standard mill-size de 72 pouces.",
        specs: [
          { label: "Type d'Équipement", val: "Presse Horizontale à Extrémité Fermée" },
          { label: "Modèle / Config", val: "Model 72 Closed End Baler" },
          { label: "Dimensions de Balle", val: "72 in × 30 in × 44 in (Mill-Size)" },
          { label: "Moteur / Hydraulique", val: "20 - 30 HP TEFC • 230/460V 3Ph (60 Hz)" },
          { label: "Vérin / Pression", val: "Vérin 6-7 in • 2 500 - 3 000 PSI" },
          { label: "Système de Charge", val: "Convoyeur Incliné In-Feed + Trémie" }
        ],
        slots: [
          { tag: "NŒUD 1", role: "Rampe In-Feed et Fosse", hudNode: "[NŒUD 1 : CONVOYEUR ET FOSSE DE CHARGE]", hudMethod: "CINÉMATIQUE DE TRANSPORT 3D", bbox1Label: "Convoyeur Métallique In-Feed", bbox2Label: "Presse Horizontale et Section Closed-End" },
          { tag: "NŒUD 2", role: "Chambre et Porte Closed-End", hudNode: "[NŒUD 2 : CHAMBRE ET PORTE CLOSED-END]", hudMethod: "GÉOMÉTRIE STRUCTURELLE DE PRESSE", bbox1Label: "Chambre de Compression + Fentes de Ligature", bbox2Label: "Vérin Hydraulique de Verrouillage" },
          { tag: "NŒUD 3", role: "Groupe Hydraulique et NEMA", hudNode: "[NŒUD 3 : GROUPE HYDRAULIQUE ET NEMA]", hudMethod: "TOPOLOGIE ÉLECTROMÉCANIQUE", bbox1Label: "Moteur Électrique TEFC + Pompe Hydraulique", bbox2Label: "Armoire Électrique NEMA Puissance & Commande" }
        ],
        logs: [
          "[01] Traitement de 3 photographies étiquetées [NŒUD 1 : Convoyeur], [NŒUD 2 : Chambre] et [NŒUD 3 : HPU]...",
          "[02] Application de la Règle Forensique : peinture verte et résidus de papier ignorés ; isolation de la géométrie 3D...",
          "[03] Corrélation du flux continu : Fosse de charge → Convoyeur In-Feed → Trémie supérieure → Vérin horizontal...",
          "[04] Vérification de la porte fermée (Closed-End) de 72 pouces avec verrou hydraulique et fentes de ligature...",
          "[05] Topologie Multi-Nœuds consolidée et adaptateur FieldOps Gen Pro™ généré pour Model 72 Closed End Baler."
        ],
        v2Title: "🔗 Détail de la Topologie Multi-Nœuds (DistributedNodeAnalysis v2.0)",
        v2Badge: "3 NŒUDS CONNECTÉS",
        v2Items: [
          { head: "NŒUD 1 — Rampe de Convoyeur In-Feed et Fosse Béton", status: "Opérationnel • Vérifier la Tension de Bande et Rouleaux", body: "Convoyeur incliné à tablier métallique élevant les chutes de papier et carton vers la trémie d'alimentation. Châssis et guides latéraux en bon état opérationnel sans flèche structurelle." },
          { head: "NŒUD 2 — Chambre de Compactage et Porte Fermée (Closed-End)", status: "Attention • Usure Mécanique Normale et Nettoyage", body: "Chambre de compression avec longerons de renfort et 5 rainures pour fil de ligature calibre 13-14. Porte d'extrémité fermée manœuvrée par un vérin de verrouillage hydraulique ; graissage des charnières requis." },
          { head: "NŒUD 3 — Groupe Hydraulique (HPU), Moteur TEFC et Armoire NEMA", status: "Identification Positive • Spécification Lourde", body: "Moteur triphasé haute performance monté sur réservoir d'huile grande capacité. Armoire électrique NEMA avec contacteurs industriels, relais thermiques et poste de boutons-poussoirs." }
        ]
      },

      componentOrPart: {
        chip: "MODE : CROSS-REF OEM (v2.0)",
        category: "POMPE TRIPLEX À PISTONS CÉRAMIQUES HAUTE PRESSION",
        title: "Cat Pumps 5CP2120W — Pompe Triplex à Pistons",
        marketBadge: "● Actif (Large Support OEM et Aftermarket)",
        confidence: "Confiance IA : 98.9 % • OCR Plaque + Géométrie de la Tête",
        forensicText:
          "Lecture hybride de la plaque métallique et de la morphologie de la tête en laiton forgé chromé avec carter en aluminium anodisé bleu. MachId™ v2.0 extrait automatiquement la référence OEM (5CP2120W) et génère la matrice d'équivalences Aftermarket pour les joints, clapets, ressorts de rappel et pompes complètes de remplacement.",
        specs: [
          { label: "Débit Nominal", val: "4,0 GPM (15,0 L/min)" },
          { label: "Pression Maximale", val: "2 500 PSI (172 bar)" },
          { label: "Vitesse Nominale", val: "950 tr/min (Arbre Plein 20 mm)" },
          { label: "Orifices Aspiration/Refoulement", val: "1/2 in NPTF / 3/8 in NPTF" },
          { label: "Matériau de la Tête", val: "Laiton Forgé (Nickelé)" },
          { label: "Kit Joints / Clapets", val: "PN 33628 / PN 30821" }
        ],
        slots: [
          { tag: "COMPOSANT", role: "Pompe Cat Pumps 5CP2120W", hudNode: "[COMPOSANT : CAT PUMPS 5CP2120W]", hudMethod: "OCR + CROSS-RÉFÉRENCE OEM", bbox1Label: "Tête Triplex Laiton + Carter 5CP2120W", bbox2Label: "Plaque OEM : 5CP2120W • 2500 PSI" },
          { tag: "SOUS-PIÈCE", role: "Ressort de Rappel / Clapet", hudNode: "[SOUS-PIÈCE : RESSORT HÉLICOÏDAL INOX]", hudMethod: "MORPHOLOGIE DE L'ÉLÉMENT", bbox1Label: "Ressort de Compression Inox 316", bbox2Label: "Pas constant • Extrémités rectifiées" },
          { tag: "PLAQUE OEM", role: "Plaque et Données Gravées", hudNode: "[CONTEXTE : MÉTROLOGIE DE PLAQUE]", hudMethod: "OCR INDUSTRIEL INTÉGRÉ", bbox1Label: "OCR : Fabricant et Modèle Constructeur", bbox2Label: "Données Électriques et Série Vérifiées" }
        ],
        logs: [
          "[01] Analyse de la géométrie du composant et de la plaque gravée...",
          "[02] OCR positif : fabricant CAT PUMPS — modèle exact 5CP2120W (4,0 GPM @ 2500 PSI)...",
          "[03] Consultation des catalogues de pièces et kits de réparation avec Google Search Grounding...",
          "[04] Génération du tableau d'équivalences OEM et Aftermarket (General Pump, AR, Grainger)...",
          "[05] Fiche de pièce de rechange v2.0 prête pour la demande d'achat ou l'inventaire du véhicule."
        ],
        v2Title: "⚙️ Matrice de Cross-Référence OEM et Pièces Équivalentes (v2.0)",
        v2Badge: "4 ÉQUIVALENCES VÉRIFIÉES",
        v2Items: [
          { head: "Référence d'Origine (OEM) : CAT PUMPS 5CP2120W", status: "En Production • Livraison Immédiate", body: "Kit Joints OEM : #33628 | Kit Clapets OEM : #30821 | Huile de Carter : ISO VG 68 (#6107)." },
          { head: "Équivalents Directs Aftermarket (Drop-In / Même Plage 4 GPM @ 2500 PSI)", status: "100 % Compatibles en Débit/Pression", body: "• General Pump (Interpump) : Série TS1511 / T1011 | • Annovi Reverberi (AR) : RKA4G25N | • Comet : FW2 4025S." },
          { head: "Distributeurs Industriels Vérifiés (Recherche en Temps Réel)", status: "Stock Confirmé aux États-Unis", body: "• Grainger SKU : 2P223 / 5CP2120W | • Kleen-Rite Corp : CAT-5CP2120W | • McMaster-Carr (joints Viton/NBR et ressorts inox 316)." }
        ]
      },

      completeMachine: {
        chip: "MODE : MACHINE COMPLÈTE",
        category: "MACHINES LOURDES DE RECYCLAGE ET DE MISE EN BALLES",
        title: "Presse / Compacteur Horizontal Model 72 Closed End Baler",
        marketBadge: "● Actif (Support Technique et Pièces Industrielles)",
        confidence: "Confiance IA : 98.4 % • Morphologie 3D + Architecture de Vérin Horizontal",
        forensicText:
          "Bien que l'unité présente une usure de la peinture verte suite à un fonctionnement continu en usine de recyclage, le moteur forensique de MachId™ corrèle le châssis en profilés d'acier laminé A36, la course du vérin horizontal, la porte fermée avec verrou hydraulique et les 5 fentes de passage de fil pour balles de 72 pouces.",
        specs: [
          { label: "Type d'Équipement", val: "Presse Horizontale Closed-End" },
          { label: "Modèle / Série", val: "Model 72 Closed End Baler" },
          { label: "Taille de Balle", val: "72 in × 30 in × 44 in (~1 200 lbs OCC)" },
          { label: "Force de Poussée", val: "~70 000 - 95 000 lbs (Vérin 6-7 in)" },
          { label: "Structure Principale", val: "Acier Laminé A36, Soudure Continue" },
          { label: "Conformité Normes", val: "ANSI Z245.5 / OSHA 1910" }
        ],
        slots: [
          { tag: "FACE AVANT", role: "Chambre et Porte Closed-End", hudNode: "[PRISE 1 : CHAMBRE ET PORTE CLOSED-END]", hudMethod: "MORPHOLOGIE 3D DE PRESSE", bbox1Label: "Chambre de Compression + 5 Fentes de Ligature", bbox2Label: "Pupitre de Commande et Arrêt d'Urgence" },
          { tag: "CHÂSSIS", role: "Groupe Hydraulique et Moteur", hudNode: "[PRISE 2 : CHÂSSIS ET PUISSANCE HYDRAULIQUE]", hudMethod: "INSPECTION ÉLECTROMÉCANIQUE", bbox1Label: "Châssis A36 + Logement de Vérin", bbox2Label: "Moteur Électrique TEFC à Fort Couple" },
          { tag: "ENSEMBLE", role: "Convoyeur In-Feed et Chargement", hudNode: "[PRISE 3 : VUE D'ENSEMBLE DU SYSTÈME]", hudMethod: "INTÉGRATION DE LIGNE INDUSTRIELLE", bbox1Label: "Rampe Inclinée de Convoyeur", bbox2Label: "Presse Horizontale et Éjection" }
        ],
        logs: [
          "[01] Rejet de la peinture verte vieillie et de la poussière cellulosique (Règle Forensique Anti-Repeinture)...",
          "[02] Mesure des proportions cinématiques du châssis horizontal et de la course de 72 pouces...",
          "[03] Détection de la porte frontale d'extrémité fermée (Closed-End) avec vérin hydraulique et fentes de guidage...",
          "[04] Vérification des spécifications hydrauliques et de conformité aux normes ANSI Z245.5...",
          "[05] Dossier Machine Complète généré avec succès pour Model 72 Closed End Baler."
        ],
        v2Title: "🛡️ Diagnostic de Sécurité Industrielle et Maintenance Mécanique (OSHA / ANSI Z245.5)",
        v2Badge: "CONFORMITÉ ANSI Z245.5 / OSHA",
        v2Items: [
          { head: "Procédure de Consignation LOTO (OSHA 29 CFR 1910.147)", status: "Sectionneur Principal Visible sur Armoire NEMA", body: "Interrupteur de coupure cadenassable situé sur le côté du coffret électrique. Pose obligatoire du cadenas LOTO avant d'accéder à la trémie ou d'intervenir sur la porte de balle." },
          { head: "Intégrité du Vérin de Verrouillage et Fentes de Ligature", status: "Graissage et Réglage Recommandés", body: "Contrôler l'étanchéité des joints du vérin de porte, graisser les axes de rotation et éliminer les débris de feuillard dans les 5 canaux horizontaux d'éjection." }
        ]
      },

      financialAudit: {
        chip: "MODE : AUDIT CAPEX (v2.0)",
        category: "AUDIT TECHNICO-FINANCIER ET ÉVALUATION D'ACTIFS (CAPEX / OPEX)",
        title: "Avis d'Audit CAPEX — Model 72 Closed End Baler",
        marketBadge: "● Support Actif (Remise à Neuf Fortement Rentable)",
        confidence: "Confiance IA : 97.4 % • Évaluation Industrielle + Intégrité Structurale A36",
        forensicText:
          "Le module d'Audit Financier v2.0 évalue l'intégrité du châssis en acier structural A36 de la presse horizontale Model 72 Closed End Baler. L'acquisition d'un équipement neuf équivalent avec convoyeur représente un CAPEX de ~75 000 USD, tandis qu'une révision électromécanique et hydraulique intégrale (remplacement des joints de vérins, pompe, flexibles et appareillage) s'élève à ~14 200 USD, réalisant 81 % d'économie directe de capital et ajoutant 10 à 15 ans de vie utile.",
        specs: [
          { label: "Type / Modèle", val: "Model 72 Closed End Baler" },
          { label: "CAPEX Équipement Neuf", val: "68 000 - 85 000 USD" },
          { label: "Valeur Actuelle (En l'État)", val: "15 000 - 19 500 USD" },
          { label: "Coût Estimé de la Révision", val: "13 500 - 15 800 USD" },
          { label: "Durée de Vie Restante", val: "6 - 8 Ans (+12 avec Révision)" },
          { label: "Verdict Financier", val: "RÉVISION / OVERHAUL (ROI 4,8x)" }
        ],
        slots: [
          { tag: "ÉVALUATION 1", role: "Chambre et Porte Closed-End", hudNode: "[AUDIT : CHAMBRE ET PORTE CLOSED-END]", hudMethod: "INTÉGRITÉ STRUCTURALE A36", bbox1Label: "Chambre Closed-End 72 : Structure A36 Récupérable", bbox2Label: "Vérin de Verrouillage Opérationnel" },
          { tag: "ÉVALUATION 2", role: "Groupe Hydraulique et NEMA", hudNode: "[AUDIT : GROUPE HYDRAULIQUE ET NEMA]", hudMethod: "ÉVALUATION ÉLECTROMÉCANIQUE", bbox1Label: "Moteur TEFC et Réservoir Hydraulique", bbox2Label: "Armoire NEMA : Remplacement Préventif Contacteurs" },
          { tag: "ÉVALUATION 3", role: "Convoyeur In-Feed et Fosse", hudNode: "[AUDIT : INFRASTRUCTURE D'ALIMENTATION]", hudMethod: "VALEUR RÉSIDUELLE DE LIGNE", bbox1Label: "Convoyeur In-Feed : Durée Restante > 10 ans", bbox2Label: "Fosse de Charge : Béton Intègre" }
        ],
        logs: [
          "[01] Liaison de la typologie d'actif industriel : Horizontal Closed End Baler Model 72 en centre de recyclage...",
          "[02] Consultation de la base de prix de machines industrielles aux États-Unis pour presses horizontales de 72 pouces...",
          "[03] Calcul de l'amortissement comptable cumulé et de la valeur résiduelle du châssis en profilés d'acier A36...",
          "[04] Comparaison du CAPEX de remplacement total (75 000 USD) vs. révision électromécanique et hydraulique (14 200 USD)...",
          "[05] Avis CAPEX terminé : RECOMMANDATION DE REMISE À NEUF (gain net en capital ~60 800 USD)."
        ],
        v2Title: "📊 Avis d'Audit Financier et Recommandation CAPEX (FinancialAuditInfo v2.0)",
        v2Badge: "VERDICT : RÉVISION / REMISE À NEUF",
        v2Items: [
          { head: "Comparatif CAPEX : Remplacement Neuf (75 000 USD) vs. Révision Complète (14 200 USD)", status: "Économie Directe de Capital : 81 %", body: "Le châssis lourd en poutrelles d'acier laminé A36 ne présente aucune fissure ni déformation plastique. Un remplacement complet par une machine neuve n'est pas justifié financièrement." },
          { head: "Périmètre Recommandé de la Révision (14 200 USD Estimés)", status: "Prolongation de la Durée de Vie : +12 à 15 Ans", body: "1) Remplacement des joints polyuréthane du vérin principal et du vérin de porte, 2) vidange complète de l'huile hydraulique ISO VG 46 et filtres d'aspiration/retour, 3) remplacement des flexibles haute pression SAE 100R2, 4) rénovation des contacteurs et relais thermiques dans l'armoire NEMA, 5) décapage mécanique par sablage et application de peinture époxy anticorrosion." }
        ]
      }
    }
  };

  window.MACHID_BASE = MACHID_BASE;
  window.MACHID_TEXT = MACHID_TEXT;
})();
