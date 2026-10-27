# Especificación de Actualización e Integración Web: `MachId™ Machine Identifier AI (v2.0)` en `mosbisystems.com` (`mach_update.md`)

**Proyecto Destino:** `C:\Users\hogar\Desktop\Mosbi systems` (`https://mosbisystems.com`)  
**Producto:** **MachId™ Machine Identifier AI (v2.0)**  
**Entidad Corporativa:** **MOSBI Systems LLC** (`info@mosbisystems.com`)  
**Ruta de la Landing Page de Demostración:** `C:\Users\hogar\Desktop\Mosbi systems\machid\index.html` (`https://mosbisystems.com/machid/`)

---

## 1. Resumen Ejecutivo del Objetivo

Al igual que **FieldOps Gen Pro** cuenta con su propia página interactiva de demostración en `fieldops-gen-pro/index.html` (accesible desde la sección `#fieldops` de `mosbisystems.com`), **MachId™ Machine Identifier AI (v2.0)** debe contar con:

1. **Botones de Acceso Directo en `mosbisystems.com` (`index.html`)**:
   - Cuando un visitante haga clic en **"Explore MachId™ Machine Identifier AI"** en el Hero principal (`#hero`) o en el botón de acción de la sección destacada **`#product`** (`MachId™ Machine Identifier AI`), se abrirá la nueva página dedicada **`machid/index.html`**.
2. **Landing Page Interactiva de Demostración (`machid/index.html`, `machid/styles.css`, `machid/app.js`)**:
   - Un simulador interactivo paso a paso con animaciones en tiempo real que demuestra exactamente cómo funciona el programa **MachId™ Machine Identifier AI v2.0** desde la captura fotográfica en campo hasta la emisión del Dossier Ejecutivo en PDF y la sincronización con **FieldOps Gen Pro™**.

---

## 2. Modificaciones Requeridas en `C:\Users\hogar\Desktop\Mosbi systems\index.html`

### 2.1. Botón Principal en el Hero (`#hero`, líneas ~175-180)
Actualizar el enlace principal del Hero para que lleve directamente a la experiencia interactiva completa `machid/index.html` (o añadir acceso directo a la demo):

```html
<!-- En index.html (Sección #hero) -->
<div class="hero-cta-wrapper reveal">
  <a href="machid/index.html" class="btn btn-primary btn-glow">
    <span data-i18n="hero.cta_explore">Explore MachId™ Machine Identifier AI</span>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </a>
  <a href="#contact" class="btn btn-secondary">
    <span data-i18n="hero.cta_demo">Request Technical Demo</span>
  </a>
  <button class="btn btn-ghost" id="quickCopyEmail" data-copy="info@mosbisystems.com">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    <span data-i18n="hero.cta_copy">Copy info@mosbisystems.com</span>
  </button>
</div>
```

### 2.2. Botón de Lanzamiento en la Sección `#product` (`MachId™ Machine Identifier AI`, líneas ~733-742)
Reemplazar el bloque `.benefits-cta-box` dentro de `#product` para que tenga exactamente la misma jerarquía visual de doble botón que `#fieldops` (`Explore MachId™ Interactive Demo` + `Request Enterprise Pilot`):

```html
<!-- En index.html (Sección #product -> .benefits-cta-box) -->
<div class="benefits-cta-box">
  <div class="cta-callout" style="display:flex;flex-direction:column;gap:10px;">
    <span data-i18n="prod.cta_ready">Ready to deploy MachId™ Machine Identifier AI?</span>
    <a href="machid/index.html" class="btn btn-primary btn-block">
      <span data-i18n="prod.cta_interactive">Launch Interactive Demo & Simulator (v2.0)</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
    <a href="#contact" class="btn btn-outline btn-block">
      <span data-i18n="prod.cta_btn">Request Enterprise Pilot</span>
    </a>
  </div>
</div>
```

### 2.3. Enlace en el Encabezado de `#product` (Opcional recomendado)
Hacer que el título `<h2 class="flagship-heading">` en `#product` también sea clicable hacia `machid/index.html`:

