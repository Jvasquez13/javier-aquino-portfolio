/**
 * Builds the downloadable CVs (PDF, Spanish and English) from the same content the site renders,
 * so the website and the CV can never disagree.
 *
 *   npm run build:cv
 *
 *   npm run build:cv:private   (English CV for U.S./Canada applications, written to ./cv-private)
 *
 * ATS-friendly on purpose: one column, real text (no images), standard fonts, plain headings.
 * The public CVs (public/cv, served by the site) do not include the phone number or personal status.
 * The private variant adds the phone (read from CV_PHONE in .env.local, which git ignores) and the
 * work-authorization / relocation line. Never hardcode the phone here: the repository is public.
 *
 * Runs on Node 22+/24 (type stripping lets it import the .ts content files directly).
 */
import { createWriteStream, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import PDFDocument from "pdfkit";
import { portfolioEn } from "../src/infrastructure/content/portfolio-en.ts";
import { portfolioEs } from "../src/infrastructure/content/portfolio-es.ts";
import { dictionaries } from "../src/presentation/i18n/dictionary.ts";
import { formatMonthYear, formatPeriod } from "../src/domain/services/format-date.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public", "cv");
const privateDir = resolve(root, "cv-private");

/** Reads KEY=value pairs from .env.local (git-ignored) without adding a dependency. */
function readLocalEnv() {
  const file = resolve(root, ".env.local");
  if (!existsSync(file)) return {};
  const env = {};
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return env;
}

// CV-only copy: a keyword-rich summary and the section titles, per language.
const COPY = {
  en: {
    summary:
      "QA Lead with three years of experience in high-impact banking and financial systems. Leads one of the QA squads on TOKE, the first Zelle/Bizum-style instant payment platform launched in the Dominican Republic, and works across backend and front-end QA. Test automation engineer (SDET practices) with WebdriverIO, Appium and Karate Framework, plus API testing, regression testing, performance and load testing with K6 and Apache JMeter, CI/CD with Jenkins, and Agile/Scrum delivery. Backend regression automated for about 90% of the test cases of critical microservices.",
    h: { summary: "Professional Summary", skills: "Technical Skills", experience: "Professional Experience", education: "Education", certs: "Certifications", languages: "Languages" },
    site: "javieraquino.com",
  },
  es: {
    summary:
      "QA Lead con tres años de experiencia en sistemas bancarios y financieros de alto impacto. Lidero uno de los squads de QA de TOKE, la primera plataforma de pagos instantáneos tipo Zelle/Bizum lanzada en República Dominicana, y trabajo en QA de backend y front-end. Ingeniero de automatización de pruebas (prácticas SDET) con WebdriverIO, Appium y Karate Framework, además de API testing, pruebas de regresión, pruebas de rendimiento y carga con K6 y Apache JMeter, CI/CD con Jenkins y entrega Agile/Scrum. Regresión de backend automatizada en alrededor del 90 % de los casos de prueba de los microservicios críticos.",
    h: { summary: "Resumen profesional", skills: "Habilidades técnicas", experience: "Experiencia profesional", education: "Formación", certs: "Certificaciones", languages: "Idiomas" },
    site: "javieraquino.com",
  },
};

const ink = "#111111";
const grey = "#444444";
const plain = (s) => s.replace(/–/g, "-"); // plain hyphen: safest for ATS text extraction

