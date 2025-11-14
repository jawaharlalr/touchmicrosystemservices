// components/AnimatedSection.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedSection
 * - Wraps content with a gentle fade + upward slide
 * - Accepts `delay` to stagger multiple sections
 * - Keeps layout responsive; className merges into inner Container
 */

const variants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function AnimatedSection({ children, delay = 0, className = "", tag: Tag = "div" }) {
  return (
    <motion.div
      as={Tag}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
