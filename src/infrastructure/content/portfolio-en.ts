import type { Portfolio } from "@/domain/entities/portfolio";

/**
 * English content, taken from Javier's most recent CV (QA Lead / SDET).
 * Must stay structurally identical to portfolio-es.ts; a unit test enforces that.
 */
export const portfolioEn: Portfolio = {
  profile: {
    fullName: "Javier Eduardo Aquino Vasquez",
    displayName: "Javier Aquino",
    role: "QA Lead & SDET",
    headline:
      "I lead QA on an instant-payments platform in banking. I automate APIs with Karate and Playwright and measure performance with K6 and JMeter.",
    about: [
      "I'm QA Lead at Banco Popular Dominicano, the largest private bank in the Dominican Republic. I lead QA for TOKE, the first Zelle/Bizum-style instant payment platform launched in the country, and since late October 2026 I also directly own the automation role. Today I lead two manual QA engineers.",
      "I have three years in high-impact banking systems. I started in December 2023 as a consultant on the core banking migration to Temenos; in April 2025 the bank hired me directly as Backend QA Engineer and later promoted me to QA Lead.",
      "I work on API and service automation with Karate and Playwright, manual testing of native Android and iOS apps, performance testing with K6 and JMeter, and automated test execution in Jenkins pipelines.",
    ],
    location: "Santo Domingo, Dominican Republic",
    availability: "Remote, on UTC-4 with a full workday of overlap with U.S. Eastern time.",
    email: "JavierAquinoV1@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/javieraquinov1/" },
      { label: "GitHub", url: "https://github.com/Jvasquez13" },
    ],
    photo: "/javier.jpg",
  },

  featuredScenario: {
    file: "release.feature",
    feature: "Quality in instant payments",
    name: "Prepare a release for production",
    steps: [
      { keyword: "Given", text: "regression automation runs on every build" },
      { keyword: "When", text: "the QA team reviews the results" },
      { keyword: "Then", text: "I sign off on release readiness" },
      { keyword: "And", text: "defects are resolved before they reach production" },
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
      id: "popular",
      role: "QA Lead",
      company: "Banco Popular Dominicano",
      location: "Santo Domingo",
      start: "2025-04",
      end: null,
      context:
        "Largest private bank in the Dominican Republic. Continuous engagement since December 2023: first as a contractor, hired directly in April 2025 as Backend QA Engineer and promoted to QA Lead.",
      highlights: [
        "Lead the QA team on TOKE, the first Zelle/Bizum-style instant payment platform launched in the country, currently with two manual QA engineers reporting to me. I own test strategy, coverage planning, defect triage and release readiness sign-off.",
        "Own release quality through the platform's launch and rapid early adoption at national scale, sustaining a low rate of production incidents across frequent releases under aggressive delivery timelines.",
        "Own manual front-end QA for the native Android and iOS applications: functional, regression and exploratory testing across devices, OS versions and app store release candidates.",
        "Since late October 2026, I directly own the team's automation role: I design and maintain API and service suites with Karate, executed on every build by Jenkins pipelines, and drive the rollout of Playwright to extend automated coverage to end-to-end flows.",
        "Enforce pre-release regression gates across backend services and app store submissions, so the large majority of defects are resolved in the QA cycle and never reach production.",
        "Take part in the team's adoption of AI-assisted tooling for pull request review and sprint ticket analysis, improving ticket quality before work reaches QA.",
        "Run performance and load tests with K6 and JMeter, identifying bottlenecks under peak transaction volumes and giving scalability recommendations to engineering leadership.",
        "Validate data integrity across services with SQL queries against banking databases and track defects in Jira in an Agile/Scrum environment.",
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
        "Core QA contributor on Banco Popular's migration of its core banking system to the Temenos platform, one of the largest technology transformation programs in Dominican banking: I validated migrated services, data integrity and business continuity across legacy and Temenos environments.",
        "Authored and maintained QA documentation across about 20 banking projects running in parallel: test plans, test cases, execution evidence and traceability matrices, the written baseline that auditors and delivery leads relied on.",
        "Designed, executed and documented functional and regression test suites, keeping full traceability from requirement to defect closure in every test phase.",
        "Coordinated and led test execution cycles, reporting defect metrics and release readiness to bank stakeholders and project leadership.",
        "Improved documentation and traceability standards, which raised audit readiness and cut repeated test-design effort across releases.",
        "Found defects earlier through structured, risk-based QA processes, and validated compliance with quality and regulatory standards in high-impact financial applications.",
        "Sustained performance during the engagement led Banco Popular to hire me directly in April 2025, with no interruption on the same systems.",
      ],
    },
  ],

  skills: [
    {
      name: "Automation",
      items: [
        "Karate (API and service automation)",
        "Playwright",
        "WebDriverIO",
        "Appium",
        "BDD (Gherkin)",
        "Automated regression testing",
        "Page Object Model",
      ],
    },
    {
      name: "CI/CD & DevOps",
      items: ["Jenkins", "Docker", "Docker Compose", "Git", "Bitbucket", "CI/CD"],
    },
    {
      name: "APIs & backend",
      items: ["REST", "Postman", "Swagger / OpenAPI", "Contract validation", "Microservices"],
    },
    {
      name: "Mobile QA",
      items: ["Android", "iOS", "Exploratory testing", "App store release validation"],
    },
    { name: "Performance", items: ["K6", "Apache JMeter", "Load and stress testing"] },
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
      name: "Languages & data",
      items: ["JavaScript", "TypeScript", "SQL", "MongoDB", "Jira", "Confluence"],
    },
    {
      name: "AI in QA",
      items: [
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
