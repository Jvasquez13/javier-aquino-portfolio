import type { Certification, Education as EducationEntity } from "@/domain/entities/career";
import { formatMonthYear, formatPeriod } from "@/domain/services/format-date";
import type { Dictionary } from "../i18n/dictionary";
import { Crest } from "./crest";

export function Education({
  education,
  certifications,
  t,
  dates,
}: {
  education: readonly EducationEntity[];
  certifications: readonly Certification[];
  t: Dictionary["education"];
  dates: Dictionary["dates"];
}) {
  return (
    <section id="formacion">
      <h2>{t.title}</h2>
      <div className="two-col">
        <div>
          <h3 className="subhead">{t.studies}</h3>
          <ul className="entries">
            {education.map((item) => (
              <li key={item.id}>
                <Crest name={item.institution} logo={item.logo} />
                <p className="entry-title">{item.degree}</p>
                <p className="meta">
                  {item.institution}, {formatPeriod(item.start, item.end, dates)}
                </p>
                {item.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="subhead">{t.certifications}</h3>
          <ul className="entries">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <Crest name={cert.issuer} logo={cert.logo} />
                <p className="entry-title">{cert.name}</p>
                <p className="meta">
                  {cert.issuer}, {formatMonthYear(cert.date, dates)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
