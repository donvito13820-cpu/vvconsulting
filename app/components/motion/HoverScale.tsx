"use client";

import { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  scale?: number;
  tapScale?: number;
  y?: number;
}

export default function HoverScale({
  children,
  className,
  style,
  scale = 1.02,
  tapScale = 0.985,
  y = -1,
}: HoverScaleProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={{ display: "inline-block", ...style }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ display: "inline-block", ...style }}
      whileHover={{ scale, y }}
      whileTap={{ scale: tapScale }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
