'use client';

import React from 'react';
import { createContext, useEffect, useState, useMemo, useContext } from 'react';
import { SITE, SHOP, CartItem } from '@/src/config/site';
import { Locale, translations, Translations } from '@/src/lib/i18n';
import { useLocale } from 'next-intl';

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, delta: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  cryptoDiscountAmount: number;
  shippingFee: number;
  total: number;
  cryptoTotal: number;
  isFreeShipping: boolean;
  freeShippingGap: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  // Language & i18n
  locale: Locale;
  t: Translations;

  // Compliance (Age Gate & Cookies)
  isAgeVerified: boolean;
  verifyAge: () => void;
  cookieConsent: boolean | null;
  acceptCookies: () => void;
  declineCookies: () => void;

  // Hydration safety flag
  mounted: boolean;
}

const defaultContextValue: CartContextType = {
    items: [],
    addItem: () => {},
    removeItem: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    itemCount: 0,
    subtotal: 0,
    cryptoDiscountAmount: 0,
    shippingFee: 0,
    total: 0,
    cryptoTotal: 0,
    isFreeShipping: true,
    freeShippingGap: 0,
    isCartOpen: false,
    openCart: () => {},
    closeCart: () => {},
    toggleCart: () => {},
    locale: 'de' as Locale,
    t: new Proxy({}, { get: () => () => '' }) as any,
    isAgeVerified: true,
    verifyAge: () => {},
    cookieConsent: true,
    acceptCookies: () => {},
    declineCookies: () => {},
    mounted: false
};

const CartContext = createContext<CartContextType>(defaultContextValue);

export function CartProvider({ children, initialLocale }: { children: React.ReactNode, initialLocale?: Locale }) {
  // Use next-intl hook to get the active locale
  const intlLocale = useLocale();
  const activeLocale = (initialLocale || intlLocale) as Locale;
  
  // Server-safe initial states
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(true);
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  // Synchronize with localStorage safely after hydration
  useEffect(() => {
    setMounted(true);
    try {
      const savedCart = localStorage.getItem(SITE.cartKey);
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }

      const savedAge = localStorage.getItem('emoto-age-verified');
      if (savedAge === 'true') {
        setIsAgeVerified(true);
      } else {
        setIsAgeVerified(false);
      }

      const savedCookie = localStorage.getItem('emoto-cookie-consent');
      if (savedCookie === 'accepted') {
        setCookieConsent(true);
      } else if (savedCookie === 'declined') {
        setCookieConsent(false);
      } else {
        setCookieConsent(null);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save items to localStorage
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(SITE.cartKey, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, mounted]);

  const verifyAge = () => {
    setIsAgeVerified(true);
    try {
      localStorage.setItem('emoto-age-verified', 'true');
    } catch {
      // ignore
    }
  };

  const acceptCookies = () => {
    setCookieConsent(true);
    try {
      localStorage.setItem('emoto-cookie-consent', 'accepted');
    } catch {
      // ignore
    }
  };

  const declineCookies = () => {
    setCookieConsent(false);
    try {
      localStorage.setItem('emoto-cookie-consent', 'declined');
    } catch {
      // ignore
    }
  };

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.slug === item.slug);
      if (existing) {
        return prev.map(i =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (slug: string) => {
    setItems(prev => prev.filter(i => i.slug !== slug));
  };

  const updateQuantity = (slug: string, delta: number) => {
    setItems(prev => {
      return prev
        .map(i => {
          if (i.slug === slug) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((i): i is CartItem => i !== null);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const itemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  const isFreeShipping = subtotal >= SHOP.freeShippingThreshold || subtotal === 0;
  const freeShippingGap = Math.max(0, SHOP.freeShippingThreshold - subtotal);
  const shippingFee = subtotal === 0 ? 0 : (isFreeShipping ? 0 : SHOP.shippingFee);

  const cryptoDiscountAmount = useMemo(() => {
    return subtotal * (SHOP.cryptoDiscount / 100);
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + shippingFee;
  }, [subtotal, shippingFee]);

  const cryptoTotal = useMemo(() => {
    return (subtotal - cryptoDiscountAmount) + shippingFee;
  }, [subtotal, cryptoDiscountAmount, shippingFee]);

  // Sync translations with next-intl locale
  const t = translations[activeLocale] || translations.de;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        cryptoDiscountAmount,
        shippingFee,
        total,
        cryptoTotal,
        isFreeShipping,
        freeShippingGap,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        locale: activeLocale,
        t,
        isAgeVerified,
        verifyAge,
        cookieConsent,
        acceptCookies,
        declineCookies,
        mounted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useI18n() {
  const cart = useCart();
  return { 
    locale: cart.locale, 
    t: cart.t, 
    mounted: cart.mounted 
  };
}
