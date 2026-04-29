"use client";

import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import { motion } from "motion/react";
import Reveal from "@/app/components/motion/Reveal";
import TextReveal from "@/app/components/motion/TextReveal";

const stats = [
  {
    value: "73%",
    label: "des entreprises constatent une amélioration de leur performance après un accompagnement conseil",
    source: "Global Consulting Survey 2024",
  },
  {
    value: "4.2x",
    label: "retour sur investissement moyen pour les projets d'automatisation des processus",
    source: "Deloitte Automation Report",
  },
  {
    value: "40%",
    label: "de réduction des coûts opérationnels grâce à l'intégration de solutions IA",
    source: "McKinsey AI Impact Study",
  },
  {
    value: "89%",
    label: "des dirigeants considèrent la transformation digitale comme prioritaire pour leur croissance",
    source: "PwC CEO Survey 2024",
  },
];

const services = [
  {
    num: "01",
    title: "Missions sur Mesure",
    tagline: "Conseil Digital & Automatisation IA",
    desc: "Création de sites web performants, intégration de l'IA générative, automatisation des processus métier et conseil en transformation digitale. Des solutions taillées pour votre réalité.",
    href: "/missions-sur-mesure",
    cta: "Découvrir nos missions",
  },
  {
    num: "02",
    title: "Solutions SaaS",
    tagline: "Gestion & Analyse des Avis Clients",
    desc: "Notre plateforme SaaS centralise vos avis Google et autres plateformes en temps réel. Dashboard intuitif, réponse rapide, catégorisation intelligente et rapport mensuel automatisé.",
    href: "/solutions-saas",
    cta: "Demander une démo",
  },
  {
    num: "03",
    title: "Conseil RSE",
    tagline: "Stratégie & Développement Durable",
    desc: "Du diagnostic RSE au montage financier, en passant par la conception et le pilotage de projets durables concrets. Nous accompagnons les grandes entreprises et ETI face aux exigences CSRD.",
    href: "/conseil-rse",
    cta: "Explorer l'offre RSE",
  },
];

const differentiators = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Agilité & Réactivité",
    desc: "Diagnostic sous 48h, cycles courts, points de validation réguliers. Pas de processus bureaucratiques — uniquement de la valeur livrée à chaque étape.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Expertise Tech & Stratégie",
    desc: "Nous couvrons l'ensemble du spectre : développement web, IA, automatisation, conseil stratégique, RSE. Un interlocuteur unique pour des projets pluridisciplinaires.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Engagement RSE Authentique",
    desc: "La durabilité n'est pas une option dans notre approche — c'est un axe stratégique à part entière. Nous aidons nos clients à faire du RSE un levier de performance réel.",
  },
];

