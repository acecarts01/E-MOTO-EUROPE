import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE, CONTACT } from '@/src/config/site';
import { CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/src/i18n/routing';

export const metadata: Metadata = {
  title: `Anfrage bestätigt | ${SITE.name}`,
  robots: { index: false, follow: true },
};

async function InquiryConfirmationContent({ 
  params, 
  searchParams 
}: { 
  params: { locale: string }, 
  searchParams: { [key: string]: string | string[] | undefined } 
}) {
  const t = await getTranslations('confirmation');
  const locale = params.locale;
  const name = (searchParams.name as string) || (locale === 'de' ? 'Interessent' : 'Inquirer');
  const ticketId = (searchParams.ticket as string) || 'EMO-REQ-PENDING';

  return (
    <div className="py-24 bg-[#09090c] text-slate-100 min-h-screen font-mono uppercase tracking-tight">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-4 shadow-2xl">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
            {t('inquiryTitle')}
          </h1>
          <p className="text-emerald-400 font-bold tracking-widest">
            {t('inquirySubtitle')}
          </p>
        </div>

        <div className="bg-[#121218] border border-white/10 rounded-2xl p-8 space-y-6 text-left normal-case font-sans shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] pointer-events-none" />
          
          <p className="text-slate-300 leading-relaxed text-lg">
            {locale === 'de' 
              ? <>Hallo <strong>{name}</strong>, wir haben Ihre technische Anfrage erhalten. Ein Prüfingenieur unserer Münchener Werkstatt wurde zugewiesen.</>
              : <>Hello <strong>{name}</strong>, we have received your technical inquiry. An engineer from our Munich workshop has been assigned.</>
            }
          </p>

          <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ticket-ID:</div>
            <div className="text-xl font-black text-white font-mono uppercase">{ticketId}</div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white uppercase text-sm tracking-widest">{locale === 'de' ? 'Nächste Schritte:' : 'Next Steps:'}</h3>
            <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm">
              <li>{locale === 'de' ? 'Antwort innerhalb von max. 2 Stunden (während der Geschäftszeiten)' : 'Response within max. 2 hours (during business hours)'}</li>
              <li>{locale === 'de' ? 'Technische Prüfung Ihrer Motoren- oder Akku-Kompatibilität' : 'Technical verification of your motor or battery compatibility'}</li>
              <li>{locale === 'de' ? 'Zusendung eines individuellen Angebots falls angefragt' : 'Delivery of a custom quote if requested'}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${CONTACT.whatsappClean}?text=Hallo%20E-MOTO%20Europe%2C%20ich%20habe%20gerade%20Anfrage%20${ticketId}%20gesendet.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Fast-Lane</span>
          </a>

          <Link
            href="/shop"
            className="w-full sm:w-auto px-10 py-4 bg-[#FF3B30] hover:bg-[#e03026] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-[#FF3B30]/20 flex items-center justify-center gap-3"
          >
            <span>{t('continueShopping')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function InquiryConfirmationPage({ 
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
    <Suspense fallback={<div className="p-16 text-center text-slate-400 font-mono uppercase tracking-widest">TRANSACTIONAL PORTAL LOADING...</div>}>
      <InquiryConfirmationContent params={resolvedParams} searchParams={resolvedSearchParams} />
    </Suspense>
  );
}
