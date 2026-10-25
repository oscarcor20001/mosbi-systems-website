/**
 * MOSBI SYSTEMS - IMPECCABLE INTERACTIVITY & SCRIPT SUITE
 * World-Class UI Logic, Canvas Physics, Scanner Simulation & ROI Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initNeuralCanvas();
  initSpotlightEffect();
  initLanguageSelector();
  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initMetricCounters();
  initMachineScanner();
  initIndustryTabs();
  initRoiCalculator();
  initClipboardSystem();
  initChannelSelection();
  initContactForm();
});

/* ==========================================================================
   1. Interactive Neural Particles & Constellation Canvas
   ========================================================================== */
function initNeuralCanvas() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 45;
  let mouse = { x: null, y: null, radius: 140 };

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.8 + 0.8;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse repulsion/attraction physics
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  const connectParticles = () => {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 130) {
          const opacity = (1 - distance / 130) * 0.22;
          ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    requestAnimationFrame(animate);
  };

  animate();
}

/* ==========================================================================
   2. Spotlight Hover Tracker for Bento & Feature Cards
   ========================================================================== */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.spotlight-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   3. Header Navigation Scroll & Sticky Elevation
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
}

/* ==========================================================================
   4. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-item');

  if (!toggleBtn || !navMenu) return;

  const toggle = () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggle);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggle();
      }
    });
  });
}

/* ==========================================================================
   5. Reveal on Scroll Observer
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }
}

/* ==========================================================================
   6. Animated Metric Counters
   ========================================================================== */
function initMetricCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  let hasAnimated = false;

  const animate = () => {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 1800;
      const startTime = performance.now();

      const update = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = target * ease;

        counter.innerText = isDecimal ? current.toFixed(1) : Math.floor(current);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.innerText = isDecimal ? target.toFixed(1) : target;
        }
      };

      requestAnimationFrame(update);
    });
  };

  const strip = document.querySelector('.metrics-strip');
  if (strip) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true;
        animate();
      }
    }, { threshold: 0.3 });

    observer.observe(strip);
  }
}

/* ==========================================================================
   7. Machine Identifier AI™ Forensic Showcase Engine (Multimodal Gemini AI)
   ========================================================================== */

