// src/lib/i18n.ts - Enterprise Localization Dictionary Manager
import de from '@/src/messages/de.json';
import en from '@/src/messages/en.json';
import deCH from '@/src/messages/de-CH.json';
import fr from '@/src/messages/fr.json';
import it from '@/src/messages/it.json';
import es from '@/src/messages/es.json';
import pt from '@/src/messages/pt.json';
import nl from '@/src/messages/nl.json';
import pl from '@/src/messages/pl.json';
import cs from '@/src/messages/cs.json';
import { SITE } from '@/src/config/site';

export type Locale = 'de' | 'en' | 'fr' | 'it' | 'es' | 'pt' | 'nl' | 'pl' | 'cs' | 'de-CH';

export type Translations = any;

export const translations: Record<Locale, Translations> = {
  de: de as Translations,
  'de-CH': deCH as Translations,
  en: en as Translations,
  fr: fr as Translations,
  it: it as Translations,
  es: es as Translations,
  pt: pt as Translations,
  nl: nl as Translations,
  pl: pl as Translations,
  cs: cs as Translations,
};

export function getTranslation(locale: Locale): Translations {
  return translations[locale] || translations.de;
}

/**
 * Returns dynamic hreflang alternate links for SEO metadata
 */
export function getHrefLangAlternates(path: string = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const base = `https://${SITE.domain}`;
  
  return {
    canonical: `${base}${cleanPath}`,
    languages: {
      'de-DE': `${base}${cleanPath}`,
      'de-CH': `${base}${cleanPath}?lang=de-CH`,
      'en-EU': `${base}${cleanPath}?lang=en`,
      'fr-FR': `${base}${cleanPath}?lang=fr`,
      'it-IT': `${base}${cleanPath}?lang=it`,
      'es-ES': `${base}${cleanPath}?lang=es`,
      'pt-PT': `${base}${cleanPath}?lang=pt`,
      'nl-NL': `${base}${cleanPath}?lang=nl`,
      'pl-PL': `${base}${cleanPath}?lang=pl`,
      'cs-CZ': `${base}${cleanPath}?lang=cs`,
      'x-default': `${base}${cleanPath}`,
    }
  };
}
