import React from 'react';
import { Metadata } from 'next';
import { LegalClient } from '@/src/components/LegalClient';
import { SITE, CONTACT } from '@/src/config/site';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/batteriehinweise');
  
  return {
    title: `Batteriehinweise | ${SITE.name}`,
    description: 'Hinweise zur Entsorgung von Batterien und Elektroaltgeräten.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    robots: { index: true, follow: true },
  };
}

export default async function BatteriehinweisePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = {
    de: `
      <h2>Hinweise zur Batterieentsorgung (BattG)</h2>
      <p>Im Zusammenhang mit dem Vertrieb von Batterien oder mit der Lieferung von Geräten, die Batterien enthalten, sind wir verpflichtet, Sie auf folgendes hinzuweisen:</p>
      <p>Sie sind zur Rückgabe gebrauchter Batterien als Endnutzer gesetzlich verpflichtet. Sie können Altbatterien, die wir als Neubatterien im Sortiment führen oder geführt haben, unentgeltlich an unserem Versandlager (Lieferadresse) zurückgeben.</p>
      <h2>Elektro- und Elektronikaltgeräte (ElektroG)</h2>
      <p>Elektro- und Elektronikaltgeräte dürfen nicht über den Hausmüll entsorgt werden. Das Symbol der durchgestrichenen Mülltonne bedeutet, dass das Gerät getrennt vom unsortierten Siedlungsabfall zu erfassen ist.</p>
      <p>Unsere WEEE-Reg.-Nr.: ${CONTACT.weeeReg}</p>
    `,
    en: `
      <h2>Battery Disposal Instructions (BattG)</h2>
      <p>In connection with the sale of batteries or the delivery of devices containing batteries, we are obliged to inform you of the following:</p>
      <p>As the end user, you are legally required to return used batteries. You can return old batteries that we carry or have carried as new batteries in our range to our shipping warehouse free of charge.</p>
      <h2>Waste Electrical and Electronic Equipment (ElektroG)</h2>
      <p>Waste electrical and electronic equipment must not be disposed of with household waste. The symbol of the crossed-out waste bin means that the device must be collected separately from unsorted municipal waste.</p>
      <p>Our WEEE Reg. No.: ${CONTACT.weeeReg}</p>
    `
  };

  return <LegalClient type="batteriehinweise" content={content} />;
}
