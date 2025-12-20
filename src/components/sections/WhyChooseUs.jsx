import React from "react";
import { motion } from "framer-motion";
import { Wrench, Monitor, Network, ShieldCheck, Clock, Headphones, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Wrench,
      title: "Expert Repairs",
      desc: "Precision diagnostics for Laptops and Desktops using component-level micro-servicing."
    },
    {
      icon: Monitor,
      title: "Fast Setup",
      desc: "Instant system deployment, driver optimization, and hardware configuration."
    },
    {
      icon: Network,
      title: "Tech Solutions",
      desc: "Custom-built hardware and scalable software architectures for enterprise efficiency."
    },
    {
      icon: ShieldCheck,
      title: "Warranty Lab",
      desc: "Every service is backed by our official lab warranty, ensuring long-term reliability."
    },
    {
      icon: Clock,
      title: "Express Delivery",
      desc: "High-priority service lane for same-day hardware repairs and system recoveries."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Direct access to senior hardware engineers for critical system emergencies."
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 overflow-hidden bg-brand-black">
      {/* Background Tech Watermark */}
      <div className="absolute bottom-0 right-0 p-10 pointer-events-none select-none opacity-[0.02]">
        <span className="text-[15rem] font-black text-white uppercase tracking-tighter">Reliable</span>
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/10"
          >
            <Zap size={14} className="text-brand-orange fill-brand-orange" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-orange">
              Performance Metrics
            </span>
          </motion.div>
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
            Why Partner <span className="text-brand-orange">With Us?</span>
          </h2>
          <p className="max-w-2xl mt-4 text-base leading-relaxed text-gray-400">
            We don't just fix computers; we optimize your digital infrastructure for maximum durability and speed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-8 transition-all duration-500 border rounded-2xl bg-white/[0.02] border-white/5 hover:border-brand-orange/40 hover:bg-white/[0.05]"
            >
              {/* Status Glow (Top Left) */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse shadow-[0_0_8px_#FF4C00]" />
                <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Active_Node</span>
              </div>

              {/* Icon Container */}
              <div className="flex items-center justify-center w-14 h-14 mb-6 transition-all duration-300 rounded-xl bg-brand-dark border border-white/10 text-brand-orange group-hover:scale-110 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,76,0,0.3)]">
                <Icon size={28} />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-black tracking-tight text-white uppercase transition-colors group-hover:text-brand-orange">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-300">
                {desc}
              </p>

              {/* Hardware-style Bottom Bar */}
              <div className="flex items-center justify-between pt-4 mt-8 border-t border-white/5">
                <span className="text-[10px] font-mono text-gray-700">
                  {/* Changed the comment style here to avoid JSX warning */}
                  0{idx + 1} {"//"} SYS_CHECK
                </span>
                <div className="w-12 h-1 overflow-hidden rounded-full bg-white/5">
                   <div className="w-full h-full transition-all duration-700 bg-brand-orange/20 group-hover:bg-brand-orange" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}