import type { Project, ProjectStatus } from "@/domain/entities/project";

export type ProjectSummary = Record<ProjectStatus, number> & { total: number };

export function summarizeProjects(projects: readonly Project[]): ProjectSummary {
  const summary: ProjectSummary = { pass: 0, skip: 0, fail: 0, total: projects.length };
  for (const project of projects) summary[project.status] += 1;
  return summary;
}
