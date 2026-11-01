import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const messagesDir = path.join(rootDir, 'src', 'messages');

if (!fs.existsSync(messagesDir)) fs.mkdirSync(messagesDir, { recursive: true });

// Base German Dictionary
const de = {
  nav: {
    shop: "Shop & Gesamtkatalog",
    motos: "E-Motos & Dirt Bikes",
    kits: "E-Bike Umbausätze",
    batteries: "72V Akkus & Ladetechnik",
    legalGuides: "Rechtsratgeber & Magazin",
    about: "Über uns & Werkstatt",
    faq: "Häufige Fragen (FAQ)",
    contact: "Kontakt & Meisterwerkstatt",
    b2b: "B2B Händlerportal",
    compare: "Modellvergleich",
    subsidies: "Förderrechner",
    tracking: "Sendungsverfolgung",
    cart: "Warenkorb",
    search: "Modell, Motor oder Volt suchen...",
    lang: "Sprache",
    allCategories: "Alle Produkte & Umbausätze"
  },
  announcements: {
    cryptoDiscount: "5% Sofortrabatt bei Zahlung mit Krypto (Bitcoin & USDT)",
    freeShipping: "Versandkostenfrei ab 199 € für Zubehör & Komponenten innerhalb DE",
    adrSafety: "Gefahrgut-Zertifiziert: Gesetzeskonformer ADR Klasse 9 Versand für Traktionsakkus",
    whatsappAdvice: "Technische Werkstattberatung per WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Werkstatt-Concierge",
    status: "Online · Werkstatt München / Freising",
    subtitle: "Persönliche Beratung durch unsere Meisterwerkstatt",
    whatsappFastLane: "WhatsApp Fast-Lane",
    phoneDirect: "Zentrale München anrufen",
    emailTickets: "E-Mail Ticket eröffnen",
    faqDirect: "Häufige Fragen öffnen",
    availabilityNotice: "Mo–Fr 09:00–18:00 Uhr MEZ · Ingenieur antwortet in < 2 Std.",
    close: "Chat schließen",
    open: "Werkstatt-Chat"
  },
  hero: {
    badge: "DEUTSCHES INGENIEURSWERK & ZERTIFIZIERTE LOGISTIK",
    h1: "HIGH-PERFORMANCE",
    h1Highlight: "E-MOTOS & DRIVETRAINS",
    subtitle: "Europas führende Plattform für Hochvolt-Antriebstechnik, zertifizierte 72V Traktionsbatterien nach ADR Gefahrgutklasse 9 (UN 3480) und 100% StVZO-konforme 250W Pedelec-Systeme.",
    ctaShop: "Gesamtkatalog entdecken",
    ctaKits: "Umbausätze 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Zentraler Werkstatt- und Entwicklungsstandort in Freising bei München. Eigene Prüfstandsdaten, HiGo-Industrie-Kabelbäume und gesetzeskonformer Speditionsversand in alle EU-Mitgliedstaaten.",
    fastDispatch: "Lagernd in Deutschland — Express- & Speditionsversand",
    adrSafety: "ADR Klasse 9 Gefahrgut-zertifiziert für sichere Akku-Zustellung",
    telemetry: {
      voltageLabel: "SPANNUNG",
      voltageValue: "72V DC",
      voltageSub: "High-Rate Bus",
      powerLabel: "PEAK LEISTUNG",
      powerValue: "12 kW",
      powerSub: "Dyno Validiert",
      torqueLabel: "DREHMOMENT",
      torqueValue: "280 Nm",
      torqueSub: "Sofort am Rad",
      speedLabel: "SPEED",
      speedValue: "85 km/h",
      speedSub: "Off-Road Only"
    }
  },
  trust: {
    engineering: "Deutsches Ingenieurswesen",
    engineeringSub: "Transparente Prüfstandsdaten, HiGo-Stecker & CNC-Drehmomentstützen",
    adrLogistics: "ADR Klasse 9 Gefahrgut",
    adrLogisticsSub: "Zertifizierter Speditionsversand für 52V & 72V Traktionsakkus",
    plugAndPlay: "Rechtliche Klarheit",
    plugAndPlaySub: "Strikte Trennung zwischen 250W StVZO Pedelecs und Offroad-Sportgeräten",
    payment: "Sichere Bezahlung",
    paymentSub: "SEPA Vorkasse, Klarna, iDEAL, BLIK & 5% Krypto-Rabatt (Kein PayPal)"
  },
  bento: {
    badge: "INGENIEURSKUNST & SICHERHEIT",
    title: "Zertifizierte Hochvolt-Ingenieursmatrix",
    subtitle: "Warum Europas anspruchsvollste Fahrer und Werkstätten auf E-MOTO EUROPE Antriebe vertrauen.",
    card1Badge: "MESSSTAND-VALIDIERT",
    card1Title: "Reale Spitzenleistungen statt Scheinangaben",
    card1Text: "Jedes System wird auf unserem stationären Motorprüfstand in Freising dynamisch belastet. 12kW Spitzenleistung bedeuten echte, thermisch überwachte Phasenströme bis 500A.",
    card2Badge: "SICHERHEITSNORM",
    card2Title: "Strikte Trennung: StVZO vs. Offroad",
    card2Text: "Keine faulen Kompromisse: Unser 250W Pedelec-Kit erfüllt strikt EN 15194 (zulassungs- und helmpflichtfrei). Offroad-Kits bis 5000W sind klar als Sportgeräte deklariert.",
    card3Badge: "GEFAHRGUT ADR 9",
    card3Title: "Gefahrgut-Transportzertifizierung",
    card3Text: "Traktionsakkus über 100Wh sind Gefahrgut der Klasse 9 (UN 3480/3481). Wir versenden ausschließlich in 4G-zertifizierten Spezialkartons mit Hebebühnen-Spedition.",
    card4Badge: "PAN-EUROPA SUPPORT",
    card4Title: "Zentraldepot & Schnelle Ersatzteilversorgung",
    card4Text: "Alle Verschleißteile, HiGo-Kabelbäume, Smart-BMS und FOC-Controller lagern im Münchener Zentraldepot. Versand in die gesamte EU innerhalb von 24–48 Stunden."
  },
  categoriesSection: {
    badge: "PRODUKTSPEKTRUM",
    title: "Kategorien & Modellreihen",
    subtitle: "Vom 100% StVZO-konformen Pedelec-Umbau bis zum kompromisslosen 72V Renngerät.",
    viewCategory: "Kategorie ansehen",
    productsCount: "Artikel verfügbar"
  },
  bestsellersSection: {
    badge: "WERKSTATT-EMPFEHLUNGEN",
    title: "Aktuelle Bestseller aus unserer Werkstatt",
    subtitle: "Vorkonfigurierte Hochleistungs-Aggregate mit bester Kundenbewertung und sofortiger Verfügbarkeit.",
    viewDetails: "Details & Konfiguration",
    addToCart: "In den Warenkorb",
    cryptoPrice: "Krypto-Preis (-5%)",
    viewAll: "Gesamten Katalog ansehen",
    stvzoBadge: "100% StVZO",
    offroadBadge: "Offroad Sport"
  },
  aboutSection: {
    badge: "INGENIEURS-STANDORT DEUTSCHLAND",
    title: "Über E-MOTO EUROPE",
    subtitle: "Europas Fachanbieter für High-Performance E-Motos, Hochvolt-Umbausätze (1000W–5000W), 72V Traktionsbatterien nach ADR Klasse 9 sowie 100% StVZO-konforme Pedelec-Systeme.",
    p1: "Die Begeisterung für elektrisch angetriebene Zweiräder wächst rasant. Doch mit der Zunahme von unkontrollierten Importen entstanden erhebliche Risiken: thermisch instabile Batterien, unterdimensionierte Ausfallenden an Fahrradrahmen und irreführende Angaben zur StVZO.",
    p2: "E-MOTO EUROPE wurde in Freising bei München gegründet, um Hochvolt-Antriebstechnik mit kompromissloser mechanischer Sicherheit, transparenter Rechtsaufklärung und zertifizierter Gefahrgutlogistik zu verbinden.",
    v1Title: "Eigene Prüfstandsdaten",
    v1Text: "Echte Dauer- und Spitzenleistungen, thermische Überwachung und FOC-Sinusabstimmung.",
    v2Title: "ADR Klasse 9 Gefahrgut",
    v2Text: "Zertifizierter Speditionsversand für Akkus > 100Wh mit Hebebühne und Avisierung.",
    v3Title: "100% StVZO vs. Offroad",
    v3Text: "Vollkommene Rechtssicherheit durch strikte Trennung von Pedelec und Sportgerät.",
    v4Title: "Ersatzteilgarantie",
    v4Text: "Controller, BMS, Displays und HiGo-Kabelbäume dauerhaft ab München lieferbar.",
    learnMoreBtn: "Mehr über unsere Werkstatt erfahren"
  },
  legalSection: {
    title: "Rechtliche Beratung & StVZO-Transparenz",
    text: "Wir stehen für ehrliche Aufklärung: 250W Pedelecs nach EN 15194 sind auf allen öffentlichen Straßen und Radwegen führerschein-, zulassungs- und helmbefreit fahrbar. Hochvolt-Aggregate (1000W–5000W, 72V) sind reine Offroad-Sportgeräte und ausschließlich auf abgesperrtem Privatgelände oder speziellen Rennstrecken gestattet.",
    readGuideBtn: "Vollständigen Rechtsleitfaden lesen"
  },
  legalBanner: {
    title: "Wichtiger Hinweis zur Rechtslage in Deutschland & der EU",
    text: "Fahrzeuge und Umbausätze mit mehr als 250W Nenndauerleistung oder Unterstützung über 25 km/h sind reine Offroad-Sportgeräte ohne StVZO-Zulassung (Nutzung nur auf Privatgelände/Rennstrecken). Unser 250W Pedelec-Kit entspricht EN 15194 und ist zu 100% straßenzugelassen.",
    learnMore: "Rechtsleitfaden lesen",
    offroadWarning: "Reines Offroad-Sportgerät (Nicht im Geltungsbereich der StVZO)",
    pedelecCertified: "100% StVZO-konform nach EN 15194:2017+A1:2024"
  },
  shopPage: {
    breadcrumb: "Shop",
    title: "E-Motos, Umbausätze & 72V Komponenten",
    subtitle: "Wählen Sie zwischen 100% StVZO-konformen Pedelec-Umbausätzen (250W, EN 15194) für den Straßenverkehr und kompromisslosen Offroad-Sportgeräten (1000W–5000W, 72V) für Privatgelände.",
    filterAll: "Alle Artikel",
    filterStVZOAll: "Alle Zulassungsarten",
    filterStVZOOnly: "100% StVZO",
    filterOffroadOnly: "Offroad Sport",
    sortBy: "Sortierung",
    sortFeatured: "Empfohlen / Bestseller",
    sortPriceAsc: "Preis: aufsteigend",
    sortPriceDesc: "Preis: absteigend",
    inStock: "Sofort ab Lager Freising",
    adrNotice: "ADR Klasse 9 Gefahrgut",
    viewProduct: "Details & Spezifikation",
    addToCart: "In den Warenkorb",
    addedToCart: "Im Warenkorb",
    details: "Details",
    cryptoPrice: "Krypto-Preis"
  },
  product: {
    specs: "Technische Spezifikationen",
    addToCart: "In den Warenkorb",
    buyNow: "Direkt zur Kasse",
    inStock: "Auf Lager — Versandbereit in 24–48h",
    dispatchNotice: "Versand aus deutschem Zentrallager (Freising/München)",
    warranty: "2 Jahre gesetzliche Gewährleistung nach BGB",
    legalNotice: "Rechtlicher Status & StVZO-Hinweis",
    cryptoDiscountBadge: "5% Rabatt bei Krypto-Zahlung",
    relatedProducts: "Passende Komponenten & Zubehör",
    quantity: "Menge",
    vatNotice: "inkl. 19% MwSt., zzgl. Versand"
  },
  aboutPage: {
    breadcrumb: "Über uns",
    badge: "INGENIEURS-STANDORT DEUTSCHLAND",
    title: "Über E-MOTO EUROPE",
    subtitle: "Fachanbieter für High-Performance E-Motos, renntaugliche E-Bike Umbausätze (1000W–5000W), 72V Hochstrom-Lithiumakkus und 100% StVZO-konforme 250W Pedelec-Systeme.",
    storyTitle: "1. Unsere Entstehungsgeschichte & Philosophie",
    storyP1: "Die Begeisterung für elektrisch angetriebene Zweiräder wächst rasant. Doch mit der Zunahme von unkontrollierten Importen entstanden erhebliche Risiken: thermisch instabile Batterien, unterdimensionierte Ausfallenden an Fahrradrahmen und irreführende Angaben zur StVZO.",
    storyP2: "E-MOTO EUROPE wurde in Freising bei München gegründet, um High-Power Elektroantriebe mit kompromissloser Sicherheit, transparenter Rechtsaufklärung und zertifizierter Gefahrgut-Logistik zu verbinden.",
    legalTitle: "2. Deutsches Recht & Klare Trennung: StVZO vs. Offroad",
    legalP1: "Wir stehen für absolute Rechtssicherheit. In der Branche wird häufig versucht, hochmotorisierte Fahrzeuge fälschlicherweise als Fahrrad anzupreisen. Wir erteilen solchen Täuschungen eine klare Absage:",
    legalPedelecTitle: "100% StVZO-konforme Pedelecs",
    legalPedelecText: "Unser 250W Street-Legal Umbausatz erfüllt strikt die europäische Sicherheitsnorm EN 15194:2017+A1:2024 sowie § 63a StVZO. Er unterstützt bis 25 km/h und ist ohne Helm, Führerschein oder Versicherung legal fahrbar.",
    legalOffroadTitle: "High-Power E-Motos & 1000W–5000W Umbausätze",
    legalOffroadText: "Diese Aggregate sind reine Offroad-Sportgeräte für Privatgrundstücke, Motocross-Strecken und Hard-Enduro Parks. Sie sind im Geltungsbereich der StVZO nicht zugelassen.",
    adrTitle: "3. Zertifizierte Gefahrgut-Logistik nach ADR Klasse 9",
    adrText: "Traktionsbatterien über 100Wh sind Gefahrgut der Klasse 9 (UN 3480/3481). Wir versenden konsequent in zertifizierten 4G-Gefahrgutkartons, mit Vermiculite-Dämpfung und geschulten Speditionen (Dachser, Schenker) mit Hebebühne.",
    diffTitle: "4. Unsere 4 Differenzierungsmerkmale",
    milestonesTitle: "5. Historische Meilensteine"
  },
  contactPage: {
    breadcrumb: "Kontakt",
    badge: "FACHBERATUNG & WERKSTATT MÜNCHEN",
    title: "Kontakt & Meisterwerkstatt",
    subtitle: "Haben Sie technische Fragen zu Motoren, Akku-Kompatibilität, StVZO-Vorschriften oder einer individuellen Montage? Unsere Prüfingenieure in Freising bei München beraten Sie gerne.",
    formTitle: "Nachricht an die technische Werkstatt senden",
    nameLabel: "Vollständiger Name",
    emailLabel: "E-Mail-Adresse",
    phoneLabel: "Telefonnummer (für Rückruf)",
    subjectLabel: "Thema / Betreff",
    subjectGeneral: "Allgemeine technische Beratung",
    subjectTechnical: "Umbausatz & Motoren-Kompatibilität",
    subjectOrder: "Frage zu laufender Bestellung & Bezahlung",
    subjectB2B: "B2B Händler- & Werkstattanfrage",
    messageLabel: "Ihre Nachricht an unsere Werkstatt",
    submitBtn: "Technische Anfrage absenden",
    submitting: "Wird übermittelt...",
    guaranteeTitle: "Garantierte Rückmeldezeit < 2 Stunden",
    guaranteeText: "An Werktagen (Mo–Fr 09:00–18:00 MEZ) antwortet Ihnen ein spezialisierter Prüfingenieur unserer Münchener Werkstatt innerhalb von maximal zwei Stunden.",
    directPhone: "Direktkontakt Werkstatt",
    directWhatsapp: "WhatsApp Fachberatung",
    directEmail: "E-Mail Ticketsystem",
    directAddress: "Werkstatt & Prüfstand Freising"
  },
  faqPage: {
    breadcrumb: "FAQ",
    title: "Häufige Fragen & Technische Beratung",
    subtitle: "Transparente und fundierte Antworten unserer Meisterwerkstatt zu Zulassungsbestimmungen nach StVZO, ADR-Gefahrgutversand, Bezahlung und Garantie.",
    moreQuestions: "Haben Sie eine spezielle technische Frage?",
    askWhatsapp: "Per WhatsApp fragen",
    askEmail: "E-Mail Ticket eröffnen"
  },
  comparePage: {
    breadcrumb: "Modellvergleich",
    title: "Modell- & Motorenvergleich",
    subtitle: "Direkter technischer Vergleich von Spitzenleistung, Drehmoment, StVZO-Zulassung und Akku-Architektur.",
    colModel: "Modell / System",
    colCategory: "Kategorie",
    colPower: "Spitzenleistung",
    colTorque: "Drehmoment",
    colBattery: "Traktionsbatterie",
    colSpeed: "Höchstgeschwindigkeit",
    colStVZO: "StVZO Zulassung",
    colPrice: "Preis (inkl. MwSt.)",
    colAction: "Aktion",
    yesStVZO: "100% StVZO",
    noStVZO: "Offroad Sport"
  },
  subsidiesPage: {
    breadcrumb: "Förderrechner",
    title: "E-Mobilitäts-Förderrechner Europa",
    subtitle: "Ermitteln Sie potenzielle Förderprogramme, Umweltboni und Steuervergünstigungen für gewerbliche und private E-Zweiräder in der EU.",
    selectCountry: "Wählen Sie Ihr Land",
    userType: "Nutzungsart",
    commercialUser: "Gewerbliche Nutzung (B2B / Flotte)",
    privateUser: "Private Nutzung (Pendler / Freizeit)",
    potentialSubsidy: "Geschätzte maximale Fördersumme:",
    subsidyNote: "Förderungen variieren je nach Bundesland, Kanton und Kommune. Eine offizielle Bewilligung der zuständigen Behörde vor Kaufabschluss ist erforderlich."
  },
  trackingPage: {
    breadcrumb: "Sendungsverfolgung",
    title: "Sendungs- & Speditionsverfolgung",
    subtitle: "Verfolgen Sie Ihren Gefahrgut-Speditionsversand (ADR Klasse 9) oder Ihr DHL Express Paket in Echtzeit.",
    trackingInputPlaceholder: "Auftragsnummer oder Tracking-Code (z.B. EMO-849201-EU)...",
    trackBtn: "Sendungsstatus abfragen",
    carrierNotice: "Lithium-Traktionsakkus und E-Motos werden per Spedition (Dachser / DB Schenker) mit Hebebühne und telefonischer Avisierung zugestellt."
  },
  magazine: {
    breadcrumb: "Magazin & Recht",
    title: "Technik, Recht & Gefahrgut-Leitfäden",
    subtitle: "Fundiertes Wissen unserer Münchener Meisterwerkstatt zu Zulassungsbestimmungen nach StVZO, Gefahrgutbeförderung (ADR Klasse 9) und Tuning.",
    readGuide: "Leitfaden lesen",
    publishedOn: "Veröffentlicht am",
    readTime: "Lesezeit:",
    workshopEditorial: "Werkstattredaktion",
    summary: "Zusammenfassung:",
    disclaimerTitle: "Gesetzlicher Hinweis von E-MOTO EUROPE",
    disclaimerText: "Alle Angaben erfolgen nach bestem Wissen auf Basis der StVZO, der EN 15194:2017+A1:2024 sowie der Vorschriften des ADR.",
    relatedProducts: "Passende Systeme & Komponenten aus unserer Werkstatt",
    backToOverview: "Zurück zur Magazin-Übersicht"
  },
  b2b: {
    title: "B2B Händler- & Werkstattportal",
    subtitle: "Konditionen für Zweiradwerkstätten, Händler und Rennteams im europäischen Binnenmarkt.",
    tier1: "Stufe 1 (ab 3 Einheiten): 15% Händlermarge",
    tier2: "Stufe 2 (ab 10 Einheiten): 25% Händlermarge + Palettenpriorität",
    tier3: "Stufe 3 (OEM / Rahmenpartner): Bis zu 35% Rabatt + White-Label Optionen",
    formTitle: "Händler-Registrierung anfordern",
    companyLabel: "Firmenname / Werkstatt",
    vatLabel: "Umsatzsteuer-Identifikationsnummer (USt-IdNr.)",
    contactLabel: "Ansprechpartner",
    emailLabel: "Geschäftliche E-Mail",
    phoneLabel: "Telefonnummer",
    volumeLabel: "Geschätzter Jahresbedarf an Motoren/Akkus",
    submitBtn: "Händler-Konditionen anfordern"
  },
  cart: {
    title: "Ihr Warenkorb",
    empty: "Ihr Warenkorb ist derzeit leer",
    emptySub: "Entdecken Sie unsere 2026 E-Motos, Umbausätze und Akkus.",
    startShopping: "Jetzt einkaufen",
    subtotal: "Zwischensumme",
    cryptoDiscount: "5% Krypto-Rabatt (BTC / USDT)",
    shipping: "Versand",
    freeShippingNotice: "Versandkostenfrei ab 199 € (ausgenommen Speditionsversand für Komplettbikes/Gefahrgut)",
    total: "Gesamtsumme",
    checkoutBtn: "Zur Kasse / Bestellung vorbereiten",
    vatNotice: "Alle Preise inkl. 19% MwSt., zzgl. Versand",
    paymentMethodsTitle: "Zahlungsmethoden (Kein PayPal, keine direkte Kreditkarteneingabe):",
    ageNotice: "Mit der Bestellung bestätigen Sie, dass Sie mindestens 16 Jahre alt sind.",
    orderSuccessTitle: "Vielen Dank für Ihre Bestellung!"
  },
  checkout: {
    step1: "Kontaktdaten",
    step2: "Lieferadresse (EU / DE / CH)",
    step3: "Zahlungsart & Bestätigung",
    name: "Vollständiger Name",
    email: "E-Mail-Adresse",
    phone: "Telefonnummer (für Speditionsavisierung)",
    address: "Straße und Hausnummer",
    city: "Stadt",
    zip: "Postleitzahl",
    country: "Land",
    notes: "Anmerkungen zur Montage / Rahmen",
    confirmAge: "Ich bestätige, dass ich mindestens 16 Jahre alt bin und die StVZO-Hinweise zur Kenntnis genommen habe.",
    placeOrder: "Kaufverbindlich anfragen / Bestellentwurf absenden",
    submitting: "Wird übermittelt..."
  },
  confirmation: {
    orderTitle: "Auftragserfassung & Zahlungsanweisung",
    orderSubtitle: "Ihr Bestellentwurf wurde erfolgreich im System registriert.",
    orderRef: "Auftragsnummer",
    thankYouNotice: "Eine Proforma-Rechnung und die Zahlungsanweisung wurden hinterlegt.",
    itemizedBreakdown: "Positionen & Leistungsübersicht",
    productCol: "Artikel & Spezifikation",
    qtyCol: "Menge",
    priceCol: "Einzelpreis (inkl. MwSt.)",
    totalCol: "Gesamtpreis",
    sepaInstructions: "Zahlung per SEPA Banküberweisung (Vorkasse)",
    sepaBankName: "Deutsche Bank AG München",
    sepaHolder: "E-MOTO Europe Mobility Systems GmbH",
    sepaIban: "DE89 7007 0010 0987 6543 21",
    sepaBic: "DEUTDEDBMUC",
    sepaNotice: "Geben Sie als Verwendungszweck bitte exakt Ihre Auftragsnummer an. Bei Echtzeitüberweisungen (SEPA Instant) erfolgt die Freigabe zur Kommissionierung am gleichen Werktag.",
    cryptoInstructions: "Zahlung per Kryptowährung (5% Sofortrabatt gewährt)",
    cryptoNotice: "Überweisen Sie den rabattierten Endbetrag an eine der untenstehenden Adressen. Geben Sie Ihre Auftragsnummer im Transaktions-Memo an.",
    whatsappVerifyBtn: "Auftrag per WhatsApp verifizieren",
    printReceiptBtn: "Beleg drucken / PDF speichern",
    continueShopping: "Zurück zum Store"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE ist Europas spezialisierter Hub für High-Performance E-Motos, E-MTB Umbausätze und gefahrgut-zertifizierte 72V Traktionsbatterien nach ADR Klasse 9.",
    legalNotice: "Reine Offroad-Modelle und Umbausätze >250W sind im Geltungsbereich der StVZO nicht für den öffentlichen Straßenverkehr zugelassen. 250W Pedelec-Systeme entsprechen EN 15194.",
    adrNotice: "Traktionsbatterien mit mehr als 100Wh unterliegen den europäischen Gefahrgutvorschriften ADR Klasse 9 (UN 3480 / UN 3481) und werden ausschließlich in UN-geprüften Spezialkartons per Spedition mit Hebebühne versandt.",
    dispatchNotice: "Express- und Gefahrgut-Speditionsversand in alle EU-Mitgliedstaaten und die Schweiz.",
    rightsReserved: "Alle Rechte vorbehalten. Preise inkl. gesetzlicher 19% MwSt., zzgl. Versand.",
    catalogCol: "Shop & Systeme",
    serviceCol: "Service & Technik",
    legalCol: "Recht & Compliance",
    contactCol: "Standort München",
    impressum: "Impressum (§ 5 DDG)",
    privacy: "Datenschutz (DSGVO)",
    terms: "AGB & Kundeninformation",
    revocation: "Widerrufsbelehrung",
    batteryNotice: "Batteriehinweise (BattG)",
    tracking: "Speditionsverfolgung",
    subsidies: "Förderrechner",
    compare: "Modellvergleich"
  },
  compliance: {
    ageGateTitle: "Altersüberprüfung & Sicherheitshinweis (16+)",
    ageGateSubtitle: "German Law & Off-Road Motor Vehicle Safety Standard",
    ageGateText: "Unser Sortiment umfasst leistungsstarke E-Motos, Hochvolt-Umbausätze (1000W–5000W) und 72V Traktionsbatterien. Bitte bestätigen Sie, dass Sie mindestens 16 Jahre alt sind.",
    ageGateConfirm: "Ich bin mindestens 16 Jahre alt",
    ageGateLeave: "Abbrechen / Seite verlassen",
    cookieTitle: "Datenschutz & Cookie-Einstellungen (DSGVO / TTDSG)",
    cookieText: "Wir verwenden ausschließlich technisch notwendige Cookies (z. B. für den Warenkorb und Spracheinstellungen). Es werden standardmäßig keinerlei Werbe- oder Tracking-Cookies an Dritte übermittelt.",
    cookieAccept: "Alle akzeptieren",
    cookieNecessary: "Nur notwendige Cookies"
  },
  faqItems: [
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
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Komplette E-Motos & Dirt Bikes',
      description: 'Leistungsstarke elektrische Offroad-Motorräder, Trail-Bikes und Enduros für abgesperrte Strecken und Privatgelände.',
      legalStatus: 'Reine Offroad-Sportgeräte (Nicht zulässig im Geltungsbereich der StVZO)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'E-Bike Umbausätze & Motoren',
      description: 'Umrüstsätze für Fahrräder und Mountainbikes – von 250W StVZO-Pedelec-Kits bis zu 5000W Offroad-Kraftpaketen.',
      legalStatus: 'Differenziert: 250W StVZO-konform / 1000W–5000W Offroad-Sportgeräte'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Akkus & Ladetechnik (ADR 9)',
      description: 'Gefahrgut-zertifizierte 52V, 60V und 72V Lithium-Traktionsbatterien mit Smart-BMS und Schnellladegeräte.',
      legalStatus: 'ADR Klasse 9 Gefahrgut (UN 3480 / UN 3481) Speditionsversand'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Komponenten, Drivetrain & Cockpit',
      description: 'Verstärkte Drehmomentstützen, CNC Gasgriffe, FOC Sinuswellen-Controller, Kettenkits und Bremsen.',
      legalStatus: 'Offroad- und Tuning-Ersatzteile'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Sicherheitsausrüstung & Zubehör',
      description: 'ECE 22.06 zertifizierte Helme, Downhill-Protektoren, E-Prüfzeichen LED-Scheinwerfer und Schwerlast-Heckträger.',
      legalStatus: 'ECE & TÜV-geprüfte Sicherheitsausrüstung'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'HYPER-DRIVE 2000W Motor & 52V Akku Bundle (inkl. CNC Gasgriff)',
      shortDescription: 'Kraftvoller 2000W bürstenloser Hecknabenmotor gepaart mit einem kapazitätsstarken 52V Lithium-Ionen-Akkupack und direktem CNC-Gasgriff.',
      description: 'Verwandeln Sie Ihr Mountainbike in ein kompromissloses Offroad-Fahrzeug. Das Set beinhaltet einen extrem drehmomentstarken 2000W Hecknabenmotor, eingespeicht in eine verstärkte Aluminium-Hohlkammerfelge, einen 52V High-Discharge-Akku mit Smart-BMS, Sinuswellen-Controller, Farb-LCD-Display sowie verstärkte CNC Drehmomentstützen. Plug-and-Play Anschluss. Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Nicht zulässig im Geltungsbereich der StVZO.',
      legalNotice: 'Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Nicht zulässig im Geltungsbereich der StVZO.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: '2026 ETM™ RTR SPORT Elektro Dirt Bike',
      shortDescription: 'Das 2026 ETM RTR Sport bietet maximale Beschleunigung, sofortige Gasannahme und eine verstärkte Offroad-Fahrwerksgeometrie.',
      description: 'Gebaut für anspruchsvolle Singletrails und Motocross-Strecken. Ausgestattet mit einem hocheffizienten bürstenlosen Motor, einstellbarem Upside-Down-Fahrwerk, hydraulischen 4-Kolben-Bremsen und bissiger Bereifung. Keine Kupplung, kein Benzin, sofortiges Drehmoment. Reines Offroad-Sportgerät ohne StVZO-Zulassung. Gefahrguttransport gemäß ADR Klasse 9 (UN 3480 / UN 3481) per Spedition mit Hebebühne.',
      legalNotice: 'Reines Offroad-Sportgerät ohne StVZO-Zulassung. Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only).'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Strike Cycles SHADOW 72V / 7kW Elektro Dirt Bike',
      shortDescription: '7000W Peak Motocross-Power mit kompromissloser 72V-Architektur für höchste Endgeschwindigkeiten und extreme Steigungen.',
      description: 'Die Strike Cycles SHADOW liefert brachiale 72V-Performance. Entwickelt mit einem ultraleichten Aluminium-Brückenrahmen, 7kW Spitzenleistung, voll einstellbarer Dämpfung und Motocross-Standardrädern. Unbändige Offroad-Performance für Trails und private Tracks. Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Gefahrguttransport gemäß ADR Klasse 9.',
      legalNotice: 'Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Nicht zulässig im Geltungsbereich der StVZO.'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'ULTRA-DRIVE 3000W Motor & 72V Batterie Bundle',
      shortDescription: '3000W Hecknabenmotor kombiniert mit einem thermisch stabilen 72V High-Amp Akkupack, programmierbarem Controller und Zubehör.',
      description: 'Das ultimative Performance-Paket für eigene Umbauten. Beinhaltet einen robusten 3000W Hochleistungsmotor mit Temperaturüberwachung, massiven 72V Traktionsakku mit Hochstromzellen, programmierbaren 80A Sinus-Controller mit Rekuperation, Vollfarb-Display und lasergeschnittenen Drehmomentstützen. Reines Offroad-Setup. Gefahrguttransport gemäß ADR Klasse 9.',
      legalNotice: 'Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only). Nicht zulässig im Geltungsbereich der StVZO.'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Genuine FX CNC Präzisions-Gasgriff (Passend für Sur-Ron / Talaria / DIY)',
      shortDescription: 'Hochpräziser CNC-Aluminium Gasdrehgriff mit kugelgelagertem Lauf für lineare, ruckfreie Gasannahme ohne Totbereich.',
      description: 'Verhindert ruckartiges Anfahren und Schläge im Antriebsstrang. Aus dem Vollen gefrästes 6061-T6 Flugzeug-Aluminium, kontaktlose Hall-Sensoren und langlebige Doppelkugellager machen diesen Griff zum Maßstab für Sur-Ron, Talaria und leistungsstarke Umbauten. Plug-and-Play mit wasserdichtem HiGo-Steckverbinder.',
      legalNotice: 'Tuning- und Rennsport-Komponente für E-Motos und Offroad-Bikes.'
    },
    {
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      name: '250W Street-Legal Pedelec Umbausatz (StVZO & EN 15194 Konform)',
      shortDescription: '100% legaler 250W Pedelec-Umbausatz für den Straßenverkehr nach StVZO mit Tretsensor und automatischer 25 km/h Abschaltung.',
      description: 'Rüsten Sie Ihr Fahrrad vollkommen gesetzeskonform zum Pedelec um. Entspricht der europäischen Norm EN 15194:2017+A1:2024 und den Vorgaben des § 63a StVZO. Nenndauerleistung 250W, Motorunterstützung nur beim Treten bis max. 25 km/h. Führerschein-, helm- und versicherungsfrei in ganz Deutschland und der EU fahrbar. Inklusive 36V Rahmenakku, Drehmoment-Sensor-Tretlager und StVZO-Prüfbescheinigung.',
      legalNotice: 'Pedelec-konform nach EN 15194:2017+A1:2024 (250W, 25 km/h). Legal im Geltungsbereich der StVZO auf allen öffentlichen Straßen und Radwegen fahrbar.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'APEX High-Rate 72V 42Ah Traktionsakku (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'Hochstromfeste 72V Traktionsbatterie mit Molicel P42A Zellen und 150A Smart BMS für maximale Dauerbelastung.',
      description: 'Speziell konzipiert für anspruchsvolle 72V E-Motos und Renneinsätze. Ausgestattet mit Molicel INR-21700-P42A Hochstromzellen, reinem Nickelblech-Laserschweißverfahren und integriertem Bluetooth Smart BMS zur Überwachung jeder Einzelzelle per iOS/Android App. Gefahrguttransport gemäß ADR Klasse 9 (UN 3480) im geprüften Stahl-Verbundgehäuse.',
      legalNotice: 'Gefahrguttransport gemäß ADR Klasse 9 (UN 3480). Nur für den Offroad- und Renneinsatz.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Torp TC500 Plug-and-Play Controller (bis 25kW Peak)',
      shortDescription: 'Der führende FOC Sinuswellen-Controller für Sur-Ron Light Bee und Talaria Sting mit original Display-Unterstützung.',
      description: 'Modernste Field-Oriented Control (FOC) Technologie. Ermöglicht extreme Leistungssteigerungen bei niedriger Motortemperatur und samtweicher Gasannahme. Erkennt automatisch Akkutyp und Motortemperatur. Smartphone-App zur Live-Abstimmung von Motorbremse, Leistungskurven und Rekuperation.',
      legalNotice: 'Tuning-Komponente für Rennstrecken- und Offroad-Nutzung.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'StVZO, Pedelec & E-Moto: Rechtliche Fakten für Deutschland & EU 2026',
      excerpt: 'Wann ist ein E-Bike legal? Alles zu EN 15194, 250W Begrenzung, Daumengas-Verbot, L1e-B Typgenehmigungen und Fahren auf Privatgelände.',
      category: 'Rechtsleitfaden'
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Lithium-Akkus & Gefahrgutlogistik nach ADR Klasse 9 (UN 3480)',
      excerpt: 'Warum Traktionsbatterien über 100Wh strengen Gefahrgut-Vorschriften unterliegen und wie wir zertifizierten Speditionsversand sicherstellen.',
      category: 'Gefahrgut & Technik'
    },
    {
      slug: 'vergleich-pedelec-s-pedelec-e-moto-offroad',
      title: 'Vergleich 2026: Pedelec vs. S-Pedelec vs. High-Torque E-Moto',
      excerpt: 'Leistung, Rechtslage, Kosten und Einsatzzwecke: Der neutrale Leitfaden zur Wahl des richtigen Antriebssystems für Alltag oder Rennstrecke.',
      category: 'Kaufberatung'
    }
  ],
  searchPage: {
    breadcrumb: "Suche",
    title: "Suche & Katalog-Index",
    subtitle: "Finden Sie E-Motos, Umbausätze, 72V Batterien, CNC-Komponenten und StVZO-Rechtsratgeber.",
    placeholder: "Suchbegriff eingeben (z. B. 2000W, ETM RTR, 72V Akku)...",
    filterLabel: "Filter nach Straßenzulassung:",
    productsFound: "Gefundene Produkte & Systeme",
    articlesFound: "Gefundene Rechtsleitfäden & Ratgeber",
    noResults: "Keine passenden Ergebnisse gefunden."
  },
  legalContent: {
    agbTitle: "Allgemeine Geschäftsbedingungen (AGB)",
    privacyTitle: "Datenschutzerklärung (DSGVO)",
    impressumTitle: "Impressum (§ 5 DDG)",
    widerrufTitle: "Widerrufsbelehrung",
    batteryTitle: "Batterie- & Entsorgungshinweise (BattG)"
  },
  confirmation: {
    orderTitle: "Auftragserfassung & Zahlungsanweisung",
    orderSubtitle: "Ihr Bestellentwurf wurde erfolgreich im System registriert.",
    orderRef: "Auftragsnummer",
    productCol: "POSITION",
    totalCol: "BETRAG",
    cryptoNotice: "5% Krypto-Sofortrabatt",
    sepaBankName: "BANK",
    sepaHolder: "HOLDER",
    inquiryTitle: "Vielen Dank für Ihre Anfrage!",
    inquirySubtitle: "Ticket erfolgreich eröffnet.",
    b2bTitle: "Willkommen im Händlernetzwerk!",
    b2bSubtitle: "B2B Registrierung erfolgreich eingegangen.",
    whatsappVerify: "Auftrag per WhatsApp verifizieren",
    printReceipt: "Beleg drucken / PDF speichern",
    continueShopping: "Zurück zum Store"
  }
};

