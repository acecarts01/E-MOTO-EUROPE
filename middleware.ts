import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export const config = {
  matcher: ['/', '/(de|en|fr|it|es|pt|nl|pl|cs|de-CH)/:path*', '/((?!api|_next/static|_next/image|favicon.ico|favicon.svg|images|fonts).*)'],
};

function prefersMarkdownOverHtml(accept: string): boolean {
  let mdQ = -1;
  let htmlQ = -1;
  for (const part of accept.split(',')) {
    const [type, ...params] = part.trim().split(';').map(s => s.trim());
    let q = 1;
    for (const p of params) {
      const m = /^q=([\d.]+)$/.exec(p);
      if (m) q = parseFloat(m[1]);
    }
    if (type === 'text/markdown') mdQ = Math.max(mdQ, q);
    if (type === 'text/html') htmlQ = Math.max(htmlQ, q);
  }
  return mdQ > -1 && mdQ > htmlQ;
}

export async function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || '';

  if (prefersMarkdownOverHtml(accept)) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Provide Markdown representation for agents querying LLM representation
    if (pathname === '/' || pathname === '/shop' || pathname === '/shop/') {
      return new NextResponse(
        `# E-MOTO EUROPE — Markdown View\n\nEuropas Spezialist für High-Performance E-Motos, E-MTB Umbausätze & Custom Tuning.\n\nFull catalog and resources available at https://emoto-europe.de/llms.txt and https://emoto-europe.de/.well-known/api-catalog`,
        { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } }
      );
    }
  }

  return intlMiddleware(request);
}
