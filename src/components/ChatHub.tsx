'use client';

import React, { useState } from 'react';
import { CONTACT, SITE } from '@/src/config/site';
import { useCart } from '@/src/lib/cart-context';
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  Zap,
  ShieldCheck,
  Clock
} from 'lucide-react';

export function ChatHub() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useCart();

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#FF3B30] hover:bg-[#e03026] text-white rounded-full shadow-2xl transition-all transform hover:scale-105 font-mono text-xs font-bold border border-white/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF3B30]"
          aria-label={isOpen ? (t.chat?.close || 'Chat-Hub schließen') : (t.chat?.open || 'Werkstatt-Chat öffnen')}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <>
              <MessageCircle className="w-5 h-5 fill-current" />
              <span className="hidden sm:inline">{t.chat?.open || 'Werkstatt-Chat'}</span>
            </>
          )}
        </button>
      </div>

      {/* Chat Concierge Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label={`${SITE.name} Technischer Kundendienst`}
          className="fixed bottom-20 right-4 sm:right-6 w-80 sm:w-96 bg-[#121218] border border-white/10 rounded-2xl shadow-2xl z-40 overflow-hidden text-white animate-in fade-in slide-in-from-bottom-4 backdrop-blur-xl"
        >
          {/* Header */}
          <div className="bg-[#181822] p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FF3B30]/20 border border-[#FF3B30] flex items-center justify-center text-[#FF3B30]">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-xs font-bold font-mono text-white">{t.chat?.title || `${SITE.name} Werkstatt-Concierge`}</h3>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.chat?.status || 'Online · München / Freising'}</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Intro Box */}
          <div className="p-4 bg-[#0d0d12] border-b border-white/5 text-xs text-slate-300 space-y-2">
            <p className="leading-snug">
              {t.chat?.subtitle || `Willkommen bei ${SITE.name}. Haben Sie Fragen zu E-Motos, Hochvolt-Umbausätzen oder StVZO-Zulassungen?`}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{t.chat?.availabilityNotice || CONTACT.openingHours}</span>
            </div>
          </div>

          {/* Channels List */}
          <div className="p-4 space-y-2">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT.whatsappClean}?text=${encodeURIComponent(`Hallo ${SITE.name} Werkstatt, ich benötige Beratung.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 bg-[#181822] hover:bg-[#20202e] border border-white/5 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {t.chat?.whatsappFastLane || 'WhatsApp Werkstatt-Chat'}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">{CONTACT.whatsapp}</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${CONTACT.phoneClean}`}
              className="flex items-center justify-between p-3 bg-[#181822] hover:bg-[#20202e] border border-white/5 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#FF3B30]/20 text-[#FF3B30] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#FF3B30] transition-colors">
                    {t.chat?.phoneDirect || 'Telefonische Fachberatung'}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">{CONTACT.phone}</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center justify-between p-3 bg-[#181822] hover:bg-[#20202e] border border-white/5 rounded-xl transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-slate-600/20 text-slate-300 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-slate-200 transition-colors">
                    {t.chat?.emailTickets || 'Ticketsystem & E-Mail'}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">{CONTACT.email}</div>
                </div>
              </div>
              <Send className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Privacy Footnote */}
          <div className="p-3 bg-[#0d0d12] border-t border-white/5 text-[10px] text-slate-500 text-center font-mono flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>100% DSGVO-konform ohne Third-Party Tracking</span>
          </div>

        </div>
      )}
    </>
  );
}
