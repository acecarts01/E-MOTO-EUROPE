import React from 'react';
import { Metadata } from 'next';
import { LegalClient } from '@/src/components/LegalClient';
import { SITE, CONTACT } from '@/src/config/site';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/impressum');
  
  return {
    title: `Impressum | ${SITE.name}`,
    description: 'Gesetzliche Anbieterkennzeichnung.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = {
    de: `
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>${SITE.legalName}<br />
      ${CONTACT.address}</p>
      
      <h2>Kontakt</h2>
      <p>Telefon: ${CONTACT.phone}<br />
      E-Mail: ${CONTACT.emailEncoded}</p>
      
      <h2>Registereintrag</h2>
      <p>Eintragung im Handelsregister.<br />
      Registergericht: ${CONTACT.commercialRegistry.split(' ')[1]}<br />
      Registernummer: ${CONTACT.commercialRegistry.split(' ').slice(2).join(' ')}</p>
      
      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
      ${CONTACT.vatId}</p>
      
      <h2>EU-Streitschlichtung</h2>
      <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.</p>
    `,
    en: `
      <h2>Information according to § 5 DDG</h2>
      <p>${SITE.legalName}<br />
      ${CONTACT.address}</p>
      
      <h2>Contact</h2>
      <p>Phone: ${CONTACT.phone}<br />
      Email: ${CONTACT.emailEncoded}</p>
      
      <h2>Register Entry</h2>
      <p>Registered in the commercial register.<br />
      Registry Court: ${CONTACT.commercialRegistry.split(' ')[1]}<br />
      Register Number: ${CONTACT.commercialRegistry.split(' ').slice(2).join(' ')}</p>
      
      <h2>VAT ID</h2>
      <p>VAT Identification Number according to § 27 a VAT Act:<br />
      ${CONTACT.vatId}</p>
      
      <h2>EU Dispute Resolution</h2>
      <p>The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/.</p>
    `
  };

  return <LegalClient type="impressum" content={content} />;
}
