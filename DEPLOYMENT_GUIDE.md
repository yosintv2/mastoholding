# Deployment Guide - Masto Holdings Website

This guide covers deploying the Masto Holdings website to various platforms.

## Quick Start - Cloudflare Pages (Recommended)

Cloudflare Pages is recommended for its excellent performance, automatic SSL, and global CDN.

### Prerequisites
- GitHub account
- Cloudflare account (free tier is fine)
- Domain name (mastoholdings.com)

### Step-by-Step Deployment

#### 1. Prepare GitHub Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: Masto Holdings website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/mastoholdings.git
git branch -M main
git push -u origin main
```

#### 2. Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize GitHub and select your repository
6. Configure build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
7. Click **Save and Deploy**

#### 3. Add Domain Name

1. In Cloudflare Dashboard, go to your account
2. Add your domain (mastoholdings.com)
3. Point domain nameservers to Cloudflare's nameservers
4. In Pages project settings, add your custom domain
5. DNS verification will complete automatically

#### 4. Configure Environment Variables (if needed)

In Cloudflare Pages project settings → Environment variables:
- Add any environment-specific variables
- Currently, no env vars are required

### Deployment Workflow

After initial setup, every push to main branch will trigger automatic deployment:

```bash
# Make changes
git add .
git commit -m "Update company information"

# Push to GitHub
git push origin main

# Cloudflare will automatically build and deploy
# Deployment takes ~2-3 minutes
```

---

## Alternative: GitHub Pages

GitHub Pages is free but doesn't include a built-in CDN.

### Prerequisites
- GitHub account with a repository

### Setup Instructions

#### 1. Update Astro Configuration

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io/mastoholdings',
  // ... rest of config
});
```

#### 2. Create GitHub Actions Workflow

The `.github/workflows/deploy.yml` file is already included. Ensure it's committed:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

#### 3. Configure Repository Settings

1. Go to repository **Settings**
2. Navigate to **Pages** in left sidebar
3. Select **Deploy from a branch** OR **GitHub Actions**
4. If branch-based, select `gh-pages` branch and `/ (root)` folder

#### 4. Trigger Deployment

The GitHub Actions workflow will automatically run on push to main. Check progress in:
- **Actions** tab in your repository
- Deployment takes 2-5 minutes

#### 5. Access Your Site

Site will be available at: `https://yourusername.github.io/mastoholdings`

To use custom domain:
1. Add CNAME record: `yourdomain.com CNAME yourusername.github.io`
2. In Settings → Pages, add custom domain
3. Enable "Enforce HTTPS"

---

## Self-Hosted Deployment

For self-hosted VPS, shared hosting, or dedicated server:

### Prerequisites
- Web server (Nginx, Apache, or Node.js)
- SSH access to server
- Domain pointing to server IP

### Deployment Steps

#### 1. Build the Site Locally

```bash
npm run build
# Creates optimized files in dist/ directory
```

#### 2. Upload to Server

Using SCP:
```bash
scp -r dist/* user@yourserver.com:/var/www/mastoholdings/
```

Or using SFTP:
```bash
sftp user@yourserver.com
put -r dist/* /var/www/mastoholdings/
```

#### 3. Configure Web Server

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name mastoholdings.com www.mastoholdings.com;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name mastoholdings.com www.mastoholdings.com;

    # SSL Certificate (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/mastoholdings.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/mastoholdings.com/privkey.pem;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    # Root directory
    root /var/www/mastoholdings;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Rewrite rules for SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache Configuration:**

```apache
<VirtualHost *:80>
    ServerName mastoholdings.com
    ServerAlias www.mastoholdings.com
    Redirect permanent / https://mastoholdings.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName mastoholdings.com
    ServerAlias www.mastoholdings.com
    DocumentRoot /var/www/mastoholdings

    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/mastoholdings.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/mastoholdings.com/privkey.pem

    <Directory /var/www/mastoholdings>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted

        # SPA routing
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>

    # Enable gzip compression
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript
    </IfModule>

    # Cache headers
    <FilesMatch "\.(?:jpg|jpeg|png|gif|ico|css|js)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>

    # Security headers
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-XSS-Protection "1; mode=block"
</VirtualHost>
```

#### 4. Enable HTTPS

