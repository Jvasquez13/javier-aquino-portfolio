import Image from "next/image";
import type { Profile } from "@/domain/entities/profile";
import type { Dictionary } from "../i18n/dictionary";

export function About({
  profile,
  languages,
  t,
}: {
  profile: Profile;
  languages: readonly string[];
  t: Dictionary["about"];
}) {
  return (
    <section id="sobre-mi">
      <h2>{t.title}</h2>
      <div className="about">
        <figure className="portrait">
          <Image
            src={profile.photo}
            alt={t.portraitAlt(profile.displayName)}
            width={400}
            height={400}
            sizes="(max-width: 760px) 70vw, 260px"
            priority
          />
        </figure>
        <div className="about-text">
          {profile.about.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "about-lead" : undefined}>
              {paragraph}
            </p>
          ))}
          <dl className="facts">
            <div>
              <dt>{t.location}</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>{t.availability}</dt>
              <dd>{profile.availability}</dd>
            </div>
            <div>
              <dt>{t.languages}</dt>
              <dd>{languages.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
