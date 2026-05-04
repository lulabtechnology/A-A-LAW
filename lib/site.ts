export type Language = "es" | "en";

export const site = {
  name: "A&A Law Firm",
  legalName: "A & A Law Firm",
  url: "https://aalawfirmpa.com",
  phoneDisplay: "+507 6378-9685",
  phoneRaw: "50763789685",
  email: "info@aalawfirmpa.com",
  instagram: "https://instagram.com/alvarezlawyers",
  instagramHandle: "@alvarezlawyers",
  address: "Calle 72 San Francisco 108, Panamá",
  hours: {
    es: "Lunes a viernes · 8:00 a.m. a 5:00 p.m.",
    en: "Monday to Friday · 8:00 a.m. to 5:00 p.m."
  }
};

export const metadataText = {
  es: {
    title: "A&A Law Firm | Asesoría legal estratégica en Panamá",
    description:
      "Firma legal en Panamá especializada en estructuración empresarial, cumplimiento regulatorio, registros, permisos, migración, marcas, relocation y servicios marítimos."
  },
  en: {
    title: "A&A Law Firm | Strategic legal counsel in Panama",
    description:
      "Legal firm in Panama focused on business structuring, regulatory compliance, permits, migration, trademarks, relocation and maritime services."
  }
};

export const navLinks = {
  es: [
    { href: "#firma", label: "Firma" },
    { href: "#relocation", label: "Relocation" },
    { href: "#servicios", label: "Servicios" },
    { href: "#diferenciales", label: "Diferenciales" },
    { href: "#proceso", label: "Proceso" },
    { href: "#faq", label: "Preguntas" },
    { href: "#contacto", label: "Contacto" }
  ],
  en: [
    { href: "#firma", label: "Firm" },
    { href: "#relocation", label: "Relocation" },
    { href: "#servicios", label: "Services" },
    { href: "#diferenciales", label: "Why us" },
    { href: "#proceso", label: "Process" },
    { href: "#faq", label: "Questions" },
    { href: "#contacto", label: "Contact" }
  ]
};

