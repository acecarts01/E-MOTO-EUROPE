import React from 'react';
import { Metadata } from 'next';
import { SITE, BRAND, CONTACT, PRODUCTS, FAQ } from '@/src/config/site';
import { getHrefLangAlternates } from '@/src/lib/i18n';
import { JsonLd } from '@/src/components/JsonLd';
import { HomeClient } from '@/src/components/HomeClient';
import { setRequestLocale } from 'next-intl/server';

const alternates = getHrefLangAlternates('/');

export const metadata: Metadata = {
  title: `${SITE.name} | High-Performance E-Motos & Umbausätze kaufen`,
  description: 'Europas Fachbetrieb für High-Performance E-Motos, E-MTB Umbausätze (1000W–5000W), 72V Lithium-Akkus nach ADR Klasse 9 und 100% StVZO-konforme Pedelecs.',
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} | E-Motos & High-Power Umbausätze`,
    description: 'Europas führende Plattform für E-Motos, 72V Traktionsbatterien und StVZO-konforme Umbausätze.',
    url: `https://${SITE.domain}/`,
    images: [{ url: `https://${SITE.domain}/images/products/hyper-drive-2000w-bundle.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | E-Motos & Powertrains`,
    description: 'Europas Spezialist für E-Motos, 72V Traktionsbatterien und StVZO Umbausätze.',
    images: [`https://${SITE.domain}/images/products/hyper-drive-2000w-bundle.webp`],
  },
  alternates: {
    canonical: alternates.canonical,
    languages: alternates.languages,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  }
};

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  // Unified Organization + Store + WebSite + SearchAction + FAQ Schema
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Store', 'Organization'],
        '@id': `https://${SITE.domain}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: `https://${SITE.domain}/`,
        description: BRAND.description,
        foundingDate: BRAND.foundingYear,
        foundingLocation: {
          '@type': 'Place',
          name: BRAND.foundingLocation,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Industriepark Süd 14',
          addressLocality: 'Freising',
          postalCode: '85356',
          addressRegion: 'Bayern',
          addressCountry: 'DE',
        },
        telephone: CONTACT.phone,
        email: 'support&#64;emoto-europe.de',
        priceRange: '€179 - €4190',
        areaServed: ['DE', 'AT', 'CH', 'FR', 'IT', 'ES', 'NL', 'BE', 'PL', 'CZ', 'PT'],
        numberOfItems: PRODUCTS.length,
        knowsAbout: [
          'High-Voltage E-Motos',
          'Lithium-Traction Batteries ADR Class 9',
          'E-Bike Conversion Kits',
          'StVZO Regulations EN 15194',
          'Field-Oriented Control Sine-Wave Controllers'
        ],
        sameAs: BRAND.sameAs,
        makesOffer: {
          '@type': 'AggregateOffer',
          priceCurrency: SITE.currency,
          lowPrice: 179.0,
          highPrice: 4190.0,
          offerCount: PRODUCTS.length,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `https://${SITE.domain}/#website`,
        url: `https://${SITE.domain}/`,
        name: SITE.name,
        publisher: { '@id': `https://${SITE.domain}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `https://${SITE.domain}/search/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `https://${SITE.domain}/#faq`,
        mainEntity: FAQ.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <HomeClient />
    </>
  );
}
