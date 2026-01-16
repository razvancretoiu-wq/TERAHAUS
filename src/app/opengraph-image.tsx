import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: -1,
          }}
        >
          TERAHAUS
        </div>

        <div style={{ marginTop: 18, fontSize: 34, fontWeight: 600 }}>
          Riflaje WPC • Decking • Placări premium
        </div>

        <div style={{ marginTop: 22, fontSize: 26, color: "#4b5563" }}>
          Interior & Exterior
        </div>

        <div style={{ marginTop: 42, fontSize: 24, color: "#111827" }}>
          Durabil. Funcțional. Estetic. Natural.
        </div>

        <div style={{ marginTop: 14, fontSize: 18, color: "#6b7280" }}>
          terahaus.ro
        </div>

        <div
          style={{
            position: "absolute",
            right: 72,
            bottom: 72,
            width: 120,
            height: 120,
            borderRadius: 28,
            border: "1px solid #e5e7eb",
            background: "#f9fafb",
          }}
        />
      </div>
    ),
    size
  );
}
