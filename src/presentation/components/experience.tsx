import type { Experience as ExperienceEntity } from "@/domain/entities/career";
import { formatPeriod } from "@/domain/services/format-date";
import type { Dictionary } from "../i18n/dictionary";

export function Experience({
  items,
  t,
  dates,
}: {
  items: readonly ExperienceEntity[];
  t: Dictionary["experience"];
  dates: Dictionary["dates"];
}) {
  return (
    <section id="experiencia">
      <h2>{t.title}</h2>
      <ol className="timeline">
        {items.map((job) => (
          <li key={job.id}>
            <p className="when">{formatPeriod(job.start, job.end, dates)}</p>
            <h3>{job.role}</h3>
            <p className="company">
              {job.company}, {job.location}
            </p>
            {job.context && <p className="context">{job.context}</p>}
            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
