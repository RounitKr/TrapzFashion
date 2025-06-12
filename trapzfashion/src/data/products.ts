import mario from '../assets/Tshirts/Bring your Childhood/Mario/Mario.png'
import mario2 from '../assets/Tshirts/Bring your Childhood/Mario/2.png'
import mario3 from '../assets/Tshirt/Bring your Childhood/Mario/3.png'
import mario4 from '../assets/Tshirt/Bring your Childhood/Mario/4.png'
import candycrush from '../assets/Tshirt/Bring your Childhood/CandyCrush/main image.jpg'
import candycrush2 from '../assets/Tshirt/Bring your Childhood/CandyCrush/image2.jpg'
import candycrush3 from '../assets/Tshirt/Bring your Childhood/CandyCrush/image3.jpg'
import pubg from '../assets/Tshirt/Bring your Childhood/Pubg/Main.png'
import pubg2 from '../assets/Tshirt/Bring your Childhood/Pubg/2.png'
import pubg3 from '../assets/Tshirts/Bring your Childhood/Pubg/3.png'
import subway from '../assets/Tshirts/Bring your Childhood/Subway Surfer/main.png'
import subway2 from '../assets/Tshirts/Bring your Childhood/Subway Surfer/2.png'
import subway3 from '../assets/Tshirts/Bring your Childhood/Subway Surfer/3.png'
import subway4 from '../assets/Tshirts/Bring your Childhood/Subway Surfer/5.png'
import temple from '../assets/Tshirts/Bring your Childhood/Temple Run/MAin.png'
import temple2 from '../assets/Tshirts/Bring your Childhood/Temple Run/2.png'
import temple3 from '../assets/Tshirts/Bring your Childhood/Temple Run/3.png'
import snake from '../assets/Tshirts/Trap Themed/Trap Red Snake/main image.png'
import snake2 from '../assets/Tshirts/Trap Themed/Trap Red Snake/Front (32).png'
import snake3 from '../assets/Tshirts/Trap Themed/Trap Red Snake/Image2.png'
import snake4 from '../assets/Tshirts/Trap Themed/Trap Red Snake/image3.png'
import snake5 from '../assets/Tshirts/Trap Themed/Trap Red Snake/Back (9).png'
import snake6 from '../assets/Tshirts/Trap Themed/Trap Red Snake/Size Chart (3).png'






// same goes on for importing all the images and using them in different products!!!!!!!
import { Product } from '../types';

export interface SizeChart {
  size: string;
  chest: string;
  length: string;
  shoulder: string;
  sleeve: string;
}

export interface DeliveryInfo {
  standardDelivery: string;
  expressDelivery: string;
  pincodeDelivery: boolean;
}

export interface KeyHighlights {
  design?: string;
  fit?: string;
  neck?: string;
  occasion?: string;
  sleeveStyle?: string;
  washCare?: string;
}

