# E-MOTO EUROPE

> Europas Spezialist für High-Performance E-Motos, E-MTB Umbausätze & Custom Upgrades

Production-grade Next.js 15 App Router store built with WebForge v9.1 standards — mobile-first, technically sound, SEO + AI-visibility optimized (AEO/GEO/LLM), Agent-Ready (Level 2+ with live MCP Streamable HTTP, ACP, UCP 1.0, RFC 9727 API Catalog), and deployable to Vercel via GitHub.

---

## Key Features

1. **Mobile-First & German Engineering Aesthetic**:
   - Engineered for ~380px viewports first, responsive grid math, zero horizontal overflow.
   - Distinctive industrial palette: Hyper Red `#E63946`, Deep Carbon `#121216`, Anodized accents.
   - Clean typographic hierarchy, zero-pill discipline, WCAG 2.2 AA compliant.

2. **10 European Languages (`src/lib/i18n.ts`)**:
   - German (`de` — Primary default DACH)
   - Swiss German (`de-CH`)
   - English (`en` — Pan-European)
   - French (`fr`)
   - Italian (`it`)
   - Spanish (`es`)
   - Portuguese (`pt`)
   - Dutch (`nl`)
   - Polish (`pl`)
   - Czech (`cs`)

3. **Strict German Compliance & Legal Certainty**:
   - Clear distinction between **100% StVZO & EN 15194 Pedelec Umbausätzen (250W, 25 km/h)** and **Offroad-Sportgeräten (1000W–5000W, 72V)**.
   - Full German Impressum (§ 5 DDG), DSGVO-Datenschutzerklärung, AGB, Widerrufsbelehrung & Musterformular, Batterie- & ElektroG-Hinweise (BattG / ElektroG).
   - Certified Dangerous Goods transport disclosures according to **ADR Klasse 9 (UN 3480 / UN 3481)** for traction batteries.
   - 16+ Age Gate Modal & strict TTDSG/DSGVO cookie banner.

4. **Payment Methods (Strictly No PayPal, No Unvetted Card Forms)**:
   - SEPA Banküberweisung / Vorkasse with automated IBAN/BIC reference.
   - Cryptocurrency (Bitcoin BTC, USDT TRC20/ERC20) with automated 5% instant discount.
   - Klarna Rechnungskauf / Sofort.
   - iDEAL (Netherlands) & BLIK (Poland).
   - Direct WhatsApp Concierge Advisory.

5. **Live Agent-Ready Layer (V1–V6)**:
   - Live MCP Streamable HTTP JSON-RPC endpoint: `/api/mcp`
   - Real JSON API endpoints: `/api/products`, `/api/products/[slug]`, `/api/categories`, `/api/search`
   - Live ACP Catalog: `/api/acp/catalog`
   - Live UCP Services: `/api/ucp/services` with mandatory `"ucp": "1.0"`
   - WebMCP provider: `/js/webmcp.js`
   - Markdown content negotiation middleware: `middleware.ts`
   - RFC 9727 API Catalog: `/.well-known/api-catalog`
   - Agent skills index: `/.well-known/agent-skills/index.json`
   - MCP Server Card: `/.well-known/mcp/server-card.json`
   - OAuth resources & OpenID: `/.well-known/oauth-protected-resource`, `/.well-known/oauth-authorization-server`, `/.well-known/openid-configuration`
   - `auth.md` starting with exact `# Auth.md` heading.

---

## Deployment to Vercel via GitHub

```bash
# 1. Create a new empty GitHub repository
# 2. Add remote and push:
git init
git remote add origin https://github.com/[username]/emoto-europe.git
git add .
git commit -m "Initial build — WebForge v9.1 E-MOTO EUROPE"
git push -u origin main

# 3. Import into Vercel:
# Go to vercel.com -> Add New Project -> Import from GitHub -> select repository
# CRITICAL: Framework Preset must be "Next.js"
# 4. Environment Variables (optional for Zoho CRM webhooks):
# ZOHO_CONTACT_WEBHOOK_URL
# ZOHO_ORDER_WEBHOOK_URL
# ZOHO_WHOLESALE_WEBHOOK_URL
# 5. Deploy
```

---

## Scripts

```bash
# Run local dev server
npm run dev

# Regenerate all agent files from src/config/site.js
npm run gen

# Run pre-ship crosscheck
npm run crosscheck

# Production build
npm run build
```
