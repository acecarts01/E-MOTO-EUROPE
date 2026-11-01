import React from 'react';
import { Metadata } from 'next';
import { SITE, CONTACT } from '@/src/config/site';
import { JsonLd } from '@/src/components/JsonLd';
import { ContactClient } from '@/src/components/ContactClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/contact');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `Kontakt & Meisterwerkstatt München | ${SITE.name}`
      : `Contact & Munich Master Workshop | ${SITE.name}`,
    description: `Haben Sie technische Fragen? Unsere Prüfingenieure in Freising bei München beraten Sie gerne zu E-Motos, Akku-Kompatibilität und StVZO-Vorschriften.`,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: SITE.name,
    description: `Kontaktieren Sie die E-MOTO EUROPE Meisterwerkstatt in Freising bei München.`,
    url: `https://${SITE.domain}/${locale}/contact/`,
    mainEntity: {
      '@type': 'Organization',
      name: SITE.name,
      telephone: CONTACT.phone,
      email: CONTACT.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Industriepark Süd 14',
        postalCode: '85356',
        addressLocality: 'Freising / München',
        addressCountry: 'DE'
      }
    }
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  );
}
