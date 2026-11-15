import type { Portfolio } from "@/domain/entities/portfolio";

/**
 * English content, taken from Javier's most recent CV (QA Lead & Test Automation Engineer).
 * Must stay structurally identical to portfolio-es.ts; a unit test enforces that.
 */
export const portfolioEn: Portfolio = {
  profile: {
    fullName: "Javier Eduardo Aquino Vasquez",
    displayName: "Javier Aquino",
    role: "QA Lead & Test Automation Engineer",
    headline:
      "QA Lead on critical financial systems: I combine squad leadership with test automation, API testing and performance engineering.",
    about: [
      "QA Lead with three years of experience in high-impact banking and financial systems. I lead a QA squad on critical financial platforms, from test strategy and release readiness to hands-on automation.",
      "My most significant work is TOKE, the first Zelle/Bizum-style instant payment platform launched in the Dominican Republic: a national-scale product built to bring previously unbanked people into the financial system. I lead one of its QA squads and work across backend and front-end, from the launch through its rapid early adoption.",
      "My work combines team leadership with technical depth: API and service automation, end-to-end and mobile testing, performance engineering, and automated execution in CI/CD pipelines.",
      "I began as a consultant on a core banking migration and was later hired directly by the bank, where I moved into QA leadership. I am completing a degree in Computer Science and Information Technology.",
    ],
    location: "Santo Domingo, Dominican Republic",
    availability: "Remote, on UTC-4 with a full workday of overlap with U.S. Eastern time.",
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
    feature: "Software quality you can trust",
    name: "Release a change to production",
    steps: [
      { keyword: "Given", text: "critical flows are covered by automated regression" },
      { keyword: "When", text: "the team reviews the results of every build" },
      { keyword: "Then", text: "release readiness is approved with evidence" },
      { keyword: "And", text: "defects are found before they reach production" },
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
      title: "API test suite with Karate",
      description:
        "Read, create and negative cases against a public API, with isolated test data and an HTML results report.",
      stack: ["Karate", "Java", "Maven"],
      status: "skip",
    },
    {
      id: "playwright-e2e",
      title: "E2E suite with Playwright and Gherkin",
      description:
        "Login, cart and checkout flows on a practice site, with Gherkin scenarios and the Page Object Model.",
      stack: ["Playwright", "BDD (Gherkin)", "TypeScript"],
      status: "skip",
    },
    {
      id: "appium-mobile",
      title: "Mobile automation with Appium",
      description:
        "Key flows of a practice Android app automated with Appium and WebDriverIO, with Gherkin scenarios.",
      stack: ["Appium", "WebDriverIO", "BDD (Gherkin)"],
      status: "skip",
    },
    {
      id: "k6-load",
      title: "Load tests with K6",
      description: "Load scenarios with 95th-percentile and error-rate thresholds, run in CI.",
      stack: ["K6", "JavaScript", "Jenkins"],
      status: "skip",
    },
    {
      id: "docker-test-env",
      title: "Test environment with Docker Compose and Jenkins",
      description:
        "Services and test suite brought up with a single command, and the same flow run in a Jenkins pipeline.",
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
        "Largest private bank in the Dominican Republic. QA Lead since April 2026.",
      highlights: [
        "Lead one of the QA squads on TOKE, an instant payments platform (Zelle/Bizum-style), with two manual QA engineers: define the test strategy, test plan and coverage, and triage defects.",
        "Perform backend and front-end QA and take on initiatives beyond my squad.",
        "Mentor around 5 QA colleagues on testing best practices and support them with the tools used at the bank.",
        "Carry out manual functional, regression and exploratory testing on native Android and iOS apps across devices, OS versions and app store release candidates.",
        "Since late October 2026, own front-end test automation with WebdriverIO and Appium for a cross-platform React Native business app from the TOKE product line.",
        "Apply pre-release regression testing gates on backend services and app store submissions to detect defects within the QA cycle.",
        "Run performance, load and stress testing with K6 and Apache JMeter (bottleneck analysis under peak transaction volumes).",
        "Validate data with MongoDB queries.",
        "Track defects in Jira in an Agile/Scrum environment and take part in the adoption of AI-assisted tooling for pull request review and sprint ticket analysis.",
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
        "Hired directly in April 2025, after working at the same bank as a consultant since December 2023. My work at the bank since then has been on TOKE.",
      highlights: [
        "Backend QA on TOKE: wrote and ran API and service-layer test cases, with traceability from requirement to defect closure.",
        "On TOKE, built and maintained API and service test automation (API testing, REST) with Karate Framework, run on every build in Jenkins CI/CD pipelines.",
        "Backend regression is automated for about 90% of the test cases of critical microservices.",
      ],
    },
    {
      id: "neoris",
      role: "Software Analyst and QA Engineer",
      company: "CGL / NEORIS",
      location: "Santo Domingo",
      start: "2023-12",
      end: "2025-04",
      context: "Contractor on-site at Banco Popular Dominicano. Global digital consulting firm.",
      highlights: [
        "QA on the core banking migration to the Temenos platform: validated migrated services, data integrity and business continuity between legacy and Temenos environments.",
        "Wrote and maintained QA documentation (test plans, test cases, execution evidence and traceability matrices) across multiple banking projects.",
        "Created, ran and documented functional and regression test cases, with traceability from requirement to defect closure.",
        "Coordinated test execution cycles and reported defects and progress to stakeholders.",
        "Improved documentation and traceability standards, increasing audit readiness.",
      ],
    },
  ],

  skills: [
    {
      name: "Test Automation",
      items: [
        "Karate (API and service automation)",
        "Playwright (back-office web app)",
        "WebDriverIO",
        "Appium",
        "BDD (Gherkin)",
        "Automated regression testing",
        "Page Object Model",
      ],
    },
    {
      name: "CI/CD & Tools",
      items: [
        "Jenkins",
        "Docker (personal projects)",
        "Docker Compose (personal projects)",
        "Git",
        "Bitbucket",
        "CI/CD",
        "Jira",
        "Confluence",
      ],
    },
    {
      name: "API & Backend Testing",
      items: ["REST", "Postman", "Bruno", "Swagger / OpenAPI", "Contract validation", "Microservices"],
    },
    {
      name: "Mobile QA",
      items: ["Android", "iOS", "React Native app testing", "Exploratory testing", "App store release validation"],
    },
    { name: "Performance Testing", items: ["K6", "Apache JMeter", "Load and stress testing"] },
    {
      name: "QA leadership",
      items: ["Test strategy and planning", "Mentoring", "Defect triage", "Agile / Scrum"],
    },
    {
      name: "Functional testing",
      items: [
        "Test case design and execution",
        "Regression and integration",
        "Traceability matrix",
        "UAT support",
      ],
    },
    {
      name: "Languages & Data",
      items: ["JavaScript", "TypeScript", "Java", "SQL", "MongoDB"],
    },
    {
      name: "AI in QA",
      items: [
        "Claude",
        "Codex",
        "AI-assisted pull request review",
        "AI-assisted sprint ticket analysis",
        "AI applied to software testing",
      ],
    },
    {
      name: "Banking domain",
      items: ["Core banking", "Temenos migration", "Instant payments", "FinTech"],
    },
  ],

  education: [
    {
      id: "unibe",
      logo: { src: "/logos/unibe.png", plate: "dark" },
      degree: "Bachelor's Degree in Computer Science and Information Technology",
      institution: "Universidad Iberoamericana (UNIBE)",
      start: "2024-01",
      end: null,
      notes: [
        "Expected graduation: December 2026.",
        "2nd Place, Challenge Popular 2024, a national innovation competition: co-developed an AI-powered financial assistant that recommends investments automatically.",
      ],
    },
    {
      id: "itla",
      logo: { src: "/logos/itla.png", plate: "dark" },
      degree: "Associate Degree in Software Development",
      institution: "Instituto Tecnológico de las Américas (ITLA)",
      start: "2020-08",
      end: "2022-12",
      notes: ["GPA: 4.0 / 4.0."],
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

  languages: ["Spanish (native)", "English (B2–C1)"],
};
