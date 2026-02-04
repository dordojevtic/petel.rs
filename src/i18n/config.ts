import type { Locale, TranslationKey } from '../types/i18n';

export const languages = {
  sr: 'Srpski',
  en: 'English'
} as const;

export const defaultLang: Locale = 'sr';

export const ui = {
  sr: {
    'nav.home': 'Početna',
    'nav.products': 'Proizvodi',
    'nav.contact': 'Kontakt',
    'nav.about': 'O nama',
    'product.price': 'Cena',
    'product.inStock': 'Na stanju',
    'product.outOfStock': 'Nema na stanju',
    'product.specifications': 'Specifikacije',
    'product.viewDetails': 'Pogledaj detalje',
    'search.placeholder': 'Pretražite proizvode...',
    'search.noResults': 'Nema rezultata pretrage',
    'filter.category': 'Kategorija',
    'filter.apply': 'Primeni filter',
    'filter.clear': 'Obriši filter',
    'filter.priceRange': 'Cenovni opseg',
    'contact.title': 'Kontaktirajte nas',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'footer.rights': 'Sva prava zadržana'
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.about': 'About',
    'product.price': 'Price',
    'product.inStock': 'In Stock',
    'product.outOfStock': 'Out of Stock',
    'product.specifications': 'Specifications',
    'product.viewDetails': 'View Details',
    'search.placeholder': 'Search products...',
    'search.noResults': 'No search results',
    'filter.category': 'Category',
    'filter.apply': 'Apply Filter',
    'filter.clear': 'Clear Filter',
    'filter.priceRange': 'Price Range',
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'footer.rights': 'All rights reserved'
  }
} as const;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
