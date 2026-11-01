
import React from 'react';
import Link from 'next/link';
import { CartProvider } from '@/src/lib/cart-context';

export default function NotFound() {
  return (
    <div className="py-24 bg-[#0d0d12]">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-white">404 - Seite nicht gefunden</h1>
        <Link href="/" className="text-white">Zur Startseite</Link>
      </div>
    </div>
  );
}
