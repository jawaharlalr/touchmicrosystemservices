import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();

  // Hide Navbar for About and Contact pages
  const hideNavbar = location.pathname === "/about" || location.pathname === "/contact";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (only for Home) */}
      {!hideNavbar && <Navbar />}

      {/* Main Content */}
      <main className="flex-grow">
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
      <AppContent />
    </Router>
  );
}
