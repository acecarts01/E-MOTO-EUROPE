import React from 'react';
import { notFound } from 'next/navigation';
import { CATEGORIES, SITE } from '@/src/config/site';
import { JsonLd } from '@/src/components/JsonLd';
import { CategoryClient } from '@/src/components/CategoryClient';

import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';

export async function generateStaticParams() {
  const paths = [];
  for (const locale of routing.locales) {
    for (const category of CATEGORIES) {
      paths.push({ locale, category: category.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string, locale: string }> }) {
  const { category: catSlug, locale } = await params;
  const category = CATEGORIES.find(c => c.slug === catSlug);
  if (!category) return {};

  return {
    title: `${category.name} | ${SITE.name}`,
    description: `${category.description}`,
    alternates: {
      canonical: `https://${SITE.domain}/${locale}/shop/${category.slug}/`,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string, locale: string }>;
}) {
  const { category: catSlug, locale } = await params;
  setRequestLocale(locale);
  const category = CATEGORIES.find(c => c.slug === catSlug);

  if (!category) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: `https://${SITE.domain}/`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Shop',
        item: `https://${SITE.domain}/shop/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://${SITE.domain}/shop/${category.slug}/`
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <CategoryClient catSlug={catSlug} />
    </>
  );
}
