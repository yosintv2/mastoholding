export interface SEOMetaTags {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export const generateMetaTags = (meta: SEOMetaTags) => ({
  'og:title': meta.title,
  'og:description': meta.description,
  'og:image': meta.image || 'https://mastoholdings.com/og-image.png',
  'og:url': meta.url || 'https://mastoholdings.com',
  'og:type': meta.type || 'website',
  'twitter:card': 'summary_large_image',
  'twitter:title': meta.title,
  'twitter:description': meta.description,
  'twitter:image': meta.image || 'https://mastoholdings.com/og-image.png',
});

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Masto Holdings',
  'url': 'https://mastoholdings.com',
  'logo': 'https://mastoholdings.com/logo.png',
  'description': 'A diversified investment and holding company focused on creating sustainable businesses and delivering long-term value across multiple sectors.',
  'foundingDate': '2026',
  'foundingLocation': {
    '@type': 'Place',
    'name': 'Nepal',
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Customer Support',
    'email': 'contact@mastoholdings.com',
  },
  'sameAs': [
    'https://linkedin.com/company/mastoholdings',
    'https://twitter.com/mastoholdings',
  ],
  'areaServed': ['NP', 'IN', 'BD', 'LK', 'PK'],
  'knowsAbout': [
    'Technology',
    'Investments',
    'Digital Platforms',
    'Sports Management',
    'Real Estate',
    'Sustainability',
  ],
};

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Masto Holdings',
  'image': 'https://mastoholdings.com/logo.png',
  'description': 'Diversified holding company in Nepal',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'NP',
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'contactType': 'Customer Support',
    'email': 'contact@mastoholdings.com',
  },
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer,
    },
  })),
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url,
  })),
});

export const articleSchema = (article: {
  title: string;
  description: string;
  image?: string;
  author: string;
  publishedDate: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  'headline': article.title,
  'description': article.description,
  'image': article.image || 'https://mastoholdings.com/og-image.png',
  'author': {
    '@type': 'Organization',
    'name': article.author,
  },
  'datePublished': article.publishedDate,
  'publisher': {
    '@type': 'Organization',
    'name': 'Masto Holdings',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://mastoholdings.com/logo.png',
    },
  },
  'url': article.url,
});

export const companySchema = (company: {
  name: string;
  description: string;
  sector: string;
  established?: number;
  website?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': company.name,
  'description': company.description,
  'industryType': company.sector,
  'foundingDate': company.established?.toString(),
  'url': company.website,
  'parentOrganization': {
    '@type': 'Organization',
    'name': 'Masto Holdings',
  },
});

export const jobPostingSchema = (job: {
  title: string;
  description: string;
  location: string;
  salary?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  'title': job.title,
  'description': job.description,
  'hiringOrganization': {
    '@type': 'Organization',
    'name': 'Masto Holdings',
  },
  'jobLocation': {
    '@type': 'Place',
    'address': {
      '@type': 'PostalAddress',
      'addressRegion': job.location,
      'addressCountry': 'NP',
    },
  },
  'baseSalary': job.salary ? {
    '@type': 'PriceSpecification',
    'priceCurrency': 'NPR',
    'price': job.salary,
  } : undefined,
  'url': job.url,
});
