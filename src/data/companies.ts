import type { Company } from '../types';

export const companies: Company[] = [
  {
    id: 'masto-drinks',
    name: 'Masto Drinks & Breweries',
    description: 'Premium beverage company focused on craft spirits, brewing excellence, and sustainable production practices across South Asia.',
    sector: 'Drinks & Breweries',
    established: 2026,
    featured: true,
  },
  {
    id: 'masto-tech',
    name: 'Masto Technologies',
    description: 'Cutting-edge technology solutions providing cloud infrastructure, AI-driven analytics, and enterprise software for digital transformation.',
    sector: 'Technology & Software',
    established: 2026,
    featured: true,
  },
  {
    id: 'masto-digital',
    name: 'Masto Digital Platforms',
    description: 'Digital ecosystem including mobile applications, SaaS products, and digital marketplaces serving millions of users across Asia.',
    sector: 'Digital Platforms',
    featured: true,
  },
  {
    id: 'masto-transport',
    name: 'Masto Transport & Logistics',
    description: 'Integrated logistics and transportation network providing supply chain solutions, fleet management, and last-mile delivery services.',
    sector: 'Transportation',
    featured: false,
  },
  {
    id: 'masto-sports',
    name: 'Masto Sports Ventures',
    description: 'Sports management, athlete representation, and sports media company focused on Asian sporting events and entertainment.',
    sector: 'Sports & Entertainment',
    featured: true,
  },
  {
    id: 'masto-capital',
    name: 'Masto Capital Management',
    description: 'Investment firm managing venture capital, private equity, and strategic business acquisitions across multiple sectors.',
    sector: 'Investments',
    featured: false,
  },
  {
    id: 'masto-realty',
    name: 'Masto Realty Group',
    description: 'Real estate developer creating premium commercial and residential spaces, mixed-use complexes, and infrastructure projects.',
    sector: 'Real Estate',
    featured: false,
  },
  {
    id: 'masto-innovation',
    name: 'Masto Innovation Lab',
    description: 'Research and development hub incubating future ventures in emerging technologies, sustainable solutions, and market innovation.',
    sector: 'Future Ventures',
    featured: false,
  },
];

export const sectors = [
  'Drinks & Breweries',
  'Technology & Software',
  'Digital Platforms',
  'Transportation',
  'Sports & Entertainment',
  'Investments',
  'Real Estate',
  'Future Ventures',
];

export const getFeaturedCompanies = () => companies.filter(c => c.featured);
export const getCompaniesBySecter = (sector: string) => companies.filter(c => c.sector === sector);
