import type { Locale } from '../types/i18n';
import { defaultLang } from './config';

/**
 * Get localized URL path
 * Serbian is the default language and uses root paths
 * English uses /en/ prefix
 */
export function getLocalizedUrl(path: string, locale: Locale): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  if (locale === defaultLang) {
    return `/${cleanPath}`;
  }
  
  return `/${locale}/${cleanPath}`;
}

/**
 * Get alternate URL for language switching
 * Converts between Serbian and English URLs
 */
export function getAlternateUrl(currentUrl: string, targetLocale: Locale): string {
  // Remove /en prefix if present
  const path = currentUrl.replace(/^\/en/, '');
  return getLocalizedUrl(path, targetLocale);
}

/**
 * Get the localized field from an object
 * Example: getLocalizedField(product, 'name', 'sr') returns product.name_sr
 */
export function getLocalizedField<T extends Record<string, any>>(
  obj: T,
  fieldName: string,
  locale: Locale
): string {
  const localizedKey = `${fieldName}_${locale}` as keyof T;
  return obj[localizedKey] as string || '';
}

/**
 * Strip locale prefix from URL path
 */
export function stripLocaleFromPath(path: string): string {
  return path.replace(/^\/(en|sr)/, '') || '/';
}

/**
 * Check if a path is localized
 */
export function isLocalizedPath(path: string, locale: Locale): boolean {
  if (locale === defaultLang) {
    return !path.startsWith('/en');
  }
  return path.startsWith(`/${locale}`);
}
