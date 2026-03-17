"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import Link from "next/link";

const useCases = [
  { num: "01", title: "Analyse de données", desc: "Extraction d'insights à partir de vos données structurées et non structurées." },
  { num: "02", title: "Automatisation cognitive", desc: "Traitement intelligent de documents, emails et requêtes." },
  { num: "03", title: "IA conversationnelle", desc: "Chatbots et assistants virtuels pour vos clients ou collaborateurs." },
  { num: "04", title: "Prédiction & scoring", desc: "Modèles prédictifs pour anticiper comportements et risques." },
  { num: "05", title: "Vision par ordinateur", desc: "Analyse automatique d'images et de vidéos." },
  { num: "06", title: "NLP & text mining", desc: "Compréhension et analyse automatique du langage naturel." },
];

const steps = [
  { title: "Audit IA", desc: "Évaluation de votre maturité data et identification des opportunités." },
  { title: "POC", desc: "Proof of concept rapide pour valider la faisabilité technique." },
  { title: "Développement", desc: "Construction de la solution avec les meilleures pratiques MLOps." },
  { title: "Déploiement", desc: "Mise en production et intégration dans vos systèmes existants." },
];

const stats = [
  { value: "10x", label: "Productivité accrue" },
  { value: "60%", label: "Coûts réduits" },
  { value: "95%", label: "Précision" },
  { value: "24/7", label: "Disponibilité" },
];

export default function SolutionIAPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (visibleSections.has("steps")) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [visibleSections]);

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
              backgroundImage: "url(https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div className="site-container" style={{ width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
                  Nos prestations
                </p>
                <h1 className="animate-slideUp sp-hero-title" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "700px", lineHeight: 1.2, animationDelay: "0.1s" }}>
                  Solutions IA
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction avec stats animés */}
        <section
          id="intro"
          ref={(el) => { sectionRefs.current["intro"] = el; }}
          style={{ padding: "100px 0", borderBottom: "1px solid #f4f4f5" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "center" }}>
              <div
                style={{
                  opacity: isVisible("intro") ? 1 : 0,
                  transform: isVisible("intro") ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.4, marginBottom: "24px" }}>
                  L'intelligence artificielle au service de votre performance
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  Nous développons des solutions IA sur-mesure qui transforment vos données en valeur concrète. 
                  De l'analyse prédictive à l'automatisation cognitive, nous vous accompagnons dans l'adoption 
                  des technologies les plus avancées.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  opacity: isVisible("intro") ? 1 : 0,
                  transform: isVisible("intro") ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: "0.2s",
                }}
              >
                {stats.map((stat, i) => (
                  <div key={i} style={{ padding: "32px", backgroundColor: "#fafafa", textAlign: "center" }}>
                    <div style={{ fontSize: "36px", fontWeight: 200, color: "#18181b", marginBottom: "8px" }}>
                      <AnimatedCounter value={stat.value} duration={2000} />
                    </div>
                    <p style={{ fontSize: "13px", color: "#71717a" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section
          id="cases"
          ref={(el) => { sectionRefs.current["cases"] = el; }}
          style={{ padding: "100px 0", backgroundColor: "#fafafa" }}
        >
          <div className="site-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Cas d'usage
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#18181b" }}>Applications concrètes</h2>
            </div>

            <div className="sp-grid-3" style={{ gap: "24px" }}>
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCase(i)}
                  onMouseLeave={() => setHoveredCase(null)}
                  style={{
                    backgroundColor: hoveredCase === i ? "#18181b" : "#ffffff",
                    padding: "40px 32px",
                    border: "1px solid #e4e4e7",
                    cursor: "pointer",
                    opacity: isVisible("cases") ? 1 : 0,
                    transform: isVisible("cases") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                    transitionDelay: `${i * 0.05}s, ${i * 0.05}s, 0s, 0s`,
                    boxShadow: hoveredCase === i ? "0 20px 40px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 500, color: hoveredCase === i ? "rgba(255,255,255,0.5)" : "#a1a1aa", letterSpacing: "0.1em", transition: "color 0.3s ease" }}>{useCase.num}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: hoveredCase === i ? "#ffffff" : "#18181b",
                      marginBottom: "12px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {useCase.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: hoveredCase === i ? "rgba(255,255,255,0.7)" : "#71717a",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {useCase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section
          id="steps"
          ref={(el) => { sectionRefs.current["steps"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "start" }}>
              <div style={{ position: "sticky", top: "120px", opacity: isVisible("steps") ? 1 : 0, transform: isVisible("steps") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                  Notre approche
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.3, marginBottom: "24px" }}>
                  De l'idée au déploiement
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#71717a" }}>
                  Une méthodologie agile pour livrer rapidement de la valeur tout en minimisant les risques.
                </p>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "15px", top: "0", bottom: "0", width: "2px", backgroundColor: "#e4e4e7" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#18181b",
                      height: `${((activeStep + 1) / steps.length) * 100}%`,
                      transition: "height 0.5s ease",
                    }}
                  />
                </div>

                {steps.map((step, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveStep(i)}
                    style={{
                      display: "flex",
                      gap: "24px",
                      padding: "32px 0",
                      cursor: "pointer",
                      opacity: isVisible("steps") ? 1 : 0,
                      transform: isVisible("steps") ? "translateX(0)" : "translateX(80px)",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: activeStep >= i ? "#18181b" : "#ffffff",
                        border: "2px solid",
                        borderColor: activeStep >= i ? "#18181b" : "#e4e4e7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span style={{ fontSize: "12px", fontWeight: 500, color: activeStep >= i ? "#ffffff" : "#a1a1aa" }}>
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "18px", fontWeight: activeStep === i ? 500 : 400, color: "#18181b", marginBottom: "8px" }}>
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: "#71717a",
                          maxHeight: activeStep === i ? "100px" : "0",
                          overflow: "hidden",
                          opacity: activeStep === i ? 1 : 0,
                          transition: "all 0.4s ease",
                        }}
                      >
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
          <div className="site-container" style={{ textAlign: "center" }}>
            <h2 className="sp-cta-title" style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              Exploitez le potentiel de l'IA
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              Transformez vos données en avantage compétitif durable.
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
              Discutons de votre projet
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
