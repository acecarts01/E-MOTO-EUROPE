import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE, CONTACT, SHOP, BRAND, CATEGORIES, PRODUCTS, POSTS, FAQ, COMPLIANCE } from '../src/config/site.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const DOMAIN = SITE.domain;
const BASE_URL = `https://${DOMAIN}`;

console.log(`[gen-agent-files] Generating agent & protocol files for ${DOMAIN}...`);

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 1. public/robots.txt
const robotsTxt = `User-agent: *
Disallow: /thank-you-contact/
Disallow: /thank-you-order/
Disallow: /thank-you-wholesale/
Sitemap: ${BASE_URL}/sitemap.xml

Content-Signal: search=yes, ai-input=yes, ai-train=no

# AI crawlers — welcome to index product and content pages
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: cohere-ai
Allow: /

# Agent-readable resources
# llms.txt: ${BASE_URL}/llms.txt
# API Catalog: ${BASE_URL}/.well-known/api-catalog
# Agent Skills: ${BASE_URL}/.well-known/agent-skills/index.json
# MCP Server Card: ${BASE_URL}/.well-known/mcp/server-card.json
`;

// 2. public/llms.txt
const llmsTxt = `# ${SITE.name}

> ${SITE.tagline}

${BRAND.description}

## Geschäftssitz & Rechtliches (Germany / Pan-Europe)
- Standort: ${CONTACT.address}
- Handelsregister: ${CONTACT.commercialRegistry}
- USt-IdNr.: ${CONTACT.vatId} | WEEE-Reg.-Nr.: ${CONTACT.weeeReg} | BattG: ${CONTACT.battGReg}
- Kundendienst: ${CONTACT.phone} | WhatsApp: ${CONTACT.whatsapp} | E-Mail: ${CONTACT.email}
- Währung: ${SITE.currency} (€) inkl. 19% MwSt.
- Mindestbestellwert: Keine (0,00 €)
- Versandkostenfrei ab: €${SHOP.freeShippingThreshold} (für Zubehör & Ersatzteile innerhalb DE)
- Krypto-Rabatt: ${SHOP.cryptoDiscount}% automatischer Sofortrabatt bei Zahlung mit BTC oder USDT
- Zahlungsmethoden: SEPA Banküberweisung (Vorkasse), Klarna Rechnungskauf/Sofort, iDEAL, BLIK, Krypto (BTC, USDT), WhatsApp Concierge. (Kein PayPal, keine direkte Kreditkarten-Eingabe).

## Rechtliche Einordnung (StVZO & Offroad Sportgeräte)
- 100% StVZO-konform: 250W Pedelec Umbausätze gemäß EN 15194:2017+A1:2024 (unterstützt bis 25 km/h beim Treten, führerscheinfrei).
- Reine Offroad-Sportgeräte: E-Motos und Umbausätze mit mehr als 250W (1000W–5000W) oder Daumengas sind ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only) zugelassen. Nicht zulässig im Geltungsbereich der StVZO.
- Gefahrgut: 52V & 72V Traktionsbatterien werden zertifiziert nach ADR Klasse 9 (UN 3480 / UN 3481) per Spedition transportiert.

## Produkt-Katalog
${CATEGORIES.map(c => `- [${c.name}](${BASE_URL}/shop/${c.slug}/): ${c.description}`).join('\n')}

## Ausgewählte Bestseller
${PRODUCTS.map(p => `- [${p.name}](${BASE_URL}/shop/${p.category}/${p.slug}/): €${p.price.toFixed(2)} — ${p.shortDescription}`).join('\n')}

## Bildungs- & Rechtsratgeber
${POSTS.map(post => `- [${post.title}](${BASE_URL}/magazin/${post.slug}/): ${post.excerpt}`).join('\n')}

## Service & B2B
- [B2B Händlerportal](${BASE_URL}/wholesale/): Konditionen für Werkstätten & Händler
- [Häufige Fragen (FAQ)](${BASE_URL}/faq/): 40-60 Wörter Direktantworten zu StVZO, Akkus & Versand
- [Förderungs- & Finanzierungsrechner](${BASE_URL}/foerderung/): Förderungen für E-Mobilität prüfen

## Optional
- [API Catalog](${BASE_URL}/.well-known/api-catalog): Linkset RFC 9727
- [Agent Skills Index](${BASE_URL}/.well-known/agent-skills/index.json): Agent capabilities
- [MCP Server Card](${BASE_URL}/.well-known/mcp/server-card.json): Streamable HTTP MCP Endpoint
- [Auth Specification](${BASE_URL}/auth.md): Agent public access guidelines
`;

