import React from 'react';
import { Metadata } from 'next';
import { SITE } from '@/src/config/site';
import { TrackingClient } from '@/src/components/TrackingClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/tracking');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `Sendungsverfolgung & Speditions-Tracking | ${SITE.name}`
      : `Shipment Tracking | ${SITE.name}`,
    description: 'Verfolgen Sie Ihre Bestellung von Kleinteilen oder schweren E-Motos und Traktionsbatterien in Echtzeit.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function TrackingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TrackingClient />;
}