```html
<h2 class="flagship-heading">
  <a href="machid/index.html" style="color:inherit;text-decoration:none;">
    <span data-i18n="prod.title">MachId™ Machine Identifier AI</span>
  </a>
</h2>
```

---

## 3. Claves de Traducción para `C:\Users\hogar\Desktop\Mosbi systems\assets\js\translations.js`

Añadir la clave `"prod.cta_interactive"` en los 3 diccionarios (`en`, `es`, `fr`) de `assets/js/translations.js` e incrementar el parámetro de caché en `index.html` (`translations.js?v=8`):

```javascript
// En TRANSLATIONS.en:
"prod.cta_interactive": "Launch Interactive MachId™ Simulator (v2.0)",

// En TRANSLATIONS.es:
"prod.cta_interactive": "Abrir Simulador Interactivo de MachId™ (v2.0)",

// En TRANSLATIONS.fr:
"prod.cta_interactive": "Lancer le Simulateur Interactif MachId™ (v2.0)",
```

---

## 4. Arquitectura de la Landing Page de Demostración (`C:\Users\hogar\Desktop\Mosbi systems\machid\`)

La carpeta `C:\Users\hogar\Desktop\Mosbi systems\machid\` contiene una experiencia web autónoma, ultrarrápida y multi-idioma (**ES / EN / FR**) compuesta por:

- `machid/index.html` — Estructura semántica con simulador interactivo de 3 pasos, selector de los 4 modos v2.0, visor de PDF ejecutivo imprimible en 1 página y puente de exportación a FieldOps Gen Pro™.
- `machid/styles.css` — Diseño Industrial Dark & Amber/Teal (`#050917`, `#1E4D5C`, `#C84B0F`) con animaciones CSS3 de obturador de cámara, barrido láser forense, *bounding boxes* dinámicos, línea de tiempo de inferencia IA y reglas `@media print` de página única.
- `machid/app.js` — Motor interactivo del simulador paso a paso, base de datos de casos reales en 3 idiomas (**ES / EN / FR**), animador de telemetría Gemini 3.6 Flash + Google Search Grounding, calculadora de ROI y generador de payload JSON para `FieldOpsMachineAdapter`.
- `machid/assets/` — Ícono oficial (`app_icon.png`) y fotografías reales de inspección en campo (`horizontal_baler_1.jpg`, `horizontal_baler_2.jpg`, `horizontal_baler_3.jpg`).

### 4.1. Flujo Animado del Simulador ("Cómo Funciona MachId™ en 3 Pasos")

El visitante puede ejecutar el recorrido guiado completo o saltar entre pasos con animaciones en vivo:

1. **PASO 1 — Selección de Modo v2.0 y Captura Fotográfica Guiada:**
   - El usuario elige uno de los **4 Modos Operativos de MachId™ v2.0**:
     1. **`🔗 Sistema Distribuido (Multi-Nodo)` — Caso Real Destacado:** Compactadora / Enfardadora Hidráulica Horizontal **Model 72 Closed End Baler** con transportador continuo in-feed (usando las 3 fotografías reales `horizontal_baler_1.jpg`, `horizontal_baler_2.jpg`, `horizontal_baler_3.jpg` con etiquetas `[NODO 1: Rampa In-Feed y Fosa]`, `[NODO 2: Cámara y Puerta Closed-End]`, `[NODO 3: Unidad Hidráulica y Gabinete NEMA]`).
     2. **`🏭 Máquina Completa`:** Compactadora / Enfardadora Horizontal **Model 72 Closed End Baler** con cámara de 72 pulgadas, ranuras pasahilos de amarre y cilindro hidráulico de compuerta.
     3. **`⚙️ Componente / Repuesto (Cross-Ref OEM)`:** Bomba Triplex de Alta Presión **Cat Pumps 5CP2120W** con tabla de equivalencias Aftermarket (Parker, Grainger, McMaster-Carr, SKF).
     4. **`📊 Auditoría Financiera & CAPEX`:** Dictamen de Valoración y Retorno de Inversión sobre **Model 72 Closed End Baler** con comparativa CAPEX de reemplazo nuevo ($75,000 USD) vs. Overhaul integral ($14,200 USD, 81% de ahorro).
   - Animación interactiva de captura: al hacer clic en cada tarjeta de ángulo fotográfico o en **"Simular Captura y Escaneo IA"**, se activa el flash de cámara, se marcan las fotos con su rol y etiqueta de nodo, y avanza al Paso 2.

