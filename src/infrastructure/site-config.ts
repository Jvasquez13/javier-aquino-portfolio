import { LOCALES, type Locale } from "@/domain/entities/locale";

/** Canonical address of the site (apex domain, no "www"). One place, used by SEO files and metadata. */
export const SITE_URL = "https://javieraquino.com";

export const pageUrl = (locale: Locale): string => `${SITE_URL}/${locale}`;

/** Every public page with its language alternates, for the sitemap. */
export function localizedPages(): readonly { locale: Locale; url: string; alternates: Record<Locale, string> }[] {
  const alternates = Object.fromEntries(LOCALES.map((l) => [l, pageUrl(l)])) as Record<Locale, string>;
  return LOCALES.map((locale) => ({ locale, url: pageUrl(locale), alternates }));
}