// 1. English (en)
const en = {
  nav: {
    shop: "Shop & Catalog",
    motos: "E-Motos & Dirt Bikes",
    kits: "E-Bike Conversion Kits",
    batteries: "72V Batteries & Chargers",
    legalGuides: "Legal Guides & Magazine",
    about: "About Us & Workshop",
    faq: "FAQ & Support",
    contact: "Contact & Workshop",
    b2b: "B2B Wholesale Portal",
    compare: "Model Comparison",
    subsidies: "Subsidy Calculator",
    tracking: "Shipment Tracking",
    cart: "Cart",
    search: "Search model, motor, or volts...",
    lang: "Language",
    allCategories: "All Products & Conversion Kits"
  },
  announcements: {
    cryptoDiscount: "5% Instant Discount with Crypto Payments (Bitcoin & USDT)",
    freeShipping: "Free Parcel Shipping over €199 on accessories & parts within DE/EU",
    adrSafety: "ADR Class 9 Certified: Fully compliant hazmat transport for traction batteries",
    whatsappAdvice: "Live Technical Workshop Advisory via WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Workshop Concierge",
    status: "Online · Workshop Munich / Freising",
    subtitle: "Personal advisory by our certified engineering team",
    whatsappFastLane: "WhatsApp Fast-Lane",
    phoneDirect: "Call Munich Workshop",
    emailTickets: "Open Email Ticket",
    faqDirect: "Open FAQ & Answers",
    availabilityNotice: "Mon–Fri 09:00–18:00 CET · Engineer responds in < 2 hrs",
    close: "Close Chat",
    open: "Workshop Chat"
  },
  hero: {
    badge: "GERMAN ENGINEERING & CERTIFIED LOGISTICS",
    h1: "HIGH-PERFORMANCE",
    h1Highlight: "E-MOTOS & DRIVETRAINS",
    subtitle: "Europe's premier engineering hub for high-voltage powertrains, ADR Class 9 certified 72V traction batteries (UN 3480), and 100% street-legal 250W EN 15194 pedelec systems.",
    ctaShop: "Browse Full Catalog",
    ctaKits: "Conversion Kits 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Central workshop and engineering facility in Freising near Munich. Dyno-verified data, industrial HiGo harnesses, and palletized European shipping.",
    fastDispatch: "Stocked in Germany — Express & Freight Dispatch",
    adrSafety: "ADR Class 9 Certified for Safe Battery Delivery",
    telemetry: {
      voltageLabel: "VOLTAGE",
      voltageValue: "72V DC",
      voltageSub: "High-Rate Bus",
      powerLabel: "PEAK POWER",
      powerValue: "12 kW",
      powerSub: "Dyno Validated",
      torqueLabel: "TORQUE",
      torqueValue: "280 Nm",
      torqueSub: "Instant at Wheel",
      speedLabel: "SPEED",
      speedValue: "85 km/h",
      speedSub: "Off-Road Only"
    }
  },
  trust: {
    engineering: "German Engineering",
    engineeringSub: "Dyno-verified specs, HiGo connectors & CNC axle-support arms",
    adrLogistics: "ADR Class 9 Hazmat",
    adrLogisticsSub: "Certified palletized shipping for 52V & 72V traction battery packs",
    plugAndPlay: "Legal Transparency",
    plugAndPlaySub: "Strict separation between 250W Pedelecs and Off-Road machines",
    payment: "Secure Payments",
    paymentSub: "SEPA wire transfer, Klarna, iDEAL, BLIK & 5% crypto discount (No PayPal)"
  },
  bento: {
    badge: "ENGINEERING EXCELLENCE & SAFETY",
    title: "Certified High-Voltage Engineering Matrix",
    subtitle: "Why Europe's top riders and custom builders choose E-MOTO EUROPE powertrains.",
    card1Badge: "DYNO-VALIDATED",
    card1Title: "Real Continuous & Peak Power",
    card1Text: "Every powertrain is dynamically verified on our stationary dyno near Munich. 12kW peak output corresponds to real, thermally managed phase currents up to 500A.",
    card2Badge: "SAFETY STANDARD",
    card2Title: "Strict Segregation: StVZO vs. Off-Road",
    card2Text: "No false claims: Our 250W pedelec kit complies strictly with EN 15194 (street legal without license). Off-road kits up to 5000W are clearly classified as race gear.",
    card3Badge: "HAZMAT ADR 9",
    card3Title: "Certified ADR 9 Dangerous Goods Transport",
    card3Text: "Traction packs above 100Wh are Class 9 dangerous goods (UN 3480/3481). We ship exclusively in 4G-certified packaging with hydraulic tail-lift freight carriers.",
    card4Badge: "PAN-EUROPE SUPPORT",
    card4Title: "Munich Depot & Rapid Parts Availability",
    card4Text: "All wear parts, HiGo harnesses, Smart-BMS and FOC controllers are stocked in Munich for rapid 24–48h shipment across all European Union member states."
  },
  categoriesSection: {
    badge: "PRODUCT SPECTRUM",
    title: "Performance Categories & Model Lines",
    subtitle: "From street-legal 250W pedelec conversions to uncompromising 72V competition dirt bikes.",
    viewCategory: "View Category",
    productsCount: "items available"
  },
  bestsellersSection: {
    badge: "WORKSHOP PICKS",
    title: "Top Bestsellers from our Munich Depot",
    subtitle: "Pre-configured, dyno-tested high-performance drivetrains ready for immediate European dispatch.",
    viewDetails: "View Details & Specs",
    addToCart: "Add to Cart",
    cryptoPrice: "Crypto Price (-5%)",
    viewAll: "View Entire Catalog",
    stvzoBadge: "100% Street Legal",
    offroadBadge: "Offroad Sport"
  },
  aboutSection: {
    badge: "GERMAN WORKSHOP SITE",
    title: "About E-MOTO EUROPE",
    subtitle: "Europe's specialist provider for high-performance e-motos, race conversion kits (1000W–5000W), 72V lithium traction batteries, and street-legal 250W systems.",
    p1: "Interest in electric two-wheelers is booming. Yet the influx of unverified imports poses severe safety hazards: thermal instability in battery packs, inadequate dropout reinforcements on bicycle frames, and misleading road-legality claims.",
    p2: "E-MOTO EUROPE was founded in Freising near Munich to combine high-power electric propulsion with uncompromising safety, honest regulatory guidance, and certified dangerous goods logistics.",
    v1Title: "Dyno-Verified Data",
    v1Text: "Real continuous and peak output, active thermal monitoring, and tuned FOC sine-wave curves.",
    v2Title: "ADR Class 9 Logistics",
    v2Text: "Certified palletized freight for batteries >100Wh with phone delivery avis.",
    v3Title: "100% Legal vs. Off-Road",
    v3Text: "Total regulatory certainty through clear separation of EN 15194 pedelecs and race bikes.",
    v4Title: "Spare Parts Guarantee",
    v4Text: "Controllers, BMS units, displays and HiGo harnesses stocked in Germany.",
    learnMoreBtn: "Learn more about our Workshop"
  },
  legalSection: {
    title: "Legal Certainty & Regulatory Transparency",
    text: "We stand for absolute compliance: 250W Pedelecs complying with EN 15194 are legal on all public roads and cycle paths in Europe without driver's license or insurance. High-voltage systems (1000W–5000W, 72V) are dedicated off-road sporting equipment intended strictly for private property and closed circuits.",
    readGuideBtn: "Read Complete Legal Guide"
  },
  legalBanner: {
    title: "Important Legal Notice regarding Germany & EU Regulations",
    text: "Vehicles and conversion kits exceeding 250W or 25 km/h are dedicated off-road sporting gear without public road authorization. Our 250W Pedelec kit complies with EN 15194 and is 100% street legal.",
    learnMore: "Read Legal Guide",
    offroadWarning: "Off-Road Sporting Equipment (Not permitted on public roads without CoC)",
    pedelecCertified: "100% Street Legal under EN 15194:2017+A1:2024"
  },
  shopPage: {
    breadcrumb: "Shop",
    title: "E-Motos, Conversion Kits & 72V Components",
    subtitle: "Choose between 100% street-legal pedelec conversion kits (250W, EN 15194) and uncompromising off-road sporting machines (1000W–5000W, 72V) for private trails.",
    filterAll: "All Products",
    filterStVZOAll: "All Legal Statuses",
    filterStVZOOnly: "100% Street Legal",
    filterOffroadOnly: "Off-Road Sport",
    sortBy: "Sort by",
    sortFeatured: "Recommended / Bestsellers",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    inStock: "In Stock at Munich Depot",
    adrNotice: "ADR Class 9 Hazmat",
    viewProduct: "Details & Specifications",
    addToCart: "Add to Cart",
    addedToCart: "In Cart",
    details: "Details",
    cryptoPrice: "Crypto Price"
  },
  product: {
    specs: "Technical Specifications",
    addToCart: "Add to Cart",
    buyNow: "Proceed to Checkout",
    inStock: "In Stock — Ready to ship in 24–48h",
    dispatchNotice: "Dispatched from central depot (Munich / Freising, Germany)",
    warranty: "2-Year EU Statutory Warranty",
    legalNotice: "Legal Status & Regulatory Classification",
    cryptoDiscountBadge: "5% Discount on Crypto Payments",
    relatedProducts: "Matching Components & Gear",
    quantity: "Quantity",
    vatNotice: "incl. 19% VAT, shipping calculated at checkout"
  },
  aboutPage: {
    breadcrumb: "About Us",
    badge: "GERMAN ENGINEERING SITE",
    title: "About E-MOTO EUROPE",
    subtitle: "Specialist engineering provider for high-performance e-motos, race conversion kits (1000W–5000W), 72V high-rate lithium packs, and street-legal 250W pedelec systems.",
    storyTitle: "1. Founding Story & Engineering Philosophy",
    storyP1: "Interest in electric two-wheelers is booming. Yet the influx of unverified imports poses severe safety hazards: thermal instability in battery packs, inadequate dropout reinforcements on bicycle frames, and misleading road-legality claims.",
    storyP2: "E-MOTO EUROPE was founded in Freising near Munich to combine high-power electric propulsion with uncompromising safety, honest regulatory guidance, and certified dangerous goods logistics.",
    legalTitle: "2. German Legal Compliance: StVZO vs. Off-Road",
    legalP1: "We believe in total regulatory transparency. In the industry, high-powered bikes are often mislabeled as regular bicycles. We reject such deception:",
    legalPedelecTitle: "100% Street-Legal Pedelecs",
    legalPedelecText: "Our 250W Street-Legal conversion kit complies strictly with European safety standard EN 15194:2017+A1:2024. It assists up to 25 km/h and requires no helmet, license, or insurance in the EU.",
    legalOffroadTitle: "High-Power E-Motos & 1000W–5000W Kits",
    legalOffroadText: "These systems are dedicated off-road sporting gear for private property, closed tracks, and hard enduro parks. They are not permitted on public roads unless licensed with a CoC.",
    adrTitle: "3. Certified ADR Class 9 Dangerous Goods Logistics",
    adrText: "Traction batteries above 100Wh are Class 9 dangerous goods (UN 3480/3481). We ship exclusively in UN-certified 4G packaging with non-flammable vermiculite cushioning and specialized freight carriers (Dachser, Schenker).",
    diffTitle: "4. Our 4 Key Competitive Differentiators",
    milestonesTitle: "5. Historical Milestones"
  },
  contactPage: {
    breadcrumb: "Contact",
    badge: "WORKSHOP ADVISORY & MUNICH SITE",
    title: "Contact & Workshop Advisory",
    subtitle: "Have technical questions about motor sizing, battery compatibility, European road-legality, or custom assembly? Our certified engineers in Freising near Munich are here to help.",
    formTitle: "Send message to the technical workshop",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number (for callback)",
    subjectLabel: "Topic / Inquiry Subject",
    subjectGeneral: "General Technical Advisory",
    subjectTechnical: "Conversion Kit & Motor Compatibility",
    subjectOrder: "Order Inquiry & Payment Verification",
    subjectB2B: "B2B Dealer & Workshop Inquiry",
    messageLabel: "Your Message to our Workshop",
    submitBtn: "Submit Technical Inquiry",
    submitting: "Submitting...",
    guaranteeTitle: "Guaranteed Response < 2 Hours",
    guaranteeText: "On European business days (Mon–Fri 09:00–18:00 CET), our engineers respond to your technical inquiries within two hours.",
    directPhone: "Workshop Direct Line",
    directWhatsapp: "WhatsApp Concierge",
    directEmail: "Email Ticket Desk",
    directAddress: "Workshop & Testing Site Munich"
  },
  faqPage: {
    breadcrumb: "FAQ",
    title: "Frequently Asked Questions & Support",
    subtitle: "Clear, authoritative answers from our engineering workshop regarding StVZO road legality, ADR Class 9 dangerous goods logistics, payment methods, and warranties.",
    moreQuestions: "Have a specific custom inquiry?",
    askWhatsapp: "Ask via WhatsApp",
    askEmail: "Open Email Ticket"
  },
  comparePage: {
    breadcrumb: "Comparison",
    title: "Powertrain & E-Moto Technical Comparison",
    subtitle: "Direct technical comparison of peak power, torque, road-legality, and battery architecture across all models.",
    colModel: "Model / System",
    colCategory: "Category",
    colPower: "Peak Power",
    colTorque: "Torque",
    colBattery: "Traction Battery",
    colSpeed: "Top Speed",
    colStVZO: "Road Legal",
    colPrice: "Price (incl. VAT)",
    colAction: "Action",
    yesStVZO: "100% Street Legal",
    noStVZO: "Off-Road Sport"
  },
  subsidiesPage: {
    breadcrumb: "Subsidies",
    title: "European E-Mobility Subsidy Calculator",
    subtitle: "Determine potential climate bonus programs and regional subsidies for commercial and commuter electric vehicles across Europe.",
    selectCountry: "Select Your Country",
    userType: "Application Type",
    commercialUser: "Commercial Fleet / B2B Operator",
    privateUser: "Private Commuter / Individual",
    potentialSubsidy: "Estimated Maximum Subsidy:",
    subsidyNote: "Subsidies vary by region, canton, and municipal policy. Official confirmation from your local agency is recommended prior to ordering."
  },
  trackingPage: {
    breadcrumb: "Order Tracking",
    title: "Track Palletized Freight & Parcel Shipments",
    subtitle: "Track your ADR Class 9 certified traction battery freight or express component parcels in real time.",
    trackingInputPlaceholder: "Order reference or carrier tracking code (e.g. EMO-849201-EU)...",
    trackBtn: "Check Shipment Status",
    carrierNotice: "High-voltage traction batteries and complete bikes are dispatched via freight carrier (Dachser / DB Schenker) with hydraulic tail-lift delivery."
  },
  magazine: {
    breadcrumb: "Magazine & Guides",
    title: "Technical, Legal & Hazmat Guides",
    subtitle: "In-depth guides from our Munich workshop covering StVZO road legality, ADR Class 9 dangerous goods logistics, and performance tuning.",
    readGuide: "Read Guide",
    publishedOn: "Published on",
    readTime: "Read time:",
    workshopEditorial: "Workshop Editorial Desk",
    summary: "Executive Summary:",
    disclaimerTitle: "Statutory Notice from E-MOTO EUROPE",
    disclaimerText: "All information is provided to the best of our knowledge based on StVZO, European norm EN 15194, and international ADR transport regulations.",
    relatedProducts: "Matching Systems & Components from our Workshop",
    backToOverview: "Back to Magazine Overview"
  },
  b2b: {
    title: "B2B Dealer & Workshop Portal",
    subtitle: "Exclusive tiered pricing for motorcycle shops, bike builders, and race teams in the European Single Market.",
    tier1: "Tier 1 (from 3 units): 15% dealer discount",
    tier2: "Tier 2 (from 10 units): 25% dealer discount + freight priority",
    tier3: "Tier 3 (OEM / Framework): Up to 35% discount + white-label engineering options",
    formTitle: "Request Dealer Access",
    companyLabel: "Company Name / Workshop",
    vatLabel: "EU VAT Identification Number (USt-IdNr.)",
    contactLabel: "Contact Person",
    emailLabel: "Business Email",
    phoneLabel: "Phone Number",
    volumeLabel: "Estimated Annual Volume of Powertrains/Packs",
    submitBtn: "Apply for Dealer Terms"
  },
  cart: {
    title: "Your Shopping Cart",
    empty: "Your cart is currently empty",
    emptySub: "Discover our 2026 E-Motos, conversion kits and traction batteries.",
    startShopping: "Start Shopping",
    subtotal: "Subtotal",
    cryptoDiscount: "5% Crypto Discount (BTC / USDT)",
    shipping: "Shipping",
    freeShippingNotice: "Free parcel shipping over €199 (freight applies to complete bikes/hazmat)",
    total: "Total",
    checkoutBtn: "Proceed to Checkout / Prepare Draft",
    vatNotice: "All prices include 19% VAT, shipping calculated at checkout",
    paymentMethodsTitle: "Payment Methods (No PayPal, no unvetted card entry):",
    ageNotice: "By placing this order you confirm that you are at least 16 years of age.",
    orderSuccessTitle: "Thank you for your order!"
  },
  checkout: {
    step1: "Contact Details",
    step2: "Shipping Address (EU / DE / CH)",
    step3: "Payment Method & Review",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number (for freight scheduling)",
    address: "Street Address and Number",
    city: "City",
    zip: "Postal Code",
    country: "Country",
    notes: "Notes regarding bike frame or assembly",
    confirmAge: "I confirm that I am at least 16 years old and have read the StVZO compliance notice.",
    placeOrder: "Submit Binding Order Draft",
    submitting: "Submitting..."
  },
  confirmation: {
    orderTitle: "Order Receipt & Payment Instructions",
    orderSubtitle: "Your order draft has been successfully registered in our system.",
    orderRef: "Order Reference",
    thankYouNotice: "A proforma invoice and payment instructions have been generated.",
    itemizedBreakdown: "Itemized Order Breakdown",
    productCol: "Item & Specification",
    qtyCol: "Qty",
    priceCol: "Unit Price (incl. VAT)",
    totalCol: "Total",
    sepaInstructions: "Payment via SEPA Bank Transfer (Prepayment)",
    sepaBankName: "Deutsche Bank AG Munich",
    sepaHolder: "E-MOTO Europe Mobility Systems GmbH",
    sepaIban: "DE89 7007 0010 0987 6543 21",
    sepaBic: "DEUTDEDBMUC",
    sepaNotice: "Please include your exact order reference in the payment description. For SEPA Instant transfers, orders are cleared on the same business day.",
    cryptoInstructions: "Payment via Cryptocurrency (5% Discount Applied)",
    cryptoNotice: "Transfer the discounted total amount to one of our designated deposit addresses. Mention your order reference in the memo.",
    whatsappVerifyBtn: "Verify Order via WhatsApp Concierge",
    printReceiptBtn: "Print Receipt / Save as PDF",
    continueShopping: "Return to Store"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE is Europe's specialized platform for high-performance e-motos, conversion kits, and ADR Class 9 certified 72V traction batteries.",
    legalNotice: "High-power offroad bikes and conversion kits >250W are not permitted on public roads. 250W Pedelec systems comply with European norm EN 15194.",
    adrNotice: "Traction batteries over 100Wh are Class 9 dangerous goods (UN 3480/3481) and ship strictly in UN-approved packaging with tail-lift freight carriers.",
    dispatchNotice: "Express parcel and certified palletized freight delivery to all EU member states and Switzerland.",
    rightsReserved: "All rights reserved. Prices include 19% German VAT, plus shipping.",
    catalogCol: "Shop & Systems",
    serviceCol: "Engineering & Service",
    legalCol: "Legal & Compliance",
    contactCol: "Munich Headquarters",
    impressum: "Legal Notice (Impressum)",
    privacy: "Privacy Policy (GDPR)",
    terms: "Terms & Conditions (AGB)",
    revocation: "Cancellation Policy",
    batteryNotice: "Battery & Disposal (BattG)",
    tracking: "Freight Tracking",
    subsidies: "Subsidy Calculator",
    compare: "Model Comparison"
  },
  compliance: {
    ageGateTitle: "Age Verification & Safety Notice (16+)",
    ageGateSubtitle: "European Law & Off-Road Motor Vehicle Safety Standard",
    ageGateText: "Our catalog features powerful e-motos, high-voltage conversion kits (1000W–5000W), and 72V traction batteries. Please confirm that you are at least 16 years of age.",
    ageGateConfirm: "I am at least 16 years old",
    ageGateLeave: "Cancel / Leave Website",
    cookieTitle: "Privacy & Cookie Preferences (GDPR / ePrivacy)",
    cookieText: "We use only strictly necessary technical cookies (for your cart and language settings). No third-party marketing or tracking cookies are set by default.",
    cookieAccept: "Accept Necessary & Functional",
    cookieNecessary: "Strictly Necessary Only"
  },
  faqItems: [
    {
      question: 'Are your e-motos and high-performance conversion kits street legal (StVZO)?',
      answer: 'No, e-motos and kits exceeding 250W or speeds of 25 km/h are dedicated off-road sporting equipment without public road authorization. Use is strictly limited to private property or closed circuits. The only exception is our 250W Pedelec kit (EN 15194), which is 100% street legal.'
    },
    {
      question: 'Why don\'t you offer PayPal or direct credit card entry?',
      answer: 'High-power e-motos, ADR Class 9 traction batteries, and racing components are often blocked by US consumer payment gateways due to automated regulatory flags. We utilize secure European bank transfers (SEPA Instant), Klarna, iDEAL, BLIK, and cryptocurrencies with a 5% instant discount.'
    },
    {
      question: 'How does the 5% Crypto discount (Bitcoin & USDT) work?',
      answer: 'Select Crypto as your payment method during checkout. The 5% discount will be automatically applied to your cart total. After submission, you will receive our deposit address and the current exchange rate for a simple transfer.'
    },
    {
      question: 'How are 72V traction batteries and complete bikes shipped?',
      answer: 'Traction batteries exceeding 100Wh are shipped as ADR Class 9 Dangerous Goods (UN 3480/3481) in certified specialized packaging. Complete bikes are delivered on pallets with hydraulic tail-lifts and phone delivery scheduling.'
    },
    {
      question: 'Is there a warranty and how are spare parts supplied?',
      answer: 'All items include a standard 2-year statutory warranty. We stock all critical spare parts—including FOC controllers, Smart BMS units, HiGo harnesses, Hall sensors, and displays—at our Munich depot for rapid support.'
    },
    {
      question: 'Can I order as a dealer or workshop at wholesale (B2B) rates?',
      answer: 'Yes. Professional bike shops, dealers, and racing teams with a valid EU VAT ID can apply via our B2B portal for tiered discounts, direct freight delivery, and priority parts supply. Applications are usually verified within 24 hours.'
    }
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Complete E-Motos & Dirt Bikes',
      description: 'High-performance electric off-road motorcycles, trail bikes, and enduros for closed circuits and private property.',
      legalStatus: 'Off-Road Sporting Equipment (Not permitted on public roads)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'E-Bike Conversion Kits & Motors',
      description: 'Retrofit kits for bicycles and MTBs – from 250W street-legal pedelec systems to 5000W off-road powerhouses.',
      legalStatus: 'Differentiated: 250W Street Legal / 1000W–5000W Off-Road Gear'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Batteries & Chargers (ADR 9)',
      description: 'Hazmat-certified 52V, 60V, and 72V lithium traction batteries with Smart BMS and high-speed chargers.',
      legalStatus: 'ADR Class 9 Dangerous Goods (UN 3480 / UN 3481) Freight Shipping'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Components, Drivetrain & Cockpit',
      description: 'Reinforced torque arms, CNC throttles, FOC sine-wave controllers, chain kits, and performance braking.',
      legalStatus: 'Off-Road & Tuning Components'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Safety Gear & Accessories',
      description: 'ECE 22.06 certified helmets, downhill protectors, E-marked LED headlights, and heavy-duty hitch carriers.',
      legalStatus: 'ECE & TÜV Tested Safety Equipment'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'HYPER-DRIVE 2000W Motor & 52V Battery Bundle (inc. CNC Throttle)',
      shortDescription: 'Powerful 2000W brushless rear hub motor paired with a high-capacity 52V lithium-ion pack and precision CNC throttle.',
      description: 'Transform your mountain bike into a high-performance off-road machine. This set includes a high-torque 2000W motor laced into a reinforced rim, 52V high-discharge battery with Smart BMS, sine-wave controller, color LCD, and CNC torque arms. Plug-and-play. Strictly for private property and race tracks (Off-Road only). Not permitted on public roads.',
      legalNotice: 'Strictly for private property and race tracks (Off-Road only). Not permitted on public roads.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: '2026 ETM™ RTR SPORT Electric Dirt Bike',
      shortDescription: 'The 2026 ETM RTR Sport delivers maximum acceleration, instant throttle response, and reinforced off-road suspension geometry.',
      description: 'Built for demanding single-tracks and motocross circuits. Featuring a high-efficiency brushless motor, adjustable inverted forks, 4-piston hydraulic brakes, and aggressive knobby tires. No clutch, no gas, just instant torque. Dedicated off-road race gear. ADR Class 9 hazmat shipping via palletized freight.',
      legalNotice: 'Dedicated off-road race gear. Not permitted on public roads. For use on private property and closed circuits only.'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Strike Cycles SHADOW 72V / 7kW Electric Dirt Bike',
      shortDescription: '7000W Peak motocross power with uncompromising 72V architecture for high top speeds and extreme climbing capability.',
      description: 'The Strike Cycles SHADOW delivers brutal 72V performance. Engineered with an ultra-lightweight forged alloy frame, 7kW peak output, fully adjustable damping, and motocross-standard wheels. Unstoppable off-road performance for trails and tracks. ADR Class 9 hazmat shipping.',
      legalNotice: 'Strictly for private property and race tracks (Off-Road only). Not permitted on public roads.'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'ULTRA-DRIVE 3000W Motor & 72V Battery Bundle',
      shortDescription: '3000W rear hub motor combined with a thermally stable 72V high-amp battery pack, programmable controller, and parts.',
      description: 'The ultimate performance package for custom builds. Includes a robust 3000W motor with temp monitoring, massive 72V traction pack with high-rate cells, programmable 80A sine-wave controller with regen, color display, and laser-cut torque arms. Off-road setup. ADR Class 9 shipping.',
      legalNotice: 'Strictly for private property and race tracks (Off-Road only). Not permitted on public roads.'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Genuine FX CNC Precision Throttle (Fits Sur-Ron / Talaria / DIY)',
      shortDescription: 'High-precision CNC aluminum twist throttle with ball-bearing action for linear, lag-free response without dead zones.',
      description: 'Eliminates jerky starts and drivetrain shock. Machined from 6061-T6 aerospace aluminum, features contactless Hall sensors and dual sealed bearings. The standard for Sur-Ron, Talaria, and high-performance DIY builds. Plug-and-play HiGo connector.',
      legalNotice: 'Tuning and racing component for e-motos and off-road builds.'
    },
    {
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      name: '250W Street-Legal Pedelec Kit (EN 15194 & Road Compliant)',
      shortDescription: '100% legal 250W pedelec conversion kit for public roads with pedal-assist sensor and automatic 25 km/h cutoff.',
      description: 'Convert your bicycle into a fully compliant pedelec. Meets European standard EN 15194:2017+A1:2024 and German road regulations. 250W nominal power, assist only while pedaling up to 25 km/h. No license, helmet, or insurance required in the EU. Includes 36V downtube battery, torque sensor, and certificate.',
      legalNotice: 'Compliant with EN 15194:2017+A1:2024 (250W, 25 km/h). Legal for use on all public roads and cycle paths.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'APEX High-Rate 72V 42Ah Traction Pack (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'High-rate 72V traction battery featuring Molicel P42A cells and 150A Smart BMS for maximum continuous load.',
      description: 'Engineered for demanding 72V e-motos and racing applications. Built with Molicel INR-21700-P42A high-amp cells, pure nickel laser-welded interconnects, and integrated Bluetooth Smart BMS for real-time cell monitoring. ADR Class 9 (UN 3480) certified in a steel composite casing.',
      legalNotice: 'Hazmat shipping ADR Class 9 (UN 3480). For off-road and race use only.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Torp TC500 Plug-and-Play Controller (up to 25kW Peak)',
      shortDescription: 'The leading FOC sine-wave controller for Sur-Ron Light Bee and Talaria Sting with native display support.',
      description: 'Advanced Field-Oriented Control (FOC) technology. Enables extreme power gains with lower motor temps and smooth throttle response. Automatically detects battery type and motor temperature. Smartphone app for live tuning of power curves and braking.',
      legalNotice: 'Tuning component for track and off-road use only.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'Road Legality, Pedelec & E-Moto: Facts for Europe 2026',
      excerpt: 'When is an e-bike legal? Everything about EN 15194, 250W limits, throttle bans, L1e-B type approval, and private property use.',
      category: 'Legal Guide'
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Lithium Batteries & ADR Class 9 Hazmat Logistics (UN 3480)',
      excerpt: 'Why traction batteries over 100Wh are subject to strict dangerous goods regulations and how we ensure certified freight delivery.',
      category: 'Hazmat & Tech'
    },
    {
      slug: 'vergleich-pedelec-s-pedelec-e-moto-offroad',
      title: '2026 Comparison: Pedelec vs. S-Pedelec vs. High-Torque E-Moto',
      excerpt: 'Power, legal status, costs, and use cases: The neutral guide to choosing the right drivetrain for commuting or racing.',
      category: 'Buying Guide'
    }
  ],
  searchPage: {
    breadcrumb: "Search",
    title: "Search & Catalog Index",
    subtitle: "Find e-motos, conversion kits, 72V batteries, CNC components, and StVZO legal guides.",
    placeholder: "Enter search term (e.g. 2000W, ETM RTR, 72V battery)...",
    filterLabel: "Filter by road legality:",
    productsFound: "Matching Products & Systems",
    articlesFound: "Matching Legal Guides & Blog",
    noResults: "No matching results found."
  },
  legalContent: {
    agbTitle: "Terms & Conditions (AGB)",
    privacyTitle: "Privacy Policy (GDPR)",
    impressumTitle: "Legal Notice (Impressum)",
    widerrufTitle: "Cancellation Policy",
    batteryTitle: "Battery & Disposal Notice (BattG)"
  },
  confirmation: {
    orderTitle: "Order Receipt & Payment Instructions",
    orderSubtitle: "Your order draft has been successfully registered.",
    orderRef: "Order Reference",
    productCol: "ITEM & SPECIFICATION",
    totalCol: "TOTAL",
    cryptoNotice: "5% Crypto Discount Applied",
    sepaBankName: "BANK",
    sepaHolder: "HOLDER",
    inquiryTitle: "Thank You for Your Inquiry!",
    inquirySubtitle: "Ticket successfully opened.",
    b2bTitle: "Welcome to the Dealer Network!",
    b2bSubtitle: "B2B registration successfully received.",
    whatsappVerify: "Verify Order via WhatsApp",
    printReceipt: "Print Receipt / Save as PDF",
    continueShopping: "Return to Store"
  }
};

