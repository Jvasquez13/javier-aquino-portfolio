import { describe, expect, it } from "vitest";
import { negotiateLocale } from "./negotiate-locale";

describe("negotiateLocale", () => {
  it.each([
    ["es-DO,es;q=0.9,en;q=0.8", "es"],
    ["en-US,en;q=0.9,es;q=0.8", "en"],
    ["fr-FR,fr;q=0.9,es;q=0.7", "es"],
    ["en;q=0.4,es;q=0.9", "es"],
    ["ES", "es"],
  ])("%s -> %s", (header, expected) => {
    expect(negotiateLocale(header)).toBe(expected);
  });

  it.each([null, undefined, "", "fr-FR,de;q=0.8", "*", "es;q=0"])("falls back to English for %j", (header) => {
    expect(negotiateLocale(header)).toBe("en");
  });
});
