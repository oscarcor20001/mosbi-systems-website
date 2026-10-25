/* MachId™ demo — language-independent geometry + fully localized mode content (ES / EN / FR) */
(function () {
  "use strict";

  // Language-independent data: images, bounding boxes and style classes.
  const MACHID_BASE = {
    distributedSystem: {
      marketClass: "market-active",
      slots: [
        {
          img: "./assets/compactor_chute_1.jpg",
          bbox1: { top: "8%", left: "28%", width: "44%", height: "24%" },
          bbox2: { top: "33%", left: "26%", width: "46%", height: "54%" }
        },
        {
          img: "./assets/compactor_chute_2.jpg",
          bbox1: { top: "27%", left: "31%", width: "43%", height: "45%" },
          bbox2: { top: "42%", left: "16%", width: "31%", height: "26%" }
        },
        {
          img: "./assets/compactor_chute_3.jpg",
          bbox1: { top: "11%", left: "31%", width: "58%", height: "23%" },
          bbox2: { top: "34%", left: "31%", width: "58%", height: "15%" }
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
          img: "./assets/compactor_chute_3.jpg",
          bbox1: { top: "11%", left: "31%", width: "58%", height: "23%" },
          bbox2: { top: "34%", left: "31%", width: "58%", height: "15%" }
        }
      ]
    },
    completeMachine: {
      marketClass: "market-active",
      slots: [
        {
          img: "./assets/compactor_chute_2.jpg",
          bbox1: { top: "26%", left: "30%", width: "44%", height: "46%" },
          bbox2: { top: "55%", left: "43%", width: "16%", height: "16%" }
        },
        {
          img: "./assets/compactor_chute_1.jpg",
          bbox1: { top: "33%", left: "34%", width: "10%", height: "8%" },
          bbox2: { top: "28%", left: "26%", width: "48%", height: "58%" }
        },
        {
          img: "./assets/compactor_chute_3.jpg",
          bbox1: { top: "11%", left: "31%", width: "58%", height: "23%" },
          bbox2: { top: "34%", left: "31%", width: "58%", height: "15%" }
        }
      ]
    },
    financialAudit: {
      marketClass: "market-active",
      slots: [
        {
          img: "./assets/compactor_chute_3.jpg",
          bbox1: { top: "11%", left: "31%", width: "58%", height: "23%" },
          bbox2: { top: "34%", left: "31%", width: "58%", height: "15%" }
        },
        {
          img: "./assets/compactor_chute_1.jpg",
          bbox1: { top: "8%", left: "28%", width: "44%", height: "24%" },
          bbox2: { top: "48%", left: "26%", width: "46%", height: "40%" }
        },
        {
          img: "./assets/compactor_chute_2.jpg",
          bbox1: { top: "42%", left: "16%", width: "31%", height: "26%" },
          bbox2: { top: "56%", left: "43%", width: "16%", height: "16%" }
        }
      ]
    }
  };

  const MACHID_TEXT = {
    /* ===================================================== ES ===================================================== */
    es: {
      distributedSystem: {
        chip: "MODO: MULTI-NODO (v2.0)",
        category: "SISTEMA DISTRIBUIDO DE COMPACTACIÓN CON CHUTE VERTICAL MULTI-PISO",
        title: "Compactador Hidráulico Chute-Fed Precision Machinery Systems Auto-Pak 1830-4000",
        marketBadge: "● Activa (Soporte OEM y Repuestos Estándar ANSI)",
        confidence: "Confianza IA: 98.7% • OCR de Placa Metal + Correlación Multi-Nodo 3D",
        forensicText:
          "Regla Forense aplicada: se descarta el color naranja repintado en campo. La IA correlaciona 3 nodos físicos conectados: (1) ducto vertical de chute con compuerta cortafuego fusible a 165°F (NFPA 82), (2) tolva receptora acampanada y cámara de prensado horizontal con tensor de trinquete lateral y contenedor rodante de 2 yd³, y (3) placa metálica OEM remachada al chasis. El OCR industrial extrae con 99.4% de precisión: Fabricante Precision Machinery Systems (York, PA), Modelo Auto-Pak 1830-4000, Serie 871344-015 y motor trifásico de 2 HP a 208V.",
        specs: [
          { label: "Fabricante OEM", val: "Precision Machinery Systems (York, PA)" },
          { label: "Modelo / Serie", val: "Auto-Pak 1830-4000 • S/N 871344-015" },
          { label: "Motor Eléctrico", val: "2.0 HP • 208V 3F 7.1A (60 Hz)" },
          { label: "Capacidad Cámara", val: "0.52 yd³ (Ciclo Automático)" },
          { label: "Normativa Aplicable", val: "ANSI Z245.2 / NFPA 82" },
          { label: "Contenedor Acoplado", val: "2.0 yd³ Carga Frontal/Trasera" }
        ],
        slots: [
          { tag: "NODO 1", role: "Descarga Chute y Tolva", hudNode: "[NODO 1: CHUTE Y COMPUERTA NFPA 82]", hudMethod: "SILUETA 3D + MULTI-NODO", bbox1Label: "Ducto Chute + Compuerta Cortafuego", bbox2Label: "Tolva Receptora + Tensor Lateral" },
          { tag: "NODO 2", role: "Cámara y Contenedor 2 yd³", hudNode: "[NODO 2: CÁMARA Y CONTENEDOR]", hudMethod: "GEOMETRÍA ESTRUCTURAL", bbox1Label: "Cámara Compactadora + Tolva Naranja", bbox2Label: "Contenedor Rodante Verde 2 yd³" },
          { tag: "NODO 3", role: "Placa OEM y Datos Eléctricos", hudNode: "[NODO 3: PLACA FABRICANTE AUTO-PAK]", hudMethod: "OCR DIRECTO + GROUNDING OEM", bbox1Label: "OCR: PRECISION MACHINERY • AUTO-PAK 1830-4000", bbox2Label: "Serial: 871344-015 • 208V / 3F / 7.1A / 2 HP" }
        ],
        logs: [
          "[01] Procesando 3 fotografías con etiquetas [NODO 1], [NODO 2] y [NODO 3]...",
          "[02] Aplicando Regla Forense: ignorando pintura naranja/verde; aislando geometría 3D...",
          "[03] Detectada transición vertical Chute → Compuerta Cortafuego (NFPA 82) → Tolva...",
          "[04] OCR industrial sobre placa metálica confirma Precision Machinery Systems (York, PA), Auto-Pak 1830-4000...",
          "[05] Topología Multi-Nodo consolidada y adaptador FieldOps Gen Pro™ generado."
        ],
        v2Title: "🔗 Desglose de Topología Multi-Nodo (DistributedNodeAnalysis v2.0)",
        v2Badge: "3 NODOS CONECTADOS",
        v2Items: [
          { head: "NODO 1 — Cabezal de Descarga de Chute y Compuerta Cortafuego", status: "Operativo • Verificar Eslabón Fusible", body: "Ducto cilíndrico superior aislado conectado a guillotina cortafuego inclinada con contrapeso. Conectividad hacia Nodo 2 mediante brida superior de tolva." },
          { head: "NODO 2 — Tolva de Transición, Cámara de Prensado y Contenedor", status: "Atención • Desgaste Cosmético y Sellos", body: "Cámara de compactación estacionaria anclada al piso con tensor de trinquete amarillo acoplado a contenedor verde de 2 yd³. Presenta abrasión superficial sin deformación estructural." },
          { head: "NODO 3 — Placa Metálica OEM Precision Machinery Systems Auto-Pak", status: "Identificación Positiva • S/N 871344-015", body: "Placa remachada confirma fabricante Precision Machinery Systems (York, PA, Tel 717-846-6800), modelo Auto-Pak 1830-4000, serie 871344-015, alimentación 208V trifásica, 7.1A, motor de 2 HP a 60 Hz." }
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
        category: "MAQUINARIA DE MANEJO Y COMPACTACIÓN DE RESIDUOS SÓLIDOS",
        title: "Compactador Estacionario Precision Machinery Systems Auto-Pak 1830-4000",
        marketBadge: "● Activa (Soporte Oficial y Repuestos)",
        confidence: "Confianza IA: 98.2% • OCR Placa + Silueta Morfológica 3D",
        forensicText:
          "Aunque la unidad presenta desgaste de pintura naranja en la cámara frontal y fatiga superficial por uso continuo, el motor forense de MachId™ combina la lectura directa de placa OEM (Auto-Pak 1830-4000) con la arquitectura del bastidor en U de acero laminado, tolva receptora trapezoidal y mecanismo de trinquete lateral hacia el contenedor.",
        specs: [
          { label: "Fabricante OEM", val: "Precision Machinery Systems (York, PA)" },
          { label: "Modelo / Serie", val: "Auto-Pak 1830-4000 • S/N 871344-015" },
          { label: "Motor Eléctrico", val: "2.0 HP • 208V Trifásico (60 Hz, 7.1A)" },
          { label: "Tipo de Equipo", val: "Compactador Estacionario Chute-Fed" },
          { label: "Estructura Principal", val: "Acero A36 Soldadura Continua" },
          { label: "Año Estimado Fab.", val: "Placa OEM Verificada" }
        ],
        slots: [
          { tag: "VISTA 3D", role: "Perspectiva Diagonal 3D", hudNode: "[TOMA 1: SILUETA 3D COMPLETA]", hudMethod: "MORFOLOGÍA 3D PURA", bbox1Label: "Cuerpo Principal + Tolva Trapezoidal", bbox2Label: "Tensor de Acoplamiento de Alta Carga" },
          { tag: "FRONTAL", role: "Frente y Señalización OSHA", hudNode: "[TOMA 2: FRENTE Y ETIQUETAS ANSI]", hudMethod: "OCR DE SEGURIDAD OSHA", bbox1Label: "Rótulo DANGER • Riesgo de Aplastamiento", bbox2Label: "Bastidor Frontal + Compuerta Lateral" },
          { tag: "PLACA OEM", role: "Placa Precision Auto-Pak", hudNode: "[TOMA 3: PLACA FABRICANTE AUTO-PAK]", hudMethod: "OCR METÁLICO INDUSTRIAL", bbox1Label: "OCR: Precision Machinery Systems • 1830-4000", bbox2Label: "Serial: 871344-015 • 208V 3F 2 HP" }
        ],
        logs: [
          "[01] Descartando color de pintura superficial (Regla Forense Anti-Repintado)...",
          "[02] Midiendo proporciones geométricas de tolva, cámara y contenedor acoplado...",
          "[03] OCR positivo sobre placa del fabricante: Precision Machinery Systems Auto-Pak 1830-4000...",
          "[04] Verificando especificaciones nominales de placa (208V, 3F, 7.1A, 2 HP)...",
          "[05] Expediente de Máquina Completa generado con éxito."
        ],
        v2Title: "🛡️ Diagnóstico de Seguridad Industrial y Mantenimiento Preventivo",
        v2Badge: "CUMPLIMIENTO OSHA / ANSI",
        v2Items: [
          { head: "Seguridad de Bloqueo y Etiquetado (OSHA 29 CFR 1910.147 — LOTO)", status: "Desconectador Visible en Pared", body: "Se verifica caja de desconexión eléctrica metálica en el muro para aplicar candado LOTO antes de intervenir la cámara o el chute." },
          { head: "Integridad Mecánica y Sellado Perimetral", status: "Requiere Limpieza y Ajuste", body: "Se recomienda reemplazo del empaque inferior de la puerta de acceso y verificación de torque en los pernos de anclaje al piso de concreto." }
        ]
      },

      financialAudit: {
        chip: "MODO: AUDITORÍA CAPEX (v2.0)",
        category: "AUDITORÍA TÉCNICO-FINANCIERA Y VALORACIÓN DE ACTIVOS (CAPEX / OPEX)",
        title: "Dictamen CAPEX — Precision Auto-Pak 1830-4000 Chute-Fed",
        marketBadge: "● Soporte Activo (Overhaul Viable)",
        confidence: "Confianza IA: 96.8% • OCR Placa + Tasación de Mercado",
        forensicText:
          "El módulo de Auditoría Financiera v2.0 vincula la placa OEM verificada (Precision Machinery Systems Auto-Pak 1830-4000, Serie 871344-015) con el historial de durabilidad de chasis A36. El costo de reemplazo CAPEX nuevo asciende a ~$21,000 USD, mientras que un reacondicionamiento (overhaul) de componentes de desgaste cuesta ~$4,200 USD, logrando un ahorro del 76%.",
        specs: [
          { label: "Fabricante / Modelo", val: "Precision Auto-Pak 1830-4000" },
          { label: "CAPEX Equipo Nuevo", val: "$18,500 - $24,000 USD" },
          { label: "Valor Actual (As-Is)", val: "$5,800 - $7,200 USD" },
          { label: "Costo Estimado Overhaul", val: "$4,200 - $5,600 USD" },
          { label: "Vida Útil Remanente", val: "4 - 6 Años (+8 con Overhaul)" },
          { label: "Veredicto Financiero", val: "REPARAR / OVERHAUL (ROI 3.4x)" }
        ],
        slots: [
          { tag: "TASACIÓN 1", role: "Placa y Chasis Auto-Pak", hudNode: "[AUDITORÍA: PLACA Y CHASIS AUTO-PAK]", hudMethod: "TASACIÓN OEM Y EDAD", bbox1Label: "Precision Auto-Pak 1830-4000 (York, PA)", bbox2Label: "Serial 871344-015 • Chasis A36 Recuperable" },
          { tag: "TASACIÓN 2", role: "Infraestructura Fija de Chute", hudNode: "[AUDITORÍA: DUCTO Y COMPUERTA]", hudMethod: "EVALUACIÓN VIDA ÚTIL", bbox1Label: "Chute y Compuerta: Vida Remanente >10 años", bbox2Label: "Cámara: Requiere Sandblasting + Epóxico" },
          { tag: "TASACIÓN 3", role: "Contenedor Rodante Acoplado", hudNode: "[AUDITORÍA: CONTENEDOR 2 YD³]", hudMethod: "VALOR RESIDUAL", bbox1Label: "Contenedor 2 yd³: Buen Estado Operativo", bbox2Label: "Tensor Mecánico: Operativo" }
        ],
        logs: [
          "[01] Vinculando placa de fabricante Precision Machinery Systems Auto-Pak 1830-4000...",
          "[02] Consultando base de datos de precios en EE. UU. para compactadores chute-fed 0.5 yd³...",
          "[03] Calculando depreciación acumulada (68%) y vida útil remanente estimada (4-6 años)...",
          "[04] Comparando CAPEX de reemplazo total ($21,000) vs. overhaul hidráulico/eléctrico ($4,900)...",
          "[05] Dictamen CAPEX completado: RECOMENDACIÓN DE OVERHAUL (ahorro neto ~$16,100 USD)."
        ],
        v2Title: "📊 Dictamen de Auditoría Financiera y Recomendación CAPEX (FinancialAuditInfo v2.0)",
        v2Badge: "VEREDICTO: OVERHAUL / REACONDICIONAR",
        v2Items: [
          { head: "Comparativa CAPEX Reemplazo ($21,000 USD) vs. Overhaul Integral ($4,900 USD)", status: "Ahorro Directo de Capital: 76%", body: "El bastidor estructural Precision Auto-Pak y el chute vertical tienen más de 10 años de vida remanente. No se justifica el desembolso CAPEX de reemplazo completo." },
          { head: "Alcance Recomendado del Overhaul ($4,900 USD Estimado)", status: "Extensión de Vida Útil: +8 Años", body: "1) Reempaque de cilindro hidráulico y cambio de aceite AW-46 + filtro, 2) reemplazo de 2 mangueras SAE 100R2, 3) actualización de contactores y relé térmico, 4) limpieza mecánica y recubrimiento epóxico anticorrosivo." }
        ]
      }
    },

    /* ===================================================== EN ===================================================== */
    en: {
      distributedSystem: {
        chip: "MODE: MULTI-NODE (v2.0)",
        category: "DISTRIBUTED COMPACTION SYSTEM WITH MULTI-FLOOR VERTICAL CHUTE",
        title: "Precision Machinery Systems Auto-Pak 1830-4000 Chute-Fed Compactor",
        marketBadge: "● Active (OEM Support & Standard ANSI Spare Parts)",
        confidence: "AI Confidence: 98.7% • Metal Nameplate OCR + 3D Multi-Node Correlation",
        forensicText:
          "Forensic Rule applied: orange field repaint is discarded. The AI correlates 3 connected physical nodes: (1) vertical gravity-drop chute duct with a 165°F fusible fire damper (NFPA 82), (2) flared transition hopper and horizontal compaction chamber with side ratchet latch and 2 yd³ rolling container, and (3) stamped OEM metal nameplate riveted to the chassis. Industrial OCR extracts with 99.4% precision: Manufacturer Precision Machinery Systems (York, PA), Model Auto-Pak 1830-4000, Serial 871344-015, and a 2 HP 208V 3-phase powertrain.",
        specs: [
          { label: "OEM Manufacturer", val: "Precision Machinery Systems (York, PA)" },
          { label: "Model / Serial", val: "Auto-Pak 1830-4000 • S/N 871344-015" },
          { label: "Electric Motor", val: "2.0 HP • 208V 3Ph 7.1A (60 Hz)" },
          { label: "Chamber Capacity", val: "0.52 yd³ (Automatic Cycle)" },
          { label: "Applicable Standards", val: "ANSI Z245.2 / NFPA 82" },
          { label: "Attached Container", val: "2.0 yd³ Front/Rear Load" }
        ],
        slots: [
          { tag: "NODE 1", role: "Chute Discharge & Hopper", hudNode: "[NODE 1: CHUTE & NFPA 82 DAMPER]", hudMethod: "3D SILHOUETTE + MULTI-NODE", bbox1Label: "Chute Duct + Fire Damper", bbox2Label: "Receiving Hopper + Side Latch" },
          { tag: "NODE 2", role: "Chamber & 2 yd³ Container", hudNode: "[NODE 2: CHAMBER & CONTAINER]", hudMethod: "STRUCTURAL GEOMETRY", bbox1Label: "Compaction Chamber + Orange Hopper", bbox2Label: "Green Rolling Container 2 yd³" },
          { tag: "NODE 3", role: "OEM Nameplate & Electrical Specs", hudNode: "[NODE 3: AUTO-PAK OEM NAMEPLATE]", hudMethod: "DIRECT OCR + OEM GROUNDING", bbox1Label: "OCR: PRECISION MACHINERY • AUTO-PAK 1830-4000", bbox2Label: "Serial: 871344-015 • 208V / 3Ph / 7.1A / 2 HP" }
        ],
        logs: [
          "[01] Processing 3 photographs tagged [NODE 1], [NODE 2] and [NODE 3]...",
          "[02] Applying Forensic Rule: ignoring orange/green paint; isolating 3D geometry...",
          "[03] Vertical transition detected: Chute → Fire Damper (NFPA 82) → Hopper...",
          "[04] Industrial OCR on metal nameplate confirms Precision Machinery Systems (York, PA), Auto-Pak 1830-4000...",
          "[05] Multi-Node topology consolidated and FieldOps Gen Pro™ adapter generated."
        ],
        v2Title: "🔗 Multi-Node Topology Breakdown (DistributedNodeAnalysis v2.0)",
        v2Badge: "3 CONNECTED NODES",
        v2Items: [
          { head: "NODE 1 — Chute Discharge Head & Fire Damper", status: "Operational • Verify Fusible Link", body: "Insulated upper cylindrical duct connected to an inclined, counterweighted fire guillotine. Connects to Node 2 through the hopper's upper flange." },
          { head: "NODE 2 — Transition Hopper, Compaction Chamber & Container", status: "Attention • Cosmetic Wear & Seals", body: "Floor-anchored stationary compaction chamber with a yellow ratchet latch coupled to a green 2 yd³ container. Shows surface abrasion with no structural deformation." },
          { head: "NODE 3 — OEM Metal Nameplate Precision Machinery Systems Auto-Pak", status: "Positive ID • S/N 871344-015", body: "Riveted nameplate confirms manufacturer Precision Machinery Systems (York, PA, Ph 717-846-6800), model Auto-Pak 1830-4000, serial 871344-015, electrical rating 208V 3-phase, 7.1A, 2 HP motor at 60 Hz." }
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
        category: "SOLID WASTE HANDLING & COMPACTION MACHINERY",
        title: "Precision Machinery Systems Auto-Pak 1830-4000 Compactor Unit",
        marketBadge: "● Active (Official Support & Spare Parts)",
        confidence: "AI Confidence: 98.2% • Nameplate OCR + 3D Morphology",
        forensicText:
          "Although the unit shows orange paint wear on the front chamber and surface fatigue from heavy use, the MachId™ forensic engine cross-references the direct OEM nameplate reading (Auto-Pak 1830-4000) with rolled-steel U-beam frame architecture, 45° trapezoidal hopper geometry, and side-mounted ratchet latch to the container.",
        specs: [
          { label: "OEM Manufacturer", val: "Precision Machinery Systems (York, PA)" },
          { label: "Model / Serial", val: "Auto-Pak 1830-4000 • S/N 871344-015" },
          { label: "Electric Motor", val: "2.0 HP • 208V 3-Phase (60 Hz, 7.1A)" },
          { label: "Equipment Type", val: "Stationary Chute-Fed Compactor" },
          { label: "Main Structure", val: "A36 Steel, Continuous Weld" },
          { label: "Est. Year of Manufacture", val: "Verified OEM Nameplate" }
        ],
        slots: [
          { tag: "3D VIEW", role: "3D Diagonal Perspective", hudNode: "[SHOT 1: FULL 3D SILHOUETTE]", hudMethod: "PURE 3D MORPHOLOGY", bbox1Label: "Main Body + Trapezoidal Hopper", bbox2Label: "Heavy-Duty Coupling Latch" },
          { tag: "FRONT", role: "Front & OSHA Signage", hudNode: "[SHOT 2: FRONT & ANSI LABELS]", hudMethod: "OSHA SAFETY OCR", bbox1Label: "DANGER Label • Crush Hazard", bbox2Label: "Front Frame + Side Door" },
          { tag: "OEM PLATE", role: "Precision Auto-Pak Nameplate", hudNode: "[SHOT 3: AUTO-PAK OEM NAMEPLATE]", hudMethod: "INDUSTRIAL METAL OCR", bbox1Label: "OCR: Precision Machinery Systems • 1830-4000", bbox2Label: "Serial: 871344-015 • 208V 3Ph 2 HP" }
        ],
        logs: [
          "[01] Discarding surface paint color (Anti-Repaint Forensic Rule)...",
          "[02] Measuring geometric proportions of hopper, chamber and coupled container...",
          "[03] Positive OCR on manufacturer nameplate: Precision Machinery Systems Auto-Pak 1830-4000...",
          "[04] Verifying nominal nameplate ratings (208V, 3Ph, 7.1A, 2 HP)...",
          "[05] Complete Machine dossier generated successfully."
        ],
        v2Title: "🛡️ Industrial Safety Diagnosis & Preventive Maintenance",
        v2Badge: "OSHA / ANSI COMPLIANCE",
        v2Items: [
          { head: "Lockout/Tagout Safety (OSHA 29 CFR 1910.147 — LOTO)", status: "Disconnect Visible on Wall", body: "A metal electrical disconnect box is verified on the wall, allowing a LOTO padlock to be applied before servicing the chamber or the chute." },
          { head: "Mechanical Integrity & Perimeter Sealing", status: "Needs Cleaning & Adjustment", body: "Replacing the lower access-door gasket and checking the torque on the concrete floor anchor bolts is recommended." }
        ]
      },

      financialAudit: {
        chip: "MODE: CAPEX AUDIT (v2.0)",
        category: "TECHNICAL-FINANCIAL AUDIT & ASSET VALUATION (CAPEX / OPEX)",
        title: "CAPEX Audit Verdict — Precision Auto-Pak 1830-4000 Chute-Fed",
        marketBadge: "● Active Support (Overhaul Viable)",
        confidence: "AI Confidence: 96.8% • Nameplate OCR + Market Valuation",
        forensicText:
          "The v2.0 Financial Audit module links the verified OEM nameplate (Precision Machinery Systems Auto-Pak 1830-4000, Serial 871344-015) with historical durability data for A36 structural steel. Replacing with a brand-new unit requires ~$21,000 USD CAPEX, while an overhaul of wearable components costs ~$4,200 USD, delivering a 76% direct capital saving.",
        specs: [
          { label: "Manufacturer / Model", val: "Precision Auto-Pak 1830-4000" },
          { label: "New Equipment CAPEX", val: "$18,500 - $24,000 USD" },
          { label: "Current Value (As-Is)", val: "$5,800 - $7,200 USD" },
          { label: "Estimated Overhaul Cost", val: "$4,200 - $5,600 USD" },
          { label: "Remaining Useful Life", val: "4 - 6 Years (+8 with Overhaul)" },
          { label: "Financial Verdict", val: "REPAIR / OVERHAUL (ROI 3.4x)" }
        ],
        slots: [
          { tag: "APPRAISAL 1", role: "Auto-Pak Plate & Chassis", hudNode: "[AUDIT: AUTO-PAK PLATE & CHASSIS]", hudMethod: "OEM & VINTAGE APPRAISAL", bbox1Label: "Precision Auto-Pak 1830-4000 (York, PA)", bbox2Label: "Serial 871344-015 • Salvageable A36 Chassis" },
          { tag: "APPRAISAL 2", role: "Fixed Chute Infrastructure", hudNode: "[AUDIT: DUCT & DAMPER]", hudMethod: "USEFUL LIFE ASSESSMENT", bbox1Label: "Chute & Damper: Remaining Life >10 years", bbox2Label: "Chamber: Needs Sandblasting + Epoxy" },
          { tag: "APPRAISAL 3", role: "Coupled Rolling Container", hudNode: "[AUDIT: 2 YD³ CONTAINER]", hudMethod: "RESIDUAL VALUE", bbox1Label: "2 yd³ Container: Good Operating Condition", bbox2Label: "Mechanical Latch: Operational" }
        ],
        logs: [
          "[01] Linking manufacturer nameplate Precision Machinery Systems Auto-Pak 1830-4000...",
          "[02] Querying U.S. pricing database for 0.5 yd³ chute-fed compactors...",
          "[03] Calculating accumulated depreciation (68%) and estimated remaining useful life (4-6 years)...",
          "[04] Comparing full replacement CAPEX ($21,000) vs. hydraulic/electrical overhaul ($4,900)...",
          "[05] CAPEX verdict completed: OVERHAUL RECOMMENDED (net savings ~$16,100 USD)."
        ],
        v2Title: "📊 Financial Audit Verdict & CAPEX Recommendation (FinancialAuditInfo v2.0)",
        v2Badge: "VERDICT: OVERHAUL / REFURBISH",
        v2Items: [
          { head: "CAPEX Comparison: Replacement ($21,000 USD) vs. Full Overhaul ($4,900 USD)", status: "Direct Capital Savings: 76%", body: "The Precision Auto-Pak structural frame and vertical chute have more than 10 years of remaining life. A full-replacement CAPEX outlay is not justified." },
          { head: "Recommended Overhaul Scope ($4,900 USD Estimated)", status: "Useful Life Extension: +8 Years", body: "1) Hydraulic cylinder reseal and AW-46 oil + filter change, 2) replacement of 2 SAE 100R2 hoses, 3) contactor and thermal overload relay update, 4) mechanical cleaning and anticorrosive epoxy coating." }
        ]
      }
    },

    /* ===================================================== FR ===================================================== */
    fr: {
      distributedSystem: {
        chip: "MODE : MULTI-NŒUDS (v2.0)",
        category: "SYSTÈME DE COMPACTION DISTRIBUÉ AVEC VIDE-ORDURES VERTICAL MULTI-ÉTAGES",
        title: "Compacteur Hydraulique à Vide-Ordures Precision Machinery Systems Auto-Pak 1830-4000",
        marketBadge: "● Actif (Support OEM et Pièces Standard ANSI)",
        confidence: "Confiance IA : 98.7 % • OCR Plaque Métallique + Corrélation Multi-Nœuds 3D",
        forensicText:
          "Règle Forensique appliquée : la peinture orange refaite sur site est ignorée. L'IA corrèle 3 nœuds physiques connectés : (1) gaine verticale de vide-ordures avec trappe coupe-feu fusible à 165 °F (NFPA 82), (2) trémie de transition et chambre de compactage avec verrou à cliquet latéral vers conteneur de 2 yd³, et (3) plaque métallique constructeur rivetée au châssis. L'OCR industriel extrait avec 99,4 % de précision : Fabricant Precision Machinery Systems (York, PA), Modèle Auto-Pak 1830-4000, N° Série 871344-015 et groupe de 2 HP sous 208 V triphasé.",
        specs: [
          { label: "Fabricant OEM", val: "Precision Machinery Systems (York, PA)" },
          { label: "Modèle / Série", val: "Auto-Pak 1830-4000 • N° S/N 871344-015" },
          { label: "Moteur Électrique", val: "2,0 HP • 208V 3Ph 7,1A (60 Hz)" },
          { label: "Capacité de Chambre", val: "0,52 yd³ (Cycle Automatique)" },
          { label: "Normes Applicables", val: "ANSI Z245.2 / NFPA 82" },
          { label: "Conteneur Attelé", val: "2,0 yd³ Chargement Avant/Arrière" }
        ],
        slots: [
          { tag: "NŒUD 1", role: "Décharge du Vide-Ordures et Trémie", hudNode: "[NŒUD 1 : VIDE-ORDURES ET TRAPPE NFPA 82]", hudMethod: "SILHOUETTE 3D + MULTI-NŒUDS", bbox1Label: "Gaine de Chute + Trappe Coupe-Feu", bbox2Label: "Trémie de Réception + Verrou Latéral" },
          { tag: "NŒUD 2", role: "Chambre et Conteneur 2 yd³", hudNode: "[NŒUD 2 : CHAMBRE ET CONTENEUR]", hudMethod: "GÉOMÉTRIE STRUCTURELLE", bbox1Label: "Chambre de Compactage + Trémie Orange", bbox2Label: "Conteneur Roulant Vert 2 yd³" },
          { tag: "NŒUD 3", role: "Plaque OEM et Données Électriques", hudNode: "[NŒUD 3 : PLAQUE FABRICANT AUTO-PAK]", hudMethod: "OCR DIRECT + CROISEMENT OEM", bbox1Label: "OCR : PRECISION MACHINERY • AUTO-PAK 1830-4000", bbox2Label: "Série : 871344-015 • 208V / 3Ph / 7,1A / 2 HP" }
        ],
        logs: [
          "[01] Traitement de 3 photographies étiquetées [NŒUD 1], [NŒUD 2] et [NŒUD 3]...",
          "[02] Application de la Règle Forensique : peinture orange/verte ignorée ; isolation de la géométrie 3D...",
          "[03] Transition verticale détectée : Vide-ordures → Trappe coupe-feu (NFPA 82) → Trémie...",
          "[04] L'OCR industriel sur plaque métallique confirme Precision Machinery Systems (York, PA), Auto-Pak 1830-4000...",
          "[05] Topologie Multi-Nœuds consolidée et adaptateur FieldOps Gen Pro™ généré."
        ],
        v2Title: "🔗 Détail de la Topologie Multi-Nœuds (DistributedNodeAnalysis v2.0)",
        v2Badge: "3 NŒUDS CONNECTÉS",
        v2Items: [
          { head: "NŒUD 1 — Tête de Décharge du Vide-Ordures et Trappe Coupe-Feu", status: "Opérationnel • Vérifier le Fusible", body: "Gaine cylindrique supérieure isolée reliée à une guillotine coupe-feu inclinée à contrepoids. Liaison avec le Nœud 2 par la bride supérieure de la trémie." },
          { head: "NŒUD 2 — Trémie de Transition, Chambre de Compactage et Conteneur", status: "Attention • Usure Esthétique et Joints", body: "Chambre de compactage stationnaire ancrée au sol avec verrou à cliquet jaune relié à un conteneur vert de 2 yd³. Abrasion superficielle sans déformation structurelle." },
          { head: "NŒUD 3 — Plaque Métallique OEM Precision Machinery Systems Auto-Pak", status: "Identification Positive • N° S/N 871344-015", body: "La plaque rivetée confirme le fabricant Precision Machinery Systems (York, PA, Tél. 717-846-6800), modèle Auto-Pak 1830-4000, série 871344-015, alimentation 208V triphasée, 7,1A, moteur de 2 HP à 60 Hz." }
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
        category: "MACHINES DE MANUTENTION ET DE COMPACTAGE DE DÉCHETS SOLIDES",
        title: "Compacteur Stationnaire Precision Machinery Systems Auto-Pak 1830-4000",
        marketBadge: "● Actif (Support Officiel et Pièces de Rechange)",
        confidence: "Confiance IA : 98.2 % • OCR Plaque + Silhouette Morphologique 3D",
        forensicText:
          "Bien que l'unité présente une usure de peinture orange sur la chambre avant et une fatigue superficielle due à un usage intensif, le moteur forensique de MachId™ associe la lecture directe de la plaque constructeur (Auto-Pak 1830-4000) à l'architecture en profilés U d'acier laminé, la trémie trapézoïdale et le système de verrouillage à cliquet sur le conteneur.",
        specs: [
          { label: "Fabricant OEM", val: "Precision Machinery Systems (York, PA)" },
          { label: "Modèle / Série", val: "Auto-Pak 1830-4000 • N° S/N 871344-015" },
          { label: "Moteur Électrique", val: "2,0 HP • 208V Triphasé (60 Hz, 7,1A)" },
          { label: "Type d'Équipement", val: "Compacteur Stationnaire à Vide-Ordures" },
          { label: "Structure Principale", val: "Acier A36, Soudure Continue" },
          { label: "Année de Fabrication Est.", val: "Plaque Constructeur Vérifiée" }
        ],
        slots: [
          { tag: "VUE 3D", role: "Perspective Diagonale 3D", hudNode: "[PRISE 1 : SILHOUETTE 3D COMPLÈTE]", hudMethod: "MORPHOLOGIE 3D PURE", bbox1Label: "Corps Principal + Trémie Trapézoïdale", bbox2Label: "Verrou d'Attelage Haute Charge" },
          { tag: "FACE AVANT", role: "Face Avant et Signalisation OSHA", hudNode: "[PRISE 2 : FACE AVANT ET ÉTIQUETTES ANSI]", hudMethod: "OCR DE SÉCURITÉ OSHA", bbox1Label: "Étiquette DANGER • Risque d'Écrasement", bbox2Label: "Châssis Avant + Porte Latérale" },
          { tag: "PLAQUE OEM", role: "Plaque Precision Auto-Pak", hudNode: "[PRISE 3 : PLAQUE FABRICANT AUTO-PAK]", hudMethod: "OCR MÉTALLIQUE INDUSTRIEL", bbox1Label: "OCR : Precision Machinery Systems • 1830-4000", bbox2Label: "Série : 871344-015 • 208V 3Ph 2 HP" }
        ],
        logs: [
          "[01] Rejet de la couleur de peinture superficielle (Règle Forensique Anti-Repeinture)...",
          "[02] Mesure des proportions géométriques de la trémie, de la chambre et du conteneur attelé...",
          "[03] OCR positif sur la plaque constructeur : Precision Machinery Systems Auto-Pak 1830-4000...",
          "[04] Vérification des spécifications nominales de la plaque (208V, 3Ph, 7,1A, 2 HP)...",
          "[05] Dossier de Machine Complète généré avec succès."
        ],
        v2Title: "🛡️ Diagnostic de Sécurité Industrielle et Maintenance Préventive",
        v2Badge: "CONFORMITÉ OSHA / ANSI",
        v2Items: [
          { head: "Sécurité de Consignation (OSHA 29 CFR 1910.147 — LOTO)", status: "Sectionneur Visible au Mur", body: "Un coffret de sectionnement électrique métallique est vérifié sur le mur pour appliquer un cadenas LOTO avant toute intervention sur la chambre ou le vide-ordures." },
          { head: "Intégrité Mécanique et Étanchéité Périmétrique", status: "Nettoyage et Réglage Requis", body: "Il est recommandé de remplacer le joint inférieur de la porte d'accès et de vérifier le couple de serrage des boulons d'ancrage au sol en béton." }
        ]
      },

      financialAudit: {
        chip: "MODE : AUDIT CAPEX (v2.0)",
        category: "AUDIT TECHNICO-FINANCIER ET ÉVALUATION D'ACTIFS (CAPEX / OPEX)",
        title: "Avis d'Audit CAPEX — Precision Auto-Pak 1830-4000 à Vide-Ordures",
        marketBadge: "● Support Actif (Révision Viable)",
        confidence: "Confiance IA : 96.8 % • OCR Plaque + Évaluation du Marché",
        forensicText:
          "Le module d'Audit Financier v2.0 associe la plaque constructeur vérifiée (Precision Machinery Systems Auto-Pak 1830-4000, N° Série 871344-015) à l'historique de durabilité de l'acier structural A36. Le remplacement par un équipement neuf équivaut à un CAPEX de ~21 000 USD, tandis qu'une révision (overhaul) des composants d'usure s'élève à ~4 200 USD, réalisant 76 % d'économie immédiate.",
        specs: [
          { label: "Fabricant / Modèle", val: "Precision Auto-Pak 1830-4000" },
          { label: "CAPEX Équipement Neuf", val: "18 500 - 24 000 USD" },
          { label: "Valeur Actuelle (En l'État)", val: "5 800 - 7 200 USD" },
          { label: "Coût Estimé de la Révision", val: "4 200 - 5 600 USD" },
          { label: "Durée de Vie Restante", val: "4 - 6 Ans (+8 avec Révision)" },
          { label: "Verdict Financier", val: "RÉPARER / RÉVISION (ROI 3,4x)" }
        ],
        slots: [
          { tag: "ÉVALUATION 1", role: "Plaque et Châssis Auto-Pak", hudNode: "[AUDIT : PLAQUE ET CHÂSSIS AUTO-PAK]", hudMethod: "ÉVALUATION FABRICANT ET ÂGE", bbox1Label: "Precision Auto-Pak 1830-4000 (York, PA)", bbox2Label: "Série 871344-015 • Châssis A36 Récupérable" },
          { tag: "ÉVALUATION 2", role: "Infrastructure Fixe du Vide-Ordures", hudNode: "[AUDIT : GAINE ET TRAPPE]", hudMethod: "ÉVALUATION DE LA DURÉE DE VIE", bbox1Label: "Vide-Ordures et Trappe : Durée Restante > 10 ans", bbox2Label: "Chambre : Sablage + Époxy Requis" },
          { tag: "ÉVALUATION 3", role: "Conteneur Roulant Attelé", hudNode: "[AUDIT : CONTENEUR 2 YD³]", hudMethod: "VALEUR RÉSIDUELLE", bbox1Label: "Conteneur 2 yd³ : Bon État de Fonctionnement", bbox2Label: "Verrou Mécanique : Opérationnel" }
        ],
        logs: [
          "[01] Liaison de la plaque constructeur Precision Machinery Systems Auto-Pak 1830-4000...",
          "[02] Consultation de la base de prix aux États-Unis pour compacteurs à vide-ordures de 0,5 yd³...",
          "[03] Calcul de l'amortissement cumulé (68 %) et de la durée de vie restante estimée (4-6 ans)...",
          "[04] Comparaison du CAPEX de remplacement total (21 000 $) vs. révision hydraulique/électrique (4 900 $)...",
          "[05] Avis CAPEX terminé : RÉVISION RECOMMANDÉE (économie nette ~16 100 USD)."
        ],
        v2Title: "📊 Avis d'Audit Financier et Recommandation CAPEX (FinancialAuditInfo v2.0)",
        v2Badge: "VERDICT : RÉVISION / REMISE À NEUF",
        v2Items: [
          { head: "Comparatif CAPEX : Remplacement (21 000 USD) vs. Révision Complète (4 900 USD)", status: "Économie Directe de Capital : 76 %", body: "Le châssis Precision Auto-Pak et le vide-ordures vertical ont plus de 10 ans de durée de vie restante. Un investissement CAPEX de remplacement complet n'est pas justifié." },
          { head: "Périmètre Recommandé de la Révision (4 900 USD Estimés)", status: "Prolongation de la Durée de Vie : +8 Ans", body: "1) Remplacement des joints du vérin hydraulique et vidange huile AW-46 + filtre, 2) remplacement de 2 flexibles SAE 100R2, 3) mise à jour des contacteurs et du relais thermique, 4) nettoyage mécanique et revêtement époxy anticorrosion." }
        ]
      }
    }
  };

  window.MACHID_BASE = MACHID_BASE;
  window.MACHID_TEXT = MACHID_TEXT;
})();
