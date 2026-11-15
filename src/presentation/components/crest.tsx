import type { Logo } from "@/domain/entities/career";
import { monogram } from "./monogram";

/** School or issuer mark: the real logo when provided, otherwise initials. */
export function Crest({ name, logo }: { name: string; logo?: Logo }) {
  if (logo) {
    return (
      <span className={`crest crest-logo plate-${logo.plate}`}>
        {/* Plain img: the files are small, static and include an SVG. The name is in the text next to it. */}
        <img src={logo.src} alt="" loading="lazy" decoding="async" />
      </span>
    );
  }
  return (
    <span className="crest crest-mono" aria-hidden="true">
      {monogram(name)}
    </span>
  );
}
