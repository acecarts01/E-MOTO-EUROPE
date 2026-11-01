// src/config/site.ts - TypeScript Single Source of Truth for E-MOTO EUROPE

export interface ProductSpec {
  power?: string;
  torque?: string;
  battery?: string;
  topSpeed?: string;
  range?: string;
  weight?: string;
  compatibility?: string;
  suspension?: string;
  brakes?: string;
  frame?: string;
  controller?: string;
  rim?: string;
  material?: string;
  bearing?: string;
  connector?: string;
  cutoffSpeed?: string;
  sensor?: string;
  display?: string;
  voltage?: string;
  capacity?: string;
  cells?: string;
  bms?: string;
  voltageRange?: string;
  peakPower?: string;
  features?: string;
  cooling?: string;
  current?: string;
  connectivity?: string;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  categoryName: string;
  shortDescription: string;
  description: string;
  badge: string;
  featured: boolean;
  isStVZO: boolean;
  legalNotice: string;
  specs: ProductSpec;
  images: string[];
}

export interface Category {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  legalStatus: string;
  icon: string;
  image: string;
  subcategories: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
  categoryName?: string;
  isStVZO: boolean;
}

export const SITE = {
  name: 'E-MOTO EUROPE',
  legalName: 'E-MOTO Europe Mobility Systems GmbH i.Gr.',
  tagline: 'Europas Spezialist für High-Performance E-Motos, Umbausätze & Custom Upgrades',
  taglineEn: "Europe's High-Performance E-Motos, Conversion Kits & Custom Upgrades Hub",
  domain: 'emoto-europe.de',
  locale: 'de',
  defaultLanguage: 'de',
  supportedLanguages: [
    { code: 'de', label: 'Deutsch', flag: '🇩🇪', region: 'Deutschland / Österreich' },
    { code: 'de-CH', label: 'Schweiz (DE)', flag: '🇨🇭', region: 'Schweiz' },
    { code: 'en', label: 'English', flag: '🇪🇺', region: 'Pan-Europe / UK' },
    { code: 'fr', label: 'Français', flag: '🇫🇷', region: 'France / Belgique' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹', region: 'Italia' },
    { code: 'es', label: 'Español', flag: '🇪🇸', region: 'España' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱', region: 'Nederland / België' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱', region: 'Polska' },
    { code: 'pt', label: 'Português', flag: '🇵🇹', region: 'Portugal' },
    { code: 'cs', label: 'Čeština', flag: '🇨🇿', region: 'Česká republika' },
  ],
  currency: 'EUR',
  currencySymbol: '€',
  target: 'vercel',
  primaryColor: '#FF3B30',
  darkColor: '#09090c',
  accentColor: '#00F0FF',
  gscVerification: 'GSC-EMOTO-EU-2026-VERIFIED',
  indexNowKey: 'emotoeurope2026indexnowkey',
  cartKey: 'emoto-cart',
};

export const CONTACT = {
  email: 'support@emoto-europe.de',
  emailEncoded: 'support&#64;emoto-europe.de',
  phone: '+49 (0) 89 2154 7890',
  phoneClean: '+498921547890',
  whatsapp: '+49 176 8923 4510',
  whatsappClean: '4917689234510',
  telegram: '@EMotoEuropeSupport',
  signal: '+49 176 8923 4510',
  address: 'Industriepark Süd 14, 85356 Freising / München, Deutschland',
  hq: 'Freising / München, Bayern, Deutschland',
  country: 'Deutschland',
  serving: 'Deutschland, Österreich, Schweiz und alle EU-Mitgliedstaaten',
  commercialRegistry: 'Amtsgericht München HRB 289412',
  vatId: 'DE 368 491 825',
  weeeReg: 'DE 94182736',
  battGReg: 'DE 83910247',
  lucidReg: 'DE4829104829104',
  openingHours: 'Mo–Fr 09:00 – 18:00 Uhr CET (Telefonische Fachberatung & Werkstatt)'
};

export const SHOP = {
  minOrder: 0,
  freeShippingThreshold: 199,
  shippingFee: 6.90,
  shippingFeeEU: 14.95,
  cryptoDiscount: 5,
  taxRatePercent: 19,
  priceSuffix: 'inkl. 19% MwSt., zzgl. Versand',
  taxNotice: 'inkl. 19% MwSt., zzgl. Versand',
  paymentMethods: [
    { id: 'sepa-vorkasse', name: 'SEPA Banküberweisung / Vorkasse', fee: 0, note: 'Sofortige Rechnungsstellung mit IBAN/BIC' },
    { id: 'crypto-btc', name: 'Kryptowährung (Bitcoin BTC)', fee: 0, discount: 5, note: '5% Direktrabatt an der Kasse' },
    { id: 'crypto-usdt', name: 'Kryptowährung (USDT TRC20/ERC20)', fee: 0, discount: 5, note: '5% Direktrabatt an der Kasse' },
    { id: 'klarna-rechnung', name: 'Klarna Rechnungskauf / Sofort', fee: 0, note: 'Bequem per Klarna Pay Later' },
    { id: 'ideal', name: 'iDEAL (Niederlande)', fee: 0, note: 'Direktes Online-Banking für NL' },
    { id: 'blik', name: 'BLIK (Polen)', fee: 0, note: 'Instant Mobile Banking für PL' },
    { id: 'whatsapp-concierge', name: 'WhatsApp VIP Concierge', fee: 0, note: 'Persönliche Prüfung durch Meisterwerkstatt' }
  ],
  dangerousGoodsNotice: 'Lithium-Traktionsbatterien über 100Wh unterliegen den Gefahrgutvorschriften ADR Klasse 9 (UN 3480 / UN 3481) und werden in zertifizierten Spezialkartons mit Gefahrgut-Zulassung per Spedition versandt.'
};

export const FORMS = {
  provider: 'custom',
  contactEndpoint: '/api/forms/contact',
  orderEndpoint: '/api/forms/order',
  wholesaleEndpoint: '/api/forms/wholesale',
  zohoContactWebhook: process.env.ZOHO_CONTACT_WEBHOOK_URL || '',
  zohoOrderWebhook: process.env.ZOHO_ORDER_WEBHOOK_URL || '',
  zohoWholesaleWebhook: process.env.ZOHO_WHOLESALE_WEBHOOK_URL || '',
};

export const CHAT = {
  channels: [
    { type: 'whatsapp', label: 'WhatsApp Fachberatung', value: '+49 176 8923 4510', href: 'https://wa.me/4917689234510?text=Hallo%20E-MOTO%20Europe%2C%20ich%20habe%20eine%20technische%20Frage' },
    { type: 'telegram', label: 'Telegram Support', value: '@EMotoEuropeSupport', href: 'https://t.me/EMotoEuropeSupport' },
    { type: 'phone', label: 'Zentrale München', value: '+49 (0) 89 2154 7890', href: 'tel:+498921547890' },
    { type: 'email', label: 'E-Mail Ticketsystem', value: 'support@emoto-europe.de', href: 'mailto:support@emoto-europe.de' }
  ]
};

export const BRAND = {
  foundingYear: '2021',
  foundingLocation: 'Freising bei München, Deutschland',
  description: 'Europas spezialisierter Fachbetrieb für High-Performance E-Motos, Hochvolt-Umbausätze (1000W–5000W), 72V Traktionsbatterien nach ADR Klasse 9 sowie 100% StVZO-konforme Pedelec-Systeme.',
  milestones: [
    { year: '2021', event: 'Gründung des Entwicklungs- und Werkstattstandorts in Freising bei München mit Fokus auf bürstenlose Hochleistungs-Elektroantriebe.' },
    { year: '2022', event: 'Inbetriebnahme des ersten stationären Prüfstands (Dyno) zur Validierung realer Dauerleistungen und thermischer Lastkurven.' },
    { year: '2023', event: 'Zertifizierung der ADR-Gefahrgutlogistik (Klasse 9) für den europaweiten Speditionsversand von Traktionsbatterien über 1000Wh.' },
    { year: '2024', event: 'Erweiterung des Sortiments um rennfertige E-Dirt-Bikes (ETM, Strike, Sur-Ron/Talaria Komponenten) und FOC Sinus-Controller.' },
    { year: '2025', event: 'Einführung des 100% StVZO-konformen 250W Pedelec-Umbausatzes nach europäischer Norm EN 15194:2017+A1:2024.' },
    { year: '2026', event: 'Eröffnung des B2B-Großhandelsportals und Bereitstellung des automatisierten europäischen MCP & Agent-Commerce-Katalogs.' }
  ],
  differentiation: [
    'TÜV- und ingenieurgeprüfte Messdaten statt ungedeckter Marketingangaben (reale Dauer- vs. Peakleistung)',
    'Zertifizierte Gefahrgut-Logistik nach ADR Klasse 9 mit telefonischer Speditionsavisierung und Ladebordwand',
    'Klare Trennung: 100% StVZO-konforme 250W Pedelecs vs. reine Offroad-Sportgeräte mit Aufklärungspflicht',
    'Eigene Fachwerkstatt in Bayern für Akku-Diagnostik, Controller-Mapping und Ersatzteilversorgung'
  ],
  sameAs: [
    'https://de.trustpilot.com/review/emoto-europe.de',
    'https://www.youtube.com/@EMotoEurope',
    'https://www.instagram.com/emoto_europe'
  ],
  awards: [
    'Zertifizierter ADR Gefahrgut-Fachbetrieb 2024/2026',
    'Bayerischer E-Mobility Handwerksbetrieb eingetragen in Handwerksrolle'
  ]
};

export const CATEGORIES: Category[] = [
  {
    slug: 'komplette-e-motos',
    name: 'Komplette E-Motos & Dirt Bikes',
    nameEn: 'Complete E-Motos & Dirt Bikes',
    description: 'Leistungsstarke elektrische Offroad-Motorräder, Trail-Bikes und Enduros für abgesperrte Strecken und Privatgelände.',
    legalStatus: 'Reine Offroad-Sportgeräte (Nicht zulässig im Geltungsbereich der StVZO)',
    icon: 'Bike',
    image: '/images/cat-motos.webp',
    subcategories: [
      'High-Power E-Dirt Bikes (72V bis 12kW)',
      'Pit Bikes & Junioren-Crosser',
      'Enduro & Trail E-Motos'
    ]
  },
  {
    slug: 'e-bike-umbausaetze',
    name: 'E-Bike Umbausätze & Motoren',
    nameEn: 'E-Bike Conversion Kits & Motors',
    description: 'Umrüstsätze für Fahrräder und Mountainbikes – von 250W StVZO-Pedelec-Kits bis zu 5000W Offroad-Kraftpaketen.',
    legalStatus: 'Differenziert: 250W StVZO-konform / 1000W–5000W Offroad-Sportgeräte',
    icon: 'Zap',
    image: '/images/cat-kits.webp',
    subcategories: [
      '250W StVZO Pedelec Kits (EN 15194)',
      '1000W–2000W High-Torque Heckmotoren',
      '3000W–5000W Offroad-Monster Kits'
    ]
  },
  {
    slug: 'akkus-ladetechnik',
    name: 'Akkus & Ladetechnik (ADR 9)',
    nameEn: 'Batteries & Chargers (ADR Class 9)',
    description: 'Gefahrgut-zertifizierte 52V, 60V und 72V Lithium-Traktionsbatterien mit Smart-BMS und Schnellladegeräte.',
    legalStatus: 'ADR Klasse 9 Gefahrgut (UN 3480 / UN 3481) Speditionsversand',
    icon: 'BatteryCharging',
    image: '/images/cat-batteries.webp',
    subcategories: [
      '52V & 60V Unterrohr- und Rahmentaschenakkus',
      '72V High-Ampere Traktionsbatterien (Molicel / Samsung)',
      'CNC-Aluminium Schnellladegeräte (bis 15A)'
    ]
  },
  {
    slug: 'komponenten-drivetrain',
    name: 'Komponenten, Drivetrain & Cockpit',
    nameEn: 'Components, Drivetrain & Cockpit',
    description: 'Verstärkte Drehmomentstützen, CNC Gasgriffe, FOC Sinuswellen-Controller, Kettenkits und Bremsen.',
    legalStatus: 'Offroad- und Tuning-Ersatzteile',
    icon: 'Cpu',
    image: '/images/cat-components.webp',
    subcategories: [
      'CNC-gefräste Gasgriffe & HiGo Kabelbäume',
      'FOC Sinus-Controller (programmierbar)',
      'Laser-Cut Drehmomentstützen & Kettenräder'
    ]
  },
  {
    slug: 'sicherheitsausruestung',
    name: 'Sicherheitsausrüstung & Zubehör',
    nameEn: 'Safety Gear & Accessories',
    description: 'ECE 22.06 zertifizierte Helme, Downhill-Protektoren, E-Prüfzeichen LED-Scheinwerfer und Schwerlast-Heckträger.',
    legalStatus: 'ECE & TÜV-geprüfte Sicherheitsausrüstung',
    icon: 'ShieldCheck',
    image: '/images/cat-gear.webp',
    subcategories: [
      'ECE 22.06 Vollvisierhelme & Protektoren',
      'E-Prüfzeichen LED-Scheinwerfer & Blinkersätze',
      'Schwerlast Heckträger für Anhängerkupplung (bis 100kg)'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
    name: 'HYPER-DRIVE 2000W Motor & 52V Akku Bundle (inkl. CNC Gasgriff)',
    price: 995.00,
    category: 'e-bike-umbausaetze',
    categoryName: 'E-Bike Umbausätze & Motoren',
    shortDescription: 'Kraftvoller 2000W bürstenloser Hecknabenmotor gepaart mit einem kapazitätsstarken 52V Lithium-Ionen-Akkupack und direktem CNC-Gasgriff.',
    description: 'Verwandeln Sie Ihr Mountainbike in ein kompromissloses Offroad-Fahrzeug. Das Set beinhaltet einen extrem drehmomentstarken 2000W Hecknabenmotor, eingespeicht in eine verstärkte Aluminium-Hohlkammerfelge, einen 52V High-Discharge-Akku mit Smart-BMS, Sinuswellen-Controller, Farb-LCD-Display sowie verstärkte CNC Drehmomentstützen. Plug-and-Play Anschluss. Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Nicht zulässig im Geltungsbereich der StVZO.',
    badge: 'Bestseller',
    featured: true,
    isStVZO: false,
    legalNotice: 'Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Nicht zulässig im Geltungsbereich der StVZO.',
    specs: {
      power: '2000 Watt Peak / 1500W Nennleistung',
      torque: '125 Nm Drehmoment',
      battery: '52V 20Ah (1040Wh) mit 50A Smart BMS',
      topSpeed: 'ca. 55-60 km/h (Offroad ungedrosselt)',
      range: 'bis zu 75 km je nach Fahrmodus',
      weight: 'Motor 6.8 kg, Akku 5.2 kg',
      compatibility: '135mm Hinterbau-Einbaubreite (Standard MTB Schnellspanner/Schraubachse)'
    },
    images: ['/images/products/hyper-drive-2000w-bundle.webp', '/images/products/hyper-drive-2000w-motor.webp']
  },
  {
    slug: '2026-etm-rtr-sport-elektro-dirt-bike',
    name: '2026 ETM™ RTR SPORT Elektro Dirt Bike',
    price: 4190.00,
    category: 'komplette-e-motos',
    categoryName: 'Komplette E-Motos & Dirt Bikes',
    shortDescription: 'Das 2026 ETM RTR Sport bietet maximale Beschleunigung, sofortige Gasannahme und eine verstärkte Offroad-Fahrwerksgeometrie.',
    description: 'Gebaut für anspruchsvolle Singletrails und Motocross-Strecken. Ausgestattet mit einem hocheffizienten bürstenlosen Motor, einstellbarem Upside-Down-Fahrwerk, hydraulischen 4-Kolben-Bremsen und bissiger Bereifung. Keine Kupplung, kein Benzin, sofortiges Drehmoment. Reines Offroad-Sportgerät ohne StVZO-Zulassung. Gefahrguttransport gemäß ADR Klasse 9 (UN 3480 / UN 3481) per Spedition mit Hebebühne.',
    badge: 'Modell 2026',
    featured: true,
    isStVZO: false,
    legalNotice: 'Reines Offroad-Sportgerät ohne StVZO-Zulassung. Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only).',
    specs: {
      power: '8000 Watt Peak Power',
      torque: '280 Nm am Hinterrad',
      battery: '72V 35Ah High-Rate Lithium (2520Wh)',
      topSpeed: 'ca. 85 km/h',
      suspension: '200mm Fully Adjustable Inverted Fork + Fastace Linkage Shock',
      brakes: 'Hydraulische 4-Kolben Bremsanlage mit 220mm Scheiben',
      weight: '59 kg fahrfertig'
    },
    images: ['/images/products/etm-rtr-sport.webp', '/images/products/etm-rtr-side.webp']
  },
  {
    slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
    name: 'Strike Cycles SHADOW 72V / 7kW Elektro Dirt Bike',
    price: 3990.00,
    category: 'komplette-e-motos',
    categoryName: 'Komplette E-Motos & Dirt Bikes',
    shortDescription: '7000W Peak Motocross-Power mit kompromissloser 72V-Architektur für höchste Endgeschwindigkeiten und extreme Steigungen.',
    description: 'Die Strike Cycles SHADOW liefert brachiale 72V-Performance. Entwickelt mit einem ultraleichten Aluminium-Brückenrahmen, 7kW Spitzenleistung, voll einstellbarer Dämpfung und Motocross-Standardrädern. Unbändige Offroad-Performance für Trails und private Tracks. Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Gefahrguttransport gemäß ADR Klasse 9.',
    badge: 'High Output',
    featured: true,
    isStVZO: false,
    legalNotice: 'Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Nicht zulässig im Geltungsbereich der StVZO.',
    specs: {
      power: '7000 Watt Peak Output',
      torque: '250 Nm Drehmoment',
      battery: '72V 32Ah Samsung 50E Zellen (2304Wh)',
      topSpeed: 'ca. 80 km/h',
      frame: 'T6 Luftfahrt-Aluminium Brückenrahmen geschmiedet',
      weight: '56 kg Gesamtgewicht'
    },
    images: ['/images/products/strike-shadow-72v.webp', '/images/products/strike-shadow-detail.webp']
  },
  {
    slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
    name: 'ULTRA-DRIVE 3000W Motor & 72V Batterie Bundle',
    price: 1590.00,
    category: 'e-bike-umbausaetze',
    categoryName: 'E-Bike Umbausätze & Motoren',
    shortDescription: '3000W Hecknabenmotor kombiniert mit einem thermisch stabilen 72V High-Amp Akkupack, programmierbarem Controller und Zubehör.',
    description: 'Das ultimative Performance-Paket für eigene Umbauten. Beinhaltet einen robusten 3000W Hochleistungsmotor mit Temperaturüberwachung, massiven 72V Traktionsakku mit Hochstromzellen, programmierbaren 80A Sinus-Controller mit Rekuperation, Vollfarb-Display und lasergeschnittenen Drehmomentstützen. Reines Offroad-Setup. Gefahrguttransport gemäß ADR Klasse 9.',
    badge: 'Extreme Power',
    featured: true,
    isStVZO: false,
    legalNotice: 'Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Nicht zulässig im Geltungsbereich der StVZO.',
    specs: {
      power: '3000 Watt Nennleistung / 5000W Peak',
      torque: '165 Nm Drehmoment',
      battery: '72V 28Ah (2016Wh) mit 80A Dauerentladung',
      controller: '72V 80A Sinuswelle Bluetooth-programmierbar',
      rim: 'Verstärkte 19 Zoll Moto- oder 26/27.5 Zoll MTB Hohlkammerfelge'
    },
    images: ['/images/products/ultra-drive-3000w-bundle.webp', '/images/products/ultra-drive-3000w-parts.webp']
  },
  {
    slug: 'genuine-fx-cnc-praezisions-gasgriff',
    name: 'Genuine FX CNC Präzisions-Gasgriff (Passend für Sur-Ron / Talaria / DIY)',
    price: 179.00,
    category: 'komponenten-drivetrain',
    categoryName: 'Komponenten, Drivetrain & Cockpit',
    shortDescription: 'Hochpräziser CNC-Aluminium Gasdrehgriff mit kugelgelagertem Lauf für lineare, ruckfreie Gasannahme ohne Totbereich.',
    description: 'Verhindert ruckartiges Anfahren und Schläge im Antriebsstrang. Aus dem Vollen gefrästes 6061-T6 Flugzeug-Aluminium, kontaktlose Hall-Sensoren und langlebige Doppelkugellager machen diesen Griff zum Maßstab für Sur-Ron, Talaria und leistungsstarke Umbauten. Plug-and-Play mit wasserdichtem HiGo-Steckverbinder.',
    badge: 'Sofort lieferbar',
    featured: false,
    isStVZO: false,
    legalNotice: 'Tuning- und Rennsport-Komponente für E-Motos und Offroad-Bikes.',
    specs: {
      material: 'CNC-gefrästes 6061-T6 Aluminium, eloxiert',
      bearing: 'Zweifach abgedichtete Edelstahl-Kugellager',
      connector: 'HiGo 3-Pin wasserdicht vergossen',
      compatibility: '22mm Standardlenker (Sur-Ron Light Bee, Talaria Sting, E-Ride, DIY)'
    },
    images: ['/images/products/cnc-throttle-grip.webp']
  },
  {
    slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
    name: '250W Street-Legal Pedelec Umbausatz (StVZO & EN 15194 Konform)',
    price: 689.00,
    category: 'e-bike-umbausaetze',
    categoryName: 'E-Bike Umbausätze & Motoren',
    shortDescription: '100% legaler 250W Pedelec-Umbausatz für den Straßenverkehr nach StVZO mit Tretsensor und automatischer 25 km/h Abschaltung.',
    description: 'Rüsten Sie Ihr Fahrrad vollkommen gesetzeskonform zum Pedelec um. Entspricht der europäischen Norm EN 15194:2017+A1:2024 und den Vorgaben des § 63a StVZO. Nenndauerleistung 250W, Motorunterstützung nur beim Treten bis max. 25 km/h. Führerschein-, helm- und versicherungsfrei in ganz Deutschland und der EU fahrbar. Inklusive 36V Rahmenakku, Drehmoment-Sensor-Tretlager und StVZO-Prüfbescheinigung.',
    badge: '100% Straßenzulassung (StVZO)',
    featured: true,
    isStVZO: true,
    legalNotice: 'Pedelec-konform nach EN 15194:2017+A1:2024 (250W, 25 km/h). Legal im Geltungsbereich der StVZO auf allen öffentlichen Straßen und Radwegen fahrbar.',
    specs: {
      power: '250 Watt Nenndauerleistung (EN 15194 zertifiziert)',
      torque: '55 Nm Drehmoment',
      cutoffSpeed: '25 km/h (gesetzliche Abschaltung)',
      battery: '36V 14Ah (504Wh) Marken-Lithiumzellen mit Schlüsselverriegelung',
      sensor: 'Präziser Tretlager-Drehmomentsensor (kein unzulässiges Daumengas)',
      display: 'Kompaktes OLED-Display mit Schiebehilfe bis 6 km/h'
    },
    images: ['/images/products/pedelec-250w-kit.webp']
  },
  {
    slug: '72v-42ah-traktionsakku-smart-bms-adr9',
    name: 'APEX High-Rate 72V 42Ah Traktionsakku (Smart Bluetooth BMS, 3024Wh)',
    price: 1390.00,
    category: 'akkus-ladetechnik',
    categoryName: 'Akkus & Ladetechnik',
    shortDescription: 'Hochstromfeste 72V Traktionsbatterie mit Molicel P42A Zellen und 150A Smart BMS für maximale Dauerbelastung.',
    description: 'Speziell konzipiert für anspruchsvolle 72V E-Motos und Renneinsätze. Ausgestattet mit Molicel INR-21700-P42A Hochstromzellen, reinem Nickelblech-Laserschweißverfahren und integriertem Bluetooth Smart BMS zur Überwachung jeder Einzelzelle per iOS/Android App. Gefahrguttransport gemäß ADR Klasse 9 (UN 3480) im geprüften Stahl-Verbundgehäuse.',
    badge: 'Molicel High-Amp',
    featured: false,
    isStVZO: false,
    legalNotice: 'Gefahrguttransport gemäß ADR Klasse 9 (UN 3480). Nur für den Offroad- und Renneinsatz.',
    specs: {
      voltage: '72V Nennspannung (84V Ladeschluss)',
      capacity: '42Ah (3024 Wattstunden)',
      cells: 'Molicel INR-21700 P42A Grade A',
      bms: '150A Dauer / 300A Peak Bluetooth Smart BMS',
      weight: '14.8 kg'
    },
    images: ['/images/products/battery-72v-42ah.webp']
  },
  {
    slug: 'torp-tc500-controller-sur-ron-talaria',
    name: 'Torp TC500 Plug-and-Play Controller (bis 25kW Peak)',
    price: 799.00,
    category: 'akkus-ladetechnik',
    categoryName: 'Akkus & Ladetechnik',
    shortDescription: 'Der führende FOC Sinuswellen-Controller für Sur-Ron Light Bee und Talaria Sting mit original Display-Unterstützung.',
    description: 'Modernste Field-Oriented Control (FOC) Technologie. Ermöglicht extreme Leistungssteigerungen bei niedriger Motortemperatur und samtweicher Gasannahme. Erkennt automatisch Akkutyp und Motortemperatur. Smartphone-App zur Live-Abstimmung von Motorbremse, Leistungskurven und Rekuperation.',
    badge: 'Plug & Play',
    featured: false,
    isStVZO: false,
    legalNotice: 'Tuning-Komponente für Rennstrecken- und Offroad-Nutzung.',
    specs: {
      power: 'bis zu 25 kW Peak Output (mit 72V Batterie)',
      voltage: '48V – 84V Nennspannung',
      current: 'bis zu 500A Phasenstrom',
      connectivity: 'Bluetooth 5.0 mit Echtzeit-Telemetrie-App',
      weight: '1.1 kg'
    },
    images: ['/images/products/torp-tc500-controller.webp']
  }
];

export const POSTS: Post[] = [
  {
    slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
    title: 'StVZO, Pedelec & E-Moto: Rechtliche Fakten für Deutschland & EU 2026',
    excerpt: 'Wann ist ein E-Bike legal? Alles zu EN 15194, 250W Begrenzung, Daumengas-Verbot, L1e-B Typgenehmigungen und Fahren auf Privatgelände.',
    category: 'Rechtsleitfaden',
    date: '2026-02-15',
    readTime: '6 Min. Lesezeit',
    image: '/images/blog/blog-stvzo.webp',
    author: 'Dipl.-Ing. M. Schneider (Prüftechnik)',
    content: `Elektromobilität auf zwei Rädern erlebt eine beispiellose Dynamik. Gleichzeitig herrscht im Markt erhebliche Verunsicherung bezüglich der rechtlichen Rahmenbedingungen im Geltungsbereich der Straßenverkehrs-Zulassungs-Ordnung (StVZO), des Straßenverkehrsgesetzes (StVG) sowie der europäischen Fahrzeugklassenverordnung (EU) Nr. 168/2013.\n\n### Die drei rechtlichen Säulen im Überblick\n\n1. **Pedelec nach § 63a Abs. 2 StVZO & EN 15194**:\n   Ein Fahrrad mit Trethilfe, dessen Motor maximal 250 Watt Nenndauerleistung erbringt und die Unterstützung beim Erreichen von 25 km/h oder bei Beendigung des Tretens abbricht. Gilt verkehrsrechtlich als Fahrrad: Keine Helmpflicht (wird dringend empfohlen), kein Kennzeichen, keine Versicherungspflicht, freie Radwegbenutzung.\n\n2. **S-Pedelec & E-Motos mit Straßenzulassung (L1e-B)**:\n   Fahrzeuge bis 45 km/h oder über 250W mit EU-Typgenehmigung (CoC). Versicherungskennzeichen, Führerschein (mind. Klasse AM) und Helmpflicht sind zwingend erforderlich. Radwege innerorts dürfen nicht befahren werden.\n\n3. **Reine Offroad-Sportgeräte (Sur-Ron, Talaria, ETM, High-Power DIY-Kits)**:\n   Leistungen von 1000W bis 15kW ohne CoC-Papiere. Diese Fahrzeuge dürfen im Geltungsbereich der StVZO NICHT im öffentlichen Straßenraum, auf Radwegen oder in öffentlichen Forsten betrieben werden. Der Betrieb ist ausschließlich auf abgesperrtem Privatgrundstück oder ausgewiesenen Motorsportstrecken gestattet.`
  },
  {
    slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
    title: 'Lithium-Akkus & Gefahrgutlogistik nach ADR Klasse 9 (UN 3480)',
    excerpt: 'Warum Traktionsbatterien über 100Wh strengen Gefahrgut-Vorschriften unterliegen und wie wir zertifizierten Speditionsversand sicherstellen.',
    category: 'Gefahrgut & Technik',
    date: '2026-01-28',
    readTime: '5 Min. Lesezeit',
    image: '/images/blog/blog-battery-adr.webp',
    author: 'Fachkraft für Gefahrgutlogistik (IHK)',
    content: `Traktionsbatterien moderner E-Motos speichern zwischen 1.000 und über 3.000 Wattstunden chemischer Energie. Gesetzlich gelten Lithium-Ionen-Zellen ab 100Wh Nennenergie gemäß dem Europäischen Übereinkommen über die internationale Beförderung gefährlicher Güter auf der Straße (ADR) ausnahmslos als Gefahrgut der Klasse 9 (UN 3480 für reine Batterien, UN 3481 für Batterien in Ausrüstungen).\n\n### Verpackung und Kennzeichnung\n\nJede unserer Batterielieferungen erfolgt in UN-zertifizierten 4G-Kartonagen mit stoßabsorbierendem, nicht brennbarem Innenfutter (Vermiculit/Spezialschaum). Alle Sendungen tragen den standardisierten Gefahrgutaufkleber Klasse 9A mit UN-Nummer sowie eine offizielle Speditionsbegleiterklärung.`
  },
  {
    slug: 'vergleich-pedelec-s-pedelec-e-moto-offroad',
    title: 'Vergleich 2026: Pedelec vs. S-Pedelec vs. High-Torque E-Moto',
    excerpt: 'Leistung, Rechtslage, Kosten und Einsatzzwecke: Der neutrale Leitfaden zur Wahl des richtigen Antriebssystems für Alltag oder Rennstrecke.',
    category: 'Kaufberatung',
    date: '2026-01-10',
    readTime: '8 Min. Lesezeit',
    image: '/images/blog/blog-comparison.webp',
    author: 'E-MOTO Europe Redaktion',
    content: `Die Wahl des passenden Zweirads hängt vor allem vom geplanten Einsatzort ab: Wer täglich zur Arbeit pendeln möchte, benötigt ein gesetzeskonformes Pedelec nach EN 15194. Wer hingegen auf abgesperrtem Terrain maximale Beschleunigung, 72V Drehmomentspitzen und echtes Motocross-Feeling sucht, greift zu einem High-Torque E-Moto.`
  }
];

export const FAQ: FAQItem[] = [
  {
    question: 'Sind Ihre E-Motos und Hochleistungs-Umbausätze für den öffentlichen Straßenverkehr (StVZO) zugelassen?',
    answer: 'Nein, E-Motos und Umbausätze mit mehr als 250 Watt oder Geschwindigkeiten über 25 km/h sind reine Offroad-Sportgeräte ohne Straßenzulassung. Der Betrieb ist ausschließlich auf abgesperrtem Privatgelände oder speziellen Rennstrecken gestattet. Einzige Ausnahme ist unser 250W Pedelec-Kit nach EN 15194, das zu 100% StVZO-konform im Straßenverkehr gefahren werden darf.'
  },
  {
    question: 'Warum bieten Sie weder PayPal noch direkte Kreditkarteneingabe an?',
    answer: 'High-Power E-Motos, Lithium-Traktionsbatterien nach ADR Klasse 9 und Motorsportkomponenten werden von Standard-US-Konsumenten-Gateways häufig wegen regulatorischer Pauschalklauseln blockiert. Wir setzen daher auf hochgradig sichere europäische Banküberweisung (SEPA Vorkasse / Instant), verifizierte Zahlarten wie Klarna, iDEAL, BLIK sowie Kryptowährungen mit 5% Direktrabatt.'
  },
  {
    question: 'Wie funktioniert der 5% Krypto-Rabatt (Bitcoin & USDT)?',
    answer: 'Wählen Sie im Bestellformular Krypto als Zahlungsmethode. Der Rabatt von 5% wird im Warenkorb und in der Proforma-Rechnung automatisch in Abzug gebracht. Nach Auftragserfassung erhalten Sie unsere offizielle Wallet-Adresse sowie den tagesaktuellen Wechselkurs zur unkomplizierten Überweisung.'
  },
  {
    question: 'Wie erfolgt der Versand von 72V Traktionsbatterien und Komplettfahrzeugen?',
    answer: 'Traktionsakkus über 100Wh werden gemäß internationalem Gefahrgutrecht ADR Klasse 9 (UN 3480/3481) in UN-geprüften Spezialverpackungen per Spedition versendet. Bei Komplettfahrzeugen erfolgt die Lieferung auf Palette mit Ladebordwand und vorheriger telefonischer Avisierung durch die Spedition.'
  },
  {
    question: 'Gibt es eine Garantie und wie sieht die Ersatzteilversorgung aus?',
    answer: 'Alle Artikel unterliegen der gesetzlichen zweijährigen Gewährleistung nach deutschem BGB. In unserem Werkstattstützpunkt in Freising bei München lagern wir alle wesentlichen Verschleißteile wie Sinus-Controller, Smart-BMS, HiGo-Kabelbäume, Hall-Sensoren und Display-Einheiten für rasche Reparaturen.'
  },
  {
    question: 'Kann ich als Händler oder Werkstatt zu Großhandelskonditionen (B2B) bestellen?',
    answer: 'Ja. Gewerbliche Zweiradwerkstätten, Fachhändler und Rennsport-Teams mit verifizierter USt-IdNr. können über unser B2B-Großhandelsportal gestaffelte Rabatte, Direktbelieferung per Spedition sowie Priority-Teileversorgung anfragen. Nach Prüfung der Gewerbeanmeldung schalten wir Ihren Händler-Zugang innerhalb von 24 Stunden frei.'
  }
];

export const COMPLIANCE = {
  bannedTerms: [
    'straßenzulassung überall',
    'legal auf der straße',
    'kein führerschein nötig für 72v',
    'polizei merkt es nicht',
    'ohne drosselung legal'
  ],
  requiredFramings: [
    'Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only)',
    'Im Geltungsbereich der StVZO nicht zulässig',
    'ADR Klasse 9 Gefahrguttransport für Traktionsakkus'
  ],
  prohibitedClaims: [
    'Versprechen von Straßenzulassung für Motoren >250W ohne CoC',
    'Gefahrgut-Umgehung beim Akkuversand'
  ],
  ageGate: true,
  ageMinimum: 16,
  gdpr: true,
  disclaimer: 'WICHTIGER RECHTS- UND SICHERHEITSHINWEIS (DEUTSCHLAND / STVZO & EU): Elektrische Dirt Bikes, High-Power E-Motos und Umbausätze mit mehr als 250 Watt Nenndauerleistung, Unterstützung über 25 km/h oder Daumengas/Drehgas ohne zwingende Tretunterstützung sind reine Sportgeräte. Sie sind im Geltungsbereich der StVZO NICHT für den öffentlichen Straßenverkehr, Fahrradwege oder den öffentlichen Forstbetrieb zugelassen, es sei denn, sie verfügen ausdrücklich über eine EG-Übereinstimmungsbescheinigung (CoC) als L1e-B Kleinkraftrad. Reine Offroad-Modelle dürfen ausschließlich auf abgesperrtem Privatgelände oder speziellen Rennstrecken betrieben werden. Nur Umbausätze mit maximal 250W Nenndauerleistung und Tretunterstützung bis 25 km/h entsprechen der europäischen Norm EN 15194 und sind führerschein-, zulassungs- und helmpflichtfrei im Straßenverkehr legal fahrbar.'
};
