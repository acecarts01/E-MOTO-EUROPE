import React from 'react';
import { Metadata } from 'next';
import { LegalClient } from '@/src/components/LegalClient';
import { SITE } from '@/src/config/site';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/widerruf');
  
  return {
    title: `Widerrufsbelehrung | ${SITE.name}`,
    description: 'Informationen zum Widerrufsrecht für Verbraucher.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    robots: { index: true, follow: true },
  };
}

export default async function WiderrufPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = {
    de: `
      <h2>Widerrufsrecht</h2>
      <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
      <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.</p>
      <h2>Ausschluss des Widerrufsrechts</h2>
      <p>Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (z.B. Custom-Umbausätze).</p>
    `,
    en: `
      <h2>Right of Withdrawal</h2>
      <p>You have the right to withdraw from this contract within fourteen days without giving any reason.</p>
      <p>The withdrawal period is fourteen days from the day on which you or a third party named by you, who is not the carrier, took possession of the goods.</p>
      <h2>Exclusion of the Right of Withdrawal</h2>
      <p>The right of withdrawal does not exist for contracts for the delivery of goods that are not prefabricated and for the manufacture of which an individual selection or determination by the consumer is decisive or which are clearly tailored to the personal needs of the consumer (e.g., custom conversion kits).</p>
    `
  };

  return <LegalClient type="widerruf" content={content} />;
}
