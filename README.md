# Masto Holdings - Premium Holding Company Website

A modern, enterprise-grade website built with Astro for Masto Holdings, a diversified investment and holding company in Nepal.

## Features

### 🎯 Core Features
- **Premium Design**: Modern, luxury corporate website design
- **Holding Company Focus**: Portfolio companies management system
- **SEO Optimized**: 100/100 SEO score target with schema markup
- **Performance**: Lightning-fast static site generation
- **Mobile First**: Fully responsive design for all devices
- **Accessibility**: WCAG 2.1 compliant

### 📱 Pages
- **Homepage** with hero section, about, companies showcase, timeline, news, and FAQs
- **About Us** - Company story, vision, mission, and values
- **Companies** - Portfolio companies by sector
- **Leadership** - Executive team profiles
- **News & Blog** - SEO-optimized blog system with categories
- **Sustainability** - ESG framework and commitments
- **Careers** - Job listings and internship program
- **Contact** - Contact form and office information

### 🚀 Technical Stack
- **Framework**: Astro 4.5
- **Language**: TypeScript
- **Styling**: CSS with CSS variables
- **Performance**: Static site generation
- **Hosting**: Ready for Cloudflare Pages or GitHub Pages

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mastoholdings

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Build the static site
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
mastoholdings/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Companies.astro
│   │   ├── Timeline.astro
│   │   ├── News.astro
│   │   └── FAQ.astro
│   ├── layouts/             # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/               # Page routes
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── companies.astro
│   │   ├── leadership.astro
│   │   ├── sustainability.astro
│   │   ├── careers.astro
│   │   ├── contact.astro
│   │   ├── news.astro
│   │   └── news/[slug].astro
│   ├── data/                # Data files
│   │   ├── companies.ts
│   │   ├── leadership.ts
│   │   ├── blog.ts
│   │   ├── faqs.ts
│   │   └── timeline.ts
│   ├── lib/                 # Utilities
│   │   └── seo.ts
│   ├── styles/              # Global styles
│   │   └── global.css
│   └── types.ts             # TypeScript types
├── public/                  # Static assets
├── astro.config.mjs         # Astro configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## Data Management

### Companies
Edit `src/data/companies.ts` to add or modify portfolio companies:

```typescript
export const companies: Company[] = [
  {
    id: 'company-id',
    name: 'Company Name',
    description: 'Company description',
    sector: 'Sector Name',
    established: 2026,
    featured: true,
  },
  // ...
];
```

### Team Members
Edit `src/data/leadership.ts` to manage leadership team:

```typescript
export const leadership: TeamMember[] = [
  {
    id: 'member-id',
    name: 'Name',
    position: 'Position',
    bio: 'Biography',
    expertise: ['Skill 1', 'Skill 2'],
    // ...
  },
];
```

### Blog Posts
Edit `src/data/blog.ts` to add blog articles:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: 'post-id',
    title: 'Article Title',
    slug: 'article-slug',
    excerpt: 'Brief description',
    content: 'Full HTML content',
    category: 'Business',
    author: 'Author Name',
    publishedDate: new Date('2024-01-01'),
    // ...
  },
];
```

### FAQs
Edit `src/data/faqs.ts` to manage FAQ items:

```typescript
export const faqs: FAQItem[] = [
  {
    id: 'faq-id',
    question: 'Question?',
    answer: 'Answer to the question',
    category: 'Category',
  },
];
```

## SEO Features

### Schema Markup
- Organization Schema
- BusinessSchema
- FAQ Schema
- Article Schema
- Breadcrumb Schema
- Custom Company & Job Posting Schemas

### Meta Tags
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Mobile-friendly viewport
- Comprehensive robots meta tags

### Performance
- Optimized images
- CSS minification
- JavaScript optimization
- Fast page load times

## Customization

### Branding Colors
Edit CSS variables in `src/styles/global.css`:

```css
--color-navy: #0A1F44;
--color-dark-navy: #051426;
--color-gold: #D4AF37;
--color-white: #FFFFFF;
--color-accent: #0EA5E9;
```

### Typography
Fonts are loaded from Google Fonts:
- **Serif**: Playfair Display (headings)
- **Sans-serif**: Inter (body text)

Modify `src/layouts/BaseLayout.astro` to change fonts.

### Navigation
Edit `src/components/Navigation.astro` to add/remove navigation items.

## Deployment

### Cloudflare Pages (Recommended)

1. Push your repository to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Create a new site from Git
4. Select your repository
5. Build settings:
   - Framework: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy!

### GitHub Pages

1. Add to `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io/mastoholdings',
  // ...
});
```

2. Push to GitHub
3. GitHub Actions will automatically build and deploy

### Self-Hosted

```bash
# Build production assets
npm run build

# Serve the dist/ directory with any static server
# Example with Python:
python -m http.server 8000 --directory dist

# Or with Node:
npx http-server dist
```

## Domain Configuration

1. Purchase domain (e.g., mastoholdings.com)
2. Update `site` in `astro.config.mjs` to your domain
3. Point domain DNS to:
   - **Cloudflare Pages**: Use Cloudflare nameservers
   - **GitHub Pages**: Add A records pointing to GitHub's servers
   - **Self-hosted**: Point to your server's IP

## Analytics & Tracking

To add Google Analytics or other tracking:

1. Add tracking script to `src/layouts/BaseLayout.astro` inside the `<head>` tag
2. Example Google Analytics:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Performance Optimization

### Image Optimization
- Use Astro's built-in image optimization
- Compress images before upload
- Use modern formats (WebP)

### Code Splitting
- Astro automatically code-splits by page
- No additional configuration needed

### Caching
- Leverage browser caching via HTTP headers
- Cloudflare provides edge caching automatically

## Maintenance

### Regular Tasks
1. Update company information in `src/data/companies.ts`
2. Add new blog posts to `src/data/blog.ts`
3. Update leadership team in `src/data/leadership.ts`
4. Refresh FAQ items in `src/data/faqs.ts`

### SEO Monitoring
- Monitor rankings for target keywords
- Check Core Web Vitals
- Review analytics regularly
- Update content seasonally

## Support & Resources

- [Astro Documentation](https://docs.astro.build)
- [CSS Variables Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org Specifications](https://schema.org)

## License

All rights reserved © 2026 Masto Holdings. All rights reserved.

## Contact

For inquiries about this website:
- Email: contact@mastoholdings.com
- Website: https://mastoholdings.com
