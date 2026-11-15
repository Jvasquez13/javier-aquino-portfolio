import type { SkillGroup } from "@/domain/entities/portfolio";
import type { Dictionary } from "../i18n/dictionary";
import { ToolList } from "./tool";

export function Skills({ groups, t }: { groups: readonly SkillGroup[]; t: Dictionary["skills"] }) {
  return (
    <section id="habilidades">
      <h2>{t.title}</h2>
      <div className="skills">
        {groups.map((group) => (
          <div key={group.name} className="skill-group">
            <h3>{group.name}</h3>
            <ToolList items={group.items} />
          </div>
        ))}
      </div>
    </section>
  );
}
