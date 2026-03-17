"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function IntroOverlay() {
  const pathname = usePathname();
  const [done, setDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setDone(true);
      return;
    }

    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay || !logo) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const containerOffset = Math.max((vw - 1400) / 2, 0);
    const targetCenterX = containerOffset + 40 + 19;
    const targetCenterY = 36;

    const dx = targetCenterX - vw / 2;
    const dy = targetCenterY - vh / 2;
    const targetScale = 38 / 100;

    gsap.set(logo, { opacity: 0, scale: 1.15 });

    const tl = gsap.timeline({
      delay: 0.1,
      onComplete: () => setDone(true),
    });

    tl.to(logo, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
    tl.to({}, { duration: 0.25 });
    tl.to(logo, {
      x: dx,
      y: dy,
      scale: targetScale,
      duration: 0.55,
      ease: "power3.inOut",
    });
    tl.to(overlay, {
      opacity: 0,
      duration: 0.8,
      ease: "power1.inOut",
    }, "-=0.35");

    tlRef.current = tl;

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [pathname]);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#09090b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={logoRef}
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(63, 63, 70, 0.5)",
          opacity: 0,
        }}
      >
        <span
          style={{
            fontSize: "32px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            color: "#ffffff",
          }}
        >
          VV
        </span>
      </div>
    </div>
  );
}
