import { NextResponse } from 'next/server';
import { SITE, CONTACT, SHOP } from '@/src/config/site';

export async function GET() {
  return NextResponse.json({
    ucp: "1.0",
    protocol_version: "1.0",
    site: `https://${SITE.domain}`,
    name: SITE.name,
    services: [
      { id: "product-catalog", type: "catalog", url: `https://${SITE.domain}/shop/`, description: "Full product catalog" },
      { id: "mcp-server", type: "mcp", url: `https://${SITE.domain}/api/mcp`, description: "MCP Streamable HTTP server" },
      { id: "order", type: "commerce", url: `https://wa.me/${CONTACT.whatsappClean}`, description: "Place orders via SEPA Vorkasse or WhatsApp Concierge" },
      { id: "wholesale", type: "b2b", url: `https://${SITE.domain}/wholesale/`, description: "Wholesale pricing and bulk ordering for shops" }
    ],
    capabilities: ["browse", "search", "inquiry", "wholesale", "content", "mcp"],
    currency: SITE.currency,
    minimum_order_usd: SHOP.minOrder,
    payment_methods: SHOP.paymentMethods.map(m => m.id),
    endpoints: {
      mcp: `https://${SITE.domain}/api/mcp`,
      catalog: `https://${SITE.domain}/shop/`,
      contact: `https://${SITE.domain}/contact/`,
      agent_skills: `https://${SITE.domain}/.well-known/agent-skills/index.json`,
      mcp_server_card: `https://${SITE.domain}/.well-known/mcp/server-card.json`,
      api_catalog: `https://${SITE.domain}/.well-known/api-catalog`,
      llms_txt: `https://${SITE.domain}/llms.txt`
    }
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
