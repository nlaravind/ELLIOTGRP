import {
  BedDouble,
  Bitcoin,
  Building2,
  Coffee,
  GraduationCap,
  Link,
  Plane,
  Sun,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { Vertical } from './types';

export const USER_LOGO_URL = 'https://i.imgur.com/example.png';

export const VERTICALS: Vertical[] = [
  {
    id: 'crypto',
    title: 'ELLIOT CRYPTO',
    description: 'Digital assets, blockchain ecosystems, and innovation across Web3 and emerging Web5 technologies.',
    icon: Bitcoin,
    image: '/images/crypto.jpg',
  },
  {
    id: 'ev',
    title: 'ELLIOT EV BUSINESS',
    description: 'Sustainable luxury electric mobility solutions, charging infrastructure, and next-gen battery technology.',
    icon: Zap,
    image: '/images/ev-business.jpg',
  },
  {
    id: 'ventures',
    title: 'ELLIOT VENTURES',
    description: 'Strategic venture building, capital partnerships, and high-growth business development across global markets.',
    icon: Building2,
    image: '/images/real-estate.jpg',
  },
  {
    id: 'blockchain',
    title: 'ELLIOT BLOCKCHAIN',
    description: 'Enterprise-grade decentralized ledger solutions for supply chain, security, and data integrity.',
    icon: Link,
    image: '/images/blockchain.jpg',
  },
  {
    id: 'cafe',
    title: 'CAFE ELLIOT',
    description: 'A premium culinary experience blending artisanal coffee culture with futuristic lounge aesthetics.',
    icon: Coffee,
    image: '/images/cafe.jpg',
  },
  {
    id: 'fintech',
    title: 'ELLIOT FINTECH',
    description: 'AI-driven financial technologies providing seamless banking, payments, and wealth management.',
    icon: TrendingUp,
    image: '/images/fintech.jpg',
  },
  {
    id: 'aviation',
    title: 'ELLIOT AVIATIONS',
    description: 'Private jet charters and fractional ownership for the elite traveler who values time and comfort.',
    icon: Plane,
    image: '/images/aviation.jpg',
  },
  {
    id: 'hospitality',
    title: 'ELLIOT HOSPITALITY',
    description: 'Luxury stays, premium guest experiences, and destination-driven hospitality ventures for modern travelers.',
    icon: BedDouble,
    image: '/images/cafe.jpg',
  },
  {
    id: 'sustainable-energy',
    title: 'ELLIOT SUSTAINABLE ENERGY',
    description: 'Focuses on renewable energy production, storage, and distribution, supporting solar energy, clean power systems, and sustainable energy infrastructure.',
    icon: Sun,
    image: '/images/sustainable-energy.jpg',
  },
  {
    id: 'academy',
    title: 'ELLIOT ACADEMIA',
    description: 'Blockchain and AI certification programmes designed to take learners from beginner level to industry-ready professionals.',
    icon: GraduationCap,
    image: '/images/academy.jpg',
  },
];
