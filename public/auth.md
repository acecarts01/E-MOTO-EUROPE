# Auth.md

## Site: E-MOTO EUROPE — High-Performance E-Motos & Conversion Kits

## Agent Registration
No authentication required. All resources are publicly accessible.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://emoto-europe.de/shop/ |
| Blog & Legal Guides | https://emoto-europe.de/magazin/ |
| FAQ | https://emoto-europe.de/faq/ |
| Wholesale Portal | https://emoto-europe.de/wholesale/ |
| Products API | https://emoto-europe.de/api/products |
| Categories API | https://emoto-europe.de/api/categories |
| Search API | https://emoto-europe.de/api/search |
| MCP Streamable Server | https://emoto-europe.de/api/mcp |

## Authentication

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering
Human-in-the-loop required. Agents may browse catalog, calculate totals and prepare order drafts.
Orders are completed by a human via SEPA Vorkasse, WhatsApp Concierge, or secure order forms. No automated charge or card storage.