const MACHINE_IDENTIFIER_DATABASE = {
  en: {
    goulds: {
      brand: "ITT Goulds Pumps",
      model: "3196 ANSI i-FRAME",
      category: "Centrifugal Chemical Process Pump",
      condition: "active",
      conditionBadge: "● Active (OEM Supported)",
      conditionDesc: "Continuous production model. Full OEM inventory for genuine impellers, bearings, and mechanical seals.",
      method: "3D Silhouette Morphology (Repainted)",
      methodCode: "METH: SILHOUETTE-3D",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "94.8%",
      evidence: "Metallic nameplate corroded and fully illegible under epoxy paint layers. Positive forensic match achieved via 3D silhouette: ANSI B73.1 flange spacing, volute curvature, and patented i-FRAME power end casing.",
      specs: {
        power: "30 kW (40 HP suggested)",
        pressure: "160 m (525 ft Head)",
        flow: "1,020 m³/h (4,500 GPM)",
        voltage: "460V / 3Ph / 60Hz",
        weight: "ANSI Group II • 385 kg",
        year: "2018 - 2022"
      },
      oem: "ITT Goulds Pumps",
      oemUrl: "https://www.gouldspumps.com",
      manual: "Goulds 3196 Installation & Maintenance [PDF]",
      serial: "SN-ITT-ANSI-4412-B",
      assetTag: "PUMP-GLD-3196-01",
      notes: "Inspection completed during routine route. Impeller wear within nominal limits. Standard mechanical seal flush plan 11 verified.",
      slots: [
        { name: "3D Silhouette", code: "SLOT: ISO-3D", box1: { label: "3D Morphology • ANSI Volute", top: "18%", left: "15%", width: "52%", height: "64%" }, box2: { label: "Discharge Flange • PASS", top: "12%", left: "44%", width: "22%", height: "28%" } },
        { name: "Nameplate OCR", code: "SLOT: OCR-PLATE", box1: { label: "Corroded Plate • Heavy Paint", top: "45%", left: "26%", width: "38%", height: "30%" }, box2: { label: "Rule: Paint Color Discarded", top: "52%", left: "28%", width: "34%", height: "16%" } },
        { name: "Control Panel", code: "SLOT: SENSORS", box1: { label: "i-ALERT2 Vibration Sensor", top: "35%", left: "55%", width: "24%", height: "26%" }, box2: { label: "Bluetooth Beacon • ACTIVE", top: "38%", left: "56%", width: "22%", height: "18%" } },
        { name: "Connections", code: "SLOT: FLANGES", box1: { label: "Suction Nozzle ANSI 150#", top: "38%", left: "8%", width: "24%", height: "42%" }, box2: { label: "Seal Chamber Port • OK", top: "24%", left: "45%", width: "16%", height: "20%" } }
      ]
    },
    atlas: {
      brand: "Atlas Copco",
      model: "GA 55 VSD",
      category: "Rotary Screw Air Compressor with VSD",
      condition: "active",
      conditionBadge: "● Active (OEM Supported)",
      conditionDesc: "GA VSD series in active mass production. Immediate factory availability of air filters, separators, and inverter drives.",
      method: "Nameplate Reading (Direct OCR)",
      methodCode: "METH: NAMEPLATE-OCR",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "99.2%",
      evidence: "Rear metallic nameplate 100% legible. Serial and model verified against Atlas Copco global technical catalog. Cyclonic oil separator matched.",
      specs: {
        power: "55 kW (75 HP)",
        pressure: "13 bar (188 psi)",
        flow: "8.5 m³/min @ 7 bar",
        voltage: "460V / 3Ph / 60Hz",
        weight: "1,050 kg • 1850x1000x1650 mm",
        year: "2019 - 2023"
      },
      oem: "Atlas Copco Compressors",
      oemUrl: "https://www.atlascopco.com",
      manual: "GA 55 VSD Instruction Book [PDF]",
      serial: "SN-APX-213456-BE",
      assetTag: "COMP-AC-GA55-04",
      notes: "Operating parameters nominal. VSD drive modulated between 22 and 55 kW. Oil sampling scheduled in 60 days.",
      slots: [
        { name: "3D Silhouette", code: "SLOT: ISO-3D", box1: { label: "Acoustic Canopy • GA Series", top: "14%", left: "14%", width: "70%", height: "72%" }, box2: { label: "Air Intake Louvers • PASS", top: "25%", left: "62%", width: "18%", height: "48%" } },
        { name: "Nameplate OCR", code: "SLOT: OCR-PLATE", box1: { label: "Stamped Plate • 99.2% OCR", top: "30%", left: "22%", width: "56%", height: "42%" }, box2: { label: "Model: GA 55 VSD", top: "35%", left: "25%", width: "50%", height: "18%" } },
        { name: "Control Panel", code: "SLOT: CONTROLLER", box1: { label: "Elektronikon® Touch UI", top: "20%", left: "24%", width: "32%", height: "34%" }, box2: { label: "Digital HMI • VERIFIED", top: "24%", left: "26%", width: "28%", height: "24%" } },
        { name: "Connections", code: "SLOT: DISCHARGE", box1: { label: "Discharge Line 13 bar", top: "40%", left: "68%", width: "20%", height: "35%" }, box2: { label: "Condensate Drain • PASS", top: "70%", left: "55%", width: "26%", height: "16%" } }
      ]
    },
    siemens: {
      brand: "Siemens",
      model: "SIMOTICS GP 1LE1",
      category: "Heavy 3-Phase Induction Motor (IE3)",
      condition: "limited",
      conditionBadge: "▲ Limited Support (IE3/IE4 Transition)",
      conditionDesc: "Maintenance and spare components guaranteed. Transition to next-generation ultra-efficient IE4 motors recommended for plant renewals.",
      method: "Hybrid Analysis (Partial Tag + Casing)",
      methodCode: "METH: HYBRID-ANALYSIS",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "96.5%",
      evidence: "Partial OCR serial reading on terminal junction box cross-referenced with cooling fin pitch, aluminum housing, and IEC 132M dimensional frame standard.",
      specs: {
        power: "7.5 kW (10 HP)",
        pressure: "1,760 RPM (4-Pole)",
        flow: "IE3 Premium Efficiency 91.7%",
        voltage: "230 / 400V - 460V",
        weight: "Aluminum Frame 132M • 56 kg",
        year: "2016 - 2020"
      },
      oem: "Siemens AG Industry",
      oemUrl: "https://www.siemens.com",
      manual: "SIMOTICS GP 1LE1 Operating Instructions [PDF]",
      serial: "SN-SIE-1LE1001-98",
      assetTag: "MOT-SIE-1LE1-07",
      notes: "Vibration readings within ISO 10816 Class I tolerances. Insulation resistance checked: >100 MOhm.",
      slots: [
        { name: "3D Silhouette", code: "SLOT: ISO-3D", box1: { label: "Ribbed Housing • IEC 132M", top: "20%", left: "18%", width: "62%", height: "58%" }, box2: { label: "Drive Shaft Ø38mm • PASS", top: "36%", left: "74%", width: "16%", height: "28%" } },
        { name: "Nameplate OCR", code: "SLOT: OCR-PLATE", box1: { label: "Partial Plate • Wear Detected", top: "32%", left: "28%", width: "42%", height: "36%" }, box2: { label: "Part: 1LE1001-1CB2", top: "38%", left: "30%", width: "38%", height: "18%" } },
        { name: "Control Panel", code: "SLOT: TERMINAL", box1: { label: "Top Terminal Box IP55", top: "10%", left: "34%", width: "32%", height: "24%" }, box2: { label: "Cable Gland M32 • SEALED", top: "14%", left: "54%", width: "14%", height: "18%" } },
        { name: "Connections", code: "SLOT: FOOTINGS", box1: { label: "B3 Foot Mounting Frame", top: "68%", left: "22%", width: "54%", height: "20%" }, box2: { label: "Earth Ground Lug • SECURE", top: "64%", left: "16%", width: "12%", height: "16%" } }
      ]
    },
    joy: {
      brand: "Joy Manufacturing (Legacy)",
      model: "Twistair TA-025",
      category: "Vintage Rotary Screw Compressor",
      condition: "discontinued",
      conditionBadge: "✕ Discontinued (Obsolescence Risk)",
      conditionDesc: "Discontinued by OEM in 1992. No direct manufacturer rotor supply. Critical operational downtime risk if bearings fail; aftermarket parts required.",
      method: "3D Silhouette Morphology (No Tag)",
      methodCode: "METH: SILHOUETTE-3D",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "93.1%",
      evidence: "Machine fully repainted in generic shop blue (paint color discarded per forensic protocol). Identified by cast iron chassis geometry, dual needle analog pressure gauges, and 1980s Joy air intake valve.",
      specs: {
        power: "18.5 kW (25 HP)",
        pressure: "7 bar (100 psi)",
        flow: "2.8 m³/min (100 CFM)",
        voltage: "230 / 460V / 3Ph",
        weight: "Heavy Cast Iron • 720 kg",
        year: "1985 - 1989"
      },
      oem: "Joy Mfg (Cooper / Gardner Denver)",
      oemUrl: "https://www.gardnerdenver.com",
      manual: "Historical Joy Twistair Archive Manual [PDF]",
      serial: "SN-JOY-TA25-0914 (Estimated)",
      assetTag: "COMP-JOY-TA25-LEGACY",
      notes: "WARNING: High obsolescence risk. Recommend budgeting unit replacement with modern VSD compressor before winter peak demand.",
      slots: [
        { name: "3D Silhouette", code: "SLOT: ISO-3D", box1: { label: "Vintage 1980s Cast Chassis", top: "16%", left: "15%", width: "68%", height: "66%" }, box2: { label: "Cast Iron Base • RIGID", top: "60%", left: "18%", width: "62%", height: "24%" } },
        { name: "Nameplate OCR", code: "SLOT: OCR-PLATE", box1: { label: "Plate Missing / Sanded Off", top: "35%", left: "30%", width: "38%", height: "28%" }, box2: { label: "Forensic Mode B Triggered", top: "40%", left: "32%", width: "34%", height: "16%" } },
        { name: "Control Panel", code: "SLOT: GAUGES", box1: { label: "Dual Analog Dial Gauges", top: "22%", left: "48%", width: "28%", height: "30%" }, box2: { label: "Electromechanical Relays", top: "25%", left: "50%", width: "24%", height: "22%" } },
        { name: "Connections", code: "SLOT: PIPING", box1: { label: "Heavy Threaded NPT Piping", top: "34%", left: "12%", width: "22%", height: "40%" }, box2: { label: "Legacy Check Valve • WORN", top: "42%", left: "15%", width: "18%", height: "24%" } }
      ]
    }
  },
  es: {
    goulds: {
      brand: "ITT Goulds Pumps",
      model: "3196 ANSI i-FRAME",
      category: "Bomba Centrífuga de Proceso Químico",
      condition: "active",
      conditionBadge: "● Activa (Soporte Oficial OEM)",
      conditionDesc: "Modelo en producción continua activa. Disponibilidad inmediata de repuestos originales, rodamientos, impulsores y sellos mecánicos.",
      method: "Silueta Morfológica 3D (Repintada)",
      methodCode: "METH: SILUETA-3D",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "94.8%",
      evidence: "Placa metálica corroída e ilegible por capas sucesivas de pintura epóxica. Identificación positiva lograda mediante análisis de silueta 3D: dimensiones de bridas ANSI B73.1, curvatura de voluta y cámara de sellado i-FRAME.",
      specs: {
        power: "30 kW (40 HP sugerida)",
        pressure: "160 m (525 ft Altura)",
        flow: "1,020 m³/h (4,500 GPM)",
        voltage: "460V / 3F / 60Hz",
        weight: "ANSI Grupo II • 385 kg",
        year: "2018 - 2022"
      },
      oem: "ITT Goulds Pumps",
      oemUrl: "https://www.gouldspumps.com",
      manual: "Manual Instalación y Mantenimiento Goulds 3196 [PDF]",
      serial: "SN-ITT-ANSI-4412-B",
      assetTag: "PUMP-GLD-3196-01",
      notes: "Inspección completada durante recorrido preventivo. Desgaste del impulsor dentro de tolerancias. Plan de sellado mecánico 11 verificado.",
      slots: [
        { name: "Silueta 3D", code: "SLOT: ISO-3D", box1: { label: "Morfología 3D • Voluta ANSI", top: "18%", left: "15%", width: "52%", height: "64%" }, box2: { label: "Brida Descarga • PASS", top: "12%", left: "44%", width: "22%", height: "28%" } },
        { name: "Placa de Datos", code: "SLOT: PLACA-OCR", box1: { label: "Placa Corroída • Pintura Epóxica", top: "45%", left: "26%", width: "38%", height: "30%" }, box2: { label: "Regla: Color descartado", top: "52%", left: "28%", width: "34%", height: "16%" } },
        { name: "Panel de Control", code: "SLOT: SENSORES", box1: { label: "Sensor Vibración i-ALERT2", top: "35%", left: "55%", width: "24%", height: "26%" }, box2: { label: "Transmisor Bluetooth • ACTIVO", top: "38%", left: "56%", width: "22%", height: "18%" } },
        { name: "Conexiones", code: "SLOT: BRIDAS", box1: { label: "Brida Succión ANSI 150#", top: "38%", left: "8%", width: "24%", height: "42%" }, box2: { label: "Cámara de Sellado • OK", top: "24%", left: "45%", width: "16%", height: "20%" } }
      ]
    },
    atlas: {
      brand: "Atlas Copco",
      model: "GA 55 VSD",
      category: "Compresor Rotativo de Tornillo con VSD",
      condition: "active",
      conditionBadge: "● Activa (Soporte Oficial OEM)",
      conditionDesc: "Gama GA VSD en producción masiva activa. Disponibilidad inmediata en fábrica de filtros de aceite, separadores y variador de frecuencia.",
      method: "Lectura de Placa (OCR Directo)",
      methodCode: "METH: LECTURA-PLACA-OCR",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "99.2%",
      evidence: "Placa metálica posterior 100% legible. Serial y modelo confirmados contra catálogo de repuestos oficial Atlas Copco. Separador de aceite ciclónico verificado.",
      specs: {
        power: "55 kW (75 HP)",
        pressure: "13 bar (188 psi)",
        flow: "8.5 m³/min @ 7 bar",
        voltage: "460V / 3F / 60Hz",
        weight: "1,050 kg • 1850x1000x1650 mm",
        year: "2019 - 2023"
      },
      oem: "Atlas Copco Compressors",
      oemUrl: "https://www.atlascopco.com",
      manual: "Manual de Instrucciones GA 55 VSD [PDF]",
      serial: "SN-APX-213456-BE",
      assetTag: "COMP-AC-GA55-04",
      notes: "Parámetros de operación nominales. Modulación de potencia VSD activa entre 22 y 55 kW. Muestreo de aceite programado en 60 días.",
      slots: [
        { name: "Silueta 3D", code: "SLOT: ISO-3D", box1: { label: "Cabina Insonorizada • GA", top: "14%", left: "14%", width: "70%", height: "72%" }, box2: { label: "Aspiración Aire • PASS", top: "25%", left: "62%", width: "18%", height: "48%" } },
        { name: "Placa de Datos", code: "SLOT: PLACA-OCR", box1: { label: "Placa Estampada • 99.2% OCR", top: "30%", left: "22%", width: "56%", height: "42%" }, box2: { label: "Modelo: GA 55 VSD", top: "35%", left: "25%", width: "50%", height: "18%" } },
        { name: "Panel de Control", code: "SLOT: CONTROLADOR", box1: { label: "Controlador Elektronikon® Touch", top: "20%", left: "24%", width: "32%", height: "34%" }, box2: { label: "HMI Digital • VERIFICADA", top: "24%", left: "26%", width: "28%", height: "24%" } },
        { name: "Conexiones", code: "SLOT: DESCARGA", box1: { label: "Línea Descarga 13 bar", top: "40%", left: "68%", width: "20%", height: "35%" }, box2: { label: "Purga Condensados • PASS", top: "70%", left: "55%", width: "26%", height: "16%" } }
      ]
    },
    siemens: {
      brand: "Siemens",
      model: "SIMOTICS GP 1LE1",
      category: "Motor de Inducción Trifásico (IE3)",
      condition: "limited",
      conditionBadge: "▲ Soporte Limitado (Transición IE3/IE4)",
      conditionDesc: "Mantenimiento y refacciones vigentes. Se recomienda considerar migración paulatina a gama IE4 en renovaciones de planta.",
      method: "Análisis Híbrido (Placa Parcial + Silueta)",
      methodCode: "METH: ANALISIS-HIBRIDO",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "96.5%",
      evidence: "Lectura parcial en caja de bornes cruzada con el espaciado de aletas axiales de disipación de calor de aluminio y geometría de patas según norma IEC 132M.",
      specs: {
        power: "7.5 kW (10 HP)",
        pressure: "1,760 RPM (4 Polos)",
        flow: "Eficiencia Premium IE3 91.7%",
        voltage: "230 / 400V - 460V",
        weight: "Bastidor Aluminio 132M • 56 kg",
        year: "2016 - 2020"
      },
      oem: "Siemens AG Industry",
      oemUrl: "https://www.siemens.com",
      manual: "Instrucciones de Servicio SIMOTICS GP 1LE1 [PDF]",
      serial: "SN-SIE-1LE1001-98",
      assetTag: "MOT-SIE-1LE1-07",
      notes: "Niveles de vibración dentro de ISO 10816 Clase I. Resistencia de aislamiento probada: >100 MOhm.",
      slots: [
        { name: "Silueta 3D", code: "SLOT: ISO-3D", box1: { label: "Carcasa Nervada • IEC 132M", top: "20%", left: "18%", width: "62%", height: "58%" }, box2: { label: "Eje Impulsor Ø38mm • PASS", top: "36%", left: "74%", width: "16%", height: "28%" } },
        { name: "Placa de Datos", code: "SLOT: PLACA-OCR", box1: { label: "Placa Parcial • Desgaste", top: "32%", left: "28%", width: "42%", height: "36%" }, box2: { label: "Código: 1LE1001-1CB2", top: "38%", left: "30%", width: "38%", height: "18%" } },
        { name: "Panel de Control", code: "SLOT: BORNES", box1: { label: "Caja de Bornes Superior IP55", top: "10%", left: "34%", width: "32%", height: "24%" }, box2: { label: "Prensaestopas M32 • SELLADO", top: "14%", left: "54%", width: "14%", height: "18%" } },
        { name: "Conexiones", code: "SLOT: PATAS", box1: { label: "Anclaje de Patas B3", top: "68%", left: "22%", width: "54%", height: "20%" }, box2: { label: "Tierra Física • SEGURA", top: "64%", left: "16%", width: "12%", height: "16%" } }
      ]
    },
    joy: {
      brand: "Joy Manufacturing (Legacy)",
      model: "Twistair TA-025",
      category: "Compresor de Tornillo Rotativo Antiguo",
      condition: "discontinued",
      conditionBadge: "✕ Descontinuada (Riesgo de Obsolescencia)",
      conditionDesc: "Descontinuado por el fabricante en 1992. No hay suministro directo de rotores OEM. Alto riesgo de parada no planificada por rotura de cojinetes.",
      method: "Silueta Morfológica 3D (Sin Placa)",
      methodCode: "METH: SILUETA-3D",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "93.1%",
      evidence: "Equipo repintado íntegramente en azul de taller (color descartado por protocolo forense). Identificado por morfología del bastidor de fundición, manómetros analógicos y válvula de admisión Joy de los años 80.",
      specs: {
        power: "18.5 kW (25 HP)",
        pressure: "7 bar (100 psi)",
        flow: "2.8 m³/min (100 CFM)",
        voltage: "230 / 460V / 3F",
        weight: "Hierro Fundido • 720 kg",
        year: "1985 - 1989"
      },
      oem: "Joy Mfg (Cooper / Gardner Denver)",
      oemUrl: "https://www.gardnerdenver.com",
      manual: "Archivo Histórico Joy Twistair [PDF]",
      serial: "SN-JOY-TA25-0914 (Estimado)",
      assetTag: "COMP-JOY-TA25-LEGACY",
      notes: "ALERTA: Alto riesgo de obsolescencia. Se aconseja presupuestar reemplazo por equipo VSD moderno antes del pico productivo invernal.",
      slots: [
        { name: "Silueta 3D", code: "SLOT: ISO-3D", box1: { label: "Bastidor Vintage Años 80", top: "16%", left: "15%", width: "68%", height: "66%" }, box2: { label: "Base Hierro Fundido • RÍGIDA", top: "60%", left: "18%", width: "62%", height: "24%" } },
        { name: "Placa de Datos", code: "SLOT: PLACA-OCR", box1: { label: "Placa Ausente / Lijada", top: "35%", left: "30%", width: "38%", height: "28%" }, box2: { label: "Modo B Forense Activado", top: "40%", left: "32%", width: "34%", height: "16%" } },
        { name: "Panel de Control", code: "SLOT: RELOJES", box1: { label: "Manómetros de Aguja Duales", top: "22%", left: "48%", width: "28%", height: "30%" }, box2: { label: "Relés Electromecánicos", top: "25%", left: "50%", width: "24%", height: "22%" } },
        { name: "Conexiones", code: "SLOT: TUBERIA", box1: { label: "Tubería Roscada NPT", top: "34%", left: "12%", width: "22%", height: "40%" }, box2: { label: "Válvula Retención • DESGASTE", top: "42%", left: "15%", width: "18%", height: "24%" } }
      ]
    }
  },
  fr: {
    goulds: {
      brand: "ITT Goulds Pumps",
      model: "3196 ANSI i-FRAME",
      category: "Pompe Centrifuge de Procédé Chimique",
      condition: "active",
      conditionBadge: "● Active (Support Officiel OEM)",
      conditionDesc: "Modèle en production active continue. Disponibilité immédiate des pièces d'origine, roulements et garnitures mécaniques.",
      method: "Morphologie Silhouette 3D (Repeinte)",
      methodCode: "METH: SILHOUETTE-3D",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "94.8%",
      evidence: "Plaque métallique corrodée et illisible sous plusieurs couches de peinture époxy. Identification formelle par silhouette 3D: entraxe des brides ANSI B73.1, volute et palier i-FRAME.",
      specs: {
        power: "30 kW (40 HP suggérée)",
        pressure: "160 m (525 ft HMT)",
        flow: "1 020 m³/h (4 500 GPM)",
        voltage: "460V / 3Ph / 60Hz",
        weight: "ANSI Groupe II • 385 kg",
        year: "2018 - 2022"
      },
      oem: "ITT Goulds Pumps",
      oemUrl: "https://www.gouldspumps.com",
      manual: "Manuel Installation et Maintenance Goulds 3196 [PDF]",
      serial: "SN-ITT-ANSI-4412-B",
      assetTag: "PUMP-GLD-3196-01",
      notes: "Inspection effectuée en tournée préventive. Usure de la roue dans les tolérances. Plan de rinçage garniture 11 vérifié.",
      slots: [
        { name: "Silhouette 3D", code: "SLOT: ISO-3D", box1: { label: "Morphologie 3D • Volute ANSI", top: "18%", left: "15%", width: "52%", height: "64%" }, box2: { label: "Bride Refoulement • PASS", top: "12%", left: "44%", width: "22%", height: "28%" } },
        { name: "Plaque Données", code: "SLOT: PLAQUE-OCR", box1: { label: "Plaque Corrodée • Peinture", top: "45%", left: "26%", width: "38%", height: "30%" }, box2: { label: "Règle: Couleur ignorée", top: "52%", left: "28%", width: "34%", height: "16%" } },
        { name: "Panneau Contrôle", code: "SLOT: CAPTEURS", box1: { label: "Capteur Vibration i-ALERT2", top: "35%", left: "55%", width: "24%", height: "26%" }, box2: { label: "Balise Bluetooth • ACTIVE", top: "38%", left: "56%", width: "22%", height: "18%" } },
        { name: "Connexions", code: "SLOT: BRIDES", box1: { label: "Bride Aspiration ANSI 150#", top: "38%", left: "8%", width: "24%", height: "42%" }, box2: { label: "Chambre Garniture • OK", top: "24%", left: "45%", width: "16%", height: "20%" } }
      ]
    },
    atlas: {
      brand: "Atlas Copco",
      model: "GA 55 VSD",
      category: "Compresseur à Vis Rotatif avec VSD",
      condition: "active",
      conditionBadge: "● Active (Support Officiel OEM)",
      conditionDesc: "Gamme GA VSD en production active. Disponibilité immédiate en usine des filtres, séparateurs et variateurs.",
      method: "Lecture de Plaque (OCR Direct)",
      methodCode: "METH: LECTURE-PLAQUE-OCR",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "99.2%",
      evidence: "Plaque métallique arrière lisible à 100%. Numéro de série et modèle vérifiés sur le catalogue officiel. Séparateur d'huile cyclonique validé.",
      specs: {
        power: "55 kW (75 HP)",
        pressure: "13 bar (188 psi)",
        flow: "8.5 m³/min @ 7 bar",
        voltage: "460V / 3Ph / 60Hz",
        weight: "1 050 kg • 1850x1000x1650 mm",
        year: "2019 - 2023"
      },
      oem: "Atlas Copco Compressors",
      oemUrl: "https://www.atlascopco.com",
      manual: "Manuel d'Instruction GA 55 VSD [PDF]",
      serial: "SN-APX-213456-BE",
      assetTag: "COMP-AC-GA55-04",
      notes: "Paramètres de fonctionnement nominaux. Modulation VSD active entre 22 et 55 kW. Analyse d'huile prévue sous 60 jours.",
      slots: [
        { name: "Silhouette 3D", code: "SLOT: ISO-3D", box1: { label: "Capot Insonorisé • Série GA", top: "14%", left: "14%", width: "70%", height: "72%" }, box2: { label: "Grille Aspiration • PASS", top: "25%", left: "62%", width: "18%", height: "48%" } },
        { name: "Plaque Données", code: "SLOT: PLAQUE-OCR", box1: { label: "Plaque Estampée • 99.2% OCR", top: "30%", left: "22%", width: "56%", height: "42%" }, box2: { label: "Modèle: GA 55 VSD", top: "35%", left: "25%", width: "50%", height: "18%" } },
        { name: "Panneau Contrôle", code: "SLOT: CONTROLEUR", box1: { label: "Contrôleur Elektronikon® Touch", top: "20%", left: "24%", width: "32%", height: "34%" }, box2: { label: "HMI Numérique • VALIDÉE", top: "24%", left: "26%", width: "28%", height: "24%" } },
        { name: "Connexions", code: "SLOT: REFOULEMENT", box1: { label: "Conduite Refoulement 13 bar", top: "40%", left: "68%", width: "20%", height: "35%" }, box2: { label: "Purge Condensats • PASS", top: "70%", left: "55%", width: "26%", height: "16%" } }
      ]
    },
    siemens: {
      brand: "Siemens",
      model: "SIMOTICS GP 1LE1",
      category: "Moteur à Induction Triphasé (IE3)",
      condition: "limited",
      conditionBadge: "▲ Support Limité (Transition IE3/IE4)",
      conditionDesc: "Maintenance et pièces courantes garanties. Transition vers moteurs IE4 recommandée lors des rénovations d'usines.",
      method: "Analyse Hybride (Plaque Partielle + Châssis)",
      methodCode: "METH: ANALYSE-HYBRIDE",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "96.5%",
      evidence: "Lecture OCR partielle dans la boîte à bornes combinée au pas d'ailettes de refroidissement en aluminium et norme de carcasse IEC 132M.",
      specs: {
        power: "7.5 kW (10 HP)",
        pressure: "1 760 tr/min (4 Pôles)",
        flow: "Rendement Premium IE3 91.7%",
        voltage: "230 / 400V - 460V",
        weight: "Châssis Alu 132M • 56 kg",
        year: "2016 - 2020"
      },
      oem: "Siemens AG Industry",
      oemUrl: "https://www.siemens.com",
      manual: "Instructions de Service SIMOTICS 1LE1 [PDF]",
      serial: "SN-SIE-1LE1001-98",
      assetTag: "MOT-SIE-1LE1-07",
      notes: "Niveaux de vibration conformes ISO 10816 Classe I. Résistance d'isolement validée : >100 MOhm.",
      slots: [
        { name: "Silhouette 3D", code: "SLOT: ISO-3D", box1: { label: "Carcasse Nervurée • IEC 132M", top: "20%", left: "18%", width: "62%", height: "58%" }, box2: { label: "Arbre Moteur Ø38mm • PASS", top: "36%", left: "74%", width: "16%", height: "28%" } },
        { name: "Plaque Données", code: "SLOT: PLAQUE-OCR", box1: { label: "Plaque Partielle • Usure", top: "32%", left: "28%", width: "42%", height: "36%" }, box2: { label: "Réf: 1LE1001-1CB2", top: "38%", left: "30%", width: "38%", height: "18%" } },
        { name: "Panneau Contrôle", code: "SLOT: BORNES", box1: { label: "Boîte à Bornes Supérieure IP55", top: "10%", left: "34%", width: "32%", height: "24%" }, box2: { label: "Presse-étoupe M32 • ÉTANCHE", top: "14%", left: "54%", width: "14%", height: "18%" } },
        { name: "Connexions", code: "SLOT: PATTES", box1: { label: "Fixation Pattes B3", top: "68%", left: "22%", width: "54%", height: "20%" }, box2: { label: "Borne Terre • CONFORME", top: "64%", left: "16%", width: "12%", height: "16%" } }
      ]
    },
    joy: {
      brand: "Joy Manufacturing (Legacy)",
      model: "Twistair TA-025",
      category: "Compresseur à Vis Rétro (Obsolète)",
      condition: "discontinued",
      conditionBadge: "✕ Obsolète (Risque d'Arrêt Critique)",
      conditionDesc: "Arrêté par le fabricant en 1992. Plus d'approvisionnement officiel des rotors. Risque élevé d'arrêt prolongé en cas d'avarie mécanique.",
      method: "Morphologie Silhouette 3D (Sans Plaque)",
      methodCode: "METH: SILHOUETTE-3D",
      engine: "Gemini 2.5 Flash + Search Grounding",
      confidence: "93.1%",
      evidence: "Machine entièrement repeinte en bleu d'atelier (couleur ignorée par règle forensique). Identifiée par la géométrie du bâti en fonte, les manomètres analogiques et la vanne d'admission Joy des années 80.",
      specs: {
        power: "18.5 kW (25 HP)",
        pressure: "7 bar (100 psi)",
        flow: "2.8 m³/min (100 CFM)",
        voltage: "230 / 460V / 3Ph",
        weight: "Fonte Massive • 720 kg",
        year: "1985 - 1989"
      },
      oem: "Joy Mfg (Cooper / Gardner Denver)",
      oemUrl: "https://www.gardnerdenver.com",
      manual: "Archives Historiques Joy Twistair [PDF]",
      serial: "SN-JOY-TA25-0914 (Estimé)",
      assetTag: "COMP-JOY-TA25-LEGACY",
      notes: "ATTENTION: Risque majeur d'obsolescence. Remplacement par unité moderne à vitesse variable vivement recommandé avant pic de production.",
      slots: [
        { name: "Silhouette 3D", code: "SLOT: ISO-3D", box1: { label: "Bâti Vintage Années 80", top: "16%", left: "15%", width: "68%", height: "66%" }, box2: { label: "Socle Fonte Massive • RIGIDE", top: "60%", left: "18%", width: "62%", height: "24%" } },
        { name: "Plaque Données", code: "SLOT: PLAQUE-OCR", box1: { label: "Plaque Absente / Poncée", top: "35%", left: "30%", width: "38%", height: "28%" }, box2: { label: "Mode B Forensique Actif", top: "40%", left: "32%", width: "34%", height: "16%" } },
        { name: "Panneau Contrôle", code: "SLOT: MANOMETRES", box1: { label: "Manomètres Analogiques Doubles", top: "22%", left: "48%", width: "28%", height: "30%" }, box2: { label: "Relais Électromécaniques", top: "25%", left: "50%", width: "24%", height: "22%" } },
        { name: "Connexions", code: "SLOT: TUYAUTERIE", box1: { label: "Tuyauterie Filetée NPT", top: "34%", left: "12%", width: "22%", height: "40%" }, box2: { label: "Clapet Anti-retour • USÉ", top: "42%", left: "15%", width: "18%", height: "24%" } }
      ]
    }
  }
};

