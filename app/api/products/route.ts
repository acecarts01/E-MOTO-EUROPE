import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, SITE } from '@/src/config/site';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const q = searchParams.get('q')?.toLowerCase();
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

  let results = PRODUCTS.map(p => ({
    ...p,
    currency: SITE.currency,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`
  }));

  if (category) {
    results = results.filter(p => p.category === category);
  }

  if (q) {
    results = results.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (limit && !isNaN(limit)) {
    results = results.slice(0, limit);
  }

  return NextResponse.json({
    total: results.length,
    currency: SITE.currency,
    products: results
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