// 3. public/auth.md (MUST start with exact heading '# Auth.md')
const authMd = `# Auth.md

## Site: ${SITE.name} — High-Performance E-Motos & Conversion Kits

## Agent Registration
No authentication required. All resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | ${BASE_URL}/shop/ |
| Blog & Legal Guides | ${BASE_URL}/magazin/ |
| FAQ | ${BASE_URL}/faq/ |
| Wholesale Portal | ${BASE_URL}/wholesale/ |
| Products API | ${BASE_URL}/api/products |
| Categories API | ${BASE_URL}/api/categories |
| Search API | ${BASE_URL}/api/search |
| MCP Streamable Server | ${BASE_URL}/api/mcp |

## Authentication

\`\`\`json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
\`\`\`

## Ordering
Human-in-the-loop required. Agents may browse catalog, calculate totals and prepare order drafts.
Orders are completed by a human via SEPA Vorkasse, WhatsApp Concierge, or secure order forms. No automated charge or card storage.
`;

// 4. public/.well-known/api-catalog
const apiCatalog = {
  linkset: [
    { anchor: `${BASE_URL}/`, "https://www.iana.org/assignments/link-relations/service-doc": [{ href: `${BASE_URL}/faq/` }], title: `${SITE.name} — ${SITE.tagline}` },
    { anchor: `${BASE_URL}/shop/`, type: "text/html", title: `${SITE.name} Product Catalog` },
    { anchor: `${BASE_URL}/wholesale/`, type: "text/html", title: `${SITE.name} B2B Wholesale Portal` },
    { anchor: `${BASE_URL}/api/products`, type: "application/json", title: `${SITE.name} Products API` },
    { anchor: `${BASE_URL}/api/categories`, type: "application/json", title: `${SITE.name} Categories API` },
    { anchor: `${BASE_URL}/api/search`, type: "application/json", title: `${SITE.name} Search API` },
    { anchor: `${BASE_URL}/api/mcp`, type: "application/json", "https://www.iana.org/assignments/link-relations/service-desc": [{ href: `${BASE_URL}/.well-known/mcp/server-card.json` }], title: `${SITE.name} MCP Server` }
  ]
};

