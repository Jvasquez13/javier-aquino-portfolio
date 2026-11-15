import type { Profile } from "@/domain/entities/profile";
import type { Dictionary } from "../i18n/dictionary";
import { iconFor, ToolMark } from "./tool";

export function Contact({ profile, t }: { profile: Profile; t: Dictionary["contact"] }) {
  return (
    <section id="contacto">
      <h2>{t.title}</h2>
      <p>{t.lead}</p>
      <p>
        <a className="email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </p>
      <ul className="tools links">
        {profile.links.map((link) => {
          const icon = iconFor(link.label);
          return (
            <li key={link.url}>
              <a className="tool" href={link.url}>
                {icon && <ToolMark icon={icon} size={15} />}
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="cv-download">
        <p className="cv-label">{t.downloadCv}</p>
        <p className="hero-actions">
          <a className="btn ghost" href={profile.cv.en} download>
            {t.cvEnglish} (PDF)
          </a>
          <a className="btn ghost" href={profile.cv.es} download>
            {t.cvSpanish} (PDF)
          </a>
        </p>
      </div>
    </section>
  );
}
