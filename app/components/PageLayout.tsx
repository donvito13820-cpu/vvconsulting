import { ReactNode } from "react";
import Reveal from "@/app/components/motion/Reveal";
import TextReveal from "@/app/components/motion/TextReveal";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  heroImage?: string;
  children: ReactNode;
}

export default function PageLayout({ title, subtitle, heroImage, children }: PageLayoutProps) {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      {/* Spacer for fixed header */}
      <div style={{ height: "72px" }} />

      {/* Hero section with optional image */}
      {heroImage ? (
        <section style={{ position: "relative", height: "400px", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 8s ease-out",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
            }}
          />
          <div
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              paddingBottom: "48px",
            }}
          >
            <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px", width: "100%" }}>
              <Reveal x={0} y={24}>
                <h1
                  className="sp-hero-title"
                  style={{
                    fontSize: "42px",
                    fontWeight: 300,
                    color: "#ffffff",
                    marginBottom: subtitle ? "16px" : 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  <TextReveal text={title} />
                </h1>
              </Reveal>
              {subtitle && (
                <Reveal x={0} y={20} delay={0.15}>
                  <p
                    style={{
                      maxWidth: "600px",
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {subtitle}
                  </p>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section
          style={{
            backgroundColor: "#fafafa",
            borderBottom: "1px solid #e4e4e7",
            padding: "64px 0",
          }}
        >
          <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
            <Reveal x={0} y={20}>
              <h1
                className="sp-hero-title"
                style={{
                  fontSize: "38px",
                  fontWeight: 300,
                  color: "#18181b",
                  marginBottom: subtitle ? "16px" : 0,
                  letterSpacing: "-0.02em",
                }}
              >
                <TextReveal text={title} />
              </h1>
            </Reveal>
            {subtitle && (
              <Reveal x={0} y={16} delay={0.15}>
                <p
                  style={{
                    maxWidth: "600px",
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "#71717a",
                  }}
                >
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Page content */}
      <Reveal style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }} duration={0.6}>
        {children}
      </Reveal>
    </main>
  );
}
