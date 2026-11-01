'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@/src/i18n/routing';
import { TRUSTPILOT_STATS, TRUSTPILOT_REVIEWS, TrustpilotReview } from '@/src/data/reviews';
import { useCart } from '@/src/lib/cart-context';
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  ThumbsUp,
  ExternalLink,
  Play,
  Pause,
  Quote,
  Sparkles
} from 'lucide-react';

export function TrustpilotReviewSlider() {
  const { locale } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});
  const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({});
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [autoProgress, setAutoProgress] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  // Responsive items visible
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter reviews
  const filteredReviews = TRUSTPILOT_REVIEWS.filter(review => {
    if (activeCategory === 'all') return true;
    return review.category === activeCategory;
  });

  const maxIndex = Math.max(0, filteredReviews.length - visibleCount);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
    setAutoProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    setAutoProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    setAutoProgress(0);
  };

  // Autoplay timer with visual progress bar
  useEffect(() => {
    if (!isAutoplay || isHovered) return;
    const intervalTime = 6000;
    const stepTime = 100;
    const progressIncrement = (stepTime / intervalTime) * 100;

    const timer = setInterval(() => {
      setAutoProgress(prev => {
        if (prev >= 100) {
          setCurrentIndex(current => (current >= maxIndex ? 0 : current + 1));
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [isAutoplay, isHovered, maxIndex]);

  const handleVote = (id: string) => {
    if (hasVoted[id]) return;
    setHelpfulVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    setHasVoted(prev => ({ ...prev, [id]: true }));
  };

  // Mobile Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Calculate percentage offset for sliding carousel track
  // On 1 item: 100% per step. On 2 items: 50% per step. On 3 items: 33.333% per step.
  const slidePercent = 100 / visibleCount;

  return (
    <section
      id="reviews"
      aria-label="Kundenbewertungen und Trustpilot Erfahrungsberichte"
      className="py-16 sm:py-24 bg-[#0d0d12] border-y border-white/5 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-[#00b67a]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#00F0FF]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* TRUSTPILOT AUTHORITY HEADER CARD */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Trustpilot Badge & TrustScore */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00b67a] animate-pulse" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00b67a]">
                  VERIFIZIERTE ECHTZEIT-BEWERTUNGEN
                </span>
                <span className="text-[10px] text-slate-500 font-mono">· {TRUSTPILOT_STATS.lastUpdated}</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                  {TRUSTPILOT_STATS.rating.toFixed(1)}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-slate-400 font-mono">/ 5.0</span>
                <span className="px-3 py-1 bg-[#00b67a]/15 text-[#00b67a] text-xs font-mono font-extrabold rounded-md border border-[#00b67a]/30 uppercase tracking-widest">
                  {TRUSTPILOT_STATS.ratingText}
                </span>
              </div>

              {/* 5 Green Trustpilot Stars */}
              <div className="flex items-center gap-1.5 pt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00b67a] flex items-center justify-center rounded-[3px] shadow-sm"
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                  </div>
                ))}
              </div>

              <div className="text-xs text-slate-300 font-sans pt-1">
                Basierend auf <strong className="text-white font-mono">{TRUSTPILOT_STATS.totalReviews}+ verifizierten Kundenrezensionen</strong> aus ganz Europa (DE, AT, CH, NL, FR, IT, ES, PL, CZ).
              </div>
            </div>

            {/* Middle: Star Distribution Breakdown */}
            <div className="lg:col-span-4 space-y-2 py-2 border-t lg:border-t-0 lg:border-x border-white/5 lg:px-8">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Bewertungsspiegel</span>
                <span className="text-emerald-400 font-bold">{TRUSTPILOT_STATS.verifiedPurchasesPercent}% Verifiziert</span>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-12 text-[11px] text-slate-400">5 Sterne</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00b67a] rounded-full" style={{ width: `${TRUSTPILOT_STATS.fiveStarPercent}%` }} />
                  </div>
                  <span className="w-8 text-right text-[11px] text-white font-bold">{TRUSTPILOT_STATS.fiveStarPercent}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-12 text-[11px] text-slate-400">4 Sterne</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00b67a]/60 rounded-full" style={{ width: `${TRUSTPILOT_STATS.fourStarPercent}%` }} />
                  </div>
                  <span className="w-8 text-right text-[11px] text-slate-400">{TRUSTPILOT_STATS.fourStarPercent}%</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <span className="w-12 text-[11px]">3–1 Stern</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-700" style={{ width: '0%' }} />
                  </div>
                  <span className="w-8 text-right text-[11px]">0%</span>
                </div>
              </div>
            </div>

            {/* Right: Key Verified Trust Signals */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-[#00b67a] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white font-mono">100% Verifizierte Käufe</div>
                  <div className="text-[11px] text-slate-400">Jede Bewertung ist an eine reale Auftragsnummer gekoppelt.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-300">
                <Truck className="w-5 h-5 text-[#00F0FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white font-mono">ADR 9 Gefahrgut-Logistik</div>
                  <div className="text-[11px] text-slate-400">Dachser & Schenker Spedition mit telefonischer Avisierung.</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={TRUSTPILOT_STATS.trustpilotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00b67a] hover:underline uppercase tracking-wider font-semibold"
                >
                  <span>Offizielles Trustpilot-Profil ansehen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* CONTROLS & CATEGORY FILTER TABS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `Alle (${TRUSTPILOT_STATS.totalReviews}+)` },
              { id: 'motos', label: 'E-Motos & Dirt Bikes' },
              { id: 'akkus', label: '72V Akkus & ADR 9' },
              { id: 'kits', label: 'E-Bike Umbausätze' },
              { id: 'parts', label: 'Komponenten & Drivetrain' },
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#00b67a] text-white shadow-lg shadow-[#00b67a]/20'
                    : 'bg-[#14141c] text-slate-400 hover:text-white hover:bg-[#1b1b26] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Slider Play/Pause & Prev/Next Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs font-mono text-slate-500">
              <strong className="text-white font-bold">{currentIndex + 1}</strong>–
              <strong className="text-white font-bold">{Math.min(currentIndex + visibleCount, filteredReviews.length)}</strong> von {filteredReviews.length}
            </span>

            {/* Autoplay Toggle */}
            <button
              type="button"
              onClick={() => setIsAutoplay(!isAutoplay)}
              className={`p-2 rounded-lg border transition-colors ${
                isAutoplay
                  ? 'bg-white/5 text-emerald-400 border-emerald-500/30'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
              }`}
              title={isAutoplay ? 'Auto-Slide pausieren' : 'Auto-Slide aktivieren'}
              aria-label={isAutoplay ? 'Auto-Slide pausieren' : 'Auto-Slide aktivieren'}
            >
              {isAutoplay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 bg-[#14141c] hover:bg-[#1d1d28] text-white rounded-lg border border-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#00b67a]"
              aria-label="Vorherige Bewertungen"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="p-2 bg-[#14141c] hover:bg-[#1d1d28] text-white rounded-lg border border-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#00b67a]"
              aria-label="Nächste Bewertungen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* AUTOPLAY PROGRESS BAR */}
        {isAutoplay && (
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden -mt-8">
            <div
              className="h-full bg-[#00b67a] transition-all duration-100 ease-linear"
              style={{ width: `${autoProgress}%` }}
            />
          </div>
        )}

        {/* SMOOTH SLIDING CAROUSEL TRACK */}
        <div
          className="overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * slidePercent}%)`,
            }}
          >
            {filteredReviews.map((review) => {
              const votes = (helpfulVotes[review.id] || 0) + review.helpfulCount;
              const voted = hasVoted[review.id];

              return (
                <div
                  key={review.id}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2 sm:px-3"
                >
                  <article className="h-full bg-[#121218] border border-white/10 hover:border-[#00b67a]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-xl group hover:-translate-y-1 relative">
                    
                    {/* Top: Stars & Relative Timestamp */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        {/* Trustpilot 5 Stars */}
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-[2px]"
                            >
                              <Star className="w-3 h-3 text-white fill-white" />
                            </div>
                          ))}
                        </div>

                        {/* Relative Time */}
                        <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {review.date}
                        </div>
                      </div>

                      {/* Review Title */}
                      <h3 className="text-base font-bold text-white font-mono leading-snug line-clamp-2">
                        {review.title}
                      </h3>

                      {/* Review Body */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-5">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    {/* Bottom Details: Author, Delivery, Product Tag, Helpful */}
                    <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                      
                      {/* Author & Verification */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white font-mono text-xs flex items-center gap-1.5">
                            <span>{review.author}</span>
                            <span>{review.flag}</span>
                          </div>
                          <div className="text-[11px] text-slate-500">{review.location}</div>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] font-mono text-[#00b67a] font-semibold bg-[#00b67a]/10 px-2 py-1 rounded">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Verifiziert</span>
                        </div>
                      </div>

                      {/* Product Tag */}
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 space-y-1">
                        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          Gekaufter Artikel:
                        </div>
                        <Link
                          href={`/shop/${review.category === 'parts' ? 'komponenten-drivetrain' : review.category === 'akkus' ? 'akkus-ladetechnik' : review.category === 'kits' ? 'e-bike-umbausaetze' : 'komplette-e-motos'}/${review.productSlug}/` as any}
                          className="text-xs font-mono font-bold text-[#00F0FF] hover:underline line-clamp-1 block"
                        >
                          {review.productName} →
                        </Link>
                        <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                          <Truck className="w-3 h-3 text-slate-500 shrink-0" />
                          <span className="truncate">{review.deliveryMethod}</span>
                        </div>
                      </div>

                      {/* Helpful Vote */}
                      <div className="flex items-center justify-between text-xs font-mono pt-1">
                        <span className="text-[11px] text-slate-500">
                          Trustpilot ID: <span className="text-slate-400">{review.id}</span>
                        </span>

                        <button
                          type="button"
                          onClick={() => handleVote(review.id)}
                          disabled={voted}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-colors ${
                            voted
                              ? 'bg-emerald-500/20 text-emerald-400 cursor-default'
                              : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <ThumbsUp className={`w-3.5 h-3.5 ${voted ? 'fill-current' : ''}`} />
                          <span>Hilfreich ({votes})</span>
                        </button>
                      </div>

                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* SLIDER PAGINATION DOTS & TRUST BADGE */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
          {/* Pagination dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setAutoProgress(0);
                }}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? 'w-8 bg-[#00b67a]'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Gehe zu Rezension Folie ${idx + 1}`}
              />
            ))}
          </div>

          {/* Direct CTA to leave review / view all */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-slate-400 hidden sm:inline">
              Fahrbericht teilen oder alle 487+ Bewertungen lesen:
            </span>
            <a
              href={TRUSTPILOT_STATS.trustpilotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#14141c] hover:bg-[#1d1d28] text-white rounded-lg border border-white/10 font-bold transition-colors"
            >
              <span>Alle 487+ auf Trustpilot</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00b67a]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
