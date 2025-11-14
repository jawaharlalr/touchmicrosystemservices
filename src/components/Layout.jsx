// components/Layout.jsx
import React from "react";

/**
 * Layout: reusable page wrapper
 * - Provides max-width, consistent horizontal padding, and optional bg/overlay slots.
 * - Use <Layout.Container> and <Layout.Section> in pages.
 */

export default function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {children}
    </div>
  );
}

/* Named helpers */
export const Container = ({ children, max = "max-w-6xl", className = "" }) => (
  <div className={`w-full ${max} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Section = ({ children, className = "" }) => (
  <section className={`py-10 sm:py-14 md:py-16 ${className}`}>{children}</section>
);
