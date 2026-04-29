"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navigation = [
  {
    label: "Nos services",
    items: [
      { name: "Missions sur Mesure", href: "/missions-sur-mesure" },
      { name: "Solutions SaaS", href: "/solutions-saas" },
      { name: "Conseil RSE", href: "/conseil-rse" },
    ],
  },
  {
    label: "À propos",
    items: [
      { name: "Notre vision & valeurs", href: "/a-propos" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export default function Header({ variant = "solid" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 767) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isWhite = variant === "solid" || scrolled || mobileOpen;

  const openDropdown = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(label);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background-color 0.3s, border-color 0.3s",
        backgroundColor: isWhite ? "rgba(255,255,255,0.98)" : "transparent",
        borderBottom: isWhite ? "1px solid #e4e4e7" : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="site-container" style={{ display: "flex", alignItems: "center", height: "72px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0 }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: isWhite ? "1px solid #e4e4e7" : "1px solid rgba(255,255,255,0.3)",
              backgroundColor: isWhite ? "#fafafa" : "rgba(255,255,255,0.05)",
              transition: "all 0.3s",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", color: isWhite ? "#18181b" : "#ffffff" }}>
              VV
            </span>
          </div>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: isWhite ? "#18181b" : "#ffffff",
              transition: "color 0.3s",
            }}
          >
            VV Consulting
          </span>
        </Link>

        {/* Desktop nav + CTA */}
        <div className="header-desktop-nav">
          <nav aria-label="Navigation principale" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {navigation.map((menu) => (
              <div
                key={menu.label}
                style={{ position: "relative" }}
                onMouseEnter={() => openDropdown(menu.label)}
                onMouseLeave={closeDropdown}
              >
                <button
                  aria-expanded={openMenu === menu.label}
                  aria-haspopup="true"
                  style={{
                    padding: "10px 20px",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: isWhite
                      ? openMenu === menu.label ? "#18181b" : "#52525b"
                      : openMenu === menu.label ? "#ffffff" : "rgba(255,255,255,0.8)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                >
                  {menu.label}
                </button>

                <motion.div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: "12px",
                  }}
                  initial={false}
                  animate={{
                    opacity: openMenu === menu.label ? 1 : 0,
                    y: openMenu === menu.label ? 0 : -6,
                    pointerEvents: openMenu === menu.label ? "auto" : "none",
                  }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e4e4e7",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                      minWidth: "240px",
                    }}
                  >
                    {menu.items.map((item, idx) => (
                      <div key={item.href}>
                        <Link
                          href={item.href}
                          style={{
                            display: "block",
                            padding: "16px 24px",
                            fontSize: "13px",
                            fontWeight: 400,
                            color: "#3f3f46",
                            textDecoration: "none",
                            transition: "all 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#fafafa";
                            e.currentTarget.style.color = "#18181b";
                            e.currentTarget.style.paddingLeft = "28px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#3f3f46";
                            e.currentTarget.style.paddingLeft = "24px";
                          }}
                        >
                          {item.name}
                        </Link>
                        {idx < menu.items.length - 1 && (
                          <div style={{ margin: "0 24px", borderBottom: "1px solid #f4f4f5" }} />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </nav>

          <a
            href="https://calendly.com/vito-ferrandis-edhec/30min"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prendre rendez-vous sur Calendly (nouvelle fenêtre)"
            className="btn-hover"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              padding: "0 28px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              backgroundColor: isWhite ? "#18181b" : "#ffffff",
              color: isWhite ? "#ffffff" : "#18181b",
              transition: "all 0.3s",
              flexShrink: 0,
            }}
          >
            Prendre RDV
          </a>
        </div>

        {/* Mobile burger toggle */}
        <button
          className="header-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <div style={{ width: "24px", height: "18px", position: "relative" }}>
            <span style={{
              position: "absolute", left: 0, width: "100%", height: "2px",
              backgroundColor: isWhite ? "#18181b" : "#ffffff",
              transition: "all 0.3s ease",
              top: mobileOpen ? "8px" : "0px",
              transform: mobileOpen ? "rotate(45deg)" : "none",
            }} />
            <span style={{
              position: "absolute", left: 0, width: "100%", height: "2px", top: "8px",
              backgroundColor: isWhite ? "#18181b" : "#ffffff",
              transition: "all 0.3s ease",
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              position: "absolute", left: 0, width: "100%", height: "2px",
              backgroundColor: isWhite ? "#18181b" : "#ffffff",
              transition: "all 0.3s ease",
              top: mobileOpen ? "8px" : "16px",
              transform: mobileOpen ? "rotate(-45deg)" : "none",
            }} />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: "hidden",
              backgroundColor: "#ffffff",
              borderBottom: "1px solid #e4e4e7",
            }}
          >
            <div className="site-container" style={{ paddingBlock: "24px" }}>
              {navigation.map((menu) => (
                <div key={menu.label} style={{ marginBottom: "24px" }}>
                  <p style={{
                    fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "#a1a1aa", marginBottom: "12px",
                  }}>
                    {menu.label}
                  </p>
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "block",
                        padding: "14px 0",
                        fontSize: "15px",
                        color: "#18181b",
                        textDecoration: "none",
                        borderBottom: "1px solid #f4f4f5",
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prendre rendez-vous sur Calendly (nouvelle fenêtre)"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px",
                  backgroundColor: "#18181b",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginTop: "8px",
                }}
              >
                Prendre RDV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
