import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Cpu, Terminal, Radio, Shield } from "lucide-react";

export default function HeroSection() {
  const [logs, setLogs] = useState([
    "SYS_INIT: Booting Touch Micro diagnostics...",
    "VOLT_CHECK: Core voltage stable at 1.22V",
    "MEM_CHECK: DDR5 buffer allocations verified"
  ]);

  const [hz, setHz] = useState(4.2);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live processor frequencies
      setHz((4.0 + Math.random() * 0.5).toFixed(2));
      
      // Simulate ticking system log entries
      const events = [
        "CHIP_TEMP: Sensor 01 reading 38.5°C",
        "OSCILLOSCOPE: Clock signal phase aligned",
        "PORT_SCAN: I2C & SPI interfaces active",
        "SYS_LOAD: Operating at 22% capacity",
        "REFURB_CHECK: Component diagnostics idle",
        "NET_ROUTING: High-priority queue stable"
      ];
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      setLogs((prev) => [randomEvent, prev[0], prev[1]]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-20 overflow-hidden bg-brand-black bg-grid-tech">
      
      {/* --- TECH BACKGROUND GLOWS --- */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.05, 0.08, 0.05] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[750px] h-[350px] bg-brand-orange rounded-full blur-[140px] pointer-events-none z-0" 
      />

      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="text-left lg:col-span-7">
            {/* Animated Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border rounded-full border-brand-orange/30 bg-brand-orange/5 backdrop-blur-md"
            >
              <Cpu size={14} className="text-brand-orange animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] font-bold text-brand-orange uppercase">
                Chennai's Tech Support Specialists
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-6 text-4xl font-black leading-[1.0] tracking-tighter text-white sm:text-6xl lg:text-7xl uppercase"
            >
              SYSTEMS BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-brand-orange drop-shadow-[0_0_20px_rgba(255,76,0,0.2)]">
                FOR PERFORMANCE
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mb-10 text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg font-sans"
            >
              Premium electronics repair, embedded solutions, and system architecture. 
              Expert diagnostics and component-level servicing for all leading brands.
            </motion.p>

            {/* Heavy CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/contact-us"
                className="group flex items-center justify-center gap-3 px-8 py-4.5 text-xs font-mono tracking-widest font-bold text-white transition-all bg-brand-orange border border-brand-orange/40 hover:bg-orange-600 shadow-[0_0_25px_rgba(255,76,0,0.25)] hover:shadow-[0_0_40px_rgba(255,76,0,0.4)] active:scale-95 rounded-sm"
              >
                BOOK A SERVICE
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4.5 text-xs font-mono tracking-widest font-bold text-white transition-all border rounded-sm border-white/10 bg-white/[0.01] hover:bg-white/5 active:scale-95"
              >
                EXPLORE SOLUTIONS
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE HUD DIAGNOSTICS */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 relative w-full lg:max-w-md mx-auto"
          >
            {/* Tech Outer Shield Frame */}
            <div className="relative p-6 border rounded-2xl bg-black/60 border-white/5 shadow-2xl backdrop-blur-xl corner-brackets">
              
              {/* Header bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                  <span className="text-[10px] font-mono tracking-widest text-gray-400 font-bold uppercase">
                    SYS_DIAGNOSTICS
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[8px] font-mono text-gray-500">
                  <Terminal size={10} />
                  <span>MOD_v1.0</span>
                </div>
              </div>

              {/* Status statistics grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                {/* Stat block 1 */}
                <div className="p-3 border rounded-xl bg-white/[0.01] border-white/5">
                  <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                    CPU_FREQUENCY
                  </span>
                  <span className="text-xl font-bold font-mono text-white">
                    {hz} <span className="text-[10px] text-brand-orange">GHz</span>
                  </span>
                </div>

                {/* Stat block 2 */}
                <div className="p-3 border rounded-xl bg-white/[0.01] border-white/5">
                  <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                    VOLT_STATUS
                  </span>
                  <span className="text-xl font-bold font-mono text-white">
                    1.22 <span className="text-[10px] text-green-400">V</span>
                  </span>
                </div>

                {/* Stat block 3 */}
                <div className="p-3 border rounded-xl bg-white/[0.01] border-white/5">
                  <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                    SYS_STABILITY
                  </span>
                  <div className="flex items-center gap-1">
                    <Shield size={12} className="text-brand-orange" />
                    <span className="text-xs font-bold font-mono text-white">99.98%</span>
                  </div>
                </div>

                {/* Stat block 4 */}
                <div className="p-3 border rounded-xl bg-white/[0.01] border-white/5">
                  <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                    LINK_BANDWIDTH
                  </span>
                  <div className="flex items-center gap-1">
                    <Radio size={12} className="text-green-400" />
                    <span className="text-xs font-bold font-mono text-white">1000 Mbps</span>
                  </div>
                </div>

              </div>

              {/* Ticking log console */}
              <div className="p-4 border rounded-xl bg-black border-white/5 font-mono text-[9px] text-gray-400 h-28 overflow-hidden space-y-1.5 flex flex-col justify-end">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex gap-2 transition-all duration-300">
                    <span className="text-brand-orange select-none">&gt;&gt;</span>
                    <span className="truncate leading-none">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- BRAND CAROUSEL (FLOATING METALLIC TILES) --- */}
        <div className="mt-32">
          <p className="mb-10 text-[10px] font-mono tracking-[0.4em] text-gray-500 uppercase">
            Authorized Service Expertise
          </p>
          
          <div className="relative w-full overflow-hidden group">
            {/* Gradients on edges for fade-out look */}
            <div className="absolute top-0 left-0 z-20 w-32 h-full pointer-events-none bg-gradient-to-r from-brand-black to-transparent" />
            <div className="absolute top-0 right-0 z-20 w-32 h-full pointer-events-none bg-gradient-to-l from-brand-black to-transparent" />

            <div className="flex gap-8 py-8 whitespace-nowrap animate-scroll-loop hover:[animation-play-state:paused]">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center w-52 h-28 p-8 transition-all duration-300 border rounded-2xl bg-white/[0.01] border-white/5 backdrop-blur-md hover:scale-110 hover:bg-white/[0.04] hover:border-brand-orange/40 hover:shadow-[0_0_30px_rgba(255,76,0,0.2)] group/item"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="object-contain w-full h-full transition-all duration-300 filter brightness-90 group-hover/item:brightness-110 opacity-70 group-hover/item:opacity-100"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes scrollLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-loop {
          display: inline-flex;
          animation: scrollLoop 25s linear infinite;
        }
      `}</style>
    </section>
  );
}