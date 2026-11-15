import { describe, expect, it } from "vitest";
import type { Project } from "@/domain/entities/project";
import { summarizeProjects } from "./summarize-projects";

const project = (id: string, status: Project["status"]): Project => ({
  id,
  title: id,
  description: id,
  stack: [],
  status,
});

describe("summarizeProjects", () => {
  it("groups projects by status", () => {
    const summary = summarizeProjects([project("a", "pass"), project("b", "skip"), project("c", "skip")]);
    expect(summary).toEqual({ pass: 1, skip: 2, fail: 0, total: 3 });
  });
});
