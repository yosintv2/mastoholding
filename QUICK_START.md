# Quick Start Guide - Masto Holdings Website

Get your website up and running in 5 minutes!

## ⚡ 5-Minute Setup

### 1. Install Dependencies (1 minute)
```bash
cd mastoholdings
npm install
```

### 2. Start Development Server (30 seconds)
```bash
npm run dev
```

Visit: `http://localhost:3000`

### 3. Explore the Site (2 minutes)
- Homepage with all sections
- Browse About, Companies, Leadership, etc.
- Check blog, careers, contact pages
- Test mobile responsiveness

### 4. Make Your First Change (1.5 minutes)
```bash
# Edit a company
nano src/data/companies.ts

# Or add a blog post
nano src/data/blog.ts

# Or edit the homepage
nano src/pages/index.astro
```

Changes save automatically with hot reload!

---

## 📱 Quick Links

| Page | URL | File |
|------|-----|------|
| Homepage | `/` | `src/pages/index.astro` |
| About | `/about` | `src/pages/about.astro` |
| Companies | `/companies` | `src/pages/companies.astro` |
| Leadership | `/leadership` | `src/pages/leadership.astro` |
| News | `/news` | `src/pages/news.astro` |
| Blog Post | `/news/slug-here` | `src/pages/news/[slug].astro` |
| Sustainability | `/sustainability` | `src/pages/sustainability.astro` |
| Careers | `/careers` | `src/pages/careers.astro` |
| Contact | `/contact` | `src/pages/contact.astro` |

---

## 🎨 Most Common Edits

### Add a Company
Edit `src/data/companies.ts`:
```typescript
{
  id: 'new-company',
  name: 'Company Name',
  description: 'Brief description of the company.',
  sector: 'Technology & Software',
  established: 2026,
  featured: true,
},
```

### Add a Blog Post
Edit `src/data/blog.ts`:
```typescript
{
  id: 'post-slug',
  title: 'Blog Post Title',
  slug: 'blog-post-slug',
  excerpt: 'Brief summary of the post.',
  category: 'Business',
  author: 'Your Name',
  publishedDate: new Date('2026-01-15'),
  content: `<p>Full HTML content here...</p>`,
  featured: true,
},
```

### Update Team Member
Edit `src/data/leadership.ts`:
```typescript
{
  id: 'member-id',
  name: 'Name',
  position: 'Position',
  bio: 'Biography text.',
  expertise: ['Skill 1', 'Skill 2'],
},
```

### Update FAQ
Edit `src/data/faqs.ts`:
```typescript
{
  id: 'faq-id',
  question: 'Your question?',
  answer: 'Your answer here.',
  category: 'Company',
},
```

### Change Colors
Edit `src/styles/global.css`:
```css
:root {
  --color-navy: #0A1F44;
  --color-gold: #D4AF37;
  --color-white: #FFFFFF;
}
```

---

## 🚀 Deploy to Cloudflare Pages

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Step 2: Connect Cloudflare
1. Go to https://pages.cloudflare.com
2. Click "Create project"
3. Connect your GitHub repo
4. Build settings:
   - Framework: Astro
   - Build command: `npm run build`
   - Build output: `dist`
5. Click Deploy!

### Step 3: Add Domain
1. In Cloudflare Pages, click your project
2. Go to Custom domains
3. Add mastoholdings.com
4. Point domain DNS to Cloudflare nameservers

**Done!** Your site is live! 🎉

---

## 📊 Important Files

### Data Files (What to Edit for Content)
```
src/data/
  ├── companies.ts      ← Portfolio companies
  ├── leadership.ts     ← Team members
  ├── blog.ts          ← Blog posts
  ├── faqs.ts          ← FAQ items
  └── timeline.ts      ← Milestones
```

### Component Files (UI Building Blocks)
```
src/components/
  ├── Navigation.astro  ← Top menu
  ├── Footer.astro      ← Bottom section
  ├── Hero.astro        ← Homepage hero
  ├── About.astro       ← About section
  ├── Companies.astro   ← Companies section
  ├── Timeline.astro    ← Timeline section
  ├── News.astro        ← News/blog section
  └── FAQ.astro         ← FAQ section
```

### Page Files (Full Pages)
```
src/pages/
  ├── index.astro               ← Homepage
  ├── about.astro               ← About page
  ├── companies.astro           ← Companies page
  ├── leadership.astro          ← Leadership page
  ├── sustainability.astro      ← Sustainability page
  ├── careers.astro             ← Careers page
  ├── contact.astro             ← Contact page
  ├── news.astro                ← News listing
  └── news/[slug].astro         ← Individual blog posts
```