// 2. Swiss German (de-CH)
const deCH = JSON.parse(JSON.stringify(de));
deCH.hero.badge = "DEUTSCHES INGENIEURSWERK & SCHWEIZER DIREKTVERSAND";
deCH.hero.subtitle = "Europas führende Plattform für extreme Drehmomente, 72V Traktionsbatterien nach ADR Klasse 9 und 100% StVZO-konforme Pedelec-Systeme mit direkter Verzollung in die Schweiz.";
deCH.hero.entityStatement = "E-MOTO EUROPE: Werkstatt- und Entwicklungsstandort Freising bei München mit täglicher Schweizer Zollabfertigung und Speditionsversand in alle Kantone.";
deCH.trust.adrLogisticsSub = "Zertifizierter Speditionsversand mit Schweizer Zollabfertigung für 52V & 72V Akkus";
deCH.cart.freeShippingNotice = "Versandkostenfrei ab 199 € für Zubehör (Spedition für Komplettbikes/Akkus inkl. Schweizer Verzollung)";
deCH.cart.vatNotice = "Preise inkl. MwSt., Netto-Ausfuhr und Verzollung für die Schweiz verfügbar";

// Helper function to create language dictionaries with full fallback to EN and localized titles
function createDictionary(translationsOverride) {
  const result = JSON.parse(JSON.stringify(en));
  for (const [sectionKey, sectionObj] of Object.entries(translationsOverride)) {
    if (result[sectionKey]) {
      result[sectionKey] = { ...result[sectionKey], ...sectionObj };
    } else {
      result[sectionKey] = sectionObj;
    }
  }
  return result;
}

