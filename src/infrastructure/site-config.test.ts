import { describe, expect, it } from "vitest";
import { localizedPages, pageUrl, SITE_URL } from "./site-config";

describe("site config", () => {
  it("uses the apex domain over https, without a trailing slash", () => {
    expect(SITE_URL).toBe("https://javieraquino.com");
    expect(SITE_URL.endsWith("/")).toBe(false);
  });

  it("builds one page per language, each pointing at all its alternates", () => {
    const pages = localizedPages();
    expect(pages.map((p) => p.url)).toEqual([pageUrl("es"), pageUrl("en")]);
    for (const page of pages) {
      expect(page.alternates).toEqual({ es: "https://javieraquino.com/es", en: "https://javieraquino.com/en" });
    }
  });
});