export const pageText = {
  es: {
    langLabel: "ES",
    altLangLabel: "EN",
    whatsappMessage: "Hola, deseo recibir asesoría legal con A&A Law Firm. Me interesa conocer más sobre sus servicios.",
    heroEyebrow: "Firma legal en Panamá",
    heroTitle: "Asesoría legal estratégica para estructurar, cumplir y operar correctamente en Panamá.",
    heroSubtitle:
      "Acompañamos a emprendedores, empresas, marcas, inversionistas y clientes extranjeros en procesos clave para establecerse, regularizarse y crecer con seguridad desde el inicio.",
    heroPrimary: "Solicitar asesoría por WhatsApp",
    heroSecondary: "Ver servicios legales",
    trustPoints: [
      "Más de 10 años de experiencia",
      "Estructuración empresarial y cumplimiento regulatorio",
      "Acompañamiento legal en Panamá"
    ],
    heroPanelEyebrow: "Atención estratégica",
    heroPanelTitle: "Para personas y negocios que necesitan operar con estructura legal acorde a la legislación panameña.",
    heroPanelText:
      "La asesoría se enfoca en residencia, formalización, permisos, registros, protección de activos y cumplimiento regulatorio en Panamá.",
    heroPanelItems: [
      "Residencia, migración y relocation",
      "Constitución y operación empresarial",
      "Permisos, licencias y registros"
    ],
    firmEyebrow: "Firma",
    firmTitle: "Una estructura legal sólida permite iniciar, regularizar y crecer con mayor seguridad.",
    intro:
      "A&A Law Firm es una firma legal en Panamá especializada en estructuración empresarial, cumplimiento regulatorio y protección de activos. Asesoramos a emprendedores, empresas, inversionistas y extranjeros en procesos clave como constitución de sociedades, migración, registro sanitario, licencias, propiedad intelectual y operación legal.",
    extendedIntro:
      "Ayudamos a nuestros clientes a establecerse correctamente, cumplir con la normativa y crecer con seguridad desde el inicio. Somos el aliado legal para quienes buscan mudarse, operar o expandirse en Panamá de forma estratégica.",
    metrics: [
      { value: "+10", label: "años de experiencia" },
      { value: "9", label: "servicios legales principales" },
      { value: "Panamá", label: "enfoque de operación" }
    ],
    credibilityPoints: [
      {
        title: "Para emprendedores y empresas",
        text: "Asesoría para negocios que buscan formalizarse, operar correctamente y evitar riesgos desde el inicio."
      },
      {
        title: "Para extranjeros e inversionistas",
        text: "Acompañamiento en residencia, constitución de empresas, estructuras legales y procesos vinculados a inversión."
      },
      {
        title: "Para operaciones reguladas",
        text: "Apoyo en trámites fiscales, sanitarios, municipales y regulatorios necesarios para operar en Panamá."
      }
    ],
    relocationEyebrow: "Relocation e inversión extranjera",
    relocationTitle: "Move, build and operate in Panama — legally and strategically",
    relocationSubtitle:
      "Acompañamos a extranjeros que desean mudarse, obtener residencia, constituir una empresa y estructurar legalmente su operación en Panamá desde cero.",
    relocationCards: [
      {
        title: "Residencia y mudanza a Panamá",
        text: "Orientación legal para procesos como Visa de Países Amigos, residencia para inversionistas y estructuración migratoria vinculada al plan personal o empresarial."
      },
      {
        title: "Negocio y estructura legal",
        text: "Constitución de empresas, aviso de operaciones, inscripción fiscal y diseño de estructura legal para iniciar actividades con cumplimiento."
      },
      {
        title: "Operación desde cero",
        text: "Acompañamiento para establecerse, proteger activos comerciales y coordinar requisitos legales, fiscales y regulatorios necesarios para operar."
      }
    ],
    relocationPrimary: "I want to move to Panama",
    relocationSecondary: "I want to start a business in Panama",
    strategyEyebrow: "Enfoque estratégico",
    strategyTitle: "Diseñamos la ruta legal idónea para cada etapa de la operación.",
    strategyText:
      "El trabajo legal se aborda desde la estructura, el cumplimiento y la prevención de riesgos para que cada proceso tenga sentido dentro del negocio o plan de establecimiento en Panamá.",
    servicesEyebrow: "Servicios legales",
    servicesTitle: "Soluciones para estructurar, regularizar, proteger y operar en Panamá.",
    servicesText:
      "Acompañamos procesos legales empresariales, migratorios, regulatorios y comerciales con una visión integral para avanzar con claridad desde el inicio.",
    consultService: "Consultar este servicio",
    problemsEyebrow: "Riesgos que prevenimos",
    problemsTitle: "Ayudamos a transformar incertidumbre legal en estructura, orden y capacidad de acción.",
    painPoints: [
      "Operar sin cumplir completamente con requisitos legales puede generar retrasos, multas y rechazos.",
      "Mudarse o invertir en Panamá requiere una ruta legal clara para residencia, estructura y operación.",
      "Un negocio necesita estructura societaria, fiscal, sanitaria o regulatoria según su actividad.",
      "La protección de marcas, productos y activos comerciales debe planificarse antes de crecer."
    ],
    whyEyebrow: "Diferenciales",
    whyTitle: "Una firma pensada para clientes que valoran claridad, cumplimiento y estrategia.",
    whyCards: [
      {
        title: "Acompañamiento con criterio",
        text: "Entendemos que un proceso legal mal planteado puede impactar tiempos, reputación y operación. Por eso acompañamos con visión integral."
      },
      {
        title: "Cumplimiento sin improvisación",
        text: "Priorizamos estructuras bien planteadas y procesos ordenados para reducir fricciones regulatorias y riesgos innecesarios."
      },
      {
        title: "Panamá como plataforma de crecimiento",
        text: "Trabajamos con negocios locales, extranjeros e inversionistas que buscan establecerse y expandirse con respaldo legal sólido."
      }
    ],
    processEyebrow: "Proceso",
    processTitle: "Un proceso claro para avanzar con respaldo legal y visión estratégica.",
    processSteps: [
      {
        step: "01",
        title: "Evaluación inicial",
        text: "Se revisa el objetivo, el tipo de operación y los requisitos legales que aplican al caso."
      },
      {
        step: "02",
        title: "Ruta legal adecuada",
        text: "Se define la estructura necesaria para constituir, regularizar, proteger, mudarse o expandir la actividad."
      },
      {
        step: "03",
        title: "Gestión documental",
        text: "Se coordinan los trámites y documentos correspondientes con un enfoque ordenado y estratégico."
      },
      {
        step: "04",
        title: "Acompañamiento hasta operar",
        text: "Se brinda seguimiento durante las etapas críticas para avanzar con respaldo profesional."
      }
    ],
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Respuestas claras para tomar decisiones legales con mayor seguridad.",
    contactEyebrow: "Contacto",
    contactTitle: "Cuéntenos su necesidad legal y definamos la mejor ruta para avanzar.",
    contactText:
      "Puede escribirnos por WhatsApp o completar el formulario indicando el servicio de interés y una breve descripción de su caso.",
    contactInfoLabels: {
      whatsapp: "WhatsApp",
      email: "Correo",
      address: "Dirección",
      hours: "Horario",
      instagram: "Instagram"
    },
    firmFocus: "Enfoque de la firma",
    centralMessage: "Asesoría legal estratégica para estructurar, cumplir y operar correctamente en Panamá.",
    footerText:
      "Firma legal en Panamá enfocada en estructura empresarial, relocation, cumplimiento regulatorio, protección de activos y acompañamiento estratégico.",
    footerCta: "Solicitar asesoría por WhatsApp",
    rights: "Todos los derechos reservados.",
    developedBy: "Desarrollo por LulabTech.com"
  },
  en: {
    langLabel: "EN",
    altLangLabel: "ES",
    whatsappMessage: "Hello, I would like to receive legal guidance from A&A Law Firm. I am interested in learning more about your services.",
    heroEyebrow: "Legal firm in Panama",
    heroTitle: "Strategic legal counsel to structure, comply and operate correctly in Panama.",
    heroSubtitle:
      "We support entrepreneurs, companies, brands, investors and foreign clients through key legal processes to establish, regularize and grow with confidence from the beginning.",
    heroPrimary: "Request guidance via WhatsApp",
    heroSecondary: "View legal services",
    trustPoints: [
      "More than 10 years of experience",
      "Business structuring and regulatory compliance",
      "Legal support in Panama"
    ],
    heroPanelEyebrow: "Strategic guidance",
    heroPanelTitle: "For individuals and businesses that need to operate with a legal structure aligned with Panamanian law.",
    heroPanelText:
      "Our legal support focuses on residence, formalization, permits, registrations, asset protection and regulatory compliance in Panama.",
    heroPanelItems: [
      "Residence, migration and relocation",
      "Business incorporation and operation",
      "Permits, licenses and registrations"
    ],
    firmEyebrow: "Firm",
    firmTitle: "A solid legal structure helps you start, regularize and grow with greater confidence.",
    intro:
      "A&A Law Firm is a legal firm in Panama focused on business structuring, regulatory compliance and asset protection. We advise entrepreneurs, companies, investors and foreigners in key processes such as company incorporation, migration, sanitary registration, licenses, intellectual property and legal operation.",
    extendedIntro:
      "We help clients establish themselves correctly, comply with applicable requirements and grow with confidence from the beginning. We are the legal ally for those who want to relocate, operate or expand in Panama strategically.",
    metrics: [
      { value: "+10", label: "years of experience" },
      { value: "9", label: "main legal services" },
      { value: "Panama", label: "operation focus" }
    ],
    credibilityPoints: [
      {
        title: "For entrepreneurs and companies",
        text: "Legal guidance for businesses seeking to formalize, operate correctly and reduce risks from the start."
      },
      {
        title: "For foreigners and investors",
        text: "Support with residence, company incorporation, legal structures and processes connected to investment."
      },
      {
        title: "For regulated operations",
        text: "Assistance with tax, sanitary, municipal and regulatory procedures required to operate in Panama."
      }
    ],
    relocationEyebrow: "Relocation and foreign investment",
    relocationTitle: "Move, build and operate in Panama — legally and strategically",
    relocationSubtitle:
      "We support foreigners who want to relocate, obtain residence, incorporate a company and legally structure their operation in Panama from zero.",
    relocationCards: [
      {
        title: "Residence and relocation to Panama",
        text: "Legal orientation for processes such as Friendly Nations Visa, residence for investors and migration structures connected to a personal or business plan."
      },
      {
        title: "Business and legal structure",
        text: "Company incorporation, notice of operations, tax registration and legal structure design to begin activities with compliance."
      },
      {
        title: "Operation from zero",
        text: "Support to establish, protect commercial assets and coordinate legal, tax and regulatory requirements needed to operate."
      }
    ],
    relocationPrimary: "I want to move to Panama",
    relocationSecondary: "I want to start a business in Panama",
    strategyEyebrow: "Strategic approach",
    strategyTitle: "We design the appropriate legal path for each stage of the operation.",
    strategyText:
      "Legal work is addressed through structure, compliance and risk prevention so each process makes sense within the business or relocation plan in Panama.",
    servicesEyebrow: "Legal services",
    servicesTitle: "Solutions to structure, regularize, protect and operate in Panama.",
    servicesText:
      "We support business, migration, regulatory and commercial legal processes with an integrated approach to move forward clearly from the start.",
    consultService: "Ask about this service",
    problemsEyebrow: "Risks we help prevent",
    problemsTitle: "We help transform legal uncertainty into structure, order and capacity to act.",
    painPoints: [
      "Operating without fully meeting legal requirements can lead to delays, fines and rejected applications.",
      "Relocating or investing in Panama requires a clear legal path for residence, structure and operation.",
      "A business needs corporate, tax, sanitary or regulatory structure depending on its activity.",
      "Brands, products and commercial assets should be protected before growth accelerates."
    ],
    whyEyebrow: "Why us",
    whyTitle: "A firm for clients who value clarity, compliance and strategy.",
    whyCards: [
      {
        title: "Guidance with criteria",
        text: "We understand that a poorly structured legal process can affect timing, reputation and operation. That is why we provide support with an integrated vision."
      },
      {
        title: "Compliance without improvisation",
        text: "We prioritize well-planned structures and organized processes to reduce regulatory friction and unnecessary risks."
      },
      {
        title: "Panama as a platform for growth",
        text: "We work with local businesses, foreigners and investors seeking to establish and expand with solid legal support."
      }
    ],
    processEyebrow: "Process",
    processTitle: "A clear process to move forward with legal support and strategic vision.",
    processSteps: [
      {
        step: "01",
        title: "Initial evaluation",
        text: "We review the objective, the type of operation and the legal requirements that apply to the case."
      },
      {
        step: "02",
        title: "Appropriate legal path",
        text: "We define the structure needed to incorporate, regularize, protect, relocate or expand the activity."
      },
      {
        step: "03",
        title: "Document management",
        text: "We coordinate the corresponding procedures and documents with an organized and strategic approach."
      },
      {
        step: "04",
        title: "Support until operation",
        text: "We provide follow-up during critical stages so clients can move forward with professional support."
      }
    ],
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Clear answers to make legal decisions with greater confidence.",
    contactEyebrow: "Contact",
    contactTitle: "Tell us your legal need and let us define the best path forward.",
    contactText:
      "You may contact us through WhatsApp or complete the form indicating the service of interest and a brief description of your case.",
    contactInfoLabels: {
      whatsapp: "WhatsApp",
      email: "Email",
      address: "Address",
      hours: "Hours",
      instagram: "Instagram"
    },
    firmFocus: "Firm focus",
    centralMessage: "Strategic legal counsel to structure, comply and operate correctly in Panama.",
    footerText:
      "Legal firm in Panama focused on business structure, relocation, regulatory compliance, asset protection and strategic support.",
    footerCta: "Request guidance via WhatsApp",
    rights: "All rights reserved.",
    developedBy: "Developed by LulabTech.com"
  }
};

