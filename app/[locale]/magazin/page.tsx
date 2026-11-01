import React from 'react';
import { Metadata } from 'next';
import { SITE } from '@/src/config/site';
import { JsonLd } from '@/src/components/JsonLd';
import { MagazineIndexClient } from '@/src/components/MagazineIndexClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/magazin');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `Magazin & Rechtsratgeber | ${SITE.name}`
      : `Magazine & Legal Guides | ${SITE.name}`,
    description: 'Fachartikel zu StVZO-Regelungen, ADR Klasse 9 Gefahrgut-Logistik für Traktionsbatterien, Pedelec EN 15194 vs E-Moto Unterschiede.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function MagazineIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home',
        item: `https://${SITE.domain}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'de' || locale === 'de-CH' ? 'Magazin & Recht' : 'Magazine & Law',
        item: `https://${SITE.domain}/${locale}/magazin/`
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <MagazineIndexClient />
    </>
  );
}
