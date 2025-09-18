import newbornBabyClothDiaper from '../assets/images/Newborn Baby Cloth Diaper.png';
import napkins from '../assets/images/napkins.png';
import sanitaryNapkins from '../assets/images/sanitary_napkins.png';
import reusableDiapers from '../assets/images/Reusable Diapers.png';
import disposable from '../assets/images/disposable.png';
import reusableBambooSanitaryNapkin from '../assets/images/Reusable Bamboo Sanitary Napkin .png';
import throwPillow from '../assets/images/Throw pillow.png';
import babySleepingBag from '../assets/images/Baby sleeping bag.png';
import siliconeBabyBib from '../assets/images/Silicone baby bib.png';
import disposableBabyBib from '../assets/images/Disposable baby bib.png';
import reusablePocketDiaper from '../assets/images/Reusable pocket diaper.png';
import pocketDiaper from '../assets/images/Pocket Diaper.png';

export type Review = {
  id: number;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
};

export type Product = {
  id: number;
  name: string;
  category: 'baby' | 'sanitary' | string;
  price?: string;
  originalPrice?: string;
  rating: number;
  image: string;
  description: string;
  brand?: string;
  material?: string;
  ageRange?: string;
  ecoFriendly?: boolean;
  inStock: boolean;
  tags: string[];
  reviews: number;
  reviewList: Review[];
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Reusable Diapers',
    category: 'baby',
    price: '$15.99',
    originalPrice: '$19.99',
    rating: 4.8,
    image: newbornBabyClothDiaper,
    description: 'Ultra-soft, leak-proof protection for your little one',
    brand: 'Lotus Health',
    material: 'Organic Cotton',
    ageRange: '0-12 months',
    ecoFriendly: true,
    inStock: true,
    tags: ['diapers', 'organic', 'leak-proof', 'soft'],
    reviews: 124,
    reviewList: [
      {
        id: 1,
        userName: 'Sarah M.',
        rating: 5,
        comment: 'Excellent quality diapers! My baby stays dry all night. Highly recommend!',
        date: '2024-01-15',
        verified: true,
        helpful: 12,
      },
      {
        id: 2,
        userName: 'John K.',
        rating: 4,
        comment: 'Good diapers, but a bit pricey. Quality is worth it though.',
        date: '2024-01-10',
        verified: true,
        helpful: 8,
      },
    ],
  },
  {
    id: 2,
    name: 'Bamboo Reusable Diaper',
    category: 'baby',
    price: '$18.99',
    originalPrice: '$22.99',
    rating: 4.9,
    image: reusableDiapers,
    description: 'Eco-friendly bamboo reusable diaper for comfort and sustainability',
    brand: 'Lotus Health',
    material: 'Bamboo Fiber',
    ageRange: '6-24 months',
    ecoFriendly: true,
    inStock: true,
    tags: ['diapers', 'bamboo', 'eco-friendly', 'reusable'],
    reviews: 89,
    reviewList: [
      {
        id: 3,
        userName: 'Mary T.',
        rating: 5,
        comment: 'Perfect for our baby! So soft and eco-friendly. Highly recommend!',
        date: '2024-01-08',
        verified: true,
        helpful: 15,
      },
      {
        id: 4,
        userName: 'David L.',
        rating: 4,
        comment: 'Great quality bamboo material. A bit pricey but worth it for the quality.',
        date: '2024-01-05',
        verified: true,
        helpful: 9,
      },
    ],
  },
  {
    id: 3,
    name: 'Sanitary Pads',
    category: 'sanitary',
    price: '$8.99',
    originalPrice: '$12.99',
    rating: 4.7,
    image: sanitaryNapkins,
    description: 'Maximum comfort and protection for active days',
    brand: 'Lotus Health',
    material: 'Ultra Soft Cotton',
    ageRange: 'All ages',
    ecoFriendly: false,
    inStock: true,
    tags: ['sanitary', 'pads', 'comfort', 'protection'],
    reviews: 156,
    reviewList: [
      {
        id: 5,
        userName: 'Anna K.',
        rating: 5,
        comment: 'Best sanitary pads I\'ve ever used! So comfortable and reliable.',
        date: '2024-01-12',
        verified: true,
        helpful: 22,
      },
      {
        id: 6,
        userName: 'Grace M.',
        rating: 4,
        comment: 'Good protection and comfort. Will buy again.',
        date: '2024-01-09',
        verified: true,
        helpful: 11,
      },
    ],
  },
  {
    id: 4,
    name: 'Night Protection Pads',
    category: 'sanitary',
    price: '$12.99',
    originalPrice: '$15.99',
    rating: 4.6,
    image: napkins,
    description: 'Extended coverage for overnight confidence',
    brand: 'Lotus Health',
    material: 'Ultra Absorbent',
    ageRange: 'All ages',
    ecoFriendly: false,
    inStock: true,
    tags: ['sanitary', 'night', 'protection', 'overnight'],
    reviews: 98,
    reviewList: [
      {
        id: 7,
        userName: 'Susan R.',
        rating: 5,
        comment: 'Perfect for overnight protection. No leaks at all!',
        date: '2024-01-11',
        verified: true,
        helpful: 18,
      },
    ],
  },
  {
    id: 7,
    name: 'Disposable Pads',
    category: 'sanitary',
    price: '$6.99',
    originalPrice: '$9.99',
    rating: 4.5,
    image: disposable,
    description: 'Convenient and absorbent disposable sanitary pads',
    brand: 'Lotus Health',
    material: 'Disposable Material',
    ageRange: 'All ages',
    ecoFriendly: false,
    inStock: true,
    tags: ['sanitary', 'disposable', 'convenient'],
    reviews: 67,
    reviewList: [
      {
        id: 8,
        userName: 'Linda P.',
        rating: 4,
        comment: 'Convenient and reliable. Good value for money.',
        date: '2024-01-07',
        verified: true,
        helpful: 7,
      },
    ],
  },
  {
    id: 9,
    name: 'Reusable Bamboo Sanitary Napkin',
    category: 'sanitary',
    price: '$14.99',
    originalPrice: '$18.99',
    rating: 4.7,
    image: reusableBambooSanitaryNapkin,
    description: 'Eco-friendly and comfortable bamboo sanitary napkin',
    brand: 'Lotus Health',
    material: 'Bamboo Fiber',
    ageRange: 'All ages',
    ecoFriendly: true,
    inStock: true,
    tags: ['sanitary', 'bamboo', 'reusable', 'eco-friendly'],
    reviews: 134,
    reviewList: [
      {
        id: 9,
        userName: 'Rachel S.',
        rating: 5,
        comment: 'Love the eco-friendly aspect! So comfortable and sustainable.',
        date: '2024-01-13',
        verified: true,
        helpful: 25,
      },
      {
        id: 10,
        userName: 'Emma W.',
        rating: 4,
        comment: 'Great product, very comfortable. Worth the investment.',
        date: '2024-01-10',
        verified: true,
        helpful: 14,
      },
    ],
  },
  {
    id: 10,
    name: 'Throw Pillow',
    category: 'baby',
    price: '$24.99',
    originalPrice: '$29.99',
    rating: 4.5,
    image: throwPillow,
    description: 'Comfortable throw pillow for baby comfort',
    brand: 'Lotus Health',
    material: 'Soft Fabric',
    ageRange: '0-24 months',
    ecoFriendly: true,
    inStock: true,
    tags: ['pillow', 'comfort', 'soft', 'baby'],
    reviews: 45,
    reviewList: [],
  },
  {
    id: 11,
    name: 'Baby Sleeping Bag',
    category: 'baby',
    price: '$34.99',
    originalPrice: '$39.99',
    rating: 4.5,
    image: babySleepingBag,
    description: 'Cozy sleeping bag for safe and warm sleep',
    brand: 'Lotus Health',
    material: 'Breathable Cotton',
    ageRange: '0-12 months',
    ecoFriendly: true,
    inStock: true,
    tags: ['sleeping bag', 'cozy', 'safe', 'warm'],
    reviews: 78,
    reviewList: [],
  },
  {
    id: 12,
    name: 'Silicone Baby Bib',
    category: 'baby',
    price: '$12.99',
    originalPrice: '$15.99',
    rating: 4.5,
    image: siliconeBabyBib,
    description: 'Durable silicone bib for mess-free meals',
    brand: 'Lotus Health',
    material: 'Food-grade Silicone',
    ageRange: '6-24 months',
    ecoFriendly: true,
    inStock: true,
    tags: ['bib', 'silicone', 'durable', 'mess-free'],
    reviews: 92,
    reviewList: [],
  },
  {
    id: 13,
    name: 'Disposable Baby Bib',
    category: 'baby',
    price: '$4.99',
    originalPrice: '$6.99',
    rating: 4.5,
    image: disposableBabyBib,
    description: 'Convenient disposable bib for easy cleanup',
    brand: 'Lotus Health',
    material: 'Disposable Paper',
    ageRange: '6-24 months',
    ecoFriendly: false,
    inStock: true,
    tags: ['bib', 'disposable', 'convenient', 'easy-cleanup'],
    reviews: 56,
    reviewList: [],
  },
  {
    id: 14,
    name: 'Reusable Pocket Diaper',
    category: 'baby',
    price: '$22.99',
    originalPrice: '$26.99',
    rating: 4.5,
    image: reusablePocketDiaper,
    description: 'Eco-friendly reusable diaper with pocket design',
    brand: 'Lotus Health',
    material: 'Organic Cotton with PUL',
    ageRange: '12-36 months',
    ecoFriendly: true,
    inStock: true,
    tags: ['diaper', 'reusable', 'pocket', 'eco-friendly'],
    reviews: 103,
    reviewList: [],
  },
  {
    id: 15,
    name: 'Pocket Diaper',
    category: 'baby',
    price: '$19.99',
    originalPrice: '$23.99',
    rating: 4.5,
    image: pocketDiaper,
    description: 'Practical pocket diaper for everyday use',
    brand: 'Lotus Health',
    material: 'Cotton Blend',
    ageRange: '6-24 months',
    ecoFriendly: true,
    inStock: true,
    tags: ['diaper', 'pocket', 'practical', 'everyday'],
    reviews: 87,
    reviewList: [],
  },
];
