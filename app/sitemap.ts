import { MetadataRoute } from 'next';
import { SITE, PRODUCTS, CATEGORIES, POSTS } from '@/src/config/site';

export async function generateSitemaps() {
  return [
    { id: 'pages' },
    { id: 'products' },
    { id: 'categories' },
    { id: 'blog' },
  ];
}

export default async function sitemap({
  id,
}: {
  id: string;
}): Promise<MetadataRoute.Sitemap> {
  const baseUrl = `https://${SITE.domain}`;
  const now = new Date();

  if (id === 'pages') {
    return [
      {
        url: `${baseUrl}/`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/shop/`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/ueber-uns/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/magazin/`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/vergleich/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/foerderung/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/wholesale/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/faq/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/kontakt/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/impressum/`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/datenschutz/`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/agb/`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/widerruf/`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/batteriehinweise/`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.3,
      },
    ];
  }

  if (id === 'products') {
    return PRODUCTS.map(p => ({
      url: `${baseUrl}/shop/${p.category}/${p.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: p.images.map(img => `${baseUrl}${img}`),
    }));
  }

  if (id === 'categories') {
    return CATEGORIES.map(c => ({
      url: `${baseUrl}/shop/${c.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));
  }

  if (id === 'blog') {
    return POSTS.map(post => ({
      url: `${baseUrl}/magazin/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${baseUrl}${post.image}`],
    }));
  }

  return [];
}
