import React from 'react';
import { Metadata } from 'next';
import { LegalClient } from '@/src/components/LegalClient';
import { SITE } from '@/src/config/site';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/agb');
  
  return {
    title: `AGB | ${SITE.name}`,
    description: 'Allgemeine Geschäftsbedingungen und Kundeninformationen.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    robots: { index: true, follow: true },
  };
}

export default async function AgbPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = {
    de: `
      <h2>1. Geltungsbereich</h2>
      <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen, die über den Online-Shop von ${SITE.legalName} getätigt werden.</p>
      <h2>2. Vertragsschluss</h2>
      <p>Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern einen unverbindlichen Online-Katalog dar. Durch Anklicken des Bestellbuttons geben Sie eine verbindliche Bestellung der im Warenkorb enthaltenen Waren ab.</p>
      <h2>3. Zahlungsbedingungen</h2>
      <p>Wir bieten ausschließlich die im Bestellprozess genannten sicheren Zahlungsarten an: SEPA-Vorkasse, Klarna, iDEAL, BLIK und Kryptowährungen (BTC/USDT). PayPal wird aufgrund regulatorischer Vorgaben für Hochvolt-Traktionsakkus nicht angeboten.</p>
      <h2>4. Gefahrenhinweis & StVZO</h2>
      <p>Der Kunde wird hiermit ausdrücklich darauf hingewiesen, dass Umbausätze >250W sowie E-Motos ohne CoC-Papiere reine Offroad-Sportgeräte sind und nicht im öffentlichen Straßenraum betrieben werden dürfen.</p>
    `,
    en: `
      <h2>1. Scope</h2>
      <p>These General Terms and Conditions apply to all orders placed via the ${SITE.legalName} online shop.</p>
      <h2>2. Conclusion of Contract</h2>
      <p>The presentation of products in the online shop does not constitute a legally binding offer. By clicking the order button, you place a binding order for the goods in your shopping cart.</p>
      <h2>3. Payment Terms</h2>
      <p>We only offer the secure payment methods mentioned during checkout: SEPA prepayment, Klarna, iDEAL, BLIK, and Cryptocurrencies. PayPal is not offered due to regulatory restrictions on high-voltage traction batteries.</p>
      <h2>4. Safety Warning & Road Legality</h2>
      <p>The customer is explicitly advised that conversion kits >250W and e-motos without CoC papers are dedicated off-road sporting equipment and must not be operated on public roads.</p>
    `
  };

  return <LegalClient type="agb" content={content} />;
}
