import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, CheckCircle2, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const brands = [
    { name: "Dell", src: "/images/dell.webp" },
    { name: "HP", src: "/images/hp.webp" },
    { name: "Acer", src: "/images/acer.webp" },
    { name: "Lenovo", src: "/images/lenovo.webp" },
    { name: "Samsung", src: "/images/samsung.webp" },
    { name: "Asus", src: "/images/asus.webp" },
    { name: "Zebronics", src: "/images/zeb.webp" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center pt-4 sm:pt-8 pb-16 overflow-hidden bg-white">
      
      {/* Light subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-grid-tech" />
      
      {/* Soft warm highlight aura */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-100/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* CENTERED HERO CONTENT */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border rounded-full border-orange-300 bg-orange-50/90 shadow-xs"
          >
            <Cpu size={15} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide text-orange-800 uppercase">
              Chennai's Embedded &amp; Electronics Specialists
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.15]"
          >
            Embedded Systems &amp; Electronics Solutions{" "}
            <span className="text-orange-600">Built for Performance</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mb-8 text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Embedded systems, electronics, computer solutions and technical services tailored for businesses, institutions and individuals.
          </motion.p>

          {/* Key Value Bullets / Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 max-w-3xl text-xs sm:text-sm font-medium text-gray-700"
          >
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-gray-300 rounded-full shadow-xs">
              <CheckCircle2 size={16} className="text-orange-600 flex-shrink-0" />
              <span>Component-Level Diagnostics</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-gray-300 rounded-full shadow-xs">
              <CheckCircle2 size={16} className="text-orange-600 flex-shrink-0" />
              <span>Custom Hardware &amp; IoT</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-gray-300 rounded-full shadow-xs">
              <CheckCircle2 size={16} className="text-orange-600 flex-shrink-0" />
              <span>Multi-Brand Enterprise Support</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-50 border border-gray-300 rounded-full shadow-xs">
              <CheckCircle2 size={16} className="text-orange-600 flex-shrink-0" />
              <span>Certified Lab Warranty</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-4 sm:flex-row justify-center w-full sm:w-auto"
          >
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white transition-all rounded-xl bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 active:scale-98"
            >
              <span>Get a Quote</span>
              <ArrowRight size={16} />
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-gray-800 transition-all bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-orange-400 active:scale-98 shadow-xs"
            >
              <span>Explore Services</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </motion.div>
        </div>

        {/* --- BRAND CAROUSEL (PROMINENT, BIGGER LOGOS WITH VISIBLE BORDERS) --- */}
        <div className="mt-20 pt-10 border-t border-gray-300">
          <div className="flex flex-col items-center mb-8 text-center">
            <span className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-1">
              Authorized Service Expertise
            </span>
            <h3 className="text-base sm:text-lg font-bold text-gray-800">
              Component-Level Servicing Across Leading Hardware Brands
            </h3>
          </div>
          
          <div className="relative w-full overflow-hidden group py-2">
            {/* Smooth Edge Fade Masks */}
            <div className="absolute top-0 left-0 z-20 w-28 sm:w-44 h-full pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="absolute top-0 right-0 z-20 w-28 sm:w-44 h-full pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />

            <div className="flex gap-6 sm:gap-8 py-4 whitespace-nowrap animate-scroll-loop hover:[animation-play-state:paused]">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 shrink-0 inline-flex items-center justify-center w-64 sm:w-72 h-32 sm:h-36 px-7 py-5 transition-all duration-300 border rounded-2xl bg-white border-gray-300 shadow-xs hover:shadow-xl hover:border-orange-400 hover:-translate-y-1"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="object-contain h-20 sm:h-24 w-auto max-w-[190px] transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}