import { describe, expect, it } from "vitest";
import { LOCALES } from "@/domain/entities/locale";
import { portfolioEn } from "@/infrastructure/content/portfolio-en";
import { portfolioEs } from "@/infrastructure/content/portfolio-es";
import { buildPersonJsonLd, serializeJsonLd } from "./person-json-ld";

const SITE = "https://javieraquino.com";

describe("buildPersonJsonLd", () => {
  it.each([
    ["es", portfolioEs],
    ["en", portfolioEn],
  ] as const)("describes the person from the %s content", (locale, portfolio) => {
    const data = buildPersonJsonLd(portfolio, SITE, `${SITE}/${locale}`);
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe("Javier Eduardo Aquino Vasquez");
    expect(data.jobTitle).toBe(portfolio.profile.role);
    expect(data.worksFor?.name).toBe("Banco Popular Dominicano");
    expect(data.image).toBe(`${SITE}/javier.jpg`);
    expect(data.sameAs.every((url) => url.startsWith("https://"))).toBe(true);
    expect(data.knowsAbout.length).toBeGreaterThan(10);
  });

  it("only lists the employer of the current position, never a past one", () => {
    for (const locale of LOCALES) {
      const portfolio = locale === "es" ? portfolioEs : portfolioEn;
      const data = buildPersonJsonLd(portfolio, SITE, `${SITE}/${locale}`);
      expect(data.worksFor?.name).not.toMatch(/NEORIS/i);
    }
  });
});

describe("serializeJsonLd", () => {
  it("escapes < so the content cannot close the script tag", () => {
    const out = serializeJsonLd({ text: "</script><img onerror=x>" });
    expect(out).not.toContain("<");
    expect(JSON.parse(out).text).toBe("</script><img onerror=x>");
  });
});
