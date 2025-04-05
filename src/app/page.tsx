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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF6F2] via-white to-white pt-20 sm:pt-0">
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
          <div className="relative min-h-[calc(100vh-5rem)] sm:min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-12 lg:py-20">
            {/* Левая колонка */}
            <motion.div 
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 z-10 text-center lg:text-left order-1 lg:order-1"
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 lg:px-6 py-2 rounded-full border border-primary/10 shadow-xl shadow-primary/5 text-sm lg:text-base"
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
                  className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]"
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
                      className="absolute -bottom-2 left-0 w-full h-3 lg:h-4 bg-primary/10 -skew-x-6"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    />
                  </motion.span>
                  <span className="block">моменты</span>
                </motion.h1>

                <motion.p 
                  className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Уникальные бенто-торты ручной работы, которые превращают каждый ваш праздник 
                  в незабываемое событие.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 pt-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.button
                  onClick={() => router.push('/catalog')}
                  className="group relative w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
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

              <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-4 w-full max-w-lg">
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
                    <div className="relative z-10 text-center p-3 lg:p-4">
                      <div className="font-['NeueMetanaNextOutline'] text-2xl lg:text-4xl text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600">{stat.label}</div>
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
              className="w-full lg:w-1/2 relative z-10 order-2 lg:order-2 mb-8 lg:mb-0"
            >
              <motion.div 
                className="relative aspect-square max-w-md lg:max-w-2xl mx-auto"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
              >
                {/* Декоративный фон */}
                <motion.div
                  className="absolute inset-0 -rotate-6 bg-gradient-to-r from-primary/10 to-cream/20 rounded-[2rem] lg:rounded-[3rem] blur-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2 }}
                />
                
                {/* Декоративные элементы */}
                <motion.div
                  className="absolute -right-4 lg:-right-8 -top-4 lg:-top-8 w-24 lg:w-32 h-24 lg:h-32 bg-cream/30 rounded-full blur-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.div
                  className="absolute -left-4 lg:-left-8 -bottom-4 lg:-bottom-8 w-32 lg:w-40 h-32 lg:h-40 bg-primary/20 rounded-full blur-2xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />

                {/* Основное изображение */}
                <motion.div 
                  className="relative z-20 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
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
                    className="absolute inset-0 border-4 border-white/20 rounded-2xl lg:rounded-3xl"
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
                  className="absolute hidden sm:block -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl z-30 backdrop-blur-sm"
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
                  className="absolute hidden sm:block -right-8 top-1/3 bg-white rounded-2xl p-4 shadow-xl z-30 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-sm font-medium">Топ продаж</div>
                  <div className="text-xs text-gray-500">Бенто-торт</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-3 lg:p-4 shadow-xl z-30 w-[90%] sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="flex -space-x-2 lg:-space-x-3">
                      {[1, 2, 3].map((_, i) => (
                        <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white overflow-hidden shadow-lg">
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
                      <div className="text-xs lg:text-sm font-medium">Недавние заказы</div>
                      <div className="text-[10px] lg:text-xs text-gray-500">★★★★★ "Превзошли ожидания!"</div>
                    </div>
                  </div>
                </motion.div>

                {/* Декоративные точки */}
                <div className="absolute -right-4 bottom-1/3 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-primary"
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
                      className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-cream"
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

      {/* Преимущества */}
      <section className="relative py-20 overflow-hidden">
        {/* Фоновые элементы */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute top-0 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-[100px]"
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
              <span>Почему мы</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Наши преимущества
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Создаем уникальные торты с заботой о каждой детали
            </motion.p>
          </div>

          {/* Сетка преимуществ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎨",
                title: "Индивидуальный дизайн",
                description: "Создаем уникальные торты по вашим пожеланиям. Каждый торт - произведение искусства, созданное специально для вас."
              },
              {
                icon: "🌟",
                title: "Высокое качество",
                description: "Используем только натуральные ингредиенты высшего качества. Никаких консервантов и искусственных добавок."
              },
              {
                icon: "⚡️",
                title: "Быстрая доставка",
                description: "Доставляем торты в течение 2-3 часов по Москве. Специальные термоконтейнеры сохраняют свежесть и внешний вид."
              },
              {
                icon: "💝",
                title: "Особый подход",
                description: "Учитываем все ваши пожелания и диетические ограничения. Создаем торты для любого праздника и события."
              },
              {
                icon: "✨",
                title: "Свежесть гарантирована",
                description: "Готовим торты непосредственно перед доставкой, чтобы вы получили максимально свежий и вкусный десерт."
              },
              {
                icon: "🎁",
                title: "Приятные бонусы",
                description: "Дарим свечи и топперы к каждому торту. Специальные предложения для постоянных клиентов."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="relative py-20 overflow-hidden bg-[#FDF8F7]">
        {/* Фоновые элементы */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cream/30 to-transparent blur-[100px]"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
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
              <Star className="w-4 h-4" />
              <span>Отзывы клиентов</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Что говорят наши клиенты
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Мы ценим каждый отзыв и стремимся сделать ваш опыт незабываемым
            </motion.p>
          </div>

          {/* Сетка отзывов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Смирнова",
                role: "День рождения дочери",
                image: "/images/reviews/avatar-1.webp",
                rating: 5,
                text: "Заказывала торт на день рождения дочери - это было просто волшебно! Дизайн в точности как на картинке, вкус превзошел все ожидания. Дочь и гости были в восторге!",
                date: "2 недели назад"
              },
              {
                name: "Михаил Петров",
                role: "Свадебное торжество",
                image: "/images/reviews/avatar-2.webp",
                rating: 5,
                text: "Огромное спасибо за наш свадебный торт! Он стал настоящим украшением вечера. Все гости были поражены не только красотой, но и потрясающим вкусом.",
                date: "1 месяц назад"
              },
              {
                name: "Екатерина Иванова",
                role: "Корпоративное мероприятие",
                image: "/images/reviews/avatar-3.webp",
                rating: 5,
                text: "Заказывали торт для корпоратива на 50 человек. Сервис на высшем уровне: своевременная доставка, безупречное исполнение и невероятный вкус!",
                date: "2 месяца назад"
              }
            ].map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-4">{review.text}</p>
                <div className="text-sm text-gray-500">{review.date}</div>
              </motion.div>
            ))}
          </div>

          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Счастливых клиентов" },
              { number: "4.9", label: "Средняя оценка" },
              { number: "1000+", label: "Выполненных заказов" },
              { number: "98%", label: "Положительных отзывов" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Как заказать */}
      <section className="relative py-20 overflow-hidden bg-[#FDF8F7]">
        {/* Фоновые элементы */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-cream/30 to-transparent blur-[100px]"
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
              <span>Простой процесс</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Как заказать торт
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Всего 4 простых шага до вашего идеального торта
            </motion.p>
          </div>

          {/* Шаги заказа */}
          <div className="relative max-w-6xl mx-auto">
            {/* Соединяющая линия */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  icon: "📱",
                  title: "Оформите заказ",
                  description: "Выберите понравившийся торт из каталога или создайте свой дизайн"
                },
                {
                  number: "02",
                  icon: "💬",
                  title: "Уточнение деталей",
                  description: "Наш менеджер свяжется с вами для подтверждения всех деталей заказа"
                },
                {
                  number: "03",
                  icon: "👨‍🍳",
                  title: "Изготовление",
                  description: "Наши кондитеры приступают к созданию вашего идеального торта"
                },
                {
                  number: "04",
                  icon: "🚚",
                  title: "Доставка",
                  description: "Бережно доставим ваш торт точно в срок в удобное для вас время"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white rounded-3xl p-8 shadow-lg group hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute -top-4 left-8 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Кнопка заказа */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                onClick={() => router.push('/catalog')}
                className="group relative inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Смотреть каталог</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
