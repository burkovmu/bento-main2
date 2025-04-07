'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Cart } from '@/components/Cart'
import { FavoritesProvider } from '@/context/FavoritesContext'
import { CartProvider } from '@/context/CartContext'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Navigation />
        {children}
        <Footer />
        <Cart />
      </CartProvider>
    </FavoritesProvider>
  )
} 