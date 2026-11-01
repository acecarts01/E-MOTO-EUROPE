import React from 'react';
import { Metadata } from 'next';
import { SITE } from '@/src/config/site';
import { SearchClient } from '@/src/components/SearchClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/search');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `Suche & Katalog-Index | ${SITE.name}`
      : `Search & Catalog Index | ${SITE.name}`,
    description: 'Finden Sie E-Motos, Umbausätze, 72V Batterien, CNC-Komponenten und StVZO-Rechtsratgeber.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function SearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SearchClient />;
}
