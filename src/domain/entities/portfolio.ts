import type { Certification, Education, Experience } from "./career";
import type { Profile } from "./profile";
import type { Project } from "./project";

export interface SkillGroup {
  readonly name: string;
  readonly items: readonly string[];
}

/** Language-neutral Gherkin step keywords; the presentation layer translates them. */
export type StepKeyword = "Given" | "When" | "Then" | "And";

export interface ScenarioStep {
  readonly keyword: StepKeyword;
  readonly text: string;
}

/** A short BDD scenario about the candidate's work, shown in the hero. */
export interface Scenario {
  readonly file: string;
  readonly feature: string;
  readonly name: string;
  readonly steps: readonly ScenarioStep[];
}

export interface Portfolio {
  readonly profile: Profile;
  readonly featuredScenario: Scenario;
  /** Tools shown as brand marks in the hero. Each one must have an icon. */
  readonly featuredTools: readonly string[];
  readonly projects: readonly Project[];
  readonly experience: readonly Experience[];
  readonly skills: readonly SkillGroup[];
  readonly education: readonly Education[];
  readonly certifications: readonly Certification[];
  readonly languages: readonly string[];
}
