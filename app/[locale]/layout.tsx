import type { Metadata } from 'next';
import Script from 'next/script';
import '../globals.css';
import { SITE } from '@/src/config/site';
import { getHrefLangAlternates } from '@/src/lib/i18n';
import { SiteShell } from '@/src/components/SiteShell';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getHrefLangAlternates('/');
  
  return {
    title: `${SITE.name} | High-Performance E-Motos & Umbausätze`,
    description: 'Europas Spezialist für High-Performance E-Motos, E-MTB Umbausätze 1000W–5000W, 72V Lithium-Akkus (ADR 9) und 100% StVZO-konforme Pedelec-Systeme.',
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: `${SITE.name} | High-Performance E-Motos & Umbausätze`,
      description: 'Europas führender Hub für E-Motos, 72V Traktionsbatterien nach ADR Klasse 9 und StVZO-konforme Umbausätze.',
      url: `https://${SITE.domain}/`,
      images: [{ url: `https://${SITE.domain}/images/products/hyper-drive-2000w-bundle.webp`, width: 800, height: 600, alt: SITE.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE.name} | E-Motos & Powertrains`,
      description: 'Europas Spezialist für E-Motos, 72V Traktionsbatterien und StVZO Umbausätze.',
      images: [`https://${SITE.domain}/images/products/hyper-drive-2000w-bundle.webp`],
    },
    alternates: {
      canonical: alternates.canonical,
      languages: alternates.languages,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/favicon.svg',
    },
    other: {
      'og:updated_time': new Date().toISOString(),
      'google-site-verification': SITE.gscVerification,
      'indexnow': SITE.indexNowKey,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <SiteShell locale={locale}>
        {children}
      </SiteShell>
    </NextIntlClientProvider>
  );
}
