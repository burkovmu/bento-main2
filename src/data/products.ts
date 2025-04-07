export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  weight: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Шоколадный бенто-торт',
    category: 'Торты',
    price: 3500,
    image: '/images/cakes/chocolate-bento.webp',
    description: 'Нежный шоколадный бисквит с кремом из темного шоколада',
    rating: 4.5,
    weight: 1.5
  },
  {
    id: 2,
    name: 'Ванильные капкейки',
    category: 'Капкейки',
    price: 250,
    image: '/images/cupcakes/vanilla-cupcake.webp',
    description: 'Воздушные капкейки с ванильным кремом',
    rating: 4.0,
    weight: 0.2
  },
  {
    id: 3,
    name: 'Малиновый макарун',
    category: 'Макаруны',
    price: 150,
    image: '/images/macarons/raspberry-macaron.webp',
    description: 'Хрустящие макаруны с малиновой начинкой',
    rating: 4.2,
    weight: 0.1
  },
  {
    id: 4,
    name: 'Фисташковый бенто-торт',
    category: 'Торты',
    price: 3800,
    image: '/images/cakes/pistachio-bento.webp',
    description: 'Воздушный фисташковый бисквит с кремом из натуральной пасты',
    rating: 4.3,
    weight: 1.8
  },
  {
    id: 5,
    name: 'Карамельный бенто-торт',
    category: 'Торты',
    price: 3600,
    image: '/images/cakes/caramel-bento.webp',
    description: 'Ванильный бисквит с соленой карамелью и карамельным кремом',
    rating: 4.4,
    weight: 1.7
  },
  {
    id: 6,
    name: 'Клубничные капкейки',
    category: 'Капкейки',
    price: 280,
    image: '/images/cupcakes/strawberry-cupcake.webp',
    description: 'Нежные капкейки с клубничным кремом и свежими ягодами',
    rating: 4.1,
    weight: 0.2
  },
  {
    id: 7,
    name: 'Лавандовый макарун',
    category: 'Макаруны',
    price: 170,
    image: '/images/macarons/lavender-macaron.webp',
    description: 'Изысканные макаруны с лавандовым ганашем',
    rating: 4.6,
    weight: 0.1
  },
  {
    id: 8,
    name: 'Матча бенто-торт',
    category: 'Торты',
    price: 4000,
    image: '/images/cakes/matcha-bento.webp',
    description: 'Японский торт с чаем матча и белым шоколадом',
    rating: 4.2,
    weight: 1.9
  },
  {
    id: 9,
    name: 'Черничное пирожное',
    category: 'Пирожные',
    price: 350,
    image: '/images/pastries/blueberry-pastry.webp',
    description: 'Воздушное пирожное с черничным муссом',
    rating: 4.0,
    weight: 0.1
  },
  {
    id: 10,
    name: 'Фортунато бенто-торт',
    category: 'Торты',
    price: 4200,
    image: '/images/cakes/fortunato-bento.webp',
    description: 'Шоколадный торт с кофейным кремом и карамелизированными орехами',
    rating: 4.4,
    weight: 1.8
  },
  {
    id: 11,
    name: 'Тирамису пирожное',
    category: 'Пирожные',
    price: 380,
    image: '/images/pastries/tiramisu-pastry.webp',
    description: 'Классическое итальянское пирожное с кофейным вкусом',
    rating: 4.3,
    weight: 0.2
  },
  {
    id: 12,
    name: 'Фисташковые макаруны',
    category: 'Макаруны',
    price: 180,
    image: '/images/macarons/pistachio-macaron.webp',
    description: 'Нежные макаруны с фисташковым кремом',
    rating: 4.5,
    weight: 0.1
  },
  {
    id: 13,
    name: 'Красный бархат бенто-торт',
    category: 'Торты',
    price: 3900,
    image: '/images/cakes/red-velvet-bento.webp',
    description: 'Классический красный бархат с кремом чиз',
    rating: 4.3,
    weight: 1.7
  },
  {
    id: 14,
    name: 'Шоколадные капкейки',
    category: 'Капкейки',
    price: 270,
    image: '/images/cupcakes/chocolate-cupcake.webp',
    description: 'Шоколадные капкейки с ганашем из темного шоколада',
    rating: 4.2,
    weight: 0.2
  },
  {
    id: 15,
    name: 'Манговый бенто-торт',
    category: 'Торты',
    price: 4100,
    image: '/images/cakes/mango-bento.webp',
    description: 'Тропический торт с манговым муссом и маракуйей',
    rating: 4.4,
    weight: 1.9
  },
  {
    id: 16,
    name: 'Эклер ванильный',
    category: 'Пирожные',
    price: 320,
    image: '/images/pastries/vanilla-eclair.webp',
    description: 'Французский эклер с ванильным кремом',
    rating: 4.0,
    weight: 0.1
  },
  {
    id: 17,
    name: 'Малиновый бенто-торт',
    category: 'Торты',
    price: 3800,
    image: '/images/cakes/raspberry-bento.webp',
    description: 'Малиновый торт с кремом на основе свежих ягод',
    rating: 4.1,
    weight: 1.7
  },
  {
    id: 18,
    name: 'Кокосовые макаруны',
    category: 'Макаруны',
    price: 160,
    image: '/images/macarons/coconut-macaron.webp',
    description: 'Экзотические макаруны с кокосовой начинкой',
    rating: 4.3,
    weight: 0.1
  }
]; 