'use client';

import React from 'react';
import { Link } from '@/src/i18n/routing';
import { CONTACT } from '@/src/config/site';
import { useI18n } from '@/src/lib/cart-context';
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

export function FAQClient() {
  const { t, locale } = useI18n();

  // We use the localized FAQ items from the dictionary
  const faqItems = t.faqItems || [];

  return (
    <div className="py-12 bg-[#09090c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-white transition-colors">
            {locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}
          </Link>
          <span>/</span>
          <span className="text-slate-300">{t.faqPage?.breadcrumb || 'FAQ'}</span>
        </nav>

        {/* Title */}
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-1 bg-[#1a1a26] border border-[#2b2b3e] text-slate-300 text-xs font-mono rounded">
            {(t.faqPage as any)?.badge || 'WISSENSDATENBANK & SUPPORT'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
            {t.faqPage?.title || 'Häufig gestellte Fragen (FAQ)'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            {t.faqPage?.subtitle || 'Hier finden Sie präzise Direktantworten zu rechtlichen Rahmenbedingungen in Deutschland und Europa, technischen Spezifikationen und unserem Gefahrgut-Speditionsversand.'}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.length > 0 ? (
            faqItems.map((item: any, idx: number) => (
              <div
                key={idx}
                className="bg-[#121218] border border-white/5 rounded-2xl p-5 sm:p-7 space-y-4 shadow-xl"
              >
                <h2 className="text-sm sm:text-base font-bold text-white flex items-start gap-4 font-mono">
                  <span className="text-[#FF3B30] shrink-0">{String(idx + 1).padStart(2, '0')}.</span>
                  <span>{item.question}</span>
                </h2>
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-9 border-l border-white/5 font-sans">
                  {item.answer}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-slate-500 font-mono text-xs">
              Loading localized database...
            </div>
          )}
        </div>

        {/* Direct Support Contact Box */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3B30]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-base font-bold text-white font-mono uppercase tracking-wide">
              {t.faqPage?.moreQuestions || 'Ihre Frage wurde hier nicht beantwortet?'}
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-xl leading-relaxed">
              {t.contactPage?.subtitle || 'Unsere Werkstatt in Freising bei München berät Sie gerne persönlich zu Rahmenkompatibilität, Motorsteuerungen und Batterieauslegung.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono relative z-10">
            <a
              href={`https://wa.me/${CONTACT.whatsappClean}`}
              className="p-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl transition-all flex items-center gap-4 group"
            >
              <MessageCircle className="w-6 h-6 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-bold text-white uppercase tracking-tight">{t.faqPage?.askWhatsapp || 'WhatsApp'}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{CONTACT.whatsapp}</div>
              </div>
            </a>

            <a
              href={`tel:${CONTACT.phoneClean}`}
              className="p-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl transition-all flex items-center gap-4 group"
            >
              <Phone className="w-6 h-6 text-[#FF3B30] shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-bold text-white uppercase tracking-tight">{t.chat?.phoneDirect || 'Telefon'}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{CONTACT.phone}</div>
              </div>
            </a>

            <Link
              href="/contact"
              className="p-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl transition-all flex items-center gap-4 group"
            >
              <Mail className="w-6 h-6 text-[#00F0FF] shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <div className="font-bold text-white uppercase tracking-tight">{t.faqPage?.askEmail || 'Kontakt'}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{t.contactPage?.breadcrumb || 'Anfrage schreiben'}</div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
