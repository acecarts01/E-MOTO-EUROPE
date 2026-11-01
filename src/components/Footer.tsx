'use client';

import React from 'react';
import Link from 'next/link';
import { SITE, CONTACT, SHOP, CATEGORIES } from '@/src/config/site';
import { useCart } from '@/src/lib/cart-context';
import {
  Zap,
  ShieldCheck,
  AlertTriangle,
  CreditCard,
  Building2,
  Mail,
  Phone,
  MessageCircle,
  Truck
} from 'lucide-react';

export function Footer() {
  const { t } = useCart();

  return (
    <footer className="bg-[#0a0a0d] border-t border-[#1e1e26] text-slate-400 text-xs mt-20">
      
      {/* Dangerous Goods & ADR Legal Bar */}
      <div className="bg-[#121217] border-b border-[#20202a] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 max-w-3xl">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <div className="text-slate-200 font-bold text-xs uppercase tracking-wider mb-1">
                ADR Klasse 9 & StVZO Compliance
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                {t.footer?.adrNotice || 'Traktionsbatterien mit mehr als 100Wh unterliegen den europäischen Gefahrgutvorschriften ADR Klasse 9 (UN 3480 / UN 3481) und werden ausschließlich in UN-geprüften Spezialkartons per Spedition mit Hebebühne versandt.'}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300">
            <span className="bg-[#1a1a24] border border-[#2a2a38] px-2.5 py-1 rounded">ADR SV 188</span>
            <span className="bg-[#1a1a24] border border-[#2a2a38] px-2.5 py-1 rounded">UN 3480 / 3481</span>
            <span className="bg-[#1a1a24] border border-[#2a2a38] px-2.5 py-1 rounded">EN 15194 Pedelec</span>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Corporate Entity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#1c1c24] border border-[#2d2d3a] flex items-center justify-center text-[#E63946]">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="font-extrabold text-base tracking-wider text-white font-mono">
                E-MOTO <span className="text-[#FF3B30]">EUROPE</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {t.footer?.brandDescription || `${SITE.name} ist Europas spezialisierter Hub für High-Performance E-Motos, E-MTB Umbausätze und gefahrgut-zertifizierte 72V Traktionsbatterien nach ADR Klasse 9.`}
            </p>

            <div className="space-y-1.5 text-[11px] text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <a href={`tel:${CONTACT.phoneClean}`} className="hover:text-white transition-colors">
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <a href={`https://wa.me/${CONTACT.whatsappClean}`} className="hover:text-white transition-colors">
                  WhatsApp: {CONTACT.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                {/* Entity-encoded email as required by WebForge rules */}
                <span dangerouslySetInnerHTML={{ __html: CONTACT.emailEncoded }} className="text-slate-300" />
              </div>
            </div>
          </div>

          {/* Catalog & Systems */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              {t.footer?.catalogCol || 'Shop & Systeme'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop/" className="hover:text-white transition-colors">
                  {t.nav?.shop || 'Gesamter Katalog'}
                </Link>
              </li>
              {CATEGORIES.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/shop/${cat.slug}/`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop/e-bike-umbausaetze/" className="hover:text-white transition-colors text-emerald-400">
                  {t.nav?.kits || '250W Pedelec (100% StVZO)'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Information & Tools */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              {t.footer?.serviceCol || 'Service & Technik'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/magazin/" className="hover:text-white transition-colors">
                  {t.nav?.legalGuides || 'Magazin & Rechtsleitfaden'}
                </Link>
              </li>
              <li>
                <Link href="/vergleich/" className="hover:text-white transition-colors">
                  {t.nav?.compare || 'Modell- & Motorenvergleich'}
                </Link>
              </li>
              <li>
                <Link href="/foerderung/" className="hover:text-white transition-colors">
                  {t.nav?.subsidies || 'E-Mobilitäts-Förderrechner'}
                </Link>
              </li>
              <li>
                <Link href="/wholesale/" className="hover:text-white transition-colors">
                  {t.nav?.b2b || 'B2B Händlerportal & Werkstätten'}
                </Link>
              </li>
              <li>
                <Link href="/sendungsverfolgung/" className="hover:text-white transition-colors">
                  {t.footer?.tracking || 'Speditions- & Sendungsverfolgung'}
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-white transition-colors">
                  {t.nav?.faq || 'Häufige Fragen (FAQ)'}
                </Link>
              </li>
              <li>
                <Link href="/kontakt/" className="hover:text-white transition-colors">
                  {t.nav?.contact || 'Werkstatt & Vor-Ort-Termine'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Compliance Germany & EU */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              {t.footer?.legalCol || 'Rechtliche Pflichtangaben'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/impressum/" className="hover:text-white transition-colors font-medium">
                  {t.footer?.impressum || 'Impressum (§ 5 DDG)'}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz/" className="hover:text-white transition-colors font-medium">
                  {t.footer?.privacy || 'Datenschutzerklärung (DSGVO)'}
                </Link>
              </li>
              <li>
                <Link href="/agb/" className="hover:text-white transition-colors font-medium">
                  {t.footer?.terms || 'Allgemeine Geschäftsbedingungen (AGB)'}
                </Link>
              </li>
              <li>
                <Link href="/widerruf/" className="hover:text-white transition-colors font-medium">
                  {t.footer?.revocation || 'Widerrufsbelehrung & Formular'}
                </Link>
              </li>
              <li>
                <Link href="/batteriehinweise/" className="hover:text-white transition-colors font-medium">
                  {t.footer?.batteryNotice || 'Batterie- & Entsorgung (BattG/ElektroG)'}
                </Link>
              </li>
              <li>
                <a href="/llms.txt" className="hover:text-white transition-colors font-mono text-[11px] text-slate-500">
                  llms.txt (AI Index)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Payment Methods & Shipping Partners */}
        <div className="border-t border-[#181820] pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-slate-400 font-mono mr-2">Zahlungsarten:</span>
            <span className="bg-[#14141c] border border-[#262634] px-2.5 py-1 rounded text-[11px] text-slate-300">
              SEPA Vorkasse / Überweisung
            </span>
            <span className="bg-[#14141c] border border-[#262634] px-2.5 py-1 rounded text-[11px] text-slate-300">
              Bitcoin (BTC) -5% Rabatt
            </span>
            <span className="bg-[#14141c] border border-[#262634] px-2.5 py-1 rounded text-[11px] text-slate-300">
              USDT (TRC20/ERC20) -5% Rabatt
            </span>
            <span className="bg-[#14141c] border border-[#262634] px-2.5 py-1 rounded text-[11px] text-slate-300">
              Klarna Rechnungskauf / Sofort
            </span>
            <span className="bg-[#14141c] border border-[#262634] px-2.5 py-1 rounded text-[11px] text-slate-300">
              iDEAL (NL)
            </span>
            <span className="bg-[#14141c] border border-[#262634] px-2.5 py-1 rounded text-[11px] text-slate-300">
              BLIK (PL)
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
            <Truck className="w-4 h-4 text-slate-500" />
            <span>DHL Paket · Dachser Spedition (Hebebühne) · DB Schenker</span>
          </div>
        </div>

        {/* Legal Registry Notice & Copyright */}
        <div className="border-t border-[#14141a] pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 font-mono">
          <div>
            © {new Date().getFullYear()} {SITE.legalName}. Alle Rechte vorbehalten.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <span>HRB: {CONTACT.commercialRegistry}</span>
            <span>USt-IdNr.: {CONTACT.vatId}</span>
            <span>WEEE: {CONTACT.weeeReg}</span>
            <span>BattG: {CONTACT.battGReg}</span>
            <span>LUCID: {CONTACT.lucidReg}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
