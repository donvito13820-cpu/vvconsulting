"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const statsIA = [
  { value: "+20 à +40%", label: "de productivité sur les métiers intellectuels" },
  { value: "-50 à -70%", label: "de temps de production de contenu" },
  { value: "-30%", label: "de coûts sur le support client" },
];

const applications = [
  {
    num: "01",
    title: "Marketing et visibilité",
    content: "Production de contenus SEO, newsletters, posts LinkedIn, fiches produits. Une PME peut multiplier par 3 ou 4 son volume de contenu sans recruter.",
    results: ["Meilleure visibilité", "Génération de leads accélérée", "Autorité renforcée"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Support client intelligent",
    content: "Un assistant IA entraîné sur vos documents internes peut répondre aux questions fréquentes, filtrer les demandes complexes et réduire le temps de traitement.",
    results: ["Temps de réponse divisé par deux", "Satisfaction client en hausse", "Charge interne allégée"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Aide à la décision stratégique",
    content: "L'IA peut analyser vos données commerciales, résumer vos rapports financiers et identifier des tendances invisibles. Elle devient un copilote du dirigeant.",
    results: ["Analyse de données commerciales", "Synthèse de rapports financiers", "Détection de tendances invisibles"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const facteursCle = [
  "Identifient les cas à fort ROI",
  "Encadrent juridiquement l'usage",
  "Intègrent l'outil dans un processus clair",
];

export default function ArticleIAGenerative() {
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
        {/* HERO */}
        <section style={{ position: "relative", minHeight: "70vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 100%)" }} />

          <div className="animate-slideUp site-container" style={{ position: "relative", zIndex: 2, width: "100%", paddingBottom: "80px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                Intelligence artificielle
              </span>
              <span style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
              <span style={{ fontSize: "11px", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
                7 min de lecture
              </span>
              <span style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
              <time dateTime="2026-02-01" style={{ fontSize: "11px", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
                Février 2026
              </time>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "#ffffff", lineHeight: 1.2, maxWidth: "800px" }}>
              IA générative : opportunités concrètes et rentables pour les PME
            </h1>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section
          id="intro-ia"
          ref={(el) => { sectionRefs.current["intro-ia"] = el; }}
          style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
        >
          <div className="sp-narrow" style={{
            opacity: isVisible("intro-ia") ? 1 : 0,
            transform: isVisible("intro-ia") ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}>
            <p style={{ fontSize: "20px", fontWeight: 300, lineHeight: 1.8, color: "#3f3f46" }}>
              L'IA générative est souvent perçue comme un phénomène médiatique.
              En réalité, c'est déjà un <strong style={{ fontWeight: 500, color: "#18181b" }}>outil opérationnel puissant</strong> pour les entreprises qui savent l'intégrer intelligemment.
            </p>
            <div style={{ width: "60px", height: "2px", backgroundColor: "#18181b", margin: "40px 0" }} />
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b" }}>
              La différence ne se fait pas sur l'accès à l'IA. Elle se fait sur son <strong style={{ fontWeight: 500, color: "#18181b" }}>usage stratégique</strong>.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section
          id="stats-ia"
          ref={(el) => { sectionRefs.current["stats-ia"] = el; }}
          style={{ backgroundColor: "#09090b", padding: "80px 0" }}
        >
          <div className="site-container">
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px", textAlign: "center" }}>
              Un avantage compétitif
            </p>
            <h2 style={{ fontSize: "28px", fontWeight: 300, color: "rgba(255,255,255,0.9)", marginBottom: "56px", textAlign: "center" }}>
              Des gains immédiats et mesurables
            </h2>

            <div className="sp-grid-3" style={{
              gap: "1px", backgroundColor: "#27272a",
              opacity: isVisible("stats-ia") ? 1 : 0,
              transform: isVisible("stats-ia") ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.2s",
            }}>
              {statsIA.map((stat, i) => (
                <div key={i} className="stat-card" style={{ backgroundColor: "#09090b", padding: "48px 36px", textAlign: "center" }}>
                  <div style={{ fontSize: "36px", fontWeight: 200, color: "#ffffff", marginBottom: "16px" }}>
                    {stat.value}
                  </div>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#a1a1aa" }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <div style={{
              display: "flex", justifyContent: "center", gap: "48px", marginTop: "48px",
              opacity: isVisible("stats-ia") ? 1 : 0,
              transition: "opacity 0.8s ease 0.6s",
            }}>
              <div style={{ textAlign: "center", padding: "24px" }}>
                <p style={{ fontSize: "14px", color: "#71717a" }}>Sans cadre, l'IA devient un <span style={{ color: "#a1a1aa" }}>gadget</span>.</p>
              </div>
              <div style={{ width: "1px", backgroundColor: "#27272a" }} />
              <div style={{ textAlign: "center", padding: "24px" }}>
                <p style={{ fontSize: "14px", color: "#71717a" }}>Avec méthode, elle devient un <span style={{ color: "#ffffff", fontWeight: 500 }}>levier de rentabilité</span>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section
          id="applications"
          ref={(el) => { sectionRefs.current["applications"] = el; }}
          style={{ backgroundColor: "#ffffff", padding: "100px 0" }}
        >
          <div className="site-container">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#18181b", marginBottom: "12px" }}>
                Applications concrètes pour votre entreprise
              </h2>
              <div style={{ width: "60px", height: "2px", backgroundColor: "#18181b", margin: "0 auto" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="sp-grid-2"
                  style={{
                    gap: "64px", alignItems: "center",
                    padding: "48px 0",
                    borderBottom: i < applications.length - 1 ? "1px solid #e4e4e7" : "none",
                    opacity: isVisible("applications") ? 1 : 0,
                    transform: isVisible("applications") ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s ease ${i * 0.2}s`,
                  }}
                >
                  <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                      <div style={{
                        width: "56px", height: "56px", borderRadius: "50%",
                        border: "1px solid #e4e4e7",
                        display: "flex", alignItems: "center", justifyContent: "center", color: "#18181b",
                      }}>
                        {app.icon}
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", color: "#a1a1aa" }}>{app.num}</span>
                    </div>
                    <h3 style={{ fontSize: "24px", fontWeight: 400, color: "#18181b", marginBottom: "16px" }}>
                      {app.title}
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#71717a" }}>
                      {app.content}
                    </p>
                  </div>
                  <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                    <div style={{ backgroundColor: "#fafafa", padding: "40px", border: "1px solid #e4e4e7" }}>
                      <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                        Résultat
                      </p>
                      {app.results.map((r, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 0", borderBottom: j < app.results.length - 1 ? "1px solid #e4e4e7" : "none" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18181b" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                          <p style={{ fontSize: "14px", fontWeight: 400, color: "#18181b" }}>{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMAGE INTERMÉDIAIRE */}
        <section style={{ position: "relative", height: "350px", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.65)" }} />
          <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <blockquote style={{ maxWidth: "600px", textAlign: "center", padding: "0 40px" }}>
              <p style={{ fontSize: "22px", fontWeight: 300, color: "#ffffff", lineHeight: 1.5, fontStyle: "italic" }}>
                &laquo; Celles qui échouent l'utilisent sans stratégie. &raquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* CE QUI FAIT LA DIFFÉRENCE */}
        <section
          id="difference"
          ref={(el) => { sectionRefs.current["difference"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "80px 0" }}
        >
          <div className="sp-narrow">
            <h2 style={{
              fontSize: "28px", fontWeight: 300, color: "#18181b", marginBottom: "40px",
              opacity: isVisible("difference") ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}>
              Ce qui fait la différence
            </h2>
            <p style={{
              fontSize: "15px", lineHeight: 1.7, color: "#71717a", marginBottom: "32px",
              opacity: isVisible("difference") ? 1 : 0,
              transition: "opacity 0.6s ease 0.2s",
            }}>
              Les entreprises qui réussissent avec l'IA :
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {facteursCle.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: "20px",
                    padding: "24px 0",
                    borderBottom: "1px solid #e4e4e7",
                    opacity: isVisible("difference") ? 1 : 0,
                    transform: isVisible("difference") ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.6s ease ${i * 0.15 + 0.3}s`,
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    backgroundColor: "#18181b", color: "#ffffff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: "13px", fontWeight: 500,
                  }}>
                    {i + 1}
                  </div>
                  <p style={{ fontSize: "16px", fontWeight: 400, color: "#18181b" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOTRE APPROCHE */}
        <section
          id="approche-ia"
          ref={(el) => { sectionRefs.current["approche-ia"] = el; }}
          style={{ backgroundColor: "#18181b", padding: "80px 0" }}
        >
          <div className="sp-narrow" style={{
            textAlign: "center",
            opacity: isVisible("approche-ia") ? 1 : 0,
            transform: isVisible("approche-ia") ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                border: "1px solid #3f3f46",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              Notre approche
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "16px" }}>
              Nous ne proposons pas &laquo; de l'IA &raquo;.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "32px" }}>
              Nous structurons une intégration <strong style={{ color: "#ffffff", fontWeight: 400 }}>cohérente, sécurisée et rentable</strong>.
            </p>
            <div style={{ padding: "24px", border: "1px solid #27272a" }}>
              <p style={{ fontSize: "15px", color: "#ffffff", fontWeight: 300 }}>
                Transformer une innovation technologique en avantage concurrentiel concret.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#fafafa", padding: "80px 0" }}>
          <div className="sp-narrow" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 300, color: "#18181b", marginBottom: "24px" }}>
              Intégrez l'IA dans votre stratégie
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#71717a", marginBottom: "40px" }}>
              Découvrez comment l'IA générative peut transformer concrètement votre activité.
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
                href="/prestations/solution-ia"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  height: "50px", padding: "0 36px", border: "1px solid #d4d4d8", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Nos solutions IA
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
