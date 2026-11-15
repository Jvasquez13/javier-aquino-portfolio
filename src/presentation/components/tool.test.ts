import { describe, expect, it } from "vitest";
import { portfolioEn } from "@/infrastructure/content/portfolio-en";
import { iconFor } from "./tool";

describe("iconFor", () => {
  it.each([
    ["Docker", "docker"],
    ["Bruno", "bruno"],
    ["Docker Compose", "docker"],
    ["Jenkins", "jenkins"],
    ["Appium", "appium"],
    ["Claude", "claude"],
    ["WebDriverIO", "webdriverio"],
    ["BDD (Gherkin)", "cucumber"],
    ["K6", "k6"],
    ["Apache JMeter", "apachejmeter"],
    ["Swagger / OpenAPI", "swagger"],
    ["MongoDB", "mongodb"],
    ["Android", "android"],
    ["iOS", "ios"],
    ["Next.js", "nextdotjs"],
  ])("maps %s to its brand mark", (name, slug) => {
    expect(iconFor(name)?.slug).toBe(slug);
  });

  it.each(["Karate", "Playwright", "Codex", "SQL", "Agile / Scrum", "CI/CD", "Core bancario"])(
    "shows %s as text only when no official mark exists",
    (name) => {
      expect(iconFor(name)).toBeUndefined();
    },
  );

  it("has a brand mark for every featured hero tool", () => {
    const missing = portfolioEn.featuredTools.filter((tool) => !iconFor(tool));
    expect(missing).toEqual([]);
  });
});