2. **PASO 2 — Escaneo Forense IA Multimodal en Vivo (Animación):**
   - Barrido láser óptico sobre la imagen real / esquema técnico del activo.
   - Aparición progresiva de *Bounding Boxes* forenses detectando geometría estructural, ignorando el color de pintura superficial (*Regla Forense Crítica*), leyendo placas OCR o aislando nodos mecánicos/eléctricos.
   - Consola de telemetría animada paso a paso (`0% → 100%`):
     - `[01] Preprocesando tomas multi-ángulo y metadatos de nodo...`
     - `[02] Aplicando Regla Forense: ignorando pintura epóxica superficial, aislando geometría 3D...`
     - `[03] Ejecutando inferencia multimodal en Gemini 3.6 Flash + Google Search Grounding...`
     - `[04] Cruzando catálogos OEM, equivalencias de repuestos y métricas CAPEX...`
     - `[05] Generando Ficha Técnica Estructurada v2.0 y Dossier PDF...`

3. **PASO 3 — Ficha Técnica Estructurada v2.0, PDF Ejecutivo y Puente FieldOps Gen Pro™:**
   - Despliegue animado del dictamen completo con:
     - Nivel de confianza, método forense y insignia de condición de mercado (`Activa`, `Soporte Limitado`, `Descontinuada`).
     - Tabla de especificaciones nominales verificadas.
     - **Sección dinámica v2.0 según el modo:**
       - Desglose de Topología **Multi-Nodo** (`DistributedNodeAnalysis`) con hallazgos por nodo y diagnóstico de conectividad.
       - Tabla de **Cross-Reference OEM & Aftermarket** (`ComponentCrossReferenceInfo`) con números de parte equivalentes y proveedores.
       - Dictamen de **Auditoría Financiera & CAPEX** (`FinancialAuditInfo`) con vida útil remanente, costo de reemplazo nuevo, valor en condición actual, costo de overhaul y veredicto (`REEMPLAZAR` / `REPARAR`).
   - **Acciones en 1 Clic:**
     - **Ver / Imprimir Dossier Ejecutivo PDF (10 Secciones en 1 Página)** (`window.print()` optimizado).
     - **Exportar a FieldOps Gen Pro™ (`FieldOpsMachineAdapter`)**: Muestra en un modal interactivo el JSON exacto que viaja a FieldOps Gen Pro™ (Activo + Findings de Mantenimiento respetando la regla `SC ≠ WO`) con enlace directo a `../fieldops-gen-pro/index.html`.

---

## 5. Lista de Verificación para cuando se aplique en `Mosbi systems`

- [x] Verificar que la carpeta `machid/` (`index.html`, `styles.css`, `app.js`, `assets/`) esté presente en `C:\Users\hogar\Desktop\Mosbi systems\machid\`.
- [x] Aplicar los cambios de la **Sección 2** en `C:\Users\hogar\Desktop\Mosbi systems\index.html`.
- [x] Añadir la clave `"prod.cta_interactive"` de la **Sección 3** en `C:\Users\hogar\Desktop\Mosbi systems\assets\js\translations.js` (EN, ES, FR).
- [x] Probar en navegador haciendo clic en el botón de **MachId™ Machine Identifier AI** desde `index.html` y verificar la navegación hacia `machid/index.html` y de regreso (`← MOSBI Systems`).
- [ ] Hacer commit y push en el repositorio de `Mosbi systems`.
