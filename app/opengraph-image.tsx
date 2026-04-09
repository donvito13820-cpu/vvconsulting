import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VV Consulting — Cabinet de conseil en IA & automatisation pour entreprises";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              border: "1px solid #3f3f46",
              backgroundColor: "#18181b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "0.12em",
              }}
            >
              VV
            </span>
          </div>
          <span
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#ffffff",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            VV Consulting
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 300,
            color: "#ffffff",
            margin: "0 0 24px",
            lineHeight: 1.2,
            maxWidth: "860px",
          }}
        >
          Cabinet de conseil en IA & automatisation pour entreprises
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "20px",
            color: "#71717a",
            margin: 0,
            fontWeight: 300,
          }}
        >
          vv-agence-consulting.com · France
        </p>
      </div>
    ),
    { ...size }
  );
}
