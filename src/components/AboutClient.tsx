'use client';

import React from 'react';
import Link from 'next/link';
import { SITE, BRAND, CONTACT } from '@/src/config/site';
import { useCart } from '@/src/lib/cart-context';
import {
  Building2,
  ShieldCheck,
  Truck,
  Award,
  ChevronRight
} from 'lucide-react';

export function AboutClient() {
  const { t, locale } = useCart();

  return (
    <div className="py-12 bg-[#0d0d12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-white transition-colors">{locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}</Link>
          <span>/</span>
          <span className="text-slate-300">{t.aboutPage?.breadcrumb || 'Über uns'}</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a26] border border-[#2e2e42] rounded text-slate-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#E63946]" />
            <span>{t.aboutPage?.badge || 'INGENIEURS-STANDORT DEUTSCHLAND'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {t.aboutPage?.title || `Über ${SITE.name}`}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {t.aboutPage?.subtitle || 'Fachanbieter für High-Performance E-Motos, Umbausätze und Lithium-Traction-Batterien.'}
          </p>
        </div>

        {/* Narrative Story Section */}
        <div className="bg-[#14141c] border border-[#242434] rounded-xl p-6 sm:p-10 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#E63946]" />
              <span>{t.aboutPage?.storyTitle || '1. Unsere Entstehungsgeschichte & Philosophie'}</span>
            </h2>
            <p>{t.aboutPage?.storyP1}</p>
            <p>{t.aboutPage?.storyP2}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#222232]">
            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>{t.aboutPage?.legalTitle || '2. Deutsches Recht & Klare Trennung: StVZO vs. Offroad'}</span>
            </h2>
            <p>{t.aboutPage?.legalP1}</p>
            <ul className="space-y-4 pl-4 list-disc text-slate-400 font-sans">
              <li>
                <strong className="text-white">{t.aboutPage?.legalPedelecTitle}:</strong> {t.aboutPage?.legalPedelecText}
              </li>
              <li>
                <strong className="text-white">{t.aboutPage?.legalOffroadTitle}:</strong> {t.aboutPage?.legalOffroadText}
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#222232]">
            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
              <Truck className="w-5 h-5 text-amber-500" />
              <span>{t.aboutPage?.adrTitle || '3. Zertifizierte Gefahrgut-Logistik nach ADR Klasse 9'}</span>
            </h2>
            <p>{t.aboutPage?.adrText}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#222232]">
            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wide flex items-center gap-2">
              <Award className="w-5 h-5 text-sky-400" />
              <span>{t.aboutPage?.diffTitle || '4. Unsere 4 Differenzierungsmerkmale'}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {BRAND.differentiation.map((diff, i) => (
                <div key={i} className="p-4 bg-[#181824] rounded-lg border border-[#28283a] space-y-1">
                  <div className="text-[#E63946] font-mono font-bold text-xs">Vorteil 0{i + 1}</div>
                  <p className="text-slate-300 text-xs leading-relaxed">{diff}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="space-y-4 pt-6 border-t border-[#222232]">
            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wide">
              {t.aboutPage?.milestonesTitle || '5. Historische Meilensteine'}
            </h2>
            <div className="space-y-3 font-mono text-xs">
              {BRAND.milestones.map((m, idx) => (
                <div key={idx} className="flex items-start gap-4 p-3 bg-[#181824] rounded border border-[#262638]">
                  <span className="text-[#E63946] font-bold text-sm shrink-0">{m.year}</span>
                  <span className="text-slate-300 font-sans">{m.event}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Quick Contact Card */}
        <div className="bg-[#14141c] border border-[#242434] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white font-mono">
              {t.faqPage?.moreQuestions || 'Persönliche Beratung in unserer Werkstatt gewünscht?'}
            </h3>
            <p className="text-xs text-slate-400">
              {t.contactPage?.subtitle}
            </p>
          </div>
          <Link
            href="/kontakt/"
            className="px-6 py-3 bg-[#E63946] hover:bg-[#d52b38] text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors whitespace-nowrap"
          >
            {t.contactPage?.submitBtn || 'Werkstatttermin anfragen'}
          </Link>
        </div>

      </div>
    </div>
  );
}
