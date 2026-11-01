'use client';

import React, { useState } from 'react';
import { SITE } from '@/src/config/site';
import { useCart } from '@/src/lib/cart-context';
import { Calculator, CheckCircle2, Info, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { Link } from '@/src/i18n/routing';

export function SubsidyClient() {
  const { locale, t } = useCart();
  const [purchasePrice, setPurchasePrice] = useState<number>(1490);
  const [entityType, setEntityType] = useState<'private' | 'business'>('business');
  const [region, setRegion] = useState<'bayern' | 'bawue' | 'nrw' | 'other_de' | 'austria'>('bayern');
  const [bikeType, setBikeType] = useState<'pedelec' | 'cargo' | 'conversion'>('pedelec');

  // Calculation logic based on German municipal / state subsidy schemes
  let subsidyPercent = 0;
  let maxSubsidy = 0;

  if (bikeType === 'cargo') {
    subsidyPercent = entityType === 'business' ? 25 : 20;
    maxSubsidy = 1500;
  } else if (bikeType === 'conversion' || bikeType === 'pedelec') {
    if (region === 'bayern' || region === 'bawue') {
      subsidyPercent = entityType === 'business' ? 20 : 15;
      maxSubsidy = 500;
    } else {
      subsidyPercent = 15;
      maxSubsidy = 300;
    }
  }

  const calculatedSubsidy = Math.min(maxSubsidy, purchasePrice * (subsidyPercent / 100));
  const effectiveCost = Math.max(0, purchasePrice - calculatedSubsidy);
  const vatDeduction = entityType === 'business' ? purchasePrice * (19 / 119) : 0;
  const netEffectiveCost = entityType === 'business' ? effectiveCost - vatDeduction : effectiveCost;

  return (
    <div className="py-12 bg-[#0d0d12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-white transition-colors">{locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}</Link>
          <span>/</span>
          <span className="text-slate-300">{t.nav.subsidies}</span>
        </nav>

        {/* Title */}
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-1 bg-[#1a1a26] border border-[#2b2b3e] text-slate-300 text-xs font-mono rounded">
            {locale.startsWith('de') ? 'STAATLICHE & KOMMUNALE ZUSCHÜSSE 2026' : 'STATE & MUNICIPAL SUBSIDIES 2026'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {locale.startsWith('de') ? 'E-Mobilitäts-Förderungsrechner' : 'E-Mobility Subsidy Calculator'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
            {locale.startsWith('de') 
              ? 'Berechnen Sie staatliche Förderzuschüsse von Kommunen, Bundesländern und BAFA für den gewerblichen Einsatz und 100% StVZO-konforme Pedelec-Systeme.'
              : 'Calculate state subsidies from municipalities, states, and BAFA for commercial use and 100% street-legal pedelec systems.'}
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="bg-[#14141c] border border-[#262638] rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-2xl">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#E63946]" />
              <span>{locale.startsWith('de') ? 'Parameter konfigurieren' : 'Configure Parameters'}</span>
            </h2>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                {locale.startsWith('de') ? 'Kaufpreis (inkl. 19% MwSt.)' : 'Purchase Price (incl. VAT)'}: €{purchasePrice}
              </label>
              <input
                type="range"
                min="500"
                max="5000"
                step="50"
                value={purchasePrice}
                onChange={e => setPurchasePrice(parseInt(e.target.value))}
                className="w-full accent-[#E63946] bg-[#1f1f2e] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>€500</span>
                <span>€2.500</span>
                <span>€5.000</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div>
                <label className="block text-slate-400 mb-1">{locale.startsWith('de') ? 'Käufer-Typ:' : 'Buyer Type:'}</label>
                <div className="flex rounded border border-[#2a2a3c] bg-[#181824] p-1">
                  <button
                    type="button"
                    onClick={() => setEntityType('business')}
                    className={`flex-1 py-1.5 text-center rounded transition-colors ${
                      entityType === 'business' ? 'bg-[#E63946] text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {locale.startsWith('de') ? 'Gewerbe / B2B' : 'Business'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEntityType('private')}
                    className={`flex-1 py-1.5 text-center rounded transition-colors ${
                      entityType === 'private' ? 'bg-[#E63946] text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {locale.startsWith('de') ? 'Privat' : 'Private'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">{locale.startsWith('de') ? 'Fahrzeugklasse:' : 'Vehicle Class:'}</label>
                <select
                  value={bikeType}
                  onChange={e => setBikeType(e.target.value as 'pedelec' | 'cargo' | 'conversion')}
                  className="w-full bg-[#181824] border border-[#2a2a3c] text-slate-200 rounded px-3 py-1.5 focus:outline-none"
                >
                  <option value="pedelec">250W StVZO Pedelec</option>
                  <option value="conversion">{locale.startsWith('de') ? 'Umbausatz (StVZO-konform)' : 'Conversion Kit (Legal)'}</option>
                  <option value="cargo">{locale.startsWith('de') ? 'E-Lastenrad / Cargo' : 'E-Cargo Bike'}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">
                {locale.startsWith('de') ? 'Bundesland / Fördergebiet:' : 'Region / Subsidy Zone:'}
              </label>
              <select
                value={region}
                onChange={e => setRegion(e.target.value as 'bayern' | 'bawue' | 'nrw' | 'other_de' | 'austria')}
                className="w-full bg-[#181824] border border-[#2a2a3c] text-slate-200 rounded px-3 py-2 text-xs font-mono focus:outline-none"
              >
                <option value="bayern">Bayern (DE)</option>
                <option value="bawue">Baden-Württemberg (DE)</option>
                <option value="nrw">Nordrhein-Westfalen (DE)</option>
                <option value="other_de">Übriges Deutschland</option>
                <option value="austria">Österreich (AT)</option>
              </select>
            </div>

            <div className="p-3 bg-[#171724] border border-[#262638] rounded text-[11px] text-slate-400 leading-snug flex items-start gap-2">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                {locale.startsWith('de') 
                  ? 'Hinweis: Förderprogramme beziehen sich stets auf straßenzugelassene Pedelecs (EN 15194) oder gewerbliche Lastenräder. Reine Offroad-Sportgeräte sind nicht förderfähig.'
                  : 'Note: Subsidy programs always refer to street-legal pedelecs (EN 15194) or commercial cargo bikes. Pure off-road sporting gear is not eligible.'}
              </span>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-[#181826] border border-[#2e2e44] rounded-xl p-6 space-y-5">
            <h3 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              {locale.startsWith('de') ? 'Ergebnis & Ersparnis' : 'Result & Savings'}
            </h3>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between text-slate-400">
                <span>{locale.startsWith('de') ? 'Brutto-Kaufpreis:' : 'Gross Price:'}</span>
                <span>€{purchasePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold">
                <span>{locale.startsWith('de') ? 'Geschätzter Förderzuschuss:' : 'Estimated Subsidy:'}</span>
                <span>-€{calculatedSubsidy.toFixed(2)}</span>
              </div>
              {entityType === 'business' && (
                <div className="flex justify-between text-sky-400 text-[11px]">
                  <span>{locale.startsWith('de') ? 'MwSt.-Vorsteuerabzug (19%):' : 'VAT Deduction (19%):'}</span>
                  <span>-€{vatDeduction.toFixed(2)}</span>
                </div>
              )}

              <div className="pt-3 border-t border-[#2a2a40] flex justify-between items-baseline">
                <span className="font-bold text-white text-sm">{locale.startsWith('de') ? 'Effektive Eigenkosten:' : 'Effective Net Cost:'}</span>
                <span className="text-xl font-extrabold text-[#E63946]">
                  €{netEffectiveCost.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#13131c] rounded border border-[#222232] text-[11px] text-slate-400 space-y-1 font-mono">
              <div className="text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Bis zu {Math.round(((purchasePrice - netEffectiveCost) / purchasePrice) * 100)}% {locale.startsWith('de') ? 'Gesamtersparnis' : 'Total Savings'}</span>
              </div>
              <p className="font-sans leading-tight">
                {locale.startsWith('de') 
                  ? 'Zusätzlich können gewerbliche Kunden die 0,25%-Dienstfahrrad-Regelung nach EStG in Anspruch nehmen.'
                  : 'Additionally, commercial customers can benefit from specific tax deductions for e-bikes.'}
              </p>
            </div>

            <Link
              href={"/shop/e-bike-umbausaetze/250w-street-legal-pedelec-umbaussatz-stvzo" as any}
              className="w-full py-3 bg-[#E63946] hover:bg-[#d52b38] text-white font-mono font-bold text-xs uppercase tracking-wider rounded text-center block transition-colors"
            >
              {locale.startsWith('de') ? 'Förderfähiges 250W Kit ansehen' : 'View Eligible 250W Kit'}
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
