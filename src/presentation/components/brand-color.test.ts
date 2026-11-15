import { describe, expect, it } from "vitest";
import { contrastRatio, readableBrandColor } from "./brand-color";

describe("readableBrandColor", () => {
  it("keeps a bright brand color untouched", () => {
    expect(readableBrandColor("2496ED")).toBe("#2496ED"); // Docker blue
  });

  it.each(["000000", "181717", "172B4D", "662D91", "0052CC"])(
    "lightens #%s until it is readable on the dark surface",
    (hex) => {
      const result = readableBrandColor(hex);
      expect(result).not.toBe(`#${hex}`);
      expect(contrastRatio(result, "#17233f")).toBeGreaterThanOrEqual(3.5);
    },
  );

  it("never returns an unreadable color for any input", () => {
    for (const hex of ["000000", "FFFFFF", "808080", "FF0000", "00FF00", "0000FF"]) {
      expect(contrastRatio(readableBrandColor(hex), "#17233f")).toBeGreaterThanOrEqual(3.5);
    }
  });
});
