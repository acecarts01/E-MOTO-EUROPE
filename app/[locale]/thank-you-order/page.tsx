import { redirect } from '@/src/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

export default async function ThankYouOrderPage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ locale: string }>, 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const resolvedSearchParams = await searchParams;
  
  const order = resolvedSearchParams.order;
  const method = resolvedSearchParams.method;
  
  if (order) {
    redirect({
      href: {
        pathname: '/order-confirmation',
        query: { order, method: method || 'sepa-vorkasse' }
      },
      locale
    });
  }
  
  redirect({ href: '/order-confirmation', locale });
}
