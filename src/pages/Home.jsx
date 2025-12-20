import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "../components/sections/HeroSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ServicesSection from "../components/sections/ServicesSection";
import ExtraInfo from "../components/sections/ExtraInfo";
import ProductsSection from "../components/sections/ProductsSection";
import AccessoriesSection from "../components/sections/AccessoriesSection";
import SecondHandProducts from "../components/sections/SecondHandProducts";
import Gallery from "../components/sections/gallery";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Animation wrapper - Precision bezier for "hardware/tech" entry
  const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );

  // Section Divider - Subtle orange glow line on pure black
  const Divider = () => (
    <div className="w-full px-6 mx-auto max-w-7xl opacity-10">
      <div className="h-px bg-gradient-to-r from-transparent via-[#FF4C00] to-transparent" />
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-gray-300 selection:bg-[#FF4C00] selection:text-white overflow-x-hidden font-sans">
      
       <Helmet>
        <title>Touch Microsystems | Embedded Solutions & Electronics Services</title>
        <meta
          name="description"
          content="Touch Microsystems offers embedded solutions, electronic products, second-hand devices, and accessories. Explore our innovative and reliable services."
        />
        <meta name="keywords" content="Touch Microsystems, embedded systems, electronics, second-hand products, accessories, services" />

        
        <meta property="og:title" content="Touch Microsystems | Embedded Solutions & Electronics Services" />
        <meta property="og:description" content="Explore embedded solutions, electronics products, and accessories from Touch Microsystems." />
        <meta property="og:image" content="https://www.touchmicrosystemservices.in/images/header.png" />
        <meta property="og:url" content="https://touchmicrosystems.in/" />
        <meta property="og:type" content="website" />

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Touch Microsystems | Embedded Solutions & Electronics Services" />
        <meta name="twitter:description" content="Explore embedded solutions, electronics products, and accessories from Touch Microsystems." />
        <meta name="twitter:image" content="https://www.touchmicrosystemservices.in/images/header.png" />
      </Helmet>

      {/* 1. HERO SECTION */}
      <div id="hero" className="relative z-10">
        <HeroSection />
      </div>

      {/* 2. MAIN CONTENT - UNIFIED BLACK BACKGROUND */}
      <div className="relative z-10 bg-[#0A0A0A]">
        
        {/* Persistent Technical Grid Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>

        <div className="relative z-10 py-10 space-y-20">
          
          {/* Services */}
          <FadeIn delay={0.1}>
            <div id="services" className="container px-4 mx-auto">
              <ServicesSection />
            </div>
          </FadeIn>

          <Divider />

          {/* Products */}
          <FadeIn delay={0.2}>
            <div id="products" className="container px-4 mx-auto">
              <ProductsSection />
            </div>
          </FadeIn>

          <Divider />

          {/* Second Hand Products - Removed Grey Background */}
          <FadeIn delay={0.3}>
            <div id="secondhand" className="py-4">
              <SecondHandProducts />
            </div>
          </FadeIn>

          <Divider />

          {/* Accessories */}
          <FadeIn delay={0.35}>
            <div id="accessories" className="container px-4 mx-auto">
              <AccessoriesSection />
            </div>
          </FadeIn>

          <Divider />

          {/* Gallery */}
          <FadeIn delay={0.4}>
            <div id="gallery" className="container px-4 mx-auto">
              <Gallery />
            </div>
          </FadeIn>

          <Divider />

          {/* Why Choose Us - Removed Grey Background */}
          <FadeIn delay={0.45}>
            <div id="whychooseus" className="py-10">
              <div className="container px-4 mx-auto">
                <WhyChooseUs />
              </div>
            </div>
          </FadeIn>

          <Divider />

          {/* Extra Info */}
          <FadeIn delay={0.5}>
            <div className="pb-20">
              <ExtraInfo />
            </div>
          </FadeIn>

        </div>
      </div>

      {/* 3. FLOATING ACTIONS */}
      
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20System%20Services!"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-all duration-300 ${
          showScroll ? "bottom-24" : "bottom-6"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Scroll To Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#FF4C00] text-white shadow-[0_10px_30px_rgba(255,76,0,0.3)] hover:bg-[#e04300] hover:scale-110 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}