import { DEFAULT_LOCALE, isLocale, type Locale } from "../entities/locale";

/**
 * Picks the best supported locale from an Accept-Language header,
 * e.g. "es-DO,es;q=0.9,en;q=0.8" -> "es". Falls back to the default.
 */
export function negotiateLocale(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      const weight = q ? Number(q.slice(2)) : 1;
      return { base: tag.trim().toLowerCase().split("-")[0], weight: Number.isNaN(weight) ? 0 : weight };
    })
    .filter((entry) => entry.base && entry.weight > 0)
    .sort((a, b) => b.weight - a.weight);

  return ranked.find((entry) => isLocale(entry.base))?.base as Locale | undefined ?? DEFAULT_LOCALE;
}
