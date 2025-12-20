// components/AnimatedSection.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedSection: Tech-Optimized Motion Wrapper
 * - Uses a custom cubic-bezier ease for a professional "snappy" feel.
 * - Added a subtle scale and opacity shift to mimic a system "booting up."
 * - Improved viewport logic for better mobile performance.
 */

const techVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.98,
    filter: "blur(4px)" // Subtle tech-blur for a "focusing" effect
  },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom "Expo" ease-out for tech luxury feel
    }
  },
};

export default function AnimatedSection({ 
  children, 
  delay = 0, 
  className = "", 
  tag: Tag = "section", // Default to section for better SEO
  threshold = 0.1 
}) {
  return (
    <motion.div
      as={Tag}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: threshold }}
      variants={techVariants}
      transition={{ delay }}
      className={`relative w-full ${className}`}
    >
      {/* Optional: Subtle "Reveal Glow" 
          This adds a tiny orange flare to the section as it enters 
      */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-0 pointer-events-none bg-gradient-to-b from-brand-orange/5 to-transparent group-in-view:opacity-100" />
      
      {children}
    </motion.div>
  );
}