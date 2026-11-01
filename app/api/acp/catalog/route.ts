import { NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES, SHOP, SITE } from '@/src/config/site';

export async function GET() {
  return NextResponse.json({
    catalog: CATEGORIES.map(c => ({
      ...c,
      url: `https://${SITE.domain}/shop/${c.slug}/`,
      products: PRODUCTS.filter(p => p.category === c.slug).map(p => ({
        slug: p.slug,
        name: p.name,
        price: p.price,
        currency: SITE.currency,
        isStVZO: p.isStVZO,
        legalNotice: p.legalNotice,
        url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`
      }))
    })),
    currency: SITE.currency,
    minimumOrder: SHOP.minOrder,
    freeShippingThreshold: SHOP.freeShippingThreshold,
    paymentMethods: SHOP.paymentMethods.map(m => m.id),
    dangerousGoodsPolicy: SHOP.dangerousGoodsNotice,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
