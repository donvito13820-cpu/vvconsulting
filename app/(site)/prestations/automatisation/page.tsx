"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import Link from "next/link";

const domains = [
  { title: "Finance & Comptabilité", desc: "Rapprochements bancaires, facturation, reporting automatisé.", color: "#3b82f6" },
  { title: "RH & Administration", desc: "Onboarding, gestion des congés, paie et déclarations.", color: "#10b981" },
  { title: "Commercial & CRM", desc: "Qualification de leads, relances automatiques, devis.", color: "#f59e0b" },
  { title: "Opérations & Logistique", desc: "Gestion des stocks, commandes, suivi des livraisons.", color: "#8b5cf6" },
];

const benefits = [
  { value: "85%", label: "de temps gagné sur les tâches répétitives" },
  { value: "0", label: "erreur de saisie manuelle" },
  { value: "24/7", label: "de fonctionnement continu" },
  { value: "3x", label: "ROI moyen la première année" },
];

const technologies = ["Zapier", "Make", "n8n", "Power Automate", "Python", "APIs REST"];

export default function AutomatisationPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null);
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
              backgroundImage: "url(https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div className="site-container" style={{ width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
                  Nos prestations
                </p>
                <h1 className="animate-slideUp sp-hero-title" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "700px", lineHeight: 1.2, animationDelay: "0.1s" }}>
                  Automatisation
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits - Compteurs animés */}
        <section
          id="benefits"
          ref={(el) => { sectionRefs.current["benefits"] = el; }}
          style={{ backgroundColor: "#18181b", padding: "80px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-4" style={{ gap: "40px" }}>
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "center",
                    opacity: isVisible("benefits") ? 1 : 0,
                    transform: isVisible("benefits") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <div style={{ fontSize: "48px", fontWeight: 200, color: "#ffffff", marginBottom: "8px" }}>
                    <AnimatedCounter value={benefit.value} duration={2000} />
                  </div>
                  <p style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: 1.5 }}>{benefit.label}</p>
                </div>
              ))}
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
                  Libérez vos équipes des tâches répétitives
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "16px" }}>
                  L'automatisation permet à vos collaborateurs de se concentrer sur des activités à forte valeur ajoutée, 
                  tout en réduisant les erreurs et les délais de traitement.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  Nous analysons vos processus, identifions les opportunités d'automatisation et implémentons 
                  des solutions robustes et évolutives.
                </p>
              </div>
              <div style={{ opacity: isVisible("intro") ? 1 : 0, transform: isVisible("intro") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.8s ease, transform 0.8s ease", transitionDelay: "0.2s" }}>
                <div
                  style={{
                    aspectRatio: "4/3",
                    backgroundImage: "url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Domains */}
        <section
          id="domains"
          ref={(el) => { sectionRefs.current["domains"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "100px 0" }}
        >
          <div className="site-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Domaines d'application
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#18181b" }}>Où automatiser ?</h2>
            </div>

            <div className="sp-grid-2" style={{ gap: "24px" }}>
              {domains.map((domain, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredDomain(i)}
                  onMouseLeave={() => setHoveredDomain(null)}
                  style={{
                    position: "relative",
                    backgroundColor: "#ffffff",
                    padding: "48px 40px",
                    border: "1px solid #e4e4e7",
                    cursor: "pointer",
                    overflow: "hidden",
                    opacity: isVisible("domains") ? 1 : 0,
                    transform: isVisible("domains") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, box-shadow 0.3s ease",
                    transitionDelay: `${i * 0.1}s, 0s`,
                    boxShadow: hoveredDomain === i ? "0 20px 40px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: hoveredDomain === i ? "6px" : "4px",
                      backgroundColor: domain.color,
                      transition: "width 0.3s ease",
                    }}
                  />
                  <div style={{ paddingLeft: "16px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#18181b", marginBottom: "12px" }}>
                      {domain.title}
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#71717a" }}>{domain.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section
          id="tech"
          ref={(el) => { sectionRefs.current["tech"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-sidebar" style={{ gap: "80px", alignItems: "center" }}>
              <div style={{ opacity: isVisible("tech") ? 1 : 0, transform: isVisible("tech") ? "translateX(0)" : "translateX(80px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                  Technologies
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.3 }}>
                  Les outils que nous maîtrisons
                </h2>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "16px 28px",
                      backgroundColor: "#fafafa",
                      border: "1px solid #e4e4e7",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#3f3f46",
                      opacity: isVisible("tech") ? 1 : 0,
                      transform: isVisible("tech") ? "translateX(0)" : "translateX(80px)",
                      transition: "opacity 0.5s ease, transform 0.6s ease",
                      transitionDelay: `${i * 0.08}s`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#18181b", padding: "100px 0" }}>
          <div className="site-container" style={{ textAlign: "center" }}>
            <h2 className="sp-cta-title" style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              Automatisez vos processus dès maintenant
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              Identifions ensemble les opportunités d'automatisation dans votre organisation.
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
              Demander un audit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
