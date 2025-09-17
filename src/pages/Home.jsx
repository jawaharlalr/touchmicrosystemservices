import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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

  return (
    <div className="relative">
      <Helmet>
        <title>
          Touch Microsystems | Embedded Solutions & Electronics Services
        </title>
        <meta
          name="description"
          content="Touch Microsystems offers embedded solutions, electronic products, second-hand devices, and accessories. Explore our innovative and reliable services."
        />
        <meta
          name="keywords"
          content="Touch Microsystems, embedded systems, electronics, second-hand products, accessories, services"
        />

        <meta
          property="og:title"
          content="Touch Microsystems | Embedded Solutions & Electronics Services"
        />
        <meta
          property="og:description"
          content="Explore embedded solutions, electronics products, and accessories from Touch Microsystems."
        />
        <meta
          property="og:image"
          content="https://www.touchmicrosystemservices.in/images/header.png"
        />
        <meta property="og:url" content="https://touchmicrosystems.in/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Touch Microsystems | Embedded Solutions & Electronics Services"
        />
        <meta
          name="twitter:description"
          content="Explore embedded solutions, electronics products, and accessories from Touch Microsystems."
        />
        <meta
          name="twitter:image"
          content="https://www.touchmicrosystemservices.in/images/header.png"
        />
      </Helmet>

      {/* Hero Section - no background image */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* All other sections with background image */}
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/home.jpg')",
        }}
      >
        <div id="gallery">
          <Gallery />
        </div>

        <div id="services">
          <ServicesSection />
        </div>

        <div id="products">
          <ProductsSection />
        </div>

        <div id="secondhand">
          <SecondHandProducts />
        </div>

        <div id="accessories">
          <AccessoriesSection />
        </div>

        <div id="whychooseus">
          <WhyChooseUs />
        </div>

        <ExtraInfo />
      </div>

      {/* WhatsApp Floating Button (Always Visible) */}
      <a
        href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20System%20Services!%0A%0AI%20am%20interested%20in%20your%20IT%20services.%20Please%20share%20details%20about:%0A-Computer%20repairs%20and%20upgrades%0A-Camera%20installations%20and%20support%0A-Desktop%20repair%20and%20optimization"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 ${
          showScroll ? "bottom-24" : "bottom-6"
        }`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Scroll To Top Button (Conditional) */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#FF4C00] text-white shadow-lg hover:bg-[#e04300] transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
