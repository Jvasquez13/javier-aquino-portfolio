import { describe, expect, it } from "vitest";
import { monogram } from "./monogram";

describe("monogram", () => {
  it.each([
    ["Universidad Iberoamericana (UNIBE)", "UNIBE"],
    ["Instituto Tecnológico de las Américas (ITLA)", "ITLA"],
    ["International Association for Software Quality (AICS)", "AICS"],
    ["Microsoft", "MI"],
    ["CertiProf", "CE"],
    ["Open University", "OU"],
  ])("%s -> %s", (name, expected) => {
    expect(monogram(name)).toBe(expected);
  });
});
