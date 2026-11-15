import type { Portfolio } from "@/domain/entities/portfolio";

/**
 * Single source of truth for the site's content, taken from Javier's most recent CV
 * (QA Lead / SDET). Edit this file to change what the portfolio says; no component changes.
 */
export const portfolioEs: Portfolio = {
  profile: {
    fullName: "Javier Eduardo Aquino Vasquez",
    displayName: "Javier Aquino",
    role: "QA Lead y SDET",
    headline:
      "Lidero el QA de una plataforma de pagos instantáneos en banca. Automatizo APIs con Karate y Playwright y mido rendimiento con K6 y JMeter.",
    about: [
      "Soy QA Lead en Banco Popular Dominicano, el mayor banco privado del país. Dirijo el QA de TOKE, la primera plataforma de pagos instantáneos tipo Zelle/Bizum lanzada en República Dominicana, y desde finales de octubre de 2026 asumo además, de forma directa, el rol de automatización. Hoy lidero a dos ingenieros de pruebas manuales.",
      "Llevo tres años en sistemas bancarios de alto impacto. Empecé en diciembre de 2023 como consultor en la migración del core bancario a Temenos; en abril de 2025 el banco me contrató directamente como Backend QA Engineer y después me promovieron a QA Lead.",
      "Trabajo con automatización de APIs y servicios en Karate y Playwright, pruebas manuales en apps nativas de Android e iOS, pruebas de rendimiento con K6 y JMeter, y ejecución automática de pruebas en pipelines de Jenkins.",
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
  },

  featuredScenario: {
    file: "release.feature",
    feature: "Calidad en pagos instantáneos",
    name: "Preparar un release para producción",
    steps: [
      { keyword: "Given", text: "que la regresión automatizada corre en cada build" },
      { keyword: "When", text: "el equipo de QA revisa los resultados" },
      { keyword: "Then", text: "firmo la preparación del release" },
      { keyword: "And", text: "los defectos se resuelven antes de llegar a producción" },
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
      id: "popular",
      role: "QA Lead",
      company: "Banco Popular Dominicano",
      location: "Santo Domingo",
      start: "2025-04",
      end: null,
      context:
        "Mayor banco privado de República Dominicana. Relación continua desde diciembre de 2023: primero como consultor, contratado directamente en abril de 2025 como Backend QA Engineer y promovido a QA Lead.",
      highlights: [
        "Lidero el equipo de QA de TOKE, la primera plataforma de pagos instantáneos tipo Zelle/Bizum lanzada en el país, hoy con dos ingenieros de pruebas manuales a mi cargo. Defino la estrategia de pruebas, planifico la cobertura, hago triage de defectos y firmo la preparación de cada release.",
        "Respondo por la calidad de los releases desde el lanzamiento y la rápida adopción a escala nacional, con una baja tasa de incidentes en producción pese a releases frecuentes y plazos exigentes.",
        "Hago el QA manual del front-end de las apps nativas de Android e iOS: pruebas funcionales, de regresión y exploratorias en distintos dispositivos, versiones de sistema y candidatos de lanzamiento a las tiendas.",
        "Desde finales de octubre de 2026 asumo directamente el rol de automatización del equipo: diseño y mantengo suites de APIs y servicios con Karate, ejecutadas en cada build por pipelines de Jenkins, y llevo la adopción de Playwright para ampliar la cobertura a flujos de extremo a extremo.",
        "Aplico compuertas de regresión antes de cada release en los servicios de backend y en los envíos a las tiendas, para que la gran mayoría de los defectos se resuelvan en el ciclo de QA y no lleguen a producción.",
        "Participo en la adopción de herramientas con IA para revisar pull requests y analizar tickets del sprint, lo que mejora la calidad de los tickets antes de que lleguen a QA.",
        "Ejecuto pruebas de rendimiento y carga con K6 y JMeter, identifico cuellos de botella con volúmenes pico de transacciones y entrego recomendaciones de escalabilidad a la dirección de ingeniería.",
        "Valido la integridad de datos entre servicios con consultas SQL sobre bases bancarias y doy seguimiento a los defectos en Jira en un entorno Agile/Scrum.",
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
        "Colaborador clave de QA en la migración del core bancario de Banco Popular a la plataforma Temenos, uno de los mayores programas de transformación tecnológica de la banca dominicana: validé servicios migrados, integridad de datos y continuidad del negocio entre los entornos heredado y Temenos.",
        "Redacté y mantuve la documentación de QA de unos 20 proyectos bancarios en paralelo: planes de prueba, casos, evidencia de ejecución y matrices de trazabilidad, la base escrita en la que se apoyaban auditores y líderes de entrega.",
        "Diseñé, ejecuté y documenté suites de pruebas funcionales y de regresión, con trazabilidad completa del requisito al cierre del defecto en cada fase.",
        "Coordiné y lideré ciclos de ejecución de pruebas y reporté métricas de defectos y preparación de releases a los interesados del banco y a la dirección de los proyectos.",
        "Mejoré los estándares de documentación y trazabilidad, lo que aumentó la preparación para auditorías y redujo el esfuerzo repetido de diseño de pruebas entre releases.",
        "Detecté defectos antes con procesos de QA estructurados y basados en riesgo, y validé el cumplimiento de estándares de calidad y regulatorios en aplicaciones financieras de alto impacto.",
        "El desempeño sostenido durante el contrato llevó a Banco Popular a contratarme directamente en abril de 2025, sin interrumpir mi trabajo en los mismos sistemas.",
      ],
    },
  ],

  skills: [
    {
      name: "Automatización",
      items: [
        "Karate (APIs y servicios)",
        "Playwright",
        "WebDriverIO",
        "Appium",
        "BDD (Gherkin)",
        "Regresión automatizada",
        "Page Object Model",
      ],
    },
    {
      name: "CI/CD y DevOps",
      items: ["Jenkins", "Docker", "Docker Compose", "Git", "Bitbucket", "CI/CD"],
    },
    {
      name: "APIs y backend",
      items: ["REST", "Postman", "Swagger / OpenAPI", "Validación de contratos", "Microservicios"],
    },
    {
      name: "QA móvil",
      items: ["Android", "iOS", "Pruebas exploratorias", "Validación de versiones en tiendas"],
    },
    { name: "Rendimiento", items: ["K6", "Apache JMeter", "Pruebas de carga y estrés"] },
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
      items: ["JavaScript", "TypeScript", "SQL", "MongoDB", "Jira", "Confluence"],
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
