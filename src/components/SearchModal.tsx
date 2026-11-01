'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PRODUCTS, CATEGORIES, POSTS, Product } from '@/src/config/site';
import { Search, X, Zap, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [filterStVZO, setFilterStVZO] = useState<'all' | 'stvzo' | 'offroad'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter(p => {
    const q = query.toLowerCase().trim();
    const matchesQ = !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.badge.toLowerCase().includes(q);

    const matchesStVZO = filterStVZO === 'all'
      ? true
      : filterStVZO === 'stvzo'
      ? p.isStVZO
      : !p.isStVZO;

    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;

    return matchesQ && matchesStVZO && matchesCat;
  });

  const filteredPosts = POSTS.filter(post => {
    const q = query.toLowerCase().trim();
    return q && (post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q));
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/search/?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 lg:p-20 bg-black/80 backdrop-blur-sm flex items-start justify-center" role="dialog" aria-modal="true">
      <div className="w-full max-w-2xl bg-[#14141c] border border-[#2b2b3a] rounded-xl shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95">
        
        {/* Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="p-4 border-b border-[#242432] flex items-center gap-3 bg-[#181824]">
          <Search className="w-5 h-5 text-[#E63946] shrink-0" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Produkt, 2000W Kit, 72V Akku, StVZO oder Modell suchen..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white"
              aria-label="Suchtext löschen"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded ml-1"
            aria-label="Suche schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Filter Controls (Segmented Tabs - compliant with zero-pill rule) */}
        <div className="p-3 bg-[#111116] border-b border-[#242432] flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1 bg-[#1a1a24] p-1 rounded-md border border-[#262634]">
            <button
              type="button"
              onClick={() => setFilterStVZO('all')}
              className={`px-2.5 py-1 rounded transition-colors text-[11px] font-medium ${
                filterStVZO === 'all' ? 'bg-[#E63946] text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Alle Systeme
            </button>
            <button
              type="button"
              onClick={() => setFilterStVZO('stvzo')}
              className={`px-2.5 py-1 rounded transition-colors text-[11px] font-medium flex items-center gap-1 ${
                filterStVZO === 'stvzo' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3 h-3" />
              <span>100% StVZO</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterStVZO('offroad')}
              className={`px-2.5 py-1 rounded transition-colors text-[11px] font-medium flex items-center gap-1 ${
                filterStVZO === 'offroad' ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3 h-3" />
              <span>Offroad Sport</span>
            </button>
          </div>

          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="bg-[#1a1a24] border border-[#262634] text-slate-300 text-[11px] rounded px-2.5 py-1 focus:outline-none"
          >
            <option value="all">Alle Kategorien</option>
            {CATEGORIES.map(c => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
          {filteredProducts.length === 0 && filteredPosts.length === 0 ? (
            <div className="py-10 text-center text-slate-500 text-xs">
              Keine passenden Produkte oder Artikel gefunden für &quot;{query}&quot;.
            </div>
          ) : (
            <>
              {filteredProducts.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider px-1">
                    Passende Produkte ({filteredProducts.length})
                  </div>
                  {filteredProducts.map(p => (
                    <Link
                      key={p.slug}
                      href={`/shop/${p.category}/${p.slug}/`}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 bg-[#191924] hover:bg-[#202030] border border-[#28283a] rounded-lg transition-colors group"
                    >
                      <div className="min-w-0 pr-4">
                        <div className="text-xs font-bold text-white group-hover:text-[#E63946] transition-colors truncate">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">
                          {p.categoryName} · {p.isStVZO ? 'StVZO konform' : 'Offroad Sportgerät'}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-extrabold text-[#E63946] font-mono">
                          €{p.price.toFixed(2)}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">inkl. 19% MwSt.</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {filteredPosts.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#222230]">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider px-1">
                    Passende Rechts- & Technikartikel ({filteredPosts.length})
                  </div>
                  {filteredPosts.map(post => (
                    <Link
                      key={post.slug}
                      href={`/magazin/${post.slug}/`}
                      onClick={onClose}
                      className="block p-3 bg-[#191924] hover:bg-[#202030] border border-[#28283a] rounded-lg transition-colors"
                    >
                      <div className="text-xs font-bold text-white hover:text-[#E63946] transition-colors">
                        {post.title}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {post.excerpt}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#101016] border-t border-[#242432] text-center">
          <Link
            href={`/search/?q=${encodeURIComponent(query)}`}
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 font-mono"
          >
            <span>Erweiterte Suchseite aufrufen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
