# Hola, soy Javier Aquino

**QA Lead y Test Automation Engineer**, desde Santo Domingo, República Dominicana.

🌐 **Portafolio:** [javieraquino.com](https://javieraquino.com) · 🇬🇧 [Read in English](README.md)

Soy QA Lead en Banco Popular Dominicano, donde lidero uno de los squads de QA de TOKE, la primera plataforma de pagos instantáneos tipo Zelle/Bizum lanzada en República Dominicana. Empecé en 2023 como consultor en la migración del core bancario a Temenos, y después el banco me contrató directamente.

Este repositorio es el código de mi portafolio personal.

## En qué trabajo

- **Automatización de pruebas:** automatización de front-end con WebdriverIO y Appium, suites de APIs y servicios con Karate, BDD con Gherkin.
- **CI/CD:** ejecución automática de pruebas en pipelines de Jenkins; Docker y Docker Compose en mis proyectos personales.
- **QA móvil:** pruebas funcionales, de regresión y exploratorias, de forma manual, en apps nativas de Android e iOS.
- **Rendimiento:** pruebas de carga y estrés con K6 y Apache JMeter.
- **Liderazgo de calidad:** estrategia de pruebas, triage de defectos, preparación de releases y mentoría.

## Sobre este sitio

- **Bilingüe.** Cada página existe en español (`/es`) y en inglés (`/en`). La raíz envía al visitante al idioma de su navegador.
- **Un escenario Gherkin en el inicio.** Es un guiño a mi forma de trabajar: los pasos pasan uno por uno cuando carga la página.
- **Los proyectos son honestos.** Un proyecto solo figura como *publicado* si tiene repositorio público. Mientras tanto dice *en construcción*, y una prueba falla si me olvido de esa regla.
- **Hecho con** Next.js (App Router), TypeScript y Vitest. Alojado en Vercel, con el dominio en Cloudflare.

## Cómo está organizado

Usé una arquitectura limpia para poder cambiar el contenido sin tocar la interfaz:

```
src/
  domain/          Entidades, el puerto PortfolioRepository y servicios puros (fechas, idioma)
  application/     Casos de uso: GetPortfolio, summarizeProjects
  infrastructure/  Contenido en español e inglés, el adaptador del repositorio y la composición (container.ts)
  presentation/    Componentes React, íconos de herramientas y el diccionario de interfaz
  app/[locale]/    Rutas de Next.js: solo ensamblan casos de uso y componentes
  proxy.ts         Redirige "/" a /es o /en
```

Las dependencias apuntan hacia adentro: presentación e infraestructura conocen al dominio, nunca al revés. Para cambiar el origen del contenido por un CMS o una API, se escribe otro adaptador de `PortfolioRepository` y se cambia una línea en `container.ts`.

## Ejecutarlo en local

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # pruebas unitarias (Vitest)
npm run typecheck
npm run build
```

## Pruebas

Las pruebas cubren la lógica y la integridad del contenido:

- Formato de fechas y negociación de idioma.
- Las dos traducciones mantienen la **misma estructura**: si falta una viñeta, un proyecto o una habilidad en un idioma, las pruebas fallan.
- Todos los logos e íconos que usa el contenido existen de verdad.
- Un proyecto no puede figurar como publicado sin repositorio.

## Actualizar el contenido

Todo el texto vive en dos archivos, que se editan juntos:

- `src/infrastructure/content/portfolio-es.ts`
- `src/infrastructure/content/portfolio-en.ts`

Las etiquetas de la interfaz (menú, botones) están en `src/presentation/i18n/dictionary.ts`.

## Hablemos

- 🌐 [javieraquino.com](https://javieraquino.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/javieraquinov1/)
- ✉️ contacto@javieraquino.com
