# 🔬 Proyecto Futuro: Simulador de Inspección Óptica & Telemetría en el Edge (HUD Console)

**Fecha de resguardo:** 25 de Octubre, 2026  
**Estado:** Archivada / Proyecto Futuro para Cámaras Fijas, Drones & Smart Glasses AR  
**Origen:** Landing Page Hero Console (v0.1.0 - v0.7.6) de Mosbi Systems (`mosbisystems.com`)

---

## 1. Resumen Ejecutivo del Concepto

El **Simulador de Inspección Óptica** es una interfaz conceptual de consola de alta tecnología diseñada para simular en tiempo real la ingesta de video óptico industrial, el seguimiento con retícula HUD (Head-Up Display), el barrido láser de escaneo, la delimitación con cajas delimitadoras dinámicas (*bounding boxes*), la lectura de telemetría IoT de sensores en línea y la transmisión continua de registros de inferencia (*live inference stream*).

Aunque originalmente se situó en la cabecera (*Hero*) de `mosbisystems.com` para transmitir alta sofisticación visual, la aplicación comercial real de **Machine Identifier AI™** se enfoca en la identificación forense multimodal por fotografía móvil y plugin CMMS para operarios en campo (ver especificaciones en `C:\Users\hogar\Desktop\plugin maquinas`). 

Este documento preserva la arquitectura completa, el marcado HTML, los estilos CSS y la lógica interactiva JavaScript para su futura implementación en proyectos orientados a:
1. **Lentes de Realidad Aumentada (AR Smart Glasses):** Interfaz para RealWear HMT-1 / Apple Vision Pro / HoloLens con fijación de retícula en activos y visualización de RPM/vibración en tiempo real.
2. **Inspección Óptica Fija en Línea de Producción:** Estaciones de control de calidad con cámaras industriales GigE (60 FPS) y verificación de sellos de bridas.
3. **Drones Autónomos de Inspección de Plantas:** Navegación autónoma con reconocimiento óptico de tanques, torres de enfriamiento y válvulas criogénicas.

---

## 2. Componentes Clave de la Arquitectura

```
┌────────────────────────────────────────────────────────────────────────┐
│                   OPTICAL INSPECTION SIMULATOR (HUD)                   │
├────────────────────────────────────────┬───────────────────────────────┤
│ 1. Etapa Óptica (Optical Stage)        │ 2. Ficha de Inteligencia      │
│    • Láser de barrido animado          │    • Estado de salud activo   │
│    • Retícula central de apuntado      │    • Etiqueta de activo / OCR │
│    • Marcadores HUD (FPS, ISO, FOV)    │    • Fabricante y Temp.       │
│    • Gráficos vectoriales SVG dinámicos│    • Sincronización CMMS ERP  │
│    • Bounding boxes con etiquetas      │                               │
│    • Pie con latencia y modelo edge    │ 3. Terminal de Inferencia     │
│                                        │    • Transmisión live log     │
└────────────────────────────────────────┴───────────────────────────────┘
```

---

## 3. Código Fuente Completo (HTML)

