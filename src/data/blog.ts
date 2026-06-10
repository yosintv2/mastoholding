import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Future of Technology Investments in South Asia',
    slug: 'future-technology-investments-south-asia',
    excerpt: 'Exploring emerging tech opportunities and investment trends across South Asian markets.',
    category: 'Technology',
    author: 'Masto Insights',
    publishedDate: new Date('2024-12-15'),
    tags: ['Technology', 'Investment', 'South Asia'],
    featured: true,
    content: `
      The technology landscape across South Asia is undergoing a dramatic transformation.
      From artificial intelligence to blockchain, emerging technologies are creating unprecedented
      opportunities for investors and entrepreneurs.

      In this comprehensive analysis, we explore the key trends shaping technology investments
      in the region and Masto Holdings' strategic positioning to capitalize on these opportunities.

      Key areas of focus include:
      - Cloud Infrastructure and Data Centers
      - AI and Machine Learning Solutions
      - Digital Payment Systems
      - E-commerce and Logistics Tech
      - Green Technology and Sustainability Solutions

      The potential for growth in these sectors is immense, with market projections suggesting
      a 40% CAGR over the next five years.
    `,
  },
  {
    id: 'post-2',
    title: 'Building Sustainable Businesses: Masto\'s ESG Framework',
    slug: 'sustainable-businesses-esg-framework',
    excerpt: 'How Masto Holdings integrates ESG principles across its portfolio companies.',
    category: 'Business',
    author: 'Masto Insights',
    publishedDate: new Date('2024-12-10'),
    tags: ['Sustainability', 'ESG', 'Business Ethics'],
    featured: true,
    content: `
      Environmental, Social, and Governance (ESG) principles are no longer optional for
      responsible businesses—they are essential. At Masto Holdings, sustainability is embedded
      in our corporate DNA and guides every investment decision.

      Our ESG Framework covers:
      - Environmental Impact Reduction
      - Employee Welfare and Community Development
      - Board Diversity and Transparent Governance
      - Stakeholder Engagement and Accountability

      We are committed to creating businesses that generate profits while making positive
      contributions to society and the environment.
    `,
  },
  {
    id: 'post-3',
    title: 'Nepal\'s Digital Economy: Opportunities and Challenges',
    slug: 'nepal-digital-economy',
    excerpt: 'An in-depth look at Nepal\'s digital transformation and investment landscape.',
    category: 'Nepal Economy',
    author: 'Market Analysis Team',
    publishedDate: new Date('2024-12-05'),
    tags: ['Nepal', 'Digital Economy', 'Market Analysis'],
    featured: false,
    content: `
      Nepal is experiencing rapid digital transformation with increasing internet penetration
      and digital adoption. This shift presents significant opportunities for technology companies
      and investors.

      Current State:
      - Internet penetration: 75%+ in urban areas
      - Mobile users: 40+ million
      - Digital payment adoption growing at 60% annually
      - Young, tech-savvy population with median age of 24 years

      Masto Holdings is well-positioned to capitalize on these opportunities through our
      portfolio companies in digital platforms, fintech, and e-commerce.
    `,
  },
  {
    id: 'post-4',
    title: 'Venture Capital Trends: Investing in the Future',
    slug: 'venture-capital-trends',
    excerpt: 'Understanding current VC trends and how Masto Capital identifies tomorrow\'s winners.',
    category: 'Investments',
    author: 'Investment Team',
    publishedDate: new Date('2024-11-28'),
    tags: ['Venture Capital', 'Startups', 'Investment'],
    featured: false,
    content: `
      The venture capital landscape is evolving rapidly with new investment patterns and
      market dynamics. Understanding these trends is crucial for making informed investment decisions.

      Key Trends in 2024-2025:
      - Focus on AI and automation
      - Sustainability-focused startups gaining traction
      - Longer fundraising cycles
      - Emphasis on unit economics over growth-at-all-costs
      - Rise of impact investing

      Masto Capital Management actively scouts innovative startups across South Asia,
      providing not just capital but operational expertise and market access.
    `,
  },
  {
    id: 'post-5',
    title: 'The Sports Business Revolution in Asia',
    slug: 'sports-business-revolution-asia',
    excerpt: 'How sports entertainment and management is reshaping the Asian business landscape.',
    category: 'Sports Business',
    author: 'Sports Ventures Team',
    publishedDate: new Date('2024-11-20'),
    tags: ['Sports', 'Entertainment', 'Media'],
    featured: true,
    content: `
      The sports industry in Asia is experiencing unprecedented growth, driven by increasing
      fan engagement, digital streaming, and sponsorship opportunities.

      Market Drivers:
      - Growing middle class with disposable income
      - Digital streaming platforms enabling access
      - Mobile-first audience engagement
      - Youth demographic favoring sports entertainment

      Masto Sports Ventures is positioned at the intersection of traditional sports and
      digital media, creating innovative entertainment experiences for millions of fans.
    `,
  },
  {
    id: 'post-6',
    title: 'Digital Media: The Future of Content Creation',
    slug: 'digital-media-future',
    excerpt: 'Exploring the evolution of digital media and content consumption patterns.',
    category: 'Digital Media',
    author: 'Content Strategy Team',
    publishedDate: new Date('2024-11-12'),
    tags: ['Digital Media', 'Content', 'Technology'],
    featured: false,
    content: `
      Digital media consumption is fundamentally changing how businesses reach audiences.
      Short-form video, interactive content, and personalized experiences are defining
      the next generation of media platforms.

      Key Shifts:
      - Rise of short-form video (TikTok, Reels, YouTube Shorts)
      - Podcast popularity surge
      - Interactive and immersive content
      - Creator economy expansion
      - Personalization through AI

      Masto Digital Platforms is investing heavily in these emerging formats to capture
      growing audiences and advertising opportunities.
    `,
  },
];

export const getFeaturedPosts = () => blogPosts.filter(p => p.featured).slice(0, 3);
export const getPostsByCategory = (category: BlogPost['category']) =>
  blogPosts.filter(p => p.category === category);
export const getPostBySlug = (slug: string) =>
  blogPosts.find(p => p.slug === slug);
