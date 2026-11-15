import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { isLocale } from "@/domain/entities/locale";
import { getPortfolio } from "@/infrastructure/container";
import { readableBrandColor } from "@/presentation/components/brand-color";
import { iconFor } from "@/presentation/components/tool";
import { dictionaries } from "@/presentation/i18n/dictionary";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Javier Aquino, QA Lead & SDET";

const COLORS = {
  bg: "#0a1020",
  surface: "#111a31",
  code: "#0c1328",
  line: "#243157",
  text: "#e8edf7",
  muted: "#9ba9c6",
  dim: "#6f7fa3",
  accent: "#8aa6ff",
  pass: "#4ade9a",
  skip: "#f2c14e",
};

/** Link-preview card: the top of the portfolio (name, role, BDD scenario, tools). No photo. */
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = dictionaries[locale];
  const { profile, featuredScenario: scenario, featuredTools } = await getPortfolio.execute(locale);
  const icons = featuredTools.flatMap((name) => {
    const icon = iconFor(name);
    return icon ? [icon] : [];
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: COLORS.bg,
          color: COLORS.text,
          padding: 56,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", width: 520 }}>
            <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
              {profile.displayName}
            </div>
            <div style={{ fontSize: 38, fontWeight: 600, color: COLORS.accent, marginTop: 14 }}>
              {profile.role}
            </div>
            <div style={{ fontSize: 25, color: "#cfd8ea", marginTop: 26, lineHeight: 1.4 }}>
              {profile.headline}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 500,
              background: COLORS.code,
              border: `2px solid ${COLORS.line}`,
              borderRadius: 20,
              padding: 24,
            }}
          >
            <div style={{ display: "flex", fontSize: 18, color: COLORS.dim, marginBottom: 12 }}>{scenario.file}</div>
            <div style={{ display: "flex", fontSize: 20, color: COLORS.text }}>
              <div style={{ display: "flex", width: 152, color: COLORS.accent }}>{t.gherkin.feature}</div>
              <div style={{ display: "flex", width: 292 }}>{scenario.feature}</div>
            </div>
            <div style={{ display: "flex", fontSize: 20, marginTop: 8, marginLeft: 16, color: COLORS.text }}>
              <div style={{ display: "flex", width: 120, color: COLORS.accent }}>{t.gherkin.scenario}</div>
              <div style={{ display: "flex", width: 308 }}>{scenario.name}</div>
            </div>
            {scenario.steps.map((step) => (
              <div key={step.text} style={{ display: "flex", alignItems: "flex-start", marginTop: 9, marginLeft: 16 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" style={{ marginTop: 3, marginRight: 10 }}>
                  <path
                    d="M4 12.5l5 5L20 6.5"
                    fill="none"
                    stroke={COLORS.pass}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div style={{ display: "flex", width: 392, fontSize: 19, color: COLORS.text }}>
                  <div style={{ display: "flex", width: 98, color: COLORS.skip }}>{t.gherkin.steps[step.keyword]}</div>
                  <div style={{ display: "flex", width: 294 }}>{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex" }}>
            {icons.map((icon) => (
              <div
                key={icon.slug}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 62,
                  height: 62,
                  marginRight: 14,
                  background: COLORS.surface,
                  border: `2px solid ${COLORS.line}`,
                  borderRadius: 16,
                }}
              >
                <svg width="30" height="30" viewBox="0 0 24 24">
                  <path d={icon.path} fill={readableBrandColor(icon.hex)} />
                </svg>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, color: COLORS.muted }}>javieraquino.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
