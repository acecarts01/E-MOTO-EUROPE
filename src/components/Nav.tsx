'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Link, usePathname, useRouter } from '@/src/i18n/routing';
import { useCart } from '@/src/lib/cart-context';
import { SITE, CATEGORIES } from '@/src/config/site';
import { Locale } from '@/src/lib/i18n';
import { LocaleSwitcher } from '@/src/components/LocaleSwitcher';
import {
  Zap,
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronDown,
  Globe,
  SlidersHorizontal,
  Scale
} from 'lucide-react';

export function Nav({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const { itemCount, openCart, locale, t, mounted } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shopRef.current && !shopRef.current.contains(event.target as Node)) {
        setShopMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#101014]/95 backdrop-blur-md border-b border-[#22222a] text-white">
      <nav aria-label="Hauptnavigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#E63946] focus:outline-none">
            <div className="w-10 h-10 rounded bg-[#1c1c24] border border-[#2d2d3a] flex items-center justify-center text-[#E63946] group-hover:border-[#E63946] transition-colors shadow-inner">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-lg sm:text-xl text-white group-hover:text-[#FF3B30] transition-colors font-mono">
                E-MOTO <span className="text-[#FF3B30]">EUROPE</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest font-mono uppercase">
                {locale.startsWith('de') ? 'GERMANY HQ · HIGH PERFORMANCE' : 'EUROPE HQ · HIGH PERFORMANCE'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Shop Mega Dropdown Trigger */}
            <div className="relative" ref={shopRef}>
              <button
                type="button"
                onClick={() => setShopMenuOpen(!shopMenuOpen)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2 focus-visible:ring-1 focus-visible:ring-[#E63946]"
                aria-expanded={shopMenuOpen}
              >
                <span>{t.nav.shop}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${shopMenuOpen ? 'rotate-180 text-[#E63946]' : 'text-slate-400'}`} />
              </button>

              {shopMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-[#16161e] border border-[#2d2d3c] rounded-lg shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2 py-1 mb-1 border-b border-[#242432]">
                    {t.nav.allCategories}
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/shop"
                      onClick={() => setShopMenuOpen(false)}
                      className="block px-2.5 py-2 text-sm text-white hover:bg-[#20202c] rounded transition-colors font-medium"
                    >
                      {t.nav.allCategories}
                    </Link>
                    {CATEGORIES.map(cat => (
                      <Link
                        key={cat.slug}
                        href={`/shop/${cat.slug}` as any}
                        onClick={() => setShopMenuOpen(false)}
                        className="block px-2.5 py-2 text-xs text-slate-300 hover:text-white hover:bg-[#20202c] rounded transition-colors"
                      >
                        <div className="font-medium text-slate-100">{t.categories.find((c: any) => c.slug === cat.slug)?.name || cat.name}</div>
                        <div className="text-[11px] text-slate-400 truncate">{t.categories.find((c: any) => c.slug === cat.slug)?.legalStatus || cat.legalStatus}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href={"/shop/e-bike-umbausaetze" as any}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t.nav.kits}
            </Link>

            <Link
              href="/magazin"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t.nav.legalGuides}
            </Link>

            <Link
              href="/compare"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Scale className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.nav.compare}</span>
            </Link>

            <Link
              href="/subsidies"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t.nav.subsidies}
            </Link>

            <Link
              href="/wholesale"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t.nav.b2b}
            </Link>

            <Link
              href="/faq"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t.nav.faq}
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Action Icons: Search, Language Switcher, Cart Button */}
          <div className="flex items-center gap-3">
            
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-slate-300 hover:text-white hover:bg-[#1a1a24] rounded-lg transition-colors focus-visible:ring-1 focus-visible:ring-[#E63946]"
              aria-label="Produktsuche öffnen"
            >
              <Search className="w-5 h-5" />
            </button>

            <LocaleSwitcher />

            {/* Cart Button */}
            <button
              type="button"
              onClick={openCart}
              className="relative flex items-center gap-2 px-3 py-1.5 bg-[#E63946] hover:bg-[#d52b38] text-white rounded-md text-xs font-bold transition-all shadow-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E63946]"
              aria-label={`Warenkorb öffnen mit ${mounted ? itemCount : 0} Artikeln`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-mono">{t.nav.cart}</span>
              {mounted && itemCount > 0 && (
                <span className="bg-white text-[#E63946] text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center font-mono ml-0.5">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-[#1a1a24] rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101014] border-b border-[#22222a] px-4 pt-2 pb-6 space-y-3 animate-in fade-in">
          <div className="border-b border-[#22222a] pb-3 mb-3">
            <Link
              href="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-white hover:text-[#E63946]"
            >
              {t.nav.shop}
            </Link>
            <div className="pl-3 space-y-1.5 mt-1 border-l border-[#242430]">
              {CATEGORIES.map(c => (
                <Link
                  key={c.slug}
                  href={`/shop/${c.slug}` as any}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs text-slate-300 hover:text-white"
                >
                  {t.categories.find((cat: any) => cat.slug === c.slug)?.name || c.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href={"/shop/e-bike-umbausaetze" as any}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            {t.nav.kits}
          </Link>
          <Link
            href="/magazin"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            {t.nav.legalGuides}
          </Link>
          <Link
            href="/compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            {t.nav.compare}
          </Link>
          <Link
            href="/subsidies"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            {t.nav.subsidies}
          </Link>
          <Link
            href="/wholesale"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            {t.nav.b2b}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            {t.nav.faq}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            {t.nav.contact}
          </Link>

          <div className="pt-3 border-t border-[#22222a]">
            <div className="text-[11px] font-mono text-slate-400 mb-2">Sprachauswahl:</div>
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
