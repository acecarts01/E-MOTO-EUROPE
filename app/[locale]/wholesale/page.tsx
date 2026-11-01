import React from 'react';
import { Metadata } from 'next';
import { SITE } from '@/src/config/site';
import { WholesaleClient } from '@/src/components/WholesaleClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/wholesale');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `B2B Händlerportal & Großhandel | ${SITE.name}`
      : `B2B Wholesale Portal | ${SITE.name}`,
    description: 'Gewerbliche Konditionen für E-Bike Werkstätten, Händler und Rennteams. Attraktive Händlermargen und direkter Gefahrgut-Speditionsversand in die gesamte EU.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function WholesalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <WholesaleClient />;
}
