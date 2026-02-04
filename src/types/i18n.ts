export type Locale = 'sr' | 'en';

export interface LocalizedContent {
  sr: string;
  en: string;
}

export interface TranslationKeys {
  'nav.home': string;
  'nav.products': string;
  'nav.contact': string;
  'nav.about': string;
  'product.price': string;
  'product.inStock': string;
  'product.outOfStock': string;
  'product.specifications': string;
  'product.viewDetails': string;
  'search.placeholder': string;
  'search.noResults': string;
  'filter.category': string;
  'filter.apply': string;
  'filter.clear': string;
  'filter.priceRange': string;
  'contact.title': string;
  'contact.address': string;
  'contact.phone': string;
  'contact.email': string;
  'footer.rights': string;
}

export type TranslationKey = keyof TranslationKeys;
