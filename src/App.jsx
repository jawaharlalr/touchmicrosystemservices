import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FloatingHUD from "./components/FloatingHUD";

// Lazy load secondary pages to optimize initial bundle size and speed up FCP
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Tech-themed loading spinner fallback
function TechLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-brand-black font-mono">
      <div className="w-10 h-10 border-2 rounded-full border-brand-orange border-t-transparent animate-spin mb-4" />
      <span className="text-xs tracking-widest text-gray-500 uppercase">Loading_Module...</span>
    </div>
  );
}

// Helper component to scroll to top on page change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  // Updated to match your actual Route paths
  const hideNavbar = location.pathname === "/about-us" || location.pathname === "/contact-us";

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* Navbar (Only shows if NOT on About or Contact pages) */}
      {!hideNavbar && <Navbar />}

      {/* Main Content Wrapper with pt-24 top padding when Navbar is visible */}
      <main className={`flex-grow ${!hideNavbar ? "pt-24" : ""}`}>
        <Suspense fallback={<TechLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {/* Floating HUD Panel Overlay */}
      <FloatingHUD />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}