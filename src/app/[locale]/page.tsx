import { notFound } from "next/navigation";
import { summarizeProjects } from "@/application/summarize-projects";
import { isLocale } from "@/domain/entities/locale";
import { getPortfolio } from "@/infrastructure/container";
import { dictionaries } from "@/presentation/i18n/dictionary";
import { About } from "@/presentation/components/about";
import { Contact } from "@/presentation/components/contact";
import { Education } from "@/presentation/components/education";
import { Experience } from "@/presentation/components/experience";
import { Hero } from "@/presentation/components/hero";
import { Projects } from "@/presentation/components/projects";
import { Skills } from "@/presentation/components/skills";
import { TopNav, type NavItem } from "@/presentation/components/top-nav";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = dictionaries[locale];
  const portfolio = await getPortfolio.execute(locale);
  const projectSummary = summarizeProjects(portfolio.projects);

  const nav: readonly NavItem[] = [
    { id: "sobre-mi", label: t.nav.about },
    { id: "proyectos", label: t.nav.projects },
    { id: "experiencia", label: t.nav.experience },
    { id: "habilidades", label: t.nav.skills },
    { id: "formacion", label: t.nav.education },
    { id: "contacto", label: t.nav.contact },
  ];

  return (
    <>
      <a className="skip" href="#contenido">{t.skip}</a>
      <TopNav brand={portfolio.profile.displayName} items={nav} locale={locale} languageLabel={t.languageSwitch} />
      <main id="contenido">
        <Hero profile={portfolio.profile} scenario={portfolio.featuredScenario} tools={portfolio.featuredTools} t={t} />
        <About profile={portfolio.profile} languages={portfolio.languages} t={t.about} />
        <Projects projects={portfolio.projects} summary={projectSummary} t={t.projects} />
        <Experience items={portfolio.experience} t={t.experience} dates={t.dates} />
        <Skills groups={portfolio.skills} t={t.skills} />
        <Education education={portfolio.education} certifications={portfolio.certifications} t={t.education} dates={t.dates} />
        <Contact profile={portfolio.profile} t={t.contact} />
      </main>
      <footer>
        <p>{portfolio.profile.fullName}</p>
      </footer>
    </>
  );
}
