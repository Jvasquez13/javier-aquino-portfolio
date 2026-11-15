import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: same "JA" monogram as the favicon. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1020",
          color: "#8aa6ff",
          fontSize: 92,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        JA
      </div>
    ),
    { ...size },
  );
}
