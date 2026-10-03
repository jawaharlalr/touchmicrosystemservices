import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, CheckCircle2, ChevronRight, Activity, ShieldCheck } from "lucide-react";

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
    <section className="relative flex flex-col items-center justify-center pt-2 sm:pt-6 pb-14 overflow-hidden bg-white">
      
      {/* Light subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-grid-tech" />
      
      {/* Soft warm highlight aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-orange-100/40 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 w-full px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* CENTERED HERO CONTENT */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 border rounded-full border-orange-300 bg-orange-50/90 shadow-xs"
          >
            <Cpu size={15} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide text-orange-800 uppercase">
              Chennai's Embedded &amp; Electronics Specialists
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.12]"
          >
            Embedded Systems &amp; Electronics Solutions{" "}
            <span className="text-orange-600">Built for Performance</span>
          </motion.h1>

          {/* Supporting Text - Concise & Specific */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mb-7 text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Specialized embedded development, component-level board diagnostics, and custom computing hardware solutions engineered for reliability.
          </motion.p>

          {/* Key Value Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8 max-w-3xl text-xs sm:text-sm font-medium text-gray-700"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-gray-300 rounded-full shadow-xs">
              <CheckCircle2 size={15} className="text-orange-600 flex-shrink-0" />
              <span>Chip-Level Diagnostics</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-gray-300 rounded-full shadow-xs">
              <CheckCircle2 size={15} className="text-orange-600 flex-shrink-0" />
              <span>Microcontrollers &amp; IoT</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-gray-300 rounded-full shadow-xs">
              <CheckCircle2 size={15} className="text-orange-600 flex-shrink-0" />
              <span>Enterprise Hardware Support</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-gray-300 rounded-full shadow-xs">
              <CheckCircle2 size={15} className="text-orange-600 flex-shrink-0" />
              <span>Lab-Tested Service Warranty</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12"
          >
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold text-white transition-all rounded-xl bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 active:scale-98 w-full sm:w-auto"
            >
              <span>Get a Quote</span>
              <ArrowRight size={16} />
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-gray-800 transition-all bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-orange-400 active:scale-98 shadow-xs w-full sm:w-auto"
            >
              <span>Explore Services</span>
              <ChevronRight size={16} className="text-gray-400" />
            </button>
          </motion.div>

          {/* PREMIUM TECHNICAL VISUAL CARD */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="w-full max-w-4xl text-left bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden"
          >
            {/* Visual Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-slate-50 border-b border-gray-200 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                <span className="font-semibold text-gray-800">Touch Micro Systems Diagnostic Lab</span>
                <span className="text-gray-400 hidden sm:inline">•</span>
                <span className="text-gray-500 hidden sm:inline">Iyyappanthangal, Chennai</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-gray-600">
                <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200 font-semibold">
                  EST. 2011
                </span>
              </div>
            </div>

            {/* 3 Technical Capability Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              
              {/* Feature 1 */}
              <div className="p-4 sm:p-5 hover:bg-orange-50/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-600">
                    <Cpu size={16} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">Embedded &amp; Firmware</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2.5">
                  Microcontroller programming, sensor telemetry, and customized firmware for ARM &amp; AVR architectures.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">STM32 / ARM</span>
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">IoT Telemetry</span>
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">I2C / SPI</span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-4 sm:p-5 hover:bg-orange-50/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-600">
                    <Activity size={16} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">Chip-Level Diagnostics</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2.5">
                  Stereomicroscope inspection, BGA reballing, and multi-layer motherboard power rail tracing.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">SMD Rework</span>
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Oscilloscope</span>
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Power Delivery</span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-4 sm:p-5 hover:bg-orange-50/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-600">
                    <ShieldCheck size={16} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">System Integration</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2.5">
                  Business workstations, server storage arrays, CCTV networks, and genuine OEM component replacements.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Workstations</span>
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">CCTV &amp; NVR</span>
                  <span className="text-[10px] font-medium bg-gray-100 text-gray-700 px-2 py-0.5 rounded">OEM Spares</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* --- BRAND CAROUSEL (CLEAN, PROPORTIONATE BRAND LOGOS) --- */}
        <div className="mt-14 pt-8 border-t border-gray-300">
          <div className="flex flex-col items-center mb-6 text-center">
            <span className="text-xs font-bold tracking-widest text-orange-600 uppercase mb-1">
              Component-Level Servicing Expertise
            </span>
            <h3 className="text-sm sm:text-base font-bold text-gray-800">
              Diagnostic &amp; Repair Capabilities Across Major Hardware Brands
            </h3>
          </div>
          
          <div className="relative w-full overflow-hidden group py-1">
            {/* Smooth Edge Fade Masks */}
            <div className="absolute top-0 left-0 z-20 w-24 sm:w-40 h-full pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="absolute top-0 right-0 z-20 w-24 sm:w-40 h-full pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent" />

            <div className="flex gap-4 sm:gap-6 py-2 whitespace-nowrap animate-scroll-loop hover:[animation-play-state:paused]">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 shrink-0 inline-flex items-center justify-center w-52 sm:w-60 h-24 sm:h-28 px-6 py-3 transition-all duration-300 border rounded-2xl bg-white border-gray-300 shadow-xs hover:shadow-md hover:border-orange-400 hover:-translate-y-0.5"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="object-contain h-14 sm:h-16 w-auto max-w-[150px] transition-transform duration-300 hover:scale-105"
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