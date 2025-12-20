import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

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

  // 1. FIXED PATH CHECKING
  // Updated to match your actual Route paths
  const hideNavbar = location.pathname === "/about-us" || location.pathname === "/contact-us";

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* Navbar (Only shows if NOT on About or Contact pages) */}
      {!hideNavbar && <Navbar />}

      {/* 2. MAIN CONTENT WRAPPER 
         - 'flex-grow' pushes the footer to the bottom.
         - 'pt-24' (approx 96px) adds padding to the top ONLY when Navbar is visible. 
           This prevents the Navbar from covering your page content.
      */}
      <main className={`flex-grow ${!hideNavbar ? "pt-24" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>

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