export const products: Product[] = [
  {
    id: 1,  // so we have id for different products like1,2,3,4.....
    name: 'TRAP “Super Mario Legacy” Tee',
    brandLogo: mario,
    images: [
      mario,
      mario2,
      mario3,
      mario4,
      '/assets/Tshirts/Bring your Childhood/Mario/Mario-detail.png',
      '/assets/Tshirts/Bring your Childhood/Mario/Mario-wear.png'
    ],
    price: '839 Rs.',
    availability: 'In Stock',
    category: 'T-Shirts',
    collection: 'Bring your Childhood',
    description: 'Old School Vibes. Game-On Mentality.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isFeatured: true,
    isNewArrival: true,
    keyHighlights: {
      design: 'Mario in action, with a motivational quote backdrop from the world of the Mushroom Kingdom',
      fit: 'Oversized',
      neck: 'Round Neck',
      occasion: 'Street Wear',
      sleeveStyle: 'Half Sleeve',
      washCare: 'Gentle Machine Wash'
    },
    fullDescription: 'It’s-a-me, your new favorite tee! This one’s for every 90s kid, console junkie, and dream chaser. Whether you’re dodging Goombas or real-life problems — this shirt reminds you: “Keep jumping. Keep going. The game isn’t over until you win.”',
    manufactureAndCare: 'Made from 100% premium cotton. Machine wash cold, tumble dry low. Do not bleach. Iron on reverse side if needed.',
    returnPolicy: 'Returns & Exchange available. Items must be unworn, unwashed, and with original tags attached. You must contact costumer care for it within one day.',
    deliveryInfo: {
      standardDelivery: '6-7 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [2, 7, 11] /// these are the product details you can edit/modify them and when done with the edits
  },
  {
    id: 2,
    name: 'Candy Crush T-Shirt',
    brandLogo: '/assets/images/default-featured.png',
    images: [
      candycrush,
      candycrush2,
      candycrush3,
      '/assets/images/default-featured.png'],
    price: 'Rs. 839',
    availability: 'Few Left',
    category: 'T-Shirts',
    collection: 'Bring your Childhood',
    description: 'Life’s a game—crush it in style.',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true,
    keyHighlights: {
      design: 'Full-Color Game-Inspired Back Print – Packed with candy graphics and nostalgic vibes',
      fit: 'Oversized',
      neck: 'Round Neck',
      occasion: 'Street Wear',
      sleeveStyle: 'Half Sleeve',
      washCare: 'Machine Washable'
    },
    fullDescription: 'This one’s for the sweet tooths and silent grinders. The front? Minimal, nostalgic flex with the OG Candy Crush logo. Flip it and boom—your whole childhood lights up. A full back graphic bursting with color, candy pieces, and that signature TRAP streetwear edge. It’s playful, it’s iconic, and it hits harder than a sugar rush.',
    manufactureAndCare: 'Machine wash cold. Tumble dry low. Do not bleach.',
    returnPolicy: 'Returns & Exchange available. Items must be unworn, unwashed, and with original tags attached. You must contact costumer care for it within one day.',
    deliveryInfo: {
      standardDelivery: '6-7 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [1, 7, 12]
  },
  {
    id: 3,
    name: 'TRAP “If You Lose, You Die” Tee',
    brandLogo: '/assets/images/default-featured.png',
    images: [
      pubg,
      pubg2,
      pubg3,
      '/assets/images/default-featured.png'],
    price: 'Rs. 849',
    availability: 'Available',
    category: 'T-Shirts',
    collection: 'Bring your Childhood',
    description: 'Not just a game. It’s survival.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isFeatured: true,
    isBestSeller: true,
    keyHighlights: {
      design: 'Front Chest Logo – Minimal PUBG Mobile badge for that gamer rep & Full-Back Action Graphic – Explosions, loot, guns, and the lone warrior ready to win',
      fit: 'Oversized',
      neck: 'Round',
      occasion: 'Street Wear',
      sleeveStyle: 'Full Sleeve',
      washCare: 'Machine Washable'
    },
    fullDescription: 'This tee is for the ones who drop hot, aim true, and never camp. Front stays sleek with the PUBG Mobile badge. But the back? A full-blown battleground—flames, loot, and the iconic warrior standing tall. Message is simple: “If You Lose, You Die.” No excuses. No respawns. Just pure pressure.',
    manufactureAndCare: 'Machine wash cold.',
    returnPolicy: 'Returns & Exchange available. Items must be unworn, unwashed, and with original tags attached. You must contact costumer care for it within one day.',
    deliveryInfo: {
      standardDelivery: '6-7 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [4, 8, 12]
  },
  {
    id: 4,
    name: 'TRAP “Subway Surfers – Run Fast” Tee',
    brandLogo: '/assets/images/default-featured.png',
    images: [
      subway,
      subway2,
      subway3,
      subway4,
      '/assets/images/default-featured.png'],
    price: 'Rs. 845',
    availability: 'Available',
    category: 'T-Shirts',
    collection: 'Bring your Childhood',
    description: 'Run Fast. Chase Your Dream.',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true
        keyHighlights: {
      design: 'Front Chest Logo: Subway Surfers style graphic — clean, bold, and iconic & Back Print: Main characters mid-run, coins flying, obstacles dropping — pure arcade chaos',
      fit: 'Oversized',
      neck: 'Round',
      occasion: 'Street Wear',
      sleeveStyle: 'Full Sleeve',
      washCare: 'Machine Washable'
    },
    fullDescription: 'It’s not just about dodging trains, it’s about dodging excuses. This tee brings back that endless-runner energy—where speed, style, and strategy matter. From skater kids to street hustlers, this one’s for every dream chaser who never hits pause.',
    manufactureAndCare: 'Machine wash cold.',
    returnPolicy: 'Returns & Exchange available. Items must be unworn, unwashed, and with original tags attached. You must contact costumer care for it within one day.',
    deliveryInfo: {
      standardDelivery: '6-7 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
      youMayAlsoLike: [5, 9, 11]
  },
  {
    id: 5,
    name: 'TRAP “Temple Hustle” Tee',
    brandLogo: '/assets/images/default-featured.png',
    images: [
      temple,
      temple2,
      temple3,
      '/assets/images/default-featured.png'],
    price: 'Rs. 839',
    availability: 'Available',
    category: 'T-Shirts',
    collection: 'Bring your Childhood',
    description: 'Run for Coins. Run from Demons. Run for Your Life.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isFeatured: true
     keyHighlights: {
      design: 'Front: Minimalist TEMPLE RUN logo – rugged and mysterious & Back: Bold full graphic with Guy Dangerous mid-run, surrounded by diamonds, coins & the Temple’s wrath',
      fit: 'Oversized',
      neck: 'Round Neck',
      occasion: 'Street Wear',
      sleeveStyle: 'Half Sleeve',
      washCare: 'Gentle Machine Wash'
    },
    fullDescription: 'Straight from the golden jungle of nostalgia, this tee brings back those Temple Run nights—. Swiping left, dodging fire traps, and sprinting like your life depends on it. Because real life? Same vibes. Obstacles. No pause. No mercy. Just keep running.',
    manufactureAndCare: 'Made from 100% premium cotton. Machine wash cold, tumble dry low. Do not bleach. Iron on reverse side if needed.',
    returnPolicy: 'Returns & Exchange available. Items must be unworn, unwashed, and with original tags attached. You must contact costumer care for it within one day.',
    deliveryInfo: {
      standardDelivery: '6-7 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [4, 9, 12]
  },
  {
    id: 6,
    name: 'TRAP Snake Emblem Tee',
    brandLogo: '/assets/images/default-featured.png',
    images: [
      snake,
      snake2,
      snake3,
      snake4,
      snake5,
      snake6,
      '/assets/images/default-featured.png'],
    price: 'Rs. 635',
    availability: 'Available in all stores',
    category: 'T-shirts',
    collection: 'Trap Themed',
    description: 'Unleash your inner edge with the bold "TRAP" vertical logo, wrapped by a venomous red serpent—clean, fierce, and unapologetically street.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isFeatured: true,
    isNewArrival: true
      keyHighlights: {
      design: 'Striking snake & TRAP lettering in blood red',
      fit: 'Regular Fit',
      neck: 'Round Neck',
      occasion: 'Street Wear',
      sleeveStyle: 'Half Sleeve',
      washCare: 'Gentle Machine Wash'
    },
    fullDescription: 'Premium Fabric – Ultra-soft 100% cotton for all-day comfort. Street-Ready Design – Striking snake & TRAP lettering in blood red. Minimal & Fierce – Compact artwork that pops without overpowering. Fade-Resistant Print – Built to last through heavy wear and wash. Perfect Fit – Regular unisex cut for both style and movement. Crafted for the Culture – Designed by TRAP for the streets, not the shelf.',
    manufactureAndCare: 'Made from 100% premium cotton. Machine wash cold, tumble dry low. Do not bleach. Iron on reverse side if needed.',
    returnPolicy: 'Returns & Exchange available. Items must be unworn, unwashed, and with original tags attached. You must contact costumer care for it within one day.',
    deliveryInfo: {
      standardDelivery: '6-7 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [7, 11, 15]
  },
  {
    id: 7,
    name: 'Graphic Print T-Shirt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$49.99',
    availability: 'Available online only',
    category: 'T-Shirts',
    collection: 'Art Collection',
    description: 'Unique graphic print t-shirt with artistic design.',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true
  },
  {
    id: 8,
    name: 'Leather Backpack',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$149.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Premium Collection',
    description: 'Handcrafted genuine leather backpack with multiple compartments.',
    sizes: ['One Size'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 9,
    name: 'Wool Beanie',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$29.99',
    availability: 'Available online only',
    category: 'Accessories',
    collection: 'Winter Collection',
    description: 'Warm and stylish wool beanie for cold weather.',
    sizes: ['One Size'],
    isFeatured: true
  },
  {
    id: 10,
    name: 'Cargo Pants',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$69.99',
    availability: 'Available in all stores',
    category: 'Pants',
    collection: 'Urban Collection',
    description: 'Functional cargo pants with multiple pockets.',
    sizes: ['28', '30', '32', '34', '36'],
    isFeatured: true
  },
  {
    id: 11,
    name: 'Summer Shorts',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$39.99',
    availability: 'Available online only',
    category: 'Shorts',
    collection: 'Summer Collection',
    description: 'Lightweight and comfortable summer shorts.',
    sizes: ['28', '30', '32', '34'],
    isNewArrival: true
  },
  {
    id: 12,
    name: 'Formal Shirt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$89.99',
    availability: 'Available in all stores',
    category: 'Shirts',
    collection: 'Formal Collection',
    description: 'Classic formal shirt for professional settings.',
    sizes: ['S', 'M', 'L', 'XL'],
    isBestSeller: true
  },
  {
    id: 13,
    name: 'Running Shoes',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$129.99',
    availability: 'Available online only',
    category: 'Footwear',
    collection: 'Sports Collection',
    description: 'High-performance running shoes with advanced cushioning.',
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 14,
    name: 'Knit Sweater',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$79.99',
    availability: 'Available in all stores',
    category: 'Sweaters',
    collection: 'Winter Collection',
    description: 'Cozy knit sweater for cold weather.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 15,
    name: 'Leather Belt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$49.99',
    availability: 'Available online only',
    category: 'Accessories',
    collection: 'Premium Collection',
    description: 'Genuine leather belt with classic buckle.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 16,
    name: 'Track Pants',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$59.99',
    availability: 'Available in all stores',
    category: 'Pants',
    collection: 'Sports Collection',
    description: 'Comfortable track pants for casual wear.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 17,
    name: 'Polo Shirt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$45.99',
    availability: 'Available online only',
    category: 'Shirts',
    collection: 'Casual Collection',
    description: 'Classic polo shirt for casual occasions.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 18,
    name: 'Winter Gloves',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$34.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Winter Collection',
    description: 'Warm and waterproof winter gloves.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 19,
    name: 'Swim Shorts',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$29.99',
    availability: 'Available online only',
    category: 'Swimwear',
    collection: 'Summer Collection',
    description: 'Quick-dry swim shorts for beach and pool.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 20,
    name: 'Baseball Cap',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$24.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Street Style',
    description: 'Classic baseball cap with adjustable strap.',
    sizes: ['One Size'],
    keyHighlights: {
      design: 'Adjustable Strap',
      fit: 'Classic Design',
      neck: 'One Size Fits Most',
      occasion: 'Casual Wear',
      sleeveStyle: 'N/A',
      washCare: 'UV Protection'
    },
    fullDescription: 'A timeless baseball cap featuring an adjustable strap for the perfect fit. The classic design makes it versatile for any casual outfit.',
    manufactureAndCare: 'Hand wash cold. Air dry. Do not bleach.',
    returnPolicy: '30 days return policy. Items must be unworn and in original condition with tags attached.',
    deliveryInfo: {
      standardDelivery: '2-4 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [8, 9, 15]
  }
];

// Helper functions to get products by different criteria
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNewArrival);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductsByCollection = (collection: string): Product[] => {
  return products.filter(product => 
    product.collection?.toLowerCase() === collection.toLowerCase()
  );
};

export const getSimilarProducts = (productId: number): Product[] => {
  const product = getProductById(productId);
  if (!product?.youMayAlsoLike) return [];
  return product.youMayAlsoLike.map(id => getProductById(id)).filter(Boolean) as Product[];
};

export const getAllProducts = (): Product[] => {
  return products;
}; 
