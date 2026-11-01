import { redirect } from '@/src/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

export default async function ThankYouContactPage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ locale: string }>, 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const resolvedSearchParams = await searchParams;
  
  const ticket = resolvedSearchParams.ticket;
  const name = resolvedSearchParams.name;
  
  if (ticket) {
    redirect({
      href: {
        pathname: '/inquiry-confirmation',
        query: { ticket, name }
      },
      locale
    });
  }
  
  redirect({ href: '/inquiry-confirmation', locale });
}
