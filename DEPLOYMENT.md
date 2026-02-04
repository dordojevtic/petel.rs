# Deployment Guide

## Pre-Deployment Checklist

- [x] All pages built successfully
- [x] Sitemap generated with bilingual support
- [x] SEO meta tags configured
- [x] hreflang tags implemented
- [x] robots.txt configured
- [x] TypeScript types defined
- [x] Product data structured
- [x] Search functionality working

## Environment Setup

No environment variables are required for the static site. All configuration is in `astro.config.mjs`.

## Build Command

```bash
pnpm build
```

Output directory: `dist/`

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   pnpm add -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Configure:
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Framework Preset: Astro

### Option 2: Cloudflare Pages

1. Connect your Git repository to Cloudflare Pages

2. Configure build settings:
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Root directory: `/`

3. Environment variables: None required

### Option 3: Netlify

1. Connect your Git repository to Netlify

2. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - Node version: 18 or higher

3. Add `netlify.toml` (optional):
   ```toml
   [build]
     command = "pnpm build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### Option 4: Static Hosting (Apache/Nginx)

1. Build the site:
   ```bash
   pnpm build
   ```

2. Copy `dist/` contents to your web server

3. Configure server:

   **Apache (.htaccess)**:
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ /$1 [L]
   ```

   **Nginx**:
   ```nginx
   location / {
       try_files $uri $uri/ $uri.html =404;
   }
   ```

## Post-Deployment Tasks

### 1. Verify Sitemap
Visit: `https://petel.rs/sitemap-index.xml`

### 2. Submit to Search Engines

**Google Search Console**:
1. Add property: `https://petel.rs`
2. Verify ownership
3. Submit sitemap: `https://petel.rs/sitemap-index.xml`

**Bing Webmaster Tools**:
1. Add site: `https://petel.rs`
2. Verify ownership
3. Submit sitemap

### 3. Test Bilingual SEO

Use Google's Rich Results Test:
- Test Serbian page: `https://petel.rs/`
- Test English page: `https://petel.rs/en/`
- Verify hreflang tags are present

### 4. Performance Testing

Run Lighthouse audit:
```bash
npx lighthouse https://petel.rs --view
```

Expected scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100

### 5. Test Functionality

- [ ] Homepage loads in both languages
- [ ] Product pages display correctly
- [ ] Search functionality works
- [ ] Category filtering works
- [ ] Language switcher works
- [ ] Contact page accessible
- [ ] All images load
- [ ] Mobile responsive

## Updating Content

### Adding New Products

1. Edit `src/data/products.json`
2. Add product with bilingual fields
3. Add product images to `public/images/products/`
4. Rebuild and deploy:
   ```bash
   pnpm build
   ```

### Adding New Categories

1. Edit `src/data/categories.json`
2. Add category with bilingual fields
3. Update category links in homepage
4. Rebuild and deploy

### Updating Translations

1. Edit `src/i18n/config.ts`
2. Add/modify translation keys in `ui` object
3. Rebuild and deploy

## Monitoring

### Analytics Setup

Add Google Analytics or Plausible to `src/layouts/BaseLayout.astro`:

```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Hotjar for user behavior

## Troubleshooting

### Build Fails

1. Clear cache:
   ```bash
   rm -rf node_modules .astro dist
   pnpm install
   pnpm build
   ```

2. Check Node version (18+ required):
   ```bash
   node --version
   ```

### Images Not Loading

1. Verify images are in `public/images/`
2. Check image paths in `products.json`
3. Ensure images are optimized (< 500KB each)

### Sitemap Not Generated

1. Verify `@astrojs/sitemap` is installed
2. Check `astro.config.mjs` configuration
3. Ensure `site` URL is set correctly

## Performance Optimization

### Image Optimization

Before adding images:
```bash
# Install image optimization tool
pnpm add -D sharp

# Optimize images
npx @squoosh/cli --resize '{width:800}' --webp auto public/images/products/*.jpg
```

### Bundle Size

Check bundle size:
```bash
pnpm build
du -sh dist/
```

Target: < 5MB total

## Security

### Headers (Netlify example)

Create `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

## Backup

Regularly backup:
- `src/data/products.json`
- `src/data/categories.json`
- `public/images/`

## Support

For deployment issues, contact:
- Email: info@petel.rs
- Check Astro docs: https://docs.astro.build/en/guides/deploy/