export default function Home() {
  return (
    <>
      <Header variant="transparent" />

      <main>
        {/* HERO */}
        <section style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
          <div className="home-hero-bg" style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero.png)", backgroundSize: "cover", backgroundPosition: "center 60%" }} />
          <div className="home-hero-overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.40)" }} />

          {/* H1 principal */}
          <Reveal x={0} y={36} style={{ position: "relative", paddingTop: "140px" }}>
            <div className="site-container">
              <h1 style={{ fontSize: "clamp(22px, 3.5vw, 42px)", lineHeight: 1.25, color: "#ffffff", fontWeight: 300, maxWidth: "680px", margin: 0, letterSpacing: "-0.01em" }}>
                VV Agence Consulting
                <br />
                <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.8)" }}>Stratégie, Innovation & RSE</span>
              </h1>
              <p style={{ marginTop: "24px", fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.8)", fontWeight: 300, maxWidth: "480px" }}>
                Cabinet de conseil digital à taille humaine. Missions sur mesure, solutions SaaS et stratégie RSE pour les entreprises qui veulent des résultats concrets.
              </p>
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal x={0} y={30} delay={0.18} style={{ position: "absolute", bottom: "48px", left: 0, right: 0 }}>
            <div className="site-container hero-cta-row">
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "50px", padding: "0 36px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)",
                  backgroundColor: "rgba(255,255,255,0.05)", color: "#ffffff",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Parlons de votre projet
              </Link>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prendre rendez-vous sur Calendly (nouvelle fenêtre)"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "50px", padding: "0 36px", borderRadius: "6px", backgroundColor: "#ffffff", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Prendre RDV
              </a>
            </div>
          </Reveal>

          {/* Scroll indicator */}
          <div className="animate-pulse" style={{ position: "absolute", bottom: "48px", left: "50%", transform: "translateX(-50%)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
              <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
          <Reveal className="site-container">
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "24px" }}>
              VV Agence Consulting
            </p>
            <h2 style={{ maxWidth: "900px", fontSize: "34px", fontWeight: 300, lineHeight: 1.4, color: "#18181b" }}>
              <TextReveal text="Nous accompagnons les entreprises à l'ère de l'IA et des enjeux RSE" />
              <span style={{ color: "#a1a1aa" }}> — du diagnostic stratégique à l&apos;implémentation opérationnelle.</span>
            </h2>
            <p style={{ marginTop: "32px", fontSize: "16px", lineHeight: 1.8, color: "#52525b", maxWidth: "700px" }}>
              Dans un monde où la technologie redéfinit les règles du jeu et où les obligations de durabilité s&apos;intensifient, les entreprises ont besoin d&apos;un partenaire qui comprend à la fois le digital, la stratégie et les enjeux de demain. C&apos;est exactement ce que nous faisons — avec la réactivité d&apos;une startup et la rigueur d&apos;un cabinet professionnel.
            </p>
          </Reveal>
        </section>

        {/* 3 AXES DE SERVICE */}
        <section style={{ backgroundColor: "#fafafa", padding: "100px 0" }}>
          <div className="site-container">
            <Reveal>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Nos 3 axes d&apos;activité
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#18181b", marginBottom: "64px", maxWidth: "600px", lineHeight: 1.3 }}>
                Une expertise couvrant l&apos;ensemble de votre transformation
              </h2>
            </Reveal>

            <div className="sp-grid-3" style={{ gap: "24px" }}>
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={service.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <article
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #e4e4e7",
                        padding: "48px 40px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "box-shadow 0.3s ease, transform 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.10)";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      }}
                    >
                      <span style={{ fontSize: "13px", fontWeight: 500, color: "#a1a1aa", letterSpacing: "0.1em", marginBottom: "24px", display: "block" }}>
                        {service.num}
                      </span>
                      <h3 style={{ fontSize: "22px", fontWeight: 500, color: "#18181b", marginBottom: "8px", lineHeight: 1.2 }}>
                        {service.title}
                      </h3>
                      <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                        {service.tagline}
                      </p>
                      <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#52525b", flexGrow: 1, marginBottom: "32px" }}>
                        {service.desc}
                      </p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "12px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#18181b" }}>
                        {service.cta}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </span>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATISTIQUES */}
        <section style={{ backgroundColor: "#09090b", padding: "80px 0" }}>
          <Reveal className="site-container">
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px" }}>
              L&apos;impact mesurable du conseil
            </p>
            <h2 style={{ fontSize: "26px", fontWeight: 300, color: "rgba(255,255,255,0.9)", marginBottom: "48px" }}>
              Des résultats prouvés, pas des promesses
            </h2>

            <div className="grid-stats" style={{ backgroundColor: "#27272a" }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat-card"
                  style={{ backgroundColor: "#09090b", padding: "40px 32px" }}
                  initial={{ opacity: 0, x: 60, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div style={{ fontSize: "48px", fontWeight: 200, color: "#ffffff", marginBottom: "16px", lineHeight: 1 }}>
                    <AnimatedCounter value={stat.value} duration={2000} />
                  </div>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#a1a1aa", marginBottom: "16px" }}>{stat.label}</p>
                  <p style={{ fontSize: "11px", color: "#52525b" }}>{stat.source}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* POURQUOI NOUS CHOISIR */}
        <section style={{ backgroundColor: "#ffffff", padding: "100px 0" }}>
          <div className="site-container">
            <Reveal style={{ marginBottom: "64px" }}>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Notre différence
              </p>
              <h2 style={{ fontSize: "32px", fontWeight: 300, color: "#18181b", maxWidth: "500px", lineHeight: 1.3 }}>
                Pourquoi choisir VV Agence Consulting ?
              </h2>
            </Reveal>

            <div className="sp-grid-3" style={{ gap: "40px" }}>
              {differentiators.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div style={{ color: "#18181b", marginBottom: "20px" }}>{item.icon}</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#18181b", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#71717a" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <Reveal style={{ marginTop: "80px", paddingTop: "64px", borderTop: "1px solid #f4f4f5" }}>
              <div className="sp-grid-asym" style={{ gap: "80px", alignItems: "center" }}>
                <div>
                  <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.4, marginBottom: "24px" }}>
                    Ni une grande SSII, ni un freelance isolé
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                    Nous occupons un espace unique : la taille humaine qui garantit la réactivité et l&apos;engagement personnel, combinée à une expertise multidisciplinaire (tech, stratégie, RSE, SaaS) qui permet de prendre en charge des projets complexes sans multiplier les interlocuteurs.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Diagnostic initial", value: "sous 48h" },
                    { label: "Interlocuteur unique", value: "pour tout le projet" },
                    { label: "Résultats", value: "mesurables & documentés" },
                    { label: "Approche", value: "sur mesure & itérative" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #f4f4f5" }}>
                      <span style={{ fontSize: "14px", color: "#71717a" }}>{item.label}</span>
                      <span style={{ fontSize: "14px", fontWeight: 500, color: "#18181b" }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ backgroundColor: "#18181b", padding: "100px 0" }}>
          <Reveal className="site-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              <TextReveal text="Prêt à transformer votre organisation ?" />
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "550px", margin: "0 auto 16px", lineHeight: 1.7 }}>
              Discutons de vos enjeux — digital, SaaS ou RSE — et découvrez comment notre expertise peut accélérer votre croissance.
            </p>
            <p style={{ fontSize: "14px", color: "#52525b", maxWidth: "550px", margin: "0 auto 48px" }}>
              Retrouvez nos services détaillés sur{" "}
              <Link href="/missions-sur-mesure" style={{ color: "#a1a1aa", textDecoration: "underline" }}>Missions sur Mesure</Link>,{" "}
              <Link href="/solutions-saas" style={{ color: "#a1a1aa", textDecoration: "underline" }}>Solutions SaaS</Link> et{" "}
              <Link href="/conseil-rse" style={{ color: "#a1a1aa", textDecoration: "underline" }}>Conseil RSE</Link>.
            </p>
            <div className="cta-final-buttons">
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  minWidth: "240px", height: "56px", padding: "0 48px", borderRadius: "6px",
                  backgroundColor: "#ffffff", color: "#18181b",
                  fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Parlons de votre projet
              </Link>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Planifier un appel sur Calendly (nouvelle fenêtre)"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  minWidth: "240px", height: "56px", padding: "0 48px", borderRadius: "6px",
                  backgroundColor: "#dc2626", color: "#ffffff",
                  fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Planifier un appel
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
