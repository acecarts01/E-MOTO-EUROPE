'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/src/lib/cart-context';
import { SHOP, SITE, CONTACT } from '@/src/config/site';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Zap,
  Truck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export function CartDrawer() {
  const router = useRouter();
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    shippingFee,
    isFreeShipping,
    freeShippingGap,
    cryptoDiscountAmount,
    total,
    cryptoTotal,
    clearCart,
    t
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('sepa-vorkasse');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zip: '',
    country: 'Deutschland',
    notes: '',
    ageConfirmed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name || !formData.email || !formData.street || !formData.city || !formData.zip) {
      setErrorMsg('Bitte füllen Sie alle erforderlichen Lieferdaten aus.');
      return;
    }

    if (!formData.ageConfirmed) {
      setErrorMsg('Sie müssen bestätigen, dass Sie mindestens 16 Jahre alt sind.');
      return;
    }

    setIsSubmitting(true);

    try {
      // If WhatsApp Concierge is chosen, open WhatsApp directly with prefilled draft
      if (selectedPayment === 'whatsapp-concierge') {
        const itemSummary = items.map(i => `${i.quantity}x ${i.name} (€${(i.price * i.quantity).toFixed(2)})`).join('\n');
        const text = `Hallo ${SITE.name} Werkstatt,\nich möchte folgende Komponenten anfragen:\n\n${itemSummary}\n\nGesamtsumme: €${total.toFixed(2)}\nName: ${formData.name}\nLieferort: ${formData.zip} ${formData.city}, ${formData.country}`;
        window.open(`https://wa.me/${CONTACT.whatsappClean}?text=${encodeURIComponent(text)}`, '_blank');
        clearCart();
        closeCart();
        router.push('/order-confirmation/?order=WHATSAPP&method=whatsapp-concierge');
        return;
      }

      const response = await fetch('/api/forms/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          paymentMethod: selectedPayment,
          items,
          total: subtotal,
          cryptoDiscount: selectedPayment.startsWith('crypto') ? cryptoDiscountAmount : 0,
          finalTotal: selectedPayment.startsWith('crypto') ? cryptoTotal : total
        })
      });

      const resData = await response.json();
      if (resData.success) {
        clearCart();
        closeCart();
        router.push(resData.redirect || '/thank-you-order/');
      } else {
        setErrorMsg(resData.error || 'Fehler beim Absenden des Auftrags.');
      }
    } catch {
      setErrorMsg('Verbindungsfehler beim Absenden. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#13131a] border-l border-[#262634] text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#242432] flex items-center justify-between bg-[#161622]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#E63946]" />
              <h2 className="text-base font-bold font-mono tracking-wide">{t.cart.title}</h2>
              <span className="bg-[#242434] text-slate-300 text-xs px-2 py-0.5 rounded-full font-mono">
                {items.length}
              </span>
            </div>
            <button
              type="button"
              onClick={closeCart}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-[#20202e] rounded-md transition-colors"
              aria-label="Warenkorb schließen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-5 py-3 bg-[#181824] border-b border-[#242432] text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Kostenloser Paketversand erreicht! (€199+ Schwelle)</span>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-slate-300 mb-1.5 font-mono">
                  <span>Noch €{freeShippingGap.toFixed(2)} bis zum Gratisversand</span>
                  <Truck className="w-3.5 h-3.5 text-[#E63946]" />
                </div>
                <div className="w-full h-1.5 bg-[#252536] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#E63946] transition-all duration-300 rounded-full"
                    style={{ width: `${Math.min(100, (subtotal / SHOP.freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#1b1b26] flex items-center justify-center text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="text-slate-300 font-medium">{t.cart.empty}</div>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  {t.cart.emptySub}
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-[#E63946] hover:bg-[#d52b38] rounded-md transition-colors"
                >
                  {t.cart.startShopping}
                </button>
              </div>
            ) : !isCheckingOut ? (
              <div className="space-y-3">
                {items.map(item => (
                  <div
                    key={item.slug}
                    className="bg-[#181822] border border-[#262636] rounded-lg p-3 flex gap-3 relative group"
                  >
                    <div className="w-16 h-16 bg-[#101016] rounded overflow-hidden shrink-0 relative">
                      <Image
                        src={item.image || '/favicon.svg'}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0 pr-6">
                      <h4 className="text-xs font-bold text-slate-100 line-clamp-2 leading-tight">
                        {item.name}
                      </h4>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {item.isStVZO ? (
                          <span className="text-emerald-400 font-semibold">100% StVZO Pedelec</span>
                        ) : (
                          <span className="text-amber-400 font-semibold">Offroad Sportgerät</span>
                        )}
                      </div>
                      <div className="text-xs font-extrabold text-[#E63946] font-mono mt-1">
                        €{(item.price * item.quantity).toFixed(2)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-[#2e2e40] bg-[#12121a] rounded">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.slug, -1)}
                            className="p-1 hover:text-[#E63946] transition-colors"
                            aria-label={`Menge für ${item.name} verringern`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.slug, 1)}
                            className="p-1 hover:text-[#E63946] transition-colors"
                            aria-label={`Menge für ${item.name} erhöhen`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Delete Item Button */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.slug)}
                      className="absolute top-2 right-2 text-slate-500 hover:text-red-400 p-1"
                      aria-label={`${item.name} aus dem Warenkorb entfernen`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* 5% Crypto Notice Card */}
                <div className="bg-[#1b1b28] border border-[#2e2e46] p-3 rounded-lg text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>5% Krypto-Rabatt (Bitcoin & USDT)</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    Sparen Sie €{cryptoDiscountAmount.toFixed(2)} bei Zahlung mit BTC oder USDT. Die Abrechnung erfolgt automatisch im nächsten Schritt.
                  </p>
                </div>
              </div>
            ) : (
              /* Inline Checkout Form */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#242432]">
                  <span className="font-bold text-white font-mono uppercase tracking-wider">
                    Bestellung vorbereiten
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    ← Zurück zum Warenkorb
                  </button>
                </div>

                {errorMsg && (
                  <div className="p-2.5 bg-red-950/80 border border-red-800 rounded text-red-200 text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <div>
                    <label className="block text-[11px] text-slate-300 font-medium mb-1">
                      {t.checkout.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Max Mustermann"
                      className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] text-slate-300 font-medium mb-1">
                        {t.checkout.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre@email.de"
                        className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 font-medium mb-1">
                        {t.checkout.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+49 170 1234567"
                        className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 font-medium mb-1">
                      {t.checkout.address} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.street}
                      onChange={e => setFormData({ ...formData, street: e.target.value })}
                      placeholder="Musterstraße 12"
                      className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] text-slate-300 font-medium mb-1">
                        {t.checkout.zip} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={e => setFormData({ ...formData, zip: e.target.value })}
                        placeholder="80331"
                        className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-300 font-medium mb-1">
                        {t.checkout.city} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        placeholder="München"
                        className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 font-medium mb-1">
                      {t.checkout.country}
                    </label>
                    <select
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3 py-2 text-white focus:outline-none focus:border-[#E63946]"
                    >
                      <option value="Deutschland">Deutschland</option>
                      <option value="Österreich">Österreich</option>
                      <option value="Schweiz">Schweiz</option>
                      <option value="Niederlande">Niederlande</option>
                      <option value="Polen">Polen</option>
                      <option value="Frankreich">Frankreich</option>
                      <option value="Italien">Italien</option>
                      <option value="Spanien">Spanien</option>
                    </select>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="pt-2">
                    <label className="block text-[11px] text-slate-300 font-medium mb-1.5">
                      Zahlungsart auswählen:
                    </label>
                    <div className="space-y-1.5">
                      {SHOP.paymentMethods.map(m => (
                        <label
                          key={m.id}
                          className={`flex items-start gap-2 p-2.5 rounded border cursor-pointer transition-colors ${
                            selectedPayment === m.id
                              ? 'bg-[#222232] border-[#E63946]'
                              : 'bg-[#181824] border-[#292938] hover:border-slate-500'
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={selectedPayment === m.id}
                            onChange={() => setSelectedPayment(m.id)}
                            className="mt-0.5 accent-[#E63946]"
                          />
                          <div className="flex-1">
                            <div className="text-xs font-bold text-white flex items-center justify-between">
                              <span>{m.name}</span>
                              {m.id.startsWith('crypto') && (
                                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono">
                                  -5%
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">{m.note}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Age Confirmation (16+) */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2 cursor-pointer bg-[#191924] p-2.5 rounded border border-[#2b2b3c]">
                      <input
                        type="checkbox"
                        checked={formData.ageConfirmed}
                        onChange={e => setFormData({ ...formData, ageConfirmed: e.target.checked })}
                        className="mt-0.5 accent-[#E63946]"
                        required
                      />
                      <span className="text-[11px] text-slate-300 leading-snug">
                        Ich bestätige hiermit verbindlich, dass ich mindestens <strong>16 Jahre alt</strong> bin und zur Kenntnis genommen habe, dass Fahrzeuge und Umbausätze &gt;250W ausschließlich auf Privatgelände/Rennstrecken betrieben werden dürfen.
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#E63946] hover:bg-[#d52b38] disabled:opacity-50 text-white rounded font-bold font-mono tracking-wide text-xs transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <span>{t.checkout.submitting}</span>
                  ) : (
                    <span>
                      Bestellung absenden —{' '}
                      {selectedPayment.startsWith('crypto') ? `€${cryptoTotal.toFixed(2)}` : `€${total.toFixed(2)}`}
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Drawer Footer with Calculations */}
          {items.length > 0 && !isCheckingOut && (
            <div className="p-4 sm:p-5 bg-[#161622] border-t border-[#242432] space-y-3">
              <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                <div className="flex justify-between">
                  <span>{t.cart.subtotal}:</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>{t.cart.shipping}:</span>
                  <span>{shippingFee === 0 ? 'Kostenlos' : `€${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-emerald-400 text-[11px]">
                  <span>Krypto-Rabatt (bei Krypto-Zahlung):</span>
                  <span>-€{cryptoDiscountAmount.toFixed(2)} (5%)</span>
                </div>
                <div className="border-t border-[#262638] pt-2 flex justify-between items-baseline font-bold text-white text-sm">
                  <span>Regulärer Gesamtbetrag:</span>
                  <span className="text-base text-[#E63946]">€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[11px] text-amber-300 font-bold bg-[#212130] p-1.5 rounded">
                  <span>Krypto-Preis (5% gespart):</span>
                  <span>€{cryptoTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3 bg-[#E63946] hover:bg-[#d52b38] text-white font-bold font-mono tracking-wide rounded-md text-xs transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{t.cart.checkoutBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-center text-slate-500 font-mono">
                {SHOP.taxNotice}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
