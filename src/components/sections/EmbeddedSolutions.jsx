import React from "react";
import { motion } from "framer-motion";
import { Cpu, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmbeddedSolutions() {
  const solutions = [
    {
      category: "Embedded Systems",
      title: "Microcontroller & Firmware Development",
      description: "Custom embedded firmware programming, ARM/AVR microcontroller integration, and sensor telemetry protocols engineered for reliable field operations.",
      img: "/images/work_view.png",
    },
    {
      category: "IoT Solutions",
      title: "Industrial IoT Telemetry & Sensor Interfacing",
      description: "Edge device prototyping, wireless sensor node deployment, and telemetry gateways designed for real-time environmental and industrial monitoring.",
      img: "/images/lcls_service.png",
    },
    {
      category: "Electronics",
      title: "Chip-Level Diagnostics & Micro-Soldering",
      description: "Precision SMD rework, BGA reballing, power rail fault isolation, and component-level repair executed under lab stereomicroscopes.",
      img: "/images/shop_view.png",
    },
    {
      category: "Automation",
      title: "Hardware Control & Relay Automation Systems",
      description: "Automated test benches, programmable hardware relays, and electronic control interfaces tailored for institutional and industrial setups.",
      img: "/images/cctvs_service.png",
    },
    {
      category: "Custom Hardware",
      title: "Bespoke System Architecture & Integration",
      description: "Tailored server setups, mission-critical workstations, and high-durability hardware configurations built to exact technical requirements.",
      img: "/images/server_product.png",
    },
  ];

  return (
    <section id="embedded" className="relative py-20 bg-slate-50 border-t border-b border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 mb-14 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3.5 border rounded-full border-orange-200 bg-orange-50">
              <Cpu size={14} className="text-orange-600" />
              <span className="text-xs font-semibold tracking-wide text-orange-800 uppercase">
                Technical Capabilities
              </span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Embedded &amp; Electronics Solutions
            </h2>
            <p className="max-w-2xl mt-3 text-base text-gray-600">
              Engineering-grade embedded development, component-level electronics servicing, and custom hardware integration.
            </p>
          </div>
          
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Consult Our Engineers</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 group"
            >
              {/* Clean Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-100 sm:h-52">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 text-xs font-semibold text-orange-800 bg-white/95 backdrop-blur-xs border border-orange-200 rounded-full shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                <div className="pt-4 mt-5 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">Service Category</span>
                  <Link
                    to="/contact-us"
                    className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                  >
                    <span>Request Details</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
