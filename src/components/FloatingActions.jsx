import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 280);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-center gap-2.5 pointer-events-none">
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20Systems!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Touch Micro Systems on WhatsApp"
        className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/25 hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Back to Top Floating Button (never overlaps WhatsApp because of flex column layout) */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="pointer-events-auto flex items-center justify-center w-11 h-11 rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-200"
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
