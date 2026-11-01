'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  Building2,
  Zap,
  MessageCircle,
  Copy,
  Check,
  Printer,
  ArrowRight,
  ShieldAlert,
  Truck
} from 'lucide-react';
import { SITE, CONTACT } from '@/src/config/site';
import { useCart } from '@/src/lib/cart-context';
import { Link } from '@/src/i18n/routing';

interface OrderConfirmationClientProps {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export function OrderConfirmationClient({ params, searchParams }: OrderConfirmationClientProps) {
  const { t, locale } = useCart();
  const orderNumber = (searchParams.order as string) || 'EMO-849201-EU';
  const paymentMethod = (searchParams.method as string) || 'sepa-vorkasse';
  const totalParam = (searchParams.total as string) || '995.00';
  const customerName = (searchParams.name as string) || (locale === 'de' ? 'Kunde' : 'Customer');

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const totalNum = parseFloat(totalParam) || 995.00;
  const isCrypto = paymentMethod.startsWith('crypto');
  const finalPayable = isCrypto ? (totalNum * 0.95).toFixed(2) : totalNum.toFixed(2);
  const cryptoDiscountAmount = isCrypto ? (totalNum * 0.05).toFixed(2) : '0.00';
  const vatAmount = (parseFloat(finalPayable) * 0.19 / 1.19).toFixed(2);
  const netAmount = (parseFloat(finalPayable) - parseFloat(vatAmount)).toFixed(2);

  const whatsappMessage = `Hello ${SITE.name}, I just prepared order draft ${orderNumber} (Total: €${finalPayable}). Please verify availability. Thanks!`;

