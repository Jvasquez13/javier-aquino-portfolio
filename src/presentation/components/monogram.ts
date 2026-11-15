/**
 * Initials shown in place of a logo until the real file is added.
 * "Universidad Iberoamericana (UNIBE)" -> "UNIBE", "Microsoft" -> "MI".
 */
export function monogram(name: string): string {
  const acronym = /\(([A-Za-z]{2,6})\)\s*$/.exec(name)?.[1];
  if (acronym) return acronym.toUpperCase();

  const words = name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((word) => /^[A-ZÁÉÍÓÚÑ]/.test(word));

  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}