function build(locale, portfolio, file, { dir = outDir, phone, relocation } = {}) {
  const copy = COPY[locale];
  const dates = dictionaries[locale].dates;
  const { profile } = portfolio;

  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: 50, bottom: 50, left: 56, right: 56 },
    info: { Title: `${profile.fullName} - CV`, Author: profile.fullName, Subject: profile.role, Keywords: "QA Lead, Test Automation, SDET" },
  });
  doc.pipe(createWriteStream(resolve(dir, file)));

  const width = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const heading = (text) => {
    doc.moveDown(0.9).font("Helvetica-Bold").fontSize(10.5).fillColor(ink).text(text.toUpperCase(), { characterSpacing: 0.6 });
    const y = doc.y + 1;
    doc.moveTo(doc.page.margins.left, y).lineTo(doc.page.margins.left + width, y).lineWidth(0.7).strokeColor(ink).stroke();
    doc.moveDown(0.45);
  };
  const body = (text, opts = {}) => doc.font("Helvetica").fontSize(9.6).fillColor(ink).text(text, { lineGap: 1.4, ...opts });
  const bullets = (items) => {
    doc.font("Helvetica").fontSize(9.6).fillColor(ink);
    doc.list(items, { bulletRadius: 1.5, textIndent: 12, bulletIndent: 3, lineGap: 1.4, paragraphGap: 2.2 });
  };

  // Header
  doc.font("Helvetica-Bold").fontSize(20).fillColor(ink).text(profile.fullName, { align: "center" });
  doc.font("Helvetica-Bold").fontSize(11.5).fillColor(grey).text(plain(profile.role), { align: "center" });
  doc.moveDown(0.35);
  doc.font("Helvetica").fontSize(9.2).fillColor(ink).text(
    [profile.email, phone, "linkedin.com/in/javieraquinov1", copy.site, profile.location].filter(Boolean).join("  |  "),
    { align: "center" },
  );
  if (relocation) doc.font("Helvetica-Bold").fontSize(9.2).fillColor(ink).text(relocation, { align: "center" });
  doc.font("Helvetica").fontSize(9.2).fillColor(grey).text(profile.availability, { align: "center" });

  heading(copy.h.summary);
  body(copy.summary);

  heading(copy.h.skills);
  for (const group of portfolio.skills) {
    doc.font("Helvetica-Bold").fontSize(9.6).fillColor(ink).text(`${group.name}: `, { continued: true, lineGap: 1.4 });
    doc.font("Helvetica").text(group.items.join(", "));
    doc.moveDown(0.15);
  }

  heading(copy.h.experience);
  portfolio.experience.forEach((job, i) => {
    if (i > 0) doc.moveDown(0.6);
    doc.font("Helvetica-Bold").fontSize(10.4).fillColor(ink).text(`${job.role}, ${job.company}`, { keepWithNext: true } );
    doc.font("Helvetica-Oblique").fontSize(9.2).fillColor(grey).text(plain(`${formatPeriod(job.start, job.end, dates)}  |  ${job.location}`), { keepWithNext: true });
    if (job.context) doc.font("Helvetica-Oblique").fontSize(9.2).fillColor(grey).text(job.context, { lineGap: 1.2, keepWithNext: true });
    doc.moveDown(0.25);
    bullets(job.highlights);
  });

  heading(copy.h.education);
  portfolio.education.forEach((item, i) => {
    if (i > 0) doc.moveDown(0.5);
    doc.font("Helvetica-Bold").fontSize(10.4).fillColor(ink).text(item.degree, { keepWithNext: true });
    doc.font("Helvetica-Oblique").fontSize(9.2).fillColor(grey).text(plain(`${item.institution}  |  ${formatPeriod(item.start, item.end, dates)}`), { keepWithNext: true });
    doc.moveDown(0.2);
    bullets(item.notes);
  });

  heading(copy.h.certs);
  bullets(portfolio.certifications.map((c) => `${c.name} - ${c.issuer}, ${formatMonthYear(c.date, dates)}`));

  heading(copy.h.languages);
  body(portfolio.languages.join("  |  "));

  doc.end();
  return file;
}

if (process.argv.includes("--private")) {
  // CV_PHONE from the environment wins over .env.local; --out=<dir> picks another folder (e.g. a scoring copy
  // with a fake number for third-party ATS checkers, so the real phone never leaves this machine).
  const phone = process.env.CV_PHONE || readLocalEnv().CV_PHONE;
  if (!phone) {
    console.error("Missing CV_PHONE in .env.local, e.g. CV_PHONE=\"+1 809-555-0100\"");
    process.exit(1);
  }
  const outArg = process.argv.find((a) => a.startsWith("--out="));
  const targetDir = outArg ? resolve(outArg.slice("--out=".length)) : privateDir;
  mkdirSync(targetDir, { recursive: true });
  // "No sponsorship" is true for the U.S. only; Canada needs a work permit or a residence route, so say it that way.
  const relocation = "U.S. citizen (no work authorization or sponsorship needed in the U.S.)  |  Open to relocation to the U.S. and Canada";
  console.log("built", build("en", portfolioEn, "Javier-Aquino-CV-US-CA-EN.pdf", { dir: targetDir, phone, relocation }));
} else {
  mkdirSync(outDir, { recursive: true });
  console.log("built", build("en", portfolioEn, "Javier-Aquino-CV-EN.pdf"));
  console.log("built", build("es", portfolioEs, "Javier-Aquino-CV-ES.pdf"));
}
