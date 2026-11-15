# Hi, I'm Javier Aquino

**QA Lead & Test Automation Engineer** based in Santo Domingo, Dominican Republic.

🌐 **Portfolio:** [javieraquino.com](https://javieraquino.com) · 🇪🇸 [Leer en español](README.es.md)

I'm QA Lead at Banco Popular Dominicano, where I lead one of the QA squads on TOKE, the first Zelle/Bizum-style instant payments platform launched in the Dominican Republic. I started in 2023 as a consultant on the bank's core banking migration to Temenos, and the bank later hired me directly.

This repository is the source code of my personal portfolio website.

## What I work on

- **Test automation:** front-end automation with WebdriverIO and Appium, API and service suites with Karate, BDD with Gherkin.
- **CI/CD:** automated test execution in Jenkins pipelines; Docker and Docker Compose in my personal projects.
- **Mobile QA:** manual functional, regression and exploratory testing of native Android and iOS apps.
- **Performance:** load and stress testing with K6 and Apache JMeter.
- **Quality leadership:** test strategy, defect triage, release readiness and mentoring.

## About this site

- **Bilingual.** Every page exists in Spanish (`/es`) and English (`/en`). The root URL sends visitors to the language of their browser.
- **A Gherkin scenario in the hero.** It's a small nod to how I work: the steps pass one by one when the page loads.
- **Projects are honest.** A project only shows as *published* when it has a public repository. Until then it says *in progress*, and a test fails if I forget that rule.
- **Built with** Next.js (App Router), TypeScript and Vitest. Hosted on Vercel, with the domain on Cloudflare.

## How it's organized

I used a clean architecture so the content can change without touching the UI:

```
src/
  domain/          Entities, the PortfolioRepository port, and pure services (dates, language)
  application/     Use cases: GetPortfolio, summarizeProjects
  infrastructure/  Content in Spanish and English, the repository adapter, wiring (container.ts)
  presentation/    React components, tool icons, and the UI dictionary
  app/[locale]/    Next.js routes: they only assemble use cases and components
  proxy.ts         Redirects "/" to /es or /en
```

Dependencies point inward: presentation and infrastructure know about the domain, never the other way around. To swap the content source for a CMS or an API, you write another adapter for `PortfolioRepository` and change one line in `container.ts`.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # unit tests (Vitest)
npm run typecheck
npm run build
```

## Tests

The tests cover the logic and the integrity of the content:

- Date formatting and language negotiation.
- Both translations keep the **same structure**: if a bullet, a project or a skill is missing in one language, the tests fail.
- Every logo and icon referenced by the content actually exists.
- Projects can't be marked as published without a repository.

## Updating the content

All the text lives in two files, which must be edited together:

- `src/infrastructure/content/portfolio-es.ts`
- `src/infrastructure/content/portfolio-en.ts`

Interface labels (menu, buttons) are in `src/presentation/i18n/dictionary.ts`.

## Let's talk

- 🌐 [javieraquino.com](https://javieraquino.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/javieraquinov1/)
- ✉️ contacto@javieraquino.com
