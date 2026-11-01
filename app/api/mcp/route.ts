import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES, SHOP, SITE, BRAND, CONTACT } from '@/src/config/site';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET() {
  return NextResponse.json({
    status: 'online',
    protocol: 'mcp-streamable-http',
    version: '1.0.0',
    server: SITE.name,
    endpoint: `https://${SITE.domain}/api/mcp`,
    tools: ['search_products', 'get_product', 'list_categories', 'get_policies', 'create_order_draft']
  }, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id = 1, method, params = {} } = body;

    // Handle MCP JSON-RPC protocol
    if (method === 'initialize') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: '2025-03-26',
          capabilities: {
            tools: { listChanged: false },
            resources: { listChanged: false }
          },
          serverInfo: {
            name: SITE.name,
            version: '1.0.0',
            description: BRAND.description
          }
        }
      }, { headers: corsHeaders });
    }

    if (method === 'tools/list') {
      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          tools: [
            {
              name: 'search_products',
              description: 'Search products by keyword, category, max_price',
              inputSchema: {
                type: 'object',
                properties: {
                  query: { type: 'string' },
                  category: { type: 'string' },
                  max_price: { type: 'number' }
                }
              }
            },
            {
              name: 'get_product',
              description: 'Get full product details by slug',
              inputSchema: {
                type: 'object',
                required: ['slug'],
                properties: {
                  slug: { type: 'string' }
                }
              }
            },
            {
              name: 'list_categories',
              description: 'List all product categories',
              inputSchema: {
                type: 'object',
                properties: {}
              }
            },
            {
              name: 'get_policies',
              description: 'Get shipping, payment, returns policies and StVZO legal status',
              inputSchema: {
                type: 'object',
                properties: {}
              }
            },
            {
              name: 'create_order_draft',
              description: 'Create prefilled order URL. Human completes — never captures payment.',
              inputSchema: {
                type: 'object',
                properties: {
                  items: { type: 'array' },
                  notes: { type: 'string' }
                }
              }
            }
          ]
        }
      }, { headers: corsHeaders });
    }

    if (method === 'tools/call') {
      const toolName = params.name;
      const args = params.arguments || {};

      if (toolName === 'search_products') {
        const q = (args.query || '').toLowerCase();
        const cat = args.category;
        const maxP = args.max_price;

        let results = PRODUCTS.filter(p => {
          const matchQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q);
          const matchCat = !cat || p.category === cat;
          const matchP = !maxP || p.price <= maxP;
          return matchQ && matchCat && matchP;
        });

        return NextResponse.json({
          jsonrpc: '2.0',
          id,
          result: {
            content: [{
              type: 'text',
              text: JSON.stringify(results.map(p => ({
                slug: p.slug,
                name: p.name,
                price: p.price,
                currency: SITE.currency,
                category: p.category,
                isStVZO: p.isStVZO,
                legalNotice: p.legalNotice,
                url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`
              })))
            }]
          }
        }, { headers: corsHeaders });
      }

      if (toolName === 'get_product') {
        const product = PRODUCTS.find(p => p.slug === args.slug);
        if (!product) {
          return NextResponse.json({
            jsonrpc: '2.0',
            id,
            error: { code: -32602, message: `Product with slug '${args.slug}' not found` }
          }, { headers: corsHeaders });
        }
        return NextResponse.json({
          jsonrpc: '2.0',
          id,
          result: {
            content: [{
              type: 'text',
              text: JSON.stringify({
                ...product,
                currency: SITE.currency,
                url: `https://${SITE.domain}/shop/${product.category}/${product.slug}/`
              })
            }]
          }
        }, { headers: corsHeaders });
      }

      if (toolName === 'list_categories') {
        return NextResponse.json({
          jsonrpc: '2.0',
          id,
          result: {
            content: [{
              type: 'text',
              text: JSON.stringify(CATEGORIES.map(c => ({
                slug: c.slug,
                name: c.name,
                description: c.description,
                legalStatus: c.legalStatus,
                productCount: PRODUCTS.filter(p => p.category === c.slug).length,
                url: `https://${SITE.domain}/shop/${c.slug}/`
              })))
            }]
          }
        }, { headers: corsHeaders });
      }

      if (toolName === 'get_policies') {
        return NextResponse.json({
          jsonrpc: '2.0',
          id,
          result: {
            content: [{
              type: 'text',
              text: JSON.stringify({
                currency: SITE.currency,
                minimumOrder: SHOP.minOrder,
                freeShippingThreshold: SHOP.freeShippingThreshold,
                domesticShipping: SHOP.shippingFee,
                euShipping: SHOP.shippingFeeEU,
                cryptoDiscount: `${SHOP.cryptoDiscount}% for BTC and USDT`,
                paymentMethods: SHOP.paymentMethods.map(m => m.name),
                dangerousGoodsADR: SHOP.dangerousGoodsNotice,
                compliance: {
                  legalNotice: 'Reine Offroad-Sportgeräte sind nicht im Geltungsbereich der StVZO zugelassen. 250W Pedelec-Kits entsprechen EN 15194:2017+A1:2024.'
                }
              })
            }]
          }
        }, { headers: corsHeaders });
      }

      if (toolName === 'create_order_draft') {
        const items = args.items || [];
        const notes = args.notes || '';
        let total = 0;
        const lineItems: string[] = [];

        items.forEach((item: { slug: string; quantity?: number }) => {
          const p = PRODUCTS.find(prod => prod.slug === item.slug);
          if (p) {
            const qty = item.quantity || 1;
            total += p.price * qty;
            lineItems.push(`${qty}x ${p.name} (€${(p.price * qty).toFixed(2)})`);
          }
        });

        const cryptoDiscountAmount = total * (SHOP.cryptoDiscount / 100);
        const cryptoTotal = total - cryptoDiscountAmount;

        const summaryText = `Bestellentwurf ${SITE.name}:\n${lineItems.join('\n')}\nGesamt: €${total.toFixed(2)} (Krypto-Preis mit 5% Rabatt: €${cryptoTotal.toFixed(2)})\nHinweis: ${notes}`;
        const whatsappUrl = `https://wa.me/${CONTACT.whatsappClean}?text=${encodeURIComponent(summaryText)}`;

        return NextResponse.json({
          jsonrpc: '2.0',
          id,
          result: {
            content: [{
              type: 'text',
              text: JSON.stringify({
                summary: summaryText,
                subtotal: total,
                cryptoDiscount5Percent: cryptoDiscountAmount,
                cryptoTotal: cryptoTotal,
                currency: SITE.currency,
                whatsappOrderUrl: whatsappUrl,
                humanCompletionRequired: true,
                paymentNote: 'Payment is completed via SEPA Vorkasse, Klarna or Crypto. No card auto-charge.'
              })
            }]
          }
        }, { headers: corsHeaders });
      }

      return NextResponse.json({
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: `Unknown tool: ${toolName}` }
      }, { headers: corsHeaders });
    }

    return NextResponse.json({
      jsonrpc: '2.0',
      id,
      error: { code: -32600, message: `Unsupported method: ${method}` }
    }, { headers: corsHeaders });

  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Invalid JSON-RPC payload';
    return NextResponse.json({
      jsonrpc: '2.0',
      id: null,
      error: { code: -32700, message: errMessage }
    }, { status: 400, headers: corsHeaders });
  }
}
