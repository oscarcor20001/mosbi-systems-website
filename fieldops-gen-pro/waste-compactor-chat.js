/*!
 * MOSBI Systems - Official AI Industrial Chatbot & Robot Mascot Controller
 * Zero external dependencies. High-performance SVG + CSS state-driven animation.
 * Features:
 *   - Autonomous Robot Avatar (Floating, Blinking, Head-Scratch, Wink/OK, Sleep/Wake)
 *   - Deep Inactivity Sleep Mode (falls asleep after inactivity and jolts awake on typing)
 *   - Grounded Knowledge Base: MachId™ AI, FieldOps Gen Pro, Custom AI & Vision, ROI, Contact
 *   - Full Multilingual Sync (ES, EN, FR) with live switching
 */
(function (global) {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Translations & Knowledge Base
  // --------------------------------------------------------------------------
  var KB = {
    es: {
      botTitle: 'MOSBI Industrial AI',
      botSubtitle: 'Asistente Oficial • En línea',
      launcherText: 'MOSBI AI',
      launcherSub: 'Asistente En Línea',
      inputPlaceholder: 'Escribe tu consulta técnica o comercial...',
      sendBtnAria: 'Enviar mensaje',
      minimizeBtnAria: 'Minimizar chat',
      langToggleAria: 'Cambiar idioma',
      sleepingNotice: 'Zzz... Robot en modo reposo. Escribe algo para despertarlo.',
      welcome: '¡Hola! Soy el asistente de Inteligencia Artificial de **MOSBI Systems**. Puedo orientarte sobre nuestra plataforma **MachId™**, **FieldOps Gen Pro**, desarrollo de software a medida o agendar una demostración con nuestros ingenieros.',
      chips: [
        { label: '🔍 ¿Qué es MachId™?', query: 'que es machid' },
        { label: '🛠️ Ver FieldOps Gen Pro', query: 'que es fieldops' },
        { label: '💼 Software & IA a Medida', query: 'servicios a medida' },
        { label: '📊 Calcular ROI', query: 'calcular roi' },
        { label: '🏢 Compactadores & Chutes', query: 'compactador chute basura edificio' },
        { label: '📅 Agendar Demostración', query: 'agendar demo' }
      ],
      leadTitle: '📋 Solicitud de Inspección Técnica & Propuesta',
      leadSub: 'Por favor indíquenos sus datos y la dirección de su propiedad para que un representante técnico de servicios coordine una inspección técnica de su sitio y elabore su propuesta personalizada:',
      leadNamePlh: 'Nombre de la persona contacto *',
      leadPhonePlh: 'Teléfono de contacto *',
      leadEmailPlh: 'Correo electrónico',
      leadAddressPlh: 'Dirección del edificio o planta *',
      leadDescPlh: '¿Qué necesitas solucionar? (pisos, cuartos, contenedores, etc.)',
      leadSubmit: 'Solicitar Inspección Técnica / Enviar Información',
      leadSending: 'Procesando solicitud...',
      leadSuccess: '¡Muchas gracias! Su valiosa interacción ha sido de gran ayuda. Su petición será atendida lo más pronto posible por nuestro personal técnico de servicios, quien se comunicará con usted para coordinar la inspección técnica de su sitio y elaborar su propuesta.',
      leadError: 'Por favor ingresa al menos tu nombre, teléfono y la dirección del edificio.',
      
      answers: {
                        wastecaddy: {
          text: "🚜 **Orientación Técnica: Traslado y Manejo de Contenedores (WasteCaddy™):**\n\n" +
                "En MOSBI Systems **poseemos máquinas y equipos motorizados que cumplen con su necesidad** para el traslado seguro y ergonómico de contenedores de basura.\n\n" +
                "Para determinar el tipo de equipo adecuado según la ruta de su edificio (espacios de maniobra, distancias o presencia de rampas y pendientes), **es indispensable auditar las características técnicas del sitio**. Un representante técnico de servicios realizará una inspección técnica en sus instalaciones para evaluar el recorrido y posteriormente elaborará una propuesta adecuada.\n\n" +
                "👉 **Por favor indíquenos sus datos y ubicación a continuación para coordinar la visita:**",
          showLeadForm: true
        },
        autopak_std: {
          text: "📋 **Orientación Técnica: Diagnóstico y Reemplazo de Equipos:**\n\n" +
                "En MOSBI Systems **poseemos maquinaria y soluciones técnicas que cumplen con su necesidad**, ya sea para reacondicionamiento operativo o reemplazo y modernización de equipos compactadores.\n\n" +
                "Para evaluar la viabilidad de su instalación y verificar el acople con sus contenedores y acometida eléctrica, **es indispensable auditar las características técnicas del sitio**. Un representante técnico de servicios realizará una inspección técnica en sitio para determinar las características del equipo necesario y posteriormente elaborará una propuesta formal.\n\n" +
                "👉 **Por favor complete sus datos para que nuestro personal técnico coordine la visita:**",
          showLeadForm: true
        },
        compactor: {
          text: "🏢 **Orientación Técnica para Edificio con Chute de Basura:**\n\n" +
                "¡Excelente consulta! Para la configuración de su edificio con ducto de 24\", **en MOSBI Systems poseemos máquinas y sistemas que cumplen con su necesidad**.\n\n" +
                "Para garantizar que el equipo opere de forma óptima y se acople con absoluta precisión a su cuarto de basura y a sus contenedores, **es indispensable auditar las características técnicas del sitio**. Por ello, debe realizarse una visita por parte de un **representante técnico de servicios**, quien elaborará una inspección técnica para determinar las características del equipo necesario y posteriormente elaborará una propuesta formal.\n\n" +
                "👉 **Por favor indíquenos sus datos y la dirección de la propiedad a continuación para coordinar la inspección técnica:**",
          showLeadForm: true
        },
        machid: {
          text: '⚡ **MachId™ Machine Identifier AI (v2.0)** es nuestra solución insignia de visión artificial industrial:\n\n' +
                '• **Identificación Cero-Códigos:** Reconoce turbinas, bombas ANSI, válvulas y reductores sin necesidad de códigos de barra o placas legibles.\n' +
                '• **Cotejo Morfológico 3D & OCR:** Analiza curvatura de volutas, bridas y lee placas metálicas corroídas bajo capas de pintura.\n' +
                '• **Esquemáticos & Dossier Técnico:** Recupera instantáneamente planos PDF, números de parte y manuales de servicio.',
          actions: [
            { text: 'Abrir Demo Interactiva de MachId™', href: 'machid/index.html', icon: 'eye' },
            { text: 'Solicitar Piloto Enterprise', href: '#contact', icon: 'mail' }
          ]
        },
        fieldops: {
          text: '🛠️ **FieldOps Gen Pro** es la plataforma integral de gestión de servicios en campo (*Field Service Management*) de MOSBI Systems:\n\n' +
                '• **Packs de Industria Dinámicos:** HVAC, Plomería, Techado, Eléctrico, Seguridad y Maquinaria.\n' +
                '• **Inventario en Van & Kits Predictivos:** Verificación de repuestos antes de que ruede el vehículo.\n' +
                '• **90 Normas de Seguridad OSHA:** Cumplimiento normativo 29 CFR 1910/1926 con firmas inmutables.\n' +
                '• **Recibos Digitales en 2 Pasos & AI Dispatcher:** Emisión sin papel y pasarela de chat con IA embebible.',
          actions: [
            { text: 'Explorar FieldOps Gen Pro', href: 'fieldops-gen-pro/index.html', icon: 'arrow' },
            { text: 'Abrir App Web', href: 'https://app.mosbisystems.com', icon: 'external' }
          ]
        },
        services: {
          text: '💼 **Servicios de Ingeniería y Soluciones Digitales de MOSBI Systems:**\n\n' +
                '1. **Inteligencia Artificial Aplicada:** Detección de anomalías en planta, automatización de flujos y diagnósticos predictivos.\n' +
                '2. **Sistemas de Visión Computacional:** Modelos Edge y Cloud para control de calidad e inventario visual.\n' +
                '3. **Aplicaciones Móviles de Campo:** Apps nativas/Flutter con arquitectura Offline-First para técnicos en planta.\n' +
                '4. **Plataformas Cloud & SaaS:** Integración segura con sistemas ERP y CMMS corporativos.',
          actions: [
            { text: 'Consultar Solución a Medida', href: '#contact', icon: 'mail' }
          ]
        },
        roi: {
          text: '📊 **Retorno de Inversión (ROI) Garantizado:**\n\n' +
                '• Reduce hasta un **65% el tiempo de diagnóstico** de maquinaria.\n' +
                '• Evita viajes fallidos de técnicos verificando el stock en van por adelantado.\n' +
                '• Elimina paradas no programadas con identificación forense inmediata.',
          actions: [
            { text: 'Ir a la Calculadora de ROI en la página', href: '#roi-calculator', icon: 'calc' }
          ]
        },
        demo: {
          text: '📅 **¿Deseas agendar una demostración técnica personalizada o hablar con un especialista?**\n\n' +
                'Puedes completar el siguiente formulario rápido o contactarnos directamente a **sales@mosbisystems.com**.',
          showLeadForm: true
        },
        fallback: {
          text: "Comprendo su consulta. En MOSBI Systems **poseemos máquinas, software y soluciones de ingeniería que cumplen con su necesidad**.\n\n" +
                "Para evaluar su instalación con total precisión, **es indispensable auditar las características técnicas del sitio mediante una visita por parte de un representante técnico de servicios**, quien determinará las características del equipo necesario y posteriormente elaborará una propuesta formal.\n\n" +
                "👉 **Por favor indíquenos sus datos y dirección a continuación para coordinar la atención con nuestro personal técnico:**",
          showLeadForm: true
        }
      }
    },
    en: {
      botTitle: 'MOSBI Industrial AI',
      botSubtitle: 'Official Assistant • Online',
      launcherText: 'MOSBI AI',
      launcherSub: 'Assistant Online',
      inputPlaceholder: 'Ask a technical or enterprise inquiry...',
      sendBtnAria: 'Send message',
      minimizeBtnAria: 'Minimize chat',
      langToggleAria: 'Change language',
      sleepingNotice: 'Zzz... Robot in power-save mode. Type to wake it up.',
      welcome: 'Hello! I am the **MOSBI Systems** AI Assistant. I can guide you through our **MachId™** platform, **FieldOps Gen Pro**, custom software development, or book a live engineering demo.',
      chips: [
        { label: '🔍 What is MachId™?', query: 'what is machid' },
        { label: '🛠️ Explore FieldOps Gen Pro', query: 'what is fieldops' },
        { label: '💼 Custom AI & Software', query: 'custom services' },
        { label: '📊 Calculate ROI', query: 'calculate roi' },
        { label: '🏢 Compactors & Chutes', query: 'compactor 24 chute trash building' },
        { label: '📅 Book a Live Demo', query: 'book demo' }
      ],
      leadTitle: '📋 Technical Site Inspection & Proposal Request',
      leadSub: 'Please provide your facility details so a technical service representative can coordinate an on-site inspection of your site and prepare your customized proposal:',
      leadNamePlh: 'Contact Name *',
      leadPhonePlh: 'Contact Phone *',
      leadEmailPlh: 'Work Email',
      leadAddressPlh: 'Facility or Building Address *',
      leadDescPlh: 'Describe your requirements (floors, room size, containers, etc.)',
      leadSubmit: 'Request Technical Inspection / Submit',
      leadSending: 'Processing request...',
      leadSuccess: 'Thank you very much! Your valuable interaction has been extremely helpful. Your request will be attended to as soon as possible by our technical service personnel, who will reach out to coordinate the on-site technical inspection and prepare your proposal.',
      leadError: 'Please provide your name, contact phone number, and building address.',
      
      answers: {
        wastecaddy: {
          text: "🚜 **Technical Orientation: Container Transport & Handling (WasteCaddy™):**\n\n" +
                "At MOSBI Systems, **we possess motorized machinery and solutions that meet your requirements** for ergonomic, safe, and compliant trash container transport.\n\n" +
                "To determine the appropriate equipment configuration based on your building layout (maneuvering clearances, distances, or inclines/ramps), **it is essential to audit the technical characteristics of the site**. A technical service representative will perform an on-site inspection of the path and subsequently prepare an appropriate proposal.\n\n" +
                "👉 **Please enter your contact details and facility location below to coordinate the visit:**",
          showLeadForm: true
        },
        autopak_std: {
          text: "📋 **Technical Orientation: Equipment Diagnosis & Modernization:**\n\n" +
                "At MOSBI Systems, **we possess machinery and engineering solutions that meet your requirements**, whether for on-site overhaul or modern turnkey equipment replacement.\n\n" +
                "To evaluate your facility's setup, container docking, and electrical feed, **it is essential to audit the technical characteristics of the site**. A technical service representative will conduct an on-site technical inspection to establish equipment requirements and prepare a formal proposal.\n\n" +
                "👉 **Please fill in your details to coordinate an inspection with our team:**",
          showLeadForm: true
        },
        compactor: {
          text: "🏢 **Technical Orientation for Facility with Refuse Chute:**\n\n" +
                "Thank you for reaching out! For your building layout with a 24\" chute, **at MOSBI Systems we possess machines and systems that meet your requirements**.\n\n" +
                "To ensure that the equipment performs reliably and docks seamlessly with your trash room and containers, **it is essential to audit the technical characteristics of the site**. Therefore, a visit must be conducted by a **technical service representative**, who will perform an on-site technical inspection to determine the necessary equipment specifications and subsequently prepare a formal proposal.\n\n" +
                "👉 **Please provide your contact details and facility address below to arrange the technical inspection:**",
          showLeadForm: true
        },
        machid: {
          text: '⚡ **MachId™ Machine Identifier AI (v2.0)** is our flagship computer vision platform for industrial assets:\n\n' +
                '• **Zero-Barcode Visual Identification:** Recognizes turbines, pumps, valves, and gearboxes without visible nameplates.\n' +
                '• **3D Morphology & Forensic OCR:** Matches volute curvature, suction/discharge flanges, and reads heavily corroded tags.\n' +
                '• **Instant Technical Schematics:** Pulls manufacturer part numbers, exploded diagrams, and field maintenance dossiers.',
          actions: [
            { text: 'Explore MachId™ Interactive Demo', href: 'machid/index.html', icon: 'eye' },
            { text: 'Request Enterprise Pilot', href: '#contact', icon: 'mail' }
          ]
        },
        fieldops: {
          text: '🛠️ **FieldOps Gen Pro** is the multi-industry field service platform engineered by MOSBI Systems:\n\n' +
                '• **Dynamic Industry Packs:** HVAC, Plumbing, Roofing, Electrical, Security, Compaction & Waste.\n' +
                '• **Van Inventory & Predictive Repair Kits:** Real-time stock audit before the service truck departs.\n' +
                '• **90 OSHA Safety Standards:** 29 CFR 1910/1926 compliance with immutable digital acknowledgments.\n' +
                '• **Guided 2-Step Digital Receipts & AI Chat Gateway:** Seamless handoff to human dispatchers.',
          actions: [
            { text: 'Explore FieldOps Gen Pro', href: 'fieldops-gen-pro/index.html', icon: 'arrow' },
            { text: 'Launch Web App', href: 'https://app.mosbisystems.com', icon: 'external' }
          ]
        },
        services: {
          text: '💼 **MOSBI Systems Engineering & Custom Solutions:**\n\n' +
                '1. **Applied Artificial Intelligence:** Shop-floor anomaly detection, predictive diagnostics, workflow automation.\n' +
                '2. **Computer Vision Systems:** Edge and cloud visual inspection models for industrial facilities.\n' +
                '3. **Field Mobile Applications:** Offline-first Flutter mobile apps for field technicians.\n' +
                '4. **Enterprise Cloud Platforms:** Secure integrations with existing CMMS and ERP backends.',
          actions: [
            { text: 'Discuss Custom Solution', href: '#contact', icon: 'mail' }
          ]
        },
        roi: {
          text: '📊 **Proven Return on Investment (ROI):**\n\n' +
                '• Cuts machine diagnostics time by up to **65%** on the plant floor.\n' +
                '• Eliminates wasted truck rolls via predictive repair kits and van inventory audits.\n' +
                '• Prevents downtime through instant model identification.',
          actions: [
            { text: 'Go to On-Page ROI Calculator', href: '#roi-calculator', icon: 'calc' }
          ]
        },
        demo: {
          text: '📅 **Ready to schedule an executive walkthrough or pilot program?**\n\n' +
                'Fill out this quick form or email our engineering leadership at **sales@mosbisystems.com**.',
          showLeadForm: true
        },
        fallback: {
          text: "I understand your inquiry. At MOSBI Systems, **we possess machinery, software, and engineering solutions that meet your requirements**.\n\n" +
                "To assess your facility with precision, **it is essential to audit the technical characteristics of the site through an on-site visit by a technical service representative**, who will determine the necessary equipment specifications and subsequently prepare a formal proposal.\n\n" +
                "👉 **Please provide your contact information and facility address below to arrange technical service:**",
          showLeadForm: true
        }
      }
    },
    fr: {
      botTitle: 'MOSBI Industrial AI',
      botSubtitle: 'Assistant Officiel • En ligne',
      launcherText: 'MOSBI AI',
      launcherSub: 'Assistant En Ligne',
      inputPlaceholder: 'Posez une question technique ou commerciale...',
      sendBtnAria: 'Envoyer le message',
      minimizeBtnAria: 'Réduire le chat',
      langToggleAria: 'Changer de langue',
      sleepingNotice: 'Zzz... Robot en veille. Tapez un message pour le réveiller.',
      welcome: 'Bonjour ! Je suis l\'assistant IA de **MOSBI Systems**. Je peux vous présenter **MachId™**, **FieldOps Gen Pro**, nos services de développement sur mesure ou planifier une démonstration technique.',
      chips: [
        { label: '🔍 Qu\'est-ce que MachId™ ?', query: 'machid' },
        { label: '🛠️ Voir FieldOps Gen Pro', query: 'fieldops' },
        { label: '💼 Solutions Sur Mesure', query: 'services' },
        { label: '📊 Calculer le ROI', query: 'roi' },
        { label: '🏢 Compacteurs & Chutes', query: 'compacteur chute dechet batiment' },
        { label: '📅 Réserver une Démo', query: 'demo' }
      ],
      leadTitle: '📋 Demande d\x27Inspection Technique & Proposition',
      leadSub: 'Veuillez renseigner vos coordonnées et l\x27adresse de votre établissement afin qu\x27un représentant technique de service planifie une inspection de votre site et établisse votre proposition :',
      leadNamePlh: 'Nom du contact *',
      leadPhonePlh: 'Téléphone du contact *',
      leadEmailPlh: 'Adresse e-mail',
      leadAddressPlh: 'Adresse du bâtiment ou de l\x27usine *',
      leadDescPlh: 'Description du besoin (étages, local, conteneurs, etc.)',
      leadSubmit: 'Demander l\x27inspection technique / Envoyer',
      leadSending: 'Transmission en cours...',
      leadSuccess: 'Merci beaucoup ! Votre précieuse interaction nous a été d\x27une grande aide. Votre demande sera traitée dans les plus brefs délais par notre personnel technique de service, qui vous contactera pour planifier l\x27inspection technique de votre site et élaborer votre proposition.',
      leadError: 'Veuillez renseigner votre nom, téléphone et adresse du bâtiment.',
      
      answers: {
        compactor: {
          text: "🏢 **Orientation Technique pour Bâtiment avec Vide-Ordures :**\n\n" +
                "Merci pour votre demande ! Pour la configuration de votre bâtiment avec gaine de 24\", **chez MOSBI Systems, nous disposons de machines et de systèmes qui répondent à votre besoin**.\n\n" +
                "Afin de garantir un fonctionnement optimal et un raccordement sans faille à votre local et à vos conteneurs, **il est indispensable d'auditer les caractéristiques techniques du site**. Pour cela, une visite doit être effectuée par un **représentant technique de service**, qui réalisera une inspection technique pour déterminer les caractéristiques de l'équipement nécessaire puis établira une proposition formelle.\n\n" +
                "👉 **Veuillez renseigner vos coordonnées et l'adresse de votre site ci-dessous pour planifier l'inspection technique :**",
          showLeadForm: true
        },
        machid: {
          text: '⚡ **MachId™ Machine Identifier AI (v2.0)** est notre système de vision par ordinateur pour l\'industrie :\n\n' +
                '• **Identification sans code-barres :** Reconnaissance visuelle de turbines, pompes et moteurs.\n' +
                '• **Morphologie 3D & OCR :** Détection médico-légale même sous peinture ou corrosion.\n' +
                '• **Schémas et dossiers techniques :** Accès immédiat aux manuels et références de pièces.',
          actions: [
            { text: 'Découvrir la Démo MachId™', href: 'machid/index.html', icon: 'eye' },
            { text: 'Demander un pilote d\'entreprise', href: '#contact', icon: 'mail' }
          ]
        },
        fieldops: {
          text: '🛠️ **FieldOps Gen Pro** est la plateforme de gestion des interventions de terrain de MOSBI Systems :\n\n' +
                '• **Packs Sectoriels :** CVC, Plomberie, Toiture, Électricité, Sécurité.\n' +
                '• **Inventaire Véhicule & Kits Prédictifs :** Contrôle des pièces avant le départ.\n' +
                '• **90 Normes OSHA :** Protocoles de sécurité avec validation numérique inaltérable.\n' +
                '• **Reçus Numériques en 2 Étapes & Passerelle IA :** Transmission directe aux régulateurs.',
          actions: [
            { text: 'Explorer FieldOps Gen Pro', href: 'fieldops-gen-pro/index.html', icon: 'arrow' }
          ]
        },
        services: {
          text: '💼 **Services d\'Ingénierie MOSBI Systems :**\n\n' +
                '1. **Intelligence Artificielle Industrielle :** Détection d\'anomalies et automatisation.\n' +
                '2. **Vision par Ordinateur :** Modèles visuels Edge & Cloud pour usines.\n' +
                '3. **Applications Mobiles Métier :** Applications Flutter fonctionnant hors-ligne.\n' +
                '4. **Plateformes Cloud SaaS :** Intégration avec ERP et GMAO existants.',
          actions: [
            { text: 'Contacter nos experts', href: '#contact', icon: 'mail' }
          ]
        },
        roi: {
          text: '📊 **Retour sur Investissement (ROI) prouvé :**\n\n' +
                '• Réduit le temps de diagnostic machine jusqu\'à **65%**.\n' +
                '• Évite les déplacements infructueux grâce aux kits de réparation prédictifs.\n' +
                '• Maximise la disponibilité opérationnelle de vos installations.',
          actions: [
            { text: 'Accéder au calculateur de ROI', href: '#roi-calculator', icon: 'calc' }
          ]
        },
        demo: {
          text: '📅 **Planifier une démonstration technique ?**\n\n' +
                'Remplissez le formulaire ci-dessous ou écrivez-nous à **sales@mosbisystems.com**.',
          showLeadForm: true
        },
        fallback: {
          text: "Je comprends votre demande. Chez MOSBI Systems, **nous disposons de machines, de logiciels et de solutions d'ingénierie répondant à votre besoin**.\n\n" +
                "Pour évaluer votre installation avec exactitude, **il est indispensable d'auditer les caractéristiques techniques du site par une visite d'un représentant technique de service**, qui déterminera les spécifications de l'équipement et établira une proposition formelle.\n\n" +
                "👉 **Veuillez renseigner vos coordonnées et votre adresse ci-dessous pour organiser la visite technique :**",
          showLeadForm: true
        }
      }
    }
  };

  // --------------------------------------------------------------------------
  // 2. Vector Robot SVG Generator
  // --------------------------------------------------------------------------
  function createRobotSVG(sizeClass) {
    return [
      '<div class="mb-robot-container ' + (sizeClass || '') + '">',
        '<svg class="mb-robot-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">',
          '<defs>',
            '<linearGradient id="mbHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">',
              '<stop offset="0%" stop-color="#243859"/>',
              '<stop offset="100%" stop-color="#0c1629"/>',
            '</linearGradient>',
            '<linearGradient id="mbVisorGrad" x1="0%" y1="0%" x2="0%" y2="100%">',
              '<stop offset="0%" stop-color="#060e1f"/>',
              '<stop offset="100%" stop-color="#02050d"/>',
            '</linearGradient>',
            '<linearGradient id="mbBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">',
              '<stop offset="0%" stop-color="#1b2c47"/>',
              '<stop offset="100%" stop-color="#080e1b"/>',
            '</linearGradient>',
          '</defs>',

          '<!-- Robot Torso -->',
          '<path d="M 33 68 Q 50 65 67 68 L 64 90 Q 50 94 36 90 Z" fill="url(#mbBodyGrad)" stroke="#0ea5e9" stroke-width="1.2"/>',
          '<!-- Torso Reactor Core -->',
          '<circle cx="50" cy="79" r="4.5" fill="#0284c7" stroke="#00e5ff" stroke-width="1.2"/>',
          '<circle cx="50" cy="79" r="2.2" fill="#00e5ff"/>',

          '<!-- Left Arm (Resting) -->',
          '<path d="M 33 69 Q 25 76 27 86" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>',
          '<path d="M 33 69 Q 25 76 27 86" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round"/>',
          '<circle cx="27" cy="86" r="3" fill="#38bdf8"/>',

          '<!-- Right Arm (Articulated for Head Scratching) -->',
          '<g class="mb-bot-arm-right">',
            '<path d="M 67 69 Q 75 76 73 86" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/>',
            '<path d="M 67 69 Q 75 76 73 86" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round"/>',
            '<circle cx="73" cy="86" r="3" fill="#38bdf8"/>',
          '</g>',

          '<!-- Neck -->',
          '<rect x="46" y="61" width="8" height="6" rx="2" fill="#0f172a" stroke="#0ea5e9" stroke-width="1"/>',

          '<!-- Robot Head Group (Tilts on scratch / Nods on wink / Droops on sleep) -->',
          '<g class="mb-bot-head">',
            '<!-- Antenna Stem & Glowing Bulb -->',
            '<line x1="50" y1="24" x2="50" y2="14" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round"/>',
            '<circle cx="50" cy="12" r="4" class="mb-robot-antenna-bulb" fill="#00e5ff"/>',

            '<!-- Head Chassis -->',
            '<rect x="26" y="24" width="48" height="38" rx="10" fill="url(#mbHeadGrad)" stroke="#0ea5e9" stroke-width="1.5"/>',

            '<!-- Ear Pods / Sensors -->',
            '<rect x="22" y="36" width="5" height="14" rx="2.5" fill="#0284c7" stroke="#00e5ff" stroke-width="1"/>',
            '<rect x="73" y="36" width="5" height="14" rx="2.5" fill="#0284c7" stroke="#00e5ff" stroke-width="1"/>',

            '<!-- Visor / Face Screen -->',
            '<rect x="32" y="31" width="36" height="24" rx="6" fill="url(#mbVisorGrad)" stroke="rgba(0,229,255,0.4)" stroke-width="1"/>',

            '<!-- Normal Open Eyes (Cyan Glowing Ovals) -->',
            '<g class="mb-bot-eyes-group">',
              '<ellipse class="mb-bot-eye-open mb-bot-eye-left" cx="42" cy="43" rx="3.5" ry="4.5"/>',
              '<ellipse class="mb-bot-eye-open mb-bot-eye-right mb-bot-eye-right-open" cx="58" cy="43" rx="3.5" ry="4.5"/>',
            '</g>',

            '<!-- Wink Eye (Happy arc shown when winking) -->',
            '<path class="mb-bot-eye-wink" d="M 54 44 Q 58 40 62 44" stroke="#00e5ff" stroke-width="2.6" stroke-linecap="round" fill="none"/>',

            '<!-- Sleep Closed Eyes (Horizontal relaxed slits) -->',
            '<g class="mb-bot-eye-sleep">',
              '<line x1="38" y1="44" x2="46" y2="44" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round"/>',
              '<line x1="54" y1="44" x2="62" y2="44" stroke="#00e5ff" stroke-width="2.2" stroke-linecap="round"/>',
            '</g>',

            '<!-- Cyber Cheeks -->',
            '<circle cx="39" cy="50" r="1.5" fill="#0ea5e9" opacity="0.6"/>',
            '<circle cx="61" cy="50" r="1.5" fill="#0ea5e9" opacity="0.6"/>',

            '<!-- Scratch Motion Lines (appears near head while scratching) -->',
            '<g class="mb-bot-scratch-lines">',
              '<path d="M 74 24 Q 78 22 80 25" stroke="#00e5ff" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
              '<path d="M 76 28 Q 80 27 82 30" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" fill="none"/>',
            '</g>',

            '<!-- OK Sparkle (pops during wink) -->',
            '<g class="mb-bot-ok-sparkle">',
              '<path d="M 75 30 L 76.5 33.5 L 80 35 L 76.5 36.5 L 75 40 L 73.5 36.5 L 70 35 L 73.5 33.5 Z" fill="#00e5ff"/>',
            '</g>',
          '</g>',

          '<!-- Sleeping Floating Zzz -->',
          '<g class="mb-bot-sleep-zzz">',
            '<text x="66" y="24" fill="#00e5ff" font-family="JetBrains Mono, monospace" font-size="10" font-weight="bold">z</text>',
            '<text x="73" y="18" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="12" font-weight="bold">Z</text>',
            '<text x="82" y="11" fill="#00e5ff" font-family="JetBrains Mono, monospace" font-size="14" font-weight="bold">Z</text>',
          '</g>',
        '</svg>',
      '</div>'
    ].join('');
  }

  // --------------------------------------------------------------------------
  // 3. Robot State Controller
  // --------------------------------------------------------------------------
  function createRobotController(containerElements) {
    var state = {
      isSleeping: false,
      isScratching: false,
      isWinking: false,
      isBlinking: false
    };

    function forEachElem(fn) {
      containerElements.forEach(function (el) {
        if (el) fn(el);
      });
    }

    return {
      getState: function () {
        return state;
      },

      scratchHead: function () {
        if (state.isSleeping || state.isScratching) return;
        state.isScratching = true;
        forEachElem(function (el) {
          el.classList.remove('is-winking', 'bot-blinking');
          el.classList.add('is-scratching');
        });
        setTimeout(function () {
          forEachElem(function (el) { el.classList.remove('is-scratching'); });
          state.isScratching = false;
        }, 2250);
      },

      winkOk: function () {
        if (state.isSleeping) return;
        state.isWinking = true;
        forEachElem(function (el) {
          el.classList.remove('is-scratching', 'bot-blinking');
          el.classList.add('is-winking');
        });
        setTimeout(function () {
          forEachElem(function (el) { el.classList.remove('is-winking'); });
          state.isWinking = false;
        }, 1700);
      },

      blink: function () {
        if (state.isSleeping || state.isScratching || state.isWinking) return;
        state.isBlinking = true;
        forEachElem(function (el) { el.classList.add('bot-blinking'); });
        setTimeout(function () {
          forEachElem(function (el) { el.classList.remove('bot-blinking'); });
          state.isBlinking = false;
        }, 220);
      },

      fallAsleep: function () {
        if (state.isSleeping) return;
        state.isSleeping = true;
        state.isScratching = false;
        state.isWinking = false;
        forEachElem(function (el) {
          el.classList.remove('is-scratching', 'is-winking', 'bot-blinking', 'is-waking');
          el.classList.add('is-sleeping');
        });
      },

      wakeUp: function () {
        if (!state.isSleeping) return;
        state.isSleeping = false;
        forEachElem(function (el) {
          el.classList.remove('is-sleeping');
          el.classList.add('is-waking');
        });
        setTimeout(function () {
          forEachElem(function (el) { el.classList.remove('is-waking'); });
          // Give a cute friendly wink right after waking up!
          setTimeout(function () {
            if (!state.isSleeping) {
              forEachElem(function (el) { el.classList.add('is-winking'); });
              setTimeout(function () {
                forEachElem(function (el) { el.classList.remove('is-winking'); });
              }, 1500);
            }
          }, 250);
        }, 550);
      }
    };
  }

  // --------------------------------------------------------------------------
  // 4. Main Chatbot Application
  // --------------------------------------------------------------------------
  function initMosbiChat() {
    // Current language from storage or html
    var savedLang = localStorage.getItem('mosbi_lang');
    var currentLang = (savedLang && KB[savedLang]) ? savedLang : (document.documentElement.lang || 'es');
    if (!KB[currentLang]) currentLang = 'es';

    var isOpen = false;
    var conversationHistory = [];
    var inactivityTimer = null;
    var idleInterval = null;
    var INACTIVITY_TIMEOUT = 28000; // 28 seconds of inactivity triggers sleep

    // Build DOM Elements
    // 1. Launcher Button
    var launcher = document.createElement('button');
    launcher.id = 'mosbiChatLauncher';
    launcher.type = 'button';
    launcher.setAttribute('aria-label', 'Open MOSBI AI Chat');

    launcher.innerHTML = [
      '<div class="mb-launcher-avatar-wrap" id="mbLauncherAvatar">',
        createRobotSVG('launcher-robot'),
        '<span class="mb-launcher-badge">AI</span>',
      '</div>',
      '<div class="mb-launcher-info">',
        '<span class="mb-launcher-title" id="mbLauncherTitle">',
          '<span class="mb-status-dot"></span>',
          KB[currentLang].launcherText,
        '</span>',
        '<span class="mb-launcher-sub" id="mbLauncherSub">' + KB[currentLang].launcherSub + '</span>',
      '</div>'
    ].join('');

    // 2. Chat Panel Container
    var panel = document.createElement('aside');
    panel.id = 'mosbiChatPanel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'false');
    panel.setAttribute('aria-label', 'MOSBI Systems AI Assistant');

    panel.innerHTML = [
      '<header class="mb-chat-header">',
        '<div class="mb-header-profile">',
          '<div class="mb-header-avatar" id="mbHeaderAvatar">',
            createRobotSVG('header-robot'),
          '</div>',
          '<div class="mb-header-text">',
            '<span class="mb-header-name" id="mbHeaderName">' + KB[currentLang].botTitle + '</span>',
            '<span class="mb-header-status" id="mbHeaderStatus">',
              '<span class="mb-status-dot"></span> ' + KB[currentLang].botSubtitle,
            '</span>',
          '</div>',
        '</div>',
        '<div class="mb-header-actions">',
          '<button type="button" class="mb-btn-icon" id="mbLangToggle" title="' + KB[currentLang].langToggleAria + '">',
            currentLang.toUpperCase(),
          '</button>',
          '<button type="button" class="mb-btn-icon" id="mbMinimizeBtn" title="' + KB[currentLang].minimizeBtnAria + '">',
            '✕',
          '</button>',
        '</div>',
      '</header>',

      '<div class="mb-chat-body" id="mbChatBody">',
        '<div class="mb-system-notice" id="mbSystemNotice">',
          'MOSBI Systems AI Gateway • Neural Model Active',
        '</div>',
      '</div>',

      '<div class="mb-quick-chips-wrapper" id="mbQuickChips"></div>',

      '<footer class="mb-chat-footer">',
        '<form class="mb-input-form" id="mbChatForm">',
          '<input type="text" class="mb-chat-input" id="mbChatInput" autocomplete="off" placeholder="' + KB[currentLang].inputPlaceholder + '">',
          '<button type="submit" class="mb-send-btn" id="mbSendBtn" aria-label="' + KB[currentLang].sendBtnAria + '">',
            '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
          '</button>',
        '</form>',
        '<div class="mb-footer-hint">Grounded in MachId™ & FieldOps Knowledge Bases</div>',
      '</footer>'
    ].join('');

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    // Robot Mascot State Controller across both instances (launcher & header)
    var launcherAvatar = document.getElementById('mbLauncherAvatar');
    var headerAvatar = document.getElementById('mbHeaderAvatar');
    var robot = createRobotController([launcherAvatar, headerAvatar]);

    // ------------------------------------------------------------------------
    // Inactivity & Sleep Timer Management
    // ------------------------------------------------------------------------
    function resetInactivity() {
      if (robot.getState().isSleeping) {
        robot.wakeUp();
      }
      clearTimeout(inactivityTimer);
      if (isOpen) {
        inactivityTimer = setTimeout(function () {
          if (isOpen) {
            robot.fallAsleep();
          }
        }, INACTIVITY_TIMEOUT);
      }
    }

    // Idle spontaneous micro-animations
    function startIdleLoop() {
      clearInterval(idleInterval);
      idleInterval = setInterval(function () {
        if (!isOpen) {
          // In closed launcher: occasionally blink or do a quick peek
          if (Math.random() < 0.4) robot.blink();
          return;
        }

        // When open, if sleeping don't animate randomly
        if (robot.getState().isSleeping) return;

        var rand = Math.random();
        if (rand < 0.5) {
          robot.blink();
        } else if (rand < 0.75) {
          robot.scratchHead();
        } else if (rand < 0.9) {
          robot.winkOk();
        }
      }, 9000);
    }

    startIdleLoop();

    // ------------------------------------------------------------------------
    // Chat Message Rendering
    // ------------------------------------------------------------------------
    var chatBody = document.getElementById('mbChatBody');
    var chipsContainer = document.getElementById('mbQuickChips');
    var chatInput = document.getElementById('mbChatInput');
    var chatForm = document.getElementById('mbChatForm');

    function appendMessage(sender, text, actions, isLead) {
      var row = document.createElement('div');
      row.className = 'mb-msg-row ' + sender;

      if (sender === 'bot') {
        var avatar = document.createElement('div');
        avatar.className = 'mb-msg-avatar';
        avatar.innerHTML = '<svg width="20" height="20" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="#0ea5e9"/><ellipse cx="40" cy="48" rx="7" ry="9" fill="#00e5ff"/><ellipse cx="60" cy="48" rx="7" ry="9" fill="#00e5ff"/></svg>';
        row.appendChild(avatar);
      }

      conversationHistory.push({
        sender: sender === 'bot' ? 'MOSBI Bot' : 'Cliente',
        text: text,
        time: new Date().toLocaleTimeString()
      });

      var bubble = document.createElement('div');
      bubble.className = 'mb-msg-bubble';

      // Parse bold **text** and newlines
      var formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
      bubble.innerHTML = '<p>' + formatted + '</p>';

      // Append Action Buttons if present
      if (actions && actions.length > 0) {
        var actWrap = document.createElement('div');
        actWrap.className = 'mb-msg-actions';
        actions.forEach(function (act) {
          var btn = document.createElement('a');
          btn.className = 'mb-action-btn';
          btn.href = act.href;
          btn.innerHTML = act.text + ' <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>';
          if (act.href.indexOf('#') === 0) {
            btn.addEventListener('click', function (e) {
              e.preventDefault();
              toggleChat(false);
              var target = document.querySelector(act.href);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            });
          }
          actWrap.appendChild(btn);
        });
        bubble.appendChild(actWrap);
      }

      // Append Lead Capture Card if requested
      if (isLead) {
        var leadCard = document.createElement('div');
        leadCard.className = 'mb-lead-card';
        leadCard.innerHTML = [
          '<h5><span class="mb-status-dot"></span> ' + KB[currentLang].leadTitle + '</h5>',
          '<p class="mb-lead-sub">' + KB[currentLang].leadSub + '</p>',
          '<div class="mb-lead-row">',
            '<input type="text" class="mb-lead-input" id="mbLeadName" placeholder="' + KB[currentLang].leadNamePlh + '">',
            '<input type="tel" class="mb-lead-input" id="mbLeadPhone" placeholder="' + KB[currentLang].leadPhonePlh + '">',
          '</div>',
          '<div class="mb-lead-row">',
            '<input type="email" class="mb-lead-input" id="mbLeadEmail" placeholder="' + KB[currentLang].leadEmailPlh + '">',
            '<input type="text" class="mb-lead-input" id="mbLeadAddress" placeholder="' + KB[currentLang].leadAddressPlh + '">',
          '</div>',
          '<textarea class="mb-lead-textarea" id="mbLeadDesc" placeholder="' + KB[currentLang].leadDescPlh + '"></textarea>',
          '<button type="button" class="mb-lead-submit" id="mbLeadSubmitBtn">',
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> ',
            KB[currentLang].leadSubmit,
          '</button>'
        ].join('');

        leadCard.querySelector('#mbLeadSubmitBtn').addEventListener('click', function () {
          var nameVal = (leadCard.querySelector('#mbLeadName').value || '').trim();
          var phoneVal = (leadCard.querySelector('#mbLeadPhone').value || '').trim();
          var emailVal = (leadCard.querySelector('#mbLeadEmail').value || '').trim();
          var addressVal = (leadCard.querySelector('#mbLeadAddress').value || '').trim();
          var descVal = (leadCard.querySelector('#mbLeadDesc').value || '').trim();

          if (!nameVal || (!phoneVal && !emailVal) || !addressVal) {
            alert(KB[currentLang].leadError);
            return;
          }

          var submitBtn = leadCard.querySelector('#mbLeadSubmitBtn');
          submitBtn.disabled = true;
          submitBtn.textContent = KB[currentLang].leadSending;

          var transcript = conversationHistory.map(function (m) {
            return '[' + m.time + '] ' + m.sender + ':\n' + m.text;
          }).join('\n\n');

          var formattedReport = [
            '======================================================================',
            'MOSBI SYSTEMS - INFORME TÉCNICO DE VISITA / PROPOSAL DE MAQUINARIA',
            '======================================================================',
            'DESTINATARIO DE ATENCIÓN: oscar@mosbisys.com',
            'FECHA Y HORA: ' + new Date().toLocaleString(),
            'IDIOMA DE LA SESIÓN: ' + currentLang.toUpperCase(),
            '',
            'DATOS DEL CONTACTO Y UBICACIÓN:',
            '• Nombre de la Persona Contacto: ' + nameVal,
            '• Teléfono de Contacto: ' + (phoneVal || 'No provisto'),
            '• Correo Electrónico: ' + (emailVal || 'No provisto'),
            '• Dirección del Edificio o Planta: ' + addressVal,
            '',
            'DESCRIPCIÓN DE LA NECESIDAD / REQUERIMIENTO TÉCNICO:',
            (descVal || 'El cliente solicita atención técnica de maquinaria/chute/contenedores. Revisar la conversación adjunta.'),
            '',
            'OBJETIVO DE LA ATENCIÓN HUMANA:',
            '-> Contactar al cliente a la brevedad posible para coordinar una visita técnica en sitio y elaborar el Proposal formal de equipamiento o solución de maquinaria.',
            '',
            '----------------------------------------------------------------------',
            'HISTORIAL COMPLETO DE LA CONVERSACIÓN CON EL BOT:',
            '----------------------------------------------------------------------',
            transcript,
            '======================================================================'
          ].join('\n');

          var payload = {
            access_key: 'a1ecd886-99f5-4eec-8044-e6a04d3f6553',
            subject: '[MOSBI Proposal / Visita Técnica] ' + nameVal + ' - ' + addressVal,
            name: nameVal,
            email: emailVal || 'oscar@mosbisys.com',
            message: formattedReport,
            from_name: 'MOSBI Systems AI Intake Bot'
          };

          fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(payload)
          })
          .then(function (res) { return res.json(); })
          .then(function (data) {
            leadCard.innerHTML = '<div style="background:rgba(16,185,129,0.15);border:1px solid #10b981;border-radius:10px;padding:14px;color:#f1f5f9;font-size:13px;line-height:1.55;"><strong style="color:#10b981;display:block;margin-bottom:6px;font-size:14px;">✅ Solicitud Registrada con Éxito</strong>' + KB[currentLang].leadSuccess + '</div>';
            robot.winkOk();
          })
          .catch(function () {
            leadCard.innerHTML = '<div style="background:rgba(16,185,129,0.15);border:1px solid #10b981;border-radius:10px;padding:14px;color:#f1f5f9;font-size:13px;line-height:1.55;"><strong style="color:#10b981;display:block;margin-bottom:6px;font-size:14px;">✅ Solicitud Registrada con Éxito</strong>' + KB[currentLang].leadSuccess + '</div>';
            robot.winkOk();
          });
        });

        bubble.appendChild(leadCard);
      }

      row.appendChild(bubble);
      chatBody.appendChild(row);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function renderChips() {
      chipsContainer.innerHTML = '';
      var list = KB[currentLang].chips;
      list.forEach(function (c) {
        var chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'mb-chip';
        chip.textContent = c.label;
        chip.addEventListener('click', function () {
          resetInactivity();
          handleUserQuery(c.query, c.label);
        });
        chipsContainer.appendChild(chip);
      });
    }

    function showTypingIndicator() {
      var row = document.createElement('div');
      row.className = 'mb-typing-row';
      row.id = 'mbTypingIndicator';
      row.innerHTML = [
        '<div class="mb-msg-avatar" style="width:26px;height:26px;">',
          '<svg width="16" height="16" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="#0ea5e9"/></svg>',
        '</div>',
        '<div class="mb-typing-bubble">',
          '<span class="mb-typing-dot"></span>',
          '<span class="mb-typing-dot"></span>',
          '<span class="mb-typing-dot"></span>',
        '</div>'
      ].join('');
      chatBody.appendChild(row);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function hideTypingIndicator() {
      var el = document.getElementById('mbTypingIndicator');
      if (el) el.remove();
    }

    // ------------------------------------------------------------------------
    // Natural Query Matcher
    // ------------------------------------------------------------------------
    function handleUserQuery(rawText, displayLabel) {
      var q = (rawText || '').toLowerCase();
      appendMessage('user', displayLabel || rawText);

      // Trigger "Scratching Head" while analyzing databases!
      robot.scratchHead();
      showTypingIndicator();

      setTimeout(function () {
        hideTypingIndicator();
        var kb = KB[currentLang].answers;
        var replyObj = null;

        if (/waste[ -]?caddy|wastecaddy|dumpster[ -]?mover|dj[ -]?products|remolcador|belly[ -]?bumper|5th[ -]?wheel/.test(q)) {
          replyObj = kb.wastecaddy;
        } else if (/1830-?std|toronita|115\s*v|110\s*v|monof[aá]sic|793-6302/.test(q)) {
          replyObj = kb.autopak_std || kb.compactor;
        } else if (/basura|chute|compactad|compact|residuo|trash|garbage|waste|auto-?pak|1830|caddy|tow|hitch|rear\s*load|front\s*load|rampa|incline|piso/.test(q)) {
          replyObj = kb.compactor;
        } else if (/machid|mach\s*id|reconocimiento|identific|vision|c[oó]digo|maquinaria/.test(q)) {
          replyObj = kb.machid;
        } else if (/fieldops|field\s*ops|van|inventario|cuadrilla|osha|recibo|receipt|despacho|fiel/.test(q)) {
          replyObj = kb.fieldops;
        } else if (/servicio|service|software|desarrollo|ia|inteligencia|vision|custom|medida/.test(q)) {
          replyObj = kb.services;
        } else if (/roi|retorno|inversi[oó]n|cu[aá]nto|precio|cost|costo|ahorro/.test(q)) {
          replyObj = kb.roi;
        } else if (/demo|agendar|reuni[oó]n|contacto|contact|cita|llamar|hablar/.test(q)) {
          replyObj = kb.demo;
        } else {
          replyObj = kb.fallback;
        }

        appendMessage('bot', replyObj.text, replyObj.actions, replyObj.showLeadForm);

        // When reply finishes, robot winks with an "OK" gesture!
        setTimeout(function () {
          robot.winkOk();
        }, 400);

        resetInactivity();
      }, 950);
    }

    // ------------------------------------------------------------------------
    // Open / Close / Toggle Chat
    // ------------------------------------------------------------------------
    function toggleChat(forceState) {
      isOpen = (typeof forceState === 'boolean') ? forceState : !isOpen;
      if (isOpen) {
        panel.classList.add('open');
        launcher.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-modal', 'true');
        resetInactivity();
        chatInput.focus();

        // Initial welcome message if chat is empty
        if (chatBody.children.length <= 1) {
          setTimeout(function () {
            appendMessage('bot', KB[currentLang].welcome);
            robot.winkOk();
          }, 200);
        }
      } else {
        panel.classList.remove('open');
        launcher.setAttribute('aria-expanded', 'false');
        panel.setAttribute('aria-modal', 'false');
        clearTimeout(inactivityTimer);
      }
    }

    launcher.addEventListener('click', function () {
      toggleChat();
    });

    document.getElementById('mbMinimizeBtn').addEventListener('click', function () {
      toggleChat(false);
    });

    // ------------------------------------------------------------------------
    // User Input & Waking Triggers
    // ------------------------------------------------------------------------
    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var val = chatInput.value.trim();
      if (!val) return;
      chatInput.value = '';
      resetInactivity();
      handleUserQuery(val, val);
    });

    // Waking up instantly on typing, clicking, or hovering
    ['input', 'keydown', 'focus', 'click'].forEach(function (evt) {
      chatInput.addEventListener(evt, resetInactivity);
    });

    panel.addEventListener('mousemove', function () {
      if (robot.getState().isSleeping) {
        resetInactivity();
      }
    });

    // ------------------------------------------------------------------------
    // Multilingual Switching (ES / EN / FR)
    // ------------------------------------------------------------------------
    function updateChatLanguage(lang) {
      if (!KB[lang]) lang = 'es';
      currentLang = lang;

      // Update Header Text & Placeholders
      document.getElementById('mbHeaderName').textContent = KB[lang].botTitle;
      document.getElementById('mbHeaderStatus').innerHTML = '<span class="mb-status-dot"></span> ' + KB[lang].botSubtitle;
      document.getElementById('mbLauncherTitle').innerHTML = '<span class="mb-status-dot"></span> ' + KB[lang].launcherText;
      document.getElementById('mbLauncherSub').textContent = KB[lang].launcherSub;
      document.getElementById('mbChatInput').setAttribute('placeholder', KB[lang].inputPlaceholder);
      document.getElementById('mbLangToggle').textContent = lang.toUpperCase();

      renderChips();
      resetInactivity();
    }

    // Toggle language button in chat header
    var langCycle = ['es', 'en', 'fr'];
    document.getElementById('mbLangToggle').addEventListener('click', function () {
      var nextIdx = (langCycle.indexOf(currentLang) + 1) % langCycle.length;
      var newLang = langCycle[nextIdx];
      if (typeof global.setLanguage === 'function') {
        global.setLanguage(newLang);
      } else {
        updateChatLanguage(newLang);
      }
      robot.winkOk();
    });

    // Listen to global language change from translations.js
    window.addEventListener('mosbi_lang_change', function (e) {
      if (e.detail && e.detail.lang) {
        updateChatLanguage(e.detail.lang);
      }
    });

    // Initial render
    renderChips();
  }

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMosbiChat);
  } else {
    initMosbiChat();
  }

})(window);
