'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS, POSTS, CATEGORIES, SITE } from '@/src/config/site';
import { SmartImage } from '@/src/components/SmartImage';
import { Search, ShieldCheck, AlertTriangle, ChevronRight, FileText, ShoppingBag } from 'lucide-react';
import { useI18n } from '@/src/lib/cart-context';
import { Link } from '@/src/i18n/routing';

function SearchContent() {
  const { t, locale } = useI18n();
  const searchParams = useSearchParams();
  const urlQ = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(urlQ);
  const [selectedStVZO, setSelectedStVZO] = useState<'all' | 'stvzo' | 'offroad'>('all');

  const q = (searchTerm || urlQ).toLowerCase().trim();

  // Use localized products and posts from the dictionary
  const localizedProducts = t.products || [];
  const localizedPosts = t.posts || [];

  const displayProducts = PRODUCTS.map(p => {
    const loc = localizedProducts.find((lp: any) => lp.slug === p.slug) || ({} as any);
    return {
      ...p,
      name: loc.name || p.name,
      shortDescription: loc.shortDescription || p.shortDescription,
    };
  });

  const matchingProducts = displayProducts.filter(p => {
    const matchesQ = !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      (p.isStVZO && q.includes('stvzo')) ||
      (!p.isStVZO && (q.includes('offroad') || q.includes('72v')));

    const matchesStVZO = selectedStVZO === 'all'
      ? true
      : selectedStVZO === 'stvzo'
      ? p.isStVZO
      : !p.isStVZO;

    return matchesQ && matchesStVZO;
  });

  const displayPosts = POSTS.map(p => {
    const loc = localizedPosts.find((lp: any) => lp.slug === p.slug) || ({} as any);
    return {
      ...p,
      title: loc.title || p.title,
      excerpt: loc.excerpt || p.excerpt,
    };
  });

  const matchingPosts = displayPosts.filter(post => {
    return q && (post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q));
  });

  return (
    <div className="py-12 bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            {locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}
          </Link>
          <span>/</span>
          <span className="text-slate-300">{t.searchPage?.breadcrumb || 'Search'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 font-mono tracking-tight">
          {t.searchPage?.title || 'Suche & Katalog-Index'}
        </h1>
        <p className="text-sm sm:text-base text-slate-400 mb-10 max-w-2xl font-sans">
          {t.searchPage?.subtitle || 'Finden Sie E-Motos, Umbausätze und Fachratgeber.'}
        </p>

        {/* Search Input Box */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 mb-12 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3B30]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <Search className="w-5 h-5 text-[#FF3B30] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder={t.searchPage?.placeholder || "Suchbegriff..."}
              className="w-full bg-white/[0.02] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white text-base focus:outline-none focus:border-[#FF3B30] transition-colors font-sans"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-[10px] font-mono relative z-10 uppercase tracking-widest">
            <span className="text-slate-500">{t.searchPage?.filterLabel || 'Filter:'}</span>
            <button
              type="button"
              onClick={() => setSelectedStVZO('all')}
              className={`px-4 py-1.5 rounded-lg border transition-all ${
                selectedStVZO === 'all' 
                  ? 'bg-[#FF3B30] border-[#FF3B30] text-white font-bold' 
                  : 'bg-white/[0.03] border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              {locale.startsWith('de') ? 'Alle' : 'All'} ({matchingProducts.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedStVZO('stvzo')}
              className={`px-4 py-1.5 rounded-lg border transition-all flex items-center gap-2 ${
                selectedStVZO === 'stvzo' 
                  ? 'bg-emerald-600 border-emerald-600 text-white font-bold' 
                  : 'bg-white/[0.03] border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t.shopPage?.filterStVZOOnly || '100% StVZO'}</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedStVZO('offroad')}
              className={`px-4 py-1.5 rounded-lg border transition-all flex items-center gap-2 ${
                selectedStVZO === 'offroad' 
                  ? 'bg-amber-600 border-amber-600 text-white font-bold' 
                  : 'bg-white/[0.03] border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{t.shopPage?.filterOffroadOnly || 'Offroad'}</span>
            </button>
          </div>
        </div>

        {/* Results Sections */}
        <div className="space-y-16">
          
          {/* Products Results */}
          <div>
            <div className="text-xs font-bold text-white font-mono uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
              <ShoppingBag className="w-4 h-4 text-[#FF3B30]" />
              <span>{t.searchPage?.productsFound || 'Produkte'} ({matchingProducts.length})</span>
            </div>

            {matchingProducts.length === 0 ? (
              <div className="bg-[#121218] border border-white/5 rounded-2xl p-12 text-center text-slate-500 text-xs font-mono uppercase tracking-widest shadow-inner">
                {t.searchPage?.noResults || 'Keine Treffer.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {matchingProducts.map(p => (
                  <div
                    key={p.slug}
                    className="bg-[#121218] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF3B30] transition-all flex flex-col group shadow-xl"
                  >
                    <div className="relative aspect-[4/3] bg-black overflow-hidden">
                      <SmartImage
                        src={p.images[0]}
                        alt={p.name}
                        aspectRatio="4/3"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#FF3B30] text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow-lg uppercase">
                        {p.badge}
                      </div>
                      <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-mono border border-white/10">
                        {p.isStVZO ? (
                          <span className="text-emerald-400 font-bold">100% StVZO</span>
                        ) : (
                          <span className="text-amber-400 font-bold">OFFROAD</span>
                        )}
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-xs font-bold text-white group-hover:text-[#FF3B30] transition-colors line-clamp-2 leading-snug font-mono">
                          <Link href={`/shop/${p.category}/${p.slug}` as any}>
                            {p.name}
                          </Link>
                        </h3>
                        <p className="text-[10px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                          {p.shortDescription}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                        <div className="text-sm font-extrabold text-white font-mono">
                          €{p.price.toFixed(2)}
                        </div>
                        <Link
                          href={`/shop/${p.category}/${p.slug}` as any}
                          className="px-3 py-1.5 bg-white/[0.03] hover:bg-[#FF3B30] text-slate-300 hover:text-white text-[10px] font-mono font-bold rounded-lg border border-white/5 transition-all"
                        >
                          {t.shopPage?.details || 'Details'}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Posts & Legal Guides Results */}
          {matchingPosts.length > 0 && (
            <div className="pt-12 border-t border-white/5">
              <div className="text-xs font-bold text-white font-mono uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#00F0FF]" />
                <span>{t.searchPage?.articlesFound || 'Magazin'} ({matchingPosts.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchingPosts.map(post => (
                    <Link
                    key={post.slug}
                    href={`/magazin/${post.slug}` as any}
                    className="p-5 bg-[#121218] border border-white/5 rounded-2xl hover:border-[#FF3B30] transition-all block group shadow-lg"
                  >
                    <div className="text-sm font-bold text-white group-hover:text-[#FF3B30] transition-colors font-mono">
                      {post.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-2 line-clamp-2 font-sans leading-relaxed">
                      {post.excerpt}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export function SearchClient() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-slate-500 font-mono text-xs animate-pulse">SYSTEM SEARCH LOADING...</div>}>
      <SearchContent />
    </Suspense>
  );
}
