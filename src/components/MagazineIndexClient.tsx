'use client';

import React from 'react';
import { Link } from '@/src/i18n/routing';
import { POSTS, SITE } from '@/src/config/site';
import { SmartImage } from '@/src/components/SmartImage';
import { useI18n } from '@/src/lib/cart-context';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';

export function MagazineIndexClient() {
  const { t, locale } = useI18n();

  // Use localized posts from the dictionary
  const localizedPosts = t.posts || [];

  // Merge base post data (slug, image, date) with localized metadata
  const displayPosts = POSTS.map(p => {
    const loc = localizedPosts.find((lp: any) => lp.slug === p.slug) || ({} as any);
    return {
      ...p,
      title: loc.title || p.title,
      excerpt: loc.excerpt || p.excerpt,
      category: loc.category || p.category,
    };
  });

  return (
    <div className="py-12 bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">
              {locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{t.magazine?.breadcrumb || 'Magazine'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
            {t.magazine?.title || 'Technik, Recht & Gefahrgut-Leitfäden'}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed font-sans">
            {t.magazine?.subtitle || 'Fundiertes Wissen unserer Münchener Meisterwerkstatt zu Zulassungsbestimmungen nach StVZO, europäischer Gefahrgutbeförderung (ADR Klasse 9) und optimaler Auslegung von High-Performance Antrieben.'}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map(post => (
            <article
              key={post.slug}
              className="bg-[#121218] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF3B30] transition-all flex flex-col group shadow-xl"
            >
              <div className="relative aspect-[16/9] bg-black overflow-hidden">
                <SmartImage
                  src={post.image}
                  alt={post.title}
                  aspectRatio="16/9"
                />
                <div className="absolute top-3 left-3 bg-[#111118]/90 backdrop-blur-sm border border-white/10 text-white text-[10px] font-mono font-bold px-3 py-1 rounded shadow-md">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-[#FF3B30] transition-colors leading-snug font-mono">
                    <Link href={`/magazin/${post.slug}` as any}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-sans">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold text-[#FF3B30]">
                  <span>{t.magazine?.readGuide || 'Leitfaden lesen'}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