const MACHINE_SVGS = {
  goulds: `<path d="M70 150 L120 150 L120 190 L320 190 L320 170 L240 170 L240 140" stroke="rgba(0, 229, 255, 0.4)" stroke-width="2" fill="none"/>
           <!-- Volute casing -->
           <circle cx="170" cy="120" r="58" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.05)"/>
           <circle cx="170" cy="120" r="32" stroke="rgba(0, 229, 255, 0.7)" stroke-width="2" stroke-dasharray="4 2"/>
           <!-- Suction Flange (Left) -->
           <rect x="70" y="100" width="20" height="40" rx="3" stroke="#00e5ff" stroke-width="2" fill="rgba(0, 229, 255, 0.15)"/>
           <line x1="90" y1="120" x2="115" y2="120" stroke="#00e5ff" stroke-width="3"/>
           <!-- Discharge Flange (Top) -->
           <rect x="150" y="35" width="40" height="18" rx="3" stroke="#10b981" stroke-width="2" fill="rgba(16, 185, 129, 0.15)"/>
           <line x1="170" y1="53" x2="170" y2="65" stroke="#10b981" stroke-width="3"/>
           <!-- Bearing Frame (Right) -->
           <rect x="228" y="95" width="70" height="50" rx="4" stroke="#00e5ff" stroke-width="2" fill="rgba(0, 229, 255, 0.04)"/>
           <line x1="298" y1="120" x2="330" y2="120" stroke="#00e5ff" stroke-width="4"/>
           <!-- i-ALERT sensor pill -->
           <circle cx="260" cy="90" r="7" stroke="#38bdf8" stroke-width="2" fill="rgba(56, 189, 248, 0.3)"/>
           <text x="170" y="125" font-family="monospace" font-size="9" fill="#00e5ff" text-anchor="middle" font-weight="bold">ANSI B73.1</text>`,

  atlas: `<!-- Acoustic Enclosure Cabinet -->
          <rect x="85" y="45" width="230" height="150" rx="8" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.04)"/>
          <line x1="165" y1="45" x2="165" y2="195" stroke="rgba(0, 229, 255, 0.3)" stroke-width="1.5"/>
          <!-- Air Intake Grille Louvers (Right) -->
          <line x1="250" y1="80" x2="295" y2="80" stroke="#00e5ff" stroke-width="2"/>
          <line x1="250" y1="95" x2="295" y2="95" stroke="#00e5ff" stroke-width="2"/>
          <line x1="250" y1="110" x2="295" y2="110" stroke="#00e5ff" stroke-width="2"/>
          <line x1="250" y1="125" x2="295" y2="125" stroke="#00e5ff" stroke-width="2"/>
          <line x1="250" y1="140" x2="295" y2="140" stroke="#00e5ff" stroke-width="2"/>
          <!-- Elektronikon Touch Controller Screen (Left) -->
          <rect x="105" y="75" width="46" height="42" rx="4" stroke="#10b981" stroke-width="2" fill="rgba(16, 185, 129, 0.15)"/>
          <rect x="111" y="81" width="34" height="20" rx="2" fill="#00e5ff" opacity="0.4"/>
          <circle cx="128" cy="110" r="3" fill="#10b981"/>
          <!-- Brand Badge Area -->
          <rect x="105" y="145" width="46" height="18" rx="2" stroke="rgba(255, 255, 255, 0.3)" stroke-width="1" fill="none"/>
          <text x="128" y="157" font-family="monospace" font-size="7" fill="#ffffff" text-anchor="middle" font-weight="bold">GA 55 VSD</text>
          <!-- Base Forklift Slots -->
          <rect x="110" y="195" width="40" height="10" rx="2" stroke="#00e5ff" stroke-width="1.5" fill="none"/>
          <rect x="250" y="195" width="40" height="10" rx="2" stroke="#00e5ff" stroke-width="1.5" fill="none"/>`,

  siemens: `<!-- Heavy Electric Motor Body with Cooling Ribs -->
            <rect x="110" y="70" width="160" height="96" rx="6" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.04)"/>
            <!-- Cooling fins (Ribs) -->
            <line x1="130" y1="70" x2="130" y2="166" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
            <line x1="150" y1="70" x2="150" y2="166" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
            <line x1="170" y1="70" x2="170" y2="166" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
            <line x1="190" y1="70" x2="190" y2="166" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
            <line x1="210" y1="70" x2="210" y2="166" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
            <line x1="230" y1="70" x2="230" y2="166" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
            <line x1="250" y1="70" x2="250" y2="166" stroke="rgba(0, 229, 255, 0.4)" stroke-width="1.5"/>
            <!-- Terminal Junction Box (Top) -->
            <rect x="160" y="44" width="60" height="26" rx="3" stroke="#f59e0b" stroke-width="2" fill="rgba(245, 158, 11, 0.15)"/>
            <text x="190" y="60" font-family="monospace" font-size="8" fill="#f59e0b" text-anchor="middle" font-weight="bold">IP55 BOX</text>
            <!-- Fan Cowl Shroud (Left) -->
            <path d="M110 70 L80 85 L80 151 L110 166 Z" stroke="#00e5ff" stroke-width="2" fill="rgba(0, 229, 255, 0.08)"/>
            <!-- Drive Shaft (Right) -->
            <rect x="270" y="108" width="45" height="20" rx="2" stroke="#10b981" stroke-width="2" fill="rgba(16, 185, 129, 0.2)"/>
            <!-- Mounting Feet B3 -->
            <rect x="125" y="166" width="35" height="12" rx="2" stroke="#00e5ff" stroke-width="2" fill="none"/>
            <rect x="220" y="166" width="35" height="12" rx="2" stroke="#00e5ff" stroke-width="2" fill="none"/>
            <text x="190" y="125" font-family="monospace" font-size="9" fill="#00e5ff" text-anchor="middle" font-weight="bold">IEC 132M IE3</text>`,

  joy: `<!-- Vintage Cast Iron Frame -->
        <rect x="90" y="55" width="220" height="125" rx="4" stroke="#ef4444" stroke-width="2" fill="rgba(239, 68, 68, 0.04)"/>
        <!-- Heavy Structural Ribs -->
        <line x1="90" y1="100" x2="310" y2="100" stroke="rgba(239, 68, 68, 0.3)" stroke-width="2"/>
        <line x1="90" y1="145" x2="310" y2="145" stroke="rgba(239, 68, 68, 0.3)" stroke-width="2"/>
        <!-- Dual Vintage Round Analog Gauges -->
        <circle cx="230" cy="80" r="16" stroke="#f59e0b" stroke-width="2" fill="rgba(245, 158, 11, 0.1)"/>
        <line x1="230" y1="80" x2="238" y2="74" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="270" cy="80" r="16" stroke="#f59e0b" stroke-width="2" fill="rgba(245, 158, 11, 0.1)"/>
        <line x1="270" y1="80" x2="276" y2="72" stroke="#f59e0b" stroke-width="2"/>
        <!-- Heavy Piping Manifold -->
        <path d="M120 180 L120 120 L160 120 L160 65" stroke="#ef4444" stroke-width="3" fill="none"/>
        <circle cx="160" cy="65" r="8" stroke="#ef4444" stroke-width="2" fill="none"/>
        <!-- Heavy Base Feet -->
        <rect x="75" y="175" width="50" height="14" rx="2" stroke="#ef4444" stroke-width="2" fill="none"/>
        <rect x="275" y="175" width="50" height="14" rx="2" stroke="#ef4444" stroke-width="2" fill="none"/>
        <text x="200" y="128" font-family="monospace" font-size="8" fill="#ef4444" text-anchor="middle" font-weight="bold">VINTAGE 1985 • TA-025</text>`
};

