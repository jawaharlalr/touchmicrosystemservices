import React from "react";
import { motion } from "framer-motion";
import { Cpu, ArrowUpRight, Radio, Code2, CircuitBoard, Gauge, Cog } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmbeddedSolutions() {
  const solutions = [
    {
      category: "Microcontrollers",
      icon: <Cpu size={18} className="text-orange-600" />,
      title: "Microcontroller Architecture & Interfacing",
      description: "Hardware integration and peripheral interfacing for 8-bit, 16-bit, and 32-bit MCUs including ARM Cortex, STM32, PIC, and AVR platforms.",
      tech: ["ARM Cortex", "STM32", "AVR / PIC"],
      img: "/images/work.webp",
    },
    {
      category: "IoT",
      icon: <Radio size={18} className="text-orange-600" />,
      title: "IoT Telemetry & Edge Sensor Nodes",
      description: "Sensor node integration, telemetry gateway design, and wireless data transmission protocols (Wi-Fi, Bluetooth, LoRa/GSM) for monitoring systems.",
      tech: ["Wi-Fi / BLE", "GSM / LoRa", "Edge Gateway"],
      img: "/images/lcls.webp",
    },
    {
      category: "Firmware",
      icon: <Code2 size={18} className="text-orange-600" />,
      title: "Embedded Firmware Programming",
      description: "Bare-metal C/C++ embedded firmware coding, interrupt handling, register-level hardware configuration, and in-system ISP/JTAG debugging.",
      tech: ["Embedded C/C++", "JTAG / ISP", "Device Drivers"],
      img: "/images/drs.webp",
    },
    {
      category: "PCB / Electronics",
      icon: <CircuitBoard size={18} className="text-orange-600" />,
      title: "PCB Diagnostics & Micro-Soldering",
      description: "Multi-layer board tracing, thermal short-circuit detection, BGA chip reballing, and precision SMD component replacement under stereomicroscopes.",
      tech: ["SMD Rework", "BGA Reballing", "Power Rails"],
      img: "/images/shop.webp",
    },
    {
      category: "Sensors",
      icon: <Gauge size={18} className="text-orange-600" />,
      title: "Sensor Interfacing & Signal Acquisition",
      description: "Interfacing and calibration for thermal, pressure, current, optical, and proximity sensors with analog-to-digital signal conditioning.",
      tech: ["I2C / SPI Buses", "ADC Conditioning", "Thermal & Optical"],
      img: "/images/cctvs.webp",
    },
    {
      category: "Automation",
      icon: <Cog size={18} className="text-orange-600" />,
      title: "Programmable Hardware & Relay Automation",
      description: "Solid-state and mechanical relay driver boards, automated test benches, and customized electronic control interfaces for commercial workflows.",
      tech: ["Relay Control", "Automated Rigs", "Hardware Triggers"],
      img: "/images/server.webp",
    },
  ];

  return (
    <section id="embedded" className="relative py-14 sm:py-16 bg-slate-50 border-t border-b border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 mb-10 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50">
              <Cpu size={14} className="text-orange-600" />
              <span className="text-xs font-semibold tracking-wide text-orange-800 uppercase">
                Technical Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Embedded &amp; Electronics <span className="text-orange-600">Solutions</span>
            </h2>
            <p className="max-w-2xl mt-2 text-sm sm:text-base text-gray-600">
              Practical microcontroller development, board-level electronics servicing, and custom hardware engineering conducted in our Chennai facility.
            </p>
          </div>
          
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            <span>Consult Our Engineers</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 group"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-orange-800 bg-white/95 backdrop-blur-xs border border-orange-200 rounded-full shadow-xs">
                    {item.icon}
                    <span>{item.category}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="mb-2 text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="flex-1 text-xs sm:text-sm leading-relaxed text-gray-600 mb-4">
                  {item.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-medium bg-slate-100 text-gray-700 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
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
