'use client';

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/src/lib/cart-context';
import { SITE } from '@/src/config/site';

interface LegalClientProps {
  type: 'agb' | 'datenschutz' | 'impressum' | 'widerruf' | 'batteriehinweise';
  content: {
    de: string;
    en: string;
    // other languages could be added here or fetched from a dedicated legal dictionary
  };
}

export function LegalClient({ type, content }: LegalClientProps) {
  const { locale, t } = useI18n();

  // For legal pages, we often have long blocks of text.
  // We'll use the localized title from t.legalContent and fallback to English for the body if local not available,
  // or ideally we provide full translations.
  
  const title = t.legalContent[`${type}Title` as keyof typeof t.legalContent] || type.toUpperCase();
  
  // Logic to get the right content based on locale
  // For now, if it's de/de-CH use de, else en. 
  // In a real app, we'd have all 10 translations for the legal text itself.
  const body = locale.startsWith('de') ? content.de : content.en;

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white font-medium">{title}</span>
      </nav>

      <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-white">
        {title}
      </h1>

      <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-strong:text-white prose-a:text-red-500 hover:prose-a:text-red-400 prose-hr:border-slate-800">
        <div className="bg-[#141417] border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 blur-[80px] pointer-events-none" />
          
          <div 
            className="relative z-10 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: body }} 
          />
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          {SITE.legalName} &copy; {new Date().getFullYear()} — {t.footer.rightsReserved}
        </p>
      </div>
    </div>
  );
}
