import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", type: "home" },
    { name: "Services", id: "services", type: "scroll" },
    { name: "Products", id: "products", type: "scroll" },
    { name: "About Us", path: "/about-us", type: "link" },
    { name: "Contact Us", path: "/contact-us", type: "link" },
  ];

  return (
    <div className="fixed top-3 sm:top-4 left-0 right-0 z-[100] px-3 sm:px-6 pointer-events-none">
      <header
        className={`pointer-events-auto max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-gray-300 rounded-2xl transition-all duration-300 px-4 sm:px-6 ${
          scrolled ? "py-2 shadow-lg border-gray-400/60" : "py-2.5 sm:py-3 shadow-md"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center group py-0.5">
            <img
              src="/images/header.png"
              alt="Touch Micro System Services Logo"
              className="object-contain h-12 sm:h-14 md:h-16 w-auto transition-transform duration-200 group-hover:scale-105"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="items-center hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              if (link.type === "home") {
                const isHomeActive = location.pathname === "/" && !location.state?.scrollTo;
                return (
                  <button
                    key={link.name}
                    onClick={scrollToTop}
                    className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-xl ${
                      isHomeActive
                        ? "text-orange-600 bg-orange-50 border border-orange-200"
                        : "text-gray-800 hover:text-orange-600 hover:bg-orange-50/70"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              }

              if (link.type === "scroll") {
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="px-3.5 py-2 text-sm font-semibold text-gray-800 transition-colors rounded-xl hover:text-orange-600 hover:bg-orange-50/70"
                  >
                    {link.name}
                  </button>
                );
              }

              const isLinkActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={scrollToTop}
                  className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-xl ${
                    isLinkActive
                      ? "text-orange-600 bg-orange-50 border border-orange-200"
                      : "text-gray-800 hover:text-orange-600 hover:bg-orange-50/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="items-center hidden md:flex">
            <Link
              to="/contact-us"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 rounded-xl bg-orange-500 hover:bg-orange-600 shadow-sm hover:shadow-md active:scale-98"
            >
              <span>Get a Quote</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Toggle Button (Guaranteed 44x44px touch target) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-800 transition-colors border border-gray-300 rounded-xl md:hidden bg-white hover:bg-orange-50 hover:text-orange-600 shadow-xs"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* --- MOBILE NAVBAR DROPDOWN --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="md:hidden overflow-hidden pt-3 border-t border-gray-300 mt-2.5 bg-white"
            >
              <div className="space-y-2 pb-2">
                {navLinks.map((link) => {
                  if (link.type === "home") {
                    const isHome = location.pathname === "/" && !location.state?.scrollTo;
                    return (
                      <button
                        key={link.name}
                        onClick={scrollToTop}
                        className={`w-full min-h-[44px] flex items-center px-4 text-base font-semibold text-left rounded-xl transition-colors border ${
                          isHome 
                            ? "bg-orange-50 text-orange-600 border-orange-200 font-bold" 
                            : "text-gray-800 border-transparent hover:bg-orange-50/70 hover:text-orange-600"
                        }`}
                      >
                        {link.name}
                      </button>
                    );
                  }
                  if (link.type === "scroll") {
                    return (
                      <button
                        key={link.name}
                        onClick={() => scrollToSection(link.id)}
                        className="w-full min-h-[44px] flex items-center px-4 text-base font-semibold text-left text-gray-800 rounded-xl transition-colors border border-transparent hover:bg-orange-50/70 hover:text-orange-600"
                      >
                        {link.name}
                      </button>
                    );
                  }
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={scrollToTop}
                      className={`min-h-[44px] flex items-center w-full px-4 text-base font-semibold text-left rounded-xl transition-colors border ${
                        isActive 
                          ? "bg-orange-50 text-orange-600 border-orange-200 font-bold" 
                          : "text-gray-800 border-transparent hover:bg-orange-50/70 hover:text-orange-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Mobile Get a Quote CTA */}
                <div className="pt-2">
                  <Link
                    to="/contact-us"
                    onClick={() => {
                      scrollToTop();
                      setIsOpen(false);
                    }}
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white transition-all rounded-xl bg-orange-500 hover:bg-orange-600 shadow-sm"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}