import React from "react";
import { motion } from "framer-motion";
import { Wrench, Monitor, Shield, Database, Cpu, Printer, Camera, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    { 
      name: "Laptop Chip Level Service", 
      desc: "Component-level micro-soldering, motherboard circuit tracing, GPU rework, and power delivery IC repair.",
      img: "/images/lcls.webp", 
      icon: <Cpu className="w-5 h-5" />, 
      size: "lg:col-span-2" 
    },
    { 
      name: "Desktop Chip Level Service", 
      desc: "Diagnostics for motherboard VRMs, PCIe traces, BIOS recovery, and component replacements.",
      img: "/images/desktop.webp", 
      icon: <Monitor className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "Printer Service", 
      desc: "LaserJet and ink-tank maintenance, roller mechanism overhaul, logic board repairs, and toner setup.",
      img: "/images/ps.webp", 
      icon: <Printer className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "CCTV & Security Solutions", 
      desc: "IP camera installations, NVR/DVR configuration, remote surveillance networking, and maintenance.",
      img: "/images/cctvs.webp", 
      icon: <Camera className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "Data Recovery Service", 
      desc: "Specialized recovery for damaged HDDs, formatted SSDs, firmware corruptions, and flash media.",
      img: "/images/drs.webp", 
      icon: <Database className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "Laptop Upgrade Service", 
      desc: "High-speed NVMe SSD installations, RAM expansions, battery replacements, and thermal repasting.",
      img: "/images/lus.webp", 
      icon: <Wrench className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "Desktop & Server Tuning", 
      desc: "Enterprise OS configuration, PSU upgrades, workstation cooling optimization, and hardware hardening.",
      img: "/images/server.webp", 
      icon: <Shield className="w-5 h-5" />, 
      size: "lg:col-span-2" 
    },
  ];

  return (
    <section id="services" className="relative py-14 sm:py-16 bg-white">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 mb-10 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50">
              <Wrench size={14} className="text-orange-600" />
              <span className="text-xs font-semibold tracking-wide text-orange-800 uppercase">
                Expert Technical Services
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Professional <span className="text-orange-600">Electronics &amp; Hardware</span> Services
            </h2>
            <p className="max-w-2xl mt-2 text-sm sm:text-base text-gray-600">
              Lab-certified diagnostics, precision chip-level repairs, and hardware servicing conducted by experienced engineers.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-600 shadow-xs"
          >
            <span>Book a Service</span>
          </Link>
        </div>

        {/* Services Grid with Asymmetric Sizing */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true, amount: 0.1 }}
              className={`flex flex-col ${service.size}`}
            >
              {/* Card Container */}
              <div className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 group">
                
                {/* Image Section */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute p-2 transition-colors duration-200 rounded-xl bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-gray-300 text-orange-600 shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors group-hover:text-orange-600">
                    {service.name}
                  </h3>
                  <p className="flex-1 text-xs sm:text-sm leading-relaxed text-gray-600 mb-4">
                    {service.desc}
                  </p>

                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1 font-medium text-emerald-700">
                      <CheckCircle size={13} className="text-emerald-600" />
                      Lab Verified &amp; Tested
                    </span>
                    <Link
                      to="/contact-us"
                      className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      Enquire Service &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}