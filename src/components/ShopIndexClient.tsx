'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES, SITE } from '@/src/config/site';
import { SmartImage } from '@/src/components/SmartImage';
import { useCart } from '@/src/lib/cart-context';
import {
  Filter,
  ShieldCheck,
  AlertTriangle,
  ShoppingBag,
  Check,
  ChevronRight
} from 'lucide-react';
import { Link } from '@/src/i18n/routing';

export function ShopIndexClient() {
  const { addItem, t, locale } = useCart();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [filterStVZO, setFilterStVZO] = useState<'all' | 'stvzo' | 'offroad'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  // Use localized products and categories from the dictionary
  const localizedProducts = t.products || [];
  const localizedCategories = t.categories || [];

  // Merge the static data (prices, images, etc) with localized metadata (name, description)
  const displayProducts = PRODUCTS.map(p => {
    const loc = localizedProducts.find((lp: any) => lp.slug === p.slug) || ({} as any);
    return {
      ...p,
      name: loc.name || p.name,
      shortDescription: loc.shortDescription || p.shortDescription,
      legalNotice: loc.legalNotice || p.legalNotice,
    };
  });

  const filteredProducts = displayProducts.filter(p => {
    const catMatch = selectedCat === 'all' || p.category === selectedCat;
    const stvzoMatch = filterStVZO === 'all'
      ? true
      : filterStVZO === 'stvzo'
      ? p.isStVZO
      : !p.isStVZO;
    return catMatch && stvzoMatch;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      categoryName: product.categoryName,
      isStVZO: product.isStVZO
    });
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 2000);
  };

  return (
    <div className="py-12 bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="space-y-3 mb-8">
          <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">{locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}</Link>
            <span>/</span>
            <span className="text-slate-300">{t.shopPage?.breadcrumb || 'Shop'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.shopPage?.title || 'E-Motos, Umbausätze & 72V Komponenten'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
            {t.shopPage?.subtitle || 'Wählen Sie zwischen 100% StVZO-konformen Pedelec-Umbausätzen (250W, EN 15194) für den Straßenverkehr und kompromisslosen Offroad-Sportgeräten (1000W–5000W, 72V) für Privatgelände.'}
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="bg-[#14141c] border border-[#242434] rounded-xl p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 text-xs">
          
          {/* Category Tabs (zero-pill style) */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedCat('all')}
              className={`px-3 py-1.5 font-mono rounded transition-colors ${
                selectedCat === 'all'
                  ? 'bg-[#E63946] text-white font-bold'
                  : 'bg-[#1b1b26] text-slate-300 hover:text-white'
              }`}
            >
              {t.shopPage?.filterAll || 'Alle'} ({displayProducts.length})
            </button>
            {localizedCategories.map((c: any) => {
              const count = displayProducts.filter(p => p.category === c.slug).length;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setSelectedCat(c.slug)}
                  className={`px-3 py-1.5 font-mono rounded transition-colors ${
                    selectedCat === c.slug
                      ? 'bg-[#E63946] text-white font-bold'
                      : 'bg-[#1b1b26] text-slate-300 hover:text-white'
                  }`}
                >
                  {c.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Right Sub-filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* StVZO Status Filter */}
            <div className="flex items-center gap-1 bg-[#1b1b26] p-1 rounded border border-[#28283a]">
              <button
                type="button"
                onClick={() => setFilterStVZO('all')}
                className={`px-2.5 py-1 text-[11px] font-mono rounded ${
                  filterStVZO === 'all' ? 'bg-[#29293e] text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.shopPage?.filterStVZOAll || 'Alle'}
              </button>
              <button
                type="button"
                onClick={() => setFilterStVZO('stvzo')}
                className={`px-2.5 py-1 text-[11px] font-mono rounded flex items-center gap-1 ${
                  filterStVZO === 'stvzo' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3 h-3" />
                <span>{t.shopPage?.filterStVZOOnly || 'StVZO'}</span>
              </button>
              <button
                type="button"
                onClick={() => setFilterStVZO('offroad')}
                className={`px-2.5 py-1 text-[11px] font-mono rounded flex items-center gap-1 ${
                  filterStVZO === 'offroad' ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <AlertTriangle className="w-3 h-3" />
                <span>{t.shopPage?.filterOffroadOnly || 'Offroad'}</span>
              </button>
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 bg-[#1b1b26] border border-[#28283a] rounded px-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase">{t.shopPage?.sortBy || 'Sortierung'}:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc')}
                className="bg-transparent text-slate-200 text-xs font-mono py-1.5 focus:outline-none"
              >
                <option value="featured">{t.shopPage?.sortFeatured || 'Empfohlen'}</option>
                <option value="price-asc">{t.shopPage?.sortPriceAsc || 'Preis aufsteigend'}</option>
                <option value="price-desc">{t.shopPage?.sortPriceDesc || 'Preis absteigend'}</option>
              </select>
            </div>

          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(p => (
            <div
              key={p.slug}
              className="bg-[#14141d] border border-[#252536] rounded-xl overflow-hidden hover:border-[#E63946] transition-all flex flex-col group shadow-lg"
            >
              <div className="relative aspect-[4/3] bg-[#0c0c10] overflow-hidden">
                <SmartImage
                  src={p.images[0]}
                  alt={p.name}
                  aspectRatio="4/3"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#E63946] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  {p.badge}
                </div>
                <div className="absolute bottom-2.5 left-2.5 bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono border border-white/10">
                  {p.isStVZO ? (
                    <span className="text-emerald-400 font-bold">{t.shopPage?.filterStVZOOnly || '100% StVZO'}</span>
                  ) : (
                    <span className="text-amber-400 font-bold">{t.shopPage?.filterOffroadOnly || 'Offroad Sport'}</span>
                  )}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {p.categoryName}
                  </div>
                  <h3 className="text-xs font-bold text-white group-hover:text-[#E63946] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/shop/${p.category}/${p.slug}` as any}>
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-2 leading-snug">
                    {p.shortDescription}
                  </p>
                </div>

                <div className="bg-[#181824] p-2 rounded text-[10px] font-mono text-slate-300 space-y-0.5">
                  {p.specs.power && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Power:</span>
                      <span className="text-white font-medium">{p.specs.power}</span>
                    </div>
                  )}
                  {p.specs.torque && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">{locale === 'de' || locale === 'de-CH' ? 'Drehmoment' : 'Torque'}:</span>
                      <span className="text-[#FF3B30] font-medium">{p.specs.torque}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-[#20202e] flex items-center justify-between">
                  <div>
                    <div className="text-sm font-extrabold text-white font-mono">
                      €{p.price.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {t.shopPage?.cryptoPrice || 'Krypto'}: €{(p.price * 0.95).toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(p)}
                      className={`p-2 rounded transition-colors ${
                        addedSlug === p.slug
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#E63946] hover:bg-[#d52b38] text-white'
                      }`}
                      aria-label={addedSlug === p.slug ? t.shopPage?.addedToCart : t.shopPage?.addToCart}
                    >
                      {addedSlug === p.slug ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <ShoppingBag className="w-4 h-4" />
                      )}
                    </button>
                    <Link
                      href={`/shop/${p.category}/${p.slug}` as any}
                      className="p-2 bg-[#1f1f2e] hover:bg-[#28283a] text-slate-300 hover:text-white rounded transition-colors"
                      aria-label={t.shopPage?.viewProduct}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
