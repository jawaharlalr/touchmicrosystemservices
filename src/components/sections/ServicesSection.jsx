import React from "react";
import { motion } from "framer-motion";
import { Wrench, Monitor, Shield, Database, Cpu, Printer, Camera, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    { 
      name: "Laptop Chip Level Service", 
      desc: "Component-level micro-soldering, motherboard tracing, GPU rework, and power delivery IC repair.",
      img: "/images/lcls_service.png", 
      icon: <Cpu className="w-5 h-5" />, 
      size: "lg:col-span-2" 
    },
    { 
      name: "Desktop Chip Level Service", 
      desc: "Diagnostics and servicing for motherboard VRMs, PCIe traces, BIOS recovery, and component replacements.",
      img: "/images/desktop_product.png", 
      icon: <Monitor className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "Printer Service", 
      desc: "LaserJet and ink-tank maintenance, roller mechanism overhaul, logic board repairs, and toner setup.",
      img: "/images/ps_service.png", 
      icon: <Printer className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "CCTV & Security Solutions", 
      desc: "IP camera installations, NVR/DVR configuration, remote surveillance networking, and maintenance.",
      img: "/images/cctvs_service.png", 
      icon: <Camera className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "Data Recovery Service", 
      desc: "Specialized recovery for damaged HDDs, formatted SSDs, firmware corruptions, and flash media.",
      img: "/images/drs_service.png", 
      icon: <Database className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "Laptop Upgrade Service", 
      desc: "High-speed NVMe SSD installations, RAM expansions, battery replacements, and thermal repasting.",
      img: "/images/lus_service.png", 
      icon: <Wrench className="w-5 h-5" />, 
      size: "lg:col-span-1" 
    },
    { 
      name: "Desktop & Server Tuning", 
      desc: "Enterprise OS configuration, PSU upgrades, workstation cooling optimization, and hardware hardening.",
      img: "/images/server_product.png", 
      icon: <Shield className="w-5 h-5" />, 
      size: "lg:col-span-2" 
    },
  ];

  const placeholder = "/images/placeholder.webp";

  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 mb-14 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3.5 border rounded-full border-orange-200 bg-orange-50">
              <Wrench size={14} className="text-orange-600" />
              <span className="text-xs font-semibold tracking-wide text-orange-800 uppercase">
                Expert Technical Services
              </span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Professional <span className="text-orange-600">Electronics &amp; Hardware</span> Services
            </h2>
            <p className="max-w-2xl mt-3 text-base text-gray-600">
              Lab-certified diagnostics, precision chip-level repairs, and hardware servicing conducted by experienced engineers.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors bg-white border border-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-600 shadow-xs"
          >
            <span>Book a Service</span>
          </Link>
        </div>

        {/* Services Grid with Asymmetric Sizing */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
              className={`flex flex-col ${service.size}`}
            >
              {/* Card Container */}
              <div className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 group">
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden bg-gray-100 sm:h-52">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.src = placeholder)}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute p-2.5 transition-colors duration-200 rounded-xl bottom-4 left-4 bg-white/95 backdrop-blur-xs border border-gray-300 text-orange-600 shadow-sm group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
                    {service.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">
                    {service.desc}
                  </p>

                  <div className="pt-4 mt-5 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                      <CheckCircle size={14} className="text-emerald-600" />
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