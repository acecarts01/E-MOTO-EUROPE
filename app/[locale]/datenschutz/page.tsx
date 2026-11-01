import React from 'react';
import { Metadata } from 'next';
import { LegalClient } from '@/src/components/LegalClient';
import { SITE } from '@/src/config/site';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/datenschutz');
  
  return {
    title: `Datenschutz | ${SITE.name}`,
    description: 'Datenschutzerklärung nach DSGVO.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    robots: { index: true, follow: true },
  };
}

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = {
    de: `
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO).</p>
      <h2>2. Datenerfassung auf unserer Website</h2>
      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum entnehmen.</p>
      <h2>3. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung.</p>
      <h2>4. Cookies</h2>
      <p>Wir verwenden ausschließlich technisch notwendige Cookies, die für den Betrieb des Warenkorbs und der Sprachauswahl erforderlich sind.</p>
    `,
    en: `
      <h2>1. Privacy at a Glance</h2>
      <p>We take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations (GDPR).</p>
      <h2>2. Data Collection on our Website</h2>
      <p>The data processing on this website is carried out by the website operator. You can find the contact details in the Legal Notice (Impressum).</p>
      <h2>3. SSL or TLS Encryption</h2>
      <p>For security reasons and to protect the transmission of confidential content, this site uses SSL or TLS encryption.</p>
      <h2>4. Cookies</h2>
      <p>We only use strictly necessary technical cookies required for the operation of the shopping cart and language selection.</p>
    `
  };

  return <LegalClient type="datenschutz" content={content} />;
}
