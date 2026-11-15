import type { Portfolio } from "@/domain/entities/portfolio";

/**
 * Single source of truth for the site's content, taken from Javier's most recent CV
 * (QA Lead & Test Automation Engineer). Edit this file to change what the portfolio says; no component changes.
 */
export const portfolioEs: Portfolio = {
  profile: {
    fullName: "Javier Eduardo Aquino Vasquez",
    displayName: "Javier Aquino",
    role: "QA Lead y Test Automation Engineer",
    headline:
      "QA Lead en sistemas financieros críticos: combino el liderazgo de un squad con automatización de pruebas, pruebas de API e ingeniería de rendimiento.",
    about: [
      "QA Lead con tres años de experiencia en sistemas bancarios y financieros de alto impacto. Lidero un squad de QA en plataformas financieras críticas, desde la estrategia de pruebas y la preparación de releases hasta la automatización práctica.",
      "Mi trabajo más significativo es TOKE, la primera plataforma de pagos instantáneos tipo Zelle/Bizum lanzada en República Dominicana: un producto de escala nacional pensado para acercar al sistema financiero a personas que antes no estaban bancarizadas. Lidero uno de sus squads de QA y trabajo de forma transversal en backend y front-end, desde el lanzamiento y durante su rápida adopción.",
      "Combino el liderazgo de equipo con profundidad técnica: automatización de APIs y servicios, pruebas de extremo a extremo y móviles, ingeniería de rendimiento y ejecución automática en pipelines de CI/CD.",
      "Empecé como consultor en una migración de core bancario y después el banco me contrató directamente, donde pasé a liderar el QA. Estoy por completar la ingeniería en Ciencias de la Computación y Tecnologías de la Información.",
    ],
    location: "Santo Domingo, República Dominicana",
    availability:
      "Remoto, en horario UTC-4 con jornada completa de solapamiento con la costa este de EE. UU.",
    email: "contacto@javieraquino.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/javieraquinov1/" },
      { label: "GitHub", url: "https://github.com/Jvasquez13" },
    ],
    photo: "/javier.jpg",
    cv: { es: "/cv/Javier-Aquino-CV-ES.pdf", en: "/cv/Javier-Aquino-CV-EN.pdf" },
  },

  featuredScenario: {
    file: "release.feature",
    feature: "Calidad de software en la que se puede confiar",
    name: "Liberar un cambio a producción",
    steps: [
      { keyword: "Given", text: "que los flujos críticos están cubiertos por regresión automatizada" },
      { keyword: "When", text: "el equipo revisa los resultados de cada build" },
      { keyword: "Then", text: "la preparación del release se aprueba con evidencia" },
      { keyword: "And", text: "los defectos se detectan antes de llegar a producción" },
    ],
  },

  featuredTools: [
    "Appium",
    "WebDriverIO",
    "BDD (Gherkin)",
    "Postman",
    "K6",
    "Apache JMeter",
    "Jenkins",
    "Docker",
    "Jira",
    "MongoDB",
    "TypeScript",
    "Git",
  ],

  projects: [
    {
      id: "karate-api",
      title: "Suite de pruebas de API con Karate",
      description:
        "Lectura, creación y casos negativos sobre una API pública, con datos de prueba aislados y reporte HTML de resultados.",
      stack: ["Karate", "Java", "Maven"],
      status: "skip",
    },
    {
      id: "playwright-e2e",
      title: "Suite E2E con Playwright y Gherkin",
      description:
        "Flujos de inicio de sesión, carrito y compra sobre un sitio de práctica, con escenarios en Gherkin y Page Object Model.",
      stack: ["Playwright", "BDD (Gherkin)", "TypeScript"],
      status: "skip",
    },
    {
      id: "appium-mobile",
      title: "Automatización móvil con Appium",
      description:
        "Flujos clave de una app Android de práctica automatizados con Appium y WebDriverIO, con escenarios en Gherkin.",
      stack: ["Appium", "WebDriverIO", "BDD (Gherkin)"],
      status: "skip",
    },
    {
      id: "k6-load",
      title: "Pruebas de carga con K6",
      description:
        "Escenarios de carga con umbrales de percentil 95 y tasa de error, ejecutados en CI.",
      stack: ["K6", "JavaScript", "Jenkins"],
      status: "skip",
    },
    {
      id: "docker-test-env",
      title: "Entorno de pruebas con Docker Compose y Jenkins",
      description:
        "Servicios y suite de pruebas levantados con un solo comando, y el mismo flujo ejecutado en un pipeline de Jenkins.",
      stack: ["Docker", "Docker Compose", "Jenkins"],
      status: "skip",
    },
  ],

  experience: [
    {
      id: "popular-lead",
      role: "QA Lead",
      company: "Banco Popular Dominicano",
      location: "Santo Domingo",
      start: "2026-04",
      end: null,
      context:
        "Mayor banco privado de República Dominicana. QA Lead desde abril de 2026.",
      highlights: [
        "Lidero uno de los squads de QA de TOKE, plataforma de pagos instantáneos (tipo Zelle/Bizum), con dos ingenieros de pruebas manuales: defino la estrategia de pruebas (test strategy), el plan de pruebas y la cobertura, y hago triage de defectos.",
        "Realizo QA de backend y front-end y asumo iniciativas más allá de mi squad.",
        "Oriento a unos 5 colegas de QA en buenas prácticas de pruebas y los apoyo con las herramientas que se usan en el banco.",
        "Realizo pruebas manuales funcionales, de regresión y exploratorias en apps nativas de Android e iOS, en distintos dispositivos, versiones de sistema y candidatos de lanzamiento (release candidates) a las tiendas.",
        "Desde finales de octubre de 2026 asumo la automatización de pruebas de front-end con WebdriverIO y Appium para una app de negocios multiplataforma en React Native, de la línea de producto de TOKE.",
        "Aplico pruebas de regresión previas al release (regression gates) en servicios de backend y en los envíos a las tiendas, para detectar defectos dentro del ciclo de QA.",
        "Ejecuto pruebas de rendimiento, carga y estrés con K6 y Apache JMeter (análisis de cuellos de botella con volúmenes pico de transacciones).",
        "Valido datos mediante consultas en MongoDB.",
        "Doy seguimiento a defectos en Jira en un entorno Agile/Scrum y participo en la adopción de herramientas con IA para la revisión de pull requests y el análisis de tickets del sprint.",
      ],
    },
    {
      id: "popular-backend",
      role: "QA Engineer",
      company: "Banco Popular Dominicano",
      location: "Santo Domingo",
      start: "2025-04",
      end: "2026-04",
      context:
        "Contratado directamente en abril de 2025, tras trabajar en el mismo banco como consultor desde diciembre de 2023. Desde entonces, mi trabajo en el banco ha sido en TOKE.",
      highlights: [
        "QA de backend en TOKE: redacté y corrí casos de prueba de APIs y de la capa de servicios, con trazabilidad del requisito al cierre del defecto.",
        "En TOKE, construí y mantuve suites de automatización de pruebas de APIs y servicios (API testing, REST) con Karate Framework, corridas en pipelines de CI/CD en Jenkins en cada build.",
        "La regresión de backend está automatizada en alrededor del 90 % de los casos de prueba de los microservicios críticos.",
      ],
    },
    {
      id: "neoris",
      role: "Software Analyst y QA Engineer",
      company: "CGL / NEORIS",
      location: "Santo Domingo",
      start: "2023-12",
      end: "2025-04",
      context: "Consultor en el sitio del cliente, Banco Popular Dominicano. Firma global de consultoría digital.",
      highlights: [
        "QA en la migración del core bancario a la plataforma Temenos: validación de servicios migrados, integridad de datos y continuidad del negocio entre los entornos heredado y Temenos.",
        "Elaboré y mantuve la documentación de QA (planes de prueba, casos de prueba, evidencia de ejecución y matrices de trazabilidad) en varios proyectos bancarios.",
        "Elaboré, corrí y documenté casos de prueba funcionales y de regresión, con trazabilidad del requisito al cierre del defecto.",
        "Coordiné ciclos de ejecución de pruebas y reporté defectos y avance a los interesados.",
        "Mejoré los estándares de documentación y trazabilidad, lo que aumentó la preparación para auditorías.",
      ],
    },
  ],

  skills: [
    {
      name: "Automatización de pruebas",
      items: [
        "Karate (APIs y servicios)",
        "Playwright (app web de back-office)",
        "WebDriverIO",
        "Appium",
        "BDD (Gherkin)",
        "Regresión automatizada",
        "Page Object Model",
      ],
    },
    {
      name: "CI/CD y herramientas",
      items: [
        "Jenkins",
        "Docker (proyectos personales)",
        "Docker Compose (proyectos personales)",
        "Git",
        "Bitbucket",
        "CI/CD",
        "Jira",
        "Confluence",
      ],
    },
    {
      name: "Pruebas de APIs y backend",
      items: ["REST", "Postman", "Bruno", "Swagger / OpenAPI", "Validación de contratos", "Microservicios"],
    },
    {
      name: "QA móvil",
      items: ["Android", "iOS", "Pruebas de apps React Native", "Pruebas exploratorias", "Validación de versiones en tiendas"],
    },
    { name: "Pruebas de rendimiento", items: ["K6", "Apache JMeter", "Pruebas de carga y estrés"] },
    {
      name: "Liderazgo de QA",
      items: ["Estrategia y planes de prueba", "Mentoría", "Triage de defectos", "Agile / Scrum"],
    },
    {
      name: "Pruebas funcionales",
      items: [
        "Diseño y ejecución de casos",
        "Regresión e integración",
        "Matriz de trazabilidad",
        "Soporte a UAT",
      ],
    },
    {
      name: "Lenguajes y datos",
      items: ["JavaScript", "TypeScript", "Java", "SQL", "MongoDB"],
    },
    {
      name: "IA aplicada a QA",
      items: [
        "Claude",
        "Codex",
        "Revisión de pull requests con IA",
        "Análisis de tickets del sprint con IA",
        "IA aplicada a pruebas de software",
      ],
    },
    {
      name: "Dominio bancario",
      items: ["Core bancario", "Migración a Temenos", "Pagos instantáneos", "FinTech"],
    },
  ],

  education: [
    {
      id: "unibe",
      logo: { src: "/logos/unibe.png", plate: "dark" },
      degree: "Ingeniería en Ciencias de la Computación y Tecnologías de la Información",
      institution: "Universidad Iberoamericana (UNIBE)",
      start: "2024-01",
      end: null,
      notes: [
        "Graduación prevista en diciembre de 2026.",
        "Segundo lugar en Challenge Popular 2024, competencia nacional de innovación: coconstruí un asistente financiero con IA que recomienda inversiones de forma automática.",
      ],
    },
    {
      id: "itla",
      logo: { src: "/logos/itla.png", plate: "dark" },
      degree: "Técnico Superior en Desarrollo de Software",
      institution: "Instituto Tecnológico de las Américas (ITLA)",
      start: "2020-08",
      end: "2022-12",
      notes: ["Índice académico 4.0 / 4.0."],
    },
  ],

  certifications: [
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2024-09",
      logo: { src: "/logos/microsoft-fundamentals.svg", plate: "light" },
    },
    {
      name: "Fundamentals of Software Testing",
      issuer: "International Association for Software Quality (AICS)",
      date: "2022-08",
      logo: { src: "/logos/aics.png", plate: "light" },
    },
    {
      name: "Scrum Foundation Professional Certificate (SFPC)",
      issuer: "CertiProf",
      date: "2022-06",
      logo: { src: "/logos/certiprof.png", plate: "light" },
    },
  ],

  languages: ["Español (nativo)", "Inglés (B2–C1)"],
};
