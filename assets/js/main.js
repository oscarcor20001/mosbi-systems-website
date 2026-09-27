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
   7. Interactive Machine Identifier AI™ Scanner Demo Simulation (Localized)
   ========================================================================== */
const MACHINE_DATABASE_I18N = {
  en: {
    "turbine": {
        "title": "Centrifugal Slurry Pump",
        "badge": "ROTARY EQUIPMENT",
        "tag": "PUMP-CPX-800-MD",
        "serial": "SN-8849-01B",
        "vendor": "FlowMax Dynamics",
        "temp": "48.2 °C (Normal)",
        "service": "14 Days (Routine)",
        "sync": "Synced • ID #9481",
        "health": "Healthy • 98%",
        "confidence": "99.8%",
        "latency": "14.2 ms",
        "box1": {
            "label": "Turbine Pump #402 • 99.8% Match",
            "top": "16%",
            "left": "15%",
            "width": "46%",
            "height": "68%"
        },
        "box2": {
            "label": "Flange Seal • PASS",
            "top": "36%",
            "left": "62%",
            "width": "24%",
            "height": "36%"
        }
    },
    "valve": {
        "title": "Cryogenic Control Valve",
        "badge": "PRESSURE CONTROL",
        "tag": "VALVE-PV-94-CRYO",
        "serial": "SN-4412-99C",
        "vendor": "Vortex Automation",
        "temp": "-32.4 °C (Stable)",
        "service": "4 Days (Impending)",
        "sync": "Synced • ID #3312",
        "health": "Warning • Seal Check",
        "confidence": "99.4%",
        "latency": "11.8 ms",
        "box1": {
            "label": "Cryo Valve PV-94 • 99.4% Match",
            "top": "22%",
            "left": "22%",
            "width": "54%",
            "height": "58%"
        },
        "box2": {
            "label": "Actuator Stem • CALIBRATED",
            "top": "10%",
            "left": "42%",
            "width": "18%",
            "height": "26%"
        }
    },
    "motor": {
        "title": "High-Torque Induction Motor",
        "badge": "ELECTRO-MECHANICAL",
        "tag": "MOTOR-IND-M7-3P",
        "serial": "SN-7731-08A",
        "vendor": "ElectroCore Global",
        "temp": "64.1 °C (Nominal)",
        "service": "45 Days (Healthy)",
        "sync": "Synced • ID #1842",
        "health": "Optimal • 100%",
        "confidence": "99.9%",
        "latency": "9.4 ms",
        "box1": {
            "label": "Induction Motor M-7 • 99.9% Match",
            "top": "24%",
            "left": "22%",
            "width": "48%",
            "height": "56%"
        },
        "box2": {
            "label": "Terminal Box • OK",
            "top": "16%",
            "left": "68%",
            "width": "16%",
            "height": "24%"
        }
    },
    "compressor": {
        "title": "Rotary Screw Compressor",
        "badge": "PNEUMATIC SYSTEMS",
        "tag": "COMP-SC-1200-HP",
        "serial": "SN-9102-54X",
        "vendor": "AeroPress Systems",
        "temp": "51.8 °C (Normal)",
        "service": "28 Days (Scheduled)",
        "sync": "Synced • ID #6720",
        "health": "Operational • 96%",
        "confidence": "99.7%",
        "latency": "15.6 ms",
        "box1": {
            "label": "Screw Compressor SC-12 • 99.7%",
            "top": "20%",
            "left": "18%",
            "width": "50%",
            "height": "60%"
        },
        "box2": {
            "label": "Oil Filter Unit • INSPECTED",
            "top": "30%",
            "left": "68%",
            "width": "16%",
            "height": "36%"
        }
    }
},
  es: {
    "turbine": {
        "title": "Bomba Centrífuga de Lodos",
        "badge": "EQUIPO ROTATIVO",
        "tag": "PUMP-CPX-800-MD",
        "serial": "SN-8849-01B",
        "vendor": "FlowMax Dynamics",
        "temp": "48.2 °C (Normal)",
        "service": "14 Días (Rutina)",
        "sync": "Sincronizado • ID #9481",
        "health": "Saludable • 98%",
        "confidence": "99.8%",
        "latency": "14.2 ms",
        "box1": {
            "label": "Bomba Turbina #402 • 99.8% Coincidencia",
            "top": "16%",
            "left": "15%",
            "width": "46%",
            "height": "68%"
        },
        "box2": {
            "label": "Sello de Brida • APROBADO",
            "top": "36%",
            "left": "62%",
            "width": "24%",
            "height": "36%"
        }
    },
    "valve": {
        "title": "Válvula de Control Criogénica",
        "badge": "CONTROL DE PRESIÓN",
        "tag": "VALVE-PV-94-CRYO",
        "serial": "SN-4412-99C",
        "vendor": "Vortex Automation",
        "temp": "-32.4 °C (Estable)",
        "service": "4 Días (Inminente)",
        "sync": "Sincronizado • ID #3312",
        "health": "Alerta • Revisión Sello",
        "confidence": "99.4%",
        "latency": "11.8 ms",
        "box1": {
            "label": "Válvula Criogénica PV-94 • 99.4% Coincidencia",
            "top": "22%",
            "left": "22%",
            "width": "54%",
            "height": "58%"
        },
        "box2": {
            "label": "Vástago Actuador • CALIBRADO",
            "top": "10%",
            "left": "42%",
            "width": "18%",
            "height": "26%"
        }
    },
    "motor": {
        "title": "Motor de Inducción de Alto Par",
        "badge": "ELECTROMECÁNICO",
        "tag": "MOTOR-IND-M7-3P",
        "serial": "SN-7731-08A",
        "vendor": "ElectroCore Global",
        "temp": "64.1 °C (Nominal)",
        "service": "45 Días (Óptimo)",
        "sync": "Sincronizado • ID #1842",
        "health": "Óptimo • 100%",
        "confidence": "99.9%",
        "latency": "9.4 ms",
        "box1": {
            "label": "Motor Inducción M-7 • 99.9% Coincidencia",
            "top": "24%",
            "left": "22%",
            "width": "48%",
            "height": "56%"
        },
        "box2": {
            "label": "Caja Bornes • OK",
            "top": "16%",
            "left": "68%",
            "width": "16%",
            "height": "24%"
        }
    },
    "compressor": {
        "title": "Compresor Rotativo de Tornillo",
        "badge": "SISTEMAS NEUMÁTICOS",
        "tag": "COMP-SC-1200-HP",
        "serial": "SN-9102-54X",
        "vendor": "AeroPress Systems",
        "temp": "51.8 °C (Normal)",
        "service": "28 Días (Programado)",
        "sync": "Sincronizado • ID #6720",
        "health": "Operativo • 96%",
        "confidence": "99.7%",
        "latency": "15.6 ms",
        "box1": {
            "label": "Compresor Tornillo SC-12 • 99.7%",
            "top": "20%",
            "left": "18%",
            "width": "50%",
            "height": "60%"
        },
        "box2": {
            "label": "Filtro de Aceite • INSPECCIONADO",
            "top": "30%",
            "left": "68%",
            "width": "16%",
            "height": "36%"
        }
    }
},
  fr: {
    "turbine": {
        "title": "Pompe Centrifuge à Boue",
        "badge": "ÉQUIPEMENT ROTATIF",
        "tag": "PUMP-CPX-800-MD",
        "serial": "SN-8849-01B",
        "vendor": "FlowMax Dynamics",
        "temp": "48.2 °C (Normal)",
        "service": "14 Jours (Routine)",
        "sync": "Synchronisé • ID #9481",
        "health": "Sain • 98%",
        "confidence": "99.8%",
        "latency": "14.2 ms",
        "box1": {
            "label": "Pompe Turbine #402 • 99.8% Concordance",
            "top": "16%",
            "left": "15%",
            "width": "46%",
            "height": "68%"
        },
        "box2": {
            "label": "Joint de Bride • CONFORME",
            "top": "36%",
            "left": "62%",
            "width": "24%",
            "height": "36%"
        }
    },
    "valve": {
        "title": "Vanne de Régulation Cryogénique",
        "badge": "RÉGULATION PRESSION",
        "tag": "VALVE-PV-94-CRYO",
        "serial": "SN-4412-99C",
        "vendor": "Vortex Automation",
        "temp": "-32.4 °C (Stable)",
        "service": "4 Jours (Imminent)",
        "sync": "Synchronisé • ID #3312",
        "health": "Avertissement • Joint",
        "confidence": "99.4%",
        "latency": "11.8 ms",
        "box1": {
            "label": "Vanne Cryogénique PV-94 • 99.4% Concordance",
            "top": "22%",
            "left": "22%",
            "width": "54%",
            "height": "58%"
        },
        "box2": {
            "label": "Tige Actionneur • CALIBRÉ",
            "top": "10%",
            "left": "42%",
            "width": "18%",
            "height": "26%"
        }
    },
    "motor": {
        "title": "Moteur à Induction Haut Couple",
        "badge": "ÉLECTROMÉCANIQUE",
        "tag": "MOTOR-IND-M7-3P",
        "serial": "SN-7731-08A",
        "vendor": "ElectroCore Global",
        "temp": "64.1 °C (Nominal)",
        "service": "45 Jours (Sain)",
        "sync": "Synchronisé • ID #1842",
        "health": "Optimal • 100%",
        "confidence": "99.9%",
        "latency": "9.4 ms",
        "box1": {
            "label": "Moteur Induction M-7 • 99.9% Concordance",
            "top": "24%",
            "left": "22%",
            "width": "48%",
            "height": "56%"
        },
        "box2": {
            "label": "Boîte à Bornes • OK",
            "top": "16%",
            "left": "68%",
            "width": "16%",
            "height": "24%"
        }
    },
    "compressor": {
        "title": "Compresseur Rotatif à Vis",
        "badge": "SYSTÈMES PNEUMATIQUES",
        "tag": "COMP-SC-1200-HP",
        "serial": "SN-9102-54X",
        "vendor": "AeroPress Systems",
        "temp": "51.8 °C (Normal)",
        "service": "28 Jours (Planifié)",
        "sync": "Synchronisé • ID #6720",
        "health": "Opérationnel • 96%",
        "confidence": "99.7%",
        "latency": "15.6 ms",
        "box1": {
            "label": "Compresseur à Vis SC-12 • 99.7%",
            "top": "20%",
            "left": "18%",
            "width": "50%",
            "height": "60%"
        },
        "box2": {
            "label": "Unité Filtre à Huile • INSPECTÉ",
            "top": "30%",
            "left": "68%",
            "width": "16%",
            "height": "36%"
        }
    }
}
};

