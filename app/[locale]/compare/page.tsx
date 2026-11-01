import React from 'react';
import { Metadata } from 'next';
import { SITE, PRODUCTS } from '@/src/config/site';
import { Scale, Check, X, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import { setRequestLocale } from 'next-intl/server';
import { getHrefLangAlternates } from '@/src/lib/i18n';
import { Link } from '@/src/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/compare');
  
  return {
    title: locale === 'de' || locale === 'de-CH' 
      ? `Modellvergleich & Motoren-Matrix | ${SITE.name}`
      : `Model Comparison & Power Matrix | ${SITE.name}`,
    description: 'Direkter technischer Vergleich zwischen 250W StVZO Pedelecs, 2000W & 3000W E-MTB Umbausätzen und 72V E-Motos.',
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const compareItems = [
    {
      name: '250W Pedelec Umbausatz',
      slug: '250w-street-legal-pedelec-umbaussatz-stvzo',
      category: 'e-bike-umbausaetze',
      price: '€689,00',
      cryptoPrice: '€654,55',
      power: '250W Nennleistung',
      torque: '55 Nm',
      battery: '36V 14Ah (504Wh)',
      speed: '25 km/h (Cutoff)',
      stvzo: true,
      license: 'Keine (Führerscheinfrei)',
      helmet: 'Keine Helmpflicht (empfohlen)',
      insurance: 'Kein Kennzeichen nötig',
      adr: 'Standard Paketversand',
      useCase: 'Stadt, Pendeln, Waldwege, Alltag'
    },
    {
      name: 'HYPER-DRIVE 2000W & 52V Bundle',
      slug: 'hyper-drive-2000w-motor-52v-akku-bundle',
      category: 'e-bike-umbausaetze',
      price: '€995,00',
      cryptoPrice: '€945,25',
      power: '2000W Peak / 1500W',
      torque: '125 Nm',
      battery: '52V 20Ah (1040Wh)',
      speed: 'ca. 55-60 km/h (Offroad)',
      stvzo: false,
      license: 'Nicht im Straßenverkehr zulässig',
      helmet: 'Vollvisierhelm dringend angeraten',
      insurance: 'Nicht versicherbar im Straßenverkehr',
      adr: 'ADR Klasse 9 Gefahrgut',
      useCase: 'Singletrails, Privatgelände, Bergstrecken'
    },
    {
      name: 'ULTRA-DRIVE 3000W & 72V Bundle',
      slug: 'ultra-drive-3000w-motor-72v-batterie-bundle',
      category: 'e-bike-umbausaetze',
      price: '€1.590,00',
      cryptoPrice: '€1.510,50',
      power: '5000W Peak / 3000W',
      torque: '165 Nm',
      battery: '72V 28Ah (2016Wh)',
      speed: 'ca. 70-75 km/h (Offroad)',
      stvzo: false,
      license: 'Nicht im Straßenverkehr zulässig',
      helmet: 'ECE 22.06 Motocross-Helm Pflicht',
      insurance: 'Reines Sportgerät',
      adr: 'ADR Klasse 9 Spedition',
      useCase: 'Extreme Steigungen, Custom Drag/Trail'
    },
    {
      name: '2026 ETM RTR SPORT',
      slug: '2026-etm-rtr-sport-elektro-dirt-bike',
      category: 'komplette-e-motos',
      price: '€4.190,00',
      cryptoPrice: '€3.980,50',
      power: '8000W Peak Power',
      torque: '280 Nm (Hinterrad)',
      battery: '72V 35Ah (2520Wh)',
      speed: 'ca. 85 km/h',
      stvzo: false,
      license: 'Reines Offroad-Sportgerät',
      helmet: 'MX-Schutzausrüstung erforderlich',
      insurance: 'Reines Sportgerät ohne CoC',
      adr: 'ADR 9 Palettenversand',
      useCase: 'Motocross-Strecken, Hard-Enduro'
    },
    {
      name: 'Strike Cycles SHADOW 72V',
      slug: 'strike-cycles-shadow-72v-7kw-dirt-bike',
      category: 'komplette-e-motos',
      price: '€3.990,00',
      cryptoPrice: '€3.790,50',
      power: '7000W Peak Motocross',
      torque: '250 Nm',
      battery: '72V 32Ah Samsung (2304Wh)',
      speed: 'ca. 80 km/h',
      stvzo: false,
      license: 'Reines Offroad-Sportgerät',
      helmet: 'MX-Schutzausrüstung erforderlich',
      insurance: 'Reines Sportgerät ohne CoC',
      adr: 'ADR 9 Palettenversand',
      useCase: 'Freeride, Singletrail, Privatgelände'
    }
  ];

  return (
    <div className="py-12 bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-white transition-colors">{locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}</Link>
          <span>/</span>
          <span className="text-slate-300">{locale === 'de' || locale === 'de-CH' ? 'Modellvergleich' : 'Comparison'}</span>
        </nav>

        {/* Header */}
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-1 bg-[#1a1a26] border border-[#2b2b3e] text-slate-300 text-xs font-mono rounded">
            {locale === 'de' || locale === 'de-CH' ? 'TECHNISCHE VERGLEICHSMATRIX' : 'TECHNICAL COMPARISON MATRIX'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {locale === 'de' || locale === 'de-CH' ? 'Modell-, Leistungs- & Zulassungsvergleich' : 'Model, Power & Legal Comparison'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
            {locale === 'de' || locale === 'de-CH' 
              ? 'Transparente Übersicht aller Leistungskennzahlen, Drehmomente, rechtlicher Anforderungen nach StVZO sowie Gefahrgut-Klassifizierungen.'
              : 'Transparent overview of all performance metrics, torques, legal requirements, and hazmat classifications.'}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#14141c] border border-[#262638] rounded-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#181824] border-b border-[#28283a] text-white font-mono">
                  <th className="p-4 font-bold text-slate-300 min-w-[180px]">Merkmal</th>
                  {compareItems.map((item, i) => (
                    <th key={i} className="p-4 font-bold min-w-[200px]">
                      <div>{item.name}</div>
                      <div className="text-[11px] text-[#E63946] mt-0.5">{item.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#20202e] font-sans text-slate-300">
                
                {/* StVZO Zulassung Row */}
                <tr className="bg-[#161622]">
                  <td className="p-4 font-bold font-mono text-white">StVZO Straßenzulassung</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4">
                      {item.stvzo ? (
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold font-mono">
                          <ShieldCheck className="w-4 h-4" />
                          <span>100% StVZO (Pedelec)</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-amber-400 font-bold font-mono text-[11px]">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Offroad Sportgerät</span>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Peak-/Nennleistung</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 font-mono font-medium text-white">{item.power}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Drehmoment</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 font-mono text-[#E63946] font-bold">{item.torque}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Batteriesystem</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 font-mono">{item.battery}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Geschwindigkeit</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 font-mono">{item.speed}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Führerschein-Status</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 text-xs">{item.license}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Schutzkleidung</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 text-xs">{item.helmet}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Gefahrgutversand</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 font-mono text-[11px] text-amber-300">{item.adr}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Krypto-Preis (-5%)</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 font-mono font-bold text-emerald-400">{item.cryptoPrice}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-bold font-mono text-slate-400">Empfohlener Einsatz</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4 text-xs text-slate-400">{item.useCase}</td>
                  ))}
                </tr>

                <tr className="bg-[#161622]">
                  <td className="p-4 font-bold font-mono text-white">Produktseite</td>
                  {compareItems.map((item, i) => (
                    <td key={i} className="p-4">
                      <Link
                        href={`/shop/${item.category}/${item.slug}/` as any}
                        className="inline-flex items-center gap-1 text-[#E63946] hover:text-white font-mono font-bold text-xs"
                      >
                        <span>{locale === 'de' || locale === 'de-CH' ? 'Konfigurieren' : 'Configure'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
