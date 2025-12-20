import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Cpu } from "lucide-react";

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
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 overflow-hidden bg-brand-black">
      
      {/* --- TECH BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 opacity-[0.07]" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-orange rounded-full blur-[140px] pointer-events-none z-0" 
      />

      <div className="relative z-10 w-full mx-auto text-center max-w-7xl">
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 border rounded-full border-brand-orange/40 bg-brand-orange/15 backdrop-blur-md"
        >
          <Cpu size={16} className="text-brand-orange animate-pulse" />
          <span className="text-[11px] font-black tracking-[0.25em] text-brand-orange uppercase">
            Chennai's Tech Support Specialists
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-8 text-6xl font-black leading-[0.9] tracking-tighter text-white sm:text-7xl md:text-9xl lg:text-[10rem]"
        >
          SYSTEMS BUILT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-brand-orange drop-shadow-[0_0_35px_rgba(255,76,0,0.3)]">
            FOR PERFORMANCE
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-400 md:text-2xl"
        >
          Premium electronics repair, embedded solutions, and system architecture. 
          Expert diagnostics and component-level servicing for all leading brands.
        </motion.p>

        {/* Heavy CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="/contact-us"
            className="group flex items-center gap-3 px-10 py-5 text-lg font-black text-white transition-all bg-brand-orange rounded-sm hover:bg-orange-600 shadow-[0_0_30px_rgba(255,76,0,0.4)] hover:shadow-[0_0_50px_rgba(255,76,0,0.6)] active:scale-95"
          >
            BOOK A SERVICE
            <ChevronRight size={22} className="transition-transform group-hover:translate-x-1.5" />
          </a>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 text-lg font-black text-white transition-all border-2 rounded-sm border-white/10 hover:bg-white/5 hover:border-white/40 active:scale-95"
          >
            EXPLORE SOLUTIONS
          </button>
        </motion.div>

        {/* --- ENHANCED BRAND CAROUSEL (BIGGER TILES) --- */}
        <div className="mt-32">
          <p className="mb-12 text-xs font-black tracking-[0.5em] text-gray-500 uppercase">
            Authorized Service Expertise
          </p>
          
          <div className="relative w-full overflow-hidden group">
            <div className="absolute top-0 left-0 z-20 w-64 h-full pointer-events-none bg-gradient-to-r from-brand-black to-transparent"></div>
            <div className="absolute top-0 right-0 z-20 w-64 h-full pointer-events-none bg-gradient-to-l from-brand-black to-transparent"></div>

            {/* Faster loop (15s) and wider gap (gap-12) */}
            <div className="flex gap-12 py-12 whitespace-nowrap animate-scroll-loop hover:[animation-play-state:paused]">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  /* Increased dimensions to w-60 h-32 and p-10 */
                  className="inline-flex items-center justify-center w-60 h-32 p-10 transition-all duration-300 border rounded-2xl bg-white/[0.04] border-white/10 backdrop-blur-md hover:scale-125 hover:bg-white/[0.08] hover:border-brand-orange/60 hover:shadow-[0_0_40px_rgba(255,76,0,0.3)] group/item"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="object-contain w-full h-full transition-all duration-300 filter drop-shadow-2xl group-hover/item:brightness-125"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-loop {
          display: inline-flex;
          /* Adjusted speed for the bigger tiles to keep it smooth */
          animation: scrollLoop 20s linear infinite;
        }
      `}</style>
    </section>
  );
}