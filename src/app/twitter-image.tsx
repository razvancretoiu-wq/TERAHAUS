import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#ffffff",
          color: "#111827",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
          TERAHAUS
        </div>
        <div style={{ marginTop: 18, fontSize: 32, fontWeight: 600 }}>
          Durabil. Funcțional. Estetic. Natural.
        </div>
        <div style={{ marginTop: 18, fontSize: 22, color: "#4b5563" }}>
          Soluții premium pentru interior & exterior • terahaus.ro
        </div>
      </div>
    ),
    size
  );
}
