/** Surface the icons sit on (chips and hero tiles). Keep in sync with --surface-2 in globals.css. */
const SURFACE = "#17233f";
const MIN_CONTRAST = 3.5; // WCAG 1.4.11 asks for 3:1 on graphics; leave some margin.

const toRgb = (hex: string): [number, number, number] => {
  const h = hex.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number];
};

const channel = (value: number) => {
  const s = value / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex: string) => {
  const [r, g, b] = toRgb(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

export function contrastRatio(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const toHex = (rgb: readonly number[]) =>
  "#" + rgb.map((v) => Math.round(v).toString(16).padStart(2, "0")).join("").toUpperCase();

/**
 * Returns the brand color as-is when it is readable on the dark surface;
 * otherwise mixes it with white just enough to reach the minimum contrast.
 */
export function readableBrandColor(hex: string): string {
  const base = toRgb(hex);
  for (let t = 0; t <= 1.0001; t += 0.05) {
    const mixed = base.map((c) => c + (255 - c) * t);
    const candidate = toHex(mixed);
    if (contrastRatio(candidate, SURFACE) >= MIN_CONTRAST) return candidate;
  }
  return "#FFFFFF";
}
