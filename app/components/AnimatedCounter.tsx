"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string; // "73%", "4.2x", "40%", "89%"
  duration?: number;
}

export default function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          // Parse the value
          const numMatch = value.match(/^([\d.]+)/);
          const suffix = value.replace(/^[\d.]+/, "");
          const target = numMatch ? parseFloat(numMatch[1]) : 0;
          const isDecimal = value.includes(".");

          let start: number | null = null;

          const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            
            // Easing function
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;

            if (isDecimal) {
              setDisplay(current.toFixed(1) + suffix);
            } else {
              setDisplay(Math.floor(current) + suffix);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(value); // Final value
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
