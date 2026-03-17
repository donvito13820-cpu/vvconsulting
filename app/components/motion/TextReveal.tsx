"use client";

import { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";

interface TextRevealProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export default function TextReveal({ text, className, style, delay = 0 }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span className={className} style={style}>
        {text}
      </span>
    );
  }

  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block", ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.055,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          style={{ display: "inline-block", marginRight: "0.28em" }}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
