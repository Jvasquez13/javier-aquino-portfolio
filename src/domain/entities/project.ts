export type ProjectStatus = "pass" | "skip" | "fail";

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly stack: readonly string[];
  /** pass = published and working, skip = planned or in progress, fail = abandoned */
  readonly status: ProjectStatus;
  readonly repoUrl?: string;
}
