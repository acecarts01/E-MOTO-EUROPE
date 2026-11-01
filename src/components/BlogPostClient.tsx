'use client';

import React from 'react';
import { Link } from '@/src/i18n/routing';
import { POSTS, PRODUCTS, SITE, CONTACT } from '@/src/config/site';
import { SmartImage } from '@/src/components/SmartImage';
import { useI18n } from '@/src/lib/cart-context';
import { Calendar, Clock, ArrowLeft, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function BlogPostClient({ slug }: { slug: string }) {
  const { t, locale } = useI18n();

  // Find the base post data
  const basePost = POSTS.find(p => p.slug === slug);
  if (!basePost) return null;

  // Find the localized post metadata from the dictionary
  const localizedPosts = t.posts || [];
  const loc = localizedPosts.find((lp: any) => lp.slug === slug) || ({} as any);

  // Merge base data with localized metadata
  const post = {
    ...basePost,
    title: loc.title || basePost.title,
    excerpt: loc.excerpt || basePost.excerpt,
    category: loc.category || basePost.category,
    content: loc.content || basePost.content, // Fallback to base content (German)
  };

  const localizedProducts = t.products || [];
  const relatedProducts = PRODUCTS.slice(0, 3).map(rp => {
    const rLoc = localizedProducts.find((lp: any) => lp.slug === rp.slug) || ({} as any);
    return { ...rp, name: rLoc.name || rp.name };
  });

  return (
    <div className="py-12 bg-[#09090c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            {locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}
          </Link>
          <span>/</span>
          <Link href="/magazin" className="hover:text-white transition-colors">{t.magazine?.breadcrumb || 'Magazine'}</Link>
          <span>/</span>
          <span className="text-slate-300 truncate">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="inline-block px-2.5 py-1 bg-white/[0.03] border border-white/10 text-[#00F0FF] text-[10px] font-mono font-bold rounded uppercase tracking-widest">
            {post.category}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight font-mono tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-slate-500 pt-2 border-b border-white/5 pb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-600" />
              <span>{t.magazine?.publishedOn || 'Veröffentlicht am'} {post.date}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-600" />
              <span>{t.magazine?.readTime || 'Lesezeit:'} {post.readTime}</span>
            </span>
            <span>·</span>
            <span className="text-slate-400 uppercase tracking-tighter">{SITE.name} {t.magazine?.workshopEditorial || 'Werkstattredaktion'}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl overflow-hidden mb-10 shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3B30]/5 rounded-full blur-3xl pointer-events-none" />
          <SmartImage
            src={post.image}
            alt={post.title}
            priority={true}
            aspectRatio="16/9"
          />
        </div>

        {/* Article Content */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-12 text-slate-300 text-sm sm:text-base leading-relaxed space-y-8 font-sans shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="p-6 bg-white/[0.02] border-l-4 border-[#FF3B30] rounded-r-xl text-xs sm:text-sm text-slate-200 font-mono relative z-10">
            <strong className="text-white uppercase tracking-wider">{t.magazine?.summary || 'Zusammenfassung'}:</strong> <br className="mb-2" />
            {post.excerpt}
          </div>

          <div className="space-y-6 whitespace-pre-line leading-relaxed relative z-10">
            {post.content}
          </div>

          {/* Compliance Reminder Box */}
          <div className="p-6 bg-white/[0.03] border border-white/10 rounded-xl space-y-3 mt-10 relative z-10 shadow-inner">
            <div className="font-bold text-white font-mono text-xs flex items-center gap-2 uppercase tracking-widest">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>{t.magazine?.disclaimerTitle || 'Gesetzlicher Hinweis'}</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              {t.magazine?.disclaimerText || 'Alle Angaben erfolgen nach bestem Wissen auf Basis der aktuellen gesetzlichen Bestimmungen.'}
            </p>
          </div>
        </div>

        {/* Related Products Recommendation */}
        <div className="mt-20 pt-10 border-t border-white/5 space-y-8">
          <h2 className="text-lg font-bold text-white font-mono uppercase tracking-widest">
            {t.magazine?.relatedProducts || 'Passende Systeme & Komponenten'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map(p => (
              <Link
                key={p.slug}
                href={`/shop/${p.category}/${p.slug}/` as any}
                className="bg-[#121218] border border-white/5 rounded-2xl p-5 hover:border-[#FF3B30] transition-all flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-3">
                  <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                    {p.categoryName}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#FF3B30] transition-colors line-clamp-2 leading-snug font-mono">
                    {p.name}
                  </h3>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-white">€{p.price.toFixed(2)}</span>
                  <span className="text-[9px] text-[#00F0FF] uppercase tracking-widest font-bold">{t.shopPage?.details || 'Details'} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Magazine */}
        <div className="mt-16 text-center">
          <Link
            href="/magazin"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] hover:bg-white/[0.06] text-slate-300 hover:text-white rounded-xl text-xs font-mono border border-white/10 transition-all uppercase tracking-widest font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.magazine?.backToOverview || 'Zurück zum Magazin'}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