// 3. French (fr)
const fr = createDictionary({
  nav: {
    shop: "Boutique & Catalogue",
    motos: "Motos Électriques & Dirt",
    kits: "Kits de Conversion",
    batteries: "Batteries 72V & Chargeurs",
    legalGuides: "Guides Juridiques & Mag",
    about: "À Propos & Atelier",
    faq: "FAQ & Support",
    contact: "Contact & Atelier",
    b2b: "Portail Pro B2B",
    compare: "Comparateur",
    subsidies: "Simulateur de Primes",
    tracking: "Suivi de Livraison",
    cart: "Panier",
    search: "Rechercher un modèle, moteur...",
    lang: "Langue",
    allCategories: "Tous les Produits & Kits"
  },
  announcements: {
    cryptoDiscount: "Remise immédiate de 5% en Cryptomonnaie (Bitcoin & USDT)",
    freeShipping: "Livraison offerte dès 199 € pour accessoires & pièces détachées",
    adrSafety: "Certifié ADR Classe 9: Transport de matières dangereuses sécurisé pour batteries",
    whatsappAdvice: "Conseil technique en direct via WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Concierge Atelier",
    status: "En ligne · Atelier Munich / Freising",
    subtitle: "Conseils techniques directs par nos ingénieurs spécialistes",
    whatsappFastLane: "WhatsApp Voie Rapide",
    phoneDirect: "Appeler l'Atelier de Munich",
    emailTickets: "Ouvrir un Ticket Email",
    faqDirect: "Questions Fréquentes (FAQ)",
    availabilityNotice: "Lun–Ven 09:00–18:00 CET · Réponse ingénieur en < 2h",
    close: "Fermer le Chat",
    open: "Chat Atelier"
  },
  hero: {
    badge: "INGÉNIERIE ALLEMANDE & LOGISTIQUE CERTIFIÉE ADR 9",
    h1: "HAUTE PERFORMANCE",
    h1Highlight: "MOTOS ÉLECTRIQUES & MOTORISATIONS",
    subtitle: "La plateforme européenne de référence pour motorisations haute puissance, batteries de traction 72V (ADR Classe 9) et kits Pedelec 100% homologués EN 15194.",
    ctaShop: "Découvrir le Catalogue",
    ctaKits: "Kits Moteur 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Atelier et centre de développement près de Munich. Données de banc d'essai, faisceaux industriels HiGo et fret sécurisé dans toute l'UE.",
    telemetry: {
      voltageLabel: "TENSION",
      voltageValue: "72V DC",
      voltageSub: "Bus Haute Décharge",
      powerLabel: "PUISSANCE CRÊTE",
      powerValue: "12 kW",
      powerSub: "Validé Banc Dyno",
      torqueLabel: "COUPLE ROUE",
      torqueValue: "280 Nm",
      torqueSub: "Instantané à la Roue",
      speedLabel: "VITESSE",
      speedValue: "85 km/h",
      speedSub: "Usage Circuit / Offroad"
    }
  },
  trust: {
    engineering: "Ingénierie Allemande",
    engineeringSub: "Données validées sur banc d'essai, connecteurs HiGo & bras de réaction CNC",
    adrLogistics: "Logistique ADR Classe 9",
    adrLogisticsSub: "Transport certifié sur palette pour batteries de traction 52V & 72V",
    plugAndPlay: "Conformité Légale",
    plugAndPlaySub: "Distinction stricte entre VAE 250W homologués et machines Off-Road",
    payment: "Paiements Sécurisés",
    paymentSub: "Virement SEPA, Klarna, iDEAL, BLIK & 5% de remise Crypto (Pas de PayPal)"
  },
  shopPage: {
    breadcrumb: "Boutique",
    title: "Motos Électriques, Kits Moteur & Composants 72V",
    subtitle: "Choisissez entre kits VAE 100% homologués voie publique (250W, EN 15194) et sportives offroad sans compromis (1000W–5000W, 72V).",
    filterAll: "Tous les articles",
    filterStVZOAll: "Tous les statuts légaux",
    filterStVZOOnly: "100% Homologué Voie Publique",
    filterOffroadOnly: "Sport Off-Road",
    sortBy: "Trier par",
    sortFeatured: "Recommandés / Bestsellers",
    sortPriceAsc: "Prix: Croissant",
    sortPriceDesc: "Prix: Décroissant",
    inStock: "En stock à l'entrepôt de Munich",
    adrNotice: "ADR Classe 9 Dangereux",
    viewProduct: "Détails & Spécifications",
    addToCart: "Ajouter au Panier",
    addedToCart: "Dans le Panier",
    details: "Détails",
    cryptoPrice: "Prix Crypto"
  },
  cart: {
    title: "Votre Panier",
    empty: "Votre panier est actuellement vide",
    emptySub: "Découvrez nos motos électriques 2026, kits de conversion et batteries.",
    startShopping: "Découvrir la Boutique",
    subtotal: "Sous-total",
    cryptoDiscount: "Remise Crypto 5% (BTC / USDT)",
    shipping: "Frais de Port",
    freeShippingNotice: "Livraison offerte dès 199 € pour accessoires (hors fret lourd / matières dangereuses)",
    total: "Total TTC",
    checkoutBtn: "Passer Commande / Préparer le Devis",
    vatNotice: "Tous les prix incluent la TVA de 19%, livraison calculée à l'étape suivante",
    paymentMethodsTitle: "Moyens de Paiement (Pas de PayPal, pas de saisie directe de carte) :",
    ageNotice: "En validant, vous certifiez être âgé(e) d'au moins 16 ans.",
    orderSuccessTitle: "Merci pour votre commande !"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE est le hub européen spécialisé dans les motos électriques haute performance, kits de conversion et batteries de traction 72V certifiées ADR 9.",
    legalNotice: "Les motos tout-terrain et kits >250W sont réservés au circuit privé. Les kits 250W sont homologués EN 15194 pour voie publique.",
    adrNotice: "Batteries de traction >100Wh soumises à la réglementation ADR 9 et expédiées exclusivement en emballages homologués ONU par transporteur spécialisé.",
    dispatchNotice: "Expédition express et fret sécurisé dans tous les pays de l'Union Européenne et en Suisse.",
    rightsReserved: "Tous droits réservés. Prix avec TVA allemande 19%, hors frais de port.",
    catalogCol: "Boutique & Systèmes",
    serviceCol: "Ingénierie & Service",
    legalCol: "Mentions Légales",
    contactCol: "Siège de Munich",
    impressum: "Mentions Légales",
    privacy: "Politique de Confidentialité (RGPD)",
    terms: "Conditions Générales (CGV)",
    revocation: "Droit de Rétractation",
    batteryNotice: "Notice Batteries & Recyclage",
    tracking: "Suivi de Livraison",
    subsidies: "Simulateur de Primes",
    compare: "Comparateur de Modèles"
  },
  faqItems: [
    {
      question: "Vos motos électriques et kits haute performance sont-ils homologués pour la route ?",
      answer: "Non, les motos et kits dépassant 250W ou 25 km/h sont des équipements sportifs tout-terrain sans autorisation de circulation publique. L'utilisation est strictement limitée aux propriétés privées ou circuits fermés. La seule exception est notre kit Pedelec 250W (EN 15194), 100% homologué pour la route."
    },
    {
      question: "Pourquoi ne proposez-vous pas PayPal ou de saisie directe de carte bancaire ?",
      answer: "Les équipements haute puissance et batteries ADR 9 sont souvent bloqués par les passerelles de paiement standard en raison de flags réglementaires. Nous utilisons des virements SEPA sécurisés, Klarna, iDEAL, BLIK et des cryptomonnaies avec une remise immédiate de 5%."
    },
    {
      question: "Comment fonctionne la remise Crypto de 5% (Bitcoin & USDT) ?",
      answer: "Sélectionnez Crypto comme mode de paiement lors de la validation de votre panier. La remise de 5% sera automatiquement appliquée. Après validation, vous recevrez notre adresse de dépôt et le taux de change actuel."
    },
    {
      question: "Comment sont expédiées les batteries 72V et les motos complètes ?",
      answer: "Les batteries >100Wh sont expédiées selon la réglementation ADR Classe 9 (UN 3480/3481) en emballages certifiés. Les motos complètes sont livrées sur palette par transporteur spécialisé avec rendez-vous téléphonique."
    },
    {
      question: "Y a-t-il une garantie et comment sont fournis les composants de rechange ?",
      answer: "Tous les articles bénéficient de la garantie légale européenne de 2 ans. Nous stockons toutes les pièces critiques (contrôleurs, BMS, faisceaux HiGo, écrans) dans notre dépôt de Munich pour un SAV rapide."
    },
    {
      question: "Puis-je commander en tant que revendeur ou atelier (B2B) ?",
      answer: "Oui. Les boutiques de vélos, concessionnaires et équipes de course avec un numéro de TVA intracommunautaire valide peuvent postuler via notre portail B2B pour des remises échelonnées et un approvisionnement prioritaire."
    }
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Motos Électriques & Dirt Bikes',
      description: 'Motos tout-terrain électriques haute performance pour circuits fermés et terrains privés.',
      legalStatus: 'Équipement Sportif Off-Road (Non autorisé sur route publique)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'Kits de Conversion & Moteurs',
      description: 'Kits de conversion pour vélos et VTT – des systèmes Pedelec 250W aux monstres Off-Road de 5000W.',
      legalStatus: 'Différencié : 250W Homologué Route / 1000W–5000W Off-Road'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Batteries & Chargeurs (ADR 9)',
      description: 'Batteries de traction lithium certifiées ADR 9 avec Smart BMS et chargeurs haute vitesse.',
      legalStatus: 'Matières Dangereuses ADR Classe 9 (UN 3480 / UN 3481) Transport de Fret'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Composants, Transmission & Cockpit',
      description: 'Bras de réaction renforcés, accélérateurs CNC, contrôleurs FOC, kits chaîne et freinage performance.',
      legalStatus: 'Composants Off-Road & Tuning'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Équipement de Sécurité & Accessoires',
      description: 'Casques certifiés ECE 22.06, protections de descente, phares LED homologués E et porte-vélos robustes.',
      legalStatus: 'Équipement de Sécurité Testé ECE & TÜV'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'Bundle Moteur HYPER-DRIVE 2000W & Batterie 52V (inc. Accélérateur CNC)',
      shortDescription: 'Moteur moyeu arrière brushless 2000W couplé à une batterie lithium-ion 52V et accélérateur CNC de précision.',
      description: 'Transformez votre VTT en une machine tout-terrain haute performance. Ce kit comprend un moteur 2000W, une batterie 52V avec Smart BMS, un contrôleur sinusoïdal et un écran LCD couleur. Usage strictement réservé aux terrains privés et circuits fermés.',
      legalNotice: 'Usage strictement réservé aux terrains privés et circuits fermés (Off-Road only). Non autorisé sur voie publique.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: 'Moto Dirt Électrique 2026 ETM™ RTR SPORT',
      shortDescription: 'L\'ETM RTR Sport 2026 offre une accélération maximale, une réponse instantanée et une géométrie renforcée.',
      description: 'Conçue pour les pistes de motocross exigeantes. Équipée d\'un moteur brushless haute efficacité, de fourches inversées réglables et de freins hydrauliques à 4 pistons. Équipement de course off-road dédié. Expédition ADR 9 par fret.',
      legalNotice: 'Équipement de course off-road dédié. Non autorisé sur route publique. Usage privé uniquement.'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Strike Cycles SHADOW 72V / 7kW Dirt Bike Électrique',
      shortDescription: 'Puissance motocross de 7000W crête avec architecture 72V sans compromis pour des vitesses extrêmes.',
      description: 'La Strike Cycles SHADOW délivre des performances 72V brutales. Châssis en alliage forgé ultra-léger, puissance de 7kW, amortissement réglable. Performances tout-terrain imparables.',
      legalNotice: 'Usage strictement réservé aux terrains privés et circuits fermés (Off-Road only).'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'Bundle Moteur ULTRA-DRIVE 3000W & Batterie 72V',
      shortDescription: 'Moteur moyeu 3000W combiné à une batterie 72V haute capacité, contrôleur programmable et accessoires.',
      description: 'Le pack de performance ultime pour vos constructions personnalisées. Comprend un moteur 3000W, une batterie 72V avec cellules haute décharge, un contrôleur 80A FOC et un écran couleur. Expédition ADR 9.',
      legalNotice: 'Usage strictement réservé aux terrains privés et circuits fermés (Off-Road only).'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Accélérateur CNC de Précision Genuine FX (Sur-Ron / Talaria / DIY)',
      shortDescription: 'Poignée d\'accélérateur en aluminium CNC haute précision avec roulements à billes pour une réponse linéaire sans décalage.',
      description: 'Élimine les à-coups au démarrage. Usiné en aluminium 6061-T6, capteurs Hall sans contact. Le standard pour Sur-Ron, Talaria et montages personnalisés.',
      legalNotice: 'Composant de tuning et de course pour e-motos et off-road.'
    },
    {
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      name: 'Kit Pedelec 250W Homologué Route (Conforme EN 15194)',
      shortDescription: 'Kit de conversion 250W 100% légal pour voie publique avec capteur de pédalage et coupure automatique à 25 km/h.',
      description: 'Convertissez votre vélo en un VAE conforme. Répond à la norme EN 15194. Puissance 250W, assistance jusqu\'à 25 km/h. Sans permis ni casque obligatoire dans l\'UE. Inclut batterie 36V et certificat.',
      legalNotice: 'Conforme EN 15194:2017+A1:2024 (250W, 25 km/h). Légal sur toutes les routes publiques et pistes cyclables.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'Batterie APEX 72V 42Ah (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'Batterie de traction 72V haute décharge avec cellules Molicel P42A et BMS intelligent 150A.',
      description: 'Conçue pour les e-motos 72V exigeantes. Cellules Molicel P42A, soudures laser nickel pur, monitoring Bluetooth en temps réel. Certifié ADR Classe 9.',
      legalNotice: 'Expédition ADR Classe 9 (UN 3480). Usage circuit et off-road uniquement.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Contrôleur Torp TC500 Plug-and-Play (jusqu\'à 25kW Crête)',
      shortDescription: 'Le contrôleur FOC leader pour Sur-Ron Light Bee et Talaria Sting avec support d\'écran natif.',
      description: 'Technologie FOC avancée. Gains de puissance extrêmes, réponse fluide. Détection automatique de batterie. App mobile pour réglages en direct.',
      legalNotice: 'Composant de tuning pour usage sur circuit et off-road.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'Législation Route, Pedelec & E-Moto : Faits pour l\'Europe 2026',
      excerpt: 'Quand un vélo électrique est-il légal ? Tout sur l\'EN 15194, les limites de 250W et l\'usage sur terrain privé.',
      category: "Guide Juridique"
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Batteries Lithium & Logistique ADR Classe 9 (UN 3480)',
      excerpt: "Pourquoi les batteries de traction de plus de 100 Wh sont soumises à des réglementations strictes sur les matières dangereuses.",
      category: "Technique & ADR"
    }
  ],
  searchPage: {
    breadcrumb: "Recherche",
    title: "Recherche & Index du Catalogue",
    subtitle: "Trouvez des motos électriques, kits de conversion, batteries 72V et guides juridiques.",
    placeholder: "Entrez un terme de recherche...",
    filterLabel: "Filtrer par statut légal :",
    productsFound: "Produits & Systèmes Correspondants",
    articlesFound: "Guides Juridiques & Blog Correspondants",
    noResults: "Aucun résultat trouvé."
  },
  legalContent: {
    agbTitle: "Conditions Générales (CGV)",
    privacyTitle: "Politique de Confidentialité (RGPD)",
    impressumTitle: "Mentions Légales",
    widerrufTitle: "Droit de Rétractation",
    batteryTitle: "Avis Batteries & Recyclage"
  },
  confirmation: {
    orderTitle: "Reçu de Commande & Instructions de Paiement",
    orderSubtitle: "Votre projet de commande a été enregistré avec succès.",
    orderRef: "Référence de Commande",
    productCol: "POSITION",
    totalCol: "MONTANT",
    cryptoNotice: "Remise Crypto 5%",
    sepaBankName: "BANQUE",
    sepaHolder: "TITULAIRE",
    inquiryTitle: "Merci pour votre demande !",
    inquirySubtitle: "Ticket ouvert avec succès.",
    b2bTitle: "Bienvenue dans le réseau de revendeurs !",
    b2bSubtitle: "Enregistrement B2B reçu avec succès.",
    whatsappVerify: "Vérifier la commande via WhatsApp",
    printReceipt: "Imprimer le reçu / Sauvegarder en PDF",
    continueShopping: "Retour à la boutique"
  }
});


