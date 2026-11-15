import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GetPortfolio } from "@/application/get-portfolio";
import { LOCALES, type Locale } from "@/domain/entities/locale";
import { formatPeriod } from "@/domain/services/format-date";
import { dictionaries } from "@/presentation/i18n/dictionary";
import { StaticPortfolioRepository } from "./static-portfolio-repository";

const load = (locale: Locale) => new GetPortfolio(new StaticPortfolioRepository()).execute(locale);

describe.each(LOCALES)("portfolio content (%s)", (locale) => {
  it("has the sections the page renders", async () => {
    const p = await load(locale);
    expect(p.profile.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    expect(p.profile.links.every((l) => l.url.startsWith("https://"))).toBe(true);
    expect(p.projects.length).toBeGreaterThan(0);
    expect(p.experience.length).toBeGreaterThan(0);
  });

  it("uses unique ids per list", async () => {
    const p = await load(locale);
    for (const list of [p.projects, p.experience, p.education]) {
      const ids = list.map((item) => item.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("has valid dates everywhere (formatting throws otherwise)", async () => {
    const p = await load(locale);
    const { dates } = dictionaries[locale];
    for (const item of [...p.experience, ...p.education]) {
      expect(() => formatPeriod(item.start, item.end, dates)).not.toThrow();
    }
    for (const cert of p.certifications) {
      expect(() => formatPeriod(cert.date, null, dates)).not.toThrow();
    }
  });

  it("lists experience from newest to oldest", async () => {
    const { experience } = await load(locale);
    const starts = experience.map((e) => e.start);
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it("has a well-formed Gherkin scenario", async () => {
    const { featuredScenario: s } = await load(locale);
    expect(s.file.endsWith(".feature")).toBe(true);
    expect(s.steps[0].keyword).toBe("Given");
    expect(s.steps.some((step) => step.keyword === "When")).toBe(true);
    expect(s.steps.some((step) => step.keyword === "Then")).toBe(true);
    expect(s.steps.every((step) => step.text.trim().length > 0)).toBe(true);
  });

  it("only references logo files that exist in /public", async () => {
    const p = await load(locale);
    const logos = [...p.education, ...p.certifications].flatMap((item) => (item.logo ? [item.logo.src] : []));
    for (const src of logos) {
      expect(existsSync(path.join(process.cwd(), "public", src)), `${src} is missing`).toBe(true);
    }
  });

  it("links CV files that exist in /public", async () => {
    const { profile } = await load(locale);
    for (const src of [profile.cv.es, profile.cv.en]) {
      expect(src.endsWith(".pdf")).toBe(true);
      expect(existsSync(path.join(process.cwd(), "public", src)), `${src} is missing; run npm run build:cv`).toBe(true);
    }
  });

  it("does not claim a project is published without a repository", async () => {
    const { projects } = await load(locale);
    const publishedWithoutRepo = projects.filter((p) => p.status === "pass" && !p.repoUrl);
    expect(publishedWithoutRepo.map((p) => p.id)).toEqual([]);
  });

  it("only links to secure addresses", async () => {
    const { projects } = await load(locale);
    const links = projects.flatMap((p) => [p.repoUrl, p.reportUrl]).filter((url): url is string => Boolean(url));
    expect(links.filter((url) => !url.startsWith("https://"))).toEqual([]);
  });
});

describe("translations stay in sync", () => {
  it("both languages have the same structure and facts", async () => {
    const [es, en] = await Promise.all([load("es"), load("en")]);

    // Facts that must never differ between languages.
    expect(en.profile.email).toBe(es.profile.email);
    expect(en.profile.links).toEqual(es.profile.links);
    expect(en.profile.photo).toBe(es.profile.photo);
    expect(en.featuredTools).toEqual(es.featuredTools);
    expect(en.certifications.map((c) => [c.date, c.logo])).toEqual(es.certifications.map((c) => [c.date, c.logo]));
    expect(en.education.map((e) => e.logo)).toEqual(es.education.map((e) => e.logo));

    // Same shape: no section, bullet or step left untranslated or forgotten.
    expect(en.profile.about).toHaveLength(es.profile.about.length);
    expect(en.featuredScenario.steps.map((s) => s.keyword)).toEqual(es.featuredScenario.steps.map((s) => s.keyword));
    expect(en.projects.map((p) => [p.id, p.status, p.stack.length])).toEqual(
      es.projects.map((p) => [p.id, p.status, p.stack.length]),
    );
    expect(en.experience.map((e) => [e.id, e.start, e.end, e.highlights.length])).toEqual(
      es.experience.map((e) => [e.id, e.start, e.end, e.highlights.length]),
    );
    expect(en.education.map((e) => [e.id, e.start, e.end, e.notes.length])).toEqual(
      es.education.map((e) => [e.id, e.start, e.end, e.notes.length]),
    );
    expect(en.skills.map((g) => g.items.length)).toEqual(es.skills.map((g) => g.items.length));
    expect(en.languages).toHaveLength(es.languages.length);
  });

  it("does not leave Spanish text in the English version", async () => {
    const en = await load("en");
    const text = JSON.stringify(en);
    for (const spanishWord of [" que ", " del ", "Dirijo", "Lidero", "Experiencia", " y desde "]) {
      expect(text).not.toContain(spanishWord);
    }
  });

  it("has a complete dictionary for every language", () => {
    const keys = (value: unknown): string[] =>
      value && typeof value === "object"
        ? Object.entries(value).flatMap(([k, v]) => [k, ...keys(v).map((sub) => `${k}.${sub}`)])
        : [];
    expect(keys(dictionaries.en).sort()).toEqual(keys(dictionaries.es).sort());
  });
});
