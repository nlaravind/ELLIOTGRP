import { 
  Bitcoin, 
  Zap, 
  Building2, 
  Link, 
  Coffee, 
  TrendingUp, 
  Plane,
  Sun
} from 'lucide-react';
import { Vertical } from './types';

// The logo provided by the user is a gold medallion with a T/E monogram. 
// Since we don't have the exact asset URL hosted persistently, we will render a similar SVG or use this placeholder.
// For this constant file, we define the structure.
export const USER_LOGO_URL = "https://i.imgur.com/example.png"; // Placeholder, we will use an SVG component instead.

export const VERTICALS: Vertical[] = [
  {
    id: 'crypto',
    title: 'ELLIOTT CRYPTO',
    description: 'Digital assets, blockchain ecosystems, and innovation across Web3 and emerging Web5 technologies.',
    icon: Bitcoin,
    image: '/images/crypto.jpg'
  },
  {
    id: 'ev',
    title: 'ELLIOT EV BUSINESS',
    description: 'Sustainable luxury electric mobility solutions, charging infrastructure, and next-gen battery technology.',
    icon: Zap,
    image: '/images/ev-business.jpg'
  },
  {
    id: 'realestate',
    title: 'ELLIOT REAL ESTATE',
    description: 'Ultra-luxury residential and commercial developments redefining skylines across the globe.',
    icon: Building2,
    image: '/images/real-estate.jpg'
  },
  {
    id: 'blockchain',
    title: 'elliott blockchain',
    description: 'Enterprise-grade decentralized ledger solutions for supply chain, security, and data integrity.',
    icon: Link,
    image: '/images/blockchain.jpg'
  },
  {
    id: 'cafe',
    title: 'CAFE ELLIOTT',
    description: 'A premium culinary experience blending artisanal coffee culture with futuristic lounge aesthetics.',
    icon: Coffee,
    image: '/images/cafe.jpg'
  },
  {
    id: 'fintech',
    title: 'ELLIOT FINTECH',
    description: 'AI-driven financial technologies providing seamless banking, payments, and wealth management.',
    icon: TrendingUp,
    image: '/images/fintech.jpg'
  },
  {
    id: 'aviation',
    title: 'ELLIOT AVIATION',
    description: 'Private jet charters and fractional ownership for the elite traveler who values time and comfort.',
    icon: Plane,
    image: '/images/aviation.jpg'
  },
  {
    id: 'sustainable-energy',
    title: 'ELLIOT SUSTAINABLE ENERGY',
    description: 'Focuses on renewable energy production, storage, and distribution, supporting solar energy, clean power systems, and sustainable energy infrastructure.',
    icon: Sun,
    image: '/images/sustainable-energy.jpg'
  }
];
