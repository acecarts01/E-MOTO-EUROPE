import React from 'react';
import { Metadata } from 'next';
import { SITE, FAQ } from '@/src/config/site';
import { JsonLd } from '@/src/components/JsonLd';
import { FAQClient } from '@/src/components/FAQClient';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/faq');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `FAQ & Technische Beratung | ${SITE.name}`
      : `FAQ & Technical Support | ${SITE.name}`,
    description: 'Präzise Antworten zu StVZO-Zulassung, ADR Klasse 9 Gefahrgut-Batterieversand, 5% Krypto-Rabatt und technischer Einbauhilfe.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <FAQClient />
    </>
  );
}
