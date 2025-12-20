import React from "react";
import { motion } from "framer-motion";
import { Wrench, Monitor, Shield, Database, Cpu, Printer, Camera } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { name: "Laptop Chip Level Service", img: "/images/lcls.webp", icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "Desktop Chip Level Service", img: "/images/lcls.webp", icon: <Monitor className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "Printer Service", img: "/images/ps.webp", icon: <Printer className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "CCTV Service", img: "/images/cctvs.webp", icon: <Camera className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "Data Recovery Service", img: "/images/drs.webp", icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "Laptop Upgrade Service", img: "/images/lus.webp", icon: <Wrench className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "Desktop Upgrade Service", img: "/images/lus.webp", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  const placeholder = "/images/placeholder.webp";

  return (
    <section id="services" className="relative py-16 overflow-hidden sm:py-24 bg-brand-black">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-4 mx-auto sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 text-left sm:mb-16">
          <div className="inline-block px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/10">
            <span className="text-[10px] font-black tracking-widest uppercase text-brand-orange">
              Technical Capabilities
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-white uppercase sm:text-4xl md:text-5xl">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 mt-4 bg-brand-orange rounded-full" />
        </div>

        {/* Services Grid - UPDATED TO grid-cols-2 FOR MOBILE */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden transition-all duration-500 border bg-white/[0.02] border-white/5 rounded-xl sm:rounded-2xl hover:border-brand-orange/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(255,76,0,0.1)]">
                
                {/* Image Section */}
                <div className="relative h-32 overflow-hidden sm:h-56">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="object-cover w-full h-full transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110"
                    onError={(e) => (e.currentTarget.src = placeholder)}
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Icon Badge - Responsive sizing */}
                  <div className="absolute p-2 transition-colors border rounded-lg sm:p-3 bottom-2 left-2 sm:bottom-4 sm:left-4 bg-brand-black/80 backdrop-blur-md border-white/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-6">
                  <h3 className="mb-1 text-sm font-bold leading-tight tracking-tight text-white transition-colors sm:mb-2 sm:text-xl group-hover:text-brand-orange">
                    {service.name}
                  </h3>
                  {/* Hidden on very small screens to maintain 2-column height consistency, visible on tablets/desktop */}
                  <p className="hidden text-sm leading-relaxed text-gray-500 sm:block">
                    Professional {service.name.toLowerCase()} using precision tools.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}