  return (
    <div className="py-12 sm:py-20 bg-[#09090c] text-slate-100 min-h-screen font-mono uppercase tracking-tight text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Header Card */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF3B30]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 mb-1">
                  {t.confirmation?.orderSubtitle || 'AUFTRAGSERFASSUNG ERFOLGREICH'}
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
                  {t.confirmation?.orderRef || 'Auftrag'} {orderNumber}
                </h1>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{locale === 'de' ? 'Ausgestellt durch:' : 'Issued by:'}</div>
              <div className="text-xs font-bold text-white">{SITE.legalName}</div>
              <div className="text-[10px] text-slate-500">{locale === 'de' ? 'Zentraldepot: München / Freising' : 'Central Depot: Munich'}</div>
            </div>
          </div>

          <div className="mt-8 text-sm text-slate-300 leading-relaxed font-sans normal-case">
            {locale === 'de' 
              ? <>Sehr geehrte/r <strong>{customerName}</strong>, vielen Dank für Ihren Bestellentwurf bei {SITE.name}. Ihr Auftrag wurde verbindlich registriert und für die technische Werkstattprüfung freigegeben.</>
              : <>Dear <strong>{customerName}</strong>, thank you for your order draft with {SITE.name}. Your inquiry has been registered and cleared for technical verification.</>
            }
          </div>
        </div>

        {/* Itemized Calculation & Line Breakdown */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <h2 className="text-sm font-bold text-white uppercase tracking-[0.2em] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            <span>{t.confirmation?.orderTitle || 'Kostenaufstellung'}</span>
            <span className="text-[10px] font-normal text-slate-500 tracking-normal">({SITE.currency} EUR)</span>
          </h2>

          <div className="overflow-x-auto text-[11px]">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-slate-500 tracking-widest uppercase">
                  <th className="py-4 font-bold">{t.confirmation?.productCol || 'POSITION'}</th>
                  <th className="py-4 font-bold text-right">{t.confirmation?.totalCol || 'BETRAG'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-5">
                    <div className="font-bold text-white">{locale === 'de' ? 'E-MOTO Komponenten / Traktionssystem' : 'E-MOTO Powertrain Components'}</div>
                    <div className="text-[10px] text-slate-500 mt-1 font-sans normal-case">{locale === 'de' ? 'Auftragsbezogene Kommissionierung' : 'Order-specific picking and packing'}</div>
                  </td>
                  <td className="py-5 text-right font-bold text-white text-sm">€{totalNum.toFixed(2)}</td>
                </tr>

                {isCrypto && (
                  <tr className="text-emerald-400 bg-emerald-500/5">
                    <td className="py-4 px-3 rounded-l-lg">
                      <div className="font-bold flex items-center gap-2">
                        <Zap className="w-4 h-4 fill-current" />
                        <span>{t.confirmation?.cryptoNotice || '5% Krypto-Sofortrabatt'}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-right font-bold rounded-r-lg">-€{cryptoDiscountAmount}</td>
                  </tr>
                )}

                <tr>
                  <td className="py-4 text-slate-500">{locale === 'de' ? 'Zwischensumme (Netto)' : 'Subtotal (Net)'}</td>
                  <td className="py-4 text-right text-slate-400">€{netAmount}</td>
                </tr>

                <tr>
                  <td className="py-4 text-slate-500">{locale === 'de' ? 'Gesetzliche MwSt. (19%)' : 'Statutory VAT (19%)'}</td>
                  <td className="py-4 text-right text-slate-400">€{vatAmount}</td>
                </tr>

                <tr className="border-t-2 border-white/20">
                  <td className="py-6 font-black text-white text-sm uppercase">{locale === 'de' ? 'ENDGÜLTIGER ZAHLBETRAG' : 'TOTAL PAYABLE AMOUNT'}</td>
                  <td className="py-6 text-right font-black text-[#00F0FF] text-xl">€{finalPayable}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-Step Payment Instructions */}
        <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <h2 className="text-sm font-bold text-white uppercase tracking-[0.2em] flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
            <span>{locale === 'de' ? '2. Zahlungsanweisung' : '2. Payment Instructions'}</span>
          </h2>

          {isCrypto ? (
            /* Crypto Instructions */
            <div className="space-y-6 text-[11px]">
              <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-xl space-y-3">
                <div className="font-bold text-amber-400 flex items-center gap-2">
                  <Zap className="w-5 h-5 fill-current" />
                  <span>KRYPTO-RABATT AKTIVIERT: €{finalPayable}</span>
                </div>
                <p className="text-slate-300 font-sans normal-case leading-relaxed">
                  {locale === 'de' 
                    ? 'Bitte senden Sie den rabattierten Betrag an eine der untenstehenden Adressen. Geben Sie Ihre Auftragsnummer im Memo an.'
                    : 'Please send the discounted total to one of the addresses below. Mention your order reference in the memo.'}
                </p>
              </div>

              {/* BTC */}
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3">
                <div className="text-slate-500 font-bold tracking-widest uppercase">Bitcoin (BTC) Address:</div>
                <div className="flex items-center justify-between gap-4 p-3 bg-black rounded-lg border border-white/10 break-all">
                  <span className="text-white text-xs">bc1qemoto99eu72vtractionpower2026k9x</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('bc1qemoto99eu72vtractionpower2026k9x', 'btc')}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 transition-colors shrink-0"
                  >
                    {copiedField === 'btc' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* USDT */}
              <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-3">
                <div className="text-slate-500 font-bold tracking-widest uppercase">Tether USDT (TRC-20):</div>
                <div className="flex items-center justify-between gap-4 p-3 bg-black rounded-lg border border-white/10 break-all">
                  <span className="text-white text-xs">TXemotoEuropeMobility2026Traction99</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('TXemotoEuropeMobility2026Traction99', 'usdt')}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 transition-colors shrink-0"
                  >
                    {copiedField === 'usdt' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* SEPA Instructions */
            <div className="space-y-6 text-[11px]">
              <div className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl space-y-3">
                <div className="font-bold text-emerald-400 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span>SEPA BANKÜBERWEISUNG / INSTANT TRANSFER</span>
                </div>
                <p className="text-slate-300 font-sans normal-case leading-relaxed">
                   {locale === 'de' 
                    ? 'Überweisen Sie den Rechnungsbetrag auf unser deutsches Geschäftskonto. Bei SEPA Instant erfolgt die Freigabe noch heute.'
                    : 'Transfer the total amount to our German business account. SEPA Instant payments are processed same-day.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="text-slate-500 font-bold tracking-widest uppercase">{t.confirmation?.sepaBankName || 'BANK'}</div>
                  <div className="font-bold text-white text-sm">Deutsche Bank AG München</div>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="text-slate-500 font-bold tracking-widest uppercase">{t.confirmation?.sepaHolder || 'HOLDER'}</div>
                  <div className="font-bold text-white text-sm">E-MOTO Europe Mobility Systems GmbH</div>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="text-slate-500 font-bold tracking-widest uppercase">IBAN</div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold text-white text-sm tracking-widest break-all">DE89700700100987654321</span>
                    <button onClick={() => copyToClipboard('DE89700700100987654321', 'iban')} className="p-2 bg-white/5 rounded-lg text-slate-300 shrink-0">
                      {copiedField === 'iban' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="text-slate-500 font-bold tracking-widest uppercase">BIC / SWIFT</div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold text-white text-sm tracking-widest">DEUTDEDBMUC</span>
                    <button onClick={() => copyToClipboard('DEUTDEDBMUC', 'bic')} className="p-2 bg-white/5 rounded-lg text-slate-300 shrink-0">
                      {copiedField === 'bic' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-[#121218] border border-[#00F0FF]/30 rounded-xl space-y-2">
                <div className="text-[#00F0FF] font-bold tracking-widest uppercase">{locale === 'de' ? 'VERWENDUNGSZWECK (WICHTIG):' : 'PAYMENT REFERENCE (REQUIRED):'}</div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-black text-white text-base tracking-widest uppercase break-all">{orderNumber} - {customerName}</span>
                  <button onClick={() => copyToClipboard(`${orderNumber} - ${customerName}`, 'ref')} className="p-2 bg-white/10 rounded-lg text-[#00F0FF] shrink-0">
                    {copiedField === 'ref' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* VIP WhatsApp Concierge Jump Button */}
        <div className="bg-[#121218] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl font-sans uppercase">
          <div className="space-y-2 text-center sm:text-left">
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.2em] flex items-center justify-center sm:justify-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{locale === 'de' ? 'Direkter Meister-Concierge' : 'Direct Engineering Concierge'}</span>
            </div>
            <h3 className="text-xl font-black text-white">
              {locale === 'de' ? 'Bestellung per WhatsApp verifizieren' : 'Verify Order via WhatsApp'}
            </h3>
            <p className="text-xs text-slate-500 font-sans normal-case tracking-normal">
              {locale === 'de' ? 'Senden Sie Ihre Auftragsnummer für sofortige Freigabe.' : 'Send your order reference for instant clearance.'}
            </p>
          </div>

          <a
            href={`https://wa.me/${CONTACT.whatsappClean}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-3 shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Fast-Lane</span>
          </a>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <button
            type="button"
            onClick={() => window.print()}
            className="px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl text-xs font-bold text-slate-300 transition-all flex items-center gap-3 uppercase tracking-widest"
          >
            <Printer className="w-5 h-5" />
            <span>{t.confirmation?.printReceipt || 'Print'}</span>
          </button>

          <Link
            href="/shop"
            className="px-8 py-3.5 bg-[#FF3B30] hover:bg-[#e03026] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-3 shadow-xl shadow-[#FF3B30]/20 uppercase tracking-widest"
          >
            <span>{t.confirmation?.continueShopping || 'Back to Store'}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Legal Disclaimer */}
        <div className="p-4 bg-[#101014] border border-white/5 rounded-xl text-[11px] text-slate-400 font-mono leading-relaxed text-center uppercase tracking-tight">
          <ShieldAlert className="w-4 h-4 inline mr-1 text-amber-400" />
          {locale === 'de' 
            ? 'Gefahrgut-Transportzertifizierung gemäß ADR Klasse 9 (UN 3480/3481) für Traktionsbatterien. Gewährleistung 2 Jahre nach BGB.'
            : 'Hazmat transport certified under ADR Class 9 (UN 3480/3481) for traction batteries. 2-year EU statutory warranty applies.'}
        </div>
      </div>
    </div>
  );
}