const MACHINE_SVGS = {
  turbine: `
    <circle cx="180" cy="120" r="60" stroke="#00e5ff" stroke-width="2.5" stroke-dasharray="4 2" fill="rgba(0, 229, 255, 0.05)" />
    <circle cx="180" cy="120" r="32" stroke="#4364f7" stroke-width="3" fill="rgba(67, 100, 247, 0.15)" />
    <path d="M180 88V152M148 120H212M158 98L202 142M158 142L202 98" stroke="#00e5ff" stroke-width="2" stroke-linecap="round"/>
    <rect x="240" y="100" width="90" height="40" rx="6" stroke="#10b981" stroke-width="2" fill="rgba(16, 185, 129, 0.08)"/>
    <line x1="240" y1="120" x2="330" y2="120" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3"/>
    <rect x="80" y="105" width="40" height="30" rx="4" stroke="#00e5ff" stroke-width="2" fill="rgba(0, 229, 255, 0.06)"/>
    <circle cx="285" cy="120" r="8" fill="#10b981" />
  `,
  valve: `
    <polygon points="120,80 200,120 120,160" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.08)"/>
    <polygon points="280,80 200,120 280,160" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.08)"/>
    <rect x="185" y="40" width="30" height="50" rx="4" stroke="#10b981" stroke-width="2.5" fill="rgba(16, 185, 129, 0.15)"/>
    <circle cx="200" cy="35" r="18" stroke="#8b5cf6" stroke-width="3" fill="rgba(139, 92, 246, 0.15)"/>
    <line x1="80" y1="120" x2="320" y2="120" stroke="#00e5ff" stroke-width="2" stroke-dasharray="5 3"/>
  `,
  motor: `
    <rect x="120" y="80" width="160" height="90" rx="10" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.08)"/>
    <line x1="150" y1="80" x2="150" y2="170" stroke="#00e5ff" stroke-width="1.5"/>
    <line x1="180" y1="80" x2="180" y2="170" stroke="#00e5ff" stroke-width="1.5"/>
    <line x1="210" y1="80" x2="210" y2="170" stroke="#00e5ff" stroke-width="1.5"/>
    <line x1="240" y1="80" x2="240" y2="170" stroke="#00e5ff" stroke-width="1.5"/>
    <rect x="280" y="112" width="45" height="26" rx="4" stroke="#10b981" stroke-width="2" fill="rgba(16, 185, 129, 0.2)"/>
    <rect x="150" y="55" width="40" height="25" rx="3" stroke="#8b5cf6" stroke-width="2" fill="rgba(139, 92, 246, 0.2)"/>
  `,
  compressor: `
    <rect x="100" y="70" width="180" height="105" rx="12" stroke="#00e5ff" stroke-width="2.5" fill="rgba(0, 229, 255, 0.06)"/>
    <circle cx="160" cy="120" r="30" stroke="#10b981" stroke-width="2" stroke-dasharray="3 3"/>
    <circle cx="220" cy="120" r="30" stroke="#10b981" stroke-width="2" stroke-dasharray="3 3"/>
    <path d="M140 120 Q160 95 180 120 T220 120" stroke="#4364f7" stroke-width="3" fill="none"/>
    <rect x="280" y="90" width="35" height="60" rx="6" stroke="#f59e0b" stroke-width="2" fill="rgba(245, 158, 11, 0.15)"/>
  `
};

