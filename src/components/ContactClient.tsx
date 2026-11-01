'use client';

import React, { useState } from 'react';
import { SITE, CONTACT } from '@/src/config/site';
import { useCart } from '@/src/lib/cart-context';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  AlertTriangle
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Link } from '@/src/i18n/routing';

export function ContactClient() {
  const { t, locale } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: t.contactPage?.subjectGeneral || 'Allgemeine Anfrage',
    message: '',
    botcheck: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/forms/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        router.push('/thank-you-contact/');
      } else {
        setErrorMsg(data.error || 'Fehler beim Absenden der Nachricht.');
      }
    } catch {
      setErrorMsg('Verbindungsfehler beim Absenden. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-[#0d0d12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <Link href="/" className="hover:text-white transition-colors">{locale === 'de' || locale === 'de-CH' ? 'Startseite' : 'Home'}</Link>
          <span>/</span>
          <span className="text-slate-300">{t.contactPage?.breadcrumb || 'Kontakt'}</span>
        </nav>

        {/* Header */}
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-1 bg-[#1a1a26] border border-[#2b2b3e] text-slate-300 text-xs font-mono rounded">
            {t.contactPage?.badge || 'FACHBERATUNG & WERKSTATT MÜNCHEN'}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.contactPage?.title || 'Kontaktieren Sie unsere Ingenieure & Werkstatt'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            {t.contactPage?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-[#14141c] border border-[#262638] rounded-xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-base font-bold text-white font-mono uppercase tracking-wide mb-6">
              {t.contactPage?.formTitle || 'Nachricht an die technische Werkstatt senden'}
            </h2>

            {errorMsg && (
              <div className="p-3 mb-6 bg-red-950/80 border border-red-800 rounded text-red-200 text-xs flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Honeypot field */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={e => setFormData({ ...formData, botcheck: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-[11px] text-slate-300 font-medium mb-1">
                  {t.contactPage?.nameLabel || 'Vollständiger Name'} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Max Mustermann"
                  className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-slate-300 font-medium mb-1">
                    {t.contactPage?.emailLabel || 'E-Mail-Adresse'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@beispiel.de"
                    className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-300 font-medium mb-1">
                    {t.contactPage?.phoneLabel || 'Telefonnummer'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 89 ..."
                    className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 font-medium mb-1">
                  {t.contactPage?.subjectLabel || 'Thema / Betreff'}
                </label>
                <select
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3.5 py-2.5 text-white focus:outline-none focus:border-[#E63946]"
                >
                  <option value={t.contactPage?.subjectGeneral}>{t.contactPage?.subjectGeneral}</option>
                  <option value={t.contactPage?.subjectTechnical}>{t.contactPage?.subjectTechnical}</option>
                  <option value={t.contactPage?.subjectOrder}>{t.contactPage?.subjectOrder}</option>
                  <option value={t.contactPage?.subjectB2B}>{t.contactPage?.subjectB2B}</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-300 font-medium mb-1">
                  {t.contactPage?.messageLabel || 'Ihre Nachricht'} *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="..."
                  className="w-full bg-[#181824] border border-[#2c2c3c] rounded px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#E63946]"
                />
              </div>

              <div className="text-[11px] text-slate-500 font-mono">
                {locale === 'de' || locale === 'de-CH' ? 'Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Angaben gemäß unserer Datenschutzerklärung einverstanden.' : 'By submitting, you agree to the processing of your data in accordance with our privacy policy.'}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#E63946] hover:bg-[#d52b38] disabled:opacity-50 text-white font-mono font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                {isSubmitting ? (
                  <span>{t.contactPage?.submitting}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contactPage?.submitBtn}</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right: Contact Information & Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#14141c] border border-[#262638] rounded-xl p-6 sm:p-7 space-y-6 text-xs">
              <h2 className="text-base font-bold text-white font-mono uppercase tracking-wide">
                {t.footer?.contactCol || 'Standort & Kontaktdaten'}
              </h2>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#1b1b26] text-[#E63946] rounded shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contactPage?.directAddress || 'Werkstatt & Zentrallager'}</div>
                    <div className="text-slate-400 mt-0.5">{CONTACT.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#1b1b26] text-emerald-400 rounded shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contactPage?.directWhatsapp || 'WhatsApp Werkstattberatung'}</div>
                    <a
                      href={`https://wa.me/${CONTACT.whatsappClean}`}
                      className="text-emerald-400 hover:underline font-mono block mt-0.5"
                    >
                      {CONTACT.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#1b1b26] text-sky-400 rounded shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contactPage?.directPhone || 'Telefonische Fachberatung'}</div>
                    <a
                      href={`tel:${CONTACT.phoneClean}`}
                      className="text-slate-300 hover:text-white font-mono block mt-0.5"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#1b1b26] text-slate-400 rounded shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.contactPage?.directEmail || 'E-Mail Ticketsystem'}</div>
                    <div className="text-slate-300 font-mono mt-0.5">{CONTACT.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#1b1b26] text-amber-400 rounded shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.chat?.availabilityNotice || 'Öffnungszeiten'}</div>
                    <div className="text-slate-400 mt-0.5">{CONTACT.openingHours}</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Corporate Entity Notice */}
            <div className="bg-[#121218] border border-[#22222e] rounded-xl p-5 text-xs text-slate-400 space-y-1 font-mono">
              <div className="text-slate-200 font-bold">{SITE.legalName}</div>
              <div>HRB: {CONTACT.commercialRegistry}</div>
              <div>USt-IdNr.: {CONTACT.vatId}</div>
              <div>WEEE: {CONTACT.weeeReg} · BattG: {CONTACT.battGReg}</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
