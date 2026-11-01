'use client';

import React, { useState } from 'react';
import { useCart } from '@/src/lib/cart-context';
import { Product } from '@/src/config/site';
import { ShoppingBag, Check, Zap, Plus, Minus } from 'lucide-react';

export function ProductAddToCart({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      isStVZO: product.isStVZO,
      category: product.category,
      categoryName: product.categoryName
    }, qty);

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      isStVZO: product.isStVZO,
      category: product.category,
      categoryName: product.categoryName
    }, qty);
    openCart();
  };

  return (
    <div className="space-y-3 pt-2">
      {/* Quantity Selector */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-slate-400 font-mono">Menge:</span>
        <div className="flex items-center border border-[#2e2e42] bg-[#181824] rounded">
          <button
            type="button"
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="p-2 hover:text-[#E63946] transition-colors"
            aria-label="Menge verringern"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-3 text-xs font-mono font-bold text-white">{qty}</span>
          <button
            type="button"
            onClick={() => setQty(qty + 1)}
            className="p-2 hover:text-[#E63946] transition-colors"
            aria-label="Menge erhöhen"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleAdd}
          className={`flex-1 py-3 px-4 font-bold font-mono text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 ${
            justAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-[#E63946] hover:bg-[#d52b38] text-white shadow-lg'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Im Warenkorb</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>In den Warenkorb</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          className="py-3 px-4 bg-[#1e1e2c] hover:bg-[#28283a] text-slate-200 hover:text-white font-mono text-xs font-bold uppercase tracking-wider rounded border border-[#343448] transition-colors"
        >
          Direkt zur Kasse
        </button>
      </div>
    </div>
  );
}
