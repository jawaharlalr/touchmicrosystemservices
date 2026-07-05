import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const offset = 80;
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
    { name: "Services", id: "services", type: "scroll" },
    { name: "Products", id: "products", type: "scroll" },
    { name: "Accessories", id: "accessories", type: "scroll" },
    { name: "About Us", path: "/about-us", type: "link" },
    { name: "Contact Us", path: "/contact-us", type: "link" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? "py-2 bg-black/70 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.9)]" 
          : "py-4 bg-[#0A0A0A] border-b border-white/5" 
      }`}
    >
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        
        {/* Logo */}
        <Link to="/" onClick={scrollToTop} className="flex items-center">
          <img
            src="/images/header.png"
            alt="Touch Micro System Services Logo"
            className="object-contain -my-8 transition-all duration-300 scale-105 bg-transparent h-24 hover:scale-110 filter drop-shadow-[0_0_15px_rgba(255,76,0,0.2)]"
            loading="eager"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden p-1.5 border rounded-full md:flex bg-white/[0.02] border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            link.type === "scroll" ? (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="px-5 py-2.5 text-xs font-medium font-mono tracking-widest text-gray-400 uppercase transition-all rounded-full hover:text-brand-orange hover:bg-white/[0.03]"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={scrollToTop}
                className={`px-5 py-2.5 text-xs font-medium font-mono tracking-widest uppercase transition-all rounded-full ${
                  location.pathname === link.path 
                    ? "text-white bg-brand-orange shadow-[0_0_20px_rgba(255,76,0,0.4)] border border-brand-orange/30" 
                    : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] p-2.5 text-gray-400 transition-colors border rounded-full md:hidden bg-white/[0.02] border-white/10 hover:text-brand-orange hover:border-brand-orange/40"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[101] bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-[105] w-[80%] max-w-sm border-l bg-black/90 border-white/5 shadow-[20px_0_60px_rgba(0,0,0,1)]"
            >
              <div className="flex flex-col h-full p-8 pt-24 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={link.name}
                  >
                    {link.type === "scroll" ? (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="w-full py-4 text-xl font-medium font-mono text-left text-gray-400 uppercase transition-all border-b border-white/5 hover:text-brand-orange hover:pl-4"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={scrollToTop}
                        className={`block w-full py-4 text-xl font-medium font-mono text-left uppercase border-b border-white/5 transition-all hover:pl-4 ${
                          location.pathname === link.path ? "text-brand-orange" : "text-gray-400 hover:text-brand-orange"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <div className="pt-12 pb-8 mt-auto border-t border-white/5">
                   <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase mb-4 text-center">Touch Microsystems</p>
                   <div className="w-12 h-[2px] mx-auto rounded-full bg-brand-orange/40" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}