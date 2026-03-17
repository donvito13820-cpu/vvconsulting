"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const processSteps = [
  { num: "01", title: "Diagnostic", desc: "Analyse de l'existant et identification des opportunités d'amélioration.", duration: "1-2 semaines" },
  { num: "02", title: "Conception", desc: "Définition de la solution cible et planification détaillée.", duration: "2-3 semaines" },
  { num: "03", title: "Implémentation", desc: "Développement et mise en place dans un cadre maîtrisé.", duration: "Variable" },
  { num: "04", title: "Optimisation", desc: "Suivi des performances et amélioration continue.", duration: "Continu" },
];

const engagements = [
  { icon: "◆", title: "Transparence", desc: "Communication claire et régulière sur l'avancement et les décisions à prendre." },
  { icon: "◇", title: "Qualité", desc: "Des livrables soignés, testés et documentés. Nous ne transigeons pas sur la qualité." },
  { icon: "○", title: "Respect des délais", desc: "Les engagements de planning sont tenus. En cas d'aléa, nous alertons immédiatement." },
  { icon: "□", title: "Confidentialité", desc: "Protection stricte des informations sensibles et engagement contractuel." },
  { icon: "△", title: "Transfert", desc: "Nous documentons, formons et accompagnons pour assurer la pérennité." },
  { icon: "▽", title: "Satisfaction", desc: "Mesure régulière de la qualité perçue et ajustement de nos pratiques." },
];

const principles = [
  "Toujours partir des besoins réels et non des solutions techniques",
  "Privilégier la simplicité et la maintenabilité",
  "Impliquer les utilisateurs finaux dans la conception",
  "Documenter et transférer les connaissances",
];

export default function NotreApprochePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredEngagement, setHoveredEngagement] = useState<number | null>(null);
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
              backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
                  Notre structure
                </p>
                <h1 className="animate-slideUp" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "700px", lineHeight: 1.2, animationDelay: "0.1s" }}>
                  Notre approche
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section
          id="philosophy"
          ref={(el) => { sectionRefs.current["philosophy"] = el; }}
          style={{ padding: "100px 0", borderBottom: "1px solid #f4f4f5" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", alignItems: "center" }}>
              <div style={{ opacity: isVisible("philosophy") ? 1 : 0, transform: isVisible("philosophy") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "24px" }}>
                  Philosophie
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.3 }}>
                  Comprendre avant d'agir
                </h2>
              </div>
              <div style={{ opacity: isVisible("philosophy") ? 1 : 0, transform: isVisible("philosophy") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.8s ease, transform 0.8s ease", transitionDelay: "0.2s" }}>
                <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b", marginBottom: "24px" }}>
                  Notre approche repose sur un principe fondamental : comprendre avant d'agir. 
                  Chaque intervention commence par une phase d'écoute et d'analyse approfondie 
                  pour identifier les véritables enjeux.
                </p>
                <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b" }}>
                  Nous privilégions les solutions pragmatiques et évolutives, 
                  capables de s'adapter aux changements de votre environnement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id="process"
          ref={(el) => { sectionRefs.current["process"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "100px 0" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Méthodologie
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#18181b" }}>Notre processus</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    position: "relative",
                    padding: "40px 32px",
                    backgroundColor: activeStep === i ? "#18181b" : "#ffffff",
                    cursor: "pointer",
                    opacity: isVisible("process") ? 1 : 0,
                    transform: isVisible("process") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, background-color 0.3s ease",
                    transitionDelay: `${i * 0.1}s, 0s`,
                  }}
                >
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: activeStep === i ? "rgba(255,255,255,0.5)" : "#a1a1aa",
                        letterSpacing: "0.1em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: activeStep === i ? "#ffffff" : "#18181b",
                        margin: "16px 0 12px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.7,
                        color: activeStep === i ? "rgba(255,255,255,0.7)" : "#71717a",
                        marginBottom: "16px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {step.desc}
                    </p>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: activeStep === i ? "rgba(255,255,255,0.5)" : "#a1a1aa",
                        letterSpacing: "0.05em",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section
          id="engagements"
          ref={(el) => { sectionRefs.current["engagements"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Garanties
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#18181b" }}>Nos engagements</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
              {engagements.map((engagement, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredEngagement(i)}
                  onMouseLeave={() => setHoveredEngagement(null)}
                  style={{
                    padding: "40px 32px",
                    backgroundColor: hoveredEngagement === i ? "#18181b" : "#fafafa",
                    border: "1px solid #e4e4e7",
                    cursor: "default",
                    opacity: isVisible("engagements") ? 1 : 0,
                    transform: isVisible("engagements") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                    transitionDelay: `${i * 0.05}s, 0s, 0s`,
                    boxShadow: hoveredEngagement === i ? "0 20px 40px rgba(0,0,0,0.15)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      color: hoveredEngagement === i ? "#ffffff" : "#18181b",
                      marginBottom: "20px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {engagement.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: hoveredEngagement === i ? "#ffffff" : "#18181b",
                      marginBottom: "12px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {engagement.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: hoveredEngagement === i ? "rgba(255,255,255,0.7)" : "#71717a",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {engagement.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section
          id="principles"
          ref={(el) => { sectionRefs.current["principles"] = el; }}
          style={{ backgroundColor: "#18181b", padding: "100px 0" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
              <div style={{ opacity: isVisible("principles") ? 1 : 0, transform: isVisible("principles") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#52525b", marginBottom: "24px" }}>
                  Principes directeurs
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", lineHeight: 1.3 }}>
                  Ce qui guide chacune de nos interventions
                </h2>
              </div>
              <div>
                {principles.map((principle, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "24px 0",
                      borderBottom: i < principles.length - 1 ? "1px solid #27272a" : "none",
                      opacity: isVisible("principles") ? 1 : 0,
                      transform: isVisible("principles") ? "translateX(0)" : "translateX(80px)",
                      transition: "opacity 0.5s ease, transform 0.6s ease",
                      transitionDelay: `${0.2 + i * 0.1}s`,
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#27272a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#ffffff",
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#ffffff", padding: "100px 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#18181b", marginBottom: "24px" }}>
              Découvrez notre méthodologie en action
            </h2>
            <p style={{ fontSize: "16px", color: "#71717a", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              Discutons de vos enjeux et de la manière dont nous pouvons vous accompagner.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "52px", padding: "0 40px", backgroundColor: "#18181b", color: "#ffffff",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Nous contacter
              </Link>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "52px", padding: "0 40px", border: "1px solid #e4e4e7", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Prendre RDV
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
