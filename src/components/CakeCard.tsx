'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, ShoppingBag, Sparkles } from 'lucide-react'
import { useFavorites } from '@/context/FavoritesContext'
import { useCart } from '@/hooks/useCart'
import { Product } from '@/data/products'

type CakeCardProps = Product

export function CakeCard({ id, name, description, price, image, category }: CakeCardProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const { addToCart } = useCart()
  const isProductFavorite = isFavorite(id)

  const handleFavoriteClick = () => {
    if (isProductFavorite) {
      removeFromFavorites(id)
    } else {
      addToFavorites({ id, name, description, price, image, category } as Product)
    }
  }

  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Кнопки действий */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart({ id, name, description, price, image, category })}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur text-gray-800 shadow-lg transition-colors hover:bg-primary hover:text-white"
          >
            <ShoppingBag className="h-6 w-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleFavoriteClick}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur text-gray-800 shadow-lg transition-colors hover:bg-primary hover:text-white"
          >
            <Heart className={`h-6 w-6 transition-colors duration-300 ${isProductFavorite ? 'fill-primary text-primary' : ''}`} />
          </motion.button>
        </div>

        {/* Бейдж "Популярное" */}
        <div className="absolute top-4 left-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-medium text-primary shadow-lg"
          >
            <Sparkles className="h-4 w-4" />
            <span>Популярное</span>
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <motion.h3 
          className="mb-2 text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300"
        >
          {name}
        </motion.h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">{price} ₽</p>
          <div className="h-8 w-[1px] bg-gray-200" />
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600">4.9</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 