export const services = {
  es: [
    {
      title: "Estructuración y Constitución de Empresas",
      description: "Base legal para iniciar operaciones con orden, protección de activos y una estructura empresarial adecuada.",
      bullets: ["Constitución de sociedades anónimas", "Diseño de estructura legal empresarial", "Protección de activos", "Asesoría para inicio de operaciones"]
    },
    {
      title: "Aviso de Operaciones e Inscripción Fiscal",
      description: "Formalización inicial del negocio para operar conforme a los requisitos comerciales y fiscales en Panamá.",
      bullets: ["Aviso de Operaciones (Panamá Emprende)", "Inscripción en la DGI", "Cumplimiento fiscal inicial", "Regularización de negocios"]
    },
    {
      title: "Registro Sanitario de Productos",
      description: "Acompañamiento regulatorio para productos que requieren revisión, documentación y gestión ante la autoridad correspondiente.",
      bullets: ["Alimentos, bebidas y cosméticos", "Productos nacionales e importados", "Revisión de etiquetas", "Gestión ante el MINSA"]
    },
    {
      title: "Licencias Sanitarias y Certificación de Plantas",
      description: "Preparación y gestión para negocios que deben cumplir requisitos sanitarios, BPM e inspecciones.",
      bullets: ["Licencias para restaurantes y negocios", "Certificación de plantas de alimentos", "BPM y cumplimiento sanitario", "Preparación para inspecciones"]
    },
    {
      title: "Permisos para Cafeterías Restaurantes y Negocios Afines",
      description: "Estructuración de permisos esenciales para cafeterías, restaurantes y negocios afines que necesitan operar de forma completa, incluyendo licencia de licores y permiso de discoteca cuando aplique.",
      bullets: ["Licencias municipales", "Permisos de bomberos", "Uso de suelo", "Licencia de licores", "Permiso de discoteca", "Estructuración completa del negocio"]
    },
    {
      title: "Registro de Marca",
      description: "Protección de activos comerciales mediante revisión de disponibilidad, registro y prevención de conflictos.",
      bullets: ["Registro de marcas en Panamá", "Protección de activos comerciales", "Búsqueda de disponibilidad", "Prevención de conflictos"]
    },
    {
      title: "Migración y Residencia",
      description: "Asesoría migratoria conectada con estructuras empresariales e inversión cuando el caso lo requiere.",
      bullets: ["Visa de Países Amigos", "Residencia para inversionistas", "Estructuración migratoria + empresarial", "Acompañamiento completo"]
    },
    {
      title: "Registro de Naves y Servicios Marítimos",
      description: "Asesoría legal marítima para registro, abanderamiento y estructuración de propiedad de activos marítimos.",
      bullets: ["Registro de embarcaciones en Panamá", "Abanderamiento de naves", "Asesoría legal marítima", "Estructuración para propiedad de activos marítimos"]
    },
    {
      title: "Asesoría Legal Estratégica",
      description: "Evaluación continua de estructuras, cumplimiento regulatorio y prevención de riesgos para la operación.",
      bullets: ["Evaluación de estructuras", "Cumplimiento regulatorio", "Prevención de riesgos", "Acompañamiento continuo"]
    }
  ],
  en: [
    {
      title: "Business Structuring and Company Incorporation",
      description: "Legal foundation to begin operations with order, asset protection and an adequate business structure.",
      bullets: ["Corporation incorporation", "Business legal structure design", "Asset protection", "Guidance to begin operations"]
    },
    {
      title: "Notice of Operations and Tax Registration",
      description: "Initial business formalization to operate according to commercial and tax requirements in Panama.",
      bullets: ["Notice of Operations (Panamá Emprende)", "DGI registration", "Initial tax compliance", "Business regularization"]
    },
    {
      title: "Sanitary Registration of Products",
      description: "Regulatory support for products that require review, documentation and management before the corresponding authority.",
      bullets: ["Food, beverages and cosmetics", "National and imported products", "Label review", "MINSA procedures"]
    },
    {
      title: "Sanitary Licenses and Plant Certification",
      description: "Preparation and management for businesses that must comply with sanitary requirements, BPM and inspections.",
      bullets: ["Licenses for restaurants and businesses", "Food plant certification", "BPM and sanitary compliance", "Inspection preparation"]
    },
    {
      title: "Permits for Cafeterias Restaurants and Related Businesses",
      description: "Structuring of essential permits for cafeterias, restaurants and related businesses that need to operate completely, including liquor licenses and discotheque permits when applicable.",
      bullets: ["Municipal licenses", "Fire department permits", "Land use", "Liquor license", "Discotheque permit", "Complete business structuring"]
    },
    {
      title: "Trademark Registration",
      description: "Protection of commercial assets through availability review, registration and conflict prevention.",
      bullets: ["Trademark registration in Panama", "Commercial asset protection", "Availability search", "Conflict prevention"]
    },
    {
      title: "Migration and Residence",
      description: "Migration guidance connected to business structures and investment when the case requires it.",
      bullets: ["Friendly Nations Visa", "Residence for investors", "Migration + business structuring", "Complete support"]
    },
    {
      title: "Vessel Registration and Maritime Services",
      description: "Maritime legal advice for registration, flagging and structuring ownership of maritime assets.",
      bullets: ["Vessel registration in Panama", "Flagging of vessels", "Maritime legal advice", "Structuring ownership of maritime assets"]
    },
    {
      title: "Strategic Legal Counsel",
      description: "Continuous evaluation of structures, regulatory compliance and risk prevention for the operation.",
      bullets: ["Structure evaluation", "Regulatory compliance", "Risk prevention", "Ongoing support"]
    }
  ]
};

