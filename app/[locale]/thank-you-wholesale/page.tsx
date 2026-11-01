import { redirect } from '@/src/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

export default async function ThankYouWholesalePage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ locale: string }>, 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const resolvedSearchParams = await searchParams;
  
  const company = resolvedSearchParams.company;
  
  if (company) {
    redirect({
      href: {
        pathname: '/b2b-confirmation',
        query: { company }
      },
      locale
    });
  }
  
  redirect({ href: '/b2b-confirmation', locale });
}
