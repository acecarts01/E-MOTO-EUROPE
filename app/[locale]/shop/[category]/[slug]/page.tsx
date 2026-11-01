import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS, SITE } from '@/src/config/site';
import { JsonLd } from '@/src/components/JsonLd';
import { ProductClient } from '@/src/components/ProductClient';

import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';

export async function generateStaticParams() {
  const paths = [];
  for (const locale of routing.locales) {
    for (const p of PRODUCTS) {
      paths.push({ locale, category: p.category, slug: p.slug });
    }
  }
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | ${SITE.name}`,
    description: `${product.shortDescription}`,
    alternates: {
      canonical: `https://${SITE.domain}/${locale}/shop/${product.category}/${product.slug}/`,
    },
    openGraph: {
      title: `${product.name} | ${SITE.name}`,
      description: product.shortDescription,
      images: [{ url: `https://${SITE.domain}${product.images[0]}` }],
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Schema: Product
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map(img => `https://${SITE.domain}${img}`),
    sku: `EMO-${product.slug.toUpperCase()}`,
    brand: {
      '@type': 'Brand',
      name: SITE.name
    },
    offers: {
      '@type': 'Offer',
      url: `https://${SITE.domain}/${locale}/shop/${product.category}/${product.slug}/`,
      priceCurrency: SITE.currency,
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE.legalName
      }
    }
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <ProductClient slug={slug} />
    </>
  );
}
