import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FloatingHUD from "./components/FloatingHUD";

// Lazy load secondary pages to optimize initial bundle size
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Clean light-theme loading spinner fallback
function TechLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white font-sans">
      <div className="w-9 h-9 border-3 rounded-full border-orange-500 border-t-transparent animate-spin mb-3" />
      <span className="text-xs font-medium tracking-wider text-gray-500 uppercase">Loading...</span>
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
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <main className="flex-grow pt-28 sm:pt-32">
        <Suspense fallback={<TechLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      {/* Floating Action Elements (WhatsApp & Support) */}
      <FloatingHUD />

      {/* Light Global Footer */}
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