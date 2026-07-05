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
    <section id="accessories" className="relative py-24 overflow-hidden bg-brand-black bg-grid-tech border-t border-white/5">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/5"
          >
            <Cog size={12} className="text-brand-orange animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">Component Inventory</span>
          </motion.div>
          <h2 className="text-3xl font-black tracking-tighter text-white uppercase md:text-5xl">
            Parts & <span className="text-brand-orange">Accessories</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-sm text-gray-500 font-sans sm:text-base">
            Original replacement parts and high-performance upgrades for every system architecture.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Laptop Accessories Category */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 border rounded-xl bg-white/[0.02] border-white/5 text-brand-orange shadow-[0_0_15px_rgba(255,76,0,0.1)]">
                <Laptop size={22} />
              </div>
              <h3 className="text-xl font-bold font-mono tracking-tight text-white uppercase">Laptop Spares</h3>
            </div>
            
            <ul className="grid grid-cols-2 gap-3">
              {laptopAccessories.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-center gap-2.5 p-3 sm:p-4 transition-all duration-300 border rounded-xl bg-white/[0.01] border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.03]"
                >
                  <CheckCircle2 size={12} className="flex-shrink-0 text-brand-orange/30 group-hover:text-brand-orange transition-colors" />
                  <span className="text-[11px] sm:text-sm font-sans font-medium text-gray-400 transition-colors group-hover:text-white leading-tight">
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 border rounded-xl bg-white/[0.02] border-white/5 text-brand-orange shadow-[0_0_15px_rgba(255,76,0,0.1)]">
                <Monitor size={22} />
              </div>
              <h3 className="text-xl font-bold font-mono tracking-tight text-white uppercase">Desktop Components</h3>
            </div>
            
            <ul className="grid grid-cols-2 gap-3">
              {desktopAccessories.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-center gap-2.5 p-3 sm:p-4 transition-all duration-300 border rounded-xl bg-white/[0.01] border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.03]"
                >
                  <CheckCircle2 size={12} className="flex-shrink-0 text-brand-orange/30 group-hover:text-brand-orange transition-colors" />
                  <span className="text-[11px] sm:text-sm font-sans font-medium text-gray-400 transition-colors group-hover:text-white leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Footer info tag */}
        <div className="flex flex-wrap justify-center gap-4 py-6 mt-16 border-t sm:gap-8 border-white/5 opacity-50">
            <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500">Original Spares</span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500">Warranty Included</span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-gray-500">Instant Installation</span>
        </div>
      </div>
    </section>
  );
}