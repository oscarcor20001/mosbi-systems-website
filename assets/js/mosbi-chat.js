/*!
 * MOSBI Systems - Official AI Industrial Chatbot & Robot Mascot Controller
 * Zero external dependencies. High-performance SVG + CSS state-driven animation.
 * Features:
 *   - Autonomous Robot Avatar (Floating, Blinking, Head-Scratch, Wink/OK, Sleep/Wake)
 *   - Deep Inactivity Sleep Mode (falls asleep after inactivity and jolts awake on typing)
 *   - Grounded Knowledge Base: MachId™ AI, FieldOps Gen Pro, Custom AI & Vision, ROI, Contact
 *   - Time-of-day courtesy greetings & consultative non-invasive conversation flow
 *   - Full Multilingual Sync (ES, EN, FR) with live switching
 */
(function (global) {
  'use strict';

  // --------------------------------------------------------------------------
  // Time-of-day greeting generator
  // --------------------------------------------------------------------------
  function getTimeGreeting(lang) {
    var hour = new Date().getHours();
    if (lang === 'en') {
      if (hour >= 5 && hour < 12) return 'Good morning!';
      if (hour >= 12 && hour < 19) return 'Good afternoon!';
      return 'Good evening!';
    }
    if (lang === 'fr') {
      if (hour >= 5 && hour < 18) return 'Bonjour !';
      return 'Bonsoir !';
    }
    // Spanish
    if (hour >= 5 && hour < 12) return '¡Buenos días!';
    if (hour >= 12 && hour < 19) return '¡Buenas tardes!';
    return '¡Buenas noches!';
  }

  // --------------------------------------------------------------------------
  // 1. Translations & Knowledge Base
  // --------------------------------------------------------------------------
  var KB = {
    es: {
      botTitle: "MOSBI Systems AI",
      botSubtitle: "Asistente Oficial • En línea",
      launcherText: "MOSBI AI",
      launcherSub: "Asistente En Línea",
      inputPlaceholder: "Escriba su consulta o pregunta aquí...",
      sendBtnAria: "Enviar mensaje",
      minimizeBtnAria: "Minimizar chat",
      langToggleAria: "Cambiar idioma",
      sleepingNotice: "Zzz... Robot en modo reposo. Escriba algo para despertarlo.",
      welcome: "¡Hola! Bienvenido a **MOSBI Systems**.\n\nNos especializamos en plataformas SaaS e inteligencia artificial para operaciones industriales y empresas con técnicos y flotas de vehículos en ruta:\n\n• **MachId™ AI:** Identificación visual de maquinaria y componentes con visión artificial.\n• **FieldOps Gen Pro:** Gestión de flotas, despacho, inventario en van y normas OSHA.\n• **Software y Portales Web:** Páginas de alta conversión y sistemas a medida para contratistas.\n\n¿En qué podemos asistirle hoy?",
      chips: [
        { label: "🔍 MachId™ AI", query: "machid" },
        { label: "🛠️ FieldOps Gen Pro", query: "fieldops" },
        { label: "💻 Software & Web", query: "software web empresas" },
        { label: "📊 ROI & Planes", query: "calcular roi" },
        { label: "📋 Demo / Propuesta", query: "agendar demo propuesta" }
      ],
      leadTitle: "📋 Solicitud de Propuesta & Demostración Técnica",
      leadSub: "Complete los datos de su empresa para que un representante técnico de servicios le contacte a la brevedad con una propuesta personalizada o coordine una demostración en vivo:",
      leadNamePlh: "Nombre de contacto *",
      leadPhonePlh: "Teléfono de contacto *",
      leadEmailPlh: "Correo corporativo *",
      leadAddressPlh: "Empresa y Ciudad/Ubicación *",
      leadDescPlh: "Tipo de empresa (HVAC, Techado, etc.), técnicos en ruta o necesidades específicas",
      leadSubmit: "Solicitar Propuesta / Agendar Demostración",
      leadSending: "Procesando solicitud...",
      leadSuccess: "¡Muchas gracias! Su valiosa interacción ha sido de gran ayuda. Su petición será atendida lo más pronto posible por nuestro personal técnico de servicios, quien se comunicará con usted para coordinar una demostración en vivo o elaborar su propuesta personalizada.",
      leadError: "Por favor complete su nombre, teléfono o correo, y el nombre de su empresa.",
      answers: {
        machid: {
          text: "⚡ **MachId™ Machine Identifier AI (v2.0):**\n\n" +
                "Nuestra plataforma SaaS de visión artificial para operaciones industriales y mantenimiento técnico:\n\n" +
                "• **Identificación Cero-Códigos:** Reconoce visualmente maquinaria compleja, turbinas, bombas, motores, válvulas y reductores sin requerir placas legibles ni códigos de barras.\n" +
                "• **OCR Forense & Cotejo Morfológico 3D:** Lee placas corroídas, desgastadas o repintadas y analiza proporciones geométricas de volutas y bridas.\n" +
                "• **Dossier & Esquemáticos Inmediatos:** Recupera esquemáticos de despiece, números de parte de repuestos (MPN) y emite expedientes técnicos en segundos para el técnico en campo.\n\n" +
                "Si desea evaluar cómo implementar MachId™ en su empresa, nuestro personal técnico de servicios puede coordinar una demostración en vivo o preparar una propuesta personalizada.",
          showLeadForm: false,
          actions: [
            { text: "📋 Solicitar Demostración o Propuesta", query: "agendar demo propuesta" },
            { text: "👁️ Ver Demo Interactiva MachId™", href: "machid/index.html" }
          ]
        },
        fieldops: {
          text: "🛠️ **FieldOps Gen Pro — Plataforma SaaS para Servicios de Campo:**\n\n" +
                "Diseñada específicamente para empresas de servicios con flotas de vehículos y técnicos en ruta (HVAC, Techado, Plomería, Eléctrico, Mantenimiento):\n\n" +
                "• **Despacho Inteligente & Service Calls:** Asignación ágil de llamadas de servicio, seguimiento en ruta y monitoreo en tiempo real.\n" +
                "• **Inventario en Van & Kits Predictivos:** Control estricto de números de parte en cada vehículo para que el técnico nunca ruede sin repuestos.\n" +
                "• **Flujo Riguroso de Operación:** *Findings → Proposals → Work Orders* (las órdenes de trabajo se generan únicamente tras la aprobación formal del cliente).\n" +
                "• **Recibos Digitales en 2 Pasos & 90 Normas OSHA:** Sustituye el talonario autocopiante en papel y garantiza cumplimiento 29 CFR con firmas digitales inmutables.\n\n" +
                "Disponemos de ediciones **Team** y **Enterprise**. Nuestro personal técnico de servicios puede presentarle una propuesta personalizada y coordinar una demostración en vivo.",
          showLeadForm: false,
          actions: [
            { text: "📋 Solicitar Demostración o Propuesta", query: "agendar demo propuesta" },
            { text: "🚀 Explorar FieldOps Gen Pro", href: "fieldops-gen-pro/index.html" }
          ]
        },
        web_services: {
          text: "💻 **Software a Medida & Portales Web para Empresas de Servicios:**\n\n" +
                "Desarrollamos la infraestructura digital que los contratistas y empresas de servicio técnico necesitan para captar clientes y profesionalizar sus flujos de trabajo:\n\n" +
                "• **Sitios Web y Portales Corporativos de Alta Conversión:** Diseñados para convertir visitantes en llamadas y citas de servicio.\n" +
                "• **Chatbots con IA & Handoff Humano:** Asistentes conversacionales 24/7 para calificar prospectos y transferirlos a su equipo.\n" +
                "• **Integración Directa con Despacho:** Sincronización instantánea con sus sistemas de agenda, órdenes de servicio y CRM/ERP.\n\n" +
                "Un representante técnico de servicios evaluará sus requerimientos para presentarle una propuesta personalizada.",
          showLeadForm: false,
          actions: [
            { text: "📋 Solicitar Propuesta Técnica", query: "agendar demo propuesta" }
          ]
        },
        custom_ai: {
          text: "📱 **Desarrollo de IA, Visión Computacional & Apps Móviles:**\n\n" +
                "Creamos herramientas tecnológicas a la medida de sus operaciones:\n\n" +
                "• **Aplicaciones Móviles Offline-First (Flutter):** Para técnicos operando en sótanos, túneles o zonas sin conectividad.\n" +
                "• **Modelos de Visión Artificial:** Reconocimiento de equipos, lectura de instrumentos e inspección visual automatizada.\n" +
                "• **Automatización de Flujos:** Integración con bases de datos y sistemas corporativos.\n\n" +
                "Un representante técnico puede coordinar una reunión de evaluación técnica para diseñar su solución.",
          showLeadForm: false,
          actions: [
            { text: "📋 Solicitar Evaluación Técnica", query: "agendar demo propuesta" }
          ]
        },
        roi: {
          text: "📊 **Retorno de Inversión (ROI) & Planes SaaS:**\n\n" +
                "Nuestras soluciones generan ahorros operativos inmediatos:\n\n" +
                "• **FieldOps Gen Pro:** Ahorra hasta 15 horas semanales por cuadrilla en tareas administrativas y elimina visitas fallidas por falta de repuestos en la van.\n" +
                "• **MachId™:** Reduce hasta un **65% el tiempo de diagnóstico** de maquinaria en campo al identificar modelos y piezas al instante.\n\n" +
                "Nuestros planes se adaptan al tamaño de su flota y número de técnicos. Para presentarle una propuesta formal con el desglose de inversión para su empresa, un representante técnico de servicios le contactará a la brevedad.",
          showLeadForm: true,
          actions: [
            { text: "🧮 Ir a la Calculadora de ROI", href: "#roi-calculator" }
          ]
        },
        demo: {
          text: "📋 **Solicitud de Demostración Técnica o Propuesta:**\n\n" +
                "Con mucho gusto. Nuestro personal técnico de servicios se comunicará con usted para coordinar una demostración en vivo o preparar una propuesta personalizada adaptada a las necesidades de su empresa.\n\n" +
                "👉 Por favor complete los siguientes datos para coordinar el contacto:",
          showLeadForm: true
        },
        fallback: {
          text: "Con mucho gusto le orientamos. En MOSBI Systems desarrollamos plataformas SaaS y soluciones tecnológicas para operaciones industriales y empresas con técnicos en ruta:\n\n" +
                "• **MachId™ AI:** Identificación instantánea de maquinaria industrial y repuestos con visión artificial.\n" +
                "• **FieldOps Gen Pro:** Software para técnicos en ruta, inventario en van y despacho.\n" +
                "• **Portales y Software a Medida:** Páginas web de alta conversión y herramientas para contratistas.\n\n" +
                "Cuéntenos un poco sobre su empresa o requerimiento: ¿qué tipo de proyecto o necesidad le gustaría resolver?",
          showLeadForm: false,
          actions: [
            { text: "🔍 Conocer MachId™ AI", query: "machid" },
            { text: "🛠️ Conocer FieldOps Gen Pro", query: "fieldops" },
            { text: "📋 Solicitar Propuesta / Demo", query: "agendar demo propuesta" }
          ]
        }
      }
    },
    en: {
      botTitle: "MOSBI Systems AI",
      botSubtitle: "Official Assistant • Online",
      launcherText: "MOSBI AI",
      launcherSub: "Assistant Online",
      inputPlaceholder: "Type your question or inquiry here...",
      sendBtnAria: "Send message",
      minimizeBtnAria: "Minimize chat",
      langToggleAria: "Change language",
      sleepingNotice: "Zzz... Robot in standby mode. Type something to wake it up.",
      welcome: "Hello! Welcome to **MOSBI Systems**.\n\nWe specialize in SaaS platforms and custom software for industrial operations and field service companies with technician fleets on the road:\n\n• **MachId™ AI:** AI-powered visual recognition of industrial machinery and components with forensic OCR.\n• **FieldOps Gen Pro:** SaaS platform for field service companies with van inventory, dispatch, and 90 OSHA standards.\n• **Software & Web Portals:** High-converting corporate web portals and custom tools built for mobile service fleets.\n\nHow can we assist your business today?",
      chips: [
        { label: "🔍 MachId™ AI", query: "machid" },
        { label: "🛠️ FieldOps Gen Pro", query: "fieldops" },
        { label: "💻 Software & Web", query: "software web trades" },
        { label: "📊 ROI & Plans", query: "calculate roi" },
        { label: "📋 Demo / Proposal", query: "agendar demo propuesta" }
      ],
      leadTitle: "📋 Request Proposal & Technical Demonstration",
      leadSub: "Please submit your company details so a technical service representative can follow up with a tailored proposal or schedule a live demonstration:",
      leadNamePlh: "Contact name *",
      leadPhonePlh: "Phone number *",
      leadEmailPlh: "Work email *",
      leadAddressPlh: "Company & City/Location *",
      leadDescPlh: "Industry (HVAC, Roofing, etc.), technician headcount or specific requirements",
      leadSubmit: "Request Proposal / Schedule Demo",
      leadSending: "Processing request...",
      leadSuccess: "Thank you very much! Your valuable interaction has been greatly helpful. Your request will be handled promptly by our technical service personnel, who will contact you to coordinate a live demo or prepare your tailored proposal.",
      leadError: "Please provide your name, phone or email, and company name.",
      answers: {
        machid: {
          text: "⚡ **MachId™ Machine Identifier AI (v2.0):**\n\n" +
                "Our flagship computer vision SaaS platform for industrial operations and field maintenance:\n\n" +
                "• **Zero-Code Identification:** Visually identifies complex machinery, turbines, pumps, motors, valves, and gearboxes without readable nameplates or barcodes.\n" +
                "• **Forensic OCR & 3D Morphological Matching:** Reads corroded or over-painted nameplates and analyzes flange geometry and volute contours.\n" +
                "• **Instant Dossier & Schematics:** Retrieves exploded diagrams, OEM part numbers (MPNs), and generates PDF technical dossiers in seconds for field technicians.\n\n" +
                "To evaluate deploying MachId™ across your operations, our technical service personnel can coordinate a live demo and prepare a customized proposal.",
          showLeadForm: false,
          actions: [
            { text: "📋 Request Demo or Proposal", query: "agendar demo propuesta" },
            { text: "👁️ View Interactive MachId™ Demo", href: "machid/index.html" }
          ]
        },
        fieldops: {
          text: "🛠️ **FieldOps Gen Pro — Field Service Management SaaS:**\n\n" +
                "Engineered specifically for field service companies managing vehicle fleets and technicians on the road (HVAC, Roofing, Plumbing, Electrical, Waste):\n\n" +
                "• **Smart Dispatch & Service Calls:** Rapid service call intake, route mapping, and real-time fleet monitoring.\n" +
                "• **Van Inventory & Predictive Kits:** Strict part number tracking per vehicle so technicians never roll without required parts.\n" +
                "• **Rigorous Operational Flow:** *Findings → Proposals → Work Orders* (work orders are only triggered upon customer approval).\n" +
                "• **2-Step Digital Receipts & 90 OSHA Standards:** Replaces paper triplicate pads and guarantees 29 CFR compliance with immutable signatures.\n\n" +
                "Available in **Team** and **Enterprise** editions. Our technical service team can present a customized proposal and live demo.",
          showLeadForm: false,
          actions: [
            { text: "📋 Request Demo or Proposal", query: "agendar demo propuesta" },
            { text: "🚀 Explore FieldOps Gen Pro", href: "fieldops-gen-pro/index.html" }
          ]
        },
        web_services: {
          text: "💻 **Custom Software & High-Converting Web Portals for Service Trades:**\n\n" +
                "We build the digital infrastructure and tools that mobile contractor fleets need to acquire customers and professionalize workflows:\n\n" +
                "• **High-Converting Corporate Websites:** Designed to turn online visitors into inbound service calls and bookings.\n" +
                "• **AI Chat Gateway with Live Handoff:** Conversational widgets qualifying leads 24/7 with direct routing to your team.\n" +
                "• **Direct Dispatch Integration:** Instant synchronization with your dispatch scheduling, CRM, and work orders.\n\n" +
                "A technical service representative will evaluate your requirements to prepare a formal proposal.",
          showLeadForm: false,
          actions: [
            { text: "📋 Request Technical Proposal", query: "agendar demo propuesta" }
          ]
        },
        custom_ai: {
          text: "📱 **Custom AI, Computer Vision & Mobile Development:**\n\n" +
                "We engineer tailor-made software solutions for industrial operations:\n\n" +
                "• **Offline-First Mobile Apps (Flutter):** For technicians operating in basements, vaults, or zero-connectivity zones.\n" +
                "• **Computer Vision Models:** Equipment recognition, visual telemetry, and automated inspection.\n" +
                "• **Workflow Automation:** Deep integrations with corporate CMMS and ERP databases.",
          showLeadForm: false,
          actions: [
            { text: "📋 Request Technical Consultation", query: "agendar demo propuesta" }
          ]
        },
        roi: {
          text: "📊 **Return on Investment (ROI) & SaaS Subscription Plans:**\n\n" +
                "Our software platforms eliminate critical operational bottlenecks:\n\n" +
                "• **FieldOps Gen Pro:** Saves up to 15 hours weekly per crew in paperwork and eliminates wasted truck rolls by verifying van parts readiness.\n" +
                "• **MachId™:** Cuts machine diagnostics and parts identification time by up to **65%** in the field.\n\n" +
                "Our SaaS plans adapt to your fleet volume and headcount. A technical service representative will contact you with a customized investment proposal.",
          showLeadForm: true,
          actions: [
            { text: "🧮 Open ROI Calculator", href: "#roi-calculator" }
          ]
        },
        demo: {
          text: "📋 **Request a Live Demonstration or Proposal:**\n\n" +
                "We would be pleased to schedule a live session demonstrating our platforms or prepare a customized proposal tailored to your company's needs.\n\n" +
                "👉 Please submit your company details below to coordinate contact:",
          showLeadForm: true
        },
        fallback: {
          text: "We would be glad to assist you. At MOSBI Systems, we build SaaS platforms and intelligent software for industrial operations and mobile technician fleets:\n\n" +
                "• **MachId™ AI:** Visual recognition of industrial machines and components with computer vision.\n" +
                "• **FieldOps Gen Pro:** Fleet dispatch, van inventory management, and OSHA compliance.\n" +
                "• **Custom Software & Web Portals:** High-converting web tools and apps built for service trades.\n\n" +
                "Please tell us a bit about your company or project: what challenge or goal would you like to achieve?",
          showLeadForm: false,
          actions: [
            { text: "🔍 Explore MachId™ AI", query: "machid" },
            { text: "🛠️ Explore FieldOps Gen Pro", query: "fieldops" },
            { text: "📋 Request Proposal / Demo", query: "agendar demo propuesta" }
          ]
        }
      }
    },
    fr: {
      botTitle: "MOSBI Systems AI",
      botSubtitle: "Assistant Officiel • En ligne",
      launcherText: "MOSBI AI",
      launcherSub: "Assistant En Ligne",
      inputPlaceholder: "Tapez votre question ou demande ici...",
      sendBtnAria: "Envoyer le message",
      minimizeBtnAria: "Réduire le chat",
      langToggleAria: "Changer de langue",
      sleepingNotice: "Zzz... Robot en veille. Tapez un message pour le réveiller.",
      welcome: "Bonjour ! Bienvenue chez **MOSBI Systems**.\n\nNous sommes spécialisés dans les plateformes SaaS et le développement de logiciels pour les entreprises industrielles et de services de terrain avec flottes et techniciens en tournée :\n\n• **MachId™ AI :** Reconnaissance visuelle par IA et OCR d'équipements industriels et pièces de rechange.\n• **FieldOps Gen Pro :** Gestion de flottes, inventaire véhicule, régulation et 90 normes OSHA.\n• **Logiciels et Portails Web :** Solutions numériques haute performance pour entreprises de services de terrain.\n\nComment pouvons-nous orienter votre entreprise aujourd'hui ?",
      chips: [
        { label: "🔍 MachId™ AI", query: "machid" },
        { label: "🛠️ FieldOps Gen Pro", query: "fieldops" },
        { label: "💻 Logiciel & Web", query: "logiciel web services" },
        { label: "📊 ROI & Forfaits", query: "calculer roi" },
        { label: "📋 Démo / Devis", query: "agendar demo propuesta" }
      ],
      leadTitle: "📋 Demande de Proposition & Démonstration",
      leadSub: "Veuillez renseigner les informations de votre entreprise afin qu'un représentant technique de service vous contacte dans les plus brefs délais avec une proposition personnalisée :",
      leadNamePlh: "Nom du contact *",
      leadPhonePlh: "Téléphone du contact *",
      leadEmailPlh: "E-mail professionnel *",
      leadAddressPlh: "Entreprise et Ville/Localisation *",
      leadDescPlh: "Secteur d'activité, nombre de techniciens/véhicules ou besoins spécifiques",
      leadSubmit: "Demander une proposition / Réserver une démo",
      leadSending: "Traitement en cours...",
      leadSuccess: "Merci beaucoup ! Votre précieuse interaction nous a été d'une grande aide. Votre demande sera traitée dans les plus brefs délais par notre personnel technique de service, qui vous contactera pour planifier une démonstration en direct ou élaborer votre proposition personnalisée.",
      leadError: "Veuillez renseigner votre nom, téléphone ou e-mail, et le nom de votre entreprise.",
      answers: {
        machid: {
          text: "⚡ **MachId™ Machine Identifier AI (v2.0) :**\n\n" +
                "Notre plateforme SaaS de vision par ordinateur pour la maintenance industrielle et les équipes de terrain :\n\n" +
                "• **Identification sans code-barres :** Reconnaissance visuelle d'équipements complexes, pompes, turbines, moteurs et vannes sans plaque lisible.\n" +
                "• **OCR Médico-légal & Morphologie 3D :** Lecture de plaques corrodées ou repeintes et analyse géométrique des brides.\n" +
                "• **Dossiers et Schémas Instantanés :** Accès immédiat aux références OEM, vues éclatées et export de dossiers techniques en quelques secondes.\n\n" +
                "Pour évaluer le déploiement de MachId™ au sein de votre flotte, un représentant technique organisera une démonstration ou un pilote.",
          showLeadForm: false,
          actions: [
            { text: "📋 Demander une Démo ou Proposition", query: "agendar demo propuesta" },
            { text: "👁️ Voir la Démo Interactive MachId™", href: "machid/index.html" }
          ]
        },
        fieldops: {
          text: "🛠️ **FieldOps Gen Pro — Gestion des Interventions de Terrain :**\n\n" +
                "Conçue pour les entreprises de services de terrain opérant des flottes de véhicules et des techniciens en tournée (CVC, Toiture, Plomberie, Déchets) :\n\n" +
                "• **Gestion des Appels et Dispatch :** Affectation en temps réel des tournées et tableau de bord de flotte.\n" +
                "• **Inventaire Véhicule & Kits Prédictifs :** Contrôle des références de pièces pour garantir la disponibilité avant le départ du camion.\n" +
                "• **Flux Rigoureux :** *Constats → Devis → Bons de Travail* (les ordres de travail ne sont générés qu'après validation client).\n" +
                "• **Reçus Numériques en 2 Étapes & 90 Normas OSHA :** Remplace le papier et assure la conformité avec signatures inaltérables.\n\n" +
                "Disponible en éditions **Team** et **Enterprise**. Notre personnel technique de service vous contactera pour vous présenter une proposition formelle.",
          showLeadForm: false,
          actions: [
            { text: "📋 Demander une Démo ou Proposition", query: "agendar demo propuesta" },
            { text: "🚀 Explorer FieldOps Gen Pro", href: "fieldops-gen-pro/index.html" }
          ]
        },
        web_services: {
          text: "💻 **Logiciels Sur Mesure & Portails Web Haute Performance :**\n\n" +
                "Nous concevons les outils numériques indispensables aux entreprises de services opérant des techniciens et des flottes de véhicules :\n\n" +
                "• **Portails d'Entreprise Haute Conversion :** Conçus pour convertir les visiteurs en appels et rendez-vous d'intervention.\n" +
                "• **Passerelle de Chat IA Intégrée :** Widgets conversationnels captant les prospects 24/7 avec transfert au régulateur humain.\n" +
                "• **Intégration Directe avec le Dispatch :** Synchronisation instantanée avec votre planning, CRM et ordres de service.\n\n" +
                "Un représentant technique de service évaluera vos besoins et préparera une proposition formelle.",
          showLeadForm: false,
          actions: [
            { text: "📋 Demander une Proposition Technique", query: "agendar demo propuesta" }
          ]
        },
        custom_ai: {
          text: "📱 **Développement IA, Vision Numérique & Applications Mobiles Métier :**\n\n" +
                "Nous créons des solutions logicielles sur mesure pour moderniser vos opérations techniques :\n\n" +
                "• **Applications Mobiles Hors-Ligne (Flutter) :** Pour techniciens intervenant dans des sous-sols ou zones sans couverture réseau.\n" +
                "• **Modèles de Vision par Ordinateur :** Reconnaissance d'actifs industriels, contrôle qualité et télémesure.\n" +
                "• **Automatisation des Flux :** Intégration avec les ERP et GMAO existants.",
          showLeadForm: false,
          actions: [
            { text: "📋 Demander une Évaluation Technique", query: "agendar demo propuesta" }
          ]
        },
        roi: {
          text: "📊 **Retour sur Investissement (ROI) & Tarifs d'Abonnement SaaS :**\n\n" +
                "Nos plateformes éliminent les goulets d'étranglement opérationnels :\n\n" +
                "• **FieldOps Gen Pro :** Évite les déplacements infructueux grâce à la vérification des pièces en camion et accélère l'encaissement.\n" +
                "• **MachId™ :** Réduit de **65%** le temps de diagnostic des équipements sur le terrain.\n\n" +
                "Pour recevoir une proposition personnalisée adaptée à votre effectif et votre flotte, un représentant technique vous contactera.",
          showLeadForm: true,
          actions: [
            { text: "🧮 Accéder au Calculateur de ROI", href: "#roi-calculator" }
          ]
        },
        demo: {
          text: "📋 **Demande de Démonstration en Direct ou Proposition :**\n\n" +
                "C'est avec grand plaisir que nous organiserons une session pour vous présenter nos plateformes ou préparer une proposition adaptée à votre entreprise.\n\n" +
                "👉 Veuillez renseigner vos coordonnées ci-dessous pour organiser l'échange :",
          showLeadForm: true
        },
        fallback: {
          text: "C'est avec grand plaisir que nous vous orientons. Chez MOSBI Systems, nous développons des plateformes SaaS et solutions logicielles pour les opérations industrielles et les entreprises avec techniciens en tournée :\n\n" +
                "• **MachId™ AI :** Reconnaissance visuelle par IA de machines industrielles et pièces OEM.\n" +
                "• **FieldOps Gen Pro :** Logiciel de dispatch, gestion des véhicules et inventaire van.\n" +
                "• **Portails et Logiciels Sur Mesure :** Sites web haute performance et applications pour professionnels.\n\n" +
                "Parlez-nous un peu de votre entreprise ou projet : quel objectif souhaitez-vous atteindre ?",
          showLeadForm: false,
          actions: [
            { text: "🔍 Découvrir MachId™ AI", query: "machid" },
            { text: "🛠️ Découvrir FieldOps Gen Pro", query: "fieldops" },
            { text: "📋 Demander une Démo / Proposition", query: "agendar demo propuesta" }
          ]
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
    var awaitingClarification = false;
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
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'mb-action-btn';
          btn.innerHTML = act.text + ' <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>';
          if (act.query) {
            btn.addEventListener('click', function (e) {
              e.preventDefault();
              resetInactivity();
              handleUserQuery(act.query, act.text);
            });
          } else if (act.href) {
            btn.addEventListener('click', function (e) {
              e.preventDefault();
              if (act.href.indexOf('#') === 0) {
                toggleChat(false);
                var target = document.querySelector(act.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                window.location.href = act.href;
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
      var q = (rawText || '').trim().toLowerCase();
      appendMessage('user', displayLabel || rawText);

      // Trigger "Scratching Head" while analyzing databases!
      robot.scratchHead();
      showTypingIndicator();

      setTimeout(function () {
        hideTypingIndicator();
        var kb = KB[currentLang].answers;
        var replyObj = null;

        var greetingRegex = /^(hola|buenos?\s*d[ií]as?|buenas?\s*tardes?|buenas?\s*noches?|buenas?|hey|saludos?|hi|hello|good\s*morning|good\s*afternoon|good\s*evening|bonjour|bonsoir|salut|que\s*tal|quihubo)[\s\.,!¡?]*$/i;
        var affirmationRegex = /^(s[ií]|si deseo orientacion|claro|por\s*favor|yes|oui|ay[uú]dame|me\s*gustar[ií]a|orientaci[oó]n|oriente\s*me|cu[eé]ntame)[\s\.,!¡?]*$/i;
        var negationRegex = /^(no|no\s*gracias|nop|ninguna|nada|por\s*ahora\s*no|non|not\s*really|later)[\s\.,!¡?]*$/i;
        var fillerOrIncoherentRegex = /^(aj[aá]|ok|okay|okey|ah|eh|uh|hmm|hm|ya|bueno|bien|dale|sep|sip|veo|asdf.*|[a-z]{1,3})[\s\.,!¡?]*$/i;

        // Check if user is greeting
        if (greetingRegex.test(q)) {
          awaitingClarification = false;
          var tGreeting = getTimeGreeting(currentLang);
          if (currentLang === 'en') {
            replyObj = {
              text: tGreeting + " It is a pleasure to connect with you. Welcome to MOSBI Systems.\n\nHow can we help you today? Please tell us what questions or needs your company has, and we will gladly guide you.",
              actions: [
                { text: "🔍 Explore MachId™ AI", query: "machid" },
                { text: "🛠️ Explore FieldOps Gen Pro", query: "fieldops" },
                { text: "💻 Software & Web for Trades", query: "software web trades" },
                { text: "📋 Request Proposal / Demo", query: "agendar demo propuesta" }
              ],
              showLeadForm: false
            };
          } else if (currentLang === 'fr') {
            replyObj = {
              text: tGreeting + " C'est un plaisir de vous accueillir. Bienvenue chez MOSBI Systems.\n\nComment pouvons-nous vous aider aujourd'hui ? N'hésitez pas à nous faire part de vos besoins ou questions pour votre entreprise.",
              actions: [
                { text: "🔍 Découvrir MachId™ AI", query: "machid" },
                { text: "🛠️ Découvrir FieldOps Gen Pro", query: "fieldops" },
                { text: "💻 Logiciel & Web Métier", query: "logiciel web services" },
                { text: "📋 Demander une Démo / Proposition", query: "agendar demo propuesta" }
              ],
              showLeadForm: false
            };
          } else {
            replyObj = {
              text: tGreeting + " Qué gusto saludarle. Bienvenido a MOSBI Systems.\n\n¿En qué podemos ayudarle hoy? Cuéntenos cuál es su inquietud o qué requerimiento técnico o tecnológico tiene su empresa.",
              actions: [
                { text: "🔍 Conocer MachId™ AI", query: "machid" },
                { text: "🛠️ Conocer FieldOps Gen Pro", query: "fieldops" },
                { text: "💻 Software & Portales Web", query: "software web empresas" },
                { text: "📋 Solicitar Propuesta / Demo", query: "agendar demo propuesta" }
              ],
              showLeadForm: false
            };
          }
        } else if (affirmationRegex.test(q)) {
          // User said YES to orientation
          awaitingClarification = false;
          if (currentLang === 'en') {
            replyObj = {
              text: "We would be glad to guide you. At MOSBI Systems we develop SaaS platforms and custom software for industrial operations and mobile technician fleets:\n\n" +
                    "• **MachId™ AI:** Visual recognition of industrial machines, OCR, and instant schematics.\n" +
                    "• **FieldOps Gen Pro:** Fleet dispatch, van inventory control, and 90 OSHA standards.\n" +
                    "• **Custom Software & Web Portals:** High-converting websites and internal tools for trade contractors.\n\n" +
                    "Which of these solutions or needs would you like to explore for your company?",
              actions: [
                { text: "🔍 Explore MachId™ AI", query: "machid" },
                { text: "🛠️ Explore FieldOps Gen Pro", query: "fieldops" },
                { text: "💻 Software & Web for Trades", query: "software web trades" },
                { text: "📋 Request Proposal / Demo", query: "agendar demo propuesta" }
              ],
              showLeadForm: false
            };
          } else if (currentLang === 'fr') {
            replyObj = {
              text: "C'est avec grand plaisir que nous vous orientons. Chez MOSBI Systems, nous développons des plateformes SaaS et solutions logicielles pour les opérations industrielles et les flottes de techniciens :\n\n" +
                    "• **MachId™ AI :** Reconnaissance visuelle d'équipements industriels et schémas automatiques.\n" +
                    "• **FieldOps Gen Pro :** Dispatch, gestion des tournées, inventaire véhicule et normes OSHA.\n" +
                    "• **Logiciels et Portails Web :** Sites haute performance et outils sur mesure pour prestataires techniques.\n\n" +
                    "Sur quel domaine souhaitez-vous concentrer vos besoins actuels ?",
              actions: [
                { text: "🔍 Découvrir MachId™ AI", query: "machid" },
                { text: "🛠️ Découvrir FieldOps Gen Pro", query: "fieldops" },
                { text: "💻 Logiciel & Web Métier", query: "logiciel web services" },
                { text: "📋 Demander une Démo / Proposition", query: "agendar demo propuesta" }
              ],
              showLeadForm: false
            };
          } else {
            replyObj = {
              text: "Con mucho gusto le orientamos. En MOSBI Systems desarrollamos plataformas SaaS y soluciones tecnológicas para operaciones industriales y empresas con técnicos en ruta:\n\n" +
                    "• **MachId™ AI:** Si necesita identificar maquinaria, componentes o esquemáticos de piezas de forma visual con IA.\n" +
                    "• **FieldOps Gen Pro:** Si cuenta con técnicos en ruta y flotas de vehículos y necesita gestionar llamadas, despacho, órdenes y repuestos en van con normas OSHA.\n" +
                    "• **Software y Portales Web a Medida:** Si su empresa de servicios requiere una página web de alta conversión o una aplicación interna a la medida.\n\n" +
                    "¿En cuál de estas áreas se enfoca su requerimiento actual?",
              actions: [
                { text: "🔍 Conocer MachId™ AI", query: "machid" },
                { text: "🛠️ Conocer FieldOps Gen Pro", query: "fieldops" },
                { text: "💻 Software y Web", query: "software web empresas" },
                { text: "📋 Solicitar Propuesta / Demo", query: "agendar demo propuesta" }
              ],
              showLeadForm: false
            };
          }
        } else if (negationRegex.test(q)) {
          // User said NO
          awaitingClarification = false;
          var hr = new Date().getHours();
          var timeWish = (hr >= 19 || hr < 5) ? "¡Que pase una excelente noche!" : "¡Que tenga un excelente día!";
          if (currentLang === 'en') {
            replyObj = {
              text: "Understood. We remain completely at your service whenever you need. If you ever wish to explore our SaaS platforms or schedule a live technical demonstration, we will be glad to assist you.\n\nHave a wonderful day!",
              showLeadForm: false
            };
          } else if (currentLang === 'fr') {
            replyObj = {
              text: "C'est bien noté. Nous restons à votre entière disposition. Si vous souhaitez ultérieurement découvrir nos plateformes SaaS ou organiser une démonstration technique, nous serons ravis de vous accompagner.\n\nBonne continuation !",
              showLeadForm: false
            };
          } else {
            replyObj = {
              text: "Entendido. Quedamos a su entera disposición cuando guste. Si más adelante requiere información sobre nuestras plataformas SaaS o coordinar una demostración técnica, con gusto le atenderemos.\n\n" + timeWish,
              showLeadForm: false
            };
          }
        } else if (/compactad|waste\s*caddy|cuarto\s*de\s*basura|basura/.test(q)) {
          awaitingClarification = false;
          if (currentLang === 'es') {
            replyObj = {
              text: "En MOSBI Systems desarrollamos plataformas de software especializadas para empresas industriales y de gestión de residuos. Para este sector disponemos del módulo **FieldOps Gen Pro: Waste & Compaction**, que permite a técnicos gestionar equipos, órdenes de servicio y normativas operativas.\n\nSi su empresa requiere asesoría técnica o adquisición de maquinaria, nuestro personal técnico de servicios evaluará los requerimientos de su instalación para preparar una propuesta técnica personalizada.\n\n¿Desea que un representante técnico de servicios le contacte?",
              actions: [
                { text: "📋 Solicitar Contacto Técnico", query: "agendar demo propuesta" },
                { text: "🛠️ Ver FieldOps Gen Pro", query: "fieldops" }
              ],
              showLeadForm: false
            };
          } else {
            replyObj = {
              text: "At MOSBI Systems we specialize in industrial software platforms, including our **FieldOps Gen Pro: Waste & Compaction** module. If your facility requires equipment evaluation or a technical proposal, our technical service personnel will review your site requirements.\n\nWould you like a technical representative to contact you?",
              actions: [
                { text: "📋 Request Technical Contact", query: "agendar demo propuesta" },
                { text: "🛠️ Explore FieldOps Gen Pro", query: "fieldops" }
              ],
              showLeadForm: false
            };
          }
        } else if (/machid|mach\s*id|identifi|reconocimiento|vision|ocr|esquematic|plano|forense/.test(q)) {
          awaitingClarification = false;
          replyObj = kb.machid;
        } else if (/fieldops|field\s*ops|van|inventario|despacho|dispatch|cuadrilla|flota|fleet|osha|recibo|receipt|order|orden|t[eé]cnico|servicio[s]?\s*de\s*campo/.test(q)) {
          awaitingClarification = false;
          replyObj = kb.fieldops;
        } else if (/web|landing|pagina|portal|sitio|software\s*web|contratista/.test(q)) {
          awaitingClarification = false;
          replyObj = kb.web_services;
        } else if (/app|m[oó]vil|mobile|flutter|custom|medida|desarrollo|ia|inteligencia|vision/.test(q)) {
          awaitingClarification = false;
          replyObj = kb.custom_ai;
        } else if (/roi|retorno|inversi[oó]n|precio|cost|costo|plan|tarifa|cu[aá]nto/.test(q)) {
          awaitingClarification = false;
          replyObj = kb.roi;
        } else if (/demo|demostraci[oó]n|reuni[oó]n|cita|propuesta|proposal|contact|llamar|cotiz|asesor|representante/.test(q)) {
          awaitingClarification = false;
          replyObj = kb.demo;
        } else {
          // Incoherent, filler ("aja", "ok", "ah", etc.), or unrecognized query:
          // Ask for clarification or offer guidance without dumping long sales text!
          awaitingClarification = true;
          if (currentLang === 'en') {
            replyObj = {
              text: "¿Could you please be more specific about your requirement or question? Or would you like some guidance for your company?",
              actions: [
                { text: "✅ Yes, I would like guidance", query: "yes please" },
                { text: "❌ No, thank you", query: "no thank you" }
              ],
              showLeadForm: false
            };
          } else if (currentLang === 'fr') {
            replyObj = {
              text: "Pourriez-vous préciser votre demande ou question ? Ou souhaitez-vous une orientation pour votre entreprise ?",
              actions: [
                { text: "✅ Oui, je souhaite une orientation", query: "oui merci" },
                { text: "❌ Non, merci", query: "non merci" }
              ],
              showLeadForm: false
            };
          } else {
            replyObj = {
              text: "¿Podría ser más específico en su requerimiento o consulta? ¿O requiere alguna orientación para su empresa?",
              actions: [
                { text: "✅ Sí, deseo orientación", query: "si deseo orientacion" },
                { text: "❌ No, gracias", query: "no gracias" }
              ],
              showLeadForm: false
            };
          }
        }

        appendMessage('bot', replyObj.text, replyObj.actions, replyObj.showLeadForm);

        // When reply finishes, robot winks with an "OK" gesture!
        setTimeout(function () {
          robot.winkOk();
        }, 400);

        resetInactivity();
      }, 600);
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
