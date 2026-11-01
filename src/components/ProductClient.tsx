'use client';

import React from 'react';
import { Link } from '@/src/i18n/routing';
import { SITE, SHOP, CONTACT, PRODUCTS } from '@/src/config/site';
import { SmartImage } from '@/src/components/SmartImage';
import { useI18n, useCart } from '@/src/lib/cart-context';
import { ProductAddToCart } from '@/app/[locale]/shop/[category]/[slug]/ProductAddToCart';
import {
  ShieldCheck,
  AlertTriangle,
  Truck,
  Zap,
  CheckCircle2,
  Scale,
  Clock,
  ArrowLeft,
  ChevronRight,
  BatteryCharging
} from 'lucide-react';

export function ProductClient({ slug }: { slug: string }) {
  const { t, locale } = useI18n();
  const { addItem } = useCart();

  // Find the base product data
  const baseProduct = PRODUCTS.find(p => p.slug === slug);
  if (!baseProduct) return null;

  // Find the localized product metadata from the dictionary
  const localizedProducts = t?.products || [];
  const loc = localizedProducts.find((lp: any) => lp.slug === slug) || ({} as any);

  // Merge base data with localized metadata
  const product = {
    ...baseProduct,
    name: loc.name || baseProduct.name,
    shortDescription: loc.shortDescription || baseProduct.shortDescription,
    description: loc.description || baseProduct.description,
    legalNotice: loc.legalNotice || baseProduct.legalNotice,
  };

  // Find localized categories for the breadcrumb
  const localizedCategories = t.categories || [];
  const locCat = localizedCategories.find((lc: any) => lc.slug === product.category) || ({} as any);
  const categoryName = locCat.name || product.categoryName;

  const relatedProducts = PRODUCTS.filter(p => p.slug !== product.slug && p.category === product.category).slice(0, 3).map(rp => {
    const rLoc = localizedProducts.find((lp: any) => lp.slug === rp.slug) || ({} as any);
    return { ...rp, name: rLoc.name || rp.name };
  });

  return (
    <div className="py-10 bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            {locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white transition-colors">{t.shopPage?.breadcrumb || 'Shop'}</Link>
          <span>/</span>
          <Link href={`/shop/${product.category}` as any} className="hover:text-white transition-colors truncate">
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-slate-300 truncate">{product.name}</span>
        </nav>

        {/* Product Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Gallery Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#121218] border border-white/5 rounded-2xl overflow-hidden relative shadow-2xl">
              <SmartImage
                src={product.images[0]}
                alt={product.name}
                priority={true}
                aspectRatio="4/3"
              />
              <div className="absolute top-4 left-4 bg-[#FF3B30] text-white text-xs font-mono font-bold px-3 py-1 rounded shadow-lg">
                {product.badge}
              </div>
            </div>

            {/* Secondary Images if available */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((img, i) => (
                  <div key={i} className="bg-[#121218] border border-white/5 rounded-xl overflow-hidden shadow-md">
                    <SmartImage
                      src={img}
                      alt={`${product.name} View ${i + 1}`}
                      aspectRatio="4/3"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Legal Notice Callout */}
            <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3B30]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 font-mono text-[11px] font-bold text-white relative z-10">
                {product.isStVZO ? (
                  <>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-emerald-400 uppercase tracking-wider">{t.shopPage?.filterStVZOOnly || '100% StVZO-konform'}</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                    <span className="text-amber-400 uppercase tracking-wider">{t.shopPage?.filterOffroadOnly || 'Reines Offroad-Sportgerät'}</span>
                  </>
                )}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans relative z-10">
                {product.legalNotice}
              </p>
              <div className="text-[10px] text-slate-500 font-mono pt-1 relative z-10 border-t border-white/5 mt-2 flex justify-between items-center">
                <span>{t.product?.legalNotice || 'Rechtlicher Status'}</span>
                <span>{product.isStVZO ? 'EN 15194 / § 63a StVZO' : 'Track / Off-Road Only'}</span>
              </div>
            </div>
          </div>

          {/* Product Configuration & Buy Box Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Product Title (Exactly one H1) */}
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                  {categoryName}
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight font-mono tracking-tight">
                  {product.name}
                </h1>
              </div>

              {/* Price Display */}
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold text-white font-mono tracking-tighter">
                    €{product.price.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 uppercase tracking-wider">
                    {t.product?.cryptoDiscountBadge || '5% Krypto-Rabatt'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500 font-mono uppercase tracking-tight">
                  <span>{t.product?.vatNotice || SHOP.priceSuffix}</span>
                  <span className="text-amber-400 font-bold">
                    Krypto: €{(product.price * 0.95).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {product.shortDescription}
              </p>

              {/* Interactive Client Add to Cart Component */}
              <ProductAddToCart product={product} />

              {/* Trust & Dispatch Checklist */}
              <div className="space-y-3 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{t.product?.inStock || 'Auf Lager — Versandfertig in 24h'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{t.product?.dispatchNotice || 'Versand aus deutschem Zentrallager'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-[#FF3B30] shrink-0" />
                  <span>{t.trust?.paymentSub || 'Sichere SEPA & Krypto-Zahlung'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BatteryCharging className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.shopPage?.adrNotice || 'ADR Klasse 9 Gefahrgut'}</span>
                </div>
              </div>

            </div>

            {/* Technical Specifications Sheet */}
            <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                <span>{t.product?.specs || 'Technische Spezifikationen'}</span>
              </h3>

              <div className="divide-y divide-white/5 text-[11px] font-mono">
                {Object.entries(product.specs).map(([key, val]) => (
                  <div key={key} className="py-2.5 flex justify-between gap-6">
                    <span className="text-slate-500 uppercase tracking-tighter">{key}:</span>
                    <span className="text-white text-right font-semibold truncate">{val}</span>
                  </div>
                ))}
                <div className="py-2.5 flex justify-between gap-6">
                  <span className="text-slate-500 uppercase tracking-tighter">{locale === 'de' || locale === 'de-CH' ? 'Gewährleistung' : 'Warranty'}:</span>
                  <span className="text-white text-right font-semibold">{t.product?.warranty || '24 Monate'}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Full Detailed Description */}
        <div className="mt-12 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-12 space-y-6 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-xl font-bold text-white font-mono uppercase tracking-tight relative z-10">
            {t.magazine?.summary || 'Ausführliche Produktbeschreibung'}
          </h2>
          <div className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl space-y-5 font-sans relative z-10">
            <div className="whitespace-pre-line">{product.description}</div>
            <p className="text-xs text-slate-400 italic pt-4 border-t border-white/5">
              {t.footer?.adrNotice || 'Unsere Werkstatt prüft jede Komponente vor dem Warenausgang auf Maßhaltigkeit und technische Integrität.'}
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white font-mono uppercase tracking-tight">
                {t.product?.relatedProducts || 'Passende Komponenten'}
              </h2>
              <Link href="/shop" className="text-xs font-mono text-[#00F0FF] hover:underline uppercase font-bold tracking-wider">
                {t.bestsellersSection?.viewAll || 'Zum Shop →'}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(rel => (
                <Link
                  key={rel.slug}
                  href={`/shop/${rel.category}/${rel.slug}/` as any}
                  className="bg-[#121218] border border-white/5 hover:border-[#FF3B30] rounded-2xl p-5 transition-all flex gap-5 group shadow-xl"
                >
                  <div className="w-24 h-24 bg-black rounded-xl overflow-hidden shrink-0 border border-white/5">
                    <SmartImage
                      src={rel.images[0]}
                      alt={rel.name}
                      aspectRatio="1/1"
                    />
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">
                        {rel.categoryName}
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#FF3B30] transition-colors line-clamp-2 leading-snug font-mono">
                        {rel.name}
                      </h3>
                    </div>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-sm font-bold text-white font-mono">€{rel.price.toFixed(2)}</span>
                      <span className="text-[9px] font-mono text-[#00F0FF] font-bold uppercase tracking-widest">{t.shopPage?.details || 'Details'} →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