### Style File
```
src/styles/
  └── global.css    ← All colors, fonts, global styles
```

---

## 🔍 SEO & Metadata

### Update Homepage Title & Description
Edit `src/pages/index.astro`:
```astro
---
const title = 'Your Title Here';
const description = 'Your description here';
---
```

### Update Page Title & Description
Each page at top has:
```astro
const title = 'Page Title';
const description = 'Page description';
```

### Update Company Name & Site URL
Edit `src/lib/seo.ts` to change:
- `'name': 'Masto Holdings'`
- `site: 'https://mastoholdings.com'`

---

## 📱 Mobile Testing

### Quick Mobile Test
```bash
npm run build
npm run preview
```

Then open on your phone:
- Get your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
- Visit: `http://YOUR_IP:3000`

### Responsive Testing
- Chrome DevTools: F12, then Ctrl+Shift+M
- Test all screen sizes
- Check touch interactions

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :3000
kill -9 <PID>

# Or use different port:
npm run dev -- --port 3001
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Images Not Showing
- Images must be in `public/` folder
- Reference as `/image-name.jpg`
- Use relative paths for assets

### Styling Not Updating
- Check `src/styles/global.css`
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server

---

## 📈 Performance Tips

### Optimize Images
```bash
# Use imagemin or TinyPNG
# Recommended: 80% quality JPEG, 70% quality PNG
```

### Minify CSS/JS
- Astro does this automatically in production

### Enable Caching
- Cloudflare caches automatically
- Check Cache Rules in Cloudflare dashboard

### Monitor Speed
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (Chrome DevTools)

---

## 📊 Analytics Setup

### Google Analytics
1. Get GA Measurement ID
2. Add to `src/layouts/BaseLayout.astro`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Google Search Console
1. Add property at https://search.google.com/search-console
2. Verify domain ownership
3. Submit sitemap.xml

---

## 🔐 Security Checklist

- [x] HTTPS enabled (automatic with Cloudflare)
- [x] No sensitive data in code
- [x] Environment variables for secrets
- [x] Secure headers configured
- [x] Form validation
- [x] NoSQL injection protection

---

## 📞 Quick Help

### npm Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run type-check # Check TypeScript errors
npm run lint       # Run linter
```

### Useful Resources
- Astro Docs: https://docs.astro.build
- Deployment Guide: Read `DEPLOYMENT_GUIDE.md`
- SEO Checklist: Read `SEO_CHECKLIST.md`
- Full Project Info: Read `PROJECT_SUMMARY.md`

---

## 🎯 Your First Day Checklist

- [ ] Clone the repository
- [ ] Run `npm install`
- [ ] Start dev server with `npm run dev`
- [ ] Browse the website (localhost:3000)
- [ ] Add a test blog post
- [ ] Edit a company
- [ ] Push to GitHub
- [ ] Connect to Cloudflare
- [ ] Add your domain
- [ ] Set up Google Search Console
- [ ] Celebrate! 🎉

---

## 🚀 Your First Week

- [ ] Review all pages and update content
- [ ] Add your own blog posts (target 2-4)
- [ ] Update team information
- [ ] Customize colors and branding
- [ ] Set up email for contact form
- [ ] Monitor analytics
- [ ] Check SEO rankings

---

## 💡 Pro Tips

1. **Use consistent naming**: Keep slugs lowercase with hyphens
2. **Write for SEO**: Include keywords naturally in content
3. **Update regularly**: Fresh content ranks better
4. **Monitor analytics**: Track what works
5. **Test on mobile**: Always check mobile version
6. **Backup your content**: Keep git history clean
7. **Use descriptive titles**: Good for SEO and UX
8. **Add internal links**: Link related content
9. **Optimize images**: Compress before upload
10. **Stay current**: Update outdated information

---

## 📞 Getting Help

**Website doesn't work?**
→ Check the error message and search in Astro docs

**Need to add a feature?**
→ Check existing components first, then Astro docs

**Want better SEO?**
→ Read the SEO_CHECKLIST.md file

**Deployment issues?**
→ Read the DEPLOYMENT_GUIDE.md file

---

**Ready? Start with:** `npm install && npm run dev` 🚀

Questions? Email: contact@mastoholdings.com
