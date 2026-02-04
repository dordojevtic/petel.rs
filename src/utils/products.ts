import type { Product } from '../types/product';

/**
 * Filter products by category
 */
export function filterByCategory(products: Product[], categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId);
}

/**
 * Filter products by stock availability
 */
export function filterByStock(products: Product[], inStock: boolean): Product[] {
  return products.filter(p => p.inStock === inStock);
}

/**
 * Filter products by price range
 */
export function filterByPriceRange(
  products: Product[], 
  minPrice: number, 
  maxPrice: number
): Product[] {
  return products.filter(p => p.price >= minPrice && p.price <= maxPrice);
}

/**
 * Get featured products
 */
export function getFeaturedProducts(products: Product[]): Product[] {
  return products.filter(p => p.featured);
}

/**
 * Sort products by price
 */
export function sortByPrice(products: Product[], ascending: boolean = true): Product[] {
  return [...products].sort((a, b) => 
    ascending ? a.price - b.price : b.price - a.price
  );
}

/**
 * Sort products by name
 */
export function sortByName(products: Product[], locale: 'sr' | 'en', ascending: boolean = true): Product[] {
  return [...products].sort((a, b) => {
    const nameA = locale === 'sr' ? a.name_sr : a.name_en;
    const nameB = locale === 'sr' ? b.name_sr : b.name_en;
    return ascending 
      ? nameA.localeCompare(nameB) 
      : nameB.localeCompare(nameA);
  });
}

/**
 * Get price range from products
 */
export function getPriceRange(products: Product[]): { min: number; max: number } {
  if (products.length === 0) {
    return { min: 0, max: 0 };
  }
  
  const prices = products.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}

/**
 * Get unique categories from products
 */
export function getUniqueCategories(products: Product[]): string[] {
  return Array.from(new Set(products.map(p => p.category)));
}
