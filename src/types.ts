export interface Company {
  id: string;
  name: string;
  description: string;
  sector: string;
  logo?: string;
  website?: string;
  established?: number;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  image?: string;
  expertise?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Business' | 'Technology' | 'Investments' | 'Nepal Economy' | 'Startups' | 'Sports Business' | 'Digital Media';
  author: string;
  publishedDate: Date;
  updatedDate?: Date;
  image?: string;
  tags?: string[];
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Milestone {
  year: number;
  title: string;
  description: string;
  achievements?: string[];
}