// 4. Italian (it)
const it = createDictionary({
  nav: {
    shop: "Negozio & Catalogo",
    motos: "Moto Elettriche & Dirt",
    kits: "Kit di Conversione",
    batteries: "Batterie 72V & Caricatori",
    legalGuides: "Normative & Magazine",
    about: "Chi Siamo & Officina",
    faq: "Domande Frequenti",
    contact: "Contatto & Officina",
    b2b: "Portale B2B Rivenditori",
    compare: "Confronta Modelli",
    subsidies: "Incentivi E-Mobility",
    tracking: "Traccia Spedizione",
    cart: "Carrello",
    search: "Cerca modello, motore, volt...",
    lang: "Lingua",
    allCategories: "Tutti i Prodotti & Kit"
  },
  announcements: {
    cryptoDiscount: "Sconto immediato del 5% in Criptovaluta (Bitcoin & USDT)",
    freeShipping: "Consegna gratuita da 199 € per accessori e ricambi",
    adrSafety: "Certificato ADR Classe 9: Trasporto sicuro di merci pericolose per batterie",
    whatsappAdvice: "Consulenza tecnica diretta via WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Concierge Officina",
    status: "Online · Officina Monaco / Freising",
    subtitle: "Consulenza tecnica dai nostri ingegneri specializzati",
    whatsappFastLane: "WhatsApp Corsia Veloce",
    phoneDirect: "Chiama l'Officina di Monaco",
    emailTickets: "Apri un Ticket Email",
    faqDirect: "Domande Frequenti (FAQ)",
    availabilityNotice: "Lun–Ven 09:00–18:00 CET · Risposta ingegnere in < 2h",
    close: "Chiudi Chat",
    open: "Chat Officina"
  },
  hero: {
    badge: "INGEGNERIA TEDESCA & LOGISTICA CERTIFICATA ADR 9",
    h1: "ALTE PRESTAZIONI",
    h1Highlight: "E-MOTOS & PROPULSORI",
    subtitle: "La principale piattaforma europea per propulsori ad alto voltaggio, batterie di trazione 72V certificate ADR Classe 9 e kit Pedelec 100% legali EN 15194.",
    ctaShop: "Esplora Catalogo Completo",
    ctaKits: "Kit Conversione 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Officina centrale e centro di sviluppo vicino a Monaco di Baviera. Dati certificati su banco prova e spedizioni sicure in tutta Europa.",
    telemetry: {
      voltageLabel: "TENSIONE",
      voltageValue: "72V DC",
      voltageSub: "Bus Alto Scarico",
      powerLabel: "POTENZA PICCO",
      powerValue: "12 kW",
      powerSub: "Verificato Banco Dyno",
      torqueLabel: "COPPIA",
      torqueValue: "280 Nm",
      torqueSub: "Istantanea alla Ruota",
      speedLabel: "VELOCITÀ",
      speedValue: "85 km/h",
      speedSub: "Solo Off-Road"
    }
  },
  trust: {
    engineering: "Ingegneria Tedesca",
    engineeringSub: "Dati al banco prova, connettori HiGo e bracci di reazione CNC",
    adrLogistics: "Logistica ADR Classe 9",
    adrLogisticsSub: "Spedizione pallet certificata per pacchi batteria 52V e 72V",
    plugAndPlay: "Trasparenza Legale",
    plugAndPlaySub: "Separazione netta tra Pedelec 250W stradali e veicoli da gara",
    payment: "Pagamenti Sicuri",
    paymentSub: "Bonifico SEPA, Klarna, iDEAL, BLIK e sconto 5% Crypto (No PayPal)"
  },
  shopPage: {
    breadcrumb: "Negozio",
    title: "Moto Elettriche, Kit Motore & Componenti 72V",
    subtitle: "Scegli tra kit Pedelec 100% legali (250W, EN 15194) per uso stradale e moto offroad senza compromessi (1000W–5000W, 72V).",
    filterAll: "Tutti gli articoli",
    filterStVZOAll: "Tutti gli stati legali",
    filterStVZOOnly: "100% Legale Stradale",
    filterOffroadOnly: "Sport Off-Road",
    sortBy: "Ordina per",
    sortFeatured: "Consigliati / Bestseller",
    sortPriceAsc: "Prezzo: Crescente",
    sortPriceDesc: "Prezzo: Decrescente",
    inStock: "In magazzino a Monaco",
    adrNotice: "ADR Classe 9 Pericoloso",
    viewProduct: "Dettagli & Specifiche",
    addToCart: "Aggiungi al Carrello",
    addedToCart: "Nel Carrello",
    details: "Dettagli",
    cryptoPrice: "Prezzo Crypto"
  },
  cart: {
    title: "Il Tuo Carrello",
    empty: "Il carrello è attualmente vuoto",
    emptySub: "Scopri le nostre e-motos 2026, kit e batterie ad alte prestazioni.",
    startShopping: "Inizia lo Shopping",
    subtotal: "Subtotale",
    cryptoDiscount: "Sconto Crypto 5% (BTC / USDT)",
    shipping: "Spedizione",
    freeShippingNotice: "Spedizione gratuita da 199 € per accessori (esclusi carichi pesanti pallet ADR)",
    total: "Totale",
    checkoutBtn: "Procedi al Checkout / Prepara Ordine",
    vatNotice: "Tutti i prezzi includono IVA 19%, spedizione calcolata al passaggio successivo",
    paymentMethodsTitle: "Metodi di Pagamento (No PayPal, nessun inserimento diretto carta):",
    ageNotice: "Confermando dichiari di avere almeno 16 anni compiuti.",
    orderSuccessTitle: "Grazie per il tuo ordine!"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE è l'hub europeo specializzato in moto elettriche ad alte prestazioni, kit di conversione e batterie di trazione 72V certificate ADR 9.",
    legalNotice: "Le moto off-road e i kit >250W sono riservati ai circuiti privati. I kit 250W sono conformi EN 15194 per l'uso stradale.",
    adrNotice: "Batterie di trazione >100Wh soggette alla normativa ADR 9 e spedite esclusivamente in imballaggi omologati ONU tramite trasportatore specializzato.",
    dispatchNotice: "Spedizione express e pallet certificati in tutti i paesi dell'Unione Europea e Svizzera.",
    rightsReserved: "Tutti i diritti riservati. Prezzi con IVA tedesca 19%, escluse spese di spedizione.",
    catalogCol: "Negozio & Sistemi",
    serviceCol: "Ingegneria & Service",
    legalCol: "Note Legali",
    contactCol: "Sede di Monaco",
    impressum: "Note Legali",
    privacy: "Privacy Policy (GDPR)",
    terms: "Condizioni Generali",
    revocation: "Droit de Rétractation",
    batteryNotice: "Nota Batterie & Riciclo",
    tracking: "Traccia Spedizione",
    subsidies: "Incentivi E-Mobility",
    compare: "Confronta Modelli"
  },
  faqItems: [
    {
      question: "Le vostre moto elettriche e i kit ad alte prestazioni sono legali su strada?",
      answer: "No, le moto e i kit che superano i 250W o i 25 km/h sono attrezzature sportive dedicate al fuoristrada senza autorizzazione alla circolazione pubblica. L'uso è strettamente limitato a proprietà private o circuiti chiusi. L'unica eccezione è il nostro kit Pedelec da 250W (EN 15194), legale al 100% su strada."
    },
    {
      question: "Perché non offrite PayPal o l'inserimento diretto della carta di credito?",
      answer: "Le attrezzature ad alta potenza e le batterie ADR 9 sono spesso bloccate dai gateway di pagamento standard per motivi normativi. Utilizziamo bonifici SEPA sicuri, Klarna, iDEAL, BLIK e criptovalute con uno sconto immediato del 5%."
    },
    {
      question: "Come funziona lo sconto Crypto del 5% (Bitcoin & USDT)?",
      answer: "Seleziona Crypto come metodo di pagamento durante il checkout. Lo sconto del 5% verrà applicato automaticamente. Dopo la conferma, riceverai il nostro indirizzo di deposito e il tasso di cambio attuale."
    },
    {
      question: "Come vengono spedite le batterie 72V e le moto complete?",
      answer: "Le batterie >100Wh vengono spedite secondo la normativa ADR Classe 9 (UN 3480/3481) in imballaggi certificati. Le moto complete vengono consegnate su pallet con sponda idraulica e preavviso telefonico."
    },
    {
      question: "C'è una garanzia e come vengono forniti i ricambi?",
      answer: "Tutti gli articoli includono la garanzia legale europea di 2 anni. Disponiamo di tutti i ricambi critici (controller, BMS, cablaggi HiGo, display) nel nostro magazzino di Monaco per un'assistenza rapida."
    },
    {
      question: "Posso ordinare come rivenditore o officina (B2B)?",
      answer: "Sì. I negozi di biciclette, i concessionari e i team corse con una partita IVA valida possono fare richiesta tramite il nostro portale B2B per sconti a scaglioni e forniture prioritarie."
    }
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Moto Elettriche & Dirt Bikes',
      description: 'Moto off-road elettriche ad alte prestazioni per circuiti chiusi e proprietà private.',
      legalStatus: 'Attrezzatura Sportiva Off-Road (Non ammessa su strade pubbliche)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'Kit di Conversione & Moteurs',
      description: 'Kit di conversione per bici e MTB – dai sistemi Pedelec 250W ai mostri Off-Road da 5000W.',
      legalStatus: 'Differenziato: 250W Legale Stradale / 1000W–5000W Off-Road'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Batteries & Caricatori (ADR 9)',
      description: 'Batterie di trazione al litio certificate ADR 9 con Smart BMS e caricatori rapidi.',
      legalStatus: 'Merci Pericolose ADR Classe 9 (UN 3480 / UN 3481) Trasporto Pallet'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Componenti, Trasmissione & Cockpit',
      description: 'Bracci di reazione rinforzati, acceleratori CNC, controller FOC, kit catena e freni performance.',
      legalStatus: 'Componenti Off-Road & Tuning'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Equipaggiamento di Sicurezza & Accessori',
      description: 'Caschi certificati ECE 22.06, protezioni da downhill, fari LED omologati E e portabici rinforzati.',
      legalStatus: 'Sicurezza Testata ECE & TÜV'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'Bundle Motore HYPER-DRIVE 2000W & Batteria 52V (inc. Acceleratore CNC)',
      shortDescription: 'Potente motore mozzo posteriore brushless da 2000W abbinato a batteria da 52V e acceleratore CNC di precisione.',
      description: 'Trasforma la tua MTB in una macchina off-road ad alte prestazioni. Questo set include un motore da 2000W, batteria da 52V con Smart BMS, controller sinusoidale e display LCD a colori. Solo per uso in circuiti privati.',
      legalNotice: 'Rigorosamente per proprietà private e piste da corsa (solo Off-Road). Non ammesso su strade pubbliche.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: 'Moto Dirt Elettrica 2026 ETM™ RTR SPORT',
      shortDescription: 'L\'ETM RTR Sport 2026 offre accelerazione massima, risposta istantanea e geometria rinforzata.',
      description: 'Costruita per piste motocross esigenti. Motore brushless ad alta efficienza, forcelle a steli rovesciati regolabili e freni idraulici a 4 pistons. Equipaggiamento da gara off-road. Spedizione ADR 9.',
      legalNotice: 'Equipaggiamento da gara off-road. Non ammesso su strade pubbliche. Solo uso privato.'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Strike Cycles SHADOW 72V / 7kW Moto Dirt Elettrica',
      shortDescription: 'Potenza motocross 7000W picco con architettura 72V per velocità estreme.',
      description: 'La Strike Cycles SHADOW offre prestazioni 72V brutali. Telaio in lega forgiata ultraleggero, potenza di 7kW, sospensioni regolabili. Performance off-road inarrestabile.',
      legalNotice: 'Rigorosamente per proprietà private e piste da corsa (solo Off-Road).'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'Bundle Motore ULTRA-DRIVE 3000W & Batterie 72V',
      shortDescription: 'Motore mozzo 3000W combinato con batteria 72V ad alta capacità, controller programmabile e accessori.',
      description: 'Il pacchetto performance definitivo. Include motore 3000W, batteria 72V con celle ad alta scarica, controller FOC 80A e display a colori. Spedizione ADR 9.',
      legalNotice: 'Rigorosamente per proprietà private e piste da corsa (solo Off-Road).'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Acceleratore CNC di Precisione Genuine FX (Sur-Ron / Talaria / DIY)',
      shortDescription: 'Manopola acceleratore in alluminio CNC alta precisione con cuscinetti a sfera per risposta lineare.',
      description: 'Elimina gli scatti in partenza. Alluminio 6061-T6, sensori Hall senza contatto. Lo standard per Sur-Ron, Talaria e montaggi personalizzati.',
      legalNotice: 'Componente tuning e racing per e-motos e off-road.'
    },
    {
      slug: '202w-street-legal-pedelec-umbaussatz-stvzo',
      name: 'Kit Pedelec 250W Legale Stradale (Conforme EN 15194)',
      shortDescription: 'Kit conversione 250W 100% legale per strade pubbliche con sensore di pedalata e distacco a 25 km/h.',
      description: 'Converti la tua bici in una Pedelec conforme. Risponde alla norma EN 15194. Potenza 250W, assistenza fino a 25 km/h. Senza patente né casco obbligatorio in UE. Include batteria 36V.',
      legalNotice: 'Conforme EN 15194:2017+A1:2024 (250W, 25 km/h). Legale su tutte le strade pubbliche e piste ciclabili.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'Batterie APEX 72V 42Ah (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'Batteria trazione 72V alta scarica con celle Molicel P42A e BMS intelligente 150A.',
      description: 'Progettata per e-motos 72V. Celle Molicel P42A, saldature laser in nichel puro, monitoraggio Bluetooth in tempo reale. Certificato ADR Classe 9.',
      legalNotice: 'Spedizione ADR Classe 9 (UN 3480). Solo uso circuito e off-road.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Controller Torp TC500 Plug-and-Play (fino a 25kW Picco)',
      shortDescription: 'Il controller FOC leader per Sur-Ron Light Bee e Talaria Sting con supporto display nativo.',
      description: 'Tecnologia FOC avanzata. Incrementi di potenza estremi, risposta fluida. Rilevamento automatico batteria. App mobile per settaggi live.',
      legalNotice: 'Componente tuning per uso in circuito e off-road.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'Legislazione Stradale, Pedelec & E-Moto: Fatti per l\'Europa 2026',
      excerpt: 'Quando una bici elettrica è legale? Tutto su EN 15194, limiti 250W e uso su terreno privato.',
      category: "Guida Legale"
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Batterie al Litio & Logistica ADR Classe 9 (UN 3480)',
      excerpt: "Perché le batterie di trazione sopra i 100 Wh sono soggette a rigide normative sulle merci pericolose.",
      category: "Tecnica & ADR"
    }
  ],
  searchPage: {
    breadcrumb: "Ricerca",
    title: "Ricerca & Indice Catalogo",
    subtitle: "Trova e-motos, kit di conversione, batterie 72V e guide legali.",
    placeholder: "Inserisci termine di ricerca...",
    filterLabel: "Filtra per legalità stradale:",
    productsFound: "Prodotti & Sistemi Corrispondenti",
    articlesFound: "Guide Legali & Blog Corrispondenti",
    noResults: "Nessun risultato trovato."
  },
  legalContent: {
    agbTitle: "Condizioni Generali",
    privacyTitle: "Privacy Policy (GDPR)",
    impressumTitle: "Note Legali",
    widerrufTitle: "Diritto di Recesso",
    batteryTitle: "Nota Batterie & Riciclo"
  },
  confirmation: {
    orderTitle: "Ricevuta d'Ordine & Istruzioni di Pagamento",
    orderSubtitle: "La tua bozza d'ordine è stata registrata con successo.",
    orderRef: "Riferimento Ordine",
    productCol: "POSIZIONE",
    totalCol: "IMPORTO",
    cryptoNotice: "Sconto Crypto 5%",
    sepaBankName: "BANQUE",
    sepaHolder: "TITULAIRE",
    inquiryTitle: "Grazie per la tua richiesta!",
    inquirySubtitle: "Ticket aperto con successo.",
    b2bTitle: "Benvenuti nella rete dei rivenditori!",
    b2bSubtitle: "Registrazione B2B ricevuta con successo.",
    whatsappVerify: "Verifica l'ordine via WhatsApp",
    printReceipt: "Stampa ricevuta / Salva come PDF",
    continueShopping: "Torna allo Store"
  }
});


// 5. Spanish (es)
const es = createDictionary({
  nav: {
    shop: "Tienda & Catálogo",
    motos: "Motos Eléctricas & Dirt",
    kits: "Kits de Conversión",
    batteries: "Baterías 72V & Cargadores",
    legalGuides: "Guías Legales & Blog",
    about: "Nosotros & Taller",
    faq: "Preguntas Frecuentes",
    contact: "Contacto & Taller",
    b2b: "Portal B2B Mayoristas",
    compare: "Comparador de Modelos",
    subsidies: "Calculadora de Ayudas",
    tracking: "Seguimiento de Envío",
    cart: "Cesta",
    search: "Buscar modelo, motor, voltios...",
    lang: "Idioma",
    allCategories: "Todos los Productos & Kits"
  },
  announcements: {
    cryptoDiscount: "Descuento inmediato del 5% en Criptomoneda (Bitcoin & USDT)",
    freeShipping: "Envío gratuito a partir de 199 € en accesorios y recambios",
    adrSafety: "Certificado ADR Clase 9: Transporte seguro de mercancías peligrosas para baterías",
    whatsappAdvice: "Asesoramiento técnico directo vía WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Conserje de Taller",
    status: "En línea · Taller Múnich / Freising",
    subtitle: "Asesoramiento técnico de nuestros ingenieros especializados",
    whatsappFastLane: "WhatsApp Vía Rápida",
    phoneDirect: "Llamar al Taller de Múnich",
    emailTickets: "Abrir un Ticket por Email",
    faqDirect: "Preguntas Frecuentes (FAQ)",
    availabilityNotice: "Lun–Vie 09:00–18:00 CET · Respuesta ingeniero en < 2h",
    close: "Cerrar Chat",
    open: "Chat de Taller"
  },
  hero: {
    badge: "INGENIERÍA ALEMANA & LOGÍSTICA CERTIFICADA ADR 9",
    h1: "ALTO RENDIMIENTO",
    h1Highlight: "E-MOTOS & TRENES MOTRICES",
    subtitle: "La plataforma europea líder en sistemas de alto voltaje, baterías de tracción 72V certificadas ADR Clase 9 y kits Pedelec 100% legales EN 15194.",
    ctaShop: "Explorar Catálogo Completo",
    ctaKits: "Kits Motor 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Taller central y centro de desarrollo en Freising cerca de Múnich. Pruebas reales en banco y envíos seguros a toda Europa.",
    telemetry: {
      voltageLabel: "VOLTAJE",
      voltageValue: "72V DC",
      voltageSub: "Bus Alta Descarga",
      powerLabel: "POTENCIA PICO",
      powerValue: "12 kW",
      powerSub: "Validado en Banco",
      torqueLabel: "PAR MOTOR",
      torqueValue: "280 Nm",
      torqueSub: "Instantáneo en Rueda",
      speedLabel: "VELOCIDAD",
      speedValue: "85 km/h",
      speedSub: "Solo Off-Road"
    }
  },
  trust: {
    engineering: "Ingeniería Alemana",
    engineeringSub: "Datos reales de banco, conectores HiGo y brazos de torsión CNC",
    adrLogistics: "Logística ADR Clase 9",
    adrLogisticsSub: "Transporte certificado en palé para baterías de tracción 52V y 72V",
    plugAndPlay: "Claridad Legal",
    plugAndPlaySub: "Distinción estricta entre Pedelec 250W de calle y máquinas de circuito",
    payment: "Pagos Seguros",
    paymentSub: "Transferencia SEPA, Klarna, iDEAL, BLIK y 5% descuento Cripto (Sin PayPal)"
  },
  shopPage: {
    breadcrumb: "Tienda",
    title: "Motos Eléctricas, Kits Motor & Componentes 72V",
    subtitle: "Elija entre kits Pedelec 100% legales (250W, EN 15194) para uso vial y motos offroad sin concesiones (1000W–5000W, 72V).",
    filterAll: "Todos los artículos",
    filterStVZOAll: "Todos los estados legales",
    filterStVZOOnly: "100% Legal Vial",
    filterOffroadOnly: "Deporte Off-Road",
    sortBy: "Ordenar por",
    sortFeatured: "Recomendados / Bestsellers",
    sortPriceAsc: "Precio: Ascendente",
    sortPriceDesc: "Precio: Descendente",
    inStock: "En stock en Múnich",
    adrNotice: "ADR Clase 9 Peligroso",
    viewProduct: "Detalles & Especificaciones",
    addToCart: "Añadir a la Cesta",
    addedToCart: "En la Cesta",
    details: "Detalles",
    cryptoPrice: "Precio Crypto"
  },
  cart: {
    title: "Tu Cesta de Compra",
    empty: "Tu cesta está vacía actualmente",
    emptySub: "Descubre nuestras motos eléctricas 2026, kits y baterías de tracción.",
    startShopping: "Comenzar a Comprar",
    subtotal: "Subtotal",
    cryptoDiscount: "Descuento Cripto 5% (BTC / USDT)",
    shipping: "Envío",
    freeShippingNotice: "Envío gratis a partir de 199 € en piezas y accesorios",
    total: "Total",
    checkoutBtn: "Tramitar Pedido / Preparar Factura",
    vatNotice: "Precios con 19% IVA incluido, envío calculado en el siguiente paso",
    paymentMethodsTitle: "Métodos de Pago (Sin PayPal, sin pasarelas de tarjeta no verificadas):",
    ageNotice: "Al confirmar declaras tener al menos 16 años de edad.",
    orderSuccessTitle: "¡Gracias por tu pedido!"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE es el hub europeo especializado en motos eléctricas de alto rendimiento, kits de conversión y baterías de tracción 72V certificadas ADR 9.",
    legalNotice: "Las motos off-road y los kits >250W están reservados a circuitos privados. Los kits 250W cumplen EN 15194 para uso vial.",
    adrNotice: "Baterías de tracción >100Wh sujetas a la normativa ADR 9 y enviadas exclusivamente en embalajes homologados ONU mediante transportista especializado.",
    dispatchNotice: "Envío express y paletizado certificado en todos los países de la Unión Europea y Suiza.",
    rightsReserved: "Todos los derechos reservados. Precios con 19% de IVA alemán, sin gastos de envío.",
    catalogCol: "Tienda & Sistemas",
    serviceCol: "Ingeniería & Servicio",
    legalCol: "Notas Legales",
    contactCol: "Sede de Múnich",
    impressum: "Notas Legales",
    privacy: "Política de Privacidad (RGPD)",
    terms: "Condiciones Generales",
    revocation: "Derecho de Desistimiento",
    batteryNotice: "Nota Baterías & Reciclaje",
    tracking: "Seguimiento de Envío",
    subsidies: "Ayudas E-Mobility",
    compare: "Comparar Modelos"
  },
  faqItems: [
    {
      question: "¿Son legales vuestras motos eléctricas y kits de alto rendimiento en la calle?",
      answer: "No, las motos y kits que superan los 250W o 25 km/h son equipos deportivos para uso fuera de carretera sin autorización de circulación pública. El uso está estrictamente limitado a propiedades privadas o circuitos cerrados. La única excepción es nuestro kit Pedelec de 250W (EN 15194), 100% legal en la calle."
    },
    {
      question: "¿Por qué no ofrecen PayPal o la introducción directa de tarjeta de crédito?",
      answer: "Los equipos de alta potencia y las baterías ADR 9 suelen ser bloqueados por las pasarelas de pago estándar por motivos normativos. Utilizamos transferencias SEPA seguras, Klarna, iDEAL, BLIK y criptomonedas con un descuento inmediato del 5%."
    },
    {
      question: "¿Cómo funciona el descuento Cripto del 5% (Bitcoin & USDT)?",
      answer: "Seleccione Cripto como método de pago durante el checkout. El descuento del 5% se aplicará automáticamente. Tras la confirmación, recibirá nuestra dirección de depósito y el tipo de cambio actual."
    },
    {
      question: "¿Cómo se envían las baterías 72V y las motos completas?",
      answer: "Las baterías >100Wh se envían según la normativa ADR Clase 9 (UN 3480/3481) en embalajes certificados. Las motos completas se entregan en palé con plataforma elevadora y preaviso telefónico."
    },
    {
      question: "¿Hay garantía y cómo se suministran los repuestos?",
      answer: "Todos los artículos incluyen la garantía legal europea de 2 años. Disponemos de todos los repuestos críticos (controladores, BMS, cableados HiGo, pantallas) en nuestro almacén de Múnich para una asistencia rápida."
    },
    {
      question: "¿Puedo pedir como distribuidor o taller (B2B)?",
      answer: "Sí. Las tiendas de bicicletas, los concesionarios y los equipos de competición con un NIF-IVA válido pueden solicitar acceso a través de nuestro portal B2B para descuentos por volumen y suministros prioritarios."
    }
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Motos Eléctricas & Dirt Bikes',
      description: 'Motos off-road eléctricas de alto rendimiento para circuitos cerrados y propiedades privadas.',
      legalStatus: 'Equipo Deportivo Off-Road (No permitido en vías públicas)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'Kits de Conversión & Motores',
      description: 'Kits de conversión para bicis y MTB – desde sistemas Pedelec 250W hasta monstruos Off-Road de 5000W.',
      legalStatus: 'Diferenciado: 250W Legal Vial / 1000W–5000W Off-Road'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Baterías & Cargadores (ADR 9)',
      description: 'Baterías de tracción de litio certificadas ADR 9 con Smart BMS y cargadores rápidos.',
      legalStatus: 'Mercancías Peligrosas ADR Clase 9 (UN 3480 / UN 3481) Transporte Paletizado'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Componentes, Transmisión & Cockpit',
      description: 'Brazos de torsión reforzados, aceleradores CNC, controladores FOC, kits de cadena y frenos performance.',
      legalStatus: 'Componentes Off-Road & Tuning'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Equipo de Seguridad & Accesorios',
      description: 'Cascos certificados ECE 22.06, protecciones de descenso, faros LED homologados E y portabicis reforzados.',
      legalStatus: 'Seguridad Testada ECE & TÜV'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'Paquete Motor HYPER-DRIVE 2000W & Batería 52V (inc. Acelerador CNC)',
      shortDescription: 'Potente motor de cubo trasero sin escobillas de 2000W combinado con batería de 52V y acelerador CNC de precisión.',
      description: 'Transforme su MTB en una máquina off-road de alto rendimiento. Este conjunto incluye un motor de 2000W, batería de 52V con Smart BMS, controlador senoidal y pantalla LCD a color. Solo para uso en circuitos privados.',
      legalNotice: 'Estrictamente para propiedades privadas y pistas de carreras (solo Off-Road). No permitido en vías públicas.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: 'Moto Dirt Eléctrica 2026 ETM™ RTR SPORT',
      shortDescription: 'La ETM RTR Sport 2026 ofrece aceleración máxima, respuesta instantánea y geometría reforzada.',
      description: 'Construida para pistas de motocross exigentes. Motor brushless de alta eficiencia, horquillas invertidas ajustables y frenos hidráulicos de 4 pistones. Equipo de competición off-road. Envío ADR 9.',
      legalNotice: 'Equipo de competición off-road. No permitido en vías públicas. Solo uso privado.'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Strike Cycles SHADOW 72V / 7kW Moto Dirt Eléctrica',
      shortDescription: 'Potencia motocross 7000W pico con arquitectura 72V para velocidades extremas.',
      description: 'La Strike Cycles SHADOW ofrece prestaciones 72V brutales. Chasis de aleación forjada ultraligero, potencia de 7kW, suspensiones ajustables. Rendimiento off-road imparable.',
      legalNotice: 'Estrictamente para propiedades privadas y pistas de carreras (solo Off-Road).'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'Paquete Motor ULTRA-DRIVE 3000W & Batería 72V',
      shortDescription: 'Motor de cubo 3000W combinado con batería 72V de alta capacidad, controlador programable y accesorios.',
      description: 'El paquete de rendimiento definitivo. Incluye motor 3000W, batería 72V con celdas de alta descarga, controlador FOC 80A y pantalla a color. Envío ADR 9.',
      legalNotice: 'Estrictamente para propiedades privadas y pistas de carreras (solo Off-Road).'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Acelerador CNC de Precisión Genuine FX (Sur-Ron / Talaria / DIY)',
      shortDescription: 'Puño de acelerador en aluminio CNC de alta precisión con rodamientos de bolas para respuesta lineal.',
      description: 'Elimina los tirones al arrancar. Aluminio 6061-T6, sensores Hall sin contacto. El estándar para Sur-Ron, Talaria y montajes personalizados.',
      legalNotice: 'Componente de tuning y competición para e-motos y off-road.'
    },
    {
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      name: 'Kit Pedelec 250W Legal Vial (Conforme EN 15194)',
      shortDescription: 'Kit de conversión 250W 100% legal para vías públicas con sensor de pedaleo y corte automático a 25 km/h.',
      description: 'Convierta su bici en una Pedelec conforme. Responde a la norma EN 15194. Potencia 250W, asistencia hasta 25 km/h. Sin carné ni casco obligatorio en la UE. Incluye batería 36V.',
      legalNotice: 'Conforme EN 15194:2017+A1:2024 (250W, 25 km/h). Legal en todas las vías públicas y carriles bici.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'Batería APEX 72V 42Ah (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'Batería de tracción 72V de alta descarga con celdas Molicel P42A y BMS inteligente 150A.',
      description: 'Diseñada para e-motos 72V. Celdas Molicel P42A, soldaduras láser de níquel puro, monitorización Bluetooth en tiempo real. Certificado ADR Clase 9.',
      legalNotice: 'Envío ADR Clase 9 (UN 3480). Solo uso en circuito y off-road.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Controlador Torp TC500 Plug-and-Play (hasta 25kW Pico)',
      shortDescription: 'El controlador FOC líder para Sur-Ron Light Bee y Talaria Sting con soporte de pantalla nativo.',
      description: 'Tecnología FOC avanzada. Incrementos de potencia extremos, respuesta fluida. Detección automática de batería. App móvil para ajustes en vivo.',
      legalNotice: 'Componente de tuning para uso en circuito y off-road.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'Legislación Vial, Pedelec & E-Moto: Datos para Europa 2026',
      excerpt: '¿Cuándo es legal una bici eléctrica? Todo sobre EN 15194, límites 250W y uso en terreno privado.',
      category: "Guía Legal"
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Baterías de Litio & Logística ADR Clase 9 (UN 3480)',
      excerpt: "Por qué las baterías de tracción de más de 100 Wh están sujetas a estrictas normativas sobre mercancías peligrosas.",
      category: "Técnica & ADR"
    }
  ],
  searchPage: {
    breadcrumb: "Buscar",
    title: "Búsqueda e Índice del Catálogo",
    subtitle: "Encuentra e-motos, kits de conversión, baterías 72V y guías legales.",
    placeholder: "Introduce el término de búsqueda...",
    filterLabel: "Filtrar por legalidad vial:",
    productsFound: "Productos y Sistemas Coincidentes",
    articlesFound: "Guías Legales y Blog Coincidentes",
    noResults: "No se han encontrado resultados."
  },
  legalContent: {
    agbTitle: "Condiciones Generales",
    privacyTitle: "Política de Privacidad (RGPD)",
    impressumTitle: "Notas Legales",
    widerrufTitle: "Derecho de Desistimiento",
    batteryTitle: "Nota Baterías & Reciclaje"
  },
  confirmation: {
    orderTitle: "Recibo del Pedido e Instrucciones de Pago",
    orderSubtitle: "Tu borrador de pedido se ha registrado correctamente.",
    orderRef: "Referencia del Pedido",
    productCol: "POSICIÓN",
    totalCol: "IMPORTE",
    cryptoNotice: "Descuento Cripto 5%",
    sepaBankName: "BANCO",
    sepaHolder: "TITULAR",
    inquiryTitle: "¡Gracias por tu consulta!",
    inquirySubtitle: "Ticket abierto correctamente.",
    b2bTitle: "¡Bienvenido a la red de distribuidores!",
    b2bSubtitle: "Registro B2B recibido correctamente.",
    whatsappVerify: "Verificar pedido por WhatsApp",
    printReceipt: "Imprimir recibo / Guardar como PDF",
    continueShopping: "Volver a la tienda"
  }
});


