/** Locale-specific words, supplied by the caller so this service stays language-agnostic. */
export interface DateLabels {
  /** Twelve short month names, January first. */
  readonly months: readonly string[];
  /** Word shown for an ongoing period, e.g. "Present". */
  readonly present: string;
}

const ISO_MONTH = /^(\d{4})-(0[1-9]|1[0-2])$/;

function parse(value: string): { year: string; month: number } {
  const match = ISO_MONTH.exec(value);
  if (!match) throw new Error(`Invalid date "${value}": use the YYYY-MM format`);
  return { year: match[1], month: Number(match[2]) };
}

/** ("2024-09") -> "Sep 2024" */
export function formatMonthYear(value: string, labels: DateLabels): string {
  const { year, month } = parse(value);
  return `${labels.months[month - 1]} ${year}`;
}

/** ("2025-04", null) -> "Apr 2025 – Present" */
export function formatPeriod(start: string, end: string | null, labels: DateLabels): string {
  const from = formatMonthYear(start, labels);
  const to = end === null ? labels.present : formatMonthYear(end, labels);
  return `${from} – ${to}`;
}
