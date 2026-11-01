'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/src/i18n/routing';
import { SITE } from '@/src/config/site';
import { ChevronDown } from 'lucide-react';
import { Locale } from '@/src/lib/i18n';

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = SITE.supportedLanguages.find(l => l.code === locale) || SITE.supportedLanguages[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-200 bg-[#16161e] border border-[#2d2d3a] hover:border-slate-500 rounded-md transition-colors"
        aria-label="Sprache auswählen"
        aria-expanded={isOpen}
      >
        <span>{currentLangObj.flag}</span>
        <span className="hidden sm:inline font-mono font-medium">{currentLangObj.code.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#16161e] border border-[#2d2d3c] rounded-lg shadow-2xl py-1.5 z-50 max-h-80 overflow-y-auto">
          <div className="px-3 py-1 text-[10px] font-mono text-slate-400 uppercase tracking-wider border-b border-[#242432]">
            Europäische Sprachen
          </div>
          {SITE.supportedLanguages.map(l => (
            <Link
              key={l.code}
              href={pathname}
              locale={l.code as Locale}
              onClick={() => setIsOpen(false)}
              className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                locale === l.code ? 'bg-[#252535] text-white font-bold' : 'text-slate-300 hover:bg-[#1f1f2c] hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono">{l.code}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
