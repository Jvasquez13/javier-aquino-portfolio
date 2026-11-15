import type { Project } from "@/domain/entities/project";
import type { ProjectSummary } from "@/application/summarize-projects";
import type { Dictionary } from "../i18n/dictionary";
import { ToolList } from "./tool";

export function Projects({
  projects,
  summary,
  t,
}: {
  projects: readonly Project[];
  summary: ProjectSummary;
  t: Dictionary["projects"];
}) {
  return (
    <section id="proyectos">
      <h2>{t.title}</h2>
      <p className="section-note">{t.note(summary.pass, summary.total)}</p>
      <ul className="cards">
        {projects.map((project) => (
          <li key={project.id} className="card" data-status={project.status}>
            <p className="status">{t.status[project.status]}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ToolList items={project.stack} />
            {project.repoUrl && (
              <p className="card-link">
                <a href={project.repoUrl}>{t.viewCode}</a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
