import { NextResponse } from 'next/server';
import { CATEGORIES, PRODUCTS, SITE } from '@/src/config/site';

export async function GET() {
  const result = CATEGORIES.map(c => ({
    ...c,
    productCount: PRODUCTS.filter(p => p.category === c.slug).length,
    url: `https://${SITE.domain}/shop/${c.slug}/`
  }));

  return NextResponse.json({
    total: result.length,
    categories: result
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