Using Let's Encrypt with Certbot:

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Request certificate
sudo certbot certonly --webroot -w /var/www/mastoholdings \
  -d mastoholdings.com -d www.mastoholdings.com

# Auto-renewal is automatic
```

#### 5. Restart Web Server

```bash
# Nginx
sudo systemctl restart nginx

# Apache
sudo systemctl restart apache2
```

---

## Continuous Deployment Script

For automated deployments to self-hosted servers:

**deploy.sh**
```bash
#!/bin/bash

# Build the project
npm run build

# Compress assets
tar -czf dist.tar.gz dist/

# Upload to server
scp dist.tar.gz user@yourserver.com:/tmp/

# SSH into server and extract
ssh user@yourserver.com << 'EOF'
  cd /var/www
  rm -rf mastoholdings-old
  mv mastoholdings mastoholdings-old
  cd /tmp
  tar -xzf dist.tar.gz
  mv dist /var/www/mastoholdings
  chown -R www-data:www-data /var/www/mastoholdings
EOF

# Cleanup
rm dist.tar.gz

echo "Deployment complete!"
```

Usage:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## SSL/TLS Certificates

### Cloudflare Pages
- SSL provided automatically
- Free automatic renewal
- No configuration needed

### GitHub Pages
- Free SSL from GitHub and Let's Encrypt
- Automatic renewal

### Self-Hosted
Using Let's Encrypt:

```bash
# Initial certificate
sudo certbot certonly --webroot -w /var/www/mastoholdings \
  -d mastoholdings.com -d www.mastoholdings.com

# Renewal (automatic with systemd timer)
sudo systemctl enable certbot.timer

# Manual renewal
sudo certbot renew
```

---

## Performance Optimization

### Cloudflare Pages
- Already optimized with edge caching
- Enable "Minify" in Cloudflare dashboard
- Use "Cache Everything" rule for static content

### GitHub Pages
- Uses GitHub's CDN automatically
- Add browser caching headers via Jekyll front matter

### Self-Hosted
Optimize with:
1. **Enable Gzip compression** (see config above)
2. **Browser caching** (set appropriate Cache-Control headers)
3. **CDN** (optional): Cloudflare Free Plan or similar
4. **Image optimization**: Pre-compress images
5. **Monitoring**: Use tools like WebPageTest or GTmetrix

---

## Monitoring & Analytics

### Setup Google Analytics

1. Get Google Analytics ID
2. Add to `src/layouts/BaseLayout.astro`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Monitor Uptime

Use free services like:
- UptimeRobot
- Pingdom (free tier)
- Statuspage.io

### Check SEO

Tools to check performance:
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (built into Chrome DevTools)
- SEMrush (free tier)

---

## Troubleshooting

### Build Fails on Deployment

**Solution**: Check build logs in deployment platform
```bash
# Test locally first
npm run build
npm run preview
```

### 404 Errors After Deploy

**Solution**: Ensure routing configuration is correct
- Cloudflare Pages: Use _redirects file (included)
- GitHub Pages: Check CNAME file
- Self-hosted: Configure web server rewrites

### Slow Page Load

**Solution**: Check:
1. Image sizes (compress if needed)
2. Bundle size (check with bundlesize tools)
3. Enable CDN/caching
4. Use Lighthouse for detailed analysis

### SSL Certificate Errors

**Solution**:
- Cloudflare/GitHub: Wait 5 minutes, clear browser cache
- Self-hosted: Verify certificate file paths are correct

---

## Rollback Deployment

### Cloudflare Pages
- Automatically keeps previous deployments
- Rollback in Pages dashboard under "Deployments"

### GitHub Pages
- Merge revert commit to main branch
- GitHub Actions will redeploy

### Self-Hosted
```bash
# Keep backup of previous version
cp -r /var/www/mastoholdings /var/www/mastoholdings-backup

# Restore from backup if needed
rm -rf /var/www/mastoholdings
mv /var/www/mastoholdings-backup /var/www/mastoholdings
sudo systemctl restart nginx
```

---

## Support

For deployment help:
- **Cloudflare**: https://developers.cloudflare.com/pages/
- **GitHub Pages**: https://docs.github.com/en/pages
- **Astro**: https://docs.astro.build/en/guides/deploy/

Contact: contact@mastoholdings.com
