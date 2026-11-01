'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CONTACT } from '@/src/config/site';
import { useI18n } from '@/src/lib/cart-context';
import {
  Building2,
  CheckCircle2,
  Truck,
  Zap,
  ShieldCheck,
  Send,
  AlertTriangle,
  BadgePercent
} from 'lucide-react';

export function WholesaleClient() {
  const router = useRouter();
  const { t, locale } = useI18n();
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    vatId: '',
    country: locale === 'de' ? 'Deutschland' : 'Other EU',
    businessType: 'E-Bike Fachwerkstatt',
    estimatedVolume: '5.000 € – 15.000 € p.a.',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/forms/wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        router.push(data.redirect || '/thank-you-wholesale/');
      } else {
        setErrorMsg(data.error || (locale === 'de' ? 'Fehler beim Absenden.' : 'Submission error.'));
      }
    } catch {
      setErrorMsg(locale === 'de' ? 'Verbindungsfehler.' : 'Connection error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-[#09090c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-white transition-colors">
            {locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}
          </Link>
          <span>/</span>
          <span className="text-slate-300">{t.nav?.b2b || 'Wholesale'}</span>
        </nav>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block px-2.5 py-1 bg-white/[0.03] border border-white/10 text-[#00F0FF] text-[10px] font-mono font-bold rounded uppercase tracking-widest">
            {((t.b2b as any) as any)?.badge || 'B2B WHOLESALE & GEWERBLICHE KONDITIONEN'}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight leading-tight">
            {(t.b2b as any)?.title || 'B2B-Händlerportal für E-Bike Werkstätten & Rennteams'}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed font-sans">
            {(t.b2b as any)?.subtitle || 'Profitieren Sie als gewerblicher Wiederverkäufer von attraktiven Händlermargen und direkter Gefahrgut-Logistik.'}
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl relative overflow-hidden">
            <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{(t.b2b as any)?.tier1Label || 'Stufe 1 · Werkstatt'}</div>
            <div className="text-4xl font-black text-white font-mono tracking-tighter">15% <span className="text-sm font-medium text-slate-500">OFF</span></div>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              {(t.b2b as any)?.tier1Text || 'Für lokale Fachwerkstätten mit gelegentlichem Bedarf an Komponenten.'}
            </p>
            <div className="pt-4 border-t border-white/5 space-y-3">
               <div className="flex items-center gap-3 text-[11px] text-slate-300 font-mono">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                 <span>{locale === 'de' ? 'Kein Mindestumsatz' : 'No min order'}</span>
               </div>
               <div className="flex items-center gap-3 text-[11px] text-slate-300 font-mono">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                 <span>{locale === 'de' ? 'Rechnungskauf' : 'Net 14 payment'}</span>
               </div>
            </div>
          </div>

          <div className="bg-[#121218] border-2 border-[#FF3B30] rounded-2xl p-6 sm:p-8 space-y-5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3B30]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="text-[10px] font-mono text-[#FF3B30] uppercase tracking-widest font-bold">{(t.b2b as any)?.tier2Label || 'Stufe 2 · Pro Partner'}</div>
            <div className="text-4xl font-black text-white font-mono tracking-tighter">25% <span className="text-sm font-medium text-slate-500">OFF</span></div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {(t.b2b as any)?.tier2Text || 'Für spezialisierte Händler und gewerbliche E-MTB Flottenbetreiber.'}
            </p>
            <div className="pt-4 border-t border-white/10 space-y-3 relative z-10">
               <div className="flex items-center gap-3 text-[11px] text-slate-200 font-mono">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                 <span>{locale === 'de' ? 'Express Gefahrgut (24h)' : '24h Hazmat dispatch'}</span>
               </div>
               <div className="flex items-center gap-3 text-[11px] text-slate-200 font-mono">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                 <span>{locale === 'de' ? 'Prüfstandsprotokolle' : 'Dyno data access'}</span>
               </div>
               <div className="flex items-center gap-3 text-[11px] text-slate-200 font-mono">
                 <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                 <span>{locale === 'de' ? 'VIP Technik-Support' : 'Priority tech support'}</span>
               </div>
            </div>
          </div>

          <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl relative overflow-hidden">
             <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{(t.b2b as any)?.tier3Label || 'Stufe 3 · Distributor'}</div>
             <div className="text-4xl font-black text-white font-mono tracking-tighter">35% <span className="text-sm font-medium text-slate-500">OFF</span></div>
             <p className="text-xs text-slate-400 leading-relaxed font-sans">
               {(t.b2b as any)?.tier3Text || 'Für Großhändler und OEM-Partner mit Palettenabnahme.'}
             </p>
             <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{locale === 'de' ? 'Eigene CNC-Logos' : 'Custom CNC branding'}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{locale === 'de' ? 'Rahmen-Logistik' : 'Pallet logistics'}</span>
                </div>
             </div>
          </div>

        </div>

        {/* B2B Application Form */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00F0FF]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 mb-8">
            <h2 className="text-xl font-bold text-white font-mono uppercase tracking-tight">
              {(t.b2b as any)?.formTitle || 'Händlerzugang beantragen'}
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-2xl leading-relaxed">
              {locale === 'de' 
                ? 'Nach Überprüfung Ihrer USt-IdNr. schalten wir Ihr Händlerkonto innerhalb von 24 Stunden frei.'
                : 'After verification of your VAT ID, we will activate your dealer account within 24 hours.'}
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 bg-red-950/50 border border-red-800 rounded-xl text-red-200 text-xs flex items-center gap-3 mb-6 relative z-10">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 text-xs relative z-10 font-mono uppercase tracking-tight">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-2">
                  {(t.b2b as any)?.companyLabel || 'Firma'} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF3B30] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-2">
                  {(t.b2b as any)?.contactLabel || 'Kontaktperson'} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF3B30] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-2">
                  {(t.b2b as any)?.emailLabel || 'E-Mail'} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF3B30] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-2">
                  {(t.b2b as any)?.phoneLabel || 'Telefon'} *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF3B30] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-2">
                  {(t.b2b as any)?.vatLabel || 'VAT / USt-IdNr.'} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.vatId}
                  onChange={e => setFormData({ ...formData, vatId: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF3B30] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-2">
                  {t.checkout?.country || 'Land'}
                </label>
                <select
                  value={formData.country}
                  onChange={e => setFormData({ ...formData, country: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF3B30] transition-colors"
                >
                  <option value="Deutschland">Deutschland</option>
                  <option value="Österreich">Österreich</option>
                  <option value="Schweiz">Schweiz</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Poland">Poland</option>
                  <option value="France">France</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Other EU">Other EU</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-2">
                  {locale === 'de' ? 'Art des Betriebs' : 'Business Type'}
                </label>
                <select
                  value={formData.businessType}
                  onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF3B30] transition-colors"
                >
                  <option value="E-Bike Fachwerkstatt">{locale === 'de' ? 'Fachwerkstatt' : 'Workshop'}</option>
                  <option value="Fahrradfachhandel">{locale === 'de' ? 'Fachhandel' : 'Retailer'}</option>
                  <option value="Motorrad-Händler">{locale === 'de' ? 'Motorrad-Händler' : 'Moto Dealer'}</option>
                  <option value="Rennteam">{locale === 'de' ? 'Rennteam' : 'Race Team'}</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 font-bold mb-2">
                  {(t.b2b as any)?.volumeLabel || 'Jahresbedarf'}
                </label>
                <select
                  value={formData.estimatedVolume}
                  onChange={e => setFormData({ ...formData, estimatedVolume: e.target.value })}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF3B30] transition-colors"
                >
                  <option value="< 5.000 €">{"< 5.000 €"}</option>
                  <option value="5.000 € - 15.000 €">{"5.000 € - 15.000 €"}</option>
                  <option value="15.000 € - 50.000 €">{"15.000 € - 50.000 €"}</option>
                  <option value="> 50.000 €">{"> 50.000 €"}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-slate-500 font-bold mb-2">
                {t.checkout?.notes || 'Nachricht'}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#FF3B30] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-10 py-4 bg-[#FF3B30] hover:bg-[#e03026] disabled:opacity-50 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#FF3B30]/20"
            >
              {isSubmitting ? (
                <span>{t.checkout?.submitting || 'Sending...'}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{(t.b2b as any)?.submitBtn || 'Händlerantrag einreichen'}</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
