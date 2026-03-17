"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const methods = [
  { num: "01", title: "Entretiens individuels", desc: "Conversations approfondies pour explorer les motivations et perceptions." },
  { num: "02", title: "Focus groups", desc: "Dynamiques de groupe pour faire émerger des insights collectifs." },
  { num: "03", title: "Observation terrain", desc: "Immersion dans le contexte réel d'usage pour comprendre les comportements." },
  { num: "04", title: "Études ethnographiques", desc: "Analyse approfondie des pratiques culturelles et sociales." },
];

const process = [
  { num: "01", title: "Cadrage", desc: "Définition des objectifs et du guide d'entretien." },
  { num: "02", title: "Recrutement", desc: "Sélection rigoureuse des participants selon vos critères." },
  { num: "03", title: "Conduite", desc: "Animation des entretiens par des experts." },
  { num: "04", title: "Analyse", desc: "Synthèse thématique et identification des insights." },
];

export default function EnqueteQualitativePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
  const [activeProcess, setActiveProcess] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <>
      <Header variant="solid" />
      
      <main style={{ backgroundColor: "#ffffff" }}>
        {/* Hero */}
        <section style={{ paddingTop: "72px" }}>
          <div
            style={{
              position: "relative",
              height: "50vh",
              minHeight: "400px",
              backgroundImage: "url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
                  Nos prestations
                </p>
                <h1 className="animate-slideUp" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "700px", lineHeight: 1.2, animationDelay: "0.1s" }}>
                  Enquête qualitative
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section
          id="intro"
          ref={(el) => { sectionRefs.current["intro"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ maxWidth: "800px", opacity: isVisible("intro") ? 1 : 0, transform: isVisible("intro") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.8s ease, transform 0.6s ease" }}>
              <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.4, marginBottom: "24px" }}>
                Comprendre le "pourquoi" derrière les comportements
              </h2>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b" }}>
                L'enquête qualitative explore en profondeur les motivations, perceptions et émotions de vos cibles. 
                Elle révèle des insights que les chiffres seuls ne peuvent capturer, pour une compréhension fine 
                de vos utilisateurs et de votre marché.
              </p>
            </div>
          </div>
        </section>

        {/* Methods */}
        <section
          id="methods"
          ref={(el) => { sectionRefs.current["methods"] = el; }}
          style={{ backgroundColor: "#18181b", padding: "100px 0" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ marginBottom: "64px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px" }}>
                Méthodes
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#ffffff" }}>Nos approches qualitatives</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
              {methods.map((method, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredMethod(i)}
                  onMouseLeave={() => setHoveredMethod(null)}
                  style={{
                    backgroundColor: hoveredMethod === i ? "#ffffff" : "transparent",
                    border: "1px solid",
                    borderColor: hoveredMethod === i ? "#ffffff" : "#3f3f46",
                    padding: "40px 28px",
                    textAlign: "center",
                    cursor: "pointer",
                    opacity: isVisible("methods") ? 1 : 0,
                    transform: isVisible("methods") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, background-color 0.3s ease, border-color 0.3s ease",
                    transitionDelay: `${i * 0.1}s, ${i * 0.1}s, 0s, 0s`,
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", color: hoveredMethod === i ? "rgba(24,24,27,0.5)" : "rgba(255,255,255,0.5)", transition: "color 0.3s ease", marginBottom: "20px", display: "block" }}>{method.num}</span>
                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 500,
                      color: hoveredMethod === i ? "#18181b" : "#ffffff",
                      marginBottom: "12px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {method.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                      color: hoveredMethod === i ? "#52525b" : "#a1a1aa",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {method.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process - Accordéon */}
        <section
          id="process"
          ref={(el) => { sectionRefs.current["process"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px" }}>
              <div style={{ opacity: isVisible("process") ? 1 : 0, transform: isVisible("process") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                  Processus
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.3, marginBottom: "24px" }}>
                  Une méthodologie éprouvée
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#71717a" }}>
                  Chaque étape est conçue pour maximiser la richesse des insights tout en garantissant la rigueur méthodologique.
                </p>
              </div>
              <div>
                {process.map((step, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveProcess(i)}
                    style={{
                      borderBottom: "1px solid #e4e4e7",
                      cursor: "pointer",
                      opacity: isVisible("process") ? 1 : 0,
                      transform: isVisible("process") ? "translateX(0)" : "translateX(80px)",
                      transition: "opacity 0.5s ease, transform 0.6s ease",
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "24px 0" }}>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          color: activeProcess === i ? "#18181b" : "#a1a1aa",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {step.num}
                      </span>
                      <h3 style={{ fontSize: "18px", fontWeight: activeProcess === i ? 500 : 400, color: "#18181b", flex: 1 }}>
                        {step.title}
                      </h3>
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transform: activeProcess === i ? "rotate(45deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        +
                      </div>
                    </div>
                    <div
                      style={{
                        maxHeight: activeProcess === i ? "100px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                      }}
                    >
                      <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#71717a", paddingBottom: "24px", paddingLeft: "44px" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#18181b", padding: "100px 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              Explorez les perceptions de vos cibles
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              Découvrez les insights qui feront la différence dans votre stratégie.
            </p>
            <Link
              href="/contact"
              className="btn-hover"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                height: "52px", padding: "0 40px", backgroundColor: "#ffffff", color: "#18181b",
                fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
              }}
            >
              Demander un devis
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
