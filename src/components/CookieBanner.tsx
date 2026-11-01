'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/src/lib/cart-context';
import { ShieldCheck, Cookie } from 'lucide-react';

export function CookieBanner() {
  const { cookieConsent, acceptCookies, declineCookies, mounted } = useCart();

  if (!mounted || cookieConsent !== null) return null;

  return (
    <div
      role="region"
      aria-label="Datenschutzeinstellungen"
      className="fixed bottom-0 inset-x-0 z-50 p-4 bg-[#101016]/98 border-t border-[#2a2a3a] text-white shadow-2xl backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-start gap-3 max-w-4xl text-xs text-slate-300">
          <div className="p-2 bg-[#1c1c28] rounded border border-[#2e2e40] text-[#E63946] shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="font-bold text-white font-mono flex items-center gap-2">
              <span>Datenschutz & Cookie-Einstellungen (DSGVO / TTDSG)</span>
              <span className="text-[10px] text-emerald-400 font-normal border border-emerald-500/30 px-1.5 py-0.2 rounded">
                Keine Werbetracker
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Wir verwenden ausschließlich technisch notwendige Cookies (z. B. für den Warenkorb und Ihre Spracheinstellungen). Es werden standardmäßig keinerlei Werbe- oder Tracking-Cookies an Dritte übermittelt. Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz/" className="text-white underline hover:text-[#E63946]">
                Datenschutzerklärung
              </Link>{' '}
              und im{' '}
              <Link href="/impressum/" className="text-white underline hover:text-[#E63946]">
                Impressum
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
          <button
            type="button"
            onClick={acceptCookies}
            className="flex-1 md:flex-none py-2 px-4 bg-[#E63946] hover:bg-[#d52b38] text-white font-mono text-xs font-bold rounded transition-colors"
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={declineCookies}
            className="flex-1 md:flex-none py-2 px-4 bg-[#1e1e28] hover:bg-[#282838] text-slate-300 hover:text-white font-mono text-xs rounded transition-colors border border-[#303042]"
          >
            Nur notwendige Cookies
          </button>
        </div>

      </div>
    </div>
  );
}