// 6. Portuguese (pt)
const pt = createDictionary({
  nav: {
    shop: "Loja & Catálogo",
    motos: "Motos Elétricas & Dirt",
    kits: "Kits de Conversão",
    batteries: "Baterias 72V & Carregadores",
    legalGuides: "Guias Legais & Revista",
    about: "Sobre Nós & Oficina",
    faq: "Perguntas Frequentes",
    contact: "Contacto & Oficina",
    b2b: "Portal B2B Revendedores",
    compare: "Comparador de Modelos",
    subsidies: "Calculadora de Incentivos",
    tracking: "Rastreio de Encomenda",
    cart: "Carrinho",
    search: "Pesquisar modelo, motor...",
    lang: "Idioma",
    allCategories: "Todos os Produtos & Kits"
  },
  announcements: {
    cryptoDiscount: "Desconto imediato de 5% em Criptomoeda (Bitcoin & USDT)",
    freeShipping: "Envio gratuito a partir de 199 € em acessórios e peças",
    adrSafety: "Certificado ADR Classe 9: Transporte seguro de mercadorias perigosas para baterias",
    whatsappAdvice: "Aconselhamento técnico direto via WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Concierge de Oficina",
    status: "Online · Oficina Munique / Freising",
    subtitle: "Aconselhamento técnico dos nossos engenheiros especializados",
    whatsappFastLane: "WhatsApp Via Rápida",
    phoneDirect: "Ligar para a Oficina de Munique",
    emailTickets: "Abrir um Ticket por Email",
    faqDirect: "Perguntas Frequentes (FAQ)",
    availabilityNotice: "Seg–Sex 09:00–18:00 CET · Resposta engenheiro em < 2h",
    close: "Fechar Chat",
    open: "Chat de Oficina"
  },
  hero: {
    badge: "ENGENHARIA ALEMÃ & LOGÍSTICA CERTIFICADA ADR 9",
    h1: "ALTA PERFORMANCE",
    h1Highlight: "E-MOTOS & PROPULSORES",
    subtitle: "A plataforma europeia de referência em propulsão elétrica de alta potência, baterias de tração 72V certificadas ADR Classe 9 e kits Pedelec 100% legais EN 15194.",
    ctaShop: "Ver Catálogo Completo",
    ctaKits: "Kits de Conversão 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Oficina e centro de engenharia perto de Munique. Dados reais validados em banco dinamométrico e envios seguros para toda a UE.",
    telemetry: {
      voltageLabel: "TENSÃO",
      voltageValue: "72V DC",
      voltageSub: "Barramento Alta Taxa",
      powerLabel: "POTÊNCIA PICO",
      powerValue: "12 kW",
      powerSub: "Validado em Banco",
      torqueLabel: "BINÁRIO",
      torqueValue: "280 Nm",
      torqueSub: "Instantâneo na Roda",
      speedLabel: "VELOCIDADE",
      speedValue: "85 km/h",
      speedSub: "Apenas Off-Road"
    }
  },
  trust: {
    engineering: "Engenharia Alemã",
    engineeringSub: "Dados reais de banco, conectores HiGo e braços de torção CNC",
    adrLogistics: "Logística ADR Classe 9",
    adrLogisticsSub: "Transporte certificado em palete para baterias de tração 52V e 72V",
    plugAndPlay: "Claridade Legal",
    plugAndPlaySub: "Distinção estrita entre Pedelec 250W de estrada e máquinas de circuito",
    payment: "Pagamentos Seguros",
    paymentSub: "Transferência SEPA, Klarna, iDEAL, BLIK e 5% desconto Cripto (Sem PayPal)"
  },
  shopPage: {
    breadcrumb: "Loja",
    title: "Motos Elétricas, Kits Motor & Componentes 72V",
    subtitle: "Escolha entre kits Pedelec 100% legais (250W, EN 15194) para uso rodoviário e motos offroad sem concessões (1000W–5000W, 72V).",
    filterAll: "Todos os artigos",
    filterStVZOAll: "Todos os estados legais",
    filterStVZOOnly: "100% Legal Rodoviário",
    filterOffroadOnly: "Desporto Off-Road",
    sortBy: "Ordenar por",
    sortFeatured: "Recomendados / Bestsellers",
    sortPriceAsc: "Preço: Ascendente",
    sortPriceDesc: "Preço: Descendente",
    inStock: "Em stock em Munique",
    adrNotice: "ADR Classe 9 Perigoso",
    viewProduct: "Detalhes & Especificações",
    addToCart: "Adicionar ao Carrinho",
    addedToCart: "No Carrinho",
    details: "Detalhes",
    cryptoPrice: "Preço Crypto"
  },
  cart: {
    title: "O Seu Carrinho",
    empty: "O seu carrinho está atualmente vazio",
    emptySub: "Descubra as nossas e-motos 2026, kits de conversão e baterias de tração.",
    startShopping: "Iniciar Compras",
    subtotal: "Subtotal",
    cryptoDiscount: "Desconto Cripto 5% (BTC / USDT)",
    shipping: "Portes de Envio",
    freeShippingNotice: "Envio gratuito a partir de 199 € em acessórios e peças",
    total: "Total",
    checkoutBtn: "Finalizar Pedido / Obter Fatura Proforma",
    vatNotice: "Todos os preços incluem IVA de 19%, portes calculados no passo seguinte",
    paymentMethodsTitle: "Métodos de Pagamento (Sem PayPal, sem formulários inseguros):",
    ageNotice: "Ao confirmar declara ter pelo menos 16 anos de idade.",
    orderSuccessTitle: "Obrigado pelo seu pedido!"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE é o hub europeu especializado em motos elétricas de alta performance, kits de conversão e baterias de tração 72V certificadas ADR 9.",
    legalNotice: "As motos off-road e os kits >250W estão reservados a circuitos privados. Os kits 250W cumprem EN 15194 para uso rodoviário.",
    adrNotice: "Baterias de tração >100Wh sujeitas à normativa ADR 9 e enviadas exclusivamente em embalagens homologadas ONU mediante transportador especializado.",
    dispatchNotice: "Envio express e paletizado certificado em todos os países da União Europeia e Suíça.",
    rightsReserved: "Todos os direitos reservados. Preços com 19% de IVA alemão, sem portes de envio.",
    catalogCol: "Loja & Sistemas",
    serviceCol: "Engenharia & Serviço",
    legalCol: "Notas Legais",
    contactCol: "Sede de Munique",
    impressum: "Notas Legales",
    privacy: "Política de Privacidade (RGPD)",
    terms: "Condições Gerais",
    revocation: "Direito de Livre Resolución",
    batteryNotice: "Nota Baterias & Reciclagem",
    tracking: "Rastreio de Encomenda",
    subsidies: "Incentivos E-Mobility",
    compare: "Comparar Modelos"
  },
  faqItems: [
    {
      question: "As vossas motos elétricas e kits de alta performance são legais na estrada?",
      answer: "Não, as motos e kits que excedem 250W ou 25 km/h são equipamentos desportivos para uso fora de estrada sem autorização de circulação pública. O uso está estritamente limitado a propriedades privadas ou circuitos fechados. A única exceção é o nosso kit Pedelec de 250W (EN 15194), 100% legal na estrada."
    },
    {
      question: "Por que não oferecem PayPal ou a introdução direta de cartão de crédito?",
      answer: "Os equipamentos de alta potência e as baterias ADR 9 são frequentemente bloqueados pelos gateways de pagamento padrão por motivos normativos. Utilizamos transferências SEPA seguras, Klarna, iDEAL, BLIK e criptomoedas com um desconto imediato de 5%."
    },
    {
      question: "Como funciona o desconto Cripto de 5% (Bitcoin & USDT)?",
      answer: "Selecione Cripto como método de pagamento durante o checkout. O desconto de 5% será aplicado automaticamente. Após a confirmação, receberá o nosso endereço de depósito e a taxa de câmbio atual."
    },
    {
      question: "Como são enviadas as baterias 72V e as motos completas?",
      answer: "As baterias >100Wh são enviadas de acordo com a normativa ADR Classe 9 (UN 3480/3481) em embalagens certificadas. As motos completas são entregues em palete com plataforma elevatória e aviso telefónico."
    },
    {
      question: "Existe garantia e como são fornecidas as peças de reposição?",
      answer: "Todos os artigos incluem a garantia legal europeia de 2 anos. Dispomos de todas as peças críticas (controladores, BMS, cablagens HiGo, ecrãs) no nosso armazém de Munique para uma assistência rápida."
    },
    {
      question: "Posso encomendar como revendedor ou oficina (B2B)?",
      answer: "Sim. As lojas de bicicletas, os concessionários e as equipas de competição com um número de IVA intracomunitário válido podem solicitar acesso através do nosso portal B2B para descontos por volume."
    }
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Motos Elétricas & Dirt Bikes',
      description: 'Motos off-road elétricas de alta performance para circuitos fechados e propriedades privadas.',
      legalStatus: 'Equipamento Desportivo Off-Road (Não permitido em vias públicas)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'Kits de Conversão & Motores',
      description: 'Kits de conversão para bicicletas e BTT – desde sistemas Pedelec 250W até monstros Off-Road de 5000W.',
      legalStatus: 'Diferenciado: 250W Legal Rodoviário / 1000W–5000W Off-Road'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Baterias & Carregadores (ADR 9)',
      description: 'Baterias de tração de lítio certificadas ADR 9 com Smart BMS e carregadores rápidos.',
      legalStatus: 'Mercadorias Perigosas ADR Classe 9 (UN 3480 / UN 3481) Transporte Paletizado'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Componentes, Transmissão & Cockpit',
      description: 'Braços de torção reforçados, aceleradores CNC, controladores FOC, kits de corrente e travagem performance.',
      legalStatus: 'Componentes Off-Road & Tuning'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Equipamento de Segurança & Acessórios',
      description: 'Capacetes certificados ECE 22.06, proteções de downhill, faróis LED homologados E e suportes de bicicleta reforçados.',
      legalStatus: 'Segurança Testada ECE & TÜV'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'Pacote Motor HYPER-DRIVE 2000W & Bateria 52V (inc. Acelerador CNC)',
      shortDescription: 'Potente motor de cubo traseiro sem escovas de 2000W combinado com bateria de 52V e acelerador CNC de precisão.',
      description: 'Transforme a sua BTT numa máquina off-road de alta performance. Este conjunto inclui um motor de 2000W, bateria de 52V com Smart BMS, controlador senoidal e ecrã LCD a cores. Apenas para uso em circuitos privados.',
      legalNotice: 'Estritamente para propriedades privadas e pistas de corridas (apenas Off-Road). Não permitido em vias públicas.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: 'Moto Dirt Elétrica 2026 ETM™ RTR SPORT',
      shortDescription: 'A ETM RTR Sport 2026 oferece aceleração máxima, resposta instantânea e geometria reforçada.',
      description: 'Construída para pistas de motocross exigentes. Motor brushless de alta eficiência, forquilhas invertidas ajustáveis e travões hidráulicos de 4 pistões. Equipamento de competição off-road. Envio ADR 9.',
      legalNotice: 'Equipamento de competição off-road. Não permitido em vias públicas. Apenas uso privado.'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Strike Cycles SHADOW 72V / 7kW Moto Dirt Elétrica',
      shortDescription: 'Potência motocross 7000W pico com arquitetura 72V para velocidades extremas.',
      description: 'A Strike Cycles SHADOW oferece prestações 72V brutais. Chassis de liga forjada ultraleve, potência de 7kW, suspensões ajustáveis. Rendimento off-road imparável.',
      legalNotice: 'Estritamente para propriedades privadas e pistas de corridas (apenas Off-Road).'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'Pacote Motor ULTRA-DRIVE 3000W & Bateria 72V',
      shortDescription: 'Motor de cubo 3000W combinado com bateria 72V de alta capacidade, controlador programável e acessórios.',
      description: 'O pacote de rendimento definitivo. Inclui motor 3000W, bateria 72V com células de alta descarga, controlador FOC 80A e ecrã a cores. Envio ADR 9.',
      legalNotice: 'Estritamente para propriedades privadas e pistas de corridas (apenas Off-Road).'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Acelerador CNC de Precisão Genuine FX (Sur-Ron / Talaria / DIY)',
      shortDescription: 'Punho de acelerador em alumínio CNC de alta precisão com rolamentos de esferas para resposta linear.',
      description: 'Elimina os solavancos ao arrancar. Alumínio 6061-T6, sensores Hall sem contacto. O padrão para Sur-Ron, Talaria e montagens personalizadas.',
      legalNotice: 'Componente de tuning e competição para e-motos e off-road.'
    },
    {
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      name: 'Kit Pedelec 250W Legal Rodoviário (Conforme EN 15194)',
      shortDescription: 'Kit de conversão 250W 100% legal para vias públicas com sensor de pedalagem e corte automático a 25 km/h.',
      description: 'Converta a sua bicicleta numa Pedelec conforme. Responde à norma EN 15194. Potência 250W, assistência até 25 km/h. Sem carta nem capacete obrigatório na UE. Inclui bateria 36V.',
      legalNotice: 'Conforme EN 15194:2017+A1:2024 (250W, 25 km/h). Legal em todas as vias públicas e ciclovias.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'Bateria APEX 72V 42Ah (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'Bateria de tração 72V de alta descarga com células Molicel P42A e BMS inteligente 150A.',
      description: 'Concebida para e-motos 72V. Células Molicel P42A, soldaduras laser de níquel puro, monitorização Bluetooth em tempo real. Certificado ADR Classe 9.',
      legalNotice: 'Envio ADR Classe 9 (UN 3480). Apenas uso em circuito e off-road.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Controlador Torp TC500 Plug-and-Play (até 25kW Pico)',
      shortDescription: 'O controlador FOC líder para Sur-Ron Light Bee e Talaria Sting com suporte de ecrã nativo.',
      description: 'Tecnologia FOC avançada. Incrementos de potência extremos, resposta fluida. Deteção automática de bateria. App móvel para ajustes ao vivo.',
      legalNotice: 'Componente de tuning para uso em circuito e off-road.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'Legislação Rodoviária, Pedelec & E-Moto: Dados para Europa 2026',
      excerpt: 'Quando é legal uma bicicleta elétrica? Tudo sobre EN 15194, limites 250W e uso em terreno privado.',
      category: "Guia Legal"
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Baterias de Lítio & Logística ADR Classe 9 (UN 3480)',
      excerpt: "Por que as baterias de tração de mais de 100 Wh estão sujeitas a normas rigorosas sobre mercadorias perigosas.",
      category: "Técnica & ADR"
    }
  ],
  searchPage: {
    breadcrumb: "Pesquisar",
    title: "Pesquisa & Índice do Catálogo",
    subtitle: "Encontre e-motos, kits de conversão, baterias 72V e guias legais.",
    placeholder: "Introduza o termo de pesquisa...",
    filterLabel: "Filtrar por legalidade rodoviária:",
    productsFound: "Produtos e Sistemas Correspondentes",
    articlesFound: "Guias Legais e Revista Correspondentes",
    noResults: "Não foram encontrados resultados."
  },
  legalContent: {
    agbTitle: "Condições Gerais",
    privacyTitle: "Política de Privacidade (RGPD)",
    impressumTitle: "Notas Legais",
    widerrufTitle: "Direito de Livre Resolución",
    batteryTitle: "Nota Baterias & Reciclagem"
  },
  confirmation: {
    orderTitle: "Recibo de Encomenda & Instruções de Pagamento",
    orderSubtitle: "O seu rascunho de encomenda foi registado com sucesso.",
    orderRef: "Referência de Encomenda",
    productCol: "POSIÇÃO",
    totalCol: "MONTANTE",
    cryptoNotice: "Desconto Cripto 5%",
    sepaBankName: "BANCO",
    sepaHolder: "TITULAR",
    inquiryTitle: "Obrigado pelo seu contacto!",
    inquirySubtitle: "Ticket aberto com sucesso.",
    b2bTitle: "Bem-vindo à rede de revendedores!",
    b2bSubtitle: "Registo B2B recebido com sucesso.",
    whatsappVerify: "Verificar encomenda por WhatsApp",
    printReceipt: "Imprimir recibo / Guardar como PDF",
    continueShopping: "Voltar à loja"
  }
});


