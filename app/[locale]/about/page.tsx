import React from 'react';
import { Metadata } from 'next';
import { SITE, BRAND } from '@/src/config/site';
import { JsonLd } from '@/src/components/JsonLd';
import { AboutClient } from '@/src/components/AboutClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/about');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `Über uns & Werkstatt München | ${SITE.name}`
      : `About Us & Munich Workshop | ${SITE.name}`,
    description: `Learn more about ${SITE.name}: Engineering history since 2021, dyno testing in Freising near Munich, ADR 9 hazmat logistics, and German engineering excellence.`,
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': ['AboutPage', 'Organization'],
    name: SITE.name,
    legalName: SITE.legalName,
    description: BRAND.description,
    foundingDate: BRAND.foundingYear,
    foundingLocation: {
      '@type': 'Place',
      name: BRAND.foundingLocation
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Industriepark Süd 14',
      postalCode: '85356',
      addressLocality: 'Freising / München',
      addressCountry: 'DE'
    },
    url: `https://${SITE.domain}/${locale}/about/`,
    sameAs: BRAND.sameAs
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutClient />
    </>
  );
}
