(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      { name: "search_products", description: "Search E-MOTO EUROPE products by keyword, category, or price", inputSchema: { type: "object", properties: { query: { type: "string" }, category: { type: "string" }, max_price: { type: "number" } } }, execute: async ({ query, category, max_price }) => { const params = new URLSearchParams(); if (query) params.set('q', query); if (category) params.set('category', category); if (max_price) params.set('max_price', max_price); const res = await fetch(`https://emoto-europe.de/api/search?${params}`); return res.json(); } },
      { name: "browse_products", description: "Browse products by category", inputSchema: { type: "object", properties: { category: { type: "string" } } }, execute: async ({ category }) => { const url = category ? `https://emoto-europe.de/shop/${category}/` : `https://emoto-europe.de/shop/`; window.location.href = url; return { url }; } },
      { name: "order_via_whatsapp", description: "Initiate a WhatsApp order advisory. Human completes.", inputSchema: { type: "object", properties: { message: { type: "string" } } }, execute: async ({ message }) => { const url = message ? `https://wa.me/4917689234510?text=${encodeURIComponent(message)}` : `https://wa.me/4917689234510`; window.open(url, '_blank'); return { url }; } },
      { name: "get_wholesale_info", description: "Get wholesale pricing tiers", inputSchema: { type: "object", properties: {} }, execute: async () => { window.location.href = `https://emoto-europe.de/wholesale/`; return { url: `https://emoto-europe.de/wholesale/` }; } },
      { name: "contact", description: "Contact E-MOTO EUROPE for technical questions or support", inputSchema: { type: "object", properties: {} }, execute: async () => { window.location.href = `https://emoto-europe.de/contact/`; return { url: `https://emoto-europe.de/contact/` }; } }
    ]
  });
})();
