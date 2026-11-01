'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TRUSTPILOT_REVIEWS, TrustpilotReview } from '@/src/data/reviews';
import { Star, CheckCircle2, X, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const POPUP_INTERVAL_MS = 60000; // Exactly 60 seconds
const DISPLAY_DURATION_MS = 8500; // Visible for 8.5 seconds

export function ReviewPopupToast() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(100);

  const displayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeReview: TrustpilotReview = TRUSTPILOT_REVIEWS[currentReviewIndex % TRUSTPILOT_REVIEWS.length];

  const showReviewRef = useRef<() => void>(() => {});

  // Function to show a review popup
  const showReview = React.useCallback(() => {
    setIsVisible(true);
    setProgress(100);

    // Progress bar tick
    const start = Date.now();
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    progressIntervalRef.current = setInterval(() => {
      if (isPaused) return;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / DISPLAY_DURATION_MS) * 100);
      setProgress(remaining);
      if (remaining <= 0 && progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }, 100);

    // Auto-hide after DISPLAY_DURATION_MS
    if (displayTimerRef.current) clearTimeout(displayTimerRef.current);
    displayTimerRef.current = setTimeout(() => {
      if (!isPaused) {
        setIsVisible(false);
        // Advance to next review for the next 60s trigger
        setCurrentReviewIndex(prev => (prev + 1) % TRUSTPILOT_REVIEWS.length);
      }
    }, DISPLAY_DURATION_MS);
  }, [isPaused]);

  useEffect(() => {
    showReviewRef.current = showReview;
  }, [showReview]);

  useEffect(() => {
    // Initial entrance after 4 seconds so the user immediately sees social proof
    const initialDelay = setTimeout(() => {
      showReviewRef.current();
    }, 4000);

    // Then recurrent every 60 seconds
    intervalTimerRef.current = setInterval(() => {
      showReviewRef.current();
    }, POPUP_INTERVAL_MS);

    return () => {
      clearTimeout(initialDelay);
      if (intervalTimerRef.current) clearInterval(intervalTimerRef.current);
      if (displayTimerRef.current) clearTimeout(displayTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    if (displayTimerRef.current) clearTimeout(displayTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setCurrentReviewIndex(prev => (prev + 1) % TRUSTPILOT_REVIEWS.length);
  };

  const handleScrollToReviews = () => {
    setIsVisible(false);
    const reviewsEl = document.getElementById('reviews');
    if (reviewsEl) {
      reviewsEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#reviews';
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Kürzliche Trustpilot Kundenbewertung"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={handleScrollToReviews}
      className="fixed bottom-5 left-4 sm:left-6 z-40 max-w-[calc(100vw-2rem)] sm:max-w-md cursor-pointer transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="bg-[#121218]/95 backdrop-blur-xl border border-white/10 hover:border-[#00b67a]/60 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden group">
        
        {/* Subtle green ambient accent glow */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-[#00b67a]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Progress bar along top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
          <div
            className="h-full bg-[#00b67a] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header row: Live Trustpilot badge, relative time, close button */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#00b67a] animate-ping" />
            <span className="font-bold text-[#00b67a] uppercase tracking-wider">
              TRUSTPILOT ECHTZEIT
            </span>
            <span className="text-slate-500 text-[10px]">· {activeReview.date}</span>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Bewertungs-Benachrichtigung schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Customer & Rating line */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#1e1e28] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white shadow-inner">
              {activeReview.author.slice(0, 1)}
            </div>
            <div>
              <div className="text-xs font-bold text-white font-mono flex items-center gap-1">
                <span>{activeReview.author}</span>
                <span>{activeReview.flag}</span>
              </div>
              <div className="text-[10px] text-slate-400">{activeReview.location}</div>
            </div>
          </div>

          {/* 5 Green Trustpilot Stars */}
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-[2px]"
              >
                <Star className="w-2.5 h-2.5 text-white fill-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Review snippet */}
        <p className="text-xs text-slate-200 line-clamp-2 font-sans leading-relaxed mb-2.5">
          &ldquo;{activeReview.text}&rdquo;
        </p>

        {/* Product tag & Verified badge */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5 text-[10px] font-mono">
          <div className="flex items-center gap-1 text-[#00F0FF] font-semibold truncate">
            <Sparkles className="w-3 h-3 shrink-0" />
            <span className="truncate">{activeReview.productName}</span>
          </div>

          <div className="flex items-center gap-1 text-[#00b67a] shrink-0 font-bold">
            <CheckCircle2 className="w-3 h-3" />
            <span>Verifiziert</span>
          </div>
        </div>

      </div>
    </aside>
  );
}
