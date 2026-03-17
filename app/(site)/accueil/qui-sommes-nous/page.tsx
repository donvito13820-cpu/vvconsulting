"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const values = [
  { icon: "◆", title: "Excellence", desc: "Nous visons l'excellence dans chaque mission, avec rigueur et professionnalisme." },
  { icon: "◇", title: "Transparence", desc: "Communication claire et honnête à chaque étape de nos interventions." },
  { icon: "○", title: "Innovation", desc: "Nous explorons constamment de nouvelles approches pour maximiser l'impact." },
  { icon: "□", title: "Engagement", desc: "Votre succès est notre priorité, nous nous investissons pleinement." },
];

const team = [
  { name: "Victor Casen", role: "Co-fondateur, Responsable Marketing & Consultant", initials: "VC" },
  { name: "Vito Ferrandis", role: "Co-fondateur, Développeur & Consultant", initials: "VF" },
];

export default function QuiSommesNousPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
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
      { threshold: 0.2 }
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
              backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
                  Notre identité
                </p>
                <h1 className="animate-slideUp" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "600px", lineHeight: 1.2, animationDelay: "0.1s" }}>
                  Qui sommes-nous ?
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section
          id="intro"
          ref={(el) => { sectionRefs.current["intro"] = el; }}
          style={{ padding: "100px 0", borderBottom: "1px solid #f4f4f5" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", alignItems: "center" }}>
              <div
                style={{
                  opacity: isVisible("intro") ? 1 : 0,
                  transform: isVisible("intro") ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "24px" }}>
                  À propos
                </p>
                <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#18181b", lineHeight: 1.3, marginBottom: "24px" }}>
                  Une expertise au service de votre transformation
                </h2>
              </div>
              <div
                style={{
                  opacity: isVisible("intro") ? 1 : 0,
                  transform: isVisible("intro") ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  transitionDelay: "0.2s",
                }}
              >
                <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b", marginBottom: "24px" }}>
                  VV Consulting est né d'une conviction : les entreprises méritent un accompagnement sur-mesure, 
                  alliant expertise stratégique et excellence opérationnelle.
                </p>
                <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b" }}>
                  Notre équipe combine des compétences en conseil, data science et automatisation pour vous offrir 
                  des solutions concrètes et durables. Nous intervenons là où la valeur peut être créée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section
          id="values"
          ref={(el) => { sectionRefs.current["values"] = el; }}
          style={{ padding: "100px 0", backgroundColor: "#fafafa" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#a1a1aa",
                  marginBottom: "16px",
                  opacity: isVisible("values") ? 1 : 0,
                  transform: isVisible("values") ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                Ce qui nous guide
              </p>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 300,
                  color: "#18181b",
                  opacity: isVisible("values") ? 1 : 0,
                  transform: isVisible("values") ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: "0.1s",
                }}
              >
                Nos valeurs
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
              {values.map((value, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    backgroundColor: hoveredValue === i ? "#18181b" : "#ffffff",
                    padding: "40px 32px",
                    textAlign: "center",
                    border: "1px solid #e4e4e7",
                    opacity: isVisible("values") ? 1 : 0,
                    transform: isVisible("values") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, background-color 0.3s ease",
                    transitionDelay: `${0.1 + i * 0.08}s, 0s`,
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      color: hoveredValue === i ? "#ffffff" : "#18181b",
                      marginBottom: "20px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {value.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: hoveredValue === i ? "#ffffff" : "#18181b",
                      marginBottom: "12px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: hoveredValue === i ? "rgba(255,255,255,0.7)" : "#71717a",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Équipe */}
        <section
          id="team"
          ref={(el) => { sectionRefs.current["team"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
            <div style={{ marginBottom: "64px" }}>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#a1a1aa",
                  marginBottom: "16px",
                  opacity: isVisible("team") ? 1 : 0,
                  transform: isVisible("team") ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                L'équipe
              </p>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: 300,
                  color: "#18181b",
                  opacity: isVisible("team") ? 1 : 0,
                  transform: isVisible("team") ? "translateX(0)" : "translateX(80px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: "0.1s",
                }}
              >
                Des experts à votre service
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "48px", maxWidth: "700px", margin: "0 auto" }}>
              {team.map((member, i) => (
                <div
                  key={i}
                  style={{
                    opacity: isVisible("team") ? 1 : 0,
                    transform: isVisible("team") ? "translateX(0)" : "translateX(80px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease",
                    transitionDelay: `${0.1 + i * 0.12}s`,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "160px",
                      height: "160px",
                      margin: "0 auto 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#f4f4f5",
                      border: "1px solid #e4e4e7",
                      borderRadius: "50%",
                    }}
                  >
                    <span style={{ fontSize: "36px", fontWeight: 300, color: "#a1a1aa", letterSpacing: "0.05em" }}>
                      {member.initials}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#18181b", marginBottom: "8px" }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#71717a", lineHeight: 1.5 }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#18181b", padding: "100px 0" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              Travaillons ensemble
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.7 }}>
              Découvrez comment notre équipe peut accompagner votre transformation.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "52px",
                  padding: "0 40px",
                  backgroundColor: "#ffffff",
                  color: "#18181b",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
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
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "52px",
                  padding: "0 40px",
                  border: "1px solid #3f3f46",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  textDecoration: "none",
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
