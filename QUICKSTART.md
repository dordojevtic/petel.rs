# Quick Start Guide - Petel Website

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```
Visit: http://localhost:4321

### 3. Build for Production
```bash
pnpm build
```

## 📂 Project Overview

### Key Files to Know

**Content Management**:
- `src/data/products.json` - Add/edit products here
- `src/data/categories.json` - Manage product categories
- `src/i18n/config.ts` - Update translations

**Pages**:
- `src/pages/index.astro` - Serbian homepage
- `src/pages/en/index.astro` - English homepage
- `src/pages/proizvodi/` - Serbian products
- `src/pages/en/products/` - English products

**Components**:
- `src/components/layout/` - Header, Footer, LanguageSwitcher
- `src/components/products/` - ProductCard, ProductGrid, ProductSearch
- `src/components/seo/` - SEO and structured data

**Configuration**:
- `astro.config.mjs` - Astro configuration
- `tsconfig.json` - TypeScript settings
- `package.json` - Project dependencies

## ✏️ Common Tasks

### Add a New Product

1. Open `src/data/products.json`
2. Copy an existing product object
3. Update all fields (id, slugs, names, descriptions, etc.)
4. Add product image to `public/images/products/`
5. Rebuild: `pnpm build`

Example:
```json
{
  "id": "prod-007",
  "slug_sr": "novi-proizvod",
  "slug_en": "new-product",
  "name_sr": "Novi Proizvod",
  "name_en": "New Product",
  "price": 1000,
  "currency": "RSD",
  "inStock": true,
  "featured": false
}
```

### Update Translations

1. Open `src/i18n/config.ts`
2. Find the `ui` object
3. Add/edit translations in both `sr` and `en` sections
4. Rebuild: `pnpm build`

### Change Site Colors

Edit `src/layouts/BaseLayout.astro` global styles:
```css
/* Primary color */
background-color: #0066cc; /* Change this */
color: #0066cc; /* And this */
```

### Add a New Page

1. Create file in `src/pages/` (Serbian) or `src/pages/en/` (English)
2. Use BaseLayout:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Page Title" description="..." locale="sr">
  <div class="container">
    <h1>Your Content</h1>
  </div>
</BaseLayout>
```

## 🌐 URL Structure

| Page | Serbian | English |
|------|---------|---------|
| Home | `/` | `/en/` |
| Products | `/proizvodi` | `/en/products` |
| Product Detail | `/proizvodi/[slug]` | `/en/products/[slug]` |
| Contact | `/kontakt` | `/en/contact` |

## 🔧 Development Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type check
pnpm check

# Lint
pnpm lint
```

## 📦 What's Included

✅ **6 Sample Products** - LED lights, switches, cables, etc.
✅ **5 Categories** - Organized product categories
✅ **Bilingual Support** - Complete Serbian/English
✅ **Search Function** - Fuzzy search with Fuse.js
✅ **Category Filter** - Filter products by category
✅ **SEO Optimized** - Meta tags, sitemap, structured data
✅ **Responsive Design** - Mobile, tablet, desktop
✅ **Contact Form** - Ready for backend integration

## 🎨 Customization

### Logo
Replace: `public/images/petel-logo.jpg`

### Favicon
Replace: `public/favicon.svg` and `public/favicon.ico`

### Contact Info
Edit: `src/components/layout/Footer.astro`

### Hero Section
Edit: `src/pages/index.astro` (Serbian) or `src/pages/en/index.astro` (English)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 4321
lsof -ti:4321 | xargs kill -9
# Or use different port
pnpm dev -- --port 3000
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules .astro dist
pnpm install
pnpm build
```

### Images Not Showing
- Check image paths in `products.json`
- Ensure images are in `public/images/products/`
- Image URLs should start with `/images/`

## 📱 Testing

### Test Locally
1. Build: `pnpm build`
2. Preview: `pnpm preview`
3. Open: http://localhost:4321

### Test Both Languages
- Serbian: http://localhost:4321/
- English: http://localhost:4321/en/

### Test Search
1. Go to products page
2. Type in search box
3. Results filter in real-time

### Test Category Filter
1. Go to products page
2. Click category buttons
3. URL updates with `?category=...`

## 🚀 Deploy

### Quick Deploy to Vercel
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Or Deploy to Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `pnpm build`
4. Publish directory: `dist`

## 📚 Learn More

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`
- **Astro Docs**: https://docs.astro.build

## 🎯 Next Steps

1. ✅ Review the sample products
2. ✅ Customize colors and branding
3. ✅ Add your real products
4. ✅ Update contact information
5. ✅ Test on mobile devices
6. ✅ Deploy to production
7. ✅ Submit sitemap to Google

## 💡 Tips

- **Images**: Keep under 500KB for best performance
- **Products**: Add at least 3 images per product
- **SEO**: Fill all meta_description fields
- **Keywords**: Use relevant Serbian keywords
- **Testing**: Test both languages before deploying

## 🆘 Need Help?

1. Check the documentation files
2. Review Astro documentation
3. Check the blueprint: `.cursor/plan/petel_e-commerce_blueprint_adf437eb.plan.md`
4. Contact: info@petel.rs

---

**Ready to go!** Start with `pnpm dev` and begin customizing! 🎉