let currentActiveMachine = 'turbine';

function loadMachine(key) {
  currentActiveMachine = key;
  const langDb = MACHINE_DATABASE_I18N[currentLanguage] || MACHINE_DATABASE_I18N['en'];
  const data = langDb[key];
  if (!data) return;

  const svgContainer = document.getElementById('machineSvg');
  const boxMain = document.getElementById('boxMain');
  const boxMainLabel = document.getElementById('boxMainLabel');
  const boxSub = document.getElementById('boxSub');
  const boxSubLabel = document.getElementById('boxSubLabel');
  
  const specBadge = document.getElementById('specBadge');
  const specTitle = document.getElementById('specTitle');
  const specHealth = document.getElementById('specHealth');
  const specTag = document.getElementById('specTag');
  const specSerial = document.getElementById('specSerial');
  const specVendor = document.getElementById('specVendor');
  const specTemp = document.getElementById('specTemp');
  const specService = document.getElementById('specService');
  const specSync = document.getElementById('specSync');
  const valLatency = document.getElementById('valLatency');
  const valConfidence = document.getElementById('valConfidence');

  if (svgContainer) {
    svgContainer.style.opacity = '0';
    setTimeout(() => {
      svgContainer.innerHTML = MACHINE_SVGS[key] || '';
      svgContainer.style.opacity = '1';
    }, 150);
  }

  if (boxMain && boxMainLabel) {
    boxMain.style.left = data.box1.left || '15%';
    boxMain.style.right = '';
    boxMain.style.top = data.box1.top || '15%';
    boxMain.style.bottom = '';
    boxMain.style.width = data.box1.width;
    boxMain.style.height = data.box1.height;
    boxMainLabel.innerText = data.box1.label;
  }

  if (boxSub && boxSubLabel) {
    boxSub.style.left = data.box2.left || '65%';
    boxSub.style.right = '';
    boxSub.style.top = data.box2.top || '35%';
    boxSub.style.bottom = '';
    boxSub.style.width = data.box2.width;
    boxSub.style.height = data.box2.height;
    boxSubLabel.innerText = data.box2.label;
  }

  if (specBadge) specBadge.innerText = data.badge;
  if (specTitle) specTitle.innerText = data.title;
  if (specHealth) specHealth.innerText = data.health;
  if (specTag) specTag.innerText = data.tag;
  if (specSerial) specSerial.innerText = data.serial;
  if (specVendor) specVendor.innerText = data.vendor;
  if (specTemp) specTemp.innerText = data.temp;
  if (specService) specService.innerText = data.service;
  if (specSync) specSync.innerText = data.sync;
  if (valLatency) valLatency.innerText = data.latency;
  if (valConfidence) valConfidence.innerText = data.confidence;
}

