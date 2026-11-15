/** Months are ISO "YYYY-MM". A null end means the position or study is ongoing. */
export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly start: string;
  readonly end: string | null;
  /** One line of context about the engagement or the company. */
  readonly context?: string;
  readonly highlights: readonly string[];
}

export interface Logo {
  /** Path under /public. */
  readonly src: string;
  /** Background the artwork was designed for: white logos need a dark plate. */
  readonly plate: "dark" | "light";
}

export interface Education {
  readonly id: string;
  readonly degree: string;
  readonly institution: string;
  readonly start: string;
  readonly end: string | null;
  readonly notes: readonly string[];
  /** Omit until the logo file exists; the page shows initials instead. */
  readonly logo?: Logo;
}

export interface Certification {
  readonly name: string;
  readonly issuer: string;
  readonly date: string;
  /** Issuer logo or badge. Omit until the file exists; the page shows initials instead. */
  readonly logo?: Logo;
}
