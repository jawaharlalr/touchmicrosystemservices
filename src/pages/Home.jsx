import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "../components/sections/HeroSection";
import EmbeddedSolutions from "../components/sections/EmbeddedSolutions";
import ServicesSection from "../components/sections/ServicesSection";
import ProductsSection from "../components/sections/ProductsSection";
import SecondHandProducts from "../components/sections/SecondHandProducts";
import AccessoriesSection from "../components/sections/AccessoriesSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ExtraInfo from "../components/sections/ExtraInfo";
import Gallery from "../components/sections/gallery";
import GoogleLiveReviews from "../components/sections/GoogleReviews";
import CtaSection from "../components/sections/CtaSection";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
      
      <Helmet>
        <title>Touch Micro Systems | Embedded Systems &amp; Electronics Solutions Built for Performance</title>
        <meta
          name="description"
          content="Touch Micro Systems provides embedded systems, electronics solutions, computer repairs, chip-level diagnostics, and hardware services in Chennai."
        />
        <meta name="keywords" content="Touch Micro Systems, embedded systems, electronics solutions, laptop repair Chennai, chip level service, computer accessories, IoT hardware" />
        
        <meta property="og:title" content="Touch Micro Systems | Embedded Systems &amp; Electronics Solutions" />
        <meta property="og:description" content="Embedded systems, electronics, computer solutions and technical services tailored for businesses, institutions and individuals." />
        <meta property="og:image" content="https://www.touchmicrosystemservices.in/images/header.png" />
        <meta property="og:url" content="https://touchmicrosystems.in/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Touch Micro Systems | Embedded Systems &amp; Electronics Solutions" />
        <meta name="twitter:description" content="Embedded systems, electronics, computer solutions and technical services tailored for businesses, institutions and individuals." />
        <meta name="twitter:image" content="https://www.touchmicrosystemservices.in/images/header.png" />
      </Helmet>

      {/* 1. HERO SECTION (White Background) */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. EMBEDDED & ELECTRONICS SOLUTIONS SECTION (Slate-50 Background) */}
      <EmbeddedSolutions />

      {/* 3. SERVICES SECTION (White Background) */}
      <ServicesSection />

      {/* 4. PRODUCTS SECTION (Slate-50 Background) */}
      <ProductsSection />

      {/* 5. CERTIFIED SECOND-HAND PRODUCTS (White Background) */}
      <SecondHandProducts />

      {/* 6. PARTS & ACCESSORIES (Slate-50 Background) */}
      <AccessoriesSection />

      {/* 7. WHY TOUCH MICRO SYSTEMS (White Background) */}
      <WhyChooseUs />

      {/* 8. TRUST / COMPANY STORY SECTION (Slate-50 Background) */}
      <ExtraInfo />

      {/* 9. INSIDE THE LAB & WORKSHOP (White Background) */}
      <Gallery />

      {/* 10. GOOGLE REVIEWS SECTION (Slate-50 Background) */}
      <GoogleLiveReviews />

      {/* 11. DISTINCTIVE LIGHT CTA SECTION (Warm Light Orange Tint #FFF7ED) */}
      <CtaSection />

      {/* --- FLOATING ACTIONS (Bottom Right) --- */}
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20System%20Services!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Touch Micro Systems on WhatsApp"
        className={`fixed right-6 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/25 hover:bg-[#20bd5a] hover:scale-108 transition-all duration-200 flex items-center justify-center ${
          showScroll ? "bottom-20" : "bottom-6"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-orange-500 text-white shadow-md shadow-orange-500/20 hover:bg-orange-600 hover:scale-108 transition-all duration-200 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}