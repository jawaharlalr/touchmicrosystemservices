// components/Layout.jsx
import React from "react";

/**
 * Layout: Reusable page wrapper
 * - Enforces the Brand Black background as the default.
 * - Sets default text colors and selection highlights.
 */
export default function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col bg-brand-black text-gray-300 selection:bg-brand-orange selection:text-white ${className}`}>
      {children}
    </div>
  );
}

/**
 * Container: Consistent horizontal alignment
 * - Standardized responsive padding.
 */
export const Container = ({ children, max = "max-w-7xl", className = "" }) => (
  <div className={`w-full ${max} mx-auto px-6 sm:px-8 lg:px-10 ${className}`}>
    {children}
  </div>
);

/**
 * Section: Vertical spacing with hardware-style dividers
 * - Uses a subtle top border to create a "modular" look.
 */
export const Section = ({ children, className = "", divider = false }) => (
  <section 
    className={`py-16 sm:py-24 md:py-32 relative overflow-hidden ${divider ? "border-t border-white/5" : ""} ${className}`}
  >
    {children}
  </section>
);

/**
 * TechBackground: A utility to add the "Micro System" grid look
 */
export const TechBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {/* Subtle Grid Lines */}
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
        backgroundSize: '40px 40px' 
      }} 
    />
    {/* Radial Fade to keep the grid subtle in the center */}
    <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
  </div>
);

/**
 * Glow: A decorative accent to highlight tech hardware imagery
 */
export const Glow = ({ color = "orange", position = "top-right" }) => {
  const positions = {
    "top-right": "top-0 right-0 -translate-y-1/2 translate-x-1/4",
    "bottom-left": "bottom-0 left-0 translate-y-1/2 -translate-x-1/4",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div 
      className={`absolute w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-10 
      ${positions[position]} 
      ${color === "orange" ? "bg-brand-orange" : "bg-blue-500"}`} 
    />
  );
};