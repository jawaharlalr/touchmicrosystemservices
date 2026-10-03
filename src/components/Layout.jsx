// components/Layout.jsx
import React from "react";

/**
 * Layout: Reusable page wrapper
 * - Clean light theme default
 */
export default function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col bg-white text-gray-900 selection:bg-orange-100 selection:text-orange-900 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Container: Consistent horizontal alignment
 */
export const Container = ({ children, max = "max-w-7xl", className = "" }) => (
  <div className={`w-full ${max} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

/**
 * Section: Vertical spacing with clean light dividers
 */
export const Section = ({ children, className = "", divider = false }) => (
  <section 
    className={`py-16 sm:py-20 relative overflow-hidden ${divider ? "border-t border-gray-300" : ""} ${className}`}
  >
    {children}
  </section>
);

/**
 * TechBackground: Subtle light technical grid pattern
 */
export const TechBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60 bg-grid-tech" />
);

/**
 * Glow: Subtle warm highlight accent for light backgrounds
 */
export const Glow = ({ color = "orange", position = "top-right" }) => {
  const positions = {
    "top-right": "top-0 right-0 -translate-y-1/2 translate-x-1/4",
    "bottom-left": "bottom-0 left-0 translate-y-1/2 -translate-x-1/4",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div 
      className={`absolute w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none opacity-30 
      ${positions[position]} 
      ${color === "orange" ? "bg-orange-100" : "bg-blue-100"}`} 
    />
  );
};