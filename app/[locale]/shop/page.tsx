import React from 'react';
import { Metadata } from 'next';
import { SITE } from '@/src/config/site';
import { ShopIndexClient } from '@/src/components/ShopIndexClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/shop');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `E-Motos, Umbausätze & 72V Komponenten kaufen | ${SITE.name}`
      : `Buy E-Motos, Conversion Kits & 72V Components | ${SITE.name}`,
    description: 'Wählen Sie zwischen 100% StVZO-konformen Pedelec-Umbausätzen und kompromisslosen Offroad-Sportgeräten. Schneller Versand aus Deutschland.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function ShopIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ShopIndexClient />;
}
