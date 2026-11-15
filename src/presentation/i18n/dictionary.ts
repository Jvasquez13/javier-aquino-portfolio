import type { Locale } from "@/domain/entities/locale";
import type { StepKeyword } from "@/domain/entities/portfolio";
import type { ProjectStatus } from "@/domain/entities/project";
import type { DateLabels } from "@/domain/services/format-date";

/** UI copy that is not portfolio content: labels, headings, button text. */
export interface Dictionary {
  meta: { title: string; description: string };
  skip: string;
  languageSwitch: string;
  nav: { about: string; projects: string; experience: string; skills: string; education: string; contact: string };
  hero: { viewProjects: string; contactMe: string; toolsLabel: string };
  about: { title: string; portraitAlt: (name: string) => string; location: string; availability: string; languages: string };
  projects: { title: string; note: (published: number, total: number) => string; status: Record<ProjectStatus, string>; viewCode: string };
  experience: { title: string };
  skills: { title: string };
  education: { title: string; studies: string; certifications: string };
  contact: { title: string; lead: string };
  gherkin: {
    language: string;
    feature: string;
    scenario: string;
    steps: Record<StepKeyword, string>;
    label: (scenario: string, steps: number) => string;
    scenarioSummary: string;
    stepsSummary: (n: number) => string;
  };
  dates: DateLabels;
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    meta: {
      title: "Javier Aquino | QA Lead y SDET",
      description:
        "Portafolio de Javier Aquino, QA Lead y SDET en banca: automatización de APIs y servicios, QA móvil y pruebas de rendimiento.",
    },
    skip: "Ir al contenido",
    languageSwitch: "Idioma",    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Formación",
      contact: "Contacto",
    },
    hero: { viewProjects: "Ver proyectos", contactMe: "Contactar", toolsLabel: "Herramientas con las que trabajo" },
    about: {
      title: "Sobre mí",
      portraitAlt: (name) => `Retrato de ${name}`,
      location: "Ubicación",
      availability: "Disponibilidad",
      languages: "Idiomas",
    },
    projects: {
      title: "Proyectos",
      note: (published, total) =>
        published === 0
          ? `${total} proyectos personales de práctica que estoy construyendo.`
          : `${published} de ${total} publicados. Los demás son proyectos personales de práctica que estoy construyendo.`,
      status: { pass: "Publicado", skip: "En construcción", fail: "Descartado" },
      viewCode: "Ver código",
    },
    experience: { title: "Experiencia" },
    skills: { title: "Habilidades" },
    education: { title: "Formación", studies: "Estudios", certifications: "Certificaciones" },
    contact: { title: "Contacto", lead: "Estoy abierto a oportunidades como QA Lead o SDET." },
    gherkin: {
      language: "# language: es",
      feature: "Característica:",
      scenario: "Escenario:",
      steps: { Given: "Dado", When: "Cuando", Then: "Entonces", And: "Y" },
      label: (scenario, steps) => `Escenario Gherkin: ${scenario}. ${steps} de ${steps} pasos pasaron.`,
      scenarioSummary: "1 escenario (1 pasó)",
      stepsSummary: (n) => `${n} pasos (${n} pasaron)`,
    },
    dates: {
      months: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      present: "actualidad",
    },
  },
  en: {
    meta: {
      title: "Javier Aquino | QA Lead & SDET",
      description:
        "Portfolio of Javier Aquino, QA Lead and SDET in banking: API and service automation, mobile QA and performance testing.",
    },
    skip: "Skip to content",
    languageSwitch: "Language",    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    hero: { viewProjects: "View projects", contactMe: "Get in touch", toolsLabel: "Tools I work with" },
    about: {
      title: "About me",
      portraitAlt: (name) => `Portrait of ${name}`,
      location: "Location",
      availability: "Availability",
      languages: "Languages",
    },
    projects: {
      title: "Projects",
      note: (published, total) =>
        published === 0
          ? `${total} personal practice projects I'm building.`
          : `${published} of ${total} published. The rest are personal practice projects I'm building.`,
      status: { pass: "Published", skip: "In progress", fail: "Dropped" },
      viewCode: "View code",
    },
    experience: { title: "Experience" },
    skills: { title: "Skills" },
    education: { title: "Education", studies: "Degrees", certifications: "Certifications" },
    contact: { title: "Contact", lead: "I'm open to opportunities as a QA Lead or SDET." },
    gherkin: {
      language: "# language: en",
      feature: "Feature:",
      scenario: "Scenario:",
      steps: { Given: "Given", When: "When", Then: "Then", And: "And" },
      label: (scenario, steps) => `Gherkin scenario: ${scenario}. ${steps} of ${steps} steps passed.`,
      scenarioSummary: "1 scenario (1 passed)",
      stepsSummary: (n) => `${n} steps (${n} passed)`,
    },
    dates: {
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      present: "Present",
    },
  },
};