function initMachineScanner() {
  const tabs = document.querySelectorAll('.machine-tab');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      loadMachine(tab.getAttribute('data-machine'));
    });
  });

  loadMachine('turbine');

  const streamLog = document.getElementById('streamLogContainer');
  const logPool = [
    { tag: 'INSPECT', cls: 'log-cyan', msg: 'Spatial feature extraction 100% verified.' },
    { tag: 'OCR_PASS', cls: 'log-green', msg: 'Serial plate optical text verified with plant ERP.' },
    { tag: 'TELEMETRY', cls: 'log-blue', msg: 'Vibration & heat sensors reporting nominal levels.' },
    { tag: 'CLOUD_SYNC', cls: 'log-green', msg: 'Cloud digital twin packet pushed successfully.' }
  ];

  let logIdx = 0;
  setInterval(() => {
    if (!streamLog) return;
    const item = logPool[logIdx % logPool.length];
    const now = new Date();
    const timeStr = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}]`;
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span class="log-time">${timeStr}</span> <span class="${item.cls}">${item.tag}:</span> ${item.msg}`;
    streamLog.appendChild(entry);
    if (streamLog.children.length > 5) {
      streamLog.removeChild(streamLog.firstElementChild);
    }
    logIdx++;
  }, 3500);
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
        "challenge": "Técnicos frente a modelos desconocidos sin conexión a internet y necesitando pares de apriete y guías OEM.",
        "solution": "Modelo de IA local offline que identifica maquinaria en zonas remotas sin cobertura celular.",
        "pills": [
            "IA offline en el dispositivo",
            "Pares de apriete inmediatos",
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
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied: ${textToCopy}`, 'success');
      }).catch(() => {
        showToast(`Copy manually: ${textToCopy}`, 'info');
      });
    });
  });
}

/* ==========================================================================
   11. Interactive Contact Form Submission Logic
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const org = form.organization ? form.organization.value.trim() : '';
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      if (feedback) {
        feedback.className = 'form-feedback error';
        feedback.innerText = currentLanguage === 'es' 
          ? 'Por favor completa todos los campos requeridos.' 
          : (currentLanguage === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : 'Please fill out all required fields.');
        feedback.style.display = 'block';
      }
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>${currentLanguage === 'es' ? 'Enviando...' : (currentLanguage === 'fr' ? 'Envoi en cours...' : 'Sending...')}</span>`;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>${currentLanguage === 'es' ? 'Mensaje Enviado ✓' : (currentLanguage === 'fr' ? 'Message Envoyé ✓' : 'Message Sent ✓')}</span>`;
      }

      if (feedback) {
        feedback.className = 'form-feedback success';
        feedback.innerText = currentLanguage === 'es'
          ? `¡Gracias, ${name}! Tu solicitud ha sido recibida. Nos comunicaremos contigo en menos de 24 horas.`
          : (currentLanguage === 'fr' 
             ? `Merci ${name} ! Votre demande a été reçue. Nous vous contacterons sous 24 heures.`
             : `Thank you, ${name}! Your inquiry has been received. Our team will contact you within 24 hours.`);
        feedback.style.display = 'block';
      }

      form.reset();
      showToast(currentLanguage === 'es' ? 'Mensaje enviado exitosamente' : (currentLanguage === 'fr' ? 'Message envoyé avec succès' : 'Inquiry sent successfully!'), 'success');
    }, 900);
  });
}

/* ==========================================================================
   12. Multi-Language Internationalization (i18n) Engine
   English (EN), Spanish (ES), French (FR)
   ========================================================================== */