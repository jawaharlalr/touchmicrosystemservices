import React from "react";
import { Helmet } from "react-helmet-async";

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

    </div>
  );
}