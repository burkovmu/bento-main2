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
        <Link href="/" className="text-xl font-display font-bold text-secondary hover-lift">
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
          <>
            {/* Затемнение фона */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Меню */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto min-h-screen pb-safe"
            >
              <div className="sticky top-0 left-0 right-0 bg-white z-10 p-6 border-b border-gray-100">
                {/* Шапка меню */}
                <div className="flex items-center justify-between">
                  <Link href="/" className="text-2xl font-display font-bold text-secondary" onClick={() => setIsOpen(false)}>
                    BentoCakes
                  </Link>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              <div className="p-6 pt-4">
                {/* Навигация */}
                <div className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 text-lg font-medium text-gray-800 hover:text-primary transition-colors py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Разделитель */}
                <div className="my-8 border-t border-gray-100" />

                {/* Контакты */}
                <div className="space-y-6">
                  <motion.a
                    href="tel:+79001234567"
                    className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">Позвонить нам</div>
                      <div className="text-sm text-gray-600">+7 900 123-45-67</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Нижняя панель */}
              <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6 pt-4">
                <motion.div
                  className="flex items-center justify-end gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link 
                    href="/favorites" 
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="w-5 h-5" />
                    {favoritesCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                        {favoritesCount}
                      </span>
                    )}
                  </Link>
                  <motion.button
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      openCart()
                      setIsOpen(false)
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {items.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-xs rounded-full flex items-center justify-center">
                        {items.length}
                      </span>
                    )}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
} 