# Petel E-commerce Website

A modern, bilingual (Serbian/English) e-commerce website for Petel - a leading supplier of low-voltage electrical equipment.

## 🚀 Features

- **Bilingual Support**: Full Serbian and English localization with proper SEO
- **Static Site Generation**: Lightning-fast performance with Astro SSG
- **SEO Optimized**: 
  - hreflang tags for bilingual SEO
  - JSON-LD structured data
  - Automatic sitemap generation
  - Open Graph and Twitter Card meta tags
- **Product Catalog**: Dynamic product pages with detailed specifications
- **Search & Filter**: Client-side search with Fuse.js
- **Responsive Design**: Mobile-first, fully responsive layout
- **Modern UI**: Clean, professional design with smooth animations

## 📁 Project Structure

```
petel.rs/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, LanguageSwitcher
│   │   ├── products/        # ProductCard, ProductGrid, ProductSearch
│   │   └── seo/             # SEOHead, JsonLD
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout with bilingual support
│   ├── pages/
│   │   ├── index.astro      # Serbian homepage
│   │   ├── kontakt.astro    # Serbian contact page
│   │   ├── proizvodi/       # Serbian products
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── en/              # English pages
│   │       ├── index.astro
│   │       ├── contact.astro
│   │       └── products/
│   ├── data/
│   │   ├── products.json    # Product catalog
│   │   └── categories.json  # Product categories
│   ├── i18n/
│   │   ├── config.ts        # i18n configuration
│   │   └── utils.ts         # i18n helper functions
│   ├── types/
│   │   ├── product.ts       # Product type definitions
│   │   └── i18n.ts          # i18n type definitions
│   └── utils/
│       └── products.ts      # Product utility functions
├── public/
│   ├── images/
│   ├── robots.txt
│   └── favicon.svg
├── astro.config.mjs         # Astro configuration with sitemap
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x
- **Language**: TypeScript (strict mode)
- **Package Manager**: PNPM
- **Search**: Fuse.js for client-side fuzzy search
- **State Management**: Nanostores (for future interactive features)
- **SEO**: @astrojs/sitemap for automatic sitemap generation

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

## 🚀 Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

## 🏗️ Build

Build the site for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 🔍 Type Checking

Run TypeScript type checking:

```bash
pnpm check
```

## 🌐 URL Structure

### Serbian (Default)
- Homepage: `/`
- Products: `/proizvodi`
- Product Detail: `/proizvodi/[slug]`
- Contact: `/kontakt`

### English
- Homepage: `/en/`
- Products: `/en/products`
- Product Detail: `/en/products/[slug]`
- Contact: `/en/contact`

## 📝 Adding Products

Products are stored in `src/data/products.json`. Each product includes:

- Bilingual names, descriptions, and metadata
- Images with alt text in both languages
- Specifications
- Pricing and availability
- SEO keywords and meta descriptions

Example:
```json
{
  "id": "prod-001",
  "slug_sr": "led-sijalica-e27-10w",
  "slug_en": "led-bulb-e27-10w",
  "name_sr": "LED Sijalica E27 10W",
  "name_en": "LED Bulb E27 10W",
  "price": 450,
  "currency": "RSD",
  "inStock": true,
  "featured": true
}
```

## 🎨 Styling

The site uses scoped CSS in Astro components with:
- CSS custom properties for theming
- Responsive design with mobile-first approach
- Smooth transitions and animations
- Accessible color contrasts

## 🔧 Configuration

### Site URL
Update `site` in `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://petel.rs',
  // ...
});
```

### Languages
Modify `src/i18n/config.ts` to add or change languages.

## 📊 SEO Features

- **hreflang tags**: Proper bilingual SEO with alternate language links
- **Canonical URLs**: Prevent duplicate content issues
- **Structured Data**: JSON-LD for products and organization
- **Sitemap**: Automatically generated with i18n support
- **Meta Tags**: Complete Open Graph and Twitter Card support
- **robots.txt**: Configured for optimal crawling

## 🚀 Deployment

The site is optimized for deployment on:

- **Vercel** (Recommended): Zero-config deployment
- **Cloudflare Pages**: Excellent for Serbian users
- **Netlify**: Simple and reliable
- Any static hosting service

### Deploy to Vercel
```bash
pnpm build
# Deploy dist/ folder
```

## 📄 License

Copyright © 2026 Petel. All rights reserved.

## 🤝 Contributing

This is a private project for Petel. For inquiries, contact info@petel.rs
