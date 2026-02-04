export interface Product {
  id: string;
  slug_sr: string;
  slug_en: string;
  sku: string;
  category: string;
  name_sr: string;
  name_en: string;
  description_sr: string;
  description_en: string;
  short_description_sr?: string;
  short_description_en?: string;
  price: number;
  currency: 'RSD' | 'EUR';
  images: ProductImage[];
  specifications: ProductSpecification[];
  inStock: boolean;
  featured?: boolean;
  keywords_sr: string[];
  keywords_en: string[];
  meta_description_sr?: string;
  meta_description_en?: string;
}

export interface ProductImage {
  url: string;
  alt_sr: string;
  alt_en: string;
  isPrimary: boolean;
}

export interface ProductSpecification {
  key_sr: string;
  key_en: string;
  value_sr: string;
  value_en: string;
}

export interface Category {
  id: string;
  slug_sr: string;
  slug_en: string;
  name_sr: string;
  name_en: string;
  description_sr?: string;
  description_en?: string;
}
