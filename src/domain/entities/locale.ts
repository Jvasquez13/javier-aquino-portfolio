export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

/** Used when the visitor's browser gives no usable language preference. */
export const DEFAULT_LOCALE: Locale = "en";

export const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);
