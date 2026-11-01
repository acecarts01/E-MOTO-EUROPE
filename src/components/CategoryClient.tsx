'use client';

import React from 'react';
import { Link } from '@/src/i18n/routing';
import { CATEGORIES, PRODUCTS, SITE } from '@/src/config/site';
import { SmartImage } from '@/src/components/SmartImage';
import { useI18n } from '@/src/lib/cart-context';
import { ChevronRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export function CategoryClient({ catSlug }: { catSlug: string }) {
  const { t, locale } = useI18n();

  // Find localized category data
  const localizedCategories = t.categories || [];
  const locCat = localizedCategories.find((c: any) => c.slug === catSlug) || ({} as any);
  
  // Find base category data
  const baseCategory = CATEGORIES.find(c => c.slug === catSlug);
  if (!baseCategory) return null;

  const category = {
    ...baseCategory,
    name: locCat.name || baseCategory.name,
    description: locCat.description || baseCategory.description,
    legalStatus: locCat.legalStatus || baseCategory.legalStatus,
  };

  // Localized products for this category
  const localizedProducts = t.products || [];
  const categoryProducts = PRODUCTS.filter(p => p.category === category.slug).map(p => {
    const loc = localizedProducts.find((lp: any) => lp.slug === p.slug) || ({} as any);
    return {
      ...p,
      name: loc.name || p.name,
      shortDescription: loc.shortDescription || p.shortDescription,
    };
  });

  return (
    <div className="py-12 bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            {locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white transition-colors">{t.shopPage?.breadcrumb || 'Shop'}</Link>
          <span>/</span>
          <span className="text-slate-300">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3B30]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-block px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded text-[10px] font-mono text-[#00F0FF] mb-4 uppercase tracking-widest font-bold">
              {category.legalStatus}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 font-mono tracking-tight">
              {category.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed font-sans">
              {category.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5 text-[10px] font-mono text-slate-500">
              <span className="uppercase tracking-tighter text-slate-600">
                {locale === 'de' || locale === 'de-CH' ? 'Spezialbereiche:' : 'Subcategories:'}
              </span>
              {category.subcategories.map((sub, i) => (
                <span key={i} className="bg-white/[0.02] px-2.5 py-1 rounded text-slate-400 border border-white/5">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Products in this category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map(p => (
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
                <div className="absolute top-3 left-3 bg-[#FF3B30] text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded shadow-lg">
                  {p.badge}
                </div>
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-mono border border-white/10">
                  {p.isStVZO ? (
                    <span className="text-emerald-400 font-bold">{t.shopPage?.filterStVZOOnly || '100% StVZO'}</span>
                  ) : (
                    <span className="text-amber-400 font-bold">{t.shopPage?.filterOffroadOnly || 'Offroad Sport'}</span>
                  )}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#FF3B30] transition-colors line-clamp-2 leading-snug font-mono">
                    <Link href={`/shop/${p.category}/${p.slug}/` as any}>
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {p.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-base font-extrabold text-white font-mono">
                      €{p.price.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-emerald-500 font-mono">
                      {t.shopPage?.cryptoPrice || 'Krypto'}: €{(p.price * 0.95).toFixed(2)}
                    </div>
                  </div>

                  <Link
                    href={`/shop/${p.category}/${p.slug}/` as any}
                    className="px-3.5 py-2 bg-white/[0.03] hover:bg-[#FF3B30] text-slate-300 hover:text-white text-xs font-mono font-bold rounded-lg border border-white/10 transition-all flex items-center gap-1.5"
                  >
                    <span>{t.shopPage?.details || 'Details'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
