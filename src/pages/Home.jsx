import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

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

  // Animation wrapper
  const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="relative">

      {/* -------------------------------- SEO IMPROVED -------------------------------- */}
      <Helmet>
        <title>Touch Microsystems | Embedded Solutions & Electronics Services</title>

        <meta
          name="description"
          content="Touch Microsystems provides embedded solutions, electronics repair, second-hand devices, IT hardware, accessories, and professional service support."
        />

        <meta
          name="keywords"
          content="Touch Microsystems, embedded systems, electronics repair, laptop service, computer repair, IT accessories, second hand computers, CCTV installation"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Touch Micro System Services" />
        <meta name="theme-color" content="#FF4C00" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://touchmicrosystems.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="Touch Microsystems | Embedded Solutions & Electronics Services" />
        <meta property="og:description" content="Electronics repair, embedded systems, accessories, and second-hand products." />
        <meta property="og:image" content="https://www.touchmicrosystemservices.in/images/header.png" />
        <meta property="og:url" content="https://touchmicrosystems.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Touch Microsystems | Embedded Solutions & Electronics Services" />
        <meta name="twitter:description" content="Explore embedded solutions, electronics repair, accessories, and more." />
        <meta name="twitter:image" content="https://www.touchmicrosystemservices.in/images/header.png" />

        {/* Structured Data - Organization Schema */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Touch Micro System Services",
          "image": "https://www.touchmicrosystemservices.in/images/header.png",
          "url": "https://touchmicrosystems.in/",
          "telephone": "+91 9790741494",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8/42, Mount Poonamallee Road, Ramachandran Nagar",
            "addressLocality": "Iyyappanthangal",
            "addressRegion": "Chennai",
            "postalCode": "600056",
            "addressCountry": "IN"
          },
          "description": "Laptop repair, desktop repair, accessories, embedded solutions, and electronics services.",
          "priceRange": "₹₹"
        }
        `}</script>
      </Helmet>

      {/* ---------------------------- HERO SECTION ---------------------------- */}
      <FadeIn delay={0.1}>
        <div id="hero">
          <HeroSection />
        </div>
      </FadeIn>

      {/* ---------------------- SECTIONS WITH BG IMAGE ----------------------- */}
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: "url('/images/home.jpg')" }}
      >
        <FadeIn delay={0.15}>
          <div id="gallery">
            <Gallery />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div id="services">
            <ServicesSection />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div id="products">
            <ProductsSection />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div id="secondhand">
            <SecondHandProducts />
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div id="accessories">
            <AccessoriesSection />
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div id="whychooseus">
            <WhyChooseUs />
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <ExtraInfo />
        </FadeIn>
      </div>

      {/* --------------------------- WHATSAPP BUTTON --------------------------- */}
      <motion.a
        href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20System%20Services!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-all duration-300 ${
          showScroll ? "bottom-24" : "bottom-6"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* --------------------------- SCROLL TO TOP ---------------------------- */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#FF4C00] text-white shadow-xl hover:bg-[#e04300] transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
