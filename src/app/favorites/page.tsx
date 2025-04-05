'use client'

import { motion } from 'framer-motion'
import { useFavorites } from '@/context/FavoritesContext'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/data/products'
import { useCart } from '@/hooks/useCart'

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites()
  const { addToCart } = useCart()

  // Получаем полную информацию о продуктах в избранном
  const favoriteProducts = favorites
    .map(id => products.find(product => product.id === id))
    .filter(product => product !== undefined)

  return (
    <main className="min-h-screen bg-[#FDF8F7]">
      <div className="container mx-auto px-4 pt-32 pb-12">
        {/* Заголовок */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Избранное</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Здесь собраны все ваши любимые торты
          </p>
        </motion.div>

        {favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-medium text-gray-400 mb-4">
              В избранном пока пусто
            </h2>
            <p className="text-gray-500 mb-8">
              Добавляйте понравившиеся торты в избранное, нажимая на сердечко
            </p>
            <motion.a
              href="/catalog"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Перейти в каталог
            </motion.a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {favoriteProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
                  <div className="relative h-72">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromFavorites(product.id)}
                      className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <Heart className="w-5 h-5 fill-current" />
                    </motion.button>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price} ₽
                      </span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="px-6 py-2 bg-primary text-white rounded-full hover:shadow-lg transition-shadow"
                      >
                        В корзину
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
} 