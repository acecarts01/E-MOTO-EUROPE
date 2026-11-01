import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { SITE, CONTACT } from '@/src/config/site';
import { OrderConfirmationClient } from '@/src/components/OrderConfirmationClient';
import { setRequestLocale, getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: `Bestellbestätigung | ${SITE.name}`,
  robots: { index: false, follow: true },
};

export default async function OrderConfirmationPage({ 
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
    <Suspense fallback={<div className="p-16 text-center text-slate-400 font-mono uppercase tracking-widest">TRANSACTIONAL RECEIPT LOADING...</div>}>
      <OrderConfirmationClient params={resolvedParams} searchParams={resolvedSearchParams} />
    </Suspense>
  );
}
