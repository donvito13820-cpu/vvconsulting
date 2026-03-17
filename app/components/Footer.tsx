"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverScale from "@/app/components/motion/HoverScale";

const links = [
  {
    title: "Prestations",
    items: [
      { name: "Enquête quantitative", href: "/prestations/enquete-quantitative" },
      { name: "Enquête qualitative", href: "/prestations/enquete-qualitative" },
      { name: "Solution IA", href: "/prestations/solution-ia" },
      { name: "Automatisation", href: "/prestations/automatisation" },
    ],
  },
  {
    title: "Structure",
    items: [
      { name: "Qui sommes-nous", href: "/accueil/qui-sommes-nous" },
      { name: "Notre approche", href: "/accueil/notre-approche" },
    ],
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const signatureLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!footerRef.current || !signatureLineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        signatureLineRef.current,
        { xPercent: -30, opacity: 0.45 },
        {
          xPercent: 20,
          opacity: 1,
          duration: 2.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

      gsap.from("[data-footer-reveal]", {
        opacity: 0,
        x: 60,
        stagger: 0.18,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{ backgroundColor: "#09090b", overflow: "hidden" }}>
      <div style={{ height: "1px", width: "100%", backgroundColor: "#18181b", position: "relative" }}>
        <div
          ref={signatureLineRef}
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          }}
        />
      </div>
      <div className="site-container" style={{ paddingBlock: "64px" }}>
        <div className="grid-footer">
          {/* Brand */}
          <div data-footer-reveal>
            <HoverScale scale={1.015} y={-1}>
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #27272a",
                    backgroundColor: "#18181b",
                  }}
                >
                  <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", color: "#ffffff" }}>
                    VV
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    color: "#ffffff",
                  }}
                >
                  VV Consulting
                </span>
              </Link>
            </HoverScale>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#71717a", maxWidth: "300px", marginBottom: "24px" }}>
              Agence de consulting &amp; automatisation. Nous transformons vos processus pour libérer votre potentiel.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="mailto:vito.ferrandis@edhec.com" style={{ fontSize: "13px", color: "#a1a1aa", textDecoration: "none" }}>
                vito.ferrandis@edhec.com
              </a>
              <a href="mailto:victor.casen@edhec.com" style={{ fontSize: "13px", color: "#a1a1aa", textDecoration: "none" }}>
                victor.casen@edhec.com
              </a>
              <a href="tel:+33673837575" style={{ fontSize: "13px", color: "#a1a1aa", textDecoration: "none" }}>
                06 73 83 75 75
              </a>
              <a href="tel:+33646877515" style={{ fontSize: "13px", color: "#a1a1aa", textDecoration: "none" }}>
                06 46 87 75 15
              </a>
            </div>
          </div>

          {/* Links */}
          {links.map((section) => (
            <nav key={section.title} aria-label={`Liens ${section.title}`} data-footer-reveal>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#52525b",
                  marginBottom: "24px",
                }}
              >
                {section.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.items.map((item) => (
                  <li key={item.href} style={{ marginBottom: "14px" }}>
                    <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                      <Link
                        href={item.href}
                        style={{
                          fontSize: "14px",
                          color: "#a1a1aa",
                          textDecoration: "none",
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid #27272a" }} data-footer-reveal>
        <div className="site-container footer-bottom-bar" style={{ paddingBlock: "24px" }}>
          <p style={{ fontSize: "12px", color: "#52525b" }}>
            © {new Date().getFullYear()} VV Consulting. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            <HoverScale scale={1.03} y={-1}>
              <Link href="#" style={{ fontSize: "12px", color: "#52525b", textDecoration: "none" }}>
                Mentions légales
              </Link>
            </HoverScale>
            <HoverScale scale={1.03} y={-1}>
              <Link href="#" style={{ fontSize: "12px", color: "#52525b", textDecoration: "none" }}>
                Confidentialité
              </Link>
            </HoverScale>
          </div>
        </div>
      </div>
    </footer>
  );
}
