'use client';

import React, { useState } from 'react';
import { useCart } from '@/src/lib/cart-context';
import { Truck, Search, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from '@/src/i18n/routing';

export function TrackingClient() {
  const { locale, t } = useCart();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [result, setResult] = useState<null | {
    carrier: string;
    status: string;
    step: number;
    destination: string;
    details: string;
  }>(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    const tn = trackingNumber.toUpperCase();
    if (tn.startsWith('DAC') || tn.startsWith('SCH') || tn.startsWith('TQE') || tn.startsWith('EMO')) {
      setResult({
        carrier: locale.startsWith('de') ? 'Dachser Spedition (Gefahrgut ADR Klasse 9)' : 'Dachser Logistics (ADR Class 9 Hazmat)',
        status: locale.startsWith('de') ? 'In Zustellung — Lieferavisierung erfolgt telefonisch' : 'Out for delivery — Recipient will be called',
        step: 3,
        destination: 'EU / Central Depot',
        details: locale.startsWith('de') 
          ? 'Gefahrgut-Traktionsakku UN 3480 im Spezialbehälter, Übergabe nur gegen Unterschrift.'
          : 'Hazmat traction battery UN 3480 in specialized container. Signature required.'
      });
    } else {
      setResult({
        carrier: 'DHL Paket Express',
        status: locale.startsWith('de') ? 'Sendung im Paketzentrum bearbeitet' : 'Processed at parcel center',
        step: 2,
        destination: 'Europe',
        details: locale.startsWith('de') 
          ? 'Paketversand für Zubehörteile und Komponenten.'
          : 'Parcel shipping for accessories and small components.'
      });
    }
  };

  return (
    <div className="py-12 bg-[#0d0d12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-white transition-colors">{locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}</Link>
          <span>/</span>
          <span className="text-slate-300">{t.nav.tracking}</span>
        </nav>

        {/* Title */}
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-1 bg-[#1a1a26] border border-[#2b2b3e] text-slate-300 text-xs font-mono rounded">
            {locale.startsWith('de') ? 'LOGISTIK & SPEDITIONS-TRACKING' : 'LOGISTICS & FREIGHT TRACKING'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {locale.startsWith('de') ? 'Sendungsverfolgung' : 'Shipment Tracking'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            {locale.startsWith('de') 
              ? 'Verfolgen Sie Ihre Bestellung von Kleinteilen (DHL) oder schweren E-Motos und Traktionsbatterien (Spedition Dachser / DB Schenker).'
              : 'Track your order for small parts (DHL) or heavy e-motos and traction batteries (Dachser / DB Schenker).'}
          </p>
        </div>

        {/* Lookup Box */}
        <div className="bg-[#14141c] border border-[#262638] rounded-xl p-6 sm:p-8 shadow-xl space-y-6">
          <form onSubmit={handleLookup} className="space-y-4">
            <label className="block text-xs font-mono text-slate-300">
              {locale.startsWith('de') ? 'Sendungsnummer / Auftragsnummer eingeben:' : 'Enter tracking or order number:'}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                value={trackingNumber}
                onChange={e => setTrackingNumber(e.target.value)}
                placeholder="z. B. EMO-849201-DE"
                className="flex-1 bg-[#181824] border border-[#2c2c3c] rounded px-4 py-3 text-white text-xs font-mono uppercase placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#E63946] hover:bg-[#d52b38] text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>{locale.startsWith('de') ? 'Status abfragen' : 'Check Status'}</span>
              </button>
            </div>
          </form>

          {/* Tracking Result View */}
          {result && (
            <div className="pt-6 border-t border-[#242434] space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{locale.startsWith('de') ? 'Dienstleister' : 'Carrier'}:</span>
                <span className="text-white font-bold">{result.carrier}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{locale.startsWith('de') ? 'Status' : 'Status'}:</span>
                <span className="text-emerald-400 font-bold">{result.status}</span>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-3 gap-2 py-3 text-center text-[10px] font-mono">
                <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                  1. {locale.startsWith('de') ? 'Warenausgang' : 'Dispatch'}
                </div>
                <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                  2. {locale.startsWith('de') ? 'In Zustellung' : 'Transit'}
                </div>
                <div className="p-2 rounded bg-[#1e1e2c] border border-[#2e2e42] text-slate-300">
                  3. {locale.startsWith('de') ? 'Avisierung' : 'Delivery'}
                </div>
              </div>

              <div className="p-3 bg-[#181824] rounded border border-[#272738] text-xs text-slate-300 leading-snug">
                {result.details}
              </div>
            </div>
          )}
        </div>

        {/* Speditions-Hinweise */}
        <div className="bg-[#121218] border border-[#22222e] rounded-xl p-6 text-xs text-slate-400 space-y-3">
          <h2 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-500" />
            <span>{locale.startsWith('de') ? 'Hinweise zur Speditionszustellung' : 'Freight Shipping Notes'}</span>
          </h2>
          <p className="leading-relaxed">
            {locale.startsWith('de') 
              ? 'Speditionslieferungen (z. B. komplette E-Motos oder Akkus) erfolgen mit LKW und Hebebühne. Der Spediteur meldet sich telefonisch vor der Anlieferung.'
              : 'Freight deliveries (e.g. complete bikes or batteries) are made via truck with hydraulic tail-lift. The carrier will call you to schedule delivery.'}
          </p>
        </div>

      </div>
    </div>
  );
}
