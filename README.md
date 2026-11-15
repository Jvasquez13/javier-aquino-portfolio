# Portafolio QA / Portfolio QA: Javier Aquino

Next.js (App Router) + TypeScript, bilingüe (es/en), con arquitectura limpia.

## Comandos

```bash
npm install
npm run dev        # http://localhost:3000  (redirige a /es o /en según el navegador)
npm test           # pruebas unitarias (Vitest)
npm run typecheck
npm run build
```

## Idiomas

- `/es` y `/en` son rutas reales. `src/proxy.ts` envía `/` al idioma del navegador (inglés si no hay preferencia).
- Contenido: `src/infrastructure/content/portfolio-es.ts` y `portfolio-en.ts`. Deben tener la misma estructura.
  Una prueba falla si falta una viñeta, un paso, un proyecto o una habilidad en un idioma.
- Textos de interfaz (menú, botones, etiquetas): `src/presentation/i18n/dictionary.ts`.
- Para agregar un idioma: sume el código en `domain/entities/locale.ts`, un archivo de contenido y una entrada en el diccionario.

## Arquitectura

La dependencia apunta siempre hacia adentro: presentación e infraestructura conocen al dominio, nunca al revés.

```
src/
  domain/          Entidades, el puerto PortfolioRepository y servicios puros (fechas, idioma)
  application/     Casos de uso: GetPortfolio, summarizeProjects
  infrastructure/  Adaptador StaticPortfolioRepository, los datos y la composición (container.ts)
  presentation/    Componentes React, íconos de herramientas y el diccionario de interfaz
  app/[locale]/    Rutas de Next.js: solo ensamblan casos de uso y componentes
  proxy.ts         Redirección por idioma
```

## Cómo actualizar el contenido

- Cambie el texto en **ambos** archivos de contenido, no solo en uno.
- Cuando termine un proyecto, cambie su `status` de `"skip"` a `"pass"` y agregue `repoUrl` en los dos idiomas. Una prueba (`does not claim a project is published without a repository`) falla si un proyecto figura como publicado sin `repoUrl`.
- La foto está en `public/javier.jpg` (400×400). Si tiene una de mayor resolución, reemplácela.

## Publicar

Vercel es lo más simple: importe el repositorio de GitHub y se despliega solo con cada `push`.
