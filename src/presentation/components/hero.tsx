import type { CSSProperties } from "react";
import type { Profile } from "@/domain/entities/profile";
import type { Scenario } from "@/domain/entities/portfolio";
import type { Dictionary } from "../i18n/dictionary";
import { GherkinCard } from "./gherkin-card";
import { iconFor, ToolMark } from "./tool";

export function Hero({
  profile,
  scenario,
  tools,
  t,
}: {
  profile: Profile;
  scenario: Scenario;
  tools: readonly string[];
  t: Dictionary;
}) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <p className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          {t.hero.status}
        </p>
        <h1>
          {profile.displayName}
          <span className="role">{profile.role}</span>
        </h1>
        <p className="lead">{profile.headline}</p>
        <p className="hero-actions">
          <a className="btn" href="#proyectos">{t.hero.viewProjects}</a>
          <a className="btn ghost" href="#experiencia">{t.hero.viewExperience}</a>
          <a className="btn ghost" href="#contacto">{t.hero.contactMe}</a>
        </p>
      </div>

      <GherkinCard scenario={scenario} t={t.gherkin} />

      <ul className="strip" aria-label={t.hero.toolsLabel}>
        {tools.map((name, i) => {
          const icon = iconFor(name);
          return (
            icon && (
              <li key={name} title={name} aria-label={name} style={{ "--i": i } as CSSProperties}>
                <ToolMark icon={icon} size={22} />
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}
