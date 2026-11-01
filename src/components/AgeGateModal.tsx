'use client';

import React from 'react';
import { useCart } from '@/src/lib/cart-context';
import { AlertTriangle, ShieldAlert, Check } from 'lucide-react';

export function AgeGateModal() {
  const { isAgeVerified, verifyAge, locale, mounted } = useCart();

  if (!mounted || isAgeVerified) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="w-full max-w-lg bg-[#14141c] border-2 border-[#E63946] rounded-xl p-6 text-white shadow-2xl space-y-4">
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#E63946]/20 border border-[#E63946] flex items-center justify-center text-[#E63946] shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold font-mono tracking-wide text-white uppercase">
              Altersüberprüfung & Sicherheitshinweis (16+)
            </h2>
            <div className="text-[11px] text-slate-400 font-mono">
              German Law & Off-Road Motor Vehicle Safety Standard
            </div>
          </div>
        </div>

        <div className="bg-[#1b1b26] border border-[#2c2c3c] rounded-lg p-3.5 text-xs text-slate-300 space-y-2 leading-relaxed">
          <p>
            Unser Sortiment umfasst <strong>leistungsstarke E-Motos, Hochvolt-Umbausätze (1000W–5000W) und 72V Traktionsbatterien</strong>.
          </p>
          <div className="flex items-start gap-2 text-amber-400 text-[11px]">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              Reine Offroad-Modelle und Umbausätze mit &gt;250W sind im Geltungsbereich der StVZO nicht für den öffentlichen Straßenverkehr zugelassen (Nutzung ausschließlich auf Privatgelände/Rennstrecken).
            </span>
          </div>
          <p className="text-slate-400 text-[11px]">
            Um fortzufahren, bestätigen Sie bitte, dass Sie mindestens <strong>16 Jahre alt</strong> sind.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={verifyAge}
            className="flex-1 py-3 px-4 bg-[#E63946] hover:bg-[#d52b38] text-white font-bold font-mono text-xs rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <Check className="w-4 h-4" />
            <span>Ich bin mindestens 16 Jahre alt</span>
          </button>
          
          <button
            type="button"
            onClick={() => {
              window.location.href = 'https://www.google.de';
            }}
            className="py-3 px-4 bg-[#1e1e28] hover:bg-[#252534] text-slate-400 hover:text-white font-mono text-xs rounded-md transition-colors"
          >
            Abbrechen / Seite verlassen
          </button>
        </div>

      </div>
    </div>
  );
}
