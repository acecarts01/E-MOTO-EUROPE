'use client';

import React, { useState } from 'react';
import { CartProvider } from '@/src/lib/cart-context';
import { AnnouncementBar } from '@/src/components/AnnouncementBar';
import { Nav } from '@/src/components/Nav';
import { Footer } from '@/src/components/Footer';
import { CartDrawer } from '@/src/components/CartDrawer';
import { ChatHub } from '@/src/components/ChatHub';
import { AgeGateModal } from '@/src/components/AgeGateModal';
import { CookieBanner } from '@/src/components/CookieBanner';
import { SearchModal } from '@/src/components/SearchModal';
import { useTranslations } from 'next-intl';

export function SiteShell({ children, locale }: { children: React.ReactNode, locale: string }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const t = useTranslations('nav');

  return (
    <CartProvider initialLocale={locale as any}>
      <div className="min-h-screen flex flex-col bg-[#0e0e12] text-slate-100 antialiased selection:bg-[#E63946] selection:text-white">
        
        {/* Skip to Main Link for WCAG 2.2 AA */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#E63946] text-white px-4 py-2 rounded-md font-mono text-xs font-bold shadow-xl"
        >
          {t('skipToMain') || 'Zum Hauptinhalt springen'}
        </a>

        {/* Top Announcements */}
        <AnnouncementBar />

        {/* Global Navigation */}
        <Nav onOpenSearch={() => setSearchOpen(true)} />

        {/* Main Viewport Content */}
        <main id="main" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Slide-over Cart Drawer */}
        <CartDrawer />

        {/* Live Chat Hub (Native GDPR Compliant) */}
        <ChatHub />

        {/* German 16+ Age Verification Gate */}
        <AgeGateModal />

        {/* Strict TTDSG / DSGVO Cookie Banner */}
        <CookieBanner />

        {/* Client-side Instant Search Modal */}
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      </div>
    </CartProvider>
  );
}
