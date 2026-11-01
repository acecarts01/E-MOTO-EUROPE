# E-MOTO EUROPE — project instructions

React / Next.js 15 App Router ecommerce store, Vercel & AI Studio deployable via GitHub.

## Non-negotiable: German StVZO & EU Compliance
- Banned terms: "Straßenzulassung überall", "Ohne Führerschein im Straßenverkehr fahren", "Legal auf jedem Radweg", "Fahrrad-Status für 72V", "Drossel per Tastendruck StVZO-konform", "No license needed in Germany", "Street legal everywhere".
- Required framing: "Ausschließlich für den Einsatz auf Privatgelände und Rennstrecken (Off-Road only)", "Nicht zulässig im Geltungsbereich der StVZO (sofern kein L1e-B CoC vorliegt)", "Pedelec-konform nach EN 15194:2017+A1:2024 (250W, 25 km/h)", "Gefahrguttransport gemäß ADR Klasse 9 (UN 3480 / UN 3481)".
- If a request would require breaking any of the above, stop and say so rather than complying.

## Architecture
`src/config/site.js` is the single source of truth. Adding one entry to PRODUCTS / CATEGORIES / POSTS
generates the page, route, meta, JSON-LD, sitemap entry and nav links. Never hand-write pages.
Never hand-edit generated files (llms.txt, .well-known/*, vercel.json) — edit the config and run `npm run gen`.

## Rules
- `npm run build && npm run crosscheck` must pass before every push.
- One <h1> per page. Meta descriptions ~150 chars. Titles ≤60 chars.
- Strictly NO PayPal and NO direct credit card gateways. Permitted: SEPA Vorkasse, Crypto (BTC, USDT with 5% discount), Klarna, iDEAL, BLIK, WhatsApp.
- Traktionsakkus >100Wh require ADR Klasse 9 danger labels and freight notices.
- Emails entity-encoded (&#64;) everywhere, including in JSON-LD.
- Never commit node_modules/, .next/, docs/ to public/.
- Framework Preset on Vercel must be "Next.js".

## Live placeholders & Environment
- Domain: emoto-europe.de
- Webhooks: ZOHO_CONTACT_WEBHOOK_URL, ZOHO_ORDER_WEBHOOK_URL, ZOHO_WHOLESALE_WEBHOOK_URL
- GSC verification: GSC-EMOTO-EU-2026-VERIFIED
- IndexNow key: emotoeurope2026indexnowkey

## Brand facts (only these are true — never invent more)
- Founded: 2021 in Freising / München, Deutschland.
- Legal entity: E-MOTO Europe Mobility Systems GmbH i.Gr. (Amtsgericht München HRB 289412, USt-IdNr.: DE 368 491 825, WEEE DE 94182736, BattG DE 83910247, LUCID DE4829104829104).
- Ships: Germany (Express / Dachser Spedition mit Hebebühne), all EU-27 states, and Switzerland.
- Free shipping: €199 (small parts/accessories). 5% instant crypto discount on BTC and USDT.
No invented statistics, awards, press, or named clients. Ever.