let currentActiveMachine = 'goulds';
let currentActiveSlot = 0;

function loadMachine(key, slotIndex = 0) {
  currentActiveMachine = key;
  currentActiveSlot = slotIndex;

  const langDb = MACHINE_IDENTIFIER_DATABASE[currentLanguage] || MACHINE_IDENTIFIER_DATABASE['en'];
  const data = langDb[key] || langDb['goulds'];
  if (!data) return;

  const svgContainer = document.getElementById('machineSvg');
  const boxMain = document.getElementById('boxMain');
  const boxMainLabel = document.getElementById('boxMainLabel');
  const boxSub = document.getElementById('boxSub');
  const boxSubLabel = document.getElementById('boxSubLabel');

  const activeSlot = data.slots[slotIndex] || data.slots[0];

  // SVG Artwork update
  if (svgContainer) {
    svgContainer.style.opacity = '0';
    setTimeout(() => {
      svgContainer.innerHTML = MACHINE_SVGS[key] || '';
      svgContainer.style.opacity = '1';
    }, 120);
  }

  // Update Bounding Boxes based on current slot
  if (boxMain && boxMainLabel && activeSlot.box1) {
    boxMain.style.left = activeSlot.box1.left;
    boxMain.style.top = activeSlot.box1.top;
    boxMain.style.width = activeSlot.box1.width;
    boxMain.style.height = activeSlot.box1.height;
    boxMainLabel.innerText = activeSlot.box1.label;
  }

  if (boxSub && boxSubLabel && activeSlot.box2) {
    boxSub.style.left = activeSlot.box2.left;
    boxSub.style.top = activeSlot.box2.top;
    boxSub.style.width = activeSlot.box2.width;
    boxSub.style.height = activeSlot.box2.height;
    boxSubLabel.innerText = activeSlot.box2.label;
  }

  // Update HUD Reticle codes
  const hudSlotCode = document.getElementById('hudSlotCode');
  const hudConditionBadge = document.getElementById('hudConditionBadge');
  const hudMethodCode = document.getElementById('hudMethodCode');
  const activeSlotLabel = document.getElementById('activeSlotLabel');

  if (hudSlotCode) hudSlotCode.innerText = activeSlot.code;
  if (hudConditionBadge) hudConditionBadge.innerText = `COND: ${data.condition.toUpperCase()}`;
  if (hudMethodCode) hudMethodCode.innerText = data.methodCode;
  if (activeSlotLabel) activeSlotLabel.innerText = `${activeSlot.name} (Toma ${slotIndex + 1}/4)`;

  // Update Viewport Footer
  const valMethod = document.getElementById('valMethod');
  const valEngine = document.getElementById('valEngine');
  const valConfidence = document.getElementById('valConfidence');
  if (valMethod) valMethod.innerText = data.method;
  if (valEngine) valEngine.innerText = data.engine;
  if (valConfidence) {
    valConfidence.innerText = data.confidence;
    valConfidence.className = 'vf-val ' + (data.condition === 'discontinued' ? 'val-red' : 'val-green');
  }

  // Update Right Panel: Asset Specification Card
  const specCategory = document.getElementById('specCategory');
  const specTitle = document.getElementById('specTitle');
  const specCondition = document.getElementById('specCondition');
  const specEvidence = document.getElementById('specEvidence');

  if (specCategory) specCategory.innerText = data.category.toUpperCase();
  if (specTitle) specTitle.innerText = `${data.brand} ${data.model}`;
  if (specCondition) {
    specCondition.innerText = data.conditionBadge;
    specCondition.className = 'health-pill condition-' + data.condition;
  }
  if (specEvidence) specEvidence.innerText = data.evidence;

  // Update Structured Technical Specs
  const specPower = document.getElementById('specPower');
  const specPressure = document.getElementById('specPressure');
  const specFlow = document.getElementById('specFlow');
  const specVoltage = document.getElementById('specVoltage');
  const specWeight = document.getElementById('specWeight');
  const specYear = document.getElementById('specYear');

  if (specPower) specPower.innerText = data.specs.power;
  if (specPressure) specPressure.innerText = data.specs.pressure;
  if (specFlow) specFlow.innerText = data.specs.flow;
  if (specVoltage) specVoltage.innerText = data.specs.voltage;
  if (specWeight) specWeight.innerText = data.specs.weight;
  if (specYear) specYear.innerText = data.specs.year;

  // Update OEM and Manual Links
  const specOemName = document.getElementById('specOemName');
  const specOemLink = document.getElementById('specOemLink');
  const specManualName = document.getElementById('specManualName');
  const specManualLink = document.getElementById('specManualLink');

  if (specOemName) specOemName.innerText = data.oem;
  if (specOemLink) specOemLink.href = data.oemUrl;
  if (specManualName) specManualName.innerText = data.manual;
  if (specManualLink) specManualLink.href = data.oemUrl;

  // Update Photo Slot Buttons visual state
  const slotButtons = document.querySelectorAll('.photo-slot-btn');
  slotButtons.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === slotIndex);
  });
}

