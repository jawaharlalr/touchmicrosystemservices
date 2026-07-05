import React from "react";
import { Laptop, Cpu, Printer, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SecondHandProducts() {
  const products = [
    { name: "Certified Laptop", category: "Computers", icon: <Laptop size={30} /> },
    { name: "Performance Desktop", category: "Computers", icon: <Cpu size={30} /> },
    { name: "Enterprise Printer", category: "Office Equipment", icon: <Printer size={30} /> },
  ];

  return (
    <section id="secondhand" className="relative py-24 overflow-hidden bg-brand-black bg-grid-tech border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/5"
          >
            <ShieldCheck size={12} className="text-brand-orange" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">
              Quality Guaranteed
            </span>
          </motion.div>
          
          <h2 className="mb-4 text-3xl font-black tracking-tighter text-white uppercase md:text-5xl">
            Second-Hand <span className="text-brand-orange">Products</span>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-400 font-sans sm:text-base">
            Reliable, technician-verified electronics at a fraction of the cost. 
            Every unit undergoes a comprehensive 50-point diagnostics system check before listing.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-8 transition-all duration-500 border rounded-2xl bg-white/[0.01] border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.02] hover:shadow-[0_20px_50px_rgba(255,76,0,0.08)] corner-brackets"
            >
              {/* Hardware Icon Container */}
              <div className="flex items-center justify-center w-14 h-14 mb-6 transition-all duration-300 rounded-xl bg-black border border-white/5 text-brand-orange group-hover:scale-105 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,76,0,0.3)]">
                {product.icon}
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 mb-3 text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">
                <CheckCircle2 size={12} className="animate-pulse" />
                Tested & Verified
              </div>

              <h3 className="mb-4 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-brand-orange font-mono">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mt-6">
                <span className="px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase rounded bg-white/5 border border-white/5 text-gray-400 group-hover:text-brand-orange group-hover:border-brand-orange/30">
                  {product.category}
                </span>
                
                <button className="text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase group-hover:text-brand-orange transition-colors">
                  View Specs →
                </button>
              </div>
              
              {/* Decorative Corner Tab */}
              <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full transition-colors rotate-45 translate-x-1/2 -translate-y-1/2 bg-white/5 group-hover:bg-brand-orange/20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[10px] text-gray-600">
            * Stock subject to availability. All second-hand products include a limited service warranty.
          </p>
        </div>
      </div>
    </section>
  );
}