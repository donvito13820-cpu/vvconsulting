"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const revelations = [
  {
    text: "Marges érodées par des processus inefficaces",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
  {
    text: "Opportunités de croissance inexploitées",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    text: "Problèmes organisationnels invisibles en interne",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const beneficesAccompagnement = [
  "Prioriser les actions",
  "Chiffrer les scénarios",
  "Engager l'exécution rapidement",
];

const resultats = [
  { text: "Des process clairs", icon: "✓" },
  { text: "Des indicateurs de pilotage", icon: "✓" },
  { text: "Une organisation plus robuste", icon: "✓" },
];

export default function ArticleExpertiseConseil() {
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
            backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 100%)" }} />

          <div className="animate-slideUp" style={{ position: "relative", zIndex: 2, maxWidth: "1400px", width: "100%", margin: "0 auto", padding: "0 40px 80px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
                Stratégie
              </span>
              <span style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.3)" }} />
              <span style={{ fontSize: "11px", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
                6 min de lecture
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "#ffffff", lineHeight: 1.2, maxWidth: "800px" }}>
              Pourquoi externaliser son expertise conseil est une décision stratégique
            </h1>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section
          id="intro-conseil"
          ref={(el) => { sectionRefs.current["intro-conseil"] = el; }}
          style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
        >
          <div style={{
            maxWidth: "720px", margin: "0 auto", padding: "0 40px",
            opacity: isVisible("intro-conseil") ? 1 : 0,
            transform: isVisible("intro-conseil") ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}>
            <p style={{ fontSize: "20px", fontWeight: 300, lineHeight: 1.8, color: "#3f3f46" }}>
              Diriger une entreprise exige de prendre des décisions structurantes.
              Mais prendre du recul quand on est au cœur de l'opérationnel est difficile.
            </p>
            <div style={{ width: "60px", height: "2px", backgroundColor: "#18181b", margin: "40px 0" }} />
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b" }}>
              C'est précisément là que <strong style={{ fontWeight: 500, color: "#18181b" }}>l'expertise externe devient un accélérateur</strong>.
            </p>
          </div>
        </section>

        {/* UN CALCUL SIMPLE */}
        <section
          id="calcul"
          ref={(el) => { sectionRefs.current["calcul"] = el; }}
          style={{ backgroundColor: "#09090b", padding: "80px 0" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px", textAlign: "center" }}>
              Un calcul simple
            </p>
            <h2 style={{ fontSize: "28px", fontWeight: 300, color: "rgba(255,255,255,0.9)", marginBottom: "56px", textAlign: "center" }}>
              Comparaison des coûts
            </h2>

            <div style={{
              display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "0", alignItems: "stretch",
              opacity: isVisible("calcul") ? 1 : 0,
              transform: isVisible("calcul") ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.2s",
            }}>
              {/* Option 1 */}
              <div style={{ padding: "48px 40px", border: "1px solid #27272a", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid #3f3f46", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#71717a", marginBottom: "16px" }}>
                  Recrutement interne
                </p>
                <p style={{ fontSize: "36px", fontWeight: 200, color: "#ffffff", marginBottom: "8px" }}>
                  70 000 — 120 000 €
                </p>
                <p style={{ fontSize: "13px", color: "#52525b" }}>par an</p>
              </div>

              {/* VS */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 32px" }}>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#52525b", letterSpacing: "0.1em" }}>VS</span>
              </div>

              {/* Option 2 */}
              <div style={{ padding: "48px 40px", border: "1px solid #27272a", backgroundColor: "#18181b", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid #3f3f46", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                </div>
                <p style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                  Mission de conseil
                </p>
                <p style={{ fontSize: "36px", fontWeight: 200, color: "#ffffff", marginBottom: "8px" }}>
                  10 000 — 40 000 €
                </p>
                <p style={{ fontSize: "13px", color: "#71717a" }}>selon périmètre</p>
              </div>
            </div>

            <div style={{
              marginTop: "40px", textAlign: "center",
              opacity: isVisible("calcul") ? 1 : 0,
              transition: "opacity 0.8s ease 0.6s",
            }}>
              <p style={{ fontSize: "16px", fontWeight: 300, color: "#a1a1aa" }}>
                Vous accédez à une expertise senior <span style={{ color: "#ffffff" }}>sans rigidifier votre structure</span>.
              </p>
            </div>
          </div>
        </section>

        {/* CE QUE RÉVÈLE UN REGARD EXTERNE */}
        <section
          id="revelations"
          ref={(el) => { sectionRefs.current["revelations"] = el; }}
          style={{ backgroundColor: "#ffffff", padding: "100px 0" }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", marginBottom: "12px" }}>
                Ce qu'un regard externe révèle rapidement
              </h2>
              <div style={{ width: "60px", height: "2px", backgroundColor: "#18181b", margin: "0 auto" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {revelations.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", gap: "24px",
                    padding: "32px 0",
                    borderBottom: "1px solid #e4e4e7",
                    opacity: isVisible("revelations") ? 1 : 0,
                    transform: isVisible("revelations") ? "translateX(0)" : "translateX(-30px)",
                    transition: `all 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    border: "1px solid #e4e4e7",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, color: "#18181b",
                  }}>
                    {item.icon}
                  </div>
                  <p style={{ fontSize: "17px", fontWeight: 400, color: "#18181b" }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "48px", padding: "32px", backgroundColor: "#fafafa", textAlign: "center",
              opacity: isVisible("revelations") ? 1 : 0,
              transition: "opacity 0.8s ease 0.6s",
            }}>
              <p style={{ fontSize: "17px", fontWeight: 300, color: "#52525b", fontStyle: "italic" }}>
                Un consultant ne remplace pas le dirigeant. <strong style={{ fontWeight: 500, color: "#18181b", fontStyle: "normal" }}>Il l'éclaire.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE INTERMÉDIAIRE */}
        <section style={{ position: "relative", height: "350px", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80)",
            backgroundSize: "cover", backgroundPosition: "center 30%",
          }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />
          <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <blockquote style={{ maxWidth: "600px", textAlign: "center", padding: "0 40px" }}>
              <p style={{ fontSize: "22px", fontWeight: 300, color: "#ffffff", lineHeight: 1.5, fontStyle: "italic" }}>
                &laquo; Le coût réel n'est pas la mission de conseil. Le coût réel est l'immobilisme. &raquo;
              </p>
            </blockquote>
          </div>
        </section>

        {/* ACCÉLÉRER AU LIEU DE SUBIR */}
        <section
          id="accelerer"
          ref={(el) => { sectionRefs.current["accelerer"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "100px 0" }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px",
              opacity: isVisible("accelerer") ? 1 : 0,
              transform: isVisible("accelerer") ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease",
            }}>
              <div>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", marginBottom: "24px" }}>
                  Accélérer au lieu de subir
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#71717a", marginBottom: "32px" }}>
                  Beaucoup d'entreprises savent qu'elles doivent évoluer. Elles hésitent, reportent, testent partiellement.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
                  Un accompagnement structuré permet :
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                {beneficesAccompagnement.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", alignItems: "center", gap: "16px",
                      padding: "20px 0",
                      borderBottom: i < beneficesAccompagnement.length - 1 ? "1px solid #e4e4e7" : "none",
                      opacity: isVisible("accelerer") ? 1 : 0,
                      transform: isVisible("accelerer") ? "translateX(0)" : "translateX(20px)",
                      transition: `all 0.5s ease ${i * 0.15 + 0.3}s`,
                    }}
                  >
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      backgroundColor: "#18181b", color: "#ffffff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p style={{ fontSize: "15px", fontWeight: 400, color: "#18181b" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTIF */}
        <section
          id="objectif"
          ref={(el) => { sectionRefs.current["objectif"] = el; }}
          style={{ backgroundColor: "#18181b", padding: "80px 0" }}
        >
          <div style={{
            maxWidth: "720px", margin: "0 auto", padding: "0 40px", textAlign: "center",
            opacity: isVisible("objectif") ? 1 : 0,
            transform: isVisible("objectif") ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease",
          }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
              <div style={{
                width: "64px", height: "64px", borderRadius: "50%",
                border: "1px solid #3f3f46",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              L'objectif : autonomie et performance
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "40px" }}>
              Une mission réussie laisse :
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "#27272a" }}>
              {resultats.map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#18181b", padding: "32px 20px",
                    opacity: isVisible("objectif") ? 1 : 0,
                    transform: isVisible("objectif") ? "scale(1)" : "scale(0.95)",
                    transition: `all 0.5s ease ${i * 0.15 + 0.3}s`,
                  }}
                >
                  <div style={{ marginBottom: "12px" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p style={{ fontSize: "14px", color: "#ffffff", fontWeight: 400 }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "48px",
              opacity: isVisible("objectif") ? 1 : 0,
              transition: "opacity 0.8s ease 0.8s",
            }}>
              <p style={{ fontSize: "16px", fontWeight: 300, color: "#a1a1aa", fontStyle: "italic" }}>
                Notre ambition n'est pas d'installer une dépendance.
                <br />
                Elle est de créer un <span style={{ color: "#ffffff", fontWeight: 400 }}>impact durable</span>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#fafafa", padding: "80px 0" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 300, color: "#18181b", marginBottom: "24px" }}>
              Prêt à accélérer votre transformation ?
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#71717a", marginBottom: "40px" }}>
              Échangeons sur vos enjeux stratégiques et définissons ensemble les priorités d'action.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
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
