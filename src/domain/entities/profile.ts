export interface Link {
  readonly label: string;
  readonly url: string;
}

export interface Profile {
  readonly fullName: string;
  readonly displayName: string;
  readonly role: string;
  readonly headline: string;
  readonly about: readonly string[];
  readonly location: string;
  readonly availability: string;
  readonly email: string;
  readonly links: readonly Link[];
  /** Path under /public */
  readonly photo: string;
  /** Downloadable CV (PDF) per language, paths under /public. */
  readonly cv: { readonly es: string; readonly en: string };
}
