import React from "react";
import { Laptop, Monitor, Cog, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AccessoriesSection() {
  const laptopAccessories = [
    "Laptop RAM", "Hard Disk", "SATA SSD", "NVMe SSD",
    "Laptop Screen", "Laptop Battery", "Laptop Adaptor",
    "Laptop Power Cable", "Laptop Motherboard", "Laptop Panel",
    "Laptop Display Cable", "Laptop Keyboard"
  ];

  const desktopAccessories = [
    "Desktop Motherboard", "Desktop RAM", "Desktop Hard Disk",
    "Desktop SATA SSD", "Desktop Fan", "Desktop Processor",
    "Desktop SMPS", "Desktop Keyboard & Mouse", "Desktop Graphics Card",
    "Desktop Cabinet", "Gaming Cabinet", "Gaming Keyboard & Mouse"
  ];

  return (
    <section id="accessories" className="relative py-24 overflow-hidden bg-brand-black">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/10"
          >
            <Cog size={14} className="text-brand-orange animate-spin-slow" />
            <span className="text-[10px] font-black tracking-widest uppercase text-brand-orange">Component Inventory</span>
          </motion.div>
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
            Parts & <span className="text-brand-orange">Accessories</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-500">
            Genuine replacement parts and high-performance upgrades for every system configuration.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Laptop Accessories Category */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 border rounded-xl bg-white/5 border-white/10 text-brand-orange">
                <Laptop size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white uppercase">Laptop Spares</h3>
            </div>
            
            {/* --- UPDATED TO grid-cols-2 FOR MOBILE --- */}
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {laptopAccessories.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-center gap-2 p-3 sm:p-4 transition-all duration-300 border rounded-xl bg-white/[0.02] border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.05]"
                >
                  <CheckCircle2 size={12} className="flex-shrink-0 transition-colors text-brand-orange/40 group-hover:text-brand-orange" />
                  <span className="text-[11px] sm:text-sm font-bold text-gray-400 transition-colors group-hover:text-white leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Desktop Accessories Category */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 border rounded-xl bg-white/5 border-white/10 text-brand-orange">
                <Monitor size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white uppercase">Desktop Components</h3>
            </div>
            
            {/* --- UPDATED TO grid-cols-2 FOR MOBILE --- */}
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {desktopAccessories.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-center gap-2 p-3 sm:p-4 transition-all duration-300 border rounded-xl bg-white/[0.02] border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.05]"
                >
                  <CheckCircle2 size={12} className="flex-shrink-0 transition-colors text-brand-orange/40 group-hover:text-brand-orange" />
                  <span className="text-[11px] sm:text-sm font-bold text-gray-400 transition-colors group-hover:text-white leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Footer info tag */}
        <div className="flex flex-wrap justify-center gap-4 py-6 mt-16 border-t sm:gap-8 border-white/5 opacity-40">
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">Original Spares</span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">Warranty Included</span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">Instant Installation</span>
        </div>
      </div>
    </section>
  );
}