// 7. Dutch (nl)
const nl = createDictionary({
  nav: {
    shop: "Winkel & Catalogus",
    motos: "E-Motto's & Dirt Bikes",
    kits: "Ombouwsets",
    batteries: "72V Accu's & Laders",
    legalGuides: "Wetgeving & Magazin",
    about: "Over Ons & Werkplaats",
    faq: "Veelgestelde Vragen",
    contact: "Contact & Werkplaats",
    b2b: "B2B Dealerportaal",
    compare: "Modellen Vergelijken",
    subsidies: "Subsidie Calculator",
    tracking: "Zending Volgen",
    cart: "Winkelwagen",
    search: "Zoek model, motor of volts...",
    lang: "Taal",
    allCategories: "Alle Producten & Ombouwsets"
  },
  announcements: {
    cryptoDiscount: "5% Directe korting bij betaling met Crypto (Bitcoin & USDT)",
    freeShipping: "Gratis verzending vanaf 199 € voor accessoires & onderdelen binnen DE",
    adrSafety: "Gecertificeerd ADR Klasse 9: Veilig transport van gevaarlijke goederen voor accu's",
    whatsappAdvice: "Technisch advies via WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Werkplaats-Concierge",
    status: "Online · Werkplaats München / Freising",
    subtitle: "Persoonlijk advies door onze meesterwerkplaats",
    whatsappFastLane: "WhatsApp Fast-Lane",
    phoneDirect: "Bel Centrale München",
    emailTickets: "E-mail Ticket openen",
    faqDirect: "Veelgestelde Vragen (FAQ)",
    availabilityNotice: "Ma–Vr 09:00–18:00 CET · Ingenieur antwoordt in < 2 uur",
    close: "Chat sluiten",
    open: "Werkplaats-Chat"
  },
  hero: {
    badge: "DUITSE INGENIEURSKUNST & ADR 9 LOGISTIEK",
    h1: "HIGH-PERFORMANCE",
    h1Highlight: "E-MOTO'S & AANDRIJVINGEN",
    subtitle: "Europa's toonaangevend platform voor hoogvoltage aandrijvingen, gecertificeerde 72V tractie-accu's volgens ADR Klasse 9 en 100% legale 250W pedelec ombouwsets (EN 15194).",
    ctaShop: "Bekijk de Catalogus",
    ctaKits: "Ombouwsets 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Centrale werkplaats en ontwikkelingslocatie nabij München. Echte testbankgegevens, HiGo-kabels en betrouwbaar transport naar Nederland en België.",
    telemetry: {
      voltageLabel: "SPANNING",
      voltageValue: "72V DC",
      voltageSub: "High-Rate Bus",
      powerLabel: "PIEKVERMOGEN",
      powerValue: "12 kW",
      powerSub: "Dyno Geverifieerd",
      torqueLabel: "KOPPEL",
      torqueValue: "280 Nm",
      torqueSub: "Direct op het Wiel",
      speedLabel: "SNELHEID",
      speedValue: "85 km/h",
      speedSub: "Alleen Off-Road"
    }
  },
  trust: {
    engineering: "Duitse Kwaliteit",
    engineeringSub: "Echte dyno-metingen, industriële HiGo-stekkers en CNC-reactiearmen",
    adrLogistics: "ADR Klasse 9 Gevaarlijke Stoffen",
    adrLogisticsSub: "Gecertificeerd pallettransport voor 52V & 72V tractie-accu's",
    plugAndPlay: "Wettelijke Duidelijkheid",
    plugAndPlaySub: "Strikt onderscheid tussen 250W straatlegale pedelecs en offroad racers",
    payment: "Veilig Betalen",
    paymentSub: "SEPA overboeking, iDEAL, Klarna, BLIK en 5% Crypto korting (Geen PayPal)"
  },
  shopPage: {
    breadcrumb: "Winkel",
    title: "E-Motto's, Ombouwsets & 72V Componenten",
    subtitle: "Kies tussen 100% legale pedelec ombouwsets (250W, EN 15194) voor de openbare weg en compromisloze offroad machines (1000W–5000W, 72V).",
    filterAll: "Alle artikelen",
    filterStVZOAll: "Alle statuten",
    filterStVZOOnly: "100% Legaal Weg",
    filterOffroadOnly: "Offroad Sport",
    sortBy: "Sorteren op",
    sortFeatured: "Aanbevolen / Bestsellers",
    sortPriceAsc: "Prijs: Laag naar hoog",
    sortPriceDesc: "Prijs: Hoog naar laag",
    inStock: "Op voorraad in München",
    adrNotice: "ADR Klasse 9 Gevaarlijk",
    viewProduct: "Details & Specificaties",
    addToCart: "In Winkelwagen",
    addedToCart: "In Winkelwagen",
    details: "Details",
    cryptoPrice: "Crypto Prijs"
  },
  cart: {
    title: "Uw Winkelwagen",
    empty: "Uw winkelwagen is momenteel leeg",
    emptySub: "Ontdek onze 2026 e-motto's, ombouwsets en tractie-accu's.",
    startShopping: "Begin met Winkelen",
    subtotal: "Subtotaal",
    cryptoDiscount: "5% Crypto Korting (BTC / USDT)",
    shipping: "Verzendkosten",
    freeShippingNotice: "Gratis verzending vanaf 199 € voor accessoires & onderdelen",
    total: "Totaal",
    checkoutBtn: "Afrekenen / Bestelling Voorbereiden",
    vatNotice: "Prijzen inclusief 19% btw, verzending berekend in de volgende stap",
    paymentMethodsTitle: "Betaalmethoden (Inclusief iDEAL, geen PayPal):",
    ageNotice: "Met uw bestelling bevestigt u minimaal 16 jaar oud te zijn.",
    orderSuccessTitle: "Hartelijk dank voor uw bestelling!"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE is de gespecialiseerde Europese hub voor high-performance e-motto's, ombouwsets en ADR Klasse 9 gecertificeerde 72V tractie-accu's.",
    legalNotice: "Offroad-modellen en sets >250W zijn niet toegestaan op de openbare weg. 250W Pedelec-systemen voldoen aan EN 15194.",
    adrNotice: "Accu's >100Wh vallen onder ADR 9 en worden uitsluitend in UN-gekeurde verpakkingen per gespecialiseerd transport verzonden.",
    dispatchNotice: "Express- en palletverzending naar alle EU-lidstaten en Zwitserland.",
    rightsReserved: "Alle rechten voorbehouden. Prijzen incl. 19% Duitse btw, excl. verzendkosten.",
    catalogCol: "Shop & Systemen",
    serviceCol: "Techniek & Service",
    legalCol: "Juridisch",
    contactCol: "Hoofdkantoor München",
    impressum: "Colofon",
    privacy: "Privacybeleid (AVG)",
    terms: "Algemene Voorwaarden",
    revocation: "Herroepingsrecht",
    batteryNotice: "Batterij-informatie",
    tracking: "Zending Volgen",
    subsidies: "Subsidie Calculator",
    compare: "Modellen Vergelijken"
  },
  faqItems: [
    {
      question: "Zijn uw elektrische motorfietsen en krachtige ombouwsets legaal op de weg?",
      answer: "Nee, motorfietsen en sets van meer dan 250W of 25 km/u zijn speciale off-road sportartikelen zonder wegtoelating. Gebruik is strikt beperkt tot privéterrein of gesloten circuits. De enige uitzondering is onze 250W Pedelec-set (EN 15194), die 100% legaal is op de weg."
    },
    {
      question: "Waarom biedt u geen PayPal of directe creditcardbetaling aan?",
      answer: "High-power apparatuur en ADR 9 accu's worden vaak geblokkeerd door standaard betaalsystemen vanwege regelgeving. Wij gebruiken beveiligde SEPA-overboekingen, Klarna, iDEAL, BLIK en cryptovaluta met 5% directe korting."
    },
    {
      question: "Hoe werkt de 5% Crypto-korting (Bitcoin & USDT)?",
      answer: "Selecteer Crypto als betaalmethode bij het afrekenen. De korting van 5% wordt automatisch toegepast. Na bevestiging ontvangt u ons wallet-adres en de actuele wisselkoers."
    },
    {
      question: "Hoe worden 72V tractie-accu's en complete motoren verzonden?",
      answer: "Accu's >100Wh worden verzonden volgens ADR Klasse 9 (UN 3480/3481) in gecertificeerde verpakkingen. Complete motoren worden op pallet geleverd met laadklep en telefonische afspraak."
    },
    {
      question: "Is er garantie en hoe zit het met reserveonderdelen?",
      answer: "Alle artikelen vallen onder de wettelijke Europese garantie van 2 jaar. Wij hebben alle kritieke onderdelen (controllers, BMS, HiGo-kabels, displays) op voorraad in ons magazijn in München."
    },
    {
      question: "Kan ik als dealer of werkplaats (B2B) bestellen?",
      answer: "Ja. Rijwielzaken, dealers en raceteams met een geldig btw-nummer kunnen via ons B2B-portaal toegang aanvragen voor staffelkortingen en prioritaire levering."
    }
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Complete E-Motto\'s & Dirt Bikes',
      description: 'Krachtige elektrische offroad-motorfietsen voor gesloten circuits en privéterrein.',
      legalStatus: 'Offroad Sportuitrusting (Niet toegestaan op openbare weg)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'Ombouwsets & Motoren',
      description: 'Ombouwsets voor fietsen en MTB\'s – van 250W legale pedelecs tot 5000W offroad-monsters.',
      legalStatus: 'Gedifferentieerd: 250W Legaal Weg / 1000W–5000W Offroad'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Accu\'s & Laders (ADR 9)',
      description: 'Gecertificeerde ADR 9 lithium tractie-accu\'s met Smart BMS en snelladers.',
      legalStatus: 'ADR Klasse 9 Gevaarlijke Stoffen (UN 3480 / UN 3481) Palletvervoer'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Componenten, Aandrijving & Cockpit',
      description: 'Versterkte reactiearmen, CNC gashendels, FOC-controllers, kettingsets en remmen.',
      legalStatus: 'Offroad & Tuning Onderdelen'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Veiligheidsuitrusting & Accessoires',
      description: 'ECE 22.06 helmen, downhill-protectie, E-keur LED-koplampen en zware fietsendragers.',
      legalStatus: 'ECE & TÜV Geteste Veiligheid'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'HYPER-DRIVE 2000W Motor & 52V Accu Pakket (incl. CNC Gashendel)',
      shortDescription: 'Krachtige 2000W borstelloze achternaafmotor gecombineerd met 52V accu en precisie CNC-gashendel.',
      description: 'Verander uw MTB in een high-performance offroad machine. Set bevat 2000W motor, 52V accu met Smart BMS, sinuscontroller en LCD-kleurendisplay. Alleen voor privéterrein.',
      legalNotice: 'Strikt voor privéterrein en circuits (alleen Off-Road). Niet toegestaan op openbare weg.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: '2026 ETM™ RTR SPORT Elektrische Dirt Bike',
      shortDescription: 'De 2026 ETM RTR Sport biedt maximale acceleratie, directe gasrespons en versterkte geometrie.',
      description: 'Gebouwd voor veeleisende motocross-circuits. Brushless motor, verstelbare Upside-Down voorvork en hydraulische 4-zuiger remmen. Offroad wedstrijduitrusting. ADR 9 transport.',
      legalNotice: 'Offroad wedstrijduitrusting. Niet toegestaan op openbare weg. Alleen privégebruik.'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Strike Cycles SHADOW 72V / 7kW Elektrische Dirt Bike',
      shortDescription: '7000W Piek motocross-power met 72V-architectuur voor extreme snelheden.',
      description: 'De Strike Cycles SHADOW levert brute 72V-prestaties. Ultralicht gesmeed frame, 7kW vermogen, volledig verstelbare demping. Onstuitbare offroad prestaties.',
      legalNotice: 'Strikt voor privéterrein en circuits (alleen Off-Road).'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'ULTRA-DRIVE 3000W Motor & 72V Accu Pakket',
      shortDescription: '3000W naafmotor gecombineerd met 72V accu, programmeerbare controller en accessoires.',
      description: 'Het ultieme performance-pakket voor eigenbouw. Inclusief 3000W motor, 72V accu, FOC 80A controller en kleurendisplay. ADR 9 transport.',
      legalNotice: 'Strikt voor privéterrein en circuits (alleen Off-Road).'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Genuine FX CNC Precisie-Gashendel (Sur-Ron / Talaria / DIY)',
      shortDescription: 'CNC-aluminium gashendel met kogellagers voor lineaire gasrespons zonder vertraging.',
      description: 'Voorkomt schokkerig optrekken. 6061-T6 aluminium, Hall-sensoren. De standaard voor Sur-Ron, Talaria en DIY-bouw.',
      legalNotice: 'Tuning- en race-onderdeel voor e-motto\'s en offroad.'
    },
    {
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      name: '250W Weglegale Pedelec Ombouwset (Conform EN 15194)',
      shortDescription: '100% legale 250W set voor de weg met trapsensor en automatische uitschakeling bij 25 km/u.',
      description: 'Bouw uw fiets om tot een legale Pedelec. Voldoet aan EN 15194. 250W vermogen, ondersteuning tot 25 km/u. Geen rijbewijs of helmplicht in de EU. Incl. accu.',
      legalNotice: 'Conform EN 15194:2017+A1:2024 (250W, 25 km/h). Legaal op alle openbare wegen en fietspaden.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'APEX 72V 42Ah Tractie-accu (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'High-rate 72V tractie-accu met Molicel P42A cellen en 150A Smart BMS.',
      description: 'Ontworpen voor 72V e-motto\'s. Molicel P42A cellen, puur nikkel laserlassen, real-time Bluetooth monitoring. ADR Klasse 9 gecertificeerd.',
      legalNotice: 'ADR Klasse 9 (UN 3480) transport. Alleen circuit- en offroadgebruik.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Torp TC500 Plug-and-Play Controller (tot 25kW Piek)',
      shortDescription: 'De toonaangevende FOC-controller voor Sur-Ron en Talaria met originele display-ondersteuning.',
      description: 'Geavanceerde FOC-technologie. Extreme vermogenswinst, soepele respons. Automatische accudetectie. App voor live-instellingen.',
      legalNotice: 'Tuning-onderdeel voor circuit- en offroadgebruik.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'Wegwetgeving, Pedelec & E-Moto: Feiten voor Europa 2026',
      excerpt: 'Wanneer is een e-bike legaal? Alles over EN 15194, 250W limieten en gebruik op privéterrein.',
      category: "Juridische Gids"
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Lithium Accu\'s & ADR Klasse 9 Logistiek (UN 3480)',
      excerpt: "Waarom tractie-accu's boven 100 Wh onder strenge regelgeving voor gevaarlijke goederen vallen.",
      category: "Techniek & ADR"
    }
  ],
  searchPage: {
    breadcrumb: "Zoeken",
    title: "Zoeken & Catalogusindex",
    subtitle: "Vind e-motto's, ombouwsets, 72V accu's en juridische gidsen.",
    placeholder: "Voer zoekterm in...",
    filterLabel: "Filter op weglegitimaties:",
    productsFound: "Overeenkomstige Producten & Systemen",
    articlesFound: "Overeenkomstige Juridische Gidsen & Blog",
    noResults: "Geen resultaten gevonden."
  },
  legalContent: {
    agbTitle: "Algemene Voorwaarden",
    privacyTitle: "Privacybeleid (AVG)",
    impressumTitle: "Colofon",
    widerrufTitle: "Herroepingsrecht",
    batteryTitle: "Batterij-informatie"
  },
  confirmation: {
    orderTitle: "Bestelbewijs & Betaalinstructies",
    orderSubtitle: "Uw conceptbestelling is succesvol geregistreerd.",
    orderRef: "Bestelreferentie",
    productCol: "POSITIE",
    totalCol: "BEDRAG",
    cryptoNotice: "5% Crypto Korting",
    sepaBankName: "BANK",
    sepaHolder: "HOUDER",
    inquiryTitle: "Bedankt voor uw aanvraag!",
    inquirySubtitle: "Ticket succesvol geopend.",
    b2bTitle: "Welkom bij het dealernetwerk!",
    b2bSubtitle: "B2B-registratie succesvol ontvangen.",
    whatsappVerify: "Bevestig bestelling via WhatsApp",
    printReceipt: "Print bewijs / Opslaan als PDF",
    continueShopping: "Terug naar de winkel"
  }
});


// 8. Polish (pl)
const pl = createDictionary({
  nav: {
    shop: "Sklep & Katalog",
    motos: "Motocykle E-Moto & Cross",
    kits: "Zestawy Konwersji",
    batteries: "Akumulatory 72V & Ładowarki",
    legalGuides: "Prawo & Magazyn",
    about: "O Nas & Warsztat",
    faq: "Częste Pytania (FAQ)",
    contact: "Kontakt & Warsztat",
    b2b: "Portal B2B Hurt",
    compare: "Porównanie Modeli",
    subsidies: "Kalkulator Dotacji",
    tracking: "Śledzenie Przesyłki",
    cart: "Koszyk",
    search: "Szukaj modelu, mocy, volt...",
    lang: "Język",
    allCategories: "Wszystkie Produkty & Zestawy"
  },
  announcements: {
    cryptoDiscount: "5% Natychmiastowego rabatu przy płatności kryptowalutami (Bitcoin & USDT)",
    freeShipping: "Darmowa wysyłka akcesoriów od 199 € na terenie Niemiec",
    adrSafety: "Certyfikat ADR Klasa 9: Bezpieczny transport towarów niebezpiecznych dla baterii",
    whatsappAdvice: "Doradztwo techniczne przez WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Concierge Warsztatowy",
    status: "Online · Warsztat Monachium / Freising",
    subtitle: "Osobiste doradztwo naszych inżynierów",
    whatsappFastLane: "WhatsApp Szybka Ścieżka",
    phoneDirect: "Zadzwoń do Centrali w Monachium",
    emailTickets: "Otwórz Ticket E-mail",
    faqDirect: "Częste Pytania (FAQ)",
    availabilityNotice: "Pon–Pt 09:00–18:00 CET · Inżynier odpowiada w < 2h",
    close: "Zamknij Czata",
    open: "Czat Warsztatowy"
  },
  hero: {
    badge: "NIEMIECKA INŻYNIERIA & CERTYFIKOWANA LOGISTYKA ADR 9",
    h1: "WYSOKA WYDAJNOŚĆ",
    h1Highlight: "E-MOTO & NAPĘDY ELEKTRYCZNE",
    subtitle: "Wiodąca europejska platforma napędów wysokonapięciowych, certyfikowanych akumulatorów trakcyjnych 72V zgodnych z ADR Klasa 9 oraz w 100% legalnych zestawów pedelec EN 15194.",
    ctaShop: "Odkryj Pełny Katalog",
    ctaKits: "Zestawy Napędowe 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Centralny warsztat i dział badawczo-rozwojowy koło Monachium. Prawdziwe dane z hamowni, przemysłowe przewody HiGo i szybka dostawa do Polski.",
    telemetry: {
      voltageLabel: "NAPIĘCIE",
      voltageValue: "72V DC",
      voltageSub: "Szyna Wysokoprądowa",
      powerLabel: "MOC SZCZYTOWA",
      powerValue: "12 kW",
      powerSub: "Zmierzone na Hamowni",
      torqueLabel: "MOMENT OBR.",
      torqueValue: "280 Nm",
      torqueSub: "Natychmiast na Kole",
      speedLabel: "PRĘDKOŚĆ",
      speedValue: "85 km/h",
      speedSub: "Tylko Off-Road"
    }
  },
  trust: {
    engineering: "Niemiecka Inżynieria",
    engineeringSub: "Pomiary na hamowni, złącza HiGo i ramiona reakcyjne CNC",
    adrLogistics: "Logistyka ADR Klasa 9",
    adrLogisticsSub: "Certyfikowana wysyłka paletowa dla baterii trakcyjnych 52V i 72V",
    plugAndPlay: "Przejrzystość Prawna",
    plugAndPlaySub: "Ścisłe rozgraniczenie rowerów miejskich 250W od maszyn torowych",
    payment: "Bezpieczne Płatności",
    paymentSub: "Przelew SEPA, BLIK, Klarna, iDEAL oraz 5% rabatu na Krypto (Bez PayPal)"
  },
  shopPage: {
    breadcrumb: "Sklep",
    title: "E-Moto, Zestawy Konwersji & Komponenty 72V",
    subtitle: "Wybierz między w 100% legalnymi zestawami Pedelec (250W, EN 15194) do ruchu ulicznego a bezkompromisowymi maszynami offroad (1000W–5000W, 72V).",
    filterAll: "Wszystkie artykuły",
    filterStVZOAll: "Wszystkie statusy",
    filterStVZOOnly: "100% Legalne Ulica",
    filterOffroadOnly: "Sport Offroad",
    sortBy: "Sortuj według",
    sortFeatured: "Polecane / Bestsellery",
    sortPriceAsc: "Cena: od najniższej",
    sortPriceDesc: "Cena: od najwyższej",
    inStock: "Dostępne w Monachium",
    adrNotice: "ADR Klasa 9 Niebezpieczne",
    viewProduct: "Szczegóły & Specyfikacja",
    addToCart: "Do Koszyka",
    addedToCart: "W Koszyku",
    details: "Szczegóły",
    cryptoPrice: "Cena Crypto"
  },
  cart: {
    title: "Twój Koszyk",
    empty: "Twój koszyk jest obecnie pusty",
    emptySub: "Odkryj nasze motocykle elektryczne 2026, zestawy i baterie.",
    startShopping: "Przejdź do Sklepu",
    subtotal: "Wartość Koszyka",
    cryptoDiscount: "Rabat Krypto 5% (BTC / USDT)",
    shipping: "Dostawa",
    freeShippingNotice: "Darmowa wysyłka akcesoriów od 199 €",
    total: "Łącznie do Zapłaty",
    checkoutBtn: "Przejdź do Kasy / Przygotuj Zamówienie",
    vatNotice: "Wszystkie ceny zawierają 19% VAT, koszt dostawy obliczany w kolejnym kroku",
    paymentMethodsTitle: "Metody Płatności (W tym BLIK, bez PayPal):",
    ageNotice: "Składając zamówienie potwierdzasz ukończenie co najmniej 16 lat.",
    orderSuccessTitle: "Dziękujemy za złożenie zamówienia!"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE to wyspecjalizowany europejski hub dla motocykli elektrycznych high-performance, zestawów konwersji i akumulatorów 72V z certyfikatem ADR Klasa 9.",
    legalNotice: "Modele offroad i zestawy >250W nie są dopuszczone do ruchu ulicznego. Systemy Pedelec 250W są zgodne z normą EN 15194.",
    adrNotice: "Akumulatory >100Wh podlegają przepisom ADR 9 i są wysyłane wyłącznie w certyfikowanych opakowaniach UN transportem specjalistycznym.",
    dispatchNotice: "Wysyłka ekspresowa i paletowa do wszystkich krajów UE i Szwajcarii.",
    rightsReserved: "Wszelkie prawa zastrzeżone. Ceny zawierają 19% niemieckiego podatku VAT, bez kosztów dostawy.",
    catalogCol: "Sklep & Systemy",
    serviceCol: "Technika & Serwis",
    legalCol: "Informacje Prawne",
    contactCol: "Siedziba Monachium",
    impressum: "Nota Prawna",
    privacy: "Polityka Prywatności (RODO)",
    terms: "Regulamin",
    revocation: "Prawo do Odstąpienia",
    batteryNotice: "Informacje o Bateriach",
    tracking: "Śledzenie Przesyłki",
    subsidies: "Kalkulator Dotacji",
    compare: "Porównanie Modeli"
  },
  faqItems: [
    {
      question: "Czy wasze motocykle elektryczne i zestawy do konwersji są dopuszczone do ruchu drogowego?",
      answer: "Nie, motocykle i zestawy o mocy powyżej 250W lub prędkości powyżej 25 km/h to dedykowany sprzęt sportowy off-road bez homologacji drogowej. Użytkowanie jest ściśle ograniczone do terenu prywatnego lub zamkniętych torów. Jedynym wyjątkiem jest nasz zestaw Pedelec 250W (EN 15194), który jest w 100% legalny na drogach publicznych."
    },
    {
      question: "Dlaczego nie oferujecie PayPal ani bezpośredniej płatności kartą kredytową?",
      answer: "Sprzęt o wysokiej mocy i akumulatory ADR 9 są często blokowane przez standardowe systemy płatności ze względu na regulacje. Stosujemy bezpieczne przelewy SEPA, Klarna, iDEAL, BLIK oraz kryptowaluty z 5% natychmiastowym rabatem."
    },
    {
      question: "Jak działa 5% rabatu Krypto (Bitcoin & USDT)?",
      answer: "Wybierz Krypto jako metodę płatności w kasie. Rabat 5% zostanie naliczony automatycznie. Po potwierdzeniu otrzymasz nasz adres portfela oraz aktualny kurs wymiany."
    },
    {
      question: "Jak wysyłane są akumulatory trakcyjne 72V i kompletne motocykle?",
      answer: "Akumulatory >100Wh są wysyłane zgodnie z ADR Klasa 9 (UN 3480/3481) w certyfikowanych opakowaniach. Kompletne motocykle dostarczane są na palecie z windą i awizacją telefoniczną."
    },
    {
      question: "Czy jest gwarancja i jak wygląda dostawa części zamiennych?",
      answer: "Wszystkie artykuły są objęte dwuletnią ustawową gwarancją UE. Posiadamy wszystkie krytyczne części (sterowniki, BMS, przewody HiGo, wyświetlacze) w naszym magazynie w Monachium."
    },
    {
      question: "Czy mogę zamawiać jako dealer lub warsztat (B2B)?",
      answer: "Tak. Sklepy rowerowe, dealerzy i zespoły wyścigowe z ważnym numerem NIP-UE mogą ubiegać się o dostęp przez nasz portal B2B, aby uzyskać rabaty ilościowe i priorytetowe dostawy."
    }
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Motocykle E-Moto & Dirt Bikes',
      description: 'Potężne elektryczne motocykle offroad na zamknięte tory i teren prywatny.',
      legalStatus: 'Sprzęt Sportowy Off-Road (Brak homologacji drogowej)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'Zestawy Konwersji & Silniki',
      description: 'Zestawy konwersji do rowerów i MTB – od legalnych systemów Pedelec 250W do offroadowych potworów 5000W.',
      legalStatus: 'Zróżnicowany: 250W Legalne Ulica / 1000W–5000W Offroad'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Akumulatory & Ładowarki (ADR 9)',
      description: 'Certyfikowane akumulatory litowe ADR 9 z Smart BMS i szybkimi ładowarkami.',
      legalStatus: 'Towary Niebezpieczne ADR Klasa 9 (UN 3480 / UN 3481) Transport Paletowy'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Komponenty, Napęd & Kokpit',
      description: 'Wzmocnione ramiona reakcyjne, manetki CNC, sterowniki FOC, zestawy napędowe i hamulce.',
      legalStatus: 'Części Offroad & Tuning'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Sprzęt Bezpieczeństwa & Akcesoria',
      description: 'Kaski z certyfikatem ECE 22.06, ochraniacze zjazdowe, reflektory LED z homologacją E i wzmocnione bagażniki.',
      legalStatus: 'Bezpieczeństwo Testowane ECE & TÜV'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'Zestaw Silnik HYPER-DRIVE 2000W & Akumulator 52V (inc. Manetka CNC)',
      shortDescription: 'Potężny bezszczotkowy silnik 2000W w tylnej piaście połączony z baterią 52V i precyzyjną manetką CNC.',
      description: 'Zmień swój MTB w wyczynową maszynę offroad. Zestaw zawiera silnik 2000W, baterię 52V z Smart BMS, sterownik sinusoidalny i kolorowy wyświetlacz LCD. Tylko na teren prywatny.',
      legalNotice: 'Wyłącznie na teren prywatny i tory (tylko Off-Road). Brak homologacji drogowej.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: 'Elektryczny Dirt Bike 2026 ETM™ RTR SPORT',
      shortDescription: 'ETM RTR Sport 2026 oferuje maksymalne przyspieszenie, natychmiastową reakcję na gaz i wzmocnioną geometrię.',
      description: 'Zbudowany na wymagające tory motocrossowe. Silnik bezszczotkowy, regulowane widelce Upside-Down i hamulce hydrauliczne 4-tłoczkowe. Wyczynowy sprzęt offroad. Transport ADR 9.',
      legalNotice: 'Wyczynowy sprzęt offroad. Brak homologacji drogowej. Tylko do użytku prywatnego.'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Elektryczny Dirt Bike Strike Cycles SHADOW 72V / 7kW',
      shortDescription: '7000W Mocy szczytowej motocross z architekturą 72V dla ekstremalnych prędkości.',
      description: 'Strike Cycles SHADOW oferuje brutalne osiągi 72V. Ultralekka rama z kutego stopu, moc 7kW, w pełni regulowane tłumienie. Niepowstrzymana moc offroad.',
      legalNotice: 'Wyłącznie na teren prywatny i tory (tylko Off-Road).'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'Zestaw Silnik ULTRA-DRIVE 3000W & Akumulator 72V',
      shortDescription: 'Silnik 3000W połączony z baterią 72V o dużej pojemności, programowalny sterownik i akcesoria.',
      description: 'Ostateczny pakiet wydajności do własnych konstrukcji. Zawiera silnik 3000W, baterię 72V z ogniwami wysokoprądowymi, sterownik FOC 80A i wyświetlacz. Transport ADR 9.',
      legalNotice: 'Wyłącznie na teren prywatny i tory (tylko Off-Road).'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Precyzyjna Manetka CNC Genuine FX (Sur-Ron / Talaria / DIY)',
      shortDescription: 'Manetka z aluminium CNC z łożyskami kulkowymi dla liniowej reakcji na gaz bez opóźnień.',
      description: 'Eliminuje szarpnięcia przy ruszaniu. Aluminium 6061-T6, bezstykowe czujniki Halla. Standard dla Sur-Ron, Talaria i konstrukcji DIY.',
      legalNotice: 'Komponent tuningowy i wyścigowy do e-moto i offroad.'
    },
    {
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      name: 'Zestaw Pedelec 250W Legalny na Ulicę (Zgodny z EN 15194)',
      shortDescription: 'W 100% legalny zestaw 250W na drogi publiczne z czujnikiem pedałowania i automatycznym odcięciem przy 25 km/h.',
      description: 'Zmień swój rower w legalnego Pedeleca. Spełnia normę EN 15194. Moc 250W, wspomaganie do 25 km/h. Bez prawa jazdy i kasku w UE. Zawiera baterię.',
      legalNotice: 'Zgodny z EN 15194:2017+A1:2024 (250W, 25 km/h). Legalny na wszystkich drogach publicznych i ścieżkach rowerowych.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'Akumulator Trakcyjny APEX 72V 42Ah (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'Akumulator trakcyjny 72V o wysokim prądzie rozładowania z ogniwami Molicel P42A i BMS 150A.',
      description: 'Zaprojektowany dla e-moto 72V. Ogniwa Molicel P42A, spawanie laserowe czystym niklem, monitoring Bluetooth. Certyfikat ADR Klasa 9.',
      legalNotice: 'Transport ADR Klasa 9 (UN 3480). Tylko do użytku na torach i offroad.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Sterownik Torp TC500 Plug-and-Play (do 25kW Peak)',
      shortDescription: 'Wiodący sterownik FOC dla Sur-Ron i Talaria z natywną obsługą wyświetlacza.',
      description: 'Zaawansowana technologia FOC. Ekstremalne przyrosty mocy, płynna reakcja. Automatyczne wykrywanie baterii. Aplikacja do ustawień live.',
      legalNotice: 'Komponent tuningowy do użytku na torach i offroad.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'Przepisy Drogowe, Pedelec & E-Moto: Fakty dla Europy 2026',
      excerpt: 'Kiedy rower elektryczny jest legalny? Wszystko o EN 15194, limitach 250W i użytkowaniu na terenie prywatnym.',
      category: "Poradnik Prawny"
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Baterie Litowe & Logistyka ADR Klasa 9 (UN 3480)',
      excerpt: "Dlaczego baterie trakcyjne powyżej 100 Wh podlegają surowym przepisom dotyczącym towarów niebezpiecznych.",
      category: "Technika & ADR"
    }
  ],
  searchPage: {
    breadcrumb: "Szukaj",
    title: "Wyszukiwarka i Indeks Katalogu",
    subtitle: "Znajdź e-motocykle, zestawy do konwersji, akumulatory 72V i poradniki prawne.",
    placeholder: "Wpisz szukaną frazę...",
    filterLabel: "Filtruj według statusu prawnego:",
    productsFound: "Pasujące Produkty i Systemy",
    articlesFound: "Pasujące Poradniki Prawne i Blog",
    noResults: "Nie znaleziono pasujących wyników."
  },
  legalContent: {
    agbTitle: "Regulamin",
    privacyTitle: "Polityka Prywatności (RODO)",
    impressumTitle: "Nota Prawna",
    widerrufTitle: "Prawo do Odstąpienia",
    batteryTitle: "Informacje o Bateriach"
  },
  confirmation: {
    orderTitle: "Potwierdzenie Zamówienia i Instrukcje Płatności",
    orderSubtitle: "Twój szkic zamówienia został pomyślnie zarejestrowany.",
    orderRef: "Numer Referencyjny Zamówienia",
    productCol: "POZYCJA",
    totalCol: "KWOTA",
    cryptoNotice: "Rabat Krypto 5%",
    sepaBankName: "BANK",
    sepaHolder: "WŁAŚCICIEL",
    inquiryTitle: "Dziękujemy za zapytanie!",
    inquirySubtitle: "Ticket został pomyślnie otwarty.",
    b2bTitle: "Witamy w sieci dealerów!",
    b2bSubtitle: "Rejestracja B2B została pomyślnie odebrana.",
    whatsappVerify: "Zweryfikuj zamówienie przez WhatsApp",
    printReceipt: "Drukuj potwierdzenie / Zapisz jako PDF",
    continueShopping: "Wróć do sklepu"
  }
});


