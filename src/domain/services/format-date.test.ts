import { describe, expect, it } from "vitest";
import { formatMonthYear, formatPeriod, type DateLabels } from "./format-date";

const en: DateLabels = {
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  present: "Present",
};
const es: DateLabels = {
  months: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  present: "actualidad",
};

describe("formatMonthYear", () => {
  it("formats an ISO month in each language", () => {
    expect(formatMonthYear("2024-09", en)).toBe("Sep 2024");
    expect(formatMonthYear("2024-09", es)).toBe("sep 2024");
  });

  it.each(["2024-13", "2024-00", "2024", "09/2024", ""])("rejects %j", (value) => {
    expect(() => formatMonthYear(value, en)).toThrow(/YYYY-MM/);
  });
});

describe("formatPeriod", () => {
  it("shows a closed period", () => {
    expect(formatPeriod("2023-12", "2025-04", en)).toBe("Dec 2023 – Apr 2025");
  });

  it("shows an ongoing period with the localized word", () => {
    expect(formatPeriod("2025-04", null, en)).toBe("Apr 2025 – Present");
    expect(formatPeriod("2025-04", null, es)).toBe("abr 2025 – actualidad");
  });
});
