import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['de', 'en', 'fr', 'it', 'es', 'pt', 'nl', 'pl', 'cs', 'de-CH'],

  // Used when no locale matches
  defaultLocale: 'de',
  
  // Custom prefixing behavior if needed
  localePrefix: 'as-needed',

  pathnames: {
    '/': '/',
    '/shop': {
      de: '/shop',
      'de-CH': '/shop',
      en: '/shop',
      fr: '/boutique',
      it: '/negozio',
      es: '/tienda',
      pt: '/loja',
      nl: '/winkel',
      pl: '/sklep',
      cs: '/obchod'
    },
    '/about': {
      de: '/ueber-uns',
      'de-CH': '/ueber-uns',
      en: '/about',
      fr: '/a-propos',
      it: '/chi-siamo',
      es: '/sobre-nosotros',
      pt: '/sobre-nos',
      nl: '/over-ons',
      pl: '/o-nas',
      cs: '/o-nas'
    },
    '/contact': {
      de: '/kontakt',
      'de-CH': '/kontakt',
      en: '/contact',
      fr: '/contact',
      it: '/contatto',
      es: '/contacto',
      pt: '/contacto',
      nl: '/contact',
      pl: '/kontakt',
      cs: '/kontakt'
    },
    '/faq': {
      de: '/faq',
      'de-CH': '/faq',
      en: '/faq',
      fr: '/faq',
      it: '/faq',
      es: '/faq',
      pt: '/faq',
      nl: '/faq',
      pl: '/faq',
      cs: '/faq'
    },
    '/magazin': {
      de: '/magazin',
      'de-CH': '/magazin',
      en: '/magazine',
      fr: '/magazine',
      it: '/rivista',
      es: '/revista',
      pt: '/revista',
      nl: '/magazine',
      pl: '/magazyn',
      cs: '/magazin'
    },
    '/wholesale': {
      de: '/grosshandel',
      'de-CH': '/grosshandel',
      en: '/wholesale',
      fr: '/vente-en-gros',
      it: '/ingrosso',
      es: '/venta-al-por-mayor',
      pt: '/venda-por-gros',
      nl: '/groothandel',
      pl: '/hurtownia',
      cs: '/velkoobchod'
    },
    '/agb': {
      de: '/agb',
      'de-CH': '/agb',
      en: '/terms',
      fr: '/cgv',
      it: '/termini',
      es: '/terminos',
      pt: '/termos',
      nl: '/voorwaarden',
      pl: '/regulamin',
      cs: '/podminky'
    },
    '/datenschutz': {
      de: '/datenschutz',
      'de-CH': '/datenschutz',
      en: '/privacy',
      fr: '/confidentialite',
      it: '/privacy',
      es: '/privacidad',
      pt: '/privacidade',
      nl: '/privacy',
      pl: '/prywatnosc',
      cs: '/soukromi'
    },
    '/impressum': {
      de: '/impressum',
      'de-CH': '/impressum',
      en: '/imprint',
      fr: '/mentions-legales',
      it: '/note-legali',
      es: '/aviso-legal',
      pt: '/aviso-legal',
      nl: '/colofon',
      pl: '/nota-prawna',
      cs: '/impresum'
    },
    '/widerruf': {
      de: '/widerruf',
      'de-CH': '/widerruf',
      en: '/revocation',
      fr: '/retractation',
      it: '/recesso',
      es: '/desistimiento',
      pt: '/retratacao',
      nl: '/herroeping',
      pl: '/odstapienie',
      cs: '/odstoupeni'
    },
    '/batteriehinweise': {
      de: '/batteriehinweise',
      'de-CH': '/batteriehinweise',
      en: '/battery-notice',
      fr: '/avis-batterie',
      it: '/avviso-batterie',
      es: '/aviso-bateria',
      pt: '/aviso-bateria',
      nl: '/batterij-informatie',
      pl: '/informacja-o-bateriach',
      cs: '/informace-o-bateriich'
    },
    '/compare': {
      de: '/vergleich',
      'de-CH': '/vergleich',
      en: '/compare',
      fr: '/comparer',
      it: '/confronta',
      es: '/comparar',
      pt: '/comparar',
      nl: '/vergelijken',
      pl: '/porownaj',
      cs: '/porovnat'
    },
    '/subsidies': {
      de: '/foerderung',
      'de-CH': '/foerderung',
      en: '/subsidies',
      fr: '/subventions',
      it: '/sovvenzioni',
      es: '/subvenciones',
      pt: '/subvencoes',
      nl: '/subsidies',
      pl: '/dotacje',
      cs: '/dotace'
    },
    '/tracking': {
      de: '/sendungsverfolgung',
      'de-CH': '/sendungsverfolgung',
      en: '/tracking',
      fr: '/suivi',
      it: '/tracciamento',
      es: '/seguimiento',
      pt: '/rastreamento',
      nl: '/tracking',
      pl: '/sledzenie',
      cs: '/sledovani'
    },
    '/inquiry-confirmation': '/inquiry-confirmation',
    '/order-confirmation': '/order-confirmation',
    '/b2b-confirmation': '/b2b-confirmation',
    '/thank-you-contact': '/thank-you-contact',
    '/thank-you-order': '/thank-you-order',
    '/thank-you-wholesale': '/thank-you-wholesale'
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
