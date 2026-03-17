"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const features = [
  { num: "01", title: "Conception du questionnaire", desc: "Élaboration d'un questionnaire structuré et validé méthodologiquement." },
  { num: "02", title: "Échantillonnage", desc: "Définition d'un échantillon représentatif adapté à vos objectifs." },
  { num: "03", title: "Collecte des données", desc: "Administration en ligne, téléphone ou terrain selon vos besoins." },
  { num: "04", title: "Analyse statistique", desc: "Traitement avancé des données avec tests de significativité." },
  { num: "05", title: "Visualisation", desc: "Tableaux de bord et graphiques pour une lecture claire des résultats." },
  { num: "06", title: "Recommandations", desc: "Insights actionnables pour orienter vos décisions stratégiques." },
];

const benefits = [
  { num: "01", title: "Données fiables", desc: "Méthodologie rigoureuse garantissant la qualité des résultats." },
  { num: "02", title: "Représentativité", desc: "Échantillons construits pour refléter fidèlement votre cible." },
  { num: "03", title: "Rapidité", desc: "Résultats disponibles en quelques semaines." },
];

export default function EnqueteQuantitativePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
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
              backgroundImage: "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div className="site-container" style={{ width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
                  Nos prestations
                </p>
                <h1 className="animate-slideUp sp-hero-title" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "700px", lineHeight: 1.2, animationDelay: "0.1s" }}>
                  Enquête quantitative
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
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "center" }}>
              <div style={{ opacity: isVisible("intro") ? 1 : 0, transform: isVisible("intro") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.4, marginBottom: "24px" }}>
                  Mesurez, comprenez, décidez avec des données solides
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "16px" }}>
                  Nos enquêtes quantitatives vous permettent de collecter des données chiffrées auprès d'un large échantillon, 
                  pour des analyses statistiques robustes et des conclusions généralisables.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  Que ce soit pour mesurer la satisfaction client, tester un concept ou analyser un marché, 
                  nous concevons des études sur-mesure.
                </p>
              </div>
              <div style={{ opacity: isVisible("intro") ? 1 : 0, transform: isVisible("intro") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
                <div
                  style={{
                    aspectRatio: "4/3",
                    backgroundImage: "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
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
          <div className="site-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Méthodologie
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#18181b" }}>Notre processus</h2>
            </div>

            <div className="sp-grid-3" style={{ gap: "24px" }}>
              {features.map((feature, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActiveFeature(i)}
                  onMouseLeave={() => setActiveFeature(null)}
                  style={{
                    backgroundColor: activeFeature === i ? "#18181b" : "#ffffff",
                    padding: "40px 32px",
                    border: "1px solid #e4e4e7",
                    cursor: "pointer",
                    opacity: isVisible("process") ? 1 : 0,
                    transform: isVisible("process") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                    transitionDelay: `${i * 0.05}s, ${i * 0.05}s, 0s, 0s`,
                    boxShadow: activeFeature === i ? "0 20px 40px rgba(0,0,0,0.15)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: activeFeature === i ? "rgba(255,255,255,0.5)" : "#a1a1aa",
                      letterSpacing: "0.1em",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {feature.num}
                  </span>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: activeFeature === i ? "#ffffff" : "#18181b",
                      margin: "16px 0 12px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: activeFeature === i ? "rgba(255,255,255,0.7)" : "#71717a",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section
          id="benefits"
          ref={(el) => { sectionRefs.current["benefits"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-sidebar" style={{ gap: "80px", alignItems: "start" }}>
              <div style={{ position: "sticky", top: "120px", opacity: isVisible("benefits") ? 1 : 0, transform: isVisible("benefits") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                  Avantages
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.3 }}>
                  Pourquoi choisir l'approche quantitative ?
                </h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "24px",
                      padding: "32px",
                      backgroundColor: "#fafafa",
                      border: "1px solid #e4e4e7",
                      opacity: isVisible("benefits") ? 1 : 0,
                      transform: isVisible("benefits") ? "translateX(0)" : "translateX(80px)",
                      transition: "opacity 0.6s ease, transform 0.6s ease",
                      transitionDelay: `${0.2 + i * 0.1}s`,
                    }}
                  >
                    <span style={{ fontSize: "48px", fontWeight: 200, color: "#e4e4e7", lineHeight: 1, flexShrink: 0 }}>{benefit.num}</span>
                    <div>
                      <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#18181b", marginBottom: "8px" }}>
                        {benefit.title}
                      </h3>
                      <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#71717a" }}>{benefit.desc}</p>
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
              Lancez votre étude quantitative
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              Obtenez des données fiables pour éclairer vos décisions stratégiques.
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