```html
<!-- INTERACTIVE LIVE PRODUCT SCANNER CONSOLE -->
<div class="product-console-wrapper reveal">
  <div class="console-box">
    <!-- Console Header -->
    <div class="console-topbar">
      <div class="window-controls">
        <span class="w-dot dot-red"></span>
        <span class="w-dot dot-yellow"></span>
        <span class="w-dot dot-green"></span>
      </div>
      <div class="console-title">
        <span class="tech-tag">INFERENCE ENGINE</span>
        <span>MOSBI Machine Identifier AI™ • Simulador de Inspección Óptica</span>
      </div>
      <div class="console-engine-status">
        <span class="status-indicator-active"></span>
        <span>SINCRONIZACIÓN EDGE ACTIVA</span>
      </div>
    </div>

    <!-- Console Body -->
    <div class="console-body-grid">
      <!-- Left: Interactive Scanner View -->
      <div class="interactive-viewport">
        <!-- Machine Category Selector Bar -->
        <div class="machine-switcher" role="tablist" aria-label="Seleccionar muestra de máquina">
          <button class="machine-tab active" data-machine="turbine" role="tab" aria-selected="true">
            Bomba Centrífuga #402
          </button>
          <button class="machine-tab" data-machine="valve" role="tab" aria-selected="false">
            Válvula Criogénica PV-94
          </button>
          <button class="machine-tab" data-machine="motor" role="tab" aria-selected="false">
            Motor de Inducción M-7
          </button>
          <button class="machine-tab" data-machine="compressor" role="tab" aria-selected="false">
            Compresor de Tornillo SC-12
          </button>
        </div>

        <!-- Visual Optical Target Display -->
        <div class="optical-stage" id="opticalStage">
          <!-- Laser scanning bar -->
          <div class="optical-laser"></div>
          
          <!-- HUD Reticle & Crosshairs -->
          <div class="hud-center-cross"></div>
          <div class="hud-grid-marks">
            <span class="hud-mark top-l">+0.00</span>
            <span class="hud-mark top-r">FPS 60</span>
            <span class="hud-mark bot-l">ISO 400</span>
            <span class="hud-mark bot-r">FOV 74°</span>
          </div>

          <!-- Dynamic SVG Machinery Illustration -->
          <div class="machinery-visual" id="machineryVisual">
            <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" class="machine-schematic-svg" id="machineSvg">
              <!-- SVG inyectado dinámicamente -->
            </svg>
          </div>

          <!-- Dynamic Bounding Boxes -->
          <div class="dynamic-bounding-box box-main" id="boxMain">
            <div class="box-tag-label" id="boxMainLabel">Bomba de Turbina #402 • 99.8% Coincidencia</div>
            <div class="b-corner tl"></div><div class="b-corner tr"></div>
            <div class="b-corner bl"></div><div class="b-corner br"></div>
          </div>

          <div class="dynamic-bounding-box box-sub" id="boxSub">
            <div class="box-tag-label label-sub" id="boxSubLabel">Sello de Brida • APROBADO</div>
            <div class="b-corner tl"></div><div class="b-corner tr"></div>
            <div class="b-corner bl"></div><div class="b-corner br"></div>
          </div>
        </div>

        <!-- Bottom Viewport Footer -->
        <div class="viewport-footer">
          <div class="vf-stat">
            <span class="vf-label">Inferencia:</span>
            <span class="vf-val" id="valLatency">14.2 ms</span>
          </div>
          <div class="vf-stat">
            <span class="vf-label">Modelo:</span>
            <span class="vf-val">MOSBI-Vision-4.2-Edge</span>
          </div>
          <div class="vf-stat">
            <span class="vf-label">Confianza:</span>
            <span class="vf-val val-green" id="valConfidence">99.8%</span>
          </div>
        </div>
      </div>

      <!-- Right: Real-Time Diagnostic Feed & Asset Metadata -->
      <div class="telemetry-panel">
        <div class="telemetry-tabs">
          <span class="t-tab">FICHA DE INTELIGENCIA DE ACTIVO</span>
        </div>

        <!-- Dynamic Machine Specification Details -->
        <div class="asset-spec-card" id="assetSpecCard">
          <div class="spec-header">
            <div class="spec-id-group">
              <span class="spec-type-badge" id="specBadge">EQUIPO ROTATIVO</span>
              <h4 class="spec-title" id="specTitle">Bomba Centrífuga de Lodos</h4>
            </div>
            <span class="health-pill good" id="specHealth">Óptimo • 98%</span>
          </div>

          <div class="spec-props-grid">
            <div class="prop-item">
              <span class="p-label">Etiqueta Activo:</span>
              <span class="p-val" id="specTag">PUMP-CPX-800-MD</span>
            </div>
            <div class="prop-item">
              <span class="p-label">OCR de Serie:</span>
              <span class="p-val" id="specSerial">SN-8849-01B</span>
            </div>
            <div class="prop-item">
              <span class="p-label">Fabricante OEM:</span>
              <span class="p-val" id="specVendor">FlowMax Dynamics</span>
            </div>
            <div class="prop-item">
              <span class="p-label">Temp. de Operación:</span>
              <span class="p-val" id="specTemp">48.2 °C (Normal)</span>
            </div>
            <div class="prop-item">
              <span class="p-label">Próximo Servicio:</span>
              <span class="p-val val-accent" id="specService">14 Días (Rutina)</span>
            </div>
            <div class="prop-item">
              <span class="p-label">Sincronización CMMS:</span>
              <span class="p-val val-green" id="specSync">Sincronizado • ID #9481</span>
            </div>
          </div>

          <div class="spec-actions">
            <button class="btn btn-primary-compact btn-full">
              Ver Expediente Técnico Completo
            </button>
          </div>
        </div>

        <!-- Live Terminal Stream Logs -->
        <div class="live-stream-box">
          <div class="stream-title">
            <span>TRANSMISIÓN DE INFERENCIA EN VIVO</span>
            <span class="stream-dot"></span>
          </div>
          <div class="stream-log-container" id="streamLogContainer">
            <!-- Logs agregados por JS -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## 4. Estilos Visuales (CSS)

```css
/* Product Console Outer Box */
.product-console-wrapper {
  width: 100%;
  max-width: 1100px;
  margin-bottom: 4rem;
}

