import React from "react";
import { motion } from "framer-motion";
import { Wrench, Monitor, Shield, Database, Cpu, Printer, Camera } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { name: "Laptop Chip Level Service", img: "/images/lcls_service.png", icon: <Cpu className="w-5 h-5" />, size: "lg:col-span-2" },
    { name: "Desktop Chip Level Service", img: "/images/lcls_service.png", icon: <Monitor className="w-5 h-5" />, size: "lg:col-span-1" },
    { name: "Printer Service", img: "/images/ps_service.png", icon: <Printer className="w-5 h-5" />, size: "lg:col-span-1" },
    { name: "CCTV Service", img: "/images/cctvs_service.png", icon: <Camera className="w-5 h-5" />, size: "lg:col-span-1" },
    { name: "Data Recovery Service", img: "/images/drs_service.png", icon: <Database className="w-5 h-5" />, size: "lg:col-span-1" },
    { name: "Laptop Upgrade Service", img: "/images/lus_service.png", icon: <Wrench className="w-5 h-5" />, size: "lg:col-span-1" },
    { name: "Desktop Upgrade Service", img: "/images/lus_service.png", icon: <Shield className="w-5 h-5" />, size: "lg:col-span-1" },
  ];

  const placeholder = "/images/placeholder.webp";

  return (
    <section id="services" className="relative py-24 overflow-hidden bg-brand-black bg-grid-tech border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="inline-block px-3 py-1 mb-4 border rounded-full border-brand-orange/20 bg-brand-orange/5">
            <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-brand-orange">
              Technical Capabilities
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl md:text-5xl">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <div className="w-16 h-1 mt-4 bg-brand-orange rounded-full shadow-[0_0_10px_#FF4C00]" />
        </div>

        {/* Services Grid with Asymmetric Sizing */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.1 }}
              className={`relative group ${service.size}`}
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden transition-all duration-500 border rounded-2xl bg-white/[0.01] border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.02] hover:shadow-[0_20px_50px_rgba(255,76,0,0.08)] corner-brackets">
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="object-cover w-full h-full transition-transform duration-700 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.src = placeholder)}
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute p-3 transition-all duration-300 border rounded-xl bottom-4 left-4 bg-black/85 backdrop-blur-md border-white/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange/50 group-hover:shadow-[0_0_15px_rgba(255,76,0,0.4)]">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold leading-tight tracking-tight text-white transition-colors group-hover:text-brand-orange font-mono">
                    {service.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 font-sans group-hover:text-gray-400 transition-colors">
                    Professional {service.name.toLowerCase()} using precision tools and industry-standard protocols.
                  </p>
                </div>

                {/* Tech scan line effect */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-orange/30 -translate-y-full group-hover:animate-scan pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}