// 9. Czech (cs)
const cs = createDictionary({
  nav: {
    shop: "Obchod & Katalog",
    motos: "Elektrické Motorky & Dirt",
    kits: "Přestavbové Sady",
    batteries: "Baterie 72V & Nabíječky",
    legalGuides: "Předpisy & Magazín",
    about: "O Nás & Servis",
    faq: "Časté Dotazy (FAQ)",
    contact: "Kontakt & Dílna",
    b2b: "B2B Velkoobchod",
    compare: "Porovnání Modelů",
    subsidies: "Kalkulačka Dotací",
    tracking: "Sledování Zásilky",
    cart: "Košík",
    search: "Hledat model, motor, volty...",
    lang: "Jazyk",
    allCategories: "Všechny Produkty & Sady"
  },
  announcements: {
    cryptoDiscount: "Okamžitá sleva 5 % při platbě kryptoměnami (Bitcoin & USDT)",
    freeShipping: "Doprava zdarma od 199 € pro příslušenství a díly v rámci Německa",
    adrSafety: "Certifikace ADR Třída 9: Bezpečná přeprava nebezpečného zboží pro baterie",
    whatsappAdvice: "Technické poradenství přes WhatsApp: +49 176 8923 4510"
  },
  chat: {
    title: "E-MOTO EUROPE Servisní Concierge",
    status: "Online · Dílna Mnichov / Freising",
    subtitle: "Osobní poradenství našich techniků",
    whatsappFastLane: "WhatsApp Rychlá Linka",
    phoneDirect: "Volejte centrálu Mnichov",
    emailTickets: "Otevřít E-mail Ticket",
    faqDirect: "Časté Dotazy (FAQ)",
    availabilityNotice: "Po–Pá 09:00–18:00 CET · Inženýr odpovídá do < 2h",
    close: "Zavřít Chat",
    open: "Servisní Chat"
  },
  hero: {
    badge: "NĚMECKÉ INŽENÝRSTVÍ & CERTIFIKOVANÁ LOGISTIKA ADR 9",
    h1: "VYSOKÝ VÝKON",
    h1Highlight: "E-MOTORKY & ELEKTROPOHONY",
    subtitle: "Přední evropská platforma pro vysokonapěťové elektropohony, trakční baterie 72V dle ADR Třída 9 a 100% legální sady Pedelec EN 15194.",
    ctaShop: "Prohlédnout Celý Katalog",
    ctaKits: "Přestavbové Sady 250W–5kW",
    entityStatement: "E-MOTO EUROPE: Vývojové centrum a dílna u Mnichova. Reálná data z motorové brzdy, průmyslové konektory HiGo a rychlé doručení do ČR.",
    telemetry: {
      voltageLabel: "NAPĚTÍ",
      voltageValue: "72V DC",
      voltageSub: "Vysokoproudá Sběrnice",
      powerLabel: "ŠPIČKOVÝ VÝKON",
      powerValue: "12 kW",
      powerSub: "Ověřeno na Brzdě",
      torqueLabel: "TOČIVÝ MOMENT",
      torqueValue: "280 Nm",
      torqueSub: "Okamžitě na Kole",
      speedLabel: "RYCHLOST",
      speedValue: "85 km/h",
      speedSub: "Pouze Off-Road"
    }
  },
  trust: {
    engineering: "Německé Inženýrství",
    engineeringSub: "Měření na motorové brzdě, konektory HiGo a CNC záchyty točivého momentu",
    adrLogistics: "Logistika ADR Třída 9",
    adrLogisticsSub: "Certifikovaná paletová doprava pro trakční baterie 52V a 72V",
    plugAndPlay: "Právní Jistota",
    plugAndPlaySub: "Přísné oddělení 250W silničních pedeleců od závodních strojů",
    payment: "Bezpečné Platby",
    paymentSub: "SEPA bankovní převod, Klarna, iDEAL, BLIK a 5% sleva na Krypto (Bez PayPal)"
  },
  shopPage: {
    breadcrumb: "Obchod",
    title: "E-Motorky, Přestavbové Sady & Komponenty 72V",
    subtitle: "Vyberte si mezi 100% legálními sadami Pedelec (250W, EN 15194) pro silniční provoz a nekompromisními offroad stroji (1000W–5000W, 72V).",
    filterAll: "Všechny položky",
    filterStVZOAll: "Všechny statusy",
    filterStVZOOnly: "100% Legální Silnice",
    filterOffroadOnly: "Sport Offroad",
    sortBy: "Seřadit podle",
    sortFeatured: "Doporučené / Bestsellery",
    sortPriceAsc: "Cena: od nejnižší",
    sortPriceDesc: "Cena: od nejvyšší",
    inStock: "Skladem v Mnichově",
    adrNotice: "ADR Třída 9 Nebezpečné",
    viewProduct: "Detaily & Specifikace",
    addToCart: "Do Košíku",
    addedToCart: "V Košíku",
    details: "Detaily",
    cryptoPrice: "Crypto Cena"
  },
  cart: {
    title: "Váš Nákupní Košík",
    empty: "Váš košík je momentálně prázdný",
    emptySub: "Prozkoumejte naše elektrické motorky 2026, sady a baterie.",
    startShopping: "Začít Nakupovat",
    subtotal: "Mezisoučet",
    cryptoDiscount: "Krypto Sleva 5% (BTC / USDT)",
    shipping: "Doprava",
    freeShippingNotice: "Doprava zdarma od 199 € pro příslušenství a díly",
    total: "Celkem",
    checkoutBtn: "Přejít k Pokladně / Připravit Objednávku",
    vatNotice: "Ceny jsou uvedeny včetně 19% DPH, doprava se počítá v dalším kroku",
    paymentMethodsTitle: "Způsoby Platby (Bezpečný bankovní převod a krypto, bez PayPal):",
    ageNotice: "Odesláním potvrzujete, že vám je alespoň 16 let.",
    orderSuccessTitle: "Děkujeme za vaši objednávku!"
  },
  footer: {
    brandDescription: "E-MOTO EUROPE je specializovaný evropský uzel pro vysoce výkonné e-motorky, přestavbové sady a trakční baterie 72V s certifikací ADR Třída 9.",
    legalNotice: "Offroad modely a sady >250W nejsou povoleny pro silniční provoz. Sady Pedelec 250W splňují normu EN 15194.",
    adrNotice: "Baterie >100Wh podléhají předpisům ADR 9 a jsou zasílány výhradně v certifikovaných obalech UN speciální dopravou.",
    dispatchNotice: "Expresní a paletová doprava do všech zemí EU a Švýcarska.",
    rightsReserved: "Všechna práva vyhrazena. Ceny zahrnují 19% německou DPH, bez nákladů na dopravu.",
    catalogCol: "Obchod & Systémy",
    serviceCol: "Technika & Servis",
    legalCol: "Právní Informace",
    contactCol: "Sídlo Mnichov",
    impressum: "Právní doložka",
    privacy: "Ochrana údajů (GDPR)",
    terms: "Obchodní podmínky",
    revocation: "Právo na odstoupení",
    batteryNotice: "Informace o bateriích",
    tracking: "Sledování Zásilky",
    subsidies: "Kalkulačka Dotací",
    compare: "Porovnání Modelů"
  },
  faqItems: [
    {
      question: "Jsou vaše elektrické motorky a výkonné sady legální pro silniční provoz?",
      answer: "Ne, motorky a sady přesahující 250W nebo 25 km/h jsou speciální off-road sportovní vybavení bez silničního schválení. Použití je přísně omezeno na soukromé pozemky nebo uzavřené okruhy. Jedinou výjimkou je naše sada Pedelec 250W (EN 15194), která je 100% legální pro silniční provoz."
    },
    {
      question: "Proč nenabízíte PayPal ani přímou platbu kreditní kartou?",
      answer: "Výkonná technika a baterie ADR 9 jsou často blokovány standardními platebními systémy kvůli regulacím. Používáme bezpečné bankovní převody SEPA, Klarna, iDEAL, BLIK a kryptoměny s okamžitou slevou 5 %."
    },
    {
      question: "Jak funguje krypto sleva 5 % (Bitcoin & USDT)?",
      answer: "Při placení zvolte jako platební metodu Krypto. Sleva 5 % bude odečtena automaticky. Po potvrzení obdržíte adresu naší peněženky a aktuální směnný kurz."
    },
    {
      question: "Jak probíhá doprava trakčních baterií 72V a kompletních motorek?",
      answer: "Baterie >100Wh jsou zasílány dle ADR Třída 9 (UN 3480/3481) v certifikovaných obalech. Kompletní motorky jsou dodávány na paletě s hydraulickým čelem a telefonickou avízou."
    },
    {
      question: "Existuje záruka a jak je to s náhradními díly?",
      answer: "Na všechno zboží se vztahuje zákonná evropská záruka 2 roky. Všechny kritické díly (ovladače, BMS, kabely HiGo, displeje) držíme skladem v Mnichově."
    },
    {
      question: "Mohu objednávat jako prodejce nebo servis (B2B)?",
      answer: "Ano. Cykloservisy, prodejci a závodní týmy s platným DIČ pro EU mohou požádat o přístup přes náš B2B portál pro získání množstevních slev."
    }
  ],
  categories: [
    {
      slug: 'komplette-e-motos',
      name: 'Elektrické Motorky & Dirt Bikes',
      description: 'Výkonné offroad elektrické motorky pro uzavřené okruhy a soukromé pozemky.',
      legalStatus: 'Sportovní Vybavení Off-Road (Není povoleno na veřejných cestách)'
    },
    {
      slug: 'e-bike-umbausaetze',
      name: 'Přestavbové Sady & Motory',
      description: 'Sady pro přestavbu kol a MTB – od legálních systémů Pedelec 250W až po offroad monstra 5000W.',
      legalStatus: 'Rozlišené: 250W Legální Silnice / 1000W–5000W Offroad'
    },
    {
      slug: 'akkus-ladetechnik',
      name: 'Baterie & Nabíječky (ADR 9)',
      description: 'Certifikované lithiové trakční baterie ADR 9 se Smart BMS a rychlonabíječkami.',
      legalStatus: 'Nebezpečné Zboží ADR Třída 9 (UN 3480 / UN 3481) Paletová Doprava'
    },
    {
      slug: 'komponenten-drivetrain',
      name: 'Komponenty, Pohon & Kokpit',
      description: 'Zesílené záchyty točivého momentu, CNC plynové rukojeti, FOC ovladače, řetězové sady a brzdy.',
      legalStatus: 'Offroad & Tuningové Díly'
    },
    {
      slug: 'sicherheitsausruestung',
      name: 'Bezpečnostní Vybavení & Příslušenství',
      description: 'Helmy s certifikací ECE 22.06, downhill chrániče, LED světlomety s homologací E a nosiče kol.',
      legalStatus: 'Testovaná Bezpečnost ECE & TÜV'
    }
  ],
  products: [
    {
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      name: 'Sada Motor HYPER-DRIVE 2000W & Baterie 52V (vč. CNC plynu)',
      shortDescription: 'Výkonný 2000W bezkartáčový motor v zadním náboji v kombinaci s 52V baterií a přesným CNC plynem.',
      description: 'Proměňte své MTB ve výkonný offroad stroj. Sada obsahuje motor 2000W, 52V baterii se Smart BMS, sinusový ovladač a LCD displej. Pouze pro soukromé pozemky.',
      legalNotice: 'Přísně pro soukromé pozemky a tratě (pouze Off-Road). Není povoleno na veřejných cestách.'
    },
    {
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      name: 'Elektrická Dirt Motorka 2026 ETM™ RTR SPORT',
      shortDescription: 'ETM RTR Sport 2026 nabízí maximální zrychlení, okamžitou odezvu a zesílenou geometrii.',
      description: 'Postaveno pro náročné motokrosové tratě. Bezkartáčový motor, nastavitelné vidlice Upside-Down a hydraulické 4-pístkové brzdy. Závodní offroad vybavení. Doprava ADR 9.',
      legalNotice: 'Závodní offroad vybavení. Není povoleno na veřejných cestách. Pouze soukromé použití.'
    },
    {
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      name: 'Elektrická Dirt Motorka Strike Cycles SHADOW 72V / 7kW',
      shortDescription: '7000W Špičkový motokrosový výkon s 72V architekturou pro extrémní rychlosti.',
      description: 'Strike Cycles SHADOW nabízí brutální výkon 72V. Ultralehký kovaný rám, výkon 7kW, plně nastavitelné tlumení. Nezastavitelný offroad výkon.',
      legalNotice: 'Přísně pro soukromé pozemky a tratě (pouze Off-Road).'
    },
    {
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      name: 'Sada Motor ULTRA-DRIVE 3000W & Baterie 72V',
      shortDescription: '3000W nábojový motor v kombinaci s vysokokapacitní 72V baterií, programovatelný ovladač a příslušenství.',
      description: 'Ultimátní balíček výkonu pro vlastní stavby. Obsahuje 3000W motor, 72V baterii s vysokoproudými články, FOC 80A ovladač a displej. Doprava ADR 9.',
      legalNotice: 'Přísně pro soukromé pozemky a tratě (pouze Off-Road).'
    },
    {
      slug: 'genuine-fx-cnc-praezisions-gasgriff',
      name: 'Přesná CNC Plynová Rukojeť Genuine FX (Sur-Ron / Talaria / DIY)',
      shortDescription: 'Hliníková CNC rukojeť s kuličkovými ložisky pro lineární odezvu bez zpoždění.',
      description: 'Eliminuje trhání při rozjezdu. Hliník 6061-T6, bezkontaktní Hallovy senzory. Standard pro Sur-Ron, Talaria a DIY stavby.',
      legalNotice: 'Tuningový a závodní díl pro e-mota a offroad.'
    },
    {
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      name: 'Sada Pedelec 250W Legální na Silnici (Dle EN 15194)',
      shortDescription: '100% legální 250W sada pro veřejné cesty se snímačem šlapání a automatickým vypnutím při 25 km/h.',
      description: 'Proměňte své kolo v legální Pedelec. Splňuje normu EN 15194. Výkon 250W, podpora do 25 km/h. Bez řidičského průkazu a helmy v EU. Včetně baterie.',
      legalNotice: 'Dle EN 15194:2017+A1:2024 (250W, 25 km/h). Legální na všech veřejných cestách a cyklostezkách.'
    },
    {
      slug: '72v-42ah-traktionsakku-smart-bms-adr9',
      name: 'Trakční Baterie APEX 72V 42Ah (Smart Bluetooth BMS, 3024Wh)',
      shortDescription: 'Vysokoproudá 72V trakční baterie s články Molicel P42A a BMS 150A.',
      description: 'Navrženo pro 72V e-mota. Články Molicel P42A, laserové svařování čistým niklem, Bluetooth monitoring. Certifikace ADR Třída 9.',
      legalNotice: 'Doprava ADR Třída 9 (UN 3480). Pouze pro okruhy a offroad.'
    },
    {
      slug: 'torp-tc500-controller-sur-ron-talaria',
      name: 'Ovladač Torp TC500 Plug-and-Play (až 25kW Peak)',
      shortDescription: 'Přední FOC ovladač pro Sur-Ron a Talaria s nativní podporou displeje.',
      description: 'Pokročilá technologie FOC. Extrémní nárůst výkonu, hladká odezva. Automatická detekce baterie. Aplikace pro nastavení v reálném čase.',
      legalNotice: 'Tuningový díl pro použití na okruzích a offroad.'
    }
  ],
  posts: [
    {
      slug: 'stvzo-recht-e-moto-pedelec-deutschland-2026',
      title: 'Silniční Předpisy, Pedelec & E-Moto: Fakta pro Evropu 2026',
      excerpt: 'Kdy je elektrokolo legální? Vše o EN 15194, limitech 250W a použití na soukromém pozemku.',
      category: "Právní Průvodce"
    },
    {
      slug: 'adr-klasse-9-gefahrgutversand-lithium-batterien',
      title: 'Lithiové Baterie & Logistika ADR Třída 9 (UN 3480)',
      excerpt: "Proč trakční baterie nad 100 Wh podléhají přísným předpisům o nebezpečném zboží.",
      category: "Technika & ADR"
    }
  ],
  searchPage: {
    breadcrumb: "Hledat",
    title: "Hledání & Rejstřík Katalogu",
    subtitle: "Najděte e-motorky, přestavbové sady, 72V baterie a právní příručky.",
    placeholder: "Zadejte hledaný výraz...",
    filterLabel: "Filtrovat podle silniční legality:",
    productsFound: "Odpovídající Produkty & Systémy",
    articlesFound: "Odpovídající Právní Příručky & Blog",
    noResults: "Nebyly nalezeny žádné výsledky."
  },
  legalContent: {
    agbTitle: "Obchodní podmínky",
    privacyTitle: "Ochrana údajů (GDPR)",
    impressumTitle: "Právní doložka",
    widerrufTitle: "Právo na odstoupení",
    batteryTitle: "Informace o bateriích"
  },
  confirmation: {
    orderTitle: "Potvrzení Objednávky & Platební Pokyny",
    orderSubtitle: "Váš návrh objednávky byl úspěšně zaregistrován.",
    orderRef: "Referenční Číslo Objednávky",
    productCol: "POLOŽKA",
    totalCol: "ČÁSTKA",
    cryptoNotice: "Krypto Sleva 5 %",
    sepaBankName: "BANKA",
    sepaHolder: "MAJITEL",
    inquiryTitle: "Děkujeme za váš dotaz!",
    inquirySubtitle: "Tiket byl úspěšně otevřen.",
    b2bTitle: "Vítejte v síti prodejců!",
    b2bSubtitle: "B2B registrace byla úspěšně přijata.",
    whatsappVerify: "Ověřit objednávku přes WhatsApp",
    printReceipt: "Vytisknout potvrzení / Uložit jako PDF",
    continueShopping: "Zpět do obchodu"
  }
});


// Output all 10 files
const languages = {
  de,
  'de-CH': deCH,
  en,
  fr,
  it,
  es,
  pt,
  nl,
  pl,
  cs,
};

for (const [langCode, dict] of Object.entries(languages)) {
  const filePath = path.join(messagesDir, `${langCode}.json`);
  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2), 'utf8');
}

console.log('[build-dictionaries] Successfully updated all 10 comprehensive language dictionaries in src/messages/');