.console-box {
  background: rgba(9, 14, 32, 0.88);
  border: 1px solid rgba(0, 229, 255, 0.28);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5), 0 0 35px rgba(0, 229, 255, 0.18);
  backdrop-filter: blur(20px);
}

.console-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.5rem;
  background: rgba(14, 21, 46, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.window-controls {
  display: flex;
  gap: 7px;
}

.w-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot-red { background: #ef4444; }
.dot-yellow { background: #f59e0b; }
.dot-green { background: #10b981; }

.console-title {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.tech-tag {
  background: rgba(0, 229, 255, 0.15);
  color: var(--color-cyan);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.7rem;
}

.console-engine-status {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-emerald);
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.status-indicator-active {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-emerald);
  box-shadow: 0 0 8px var(--color-emerald);
  animation: pulse-ring 1.8s infinite;
}

.console-body-grid {
  display: grid;
  grid-template-columns: minmax(0, 60fr) minmax(0, 40fr);
  gap: 1.25rem;
  padding: 1.25rem;
  text-align: left;
  min-width: 0;
  overflow: hidden;
}

.interactive-viewport {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

/* Machine Switcher Tabs */
.machine-switcher {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
}

.machine-tab {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  padding: 0.32rem 0.6rem;
  border-radius: var(--radius-xs);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.machine-tab:hover {
  background: rgba(0, 229, 255, 0.1);
  color: #ffffff;
  border-color: rgba(0, 229, 255, 0.25);
}

.machine-tab.active {
  background: rgba(0, 229, 255, 0.18);
  border-color: var(--color-cyan);
  color: var(--color-cyan);
  font-weight: 700;
  box-shadow: 0 0 12px rgba(0, 229, 255, 0.2);
}

/* Optical Stage & HUD */
.optical-stage {
  position: relative;
  background: radial-gradient(circle at center, #0c1836 0%, #050917 100%);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: var(--radius-md);
  height: 240px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.optical-laser {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e5ff, #ffffff, #00e5ff, transparent);
  box-shadow: 0 0 16px #00e5ff;
  animation: laserSweep 3.2s ease-in-out infinite alternate;
  z-index: 5;
}

@keyframes laserSweep {
  0% { top: 6%; opacity: 0.3; }
  50% { top: 92%; opacity: 1; }
  100% { top: 6%; opacity: 0.3; }
}

.hud-center-cross {
  position: absolute;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(0, 229, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
}

.hud-center-cross::before, .hud-center-cross::after {
  content: '';
  position: absolute;
  background: var(--color-cyan);
}
.hud-center-cross::before { top: 11px; left: -6px; width: 36px; height: 1px; }
.hud-center-cross::after { left: 11px; top: -6px; width: 1px; height: 36px; }

.hud-grid-marks span {
  position: absolute;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: rgba(0, 229, 255, 0.5);
  pointer-events: none;
}
.hud-mark.top-l { top: 10px; left: 12px; }
.hud-mark.top-r { top: 10px; right: 12px; }
.hud-mark.bot-l { bottom: 10px; left: 12px; }
.hud-mark.bot-r { bottom: 10px; right: 12px; }

.machinery-visual {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.machine-schematic-svg {
  width: 85%;
  height: 85%;
  transition: opacity 0.3s ease;
}

/* Dynamic Bounding Boxes */
.dynamic-bounding-box {
  position: absolute;
  border: 1.5px dashed var(--color-cyan);
  background: rgba(0, 229, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 4;
}

.box-main {
  top: 18%;
  left: 14%;
  width: 58%;
  height: 62%;
  border-color: var(--color-cyan);
}

.box-sub {
  top: 42%;
  right: 10%;
  width: 30%;
  height: 40%;
  border-color: var(--color-emerald);
}

.box-tag-label {
  position: absolute;
  top: -22px;
  left: -1px;
  background: var(--color-cyan);
  color: #040816;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 800;
  padding: 2px 7px;
  border-radius: 3px;
  white-space: nowrap;
}

.box-tag-label.label-sub {
  background: var(--color-emerald);
}

.b-corner {
  position: absolute;
  width: 6px;
  height: 6px;
  border-color: #ffffff;
  border-style: solid;
}
.b-corner.tl { top: -2px; left: -2px; border-width: 2px 0 0 2px; }
.b-corner.tr { top: -2px; right: -2px; border-width: 2px 2px 0 0; }
.b-corner.bl { bottom: -2px; left: -2px; border-width: 0 0 2px 2px; }
.b-corner.br { bottom: -2px; right: -2px; border-width: 0 2px 2px 0; }

.viewport-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 0.85rem;
  padding: 0.5rem 0.75rem;
  background: rgba(5, 8, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xs);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.vf-label { color: var(--text-faint); margin-right: 4px; }
.vf-val { color: var(--text-main); font-weight: 600; }
.vf-val.val-green { color: var(--color-emerald); }
.val-accent { color: var(--color-cyan); }

/* Right Panel: Spec & Stream */
.telemetry-panel {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
  overflow: hidden;
}

.telemetry-tabs {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 0.4rem;
}

.t-tab {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-cyan);
}

.asset-spec-card {
  background: rgba(14, 22, 48, 0.75);
  border: 1px solid rgba(0, 229, 255, 0.18);
  border-radius: var(--radius-md);
  padding: 1.15rem;
  min-width: 0;
}

.spec-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 0.6rem;
  gap: 0.75rem;
}

.spec-id-group {
  min-width: 0;
  flex: 1;
}

.spec-type-badge {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  color: var(--color-cyan);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 2px;
}

.spec-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.25;
}

.health-pill {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

.health-pill.good {
  background: rgba(16, 185, 129, 0.15);
  color: var(--color-emerald);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.spec-props-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem 1.15rem;
  font-size: 0.8rem;
  margin-bottom: 0.85rem;
}

.prop-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.p-label {
  color: var(--text-faint);
  font-size: 0.68rem;
  font-family: var(--font-mono);
  white-space: nowrap;
}

.p-val {
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.82rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

/* Stream Log Box */
.live-stream-box {
  background: rgba(5, 8, 20, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-sm);
  padding: 0.85rem;
  flex-grow: 1;
}

.stream-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-faint);
  margin-bottom: 0.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 0.35rem;
}

.stream-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-cyan);
  box-shadow: 0 0 6px var(--color-cyan);
  animation: pulse-ring 1.5s infinite;
}

.stream-log-container {
  height: 95px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  line-height: 1.35;
}

.log-entry {
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(6px);
  animation: logSlide 0.3s ease forwards;
}

.log-time { color: var(--text-faint); }
.log-cyan { color: var(--color-cyan); font-weight: 700; }
.log-green { color: var(--color-emerald); font-weight: 700; }
.log-blue { color: #38bdf8; font-weight: 700; }
.log-text { color: var(--text-muted); }
```

---

## 5. Lógica JavaScript de Control

```javascript
// Database de activos simulados
const MACHINE_DATABASE = {
  "turbine": {
    title: "Centrifugal Slurry Pump",
    badge: "ROTARY EQUIPMENT",
    tag: "PUMP-CPX-800-MD",
    serial: "SN-8849-01B",
    vendor: "FlowMax Dynamics",
    temp: "48.2 °C (Normal)",
    service: "14 Days (Routine)",
    sync: "Synced • ID #9481",
    health: "Healthy • 98%",
    confidence: "99.8%",
    latency: "14.2 ms",
    box1: { label: "Turbine Pump #402 • 99.8% Match", top: "16%", left: "15%", width: "46%", height: "68%" },
    box2: { label: "Flange Seal • PASS", top: "36%", left: "62%", width: "24%", height: "36%" }
  },
  "valve": {
    title: "Cryogenic Control Valve",
    badge: "PRESSURE CONTROL",
    tag: "VALVE-PV-94-CRYO",
    serial: "SN-4412-99C",
    vendor: "Vortex Automation",
    temp: "-32.4 °C (Stable)",
    service: "4 Days (Impending)",
    sync: "Synced • ID #3312",
    health: "Warning • Seal Check",
    confidence: "99.4%",
    latency: "11.8 ms",
    box1: { label: "Cryo Valve PV-94 • 99.4% Match", top: "22%", left: "22%", width: "54%", height: "58%" },
    box2: { label: "Actuator Stem • CALIBRATED", top: "10%", left: "42%", width: "18%", height: "26%" }
  },
  "motor": {
    title: "High-Torque Induction Motor",
    badge: "ELECTRO-MECHANICAL",
    tag: "MOTOR-IND-M7-3P",
    serial: "SN-7731-08A",
    vendor: "ElectroCore Global",
    temp: "64.1 °C (Nominal)",
    service: "45 Days (Healthy)",
    sync: "Synced • ID #1842",
    health: "Optimal • 100%",
    confidence: "99.9%",
    latency: "9.4 ms",
    box1: { label: "Induction Motor M-7 • 99.9% Match", top: "24%", left: "22%", width: "56%", height: "52%" },
    box2: { label: "Stator Frame • OK", top: "28%", left: "32%", width: "36%", height: "42%" }
  },
  "compressor": {
    title: "Twin-Screw Air Compressor",
    badge: "PNEUMATICS",
    tag: "COMP-SC12-VSD",
    serial: "SN-5120-44K",
    vendor: "AeroPulse Systems",
    temp: "78.9 °C (Warning)",
    service: "2 Days (Urgent)",
    sync: "Synced • ID #6109",
    health: "Alert • Oil Filter",
    confidence: "98.9%",
    latency: "16.1 ms",
    box1: { label: "Twin-Screw SC-12 • 98.9% Match", top: "18%", left: "12%", width: "76%", height: "64%" },
    box2: { label: "Separator Valve • INSPECT", top: "34%", left: "54%", width: "22%", height: "30%" }
  }
};

// SVGs vectoriales de maquinaria técnica
const MACHINE_SVGS = {
  turbine: `<circle cx="170" cy="120" r="65" stroke="rgba(0, 229, 255, 0.85)" stroke-width="2.5" fill="rgba(0, 229, 255, 0.04)" stroke-dasharray="4 2"/>
            <circle cx="170" cy="120" r="30" stroke="#00e5ff" stroke-width="2"/>
            <path d="M170 55 L290 55 L290 85 L220 85" stroke="#00e5ff" stroke-width="2.5" fill="none"/>
            <circle cx="290" cy="70" r="14" stroke="#10b981" stroke-width="2" fill="rgba(16, 185, 129, 0.1)"/>
            <line x1="170" y1="20" x2="170" y2="55" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1.5" stroke-dasharray="3 3"/>`,
  valve: `<path d="M100 80 L220 160 L100 160 L220 80 Z" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.05)"/>
          <line x1="160" y1="120" x2="160" y2="40" stroke="#00e5ff" stroke-width="3"/>
          <ellipse cx="160" cy="40" rx="35" ry="12" stroke="#10b981" stroke-width="2.5" fill="rgba(16, 185, 129, 0.15)"/>
          <line x1="60" y1="120" x2="260" y2="120" stroke="rgba(255, 255, 255, 0.4)" stroke-width="1.5" stroke-dasharray="4 4"/>`,
  motor: `<rect x="110" y="70" width="160" height="100" rx="6" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.04)"/>
          <line x1="130" y1="70" x2="130" y2="170" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
          <line x1="150" y1="70" x2="150" y2="170" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
          <line x1="170" y1="70" x2="170" y2="170" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
          <line x1="190" y1="70" x2="190" y2="170" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
          <line x1="210" y1="70" x2="210" y2="170" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
          <rect x="70" y="105" width="40" height="30" stroke="#10b981" stroke-width="2" fill="rgba(16, 185, 129, 0.1)"/>
          <rect x="270" y="112" width="45" height="16" stroke="#00e5ff" stroke-width="2" fill="none"/>`,
  compressor: `<rect x="90" y="60" width="220" height="120" rx="10" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.03)"/>
               <circle cx="150" cy="120" r="38" stroke="rgba(0, 229, 255, 0.6)" stroke-width="2" stroke-dasharray="6 3"/>
               <circle cx="210" cy="120" r="38" stroke="rgba(0, 229, 255, 0.6)" stroke-width="2" stroke-dasharray="6 3"/>
               <rect x="235" y="85" width="55" height="70" stroke="#ef4444" stroke-width="2" fill="rgba(239, 68, 68, 0.1)"/>`
};
```

---

## 6. Conclusión y Guía de Resurrección

Cuando el equipo de producto decida reactivar este simulador en una vista dedicada (por ejemplo, `/edge-vision-hud` o `/industrial-ar`):
1. Inserte el contenedor `.product-console-wrapper` en la vista deseada.
2. Asegúrese de importar los estilos CSS de la sección 4.
3. Inicialice el script llamando `initMachineScanner()` con el objeto `MACHINE_DATABASE`.
4. Vincule las llamadas de WebSocket de telemetría a la función `loadMachine()` para que los cuadros delimitadores y temperaturas respondan a datos reales de cámaras industriales o sensores MQTT.
