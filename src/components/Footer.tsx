'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  { title: 'О нас', href: '/about' },
  { title: 'Каталог', href: '/catalog' },
  { title: 'Доставка', href: '/delivery' },
  { title: 'FAQ', href: '/faq' },
]

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контакты */}
          <div>
            <h4 className="text-xl font-display font-bold text-gradient mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-600">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-900">
                <a href="tel:+79939073077" className="flex items-center gap-2">
                  +7 (993) 907-30-77
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-900">
                <a href="mailto:burkovmu@gmail.com" className="flex items-center gap-2">
                  burkovmu@gmail.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-900">
                <Link href="/contacts" className="flex items-center gap-2">
                  г. Москва, ул. Пушкина, д. 1
                </Link>
              </motion.li>
            </ul>
          </div>

          {/* Меню */}
          <div>
            <h4 className="text-xl font-display font-bold text-gradient mb-4">Меню</h4>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <motion.li
                  key={item.title}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Link href={item.href} className="block">
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Социальные сети */}
          <div>
            <h4 className="text-xl font-display font-bold text-gradient mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© {new Date().getFullYear()} BentoCakes. Все права защищены.</p>
        </div>
      </div>

      {/* Декоративный элемент */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -right-32 -bottom-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
    </footer>
  )
} 