'use client'

import { motion } from 'framer-motion'
import { Sparkles, ChevronDown, Star, Heart, ArrowRight } from 'lucide-react'
import { CakeCard } from '@/components/CakeCard'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useFavorites } from '@/context/FavoritesContext'
import { products, Product } from '@/data/products'

// Выбираем только торты и берем первые 3
const popularCakes = products
  .filter(product => product.category === 'Торты')
  .slice(0, 3)

const ZigzagPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.02]" width="100%" height="100%">
    <pattern id="zigzag" width="84" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <path d="M42 0L84 48H0z" fill="currentColor" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#zigzag)" />
  </svg>
)

const HeroImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className={`relative ${className}`}
  >
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  </motion.div>
)

const StarIcon = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2
    }}
  >
    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
  </motion.div>
)

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export default function Home() {
  const router = useRouter()
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()

  const handleFavoriteClick = (id: number) => {
    const cake = popularCakes.find(cake => cake.id === id)
    if (!cake) return

    if (isFavorite(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites(cake)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF6F2] via-white to-white">
        {/* Фоновые элементы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/grid.svg')] opacity-[0.02] transform rotate-3" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1 }}
              className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-[120px]"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-cream/30 to-transparent blur-[120px]"
            />
          </div>
        </div>

        {/* Основной контент */}
        <div className="container mx-auto px-4">
          <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 py-20">
            {/* Левая колонка */}
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col items-start space-y-8 z-10"
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/10 shadow-xl shadow-primary/5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium">Новая коллекция</span>
                <span className="w-1 h-1 rounded-full bg-primary/30" />
                <span className="text-gray-600">Весна 2025</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1 
                  className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="block">Создаем</span>
                  <motion.span 
                    className="block relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <span className="relative z-10 font-['NeueMetanaNextOutline'] bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
                      волшебные
                    </span>
                    <motion.div 
                      className="absolute -bottom-2 left-0 w-full h-4 bg-primary/10 -skew-x-6"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    />
                  </motion.span>
                  <span className="block">моменты</span>
                </motion.h1>

                <motion.p 
                  className="text-xl text-gray-600 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Уникальные бенто-торты ручной работы, которые превращают каждый ваш праздник 
                  в незабываемое событие. Создано с любовью, украшено с вдохновением.
                </motion.p>
              </div>

              <motion.div 
                className="flex items-center gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  onClick={() => router.push('/checkout')}
                  className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Заказать торт
                    <motion.div
                      animate={{ 
                        x: [0, 5, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
                
                <motion.button
                  onClick={() => router.push('/catalog')}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Смотреть каталог</span>
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </motion.button>
              </motion.div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '500+', label: 'Довольных клиентов' },
                  { number: '4.9', label: 'Средняя оценка' },
                  { number: '2ч', label: 'Время доставки' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="relative z-10 text-center p-4">
                      <div className="font-['NeueMetanaNextOutline'] text-4xl text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                    <motion.div 
                      className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl border border-primary/10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Правая колонка */}
            <motion.div 
              className="w-full lg:w-1/2 relative z-10"
            >
              <motion.div 
                className="relative aspect-square max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Декоративный фон */}
                <motion.div
                  className="absolute inset-0 -rotate-6 bg-gradient-to-r from-primary/10 to-cream/20 rounded-[3rem] blur-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                />
                
                {/* Декоративные элементы */}
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 bg-cream/30 rounded-full blur-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.div
                  className="absolute -left-8 -bottom-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                {/* Основное изображение */}
                <motion.div 
                  className="relative z-20 rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/images/hero-main.webp"
                      alt="Изысканный бенто-торт"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Декоративная рамка */}
                  <motion.div 
                    className="absolute inset-0 border-4 border-white/20 rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                </motion.div>

                {/* Плавающие элементы */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl z-30 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                    <span className="text-sm font-medium">125 отзывов</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-8 top-1/3 bg-white rounded-2xl p-4 shadow-xl z-30 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-sm font-medium">Топ продаж</div>
                  <div className="text-xs text-gray-500">Бенто-торт</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-30"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg">
                          <Image
                            src={`/images/hero-${i + 1}.webp`}
                            alt={`Клиент ${i + 1}`}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="text-sm font-medium">Недавние заказы</div>
                      <div className="text-xs text-gray-500">★★★★★ "Превзошли ожидания!"</div>
                    </div>
                  </div>
                </motion.div>

                {/* Декоративные точки */}
                <div className="absolute -right-4 bottom-1/3 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    />
                  ))}
                </div>
                <div className="absolute -left-4 top-1/3 flex flex-col gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-cream"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Популярные торты */}
      <section className="relative py-20 overflow-hidden">
        {/* Фоновые элементы */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            className="absolute top-0 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-primary/20 to-transparent blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4">
          {/* Заголовок секции */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-primary font-medium mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>Бестселлеры</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Популярные торты
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Самые любимые и заказываемые торты нашими клиентами
            </motion.p>
          </div>

          {/* Сетка тортов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCakes.map((cake: Product) => (
              <CakeCard key={cake.id} {...cake} />
            ))}
          </div>

          {/* Кнопка "Смотреть все" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => router.push('/catalog')}
              className="group relative inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Смотреть все торты</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
