import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, POSTS, CATEGORIES, SITE } from '@/src/config/site';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').toLowerCase().trim();

  if (!q) {
    return NextResponse.json({
      query: '',
      results: {
        products: [],
        posts: [],
        categories: []
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  const matchingProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.shortDescription.toLowerCase().includes(q) ||
    p.badge.toLowerCase().includes(q) ||
    (p.isStVZO && q.includes('stvzo')) ||
    (!p.isStVZO && (q.includes('offroad') || q.includes('72v') || q.includes('moto')))
  ).map(p => ({
    type: 'product',
    slug: p.slug,
    name: p.name,
    price: p.price,
    currency: SITE.currency,
    category: p.category,
    categoryName: p.categoryName,
    isStVZO: p.isStVZO,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`
  }));

  const matchingPosts = POSTS.filter(post =>
    post.title.toLowerCase().includes(q) ||
    post.excerpt.toLowerCase().includes(q) ||
    post.content.toLowerCase().includes(q)
  ).map(post => ({
    type: 'post',
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    url: `https://${SITE.domain}/magazin/${post.slug}/`
  }));

  const matchingCategories = CATEGORIES.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q)
  ).map(c => ({
    type: 'category',
    slug: c.slug,
    name: c.name,
    url: `https://${SITE.domain}/shop/${c.slug}/`
  }));

  return NextResponse.json({
    query: q,
    counts: {
      products: matchingProducts.length,
      posts: matchingPosts.length,
      categories: matchingCategories.length,
      total: matchingProducts.length + matchingPosts.length + matchingCategories.length
    },
    results: {
      products: matchingProducts,
      posts: matchingPosts,
      categories: matchingCategories
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=60'
    }
  });
}