// 5. public/.well-known/agent-skills/index.json
const agentSkills = {
  $schema: "https://agentskills.io/schema/v0.2.0/index.json",
  name: SITE.name,
  url: BASE_URL,
  description: SITE.tagline,
  skills: [
    { name: "search-products", type: "commerce", description: "Search products by keyword, category, or price", url: `${BASE_URL}/api/mcp`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "browse-catalog", type: "navigation", description: "Browse the full product catalog by category", url: `${BASE_URL}/shop/`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "order-draft", type: "commerce", description: "Create a prefilled order draft. Human completes the order.", url: `${BASE_URL}/api/mcp`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "wholesale-inquiry", type: "commerce", description: "Wholesale pricing tiers and bulk ordering", url: `${BASE_URL}/wholesale/`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "product-education", type: "content", description: "Educational blog and StVZO legal guidance", url: `${BASE_URL}/magazin/`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
    { name: "contact", type: "support", description: "Contact German engineering support for questions", url: `${BASE_URL}/contact/`, sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" }
  ]
};

// 6. public/.well-known/mcp/server-card.json (Vercel variant - live MCP endpoint)
const mcpServerCard = {
  $schema: "https://modelcontextprotocol.io/schemas/server-card/v1.json",
  serverInfo: {
    name: SITE.name,
    version: "1.0.0",
    description: BRAND.description,
    homepage: BASE_URL,
    contact: { email: CONTACT.email, whatsapp: CONTACT.whatsapp }
  },
  transport: { type: "streamable-http", endpoint: `${BASE_URL}/api/mcp` },
  capabilities: {
    tools: [
      { name: "search_products", description: "Search products by keyword, category, max_price", inputSchema: { type: "object", properties: { query: { type: "string" }, category: { type: "string" }, max_price: { type: "number" } } } },
      { name: "get_product", description: "Get full product details by slug", inputSchema: { type: "object", required: ["slug"], properties: { slug: { type: "string" } } } },
      { name: "list_categories", description: "List all product categories", inputSchema: { type: "object", properties: {} } },
      { name: "get_policies", description: "Get shipping, payment, returns policies and StVZO legal status", inputSchema: { type: "object", properties: {} } },
      { name: "create_order_draft", description: "Create prefilled order URL. Human completes — never captures payment.", inputSchema: { type: "object", properties: { items: { type: "array" }, notes: { type: "string" } } } }
    ],
    resources: [
      { name: "product-catalog", description: "Full product catalog", uri: `${BASE_URL}/shop/` },
      { name: "wholesale", description: "Wholesale pricing", uri: `${BASE_URL}/wholesale/` },
      { name: "blog", description: "Educational and StVZO legal content", uri: `${BASE_URL}/magazin/` }
    ],
    commerce: {
      ordering: "human-assisted-sepa-or-whatsapp",
      payment: ["sepa-vorkasse", "crypto-BTC", "crypto-USDT", "klarna-rechnung", "ideal", "blik"],
      currency: SITE.currency,
      minimumOrder: SHOP.minOrder,
      freeShipping: SHOP.freeShippingThreshold
    }
  },
  legal: {
    ageRestriction: "16+",
    productType: "E-Motos, E-Bike Conversion Kits & Pedelec Systems",
    compliance: "EN 15194, StVZO, ADR Klasse 9 Gefahrgut UN3480/3481, BattG, ElektroG"
  }
};

// 7. public/.well-known/oauth-protected-resource
const oauthProtectedResource = {
  resource: BASE_URL,
  resource_name: `${SITE.name} Public Catalog`,
  authorization_servers: [],
  scopes_supported: [],
  bearer_methods_supported: [],
  resource_documentation: `${BASE_URL}/auth.md`,
  resource_policy_uri: `${BASE_URL}/agb/`,
  tls_client_certificate_bound_access_tokens: false,
  note: `All resources on ${DOMAIN} are publicly accessible. No OAuth tokens required.`
};

// 8. public/.well-known/oauth-authorization-server
const oauthAuthServer = {
  issuer: BASE_URL,
  authorization_endpoint: null,
  token_endpoint: null,
  jwks_uri: null,
  grant_types_supported: [],
  response_types_supported: [],
  scopes_supported: [],
  note: `${SITE.name} has no protected APIs. All resources publicly accessible.`,
  public_resources: [
    `${BASE_URL}/shop/`,
    `${BASE_URL}/magazin/`,
    `${BASE_URL}/faq/`,
    `${BASE_URL}/wholesale/`,
    `${BASE_URL}/llms.txt`,
    `${BASE_URL}/.well-known/api-catalog`,
    `${BASE_URL}/.well-known/agent-skills/index.json`,
    `${BASE_URL}/.well-known/mcp/server-card.json`
  ],
  agent_auth: {
    register_uri: null,
    identity_types_supported: ["none"],
    credential_types_supported: ["none"],
    notes: "No registration required. All content publicly accessible to agents."
  }
};

// 9. public/.well-known/openid-configuration
const openidConfig = {
  issuer: BASE_URL,
  note: `${SITE.name} does not operate an OpenID Connect provider. All resources publicly accessible.`,
  public_site: true,
  authorization_endpoint: null,
  token_endpoint: null,
  userinfo_endpoint: null,
  jwks_uri: null,
  scopes_supported: [],
  response_types_supported: [],
  grant_types_supported: [],
  subject_types_supported: [],
  id_token_signing_alg_values_supported: []
};

// 10. public/.well-known/acp.json
const acpJson = {
  protocol: { name: "acp", version: "0.1.0" },
  name: SITE.name,
  description: BRAND.description,
  api_base_url: BASE_URL,
  homepage: BASE_URL,
  transports: ["https"],
  capabilities: {
    services: ["product-catalog", "wholesale", "magazin", "faq", "mcp-server"],
    ordering: "human-assisted",
    payment_methods: ["sepa-vorkasse", "crypto-BTC", "crypto-USDT", "klarna-rechnung", "ideal", "blik"],
    currency: SITE.currency,
    minimum_order_usd: SHOP.minOrder,
    free_shipping_threshold_usd: SHOP.freeShippingThreshold
  },
  contact: { whatsapp: `https://wa.me/${CONTACT.whatsappClean}`, email: CONTACT.email },
  legal: {
    age_restriction: "16+",
    region: "Deutschland / EU",
    ships_to: "DE, AT, CH, EU-27",
    product_type: "E-Motos & E-Bike Conversion Kits",
    compliance: "EN 15194, StVZO, ADR Klasse 9"
  }
};

// 11. public/.well-known/ucp (MUST contain "ucp": "1.0")
const ucpJson = {
  ucp: "1.0",
  protocol_version: "1.0",
  spec: "https://ucp.dev/specification/overview/",
  schema: "https://ucp.dev/schema/v1.json",
  site: BASE_URL,
  name: SITE.name,
  description: BRAND.description,
  services: [
    { id: "product-catalog", type: "catalog", url: `${BASE_URL}/shop/`, description: "Full product catalog" },
    { id: "mcp-server", type: "mcp", url: `${BASE_URL}/api/mcp`, description: "MCP Streamable HTTP server" },
    { id: "order", type: "commerce", url: `https://wa.me/${CONTACT.whatsappClean}`, description: "Place orders via SEPA Vorkasse or WhatsApp Concierge" },
    { id: "wholesale", type: "b2b", url: `${BASE_URL}/wholesale/`, description: "Wholesale pricing and bulk ordering for shops" }
  ],
  capabilities: ["browse", "search", "inquiry", "wholesale", "content", "mcp"],
  endpoints: {
    mcp: `${BASE_URL}/api/mcp`,
    catalog: `${BASE_URL}/shop/`,
    contact: `${BASE_URL}/contact/`,
    agent_skills: `${BASE_URL}/.well-known/agent-skills/index.json`,
    mcp_server_card: `${BASE_URL}/.well-known/mcp/server-card.json`,
    api_catalog: `${BASE_URL}/.well-known/api-catalog`,
    llms_txt: `${BASE_URL}/llms.txt`
  },
  currency: SITE.currency,
  minimum_order_usd: SHOP.minOrder,
  payment_methods: ["sepa-vorkasse", "crypto-BTC", "crypto-USDT", "klarna-rechnung", "ideal", "blik"],
  legal: {
    age_restriction: "16+",
    product_type: "E-Motos, Conversion Kits, Traction Batteries",
    compliance: "EN 15194, StVZO, ADR Klasse 9"
  }
};

// 12. public/js/webmcp.js
const webmcpJs = `(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      { name: "search_products", description: "Search ${SITE.name} products by keyword, category, or price", inputSchema: { type: "object", properties: { query: { type: "string" }, category: { type: "string" }, max_price: { type: "number" } } }, execute: async ({ query, category, max_price }) => { const params = new URLSearchParams(); if (query) params.set('q', query); if (category) params.set('category', category); if (max_price) params.set('max_price', max_price); const res = await fetch(\`${BASE_URL}/api/search?\${params}\`); return res.json(); } },
      { name: "browse_products", description: "Browse products by category", inputSchema: { type: "object", properties: { category: { type: "string" } } }, execute: async ({ category }) => { const url = category ? \`${BASE_URL}/shop/\${category}/\` : \`${BASE_URL}/shop/\`; window.location.href = url; return { url }; } },
      { name: "order_via_whatsapp", description: "Initiate a WhatsApp order advisory. Human completes.", inputSchema: { type: "object", properties: { message: { type: "string" } } }, execute: async ({ message }) => { const url = message ? \`https://wa.me/${CONTACT.whatsappClean}?text=\${encodeURIComponent(message)}\` : \`https://wa.me/${CONTACT.whatsappClean}\`; window.open(url, '_blank'); return { url }; } },
      { name: "get_wholesale_info", description: "Get wholesale pricing tiers", inputSchema: { type: "object", properties: {} }, execute: async () => { window.location.href = \`${BASE_URL}/wholesale/\`; return { url: \`${BASE_URL}/wholesale/\` }; } },
      { name: "contact", description: "Contact ${SITE.name} for technical questions or support", inputSchema: { type: "object", properties: {} }, execute: async () => { window.location.href = \`${BASE_URL}/contact/\`; return { url: \`${BASE_URL}/contact/\` }; } }
    ]
  });
})();
`;

// 13. vercel.json
const vercelJson = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  trailingSlash: true,
  redirects: [
    {
      source: "/:path*",
      has: [{ type: "host", value: `www.${DOMAIN}` }],
      destination: `https://${DOMAIN}/:path*`,
      permanent: true
    }
  ],
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
        { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https:; font-src 'self';" },
        { key: "Link", value: `</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="describedby", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="auth", </.well-known/openid-configuration>; rel="openid-configuration"` }
      ]
    },
    { source: "/.well-known/api-catalog", headers: [{ key: "Content-Type", value: "application/linkset+json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/agent-skills/index.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/mcp/server-card.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/oauth-protected-resource", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/oauth-authorization-server", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/openid-configuration", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/acp.json", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/.well-known/ucp", headers: [{ key: "Content-Type", value: "application/json" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/auth.md", headers: [{ key: "Content-Type", value: "text/markdown; charset=utf-8" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/llms.txt", headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }, { key: "Access-Control-Allow-Origin", value: "*" }] },
    { source: "/:path*.md", headers: [{ key: "Content-Type", value: "text/markdown; charset=utf-8" }] },
    { source: "/api/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }, { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" }, { key: "Access-Control-Allow-Headers", value: "Content-Type, Accept, Mcp-Session-Id" }] }
  ]
};

