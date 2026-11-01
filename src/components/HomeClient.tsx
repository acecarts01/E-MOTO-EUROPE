'use client';

import React from 'react';
import { Link } from '@/src/i18n/routing';
import { SITE, CONTACT, BRAND, CATEGORIES, PRODUCTS, FAQ, SHOP } from '@/src/config/site';
import { useCart } from '@/src/lib/cart-context';
import { SmartImage } from '@/src/components/SmartImage';
import { TrustpilotReviewSlider } from '@/src/components/TrustpilotReviewSlider';
import {
  Zap,
  ShieldCheck,
  Truck,
  ArrowRight,
  BatteryCharging,
  Cpu,
  Bike,
  Activity,
  CheckCircle2,
  ChevronRight,
  Sliders,
  Scale,
  Star
} from 'lucide-react';

export function HomeClient() {
  const { t, locale } = useCart();
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">

      {/* 1. EDITORIAL ASYMMETRIC HERO SECTION WITH LIVE TELEMETRY */}
      <section className="relative overflow-hidden pt-10 sm:pt-16 pb-12 sm:pb-20 border-b border-white/10 bg-[#09090c]">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF3B30]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Headlines & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Tech Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase font-semibold">
                  {t.hero?.badge || 'DEUTSCHES INGENIEURSWERK · ADR KLASSE 9'}
                </span>
              </div>

              {/* EXACTLY ONE H1 FOR WHOLE PAGE */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-mono">
                {t.hero?.h1 || 'HIGH-PERFORMANCE'} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#FF3B30]">
                  {t.hero?.h1Highlight || 'E-MOTOS & DRIVETRAINS'}
                </span>
              </h1>

              {/* Factual Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
                {t.hero?.subtitle || 'Europas spezialisierte Plattform für Hochvolt-Antriebstechnik, zertifizierte 72V Traktionsbatterien nach ADR Gefahrgutklasse 9 (UN 3480) und 100% StVZO-konforme 250W Pedelec-Systeme.'}
              </p>

              {/* Live Telemetry Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 bg-[#121218] rounded-xl border border-white/5 space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{t.hero?.telemetry?.voltageLabel || 'SPANNUNG'}</div>
                  <div className="text-base font-bold font-mono text-white">{t.hero?.telemetry?.voltageValue || '72V DC'}</div>
                  <div className="text-[10px] text-[#00F0FF]">{t.hero?.telemetry?.voltageSub || 'High-Rate Bus'}</div>
                </div>
                <div className="p-3 bg-[#121218] rounded-xl border border-white/5 space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{t.hero?.telemetry?.powerLabel || 'PEAK LEISTUNG'}</div>
                  <div className="text-base font-bold font-mono text-white">{t.hero?.telemetry?.powerValue || '12 kW'}</div>
                  <div className="text-[10px] text-emerald-400">{t.hero?.telemetry?.powerSub || 'Dyno Validiert'}</div>
                </div>
                <div className="p-3 bg-[#121218] rounded-xl border border-white/5 space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{t.hero?.telemetry?.torqueLabel || 'DREHMOMENT'}</div>
                  <div className="text-base font-bold font-mono text-white">{t.hero?.telemetry?.torqueValue || '280 Nm'}</div>
                  <div className="text-[10px] text-[#FF3B30]">{t.hero?.telemetry?.torqueSub || 'Sofort am Rad'}</div>
                </div>
                <div className="p-3 bg-[#121218] rounded-xl border border-white/5 space-y-0.5">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">{t.hero?.telemetry?.speedLabel || 'SPEED'}</div>
                  <div className="text-base font-bold font-mono text-white">{t.hero?.telemetry?.speedValue || '85 km/h'}</div>
                  <div className="text-[10px] text-slate-400">{t.hero?.telemetry?.speedSub || 'Off-Road Only'}</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/shop"
                  className="px-7 py-4 bg-[#FF3B30] hover:bg-[#e03026] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl shadow-[#FF3B30]/20 flex items-center justify-center gap-2 group"
                >
                  <span>{t.hero?.ctaShop || 'Gesamtkatalog entdecken'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={"/shop/e-bike-umbausaetze" as any}
                  className="px-7 py-4 bg-[#14141c] hover:bg-[#1a1a24] text-slate-200 hover:text-white font-mono font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Sliders className="w-4 h-4 text-slate-400" />
                  <span>{t.hero?.ctaKits || 'Umbausätze 250W–5kW'}</span>
                </Link>
              </div>

              {/* Trustpilot Hero Social Proof Pill */}
              <div className="pt-1">
                <a
                  href="#reviews"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00b67a]/50 transition-all group shadow-md"
                >
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div key={star} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-[2px]">
                        <Star className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-mono">
                    <span className="font-bold text-white">4.9 / 5.0</span>
                    <span className="text-slate-400"> auf Trustpilot · </span>
                    <span className="text-[#00b67a] font-bold underline decoration-[#00b67a]/40 group-hover:decoration-[#00b67a]">487+ Bewertungen ansehen</span>
                  </div>
                </a>
              </div>

              {/* Brand Entity Statement */}
              <div className="p-4 bg-[#111117] border-l-2 border-[#FF3B30] rounded-r-xl text-xs text-slate-400 leading-relaxed font-mono">
                <strong className="text-white">{SITE.name}:</strong> {t.hero?.entityStatement || 'Zentraler Werkstatt- und Entwicklungsstandort in Freising bei München. Eigene Prüfstandsdaten, HiGo-Industrie-Kabelbäume und gesetzeskonformer Speditionsversand in alle EU-Mitgliedstaaten.'}
              </div>

            </div>

            {/* Right Column: Featured Powertrain Flagship Showcase */}
            <div className="lg:col-span-5">
              <div className="bg-[#121218] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group backdrop-blur-md">
                
                {/* Visual Image */}
                <div className="relative">
                  <SmartImage
                    src="/images/products/hyper-drive-2000w-bundle.webp"
                    alt="HYPER-DRIVE 2000W Motor & 52V Akku Bundle"
                    priority={true}
                    aspectRatio="4/3"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF3B30] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-md shadow-md">
                    {(t.bestsellersSection as any)?.badgeBestseller || 'BESTSELLER BUNDLE'}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md text-slate-200 text-[10px] font-mono px-2.5 py-1 rounded border border-white/10">
                    52V 20Ah · 125 Nm
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-6 space-y-4 bg-[#101015]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="text-base font-bold text-white group-hover:text-[#FF3B30] transition-colors leading-snug font-mono">
                        HYPER-DRIVE 2000W Motor & 52V Akku Bundle
                      </h2>
                      <div className="text-xs text-slate-400 mt-1">
                        Inkl. CNC-Gasgriff, Smart-BMS & Drehmomentstützen
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-extrabold text-[#00F0FF] font-mono">
                        €995,00
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {t.product?.vatNotice || SHOP.priceSuffix}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                    <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {t.product?.inStock || 'Auf Lager · Versandfertig in 24h'}
                    </span>
                    <Link
                      href={"/shop/e-bike-umbausaetze/hyper-drive-2000w-motor-52v-akku-bundle" as any}
                      className="text-white hover:text-[#FF3B30] font-mono font-bold inline-flex items-center gap-1 text-xs"
                    >
                      <span>{(t.bestsellersSection as any)?.viewDetails || 'Details ansehen'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DYNAMIC BENTO GRID: POWERTRAIN & COMPLIANCE ARCHITECTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-mono font-bold text-[#FF3B30] tracking-widest uppercase">
            {t.bento?.badge || 'INGENIEURSKOMPETENZ · DEUTSCHE WERKSTATT'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
            {t.bento?.title || 'Die Vier Säulen Unserer Antriebstechnik'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {t.bento?.subtitle || 'Warum Europas anspruchsvollste Fahrer und Werkstätten auf E-MOTO EUROPE Antriebe vertrauen.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento 1: Large Span - High-Voltage Powertrains */}
          <div className="md:col-span-2 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00F0FF]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20 font-bold">
                {t.bento?.card1Badge || 'MESSSTAND-VALIDIERT'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white font-mono">
              {t.bento?.card1Title || '72V High-Output Powertrains & FOC Sinus-Inverter'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.bento?.card1Text || 'Unsere Antriebssysteme nutzen modernste feldorientierte Regelung (Field-Oriented Control). Wir eliminieren Drehmomentrippel, minimieren Motorerwärmung und ermöglichen simultane Rekuperationsbremsung bei bis zu 500A Phasenstrom.'}
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono text-slate-300">
              <span className="px-2.5 py-1 bg-white/[0.04] rounded border border-white/10">HiGo Goldkontakte</span>
              <span className="px-2.5 py-1 bg-white/[0.04] rounded border border-white/10">Bluetooth App-Telemetrie</span>
              <span className="px-2.5 py-1 bg-white/[0.04] rounded border border-white/10">CNC Drehmomentstützen</span>
            </div>
          </div>

          {/* Bento 2: ADR Class 9 Battery Safety */}
          <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                {t.bento?.card3Badge || 'GEFAHRGUT ADR 9'}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white font-mono">
              {t.bento?.card3Title || 'ADR Klasse 9 Gefahrgut'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.bento?.card3Text || 'Akkus über 100Wh versenden wir nach UN 3480 / UN 3481 in geprüften 4G-Kartonagen mit nicht brennbarem Innenfutter und Speditionsavisierung.'}
            </p>
            <div className="text-[11px] font-mono text-emerald-400 font-bold">
              {t.trust?.adrLogistics || '100% Rechtskonforme Logistik'}
            </div>
          </div>

          {/* Bento 3: Legal Clarity StVZO vs Offroad */}
          <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400">
                <Scale className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                {t.bento?.card2Badge || 'SICHERHEITSNORM'}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white font-mono">
              {t.bento?.card2Title || 'Rechtssicherheit & Normen'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.bento?.card2Text || 'Strikte Transparenz: 250W Pedelecs nach EN 15194 sind zu 100% straßenzugelassen. Motoren >250W sind reine Offroad-Sportgeräte.'}
            </p>
            <Link href={"/magazin/stvzo-leitfaden-e-motos-deutschland" as any} className="text-xs font-mono text-white underline hover:text-[#FF3B30] inline-block">
              {t.legalBanner?.learnMore || 'Rechtsleitfaden lesen →'}
            </Link>
          </div>

          {/* Bento 4: B2B Wholesale & Workshop Support */}
          <div className="md:col-span-2 bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF3B30]">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF3B30]/10 text-[#FF3B30] border border-[#FF3B30]/20 font-bold">
                {t.bento?.card4Badge || 'PAN-EUROPA SUPPORT'}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white font-mono">
              {t.bento?.card4Title || 'B2B Händlernetzwerk & Werkstattversorgung Europa'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.bento?.card4Text || 'Für Zweiradwerkstätten, Händler und Rennteams bieten wir gestaffelte B2B-Margentarife, Palettenbelieferung und technischen Direkt-Support durch unsere Werkstattmeister.'}
            </p>
            <div className="pt-1">
              <Link href="/wholesale" className="text-xs font-mono font-bold text-[#00F0FF] hover:underline">
                {t.nav?.b2b || 'Zum B2B Händlerportal wechseln →'}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CATEGORIES HUB */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-[#FF3B30] uppercase tracking-widest font-bold">
              {t.categoriesSection?.badge || 'PRODUKTKATEGORIEN'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {t.categoriesSection?.title || 'Sortiment nach Baugruppen'}
            </h2>
          </div>
            <Link
              href="/shop"
            className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1 group"
          >
            <span>{t.nav?.allCategories || 'Alle Kategorien anzeigen'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}` as any}
              className="group p-5 bg-[#121218] hover:bg-[#161622] rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF3B30] group-hover:scale-110 transition-transform">
                  {cat.slug === 'komplette-e-motos' ? <Bike className="w-5 h-5" /> :
                   cat.slug === 'e-bike-umbausaetze' ? <Zap className="w-5 h-5" /> :
                   cat.slug === 'akkus-ladetechnik' ? <BatteryCharging className="w-5 h-5" /> :
                   cat.slug === 'komponenten-drivetrain' ? <Cpu className="w-5 h-5" /> :
                   <ShieldCheck className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm group-hover:text-[#FF3B30] transition-colors leading-snug font-mono">
                    {locale !== 'de' && locale !== 'de-CH' && cat.nameEn ? cat.nameEn : cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="text-[10px] font-mono text-slate-400 group-hover:text-white flex items-center gap-1 pt-2 border-t border-white/5">
                <span>{t.categoriesSection?.viewCategory || 'Kategorie öffnen'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. ASYMMETRICAL OFFSET PRODUCT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-widest font-bold">
              {(t.bestsellersSection as any)?.badge || 'AUSGEWÄHLTE HIGHLIGHTS'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {(t.bestsellersSection as any)?.title || 'Bestseller & Flaggschiff-Systeme'}
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1 group"
          >
            <span>{(t.bestsellersSection as any)?.viewAll || 'Gesamten Shop ansehen'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <div
              key={p.slug}
              className="bg-[#121218] border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-white/20 transition-all"
            >
              <div>
                <div className="relative">
                  <SmartImage
                    src={p.images[0]}
                    alt={p.name}
                    priority={false}
                    aspectRatio="4/3"
                  />
                  <div className="absolute top-3 left-3 bg-[#151520]/90 backdrop-blur-md text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-white/10">
                    {p.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-mono border border-white/10">
                    {p.isStVZO ? (
                      <span className="text-emerald-400 font-bold">{(t.bestsellersSection as any)?.stvzoBadge || '100% StVZO'}</span>
                    ) : (
                      <span className="text-amber-400 font-bold">{(t.bestsellersSection as any)?.offroadBadge || 'Offroad Sport'}</span>
                    )}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">
                    {p.categoryName}
                  </div>
                  <h3 className="font-bold text-white text-sm group-hover:text-[#FF3B30] transition-colors leading-snug line-clamp-2 font-mono">
                    {p.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {p.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-3">
                <div className="flex items-baseline justify-between border-t border-white/5 pt-3">
                  <div>
                    <div className="text-base font-extrabold text-white font-mono">
                      €{p.price.toFixed(2)}
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono">
                      {(t.bestsellersSection as any)?.cryptoPrice || 'Krypto'}: €{(p.price * 0.95).toFixed(2)}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono text-right">
                    {t.product?.vatNotice || 'inkl. 19% MwSt.'}
                  </div>
                </div>

                <Link
                  href={`/shop/${p.category}/${p.slug}/` as any}
                  className="w-full py-2.5 px-3 bg-[#1a1a24] hover:bg-[#FF3B30] text-slate-200 hover:text-white font-mono text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t.bestsellersSection?.viewDetails || 'Details & Kaufen'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4.5 487+ REAL-TIME TRUSTPILOT REVIEWS SLIDER */}
      <TrustpilotReviewSlider />

      {/* 5. AUTHORITY & MUNICH WORKSHOP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono font-bold text-[#FF3B30] uppercase tracking-widest">
                {t.aboutSection?.badge || 'DEUTSCHE STANDORTKOMPETENZ'}
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
                {t.aboutSection?.title || `Über ${SITE.name}`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.aboutSection?.p1 || `Gegründet ${BRAND.foundingYear} in ${BRAND.foundingLocation}. Wir schließen die Lücke zwischen theoretischen Leistungsangaben und realer Haltbarkeit von Hochvolt-Elektroantrieben im harten Geländeeinsatz.`}
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.aboutSection?.v1Title || 'Eigene Prüfstandsdaten'}: </strong>
                    <span>{t.aboutSection?.v1Text || 'Echte Dauer- und Spitzenleistungen, thermische Überwachung und FOC-Sinusabstimmung.'}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.aboutSection?.v2Title || 'ADR Klasse 9 Gefahrgut'}: </strong>
                    <span>{t.aboutSection?.v2Text || 'Zertifizierter Speditionsversand für Akkus > 100Wh mit Hebebühne und Avisierung.'}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.aboutSection?.v3Title || '100% StVZO vs. Offroad'}: </strong>
                    <span>{t.aboutSection?.v3Text || 'Vollkommene Rechtssicherheit durch strikte Trennung von Pedelec und Sportgerät.'}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">{t.aboutSection?.v4Title || 'Ersatzteilgarantie'}: </strong>
                    <span>{t.aboutSection?.v4Text || 'Controller, BMS, Displays und HiGo-Kabelbäume dauerhaft ab München lieferbar.'}</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00F0FF] hover:underline"
                >
                  <span>{t.aboutSection?.learnMoreBtn || 'Mehr zur Werkstatt & Historie erfahren'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#161622] rounded-xl border border-white/5 space-y-1">
                <div className="text-2xl font-bold font-mono text-white">2021</div>
                <div className="text-xs text-slate-400">Gründung in Freising / München</div>
              </div>
              <div className="p-5 bg-[#161622] rounded-xl border border-white/5 space-y-1">
                <div className="text-2xl font-bold font-mono text-white">100%</div>
                <div className="text-xs text-slate-400">Prüfstandsvalidierte Werte</div>
              </div>
              <div className="p-5 bg-[#161622] rounded-xl border border-white/5 space-y-1">
                <div className="text-2xl font-bold font-mono text-white">ADR 9</div>
                <div className="text-xs text-slate-400">Zertifizierter Gefahrgutversand</div>
              </div>
              <div className="p-5 bg-[#161622] rounded-xl border border-white/5 space-y-1">
                <div className="text-2xl font-bold font-mono text-white">27 EU</div>
                <div className="text-xs text-slate-400">Staaten & Schweiz beliefert</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ DIRECT-ANSWER ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-[#FF3B30] uppercase tracking-widest font-bold">
            {t.faqPage?.breadcrumb || 'TRANSPARENZ & DIREKTANTWORTEN'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            {t.faqPage?.title || 'Häufig gestellte Fragen (FAQ)'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            {t.faqPage?.subtitle || 'Transparente und fundierte Antworten unserer Meisterwerkstatt zu Zulassungsbestimmungen nach StVZO, ADR-Gefahrgutversand, Bezahlung und Garantie.'}
          </p>
        </div>

        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <div key={idx} className="p-5 sm:p-6 bg-[#121218] border border-white/10 rounded-2xl space-y-2">
              <h3 className="font-bold text-white text-sm sm:text-base font-mono">
                {item.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
