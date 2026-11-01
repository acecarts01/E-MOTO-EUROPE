import React from 'react';
import { notFound } from 'next/navigation';
import { POSTS, SITE } from '@/src/config/site';
import { JsonLd } from '@/src/components/JsonLd';
import { BlogPostClient } from '@/src/components/BlogPostClient';

import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/src/i18n/routing';

export async function generateStaticParams() {
  const paths = [];
  for (const locale of routing.locales) {
    for (const post of POSTS) {
      paths.push({ locale, slug: post.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const post = POSTS.find(p => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.excerpt,
    alternates: {
      canonical: `https://${SITE.domain}/${locale}/magazin/${post.slug}/`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [{ url: `https://${SITE.domain}${post.image}` }],
      publishedTime: post.date,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schemas: BlogPosting
  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${SITE.domain}/${locale}/magazin/${post.slug}/`
    },
    headline: post.title,
    description: post.excerpt,
    image: `https://${SITE.domain}${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: SITE.legalName
    }
  };

  return (
    <>
      <JsonLd data={postSchema} />
      <BlogPostClient slug={slug} />
    </>
  );
}