// Write files
const publicDir = path.join(rootDir, 'public');
const wellKnownDir = path.join(publicDir, '.well-known');
const jsDir = path.join(publicDir, 'js');

ensureDir(publicDir);
ensureDir(wellKnownDir);
ensureDir(path.join(wellKnownDir, 'agent-skills'));
ensureDir(path.join(wellKnownDir, 'mcp'));
ensureDir(jsDir);

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt, 'utf8');
fs.writeFileSync(path.join(publicDir, 'auth.md'), authMd, 'utf8');
fs.writeFileSync(path.join(wellKnownDir, 'api-catalog'), JSON.stringify(apiCatalog, null, 2), 'utf8');
fs.writeFileSync(path.join(wellKnownDir, 'agent-skills', 'index.json'), JSON.stringify(agentSkills, null, 2), 'utf8');
fs.writeFileSync(path.join(wellKnownDir, 'mcp', 'server-card.json'), JSON.stringify(mcpServerCard, null, 2), 'utf8');
fs.writeFileSync(path.join(wellKnownDir, 'oauth-protected-resource'), JSON.stringify(oauthProtectedResource, null, 2), 'utf8');
fs.writeFileSync(path.join(wellKnownDir, 'oauth-authorization-server'), JSON.stringify(oauthAuthServer, null, 2), 'utf8');
fs.writeFileSync(path.join(wellKnownDir, 'openid-configuration'), JSON.stringify(openidConfig, null, 2), 'utf8');
fs.writeFileSync(path.join(wellKnownDir, 'acp.json'), JSON.stringify(acpJson, null, 2), 'utf8');
fs.writeFileSync(path.join(wellKnownDir, 'ucp'), JSON.stringify(ucpJson, null, 2), 'utf8');
fs.writeFileSync(path.join(jsDir, 'webmcp.js'), webmcpJs, 'utf8');
fs.writeFileSync(path.join(publicDir, `${SITE.indexNowKey}.txt`), SITE.indexNowKey, 'utf8');
fs.writeFileSync(path.join(rootDir, 'vercel.json'), JSON.stringify(vercelJson, null, 2), 'utf8');

console.log('[gen-agent-files] All agent files and vercel.json generated successfully!');
