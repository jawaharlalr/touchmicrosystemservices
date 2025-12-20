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
      className={`fixed w-full z-[100] transition-all duration-300 ${
        /* REMOVED TRANSPARENCY: Always bg-brand-black, solid border on scroll */
        scrolled 
          ? "py-1 bg-brand-black border-b border-white/10 shadow-2xl" 
          : "py-4 bg-brand-black" 
      }`}
    >
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        
        {/* Logo */}
        <Link to="/" onClick={scrollToTop} className="flex items-center">
          <img
            src="/images/header.png"
            alt="Touch Micro System Services Logo"
            className="object-contain -my-8 transition-transform duration-300 scale-110 bg-transparent h-28 hover:scale-120"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden p-1 border rounded-full md:flex bg-white/5 border-white/10">
          {navLinks.map((link) => (
            link.type === "scroll" ? (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="px-6 py-2 text-[10px] font-black tracking-[0.2em] text-gray-300 uppercase transition-all rounded-full hover:text-white hover:bg-white/10"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={scrollToTop}
                className={`px-6 py-2 text-[10px] font-black tracking-[0.2em] uppercase transition-all rounded-full ${
                  location.pathname === link.path 
                    ? "text-white bg-brand-orange shadow-[0_0_20px_rgba(255,76,0,0.5)]" 
                    : "text-gray-300 hover:text-white hover:bg-white/10"
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
          className="relative z-[110] p-2 text-gray-300 transition-colors md:hidden hover:text-brand-orange"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE SIDEBAR (SOLID BLACK) --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay - High opacity for solid feel */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[101] bg-black/95"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
              className="fixed inset-y-0 right-0 z-[105] w-[85%] max-w-sm border-l bg-brand-black border-white/10 shadow-[20px_0_60px_rgba(0,0,0,1)]"
            >
              <div className="flex flex-col h-full p-8 pt-24 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={link.name}
                  >
                    {link.type === "scroll" ? (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="w-full p-4 text-2xl font-black text-left text-gray-400 uppercase transition-all border-b border-white/5 hover:text-brand-orange hover:pl-8 active:bg-white/5"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={scrollToTop}
                        className={`block w-full p-4 text-2xl font-black text-left uppercase border-b border-white/5 transition-all hover:pl-8 active:bg-white/5 ${
                          location.pathname === link.path ? "text-brand-orange" : "text-gray-400 hover:text-brand-orange"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <div className="pt-12 pb-8 mt-auto border-t border-white/5">
                   <p className="text-[10px] font-black tracking-widest text-gray-600 uppercase mb-4 text-center">Touch Micro Systems</p>
                   <div className="w-12 h-1 mx-auto rounded-full bg-brand-orange" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}