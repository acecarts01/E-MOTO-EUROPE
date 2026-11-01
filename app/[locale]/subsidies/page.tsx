import React from 'react';
import { Metadata } from 'next';
import { SITE } from '@/src/config/site';
import { SubsidyClient } from '@/src/components/SubsidyClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/subsidies');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `E-Mobilitäts-Förderrechner & Zuschüsse | ${SITE.name}`
      : `E-Mobility Subsidy Calculator & Grants | ${SITE.name}`,
    description: 'Berechnen Sie staatliche Förderzuschüsse von Kommunen, Bundesländern und BAFA für den gewerblichen Einsatz und 100% StVZO-konforme Pedelec-Systeme.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function SubsidyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SubsidyClient />;
}
