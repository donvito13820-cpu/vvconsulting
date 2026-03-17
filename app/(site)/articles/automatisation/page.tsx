"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimatedCounter from "@/app/components/AnimatedCounter";

const pertes = [
  {
    num: "01",
    title: "Administration et finance",
    content: "Factures manuelles, relances oubliées, devis non standardisés. Chaque micro-inefficacité semble anodine. Ensemble, elles coûtent cher.",
    highlight: "Une PME de 12 à 20 salariés peut économiser 15 000 à 30 000 € par an simplement en automatisant la facturation et les relances.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 9h20M9 21V9" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Acquisition commerciale",
    content: "Sans automatisation, les prospects refroidissent, les suivis sont irréguliers, le taux de conversion stagne.",
    highlight: "Avec un CRM et des séquences intelligentes : +25 à 40 % de transformation sur les leads existants.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Organisation interne",
    content: "Planning, gestion des stocks, reporting, coordination d'équipe. Une organisation automatisée réduit les erreurs humaines, les retards et les tensions internes.",
    highlight: "Et surtout, elle libère du temps pour la stratégie.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const avantages = [
  "Croître sans recruter trop vite",
  "Absorber plus de clients sans perte de qualité",
  "Augmenter la rentabilité à structure constante",
];

export default function ArticleAutomatisation() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <>
      <Header variant="solid" />

      <main>
        {/* HERO ARTICLE */}
        <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 100%)" }} />

          <div className="animate-slideUp site-container" style={{ position: "relative", zIndex: 2, width: "100%", paddingBottom: "80px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                Transformation
              </span>
              <span style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
              <span style={{ fontSize: "11px", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
                8 min de lecture
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "#ffffff", lineHeight: 1.2, maxWidth: "800px" }}>
              L'automatisation : levier de compétitivité décisif en 2026
            </h1>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section
          id="intro"
          ref={(el) => { sectionRefs.current["intro"] = el; }}
          style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
        >
          <div className="sp-narrow" style={{
            opacity: isVisible("intro") ? 1 : 0,
            transform: isVisible("intro") ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}>
            <p style={{ fontSize: "20px", fontWeight: 300, lineHeight: 1.8, color: "#3f3f46" }}>
              En 2026, les entreprises les plus performantes ne sont pas celles qui travaillent plus.
              Ce sont celles qui travaillent <strong style={{ fontWeight: 500, color: "#18181b" }}>mieux, plus vite et avec moins de frictions</strong>.
            </p>
            <div style={{ width: "60px", height: "2px", backgroundColor: "#18181b", margin: "40px 0" }} />
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b" }}>
              La différence ne se fait plus uniquement sur le produit. Elle se fait sur l'exécution.
              Et l'exécution repose aujourd'hui sur un levier structurant : <strong style={{ fontWeight: 500, color: "#18181b" }}>l'automatisation</strong>.
            </p>
          </div>
        </section>

        {/* STATISTIQUES CLÉS */}
        <section
          id="stats"
          ref={(el) => { sectionRefs.current["stats"] = el; }}
          style={{ backgroundColor: "#09090b", padding: "80px 0" }}
        >
          <div className="site-container">
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px", textAlign: "center" }}>
              Pourquoi vos concurrents prennent de l'avance
            </p>
            <h2 style={{ fontSize: "28px", fontWeight: 300, color: "rgba(255,255,255,0.9)", marginBottom: "56px", textAlign: "center" }}>
              Les chiffres parlent d'eux-mêmes
            </h2>

            <div className="sp-grid-3" style={{
              gap: "1px", backgroundColor: "#27272a",
              opacity: isVisible("stats") ? 1 : 0,
              transform: isVisible("stats") ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.2s",
            }}>
              {[
                { value: "20-30%", label: "Réduction des coûts opérationnels pour les entreprises automatisées" },
                { value: "25%", label: "Du temps de travail d'une PME consacré aux tâches administratives répétitives" },
                { value: "30-50%", label: "Gain de productivité sur les fonctions support grâce à une automatisation ciblée" },
              ].map((stat, i) => (
                <div key={i} className="stat-card" style={{ backgroundColor: "#09090b", padding: "48px 36px", textAlign: "center" }}>
                  <div style={{ fontSize: "42px", fontWeight: 200, color: "#ffffff", marginBottom: "16px" }}>
                    {stat.value}
                  </div>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#a1a1aa" }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "48px", textAlign: "center", padding: "32px",
              border: "1px solid #27272a",
              opacity: isVisible("stats") ? 1 : 0,
              transition: "opacity 0.8s ease 0.6s",
            }}>
              <p style={{ fontSize: "16px", fontWeight: 300, color: "#a1a1aa", fontStyle: "italic" }}>
                Si vos processus sont encore majoritairement manuels, vous subissez un <span style={{ color: "#ffffff" }}>handicap structurel</span>.
              </p>
            </div>
          </div>
        </section>

        {/* PERTES INVISIBLES */}
        <section
          id="pertes"
          ref={(el) => { sectionRefs.current["pertes"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "100px 0" }}
        >
          <div className="site-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#18181b", marginBottom: "12px" }}>
                Où se cachent vos pertes invisibles ?
              </h2>
              <div style={{ width: "60px", height: "2px", backgroundColor: "#18181b", margin: "0 auto" }} />
            </div>

            <div className="sp-grid-3" style={{ gap: "32px" }}>
              {pertes.map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "48px 36px",
                    borderTop: "3px solid #18181b",
                    opacity: isVisible("pertes") ? 1 : 0,
                    transform: isVisible("pertes") ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", color: "#a1a1aa" }}>{item.num}</span>
                    <div style={{ color: "#18181b" }}>{item.icon}</div>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#18181b", marginBottom: "16px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#71717a", marginBottom: "24px" }}>
                    {item.content}
                  </p>
                  <div style={{ padding: "20px", backgroundColor: "#f9fafb", borderLeft: "3px solid #18181b" }}>
                    <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#18181b", fontWeight: 400 }}>
                      {item.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE INTERMÉDIAIRE */}
        <section style={{ position: "relative", height: "400px", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />
          <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <blockquote style={{ maxWidth: "600px", textAlign: "center", padding: "0 40px" }}>
              <p style={{ fontSize: "24px", fontWeight: 300, color: "#ffffff", lineHeight: 1.5, fontStyle: "italic" }}>
                &laquo; L'automatisation n'est pas une dépense. C'est un multiplicateur de marge. &raquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* AVANTAGES */}
        <section
          id="avantages"
          ref={(el) => { sectionRefs.current["avantages"] = el; }}
          style={{ backgroundColor: "#ffffff", padding: "100px 0" }}
        >
          <div className="sp-narrow">
            <h2 style={{
              fontSize: "28px", fontWeight: 300, color: "#18181b", marginBottom: "48px",
              opacity: isVisible("avantages") ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}>
              L'automatisation permet :
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {avantages.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: "24px",
                    padding: "28px 0",
                    borderBottom: "1px solid #e4e4e7",
                    opacity: isVisible("avantages") ? 1 : 0,
                    transform: isVisible("avantages") ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    backgroundColor: "#18181b", color: "#ffffff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p style={{ fontSize: "17px", fontWeight: 400, color: "#18181b" }}>{item}</p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "56px", padding: "40px", backgroundColor: "#fafafa", border: "1px solid #e4e4e7",
              opacity: isVisible("avantages") ? 1 : 0,
              transition: "opacity 0.8s ease 0.5s",
            }}>
              <p style={{ fontSize: "18px", fontWeight: 300, color: "#3f3f46", lineHeight: 1.6, textAlign: "center" }}>
                La vraie question n'est plus <em>&laquo; Est-ce utile ? &raquo;</em>
                <br />
                Mais : <strong style={{ fontWeight: 500, color: "#18181b" }}>&laquo; Combien me coûte l'inaction ? &raquo;</strong>
              </p>
            </div>
          </div>
        </section>

        {/* NOTRE RÔLE */}
        <section
          id="role"
          ref={(el) => { sectionRefs.current["role"] = el; }}
          style={{ backgroundColor: "#18181b", padding: "80px 0" }}
        >
          <div className="sp-narrow" style={{
            textAlign: "center",
            opacity: isVisible("role") ? 1 : 0,
            transform: isVisible("role") ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                border: "1px solid #3f3f46",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              Notre rôle
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "32px" }}>
              Nous identifions les points de friction, chiffrons leur impact financier, puis déployons des solutions concrètes adaptées à votre réalité.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "48px" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#ffffff", marginBottom: "4px" }}>Pas de complexité</p>
                <p style={{ fontSize: "13px", color: "#71717a" }}>inutile</p>
              </div>
              <div style={{ width: "1px", backgroundColor: "#3f3f46" }} />
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "#ffffff", marginBottom: "4px" }}>Uniquement des gains</p>
                <p style={{ fontSize: "13px", color: "#71717a" }}>mesurables</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#fafafa", padding: "80px 0" }}>
          <div className="sp-narrow" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 300, color: "#18181b", marginBottom: "24px" }}>
              Prêt à automatiser votre croissance ?
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#71717a", marginBottom: "40px" }}>
              Discutons de vos processus et identifions ensemble les leviers d'optimisation les plus impactants.
            </p>
            <div className="sp-cta-row">
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "50px", padding: "0 36px", backgroundColor: "#18181b", color: "#ffffff",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Demander un devis
              </Link>
              <Link
                href="/"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  height: "50px", padding: "0 36px", border: "1px solid #d4d4d8", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Retour
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
