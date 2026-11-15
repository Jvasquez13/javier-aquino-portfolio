import type { Portfolio } from "@/domain/entities/portfolio";

/**
 * schema.org Person for search engines. Built only from the portfolio content,
 * so it can never claim something the page does not say.
 */
export function buildPersonJsonLd(portfolio: Portfolio, siteUrl: string, pageUrl: string) {
  const { profile, experience, education, skills, languages } = portfolio;
  const current = experience.find((job) => job.end === null);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.displayName,
    jobTitle: profile.role,
    url: pageUrl,
    image: `${siteUrl}${profile.photo}`,
    email: profile.email,
    address: { "@type": "PostalAddress", addressLocality: "Santo Domingo", addressCountry: "DO" },
    ...(current ? { worksFor: { "@type": "Organization", name: current.company } } : {}),
    alumniOf: education.map((item) => ({ "@type": "CollegeOrUniversity", name: item.institution })),
    knowsAbout: skills.flatMap((group) => group.items),
    knowsLanguage: languages,
    sameAs: profile.links.map((link) => link.url),
  };
}

/** Serializes for an inline script: "<" is escaped so the data can never close the tag early. */
export const serializeJsonLd = (data: unknown): string => JSON.stringify(data).replace(/</g, "\\u003c");
