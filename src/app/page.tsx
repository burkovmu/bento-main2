'use client'

import { motion } from 'framer-motion'
import { 
  Cake, 
  Sparkles, 
  Award, 
  Clock, 
  Heart, 
  ArrowRight, 
  ChevronDown,
  Star,
  Users,
  Package,
  ThumbsUp,
  ShoppingBag
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useFavorites } from '@/context/FavoritesContext'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

// Выбираем только торты и берем первые 3
const popularCakes = products
  .filter(product => product.category === 'Торты')
  .slice(0, 3)

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-primary text-sm lg:text-base font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Сделано с любовью</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-display font-bold text-gray-800 mb-6"
            >
              Торты для <span className="font-neue-metana text-6xl lg:text-8xl text-primary">важных</span> моментов
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Создаем уникальные торты, которые сделают ваш праздник незабываемым. 
              Только натуральные ингредиенты и ручная работа.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/catalog"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>Выбрать торт</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-medium border border-primary/10 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>О нас</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.9, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/hero-main.webp"
                alt="Торт на заказ"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:-bottom-6 lg:-right-6 bg-white p-6 rounded-2xl shadow-lg backdrop-blur-sm bg-white/80 mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-2xl font-display font-bold text-gray-800">1000+</div>
                    <div className="text-sm text-gray-500">Счастливых клиентов</div>
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <div>
                    <div className="text-2xl font-display font-bold text-gray-800">4.9</div>
                    <div className="text-sm text-gray-500">Средний рейтинг</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const PopularProducts = () => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()
  const { addToCart } = useCart()

  const handleFavoriteClick = (id: number) => {
    const cake = popularCakes.find(cake => cake.id === id)
    if (!cake) return

    if (isFavorite(id)) {
      removeFromFavorites(id)
    } else {
      addToFavorites(cake)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF6F2] to-white" />
        <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
        />
        </div>

      <div className="container mx-auto px-4 relative">
            <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-primary text-sm lg:text-base font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Популярное</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4"
          >
            Популярные торты
          </motion.h2>
          <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Самые востребованные торты, которые выбирают наши клиенты
          </motion.p>
                </motion.div>

            <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {popularCakes.map((cake) => (
            <motion.div
              key={cake.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Изображение */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Кнопка избранного */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleFavoriteClick(cake.id)}
                  className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur text-gray-800 shadow-lg transition-colors hover:bg-primary hover:text-white"
                >
                  <Heart className={`h-5 w-5 transition-colors duration-300 ${isFavorite(cake.id) ? 'fill-primary text-primary' : ''}`} />
                </motion.button>

                {/* Бейдж категории */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-primary shadow-lg">
                    {cake.category}
                  </div>
                </div>
              </div>

              {/* Информация о продукте */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">
                  {cake.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {cake.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-600">{cake.rating}</span>
                  </div>
                  <p className="text-xl font-bold text-primary">
                    {cake.price} ₽
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addToCart(cake)}
                  className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>В корзину</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/catalog"
            className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            <span>Смотреть все торты</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const Advantages = () => {
  const advantages = [
    {
      icon: <Cake className="w-6 h-6" />,
      title: 'Ручная работа',
      description: 'Каждый торт создается вручную с любовью и вниманием к деталям'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Уникальный дизайн',
      description: 'Создаем торты по вашим эскизам или разрабатываем индивидуальный дизайн'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Быстрая доставка',
      description: 'Доставляем торты в удобное для вас время и место'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Качественные ингредиенты',
      description: 'Используем только натуральные и свежие продукты'
    }
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FFF6F2]" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
                  />
                </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
              <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-primary text-sm lg:text-base font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Наши преимущества</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4"
          >
            Почему выбирают нас
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Мы создаем торты, которые не только вкусные, но и красивые
          </motion.p>
              </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-white/80">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
            </div>
                <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
          </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Achievements = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      value: '1000+',
      label: 'Счастливых клиентов',
      description: 'Более тысячи довольных клиентов, которые выбрали наши торты'
    },
    {
      icon: <Package className="w-8 h-8" />,
      value: '500+',
      label: 'Успешных заказов',
      description: 'Более пятисот успешно выполненных заказов'
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      value: '4.9',
      label: 'Средний рейтинг',
      description: 'Высокий рейтинг по отзывам наших клиентов'
    }
  ]

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF6F2] to-white" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-primary text-sm lg:text-base font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Наши достижения</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4"
          >
            Мы гордимся нашими результатами
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Каждый день мы стремимся делать лучше и радовать наших клиентов
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg backdrop-blur-sm bg-white/80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {achievement.icon}
                    </div>
                    <div className="text-4xl font-display font-bold text-gray-800">
                      {achievement.value}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-gray-800">
                      {achievement.label}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Advantages />
      <PopularProducts />
      <Achievements />
    </main>
  )
}