export const differentiators = {
  es: [
    { title: "Soluciones completas, no trámites aislados", text: "El enfoque de la firma es brindar acompañamiento estratégico para que la operación legal tenga sentido desde el inicio." },
    { title: "Claridad para tomar decisiones", text: "Cada proceso se orienta a que el cliente entienda los requisitos, riesgos y pasos necesarios para avanzar con seguridad." },
    { title: "Cumplimiento regulatorio con visión empresarial", text: "La asesoría integra estructura legal, permisos, registros y protección de activos dentro del contexto real del negocio." }
  ],
  en: [
    { title: "Complete solutions, not isolated procedures", text: "The firm provides strategic support so the legal operation makes sense from the beginning." },
    { title: "Clarity for decision-making", text: "Each process is oriented so clients understand the requirements, risks and steps needed to move forward safely." },
    { title: "Regulatory compliance with business vision", text: "The guidance integrates legal structure, permits, registrations and asset protection within the real context of the business." }
  ]
};

export const faqItems = {
  es: [
    { question: "¿Qué necesito para constituir una empresa en Panamá?", answer: "Se debe revisar la actividad, la estructura legal empresarial, los requisitos para iniciar operaciones y las medidas de protección de activos que correspondan al caso." },
    { question: "¿Qué es el Aviso de Operaciones?", answer: "Es un trámite necesario para formalizar el inicio de actividades comerciales. Puede complementarse con inscripción fiscal y otros requisitos según el tipo de negocio." },
    { question: "¿Cuándo un producto necesita registro sanitario?", answer: "Alimentos, bebidas, cosméticos y otros productos regulados pueden requerir registro sanitario, revisión de etiquetas y gestión ante el MINSA." },
    { question: "¿Qué permisos necesita una cafetería, restaurante o negocio afín para operar?", answer: "Puede requerir licencias municipales, permisos de bomberos, uso de suelo, licencias sanitarias, licencia de licores, permiso de discoteca y una estructura completa del negocio, según aplique." },
    { question: "¿Por qué conviene registrar una marca?", answer: "El registro ayuda a proteger activos comerciales, revisar disponibilidad y prevenir conflictos relacionados con el uso de la marca." },
    { question: "¿Atienden procesos de migración y residencia?", answer: "Sí. La firma acompaña procesos como Visa de Países Amigos, residencia para inversionistas y estructuras migratorias vinculadas a negocios." },
    { question: "¿Ofrecen asesoría para registro de naves?", answer: "Sí. La firma asesora en registro de embarcaciones, abanderamiento de naves, servicios marítimos y estructuras de propiedad de activos marítimos." },
    { question: "¿Cómo puedo solicitar asesoría?", answer: "Puede escribir por WhatsApp o completar el formulario de contacto indicando el servicio de interés y una breve descripción de la necesidad legal." }
  ],
  en: [
    { question: "What do I need to incorporate a company in Panama?", answer: "The business activity, legal structure, operating requirements and applicable asset protection measures should be reviewed according to the case." },
    { question: "What is the Notice of Operations?", answer: "It is a required procedure to formalize the beginning of commercial activities. It may be complemented with tax registration and other requirements depending on the business type." },
    { question: "When does a product need sanitary registration?", answer: "Food, beverages, cosmetics and other regulated products may require sanitary registration, label review and management before MINSA." },
    { question: "What permits does a cafeteria, restaurant or related business need to operate?", answer: "It may require municipal licenses, fire department permits, land use, sanitary licenses, liquor licenses, discotheque permits and a complete business structure, depending on the case." },
    { question: "Why should I register a trademark?", answer: "Registration helps protect commercial assets, review availability and prevent conflicts related to the use of the brand." },
    { question: "Do you support migration and residence processes?", answer: "Yes. The firm supports processes such as Friendly Nations Visa, residence for investors and migration structures connected to business plans." },
    { question: "Do you provide guidance for vessel registration?", answer: "Yes. The firm advises on vessel registration, vessel flagging, maritime services and ownership structures for maritime assets." },
    { question: "How can I request legal guidance?", answer: "You may contact us through WhatsApp or complete the contact form indicating the service of interest and a brief description of your legal need." }
  ]
};
