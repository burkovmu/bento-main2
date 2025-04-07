'use client'

import { motion } from 'framer-motion'
import { Sparkles, ChevronDown, Star, Heart, ArrowRight, Cake } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF6F2] via-white to-white">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute top-0 -right-20 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-gradient-to-l from-primary/20 to-transparent blur-[100px]"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 -left-20 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-gradient-to-r from-cream/30 to-transparent blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 lg:py-20">
          {/* Текст */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-primary text-sm lg:text-base font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Новая коллекция</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-gray-800 mb-6 leading-tight text-center lg:text-left"
            >
              <span className="block w-full tracking-wider">Создаем</span>
              <span className="block w-full text-primary tracking-widest font-outline">волшебные</span>
              <span className="block w-full tracking-wider">моменты</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Уникальные бенто-торты ручной работы, которые превращают каждый ваш праздник в незабываемое событие.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/catalog')}
                className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Смотреть каталог
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
            </motion.div>

            {/* Достижения */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 mt-12 justify-center lg:justify-start"
            >
              {[
                { 
                  number: "500+",
                  label: "Довольных клиентов",
                  icon: "👥"
                },
                { 
                  number: "4.9",
                  label: "Средняя оценка",
                  icon: "⭐️"
                },
                { 
                  number: "2ч",
                  label: "Время доставки",
                  icon: "⚡️"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="group relative bg-white/40 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/60 transition-all duration-300 border border-gray-100/50"
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-3xl font-display" style={{ fontFamily: 'var(--font-neue-metana)' }}>{stat.number}</div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-center">
                      {stat.label}
                    </div>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Изображение */}
          <motion.div 
            className="lg:w-1/2 relative order-2 mb-6 lg:mb-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative aspect-[4/3] lg:aspect-square w-full max-w-sm lg:max-w-2xl mx-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/images/hero-main.webp"
                alt="Bento Cake"
                fill
                className="object-cover rounded-3xl lg:rounded-4xl shadow-2xl lg:shadow-3xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl lg:rounded-4xl" />

              {/* Декоративные элементы */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg lg:shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400 fill-yellow-400" />
                  <div>
                    <div className="text-sm lg:text-base font-medium">Топ продаж</div>
                    <div className="text-xs lg:text-sm text-gray-500">Бенто-торт</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 shadow-lg lg:shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-red-500 fill-red-500" />
                  <div>
                    <div className="text-sm lg:text-base font-medium">125 отзывов</div>
                    <div className="text-xs lg:text-sm text-gray-500">★★★★★</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400" />
      </motion.div>
    </section>
  )
} 