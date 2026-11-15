import type { CSSProperties } from "react";
import type { Scenario } from "@/domain/entities/portfolio";
import type { Dictionary } from "../i18n/dictionary";

const STEP_MS = 420;
const START_MS = 500;

/** Cucumber-style run: the steps appear one by one and each turns green. */
export function GherkinCard({ scenario, t }: { scenario: Scenario; t: Dictionary["gherkin"] }) {
  const n = scenario.steps.length;
  const summaryDelay = START_MS + n * STEP_MS + 150;

  return (
    <div className="gherkin" role="group" aria-label={t.label(scenario.name, n)}>
      <p className="gherkin-file">{scenario.file}</p>
      <div className="gherkin-code" aria-hidden="true">
        <p className="ln comment">{t.language}</p>
        <p className="ln">
          <span className="kw">{t.feature}</span> {scenario.feature}
        </p>
        <p className="ln scenario">
          <span className="kw">{t.scenario}</span> {scenario.name}
        </p>
        {scenario.steps.map((step, i) => (
          <p
            key={step.text}
            className="ln step"
            style={{ "--delay": `${START_MS + i * STEP_MS}ms` } as CSSProperties}
          >
            <span className="check">✓</span>
            <span className="step-kw">{t.steps[step.keyword]}</span> {step.text}
          </p>
        ))}
        <p className="ln summary" style={{ "--delay": `${summaryDelay}ms` } as CSSProperties}>
          <span className="ok">{t.scenarioSummary}</span>
          <span className="ok">{t.stepsSummary(n)}</span>
        </p>
      </div>
    </div>
  );
}
