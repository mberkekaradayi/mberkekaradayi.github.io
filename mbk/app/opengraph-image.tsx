import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Mehmet Berke Karadayi · Software Engineer — frontend architecture and real-time product systems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#060d1a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 72,
        paddingRight: 72,
        gap: 20,
        borderBottom: "4px solid #4f9cf8",
      }}
    >
      <div style={{ fontSize: 54, color: "#e8eef6", fontWeight: 300 }}>
        Mehmet Berke Karadayi
      </div>
      <div
        style={{
          fontSize: 30,
          color: "#4f9cf8",
          fontWeight: 500,
          letterSpacing: "0.02em",
        }}
      >
        Software Engineer
      </div>
      <div
        style={{
          fontSize: 22,
          color: "#aabfd4",
          maxWidth: 880,
          lineHeight: 1.45,
        }}
      >
        Frontend architecture, real-time product systems, and AI-assisted
        engineering workflows.
      </div>
    </div>,
    { ...size },
  );
}
