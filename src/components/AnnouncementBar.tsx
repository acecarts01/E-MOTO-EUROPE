'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/src/lib/cart-context';
import { SHOP, CONTACT } from '@/src/config/site';
import { Zap, Truck, ShieldCheck, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export function AnnouncementBar() {
  const { t, locale } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <Zap className="w-3.5 h-3.5 text-[#E63946]" />,
      text: t.announcements?.cryptoDiscount || '5% Sofortrabatt bei Zahlung mit Krypto (Bitcoin & USDT)'
    },
    {
      icon: <Truck className="w-3.5 h-3.5 text-[#E63946]" />,
      text: t.announcements?.freeShipping || `Versandkostenfrei ab ${SHOP.freeShippingThreshold} € für Zubehör & Komponenten`
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#E63946]" />,
      text: t.announcements?.adrSafety || 'Gefahrgut-Zertifiziert: Gesetzeskonformer ADR Klasse 9 Versand für Traktionsakkus'
    },
    {
      icon: <MessageCircle className="w-3.5 h-3.5 text-[#E63946]" />,
      text: t.announcements?.whatsappAdvice || `Technische Werkstattberatung per WhatsApp: ${CONTACT.whatsapp}`
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-[#0c0c0e] border-b border-[#22222a] text-slate-300 text-xs py-2 px-4 select-none relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
          className="p-1 hover:text-white transition-colors"
          aria-label="Vorherige Ankündigung"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center justify-center gap-2 overflow-hidden text-center mx-2 font-medium">
          {slides[currentSlide].icon}
          <span className="truncate">{slides[currentSlide].text}</span>
        </div>

        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
          className="p-1 hover:text-white transition-colors"
          aria-label="Nächste Ankündigung"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
