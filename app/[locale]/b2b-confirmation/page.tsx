import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE, CONTACT } from '@/src/config/site';
import { Building2, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/src/i18n/routing';

export const metadata: Metadata = {
  title: `B2B Registrierung | ${SITE.name}`,
  robots: { index: false, follow: true },
};

async function B2BConfirmationContent({ 
  params, 
  searchParams 
}: { 
  params: { locale: string }, 
  searchParams: { [key: string]: string | string[] | undefined } 
}) {
  const t = await getTranslations('confirmation');
  const locale = params.locale;
  const company = (searchParams.company as string) || (locale === 'de' ? 'Ihr Unternehmen' : 'Your Company');

  return (
    <div className="py-24 bg-[#09090c] text-slate-100 min-h-screen font-mono uppercase tracking-tight">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-4 shadow-2xl rotate-3">
            <Building2 className="w-12 h-12" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
            {t('b2bTitle')}
          </h1>
          <p className="text-cyan-400 font-bold tracking-widest uppercase">
            {t('b2bSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#121218] border border-white/10 rounded-2xl p-8 space-y-6 normal-case font-sans shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[80px] pointer-events-none" />
            <h2 className="text-xl font-bold text-white font-mono uppercase tracking-tight">Status: In Prüfung</h2>
            <p className="text-slate-300 leading-relaxed">
              Vielen Dank für Ihr Interesse an einer Partnerschaft mit <strong>{SITE.name}</strong>. Der Antrag für <strong>{company}</strong> wird nun durch unsere Händlerbetreuung verifiziert.
            </p>
            <div className="flex items-center gap-4 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
              <p className="text-xs text-slate-400">
                Wir prüfen Ihre USt-IdNr. und Gewerbeanmeldung. Freischaltung erfolgt i.d.R. innerhalb von 24 Stunden.
              </p>
            </div>
          </div>

          <div className="bg-[#121218] border border-white/10 rounded-2xl p-8 space-y-6 normal-case font-sans shadow-2xl">
            <h2 className="text-xl font-bold text-white font-mono uppercase tracking-tight">Ihre B2B Vorteile</h2>
            <ul className="space-y-4">
              {[
                { title: 'Händlermargen', desc: 'Bis zu 35% Rabatt auf Kits & Akkus' },
                { title: 'Priorität', desc: 'Bevorzugter Versand per Spedition' },
                { title: 'API & MCP', desc: 'Direkte Anbindung an Ihr Warenwirtschaftssystem' },
                { title: 'Support', desc: 'Exklusiver technischer Werkstatt-Support' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold text-cyan-400 shrink-0 border border-white/10">0{i+1}</div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-tighter font-mono">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
          >
            <span>Öffentlicher Katalog</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <Link
            href="/contact"
            className="w-full sm:w-auto px-12 py-5 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3"
          >
            <FileText className="w-5 h-5" />
            <span>Dokumente nachreichen</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function B2BConfirmationPage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ locale: string }>, 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  setRequestLocale(resolvedParams.locale);

  return (
    <Suspense fallback={<div className="p-16 text-center text-slate-400 font-mono uppercase tracking-widest">B2B PORTAL LOADING...</div>}>
      <B2BConfirmationContent params={resolvedParams} searchParams={resolvedSearchParams} />
    </Suspense>
  );
}
