import { LOCALES, type Locale } from "@/domain/entities/locale";

export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export function TopNav({
  brand,
  items,
  locale,
  languageLabel,
}: {
  brand: string;
  items: readonly NavItem[];
  locale: Locale;
  languageLabel: string;
}) {
  return (
    <header className="topbar">
      <nav className="topbar-inner" aria-label="Sections">
        <a className="brand" href="#inicio">
          {brand}
        </a>
        <ul className="sections">
          {items.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <ul className="lang" aria-label={languageLabel}>
          {LOCALES.map((code) => (
            <li key={code}>
              <a
                href={`/${code}`}
                lang={code}
                hrefLang={code}
                aria-current={code === locale ? "true" : undefined}
              >
                {code.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