function initMachineScanner() {
  const tabs = document.querySelectorAll('.machine-tab');
  const slotButtons = document.querySelectorAll('.photo-slot-btn');
  const openPdfBtn = document.getElementById('openPdfModalBtn');
  const closePdfBtn = document.getElementById('closePdfModalBtn');
  const printPdfBtn = document.getElementById('printPdfBtn');
  const pdfModal = document.getElementById('machinePdfModal');

  // Machine Switcher Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const machineKey = tab.getAttribute('data-machine') || 'goulds';
      loadMachine(machineKey, 0);
    });
  });

  // Photo Slot Grid Buttons
  slotButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      loadMachine(currentActiveMachine, idx);
    });
  });

  // Initialize with Goulds 3196 (The forensic unreadable plate case)
  loadMachine('goulds', 0);

  // PDF Preview Modal Handling
  function populatePdfModal() {
    const langDb = MACHINE_IDENTIFIER_DATABASE[currentLanguage] || MACHINE_IDENTIFIER_DATABASE['en'];
    const data = langDb[currentActiveMachine] || langDb['goulds'];
    if (!data) return;

    const pdfBrand = document.getElementById('pdfBrand');
    const pdfModel = document.getElementById('pdfModel');
    const pdfCategory = document.getElementById('pdfCategory');
    const pdfSerial = document.getElementById('pdfSerial');
    const pdfYear = document.getElementById('pdfYear');
    const pdfAssetTag = document.getElementById('pdfAssetTag');
    const pdfConditionPill = document.getElementById('pdfConditionPill');
    const pdfConditionDesc = document.getElementById('pdfConditionDesc');
    const pdfMethod = document.getElementById('pdfMethod');
    const pdfConfidence = document.getElementById('pdfConfidence');
    const pdfOem = document.getElementById('pdfOem');
    const pdfOemUrl = document.getElementById('pdfOemUrl');
    const pdfManualRef = document.getElementById('pdfManualRef');
    const pdfForensicRationale = document.getElementById('pdfForensicRationale');
    const pdfSpecsTableBody = document.getElementById('pdfSpecsTableBody');
    const pdfAuditTimestamp = document.getElementById('pdfAuditTimestamp');

    if (pdfBrand) pdfBrand.innerText = data.brand;
    if (pdfModel) pdfModel.innerText = data.model;
    if (pdfCategory) pdfCategory.innerText = data.category;
    if (pdfSerial) pdfSerial.innerText = data.serial;
    if (pdfYear) pdfYear.innerText = data.specs.year;
    if (pdfAssetTag) pdfAssetTag.innerText = data.assetTag;

    if (pdfConditionPill) {
      pdfConditionPill.innerText = data.conditionBadge;
      pdfConditionPill.className = 'pdf-condition-pill pill-' + data.condition;
    }
    if (pdfConditionDesc) pdfConditionDesc.innerText = data.conditionDesc;
    if (pdfMethod) pdfMethod.innerText = data.method;
    if (pdfConfidence) pdfConfidence.innerText = `${data.confidence} (Validado por Gemini Multimodal)`;

    if (pdfOem) pdfOem.innerText = data.oem;
    if (pdfOemUrl) pdfOemUrl.innerText = data.oemUrl;
    if (pdfManualRef) pdfManualRef.innerText = data.manual;
    if (pdfForensicRationale) pdfForensicRationale.innerText = data.evidence;

    const pdfInspectorNotes = document.getElementById('pdfInspectorNotes');
    if (pdfInspectorNotes && data.notes) {
      pdfInspectorNotes.innerText = data.notes;
    }

    const icons = ['📸', '🏷️', '🎛️', '⚙️'];
    if (data.slots && data.slots.length === 4) {
      data.slots.forEach((slot, idx) => {
        const pCanvas = document.getElementById(`pdfPhoto${idx + 1}`);
        const pSub = document.getElementById(`pdfPhotoSub${idx + 1}`);
        if (pCanvas) pCanvas.innerText = `${icons[idx]} ${slot.name}`;
        if (pSub && slot.box1) pSub.innerText = slot.box1.label;
      });
    }

    if (pdfAuditTimestamp) {
      const now = new Date();
      pdfAuditTimestamp.innerText = `${now.toLocaleDateString()} ${now.toLocaleTimeString()} UTC`;
    }

    if (pdfSpecsTableBody) {
      pdfSpecsTableBody.innerHTML = `
        <tr><td><strong>Potencia Nominal / Power:</strong></td><td>${data.specs.power}</td><td>Especificación de placa de fábrica</td></tr>
        <tr><td><strong>Presión / Altura / Head:</strong></td><td>${data.specs.pressure}</td><td>Curva estándar de ingeniería</td></tr>
        <tr><td><strong>Caudal / Capacidad:</strong></td><td>${data.specs.flow}</td><td>Condición nominal de servicio</td></tr>
        <tr><td><strong>Tensión / Frecuencia:</strong></td><td>${data.specs.voltage}</td><td>Configuración trifásica industrial</td></tr>
        <tr><td><strong>Bastidor / Peso Operativo:</strong></td><td>${data.specs.weight}</td><td>Norma dimensional verificada</td></tr>
        <tr><td><strong>Rango de Fabricación:</strong></td><td>${data.specs.year}</td><td>Correspondencia con época tecnológica</td></tr>
      `;
    }
  }

  if (openPdfBtn && pdfModal) {
    openPdfBtn.addEventListener('click', () => {
      populatePdfModal();
      pdfModal.classList.add('active');
      pdfModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closePdfBtn && pdfModal) {
    closePdfBtn.addEventListener('click', () => {
      pdfModal.classList.remove('active');
      pdfModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  if (pdfModal) {
    pdfModal.addEventListener('click', (e) => {
      if (e.target === pdfModal) {
        pdfModal.classList.remove('active');
        pdfModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  if (printPdfBtn) {
    printPdfBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   8. Interactive Industry Deep-Dive Switcher (Localized)
   ========================================================================== */
const INDUSTRY_DATA_I18N = {
  en: {
    "manufacturing": {
        "title": "Manufacturing Plants & Assembly Lines",
        "stat": "92%",
        "statDesc": "Faster Line Diagnostics",
        "challenge": "Unscheduled downtime on critical assembly lines caused by time-consuming manual part lookups and scattered documentation.",
        "solution": "Visual identification of robotic arms, CNC spindles, and conveyors with immediate retrieval of technical schematics on technician tablets.",
        "pills": [
            "Zero paper manuals",
            "Instant part numbering",
            "Rapid shift changeover"
        ]
    },
    "operations": {
        "title": "Heavy Industrial & Plant Operations",
        "stat": "85%",
        "statDesc": "Reduction in MTTR",
        "challenge": "Managing thousands of dispersed mechanical pumps, gearboxes, and compressors across multi-acre facilities without visual tags.",
        "solution": "Point-and-shoot camera identification that indexes machines instantly, even in grease-covered or weathered conditions.",
        "pills": [
            "Multi-acre coverage",
            "Weathered tag recognition",
            "Central plant telemetry"
        ]
    },
    "facility": {
        "title": "Facility & Building Management",
        "stat": "4.8x",
        "statDesc": "Inspection Throughput",
        "challenge": "Technicians wasting time locating HVAC units, switchgear, and plumbing manifolds across complex high-rise facilities.",
        "solution": "Augmented visual tags and automated digital twin lookups with integrated step-by-step filter and valve check routines.",
        "pills": [
            "HVAC & Switchgear indexing",
            "Automated checklists",
            "Asset lifecycle audits"
        ]
    },
    "field": {
        "title": "Roving Field Service & Support",
        "stat": "3.5 hrs",
        "statDesc": "Daily Technician Time Saved",
        "challenge": "Field technicians facing unfamiliar machinery models and needing immediate access to torque specs and OEM wiring guides.",
        "solution": "Mobile-first offline AI model that identifies models locally in remote sites without cell coverage.",
        "pills": [
            "Offline-first AI",
            "Immediate torque specs",
            "Digital service sign-off"
        ]
    },
    "maintenance": {
        "title": "Maintenance & Reliability Operations",
        "stat": "70%",
        "statDesc": "Fewer Repeat Failures",
        "challenge": "Lack of historical repair context leading to incorrect part replacements and recurring machine failures.",
        "solution": "Instant overlay of last service date, past failure logs, and recommended spare parts upon visual recognition.",
        "pills": [
            "Historical service timeline",
            "Spare parts recommendation",
            "Predictive failure alerts"
        ]
    },
    "asset": {
        "title": "Enterprise Asset Management (EAM)",
        "stat": "99.9%",
        "statDesc": "Inventory Audit Accuracy",
        "challenge": "Ghost assets and outdated spreadsheets creating costly compliance gaps and inaccurate capital depreciation models.",
        "solution": "Continuous visual audit trail that confirms physical existence and condition with GPS & timestamp metadata.",
        "pills": [
            "Automated asset tagging",
            "Zero ghost inventory",
            "Seamless ERP integration"
        ]
    },
    "infrastructure": {
        "title": "Infrastructure & Municipal Services",
        "stat": "60%",
        "statDesc": "Faster Emergency Triage",
        "challenge": "Critical utility hubs, water pumps, and power substations requiring rapid triage during grid anomalies.",
        "solution": "Secure, high-reliability visual intelligence that standardizes emergency inspection procedures for city teams.",
        "pills": [
            "Substation component parsing",
            "Emergency standard workflows",
            "High-security telemetry"
        ]
    }
},
  es: {
    "manufacturing": {
        "title": "Plantas de Fabricación y Líneas de Ensamblaje",
        "stat": "92%",
        "statDesc": "Diagnóstico de Línea Más Rápido",
        "challenge": "Tiempos de inactividad no programados en líneas de ensamblaje críticas por búsquedas manuales lentas y manuales dispersos.",
        "solution": "Identificación visual de brazos robóticos, husillos CNC y transportadores con despliegue inmediato de esquemas técnicos en tablets.",
        "pills": [
            "Cero manuales de papel",
            "Identificación de piezas al instante",
            "Cambio rápido de turno"
        ]
    },
    "operations": {
        "title": "Operaciones Industriales Pesadas y Plantas",
        "stat": "85%",
        "statDesc": "Reducción en MTTR",
        "challenge": "Gestión de miles de bombas mecánicas, reductores y compresores dispersos en complejos extensos sin placas legibles.",
        "solution": "Identificación apuntando la cámara que indexa equipos al instante, incluso con grasa, polvo o desgaste ambiental.",
        "pills": [
            "Cobertura de complejos extensos",
            "Lectura de placas desgastadas",
            "Telemetría centralizada"
        ]
    },
    "facility": {
        "title": "Gestión de Edificios e Instalaciones (Facility)",
        "stat": "4.8x",
        "statDesc": "Rendimiento de Inspección",
        "challenge": "Técnicos perdiendo tiempo buscando unidades HVAC, cuadros eléctricos y colectores en complejos de gran escala.",
        "solution": "Etiquetas visuales aumentadas y sincronización con gemelos digitales con rutinas asistidas de verificación.",
        "pills": [
            "Indexación HVAC y cuadros",
            "Listas de verificación automáticas",
            "Auditoría de ciclo de vida"
        ]
    },
    "field": {
        "title": "Servicio y Soporte Técnico en Campo",
        "stat": "3.5 hrs",
        "statDesc": "Ahorro Diario por Técnico",
        "challenge": "Técnicos frente a modelos desconocidos sin conexión a internet y necesitando información técnica y guías OEM.",
        "solution": "Modelo de IA local offline que identifica maquinaria en zonas remotas sin cobertura celular.",
        "pills": [
            "IA offline en el dispositivo",
            "Información técnica inmediata",
            "Cierre digital de servicio"
        ]
    },
    "maintenance": {
        "title": "Operaciones de Mantenimiento y Confiabilidad",
        "stat": "70%",
        "statDesc": "Menos Fallos Repetitivos",
        "challenge": "Falta de historial de reparaciones que genera reemplazo incorrecto de repuestos y averías recurrentes.",
        "solution": "Superposición instantánea de última fecha de servicio, historial de averías y repuestos recomendados al escanear.",
        "pills": [
            "Línea de tiempo histórica",
            "Recomendación de repuestos",
            "Alertas predictivas de fallo"
        ]
    },
    "asset": {
        "title": "Gestión de Activos Empresariales (EAM)",
        "stat": "99.9%",
        "statDesc": "Precisión en Auditorías",
        "challenge": "Activos fantasma y hojas de cálculo obsoletas que generan brechas de cumplimiento y depreciación errónea.",
        "solution": "Pista de auditoría visual continua que certifica existencia física y estado con metadatos GPS y fecha.",
        "pills": [
            "Etiquetado automático",
            "Cero inventario fantasma",
            "Integración fluida con ERP"
        ]
    },
    "infrastructure": {
        "title": "Infraestructura y Servicios Municipales",
        "stat": "60%",
        "statDesc": "Triaje de Emergencia Rápido",
        "challenge": "Subestaciones eléctricas y bombas de agua críticas que requieren diagnóstico urgente ante anomalías de red.",
        "solution": "Inteligencia visual de alta fiabilidad que estandariza protocolos de inspección de emergencia en campo.",
        "pills": [
            "Lectura de subestaciones",
            "Protocolos estándar de emergencia",
            "Telemetría de alta seguridad"
        ]
    }
},
  fr: {
    "manufacturing": {
        "title": "Usines de Fabrication et Lignes d'Assemblage",
        "stat": "92%",
        "statDesc": "Diagnostic de Ligne Plus Rapide",
        "challenge": "Arrêts non planifiés sur lignes critiques causés par des recherches manuelles lentes et des documentations dispersées.",
        "solution": "Identification visuelle de bras robotisés, broches CNC et convoyeurs avec accès immédiat aux schémas sur tablettes.",
        "pills": [
            "Zéro manuel papier",
            "Numérotation immédiate des pièces",
            "Relève rapide des équipes"
        ]
    },
    "operations": {
        "title": "Opérations Industrielles Lourdes & Usines",
        "stat": "85%",
        "statDesc": "Réduction du MTTR",
        "challenge": "Gestion de milliers de pompes, réducteurs et compresseurs répartis sur de vastes sites sans plaques lisibles.",
        "solution": "Reconnaissance optique par caméra qui indexe instantanément les machines, même couvertes de graisse ou usées.",
        "pills": [
            "Couverture de grands sites",
            "Lecture de plaques usées",
            "Télémétrie centrale usine"
        ]
    },
    "facility": {
        "title": "Gestion Technique de Bâtiments & Installations",
        "stat": "4.8x",
        "statDesc": "Débit d'Inspection",
        "challenge": "Perte de temps des techniciens pour localiser CVC, armoires électriques et collecteurs dans des complexes étendus.",
        "solution": "Tags visuels augmentés et jumeaux numériques avec checklists guidées de vérification de filtres et vannes.",
        "pills": [
            "Indexation CVC et armoires",
            "Checklists automatisées",
            "Audits de cycle de vie"
        ]
    },
    "field": {
        "title": "Service & Maintenance Terrain Itinérante",
        "stat": "3.5 hrs",
        "statDesc": "Temps Économisé / Jour / Technicien",
        "challenge": "Techniciens face à des équipements inconnus nécessitant des couples de serrage et guides OEM sans réseau.",
        "solution": "Modèle IA embarqué hors ligne qui identifie les modèles localement sans couverture mobile.",
        "pills": [
            "IA locale hors ligne",
            "Couples de serrage immédiats",
            "Validation numérique de service"
        ]
    },
    "maintenance": {
        "title": "Maintenance & Fiabilité Opérationnelle",
        "stat": "70%",
        "statDesc": "Moins de Pannes Répétées",
        "challenge": "Manque d'historique entraînant le remplacement de mauvaises pièces et des pannes récurrentes.",
        "solution": "Affichage immédiat de la date du dernier entretien, historique des pannes et pièces recommandées par scan.",
        "pills": [
            "Historique chronologique",
            "Recommandation de pièces",
            "Alertes prédictives de panne"
        ]
    },
    "asset": {
        "title": "Gestion d'Actifs d'Entreprise (EAM)",
        "stat": "99.9%",
        "statDesc": "Précision d'Audit d'Inventaire",
        "challenge": "Actifs fantômes et tableurs obsolètes créant des écarts de conformité et des amortissements erronés.",
        "solution": "Piste d'audit visuelle continue confirmant l'existence et l'état physique avec métadonnées GPS horodatées.",
        "pills": [
            "Marquage automatique",
            "Zéro inventaire fantôme",
            "Intégration fluide ERP"
        ]
    },
    "infrastructure": {
        "title": "Infrastructures & Services Publics",
        "stat": "60%",
        "statDesc": "Triage d'Urgence Accéléré",
        "challenge": "Sous-stations électriques et stations de pompage nécessitant un diagnostic urgent lors d'anomalies de réseau.",
        "solution": "Intelligence visuelle de haute fiabilité standardisant les procédures d'inspection d'urgence.",
        "pills": [
            "Analyse de sous-stations",
            "Procédures d'urgence standard",
            "Télémétrie haute sécurité"
        ]
    }
}
};

let currentActiveIndustry = 'manufacturing';

function loadIndustry(key) {
  currentActiveIndustry = key;
  const langDb = INDUSTRY_DATA_I18N[currentLanguage] || INDUSTRY_DATA_I18N['en'];
  const data = langDb[key];
  if (!data) return;

  const title = document.getElementById('indTitle');
  const stat = document.getElementById('indStat');
  const statDesc = document.getElementById('indStatDesc');
  const challenge = document.getElementById('indChallenge');
  const solution = document.getElementById('indSolution');
  const pills = document.getElementById('indPills');

  if (title) title.innerText = data.title;
  if (stat) stat.innerText = data.stat;
  if (statDesc) statDesc.innerText = data.statDesc;
  if (challenge) challenge.innerText = data.challenge;
  if (solution) solution.innerText = data.solution;
  if (pills) pills.innerHTML = data.pills.map(p => `<li>${p}</li>`).join('');
}

function initIndustryTabs() {
  const btns = document.querySelectorAll('.ind-tab-btn');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadIndustry(btn.getAttribute('data-industry'));
    });
  });

  loadIndustry('manufacturing');
}

/* ==========================================================================
   9. Interactive ROI & Maintenance Savings Calculator
   ========================================================================== */
function initRoiCalculator() {
  const sliderTechs = document.getElementById('techCount');
  const sliderInspections = document.getElementById('inspectionsPerMonth');
  const sliderRate = document.getElementById('laborRate');

  const valTechs = document.getElementById('valTechCount');
  const valInspections = document.getElementById('valInspections');
  const valRate = document.getElementById('valLaborRate');

  const resAnnualSavings = document.getElementById('resAnnualSavings');
  const resHoursMonthly = document.getElementById('resHoursMonthly');

  if (!sliderTechs || !sliderInspections || !sliderRate) return;

  const calculate = () => {
    const techs = parseInt(sliderTechs.value, 10);
    const inspections = parseInt(sliderInspections.value, 10);
    const rate = parseInt(sliderRate.value, 10);

    if (valTechs) valTechs.innerText = techs;
    if (valInspections) valInspections.innerText = inspections.toLocaleString();
    if (valRate) valRate.innerText = `$${rate}`;

    const hoursSavedMonthly = Math.round(inspections * 0.467);
    const annualSavings = Math.round(hoursSavedMonthly * 12 * rate);

    if (resHoursMonthly) {
      resHoursMonthly.innerText = `${hoursSavedMonthly.toLocaleString()} hrs`;
    }

    if (resAnnualSavings) {
      resAnnualSavings.innerText = annualSavings.toLocaleString();
    }
  };

  sliderTechs.addEventListener('input', calculate);
  sliderInspections.addEventListener('input', calculate);
  sliderRate.addEventListener('input', calculate);

  calculate();
}

/* ==========================================================================
   10. Toast Notification System & Clipboard
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <span class="toast-dot"></span>
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('visible'), 10);

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function initClipboardSystem() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const msg = currentLanguage === 'es' 
          ? `Copiado: ${textToCopy}` 
          : (currentLanguage === 'fr' ? `Copié : ${textToCopy}` : `Copied: ${textToCopy}`);
        showToast(msg, 'success');
      }).catch(() => {
        showToast(`Copy manually: ${textToCopy}`, 'info');
      });
    });
  });
}

/* ==========================================================================
   10b. Interactive Department Channel Selector (Two-Way Sync)
   ========================================================================== */
function initChannelSelection() {
  const channelBoxes = document.querySelectorAll('.channel-box');
  const deptSelect = document.getElementById('departmentSelect');
  const nameInput = document.getElementById('fullName');

  if (!channelBoxes.length || !deptSelect) return;

  const selectChannel = (deptEmail, focusInput = false) => {
    deptSelect.value = deptEmail;

    channelBoxes.forEach(box => {
      const boxDept = box.getAttribute('data-department');
      if (boxDept === deptEmail) {
        box.classList.add('channel-active');
      } else {
        box.classList.remove('channel-active');
      }
    });

    if (focusInput && nameInput) {
      nameInput.focus();
      const formCard = document.querySelector('.contact-form-card');
      if (formCard) {
        formCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  // Sync initial state with whatever department is currently selected
  selectChannel(deptSelect.value, false);

  channelBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
      // Don't select if the copy button was clicked
      if (e.target.closest('.ch-copy-btn')) return;

      const dept = box.getAttribute('data-department');
      if (!dept) return;

      selectChannel(dept, true);

      const deptLabel = box.querySelector('.ch-label')?.innerText || dept;
      const toastMsg = currentLanguage === 'es'
        ? `Destino seleccionado: ${deptLabel}`
        : (currentLanguage === 'fr' ? `Département sélectionné : ${deptLabel}` : `Department selected: ${deptLabel}`);
      showToast(toastMsg, 'info');
    });
  });

  deptSelect.addEventListener('change', () => {
    selectChannel(deptSelect.value, false);
  });
}

/* ==========================================================================
   11. Interactive Contact Form Submission Logic
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  const submitBtnText = document.getElementById('submitBtnText');
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('workEmail');
  const companyInput = document.getElementById('companyName');
  const deptSelect = document.getElementById('departmentSelect');
  const msgInput = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const msgError = document.getElementById('msgError');

  if (!form) return;

  // Real-time input listener to clear error highlights
  if (nameInput && nameError) {
    nameInput.addEventListener('input', () => nameError.classList.remove('visible'));
  }
  if (emailInput && emailError) {
    emailInput.addEventListener('input', () => emailError.classList.remove('visible'));
  }
  if (msgInput && msgError) {
    msgInput.addEventListener('input', () => msgError.classList.remove('visible'));
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const company = companyInput ? companyInput.value.trim() : '';
    const dept = deptSelect ? deptSelect.value : 'info@mosbisystems.com';
    const message = msgInput ? msgInput.value.trim() : '';

    let isValid = true;

    // Validate Name
    if (!name) {
      if (nameError) {
        nameError.innerText = currentLanguage === 'es' ? 'Por favor ingresa tu nombre.' : (currentLanguage === 'fr' ? 'Veuillez entrer votre nom.' : 'Please provide your name.');
        nameError.classList.add('visible');
      }
      isValid = false;
    } else if (nameError) {
      nameError.classList.remove('visible');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      if (emailError) {
        emailError.innerText = currentLanguage === 'es' ? 'Ingresa un correo electrónico válido.' : (currentLanguage === 'fr' ? 'Veuillez fournir une adresse e-mail valide.' : 'Please provide a valid email address.');
        emailError.classList.add('visible');
      }
      isValid = false;
    } else if (emailError) {
      emailError.classList.remove('visible');
    }

    // Validate Message
    if (!message) {
      if (msgError) {
        msgError.innerText = currentLanguage === 'es' ? 'Por favor escribe tu mensaje.' : (currentLanguage === 'fr' ? 'Veuillez saisir votre message.' : 'Please enter your message.');
        msgError.classList.add('visible');
      }
      isValid = false;
    } else if (msgError) {
      msgError.classList.remove('visible');
    }

    if (!isValid) {
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.innerText = currentLanguage === 'es' 
          ? 'Por favor completa todos los campos requeridos.' 
          : (currentLanguage === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill out all required fields.');
        feedback.style.display = 'block';
      }
      return;
    }

    if (feedback) feedback.style.display = 'none';

    const btnTextEl = submitBtnText || submitBtn;
    const originalText = btnTextEl ? btnTextEl.innerText : 'Dispatch Message';

    if (submitBtn) {
      submitBtn.disabled = true;
      if (submitBtnText) {
        submitBtnText.innerText = currentLanguage === 'es' ? 'Enviando...' : (currentLanguage === 'fr' ? 'Envoi en cours...' : 'Sending...');
      }
    }

    const payload = {
      access_key: 'a1ecd886-99f5-4eec-8044-e6a04d3f6553',
      subject: `[MOSBI Lead] ${company ? company + ' - ' : ''}${name} (${dept})`,
      name: name,
      email: email,
      organization: company || 'N/A',
      department: dept,
      message: message,
      from_name: 'MOSBI Systems Web Portal'
    };

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(async (response) => {
      const data = await response.json();
      if (response.status === 200 && data.success) {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = currentLanguage === 'es'
            ? `¡Gracias, <strong>${name}</strong>! Tu mensaje ha sido enviado exitosamente a <strong>${dept}</strong>. Nos comunicaremos contigo en menos de 24 horas.`
            : (currentLanguage === 'fr' 
               ? `Merci <strong>${name}</strong> ! Votre message a été envoyé avec succès à <strong>${dept}</strong>. Nous vous répondrons dans les 24 heures.`
               : `Thank you, <strong>${name}</strong>! Your inquiry for <strong>${dept}</strong> has been transmitted successfully. Our team will contact you within 24 hours.`);
          feedback.style.display = 'block';
        }

        form.reset();
        showToast(
          currentLanguage === 'es' ? '¡Mensaje enviado exitosamente!' : (currentLanguage === 'fr' ? 'Message envoyé avec succès !' : 'Inquiry dispatched successfully!'),
          'success'
        );

        if (submitBtnText) {
          submitBtnText.innerText = currentLanguage === 'es' ? 'Mensaje Enviado ✓' : (currentLanguage === 'fr' ? 'Message Envoyé ✓' : 'Message Sent ✓');
        }
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    })
    .catch((error) => {
      console.error('Contact Form Submission Error:', error);
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.innerHTML = currentLanguage === 'es'
          ? 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo o escríbenos directamente a <a href="mailto:' + dept + '" style="color:var(--cyan-glow);text-decoration:underline;">' + dept + '</a>.'
          : (currentLanguage === 'fr'
             ? 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou contacter directamente <a href="mailto:' + dept + '" style="color:var(--cyan-glow);text-decoration:underline;">' + dept + '</a>.'
             : 'There was an issue dispatching your inquiry. Please try again or email us directly at <a href="mailto:' + dept + '" style="color:var(--cyan-glow);text-decoration:underline;">' + dept + '</a>.');
        feedback.style.display = 'block';
      }
      showToast(
        currentLanguage === 'es' ? 'Error al enviar el mensaje' : (currentLanguage === 'fr' ? 'Erreur lors de l\'envoi' : 'Failed to dispatch inquiry'),
        'error'
      );
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
      }
      setTimeout(() => {
        if (submitBtnText) {
          submitBtnText.innerText = originalText;
        }
      }, 5000);
    });
  });
}

/* ==========================================================================
   12. Multi-Language Internationalization (i18n) Engine
   English (EN), Spanish (ES), French (FR)
   ========================================================================== */