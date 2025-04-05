'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart, Phone, Heart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import { useFavorites } from '@/context/FavoritesContext'
import Link from 'next/link'

const menuItems = [
  { title: 'Главная', href: '/' },
  { title: 'Каталог', href: '/catalog' },
  { title: 'О нас', href: '/about' },
  { title: 'Доставка', href: '/delivery' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Контакты', href: '/contacts' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, openCart } = useCart()
  const { favoritesCount } = useFavorites()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-display font-bold text-secondary hover-lift">
          BentoCakes
        </Link>

        {/* Десктопное меню */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-6">
          {/* Телефон */}
          <motion.a
            href="tel:+79001234567"
            className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
              <Phone className="w-5 h-5" />
            </div>
            <span>+7 900 123-45-67</span>
          </motion.a>

          {/* Иконки корзины и избранного */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/favorites" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5" />
                {favoritesCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </Link>
            </motion.div>

            <motion.button
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCart}
            >
              <ShoppingCart className="w-5 h-5" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-xs rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </motion.button>

            {/* Кнопка мобильного меню */}
            <motion.button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <motion.a
                  href="tel:+79001234567"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors py-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+7 900 123-45-67</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 