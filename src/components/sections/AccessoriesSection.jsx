import React from "react";
import { Laptop, Monitor, Cog, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AccessoriesSection() {
  const laptopAccessories = [
    "Laptop RAM Modules (DDR4/DDR5)", "High-Capacity Hard Disks", "SATA SSD Storage", "High-Speed NVMe M.2 SSD",
    "FHD & OLED Laptop Screens", "Original Replacement Batteries", "Original Brand Power Adaptors",
    "Heavy-Duty Power Cables", "Component Motherboards", "Top & Bottom A/C/D Panels",
    "eDP High-Res Display Cables", "Backlit Laptop Keyboards"
  ];

  const desktopAccessories = [
    "Motherboards (Intel & AMD)", "High-Frequency Desktop RAM", "Surveillance Hard Disks",
    "SATA & Gen4 NVMe SSDs", "High-CFM Cooling Fans", "Core & Ryzen Processors",
    "80-Plus Certified SMPS / PSU", "Wired & Wireless Keyboard/Mouse", "Dedicated Graphics Cards",
    "Standard ATX Cabinets", "RGB High-Airflow Cabinets", "Gaming Keyboards & Precision Mice"
  ];

  return (
    <section id="accessories" className="relative py-14 sm:py-16 bg-slate-50 border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50"
          >
            <Cog size={14} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
              Genuine Spare Parts
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Parts &amp; <span className="text-orange-600">Accessories</span>
          </h2>
          <p className="max-w-xl mx-auto mt-2 text-xs sm:text-sm text-gray-600">
            Original replacement components and performance upgrades available for all major PC and laptop brands.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          
          {/* Laptop Accessories Category */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="p-5 sm:p-6 bg-white border border-gray-300 rounded-2xl shadow-xs"
          >
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
              <div className="p-2.5 border rounded-xl bg-orange-50 border-orange-200 text-orange-600">
                <Laptop size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Laptop Spares &amp; Upgrades</h3>
                <p className="text-xs text-gray-500">Genuine OEM compatibility</p>
              </div>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {laptopAccessories.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50/40 transition-colors"
                >
                  <CheckCircle2 size={14} className="flex-shrink-0 text-orange-600" />
                  <span className="text-xs font-medium text-gray-800 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Desktop Accessories Category */}
          <motion.div 
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="p-5 sm:p-6 bg-white border border-gray-300 rounded-2xl shadow-xs"
          >
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
              <div className="p-2.5 border rounded-xl bg-orange-50 border-orange-200 text-orange-600">
                <Monitor size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Desktop Components</h3>
                <p className="text-xs text-gray-500">Performance parts &amp; peripherals</p>
              </div>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {desktopAccessories.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50/40 transition-colors"
                >
                  <CheckCircle2 size={14} className="flex-shrink-0 text-orange-600" />
                  <span className="text-xs font-medium text-gray-800 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Footer info tag */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-4 mt-8 border-t border-gray-300 text-xs font-medium text-gray-500">
          <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-600" /> 100% Genuine OEM Spares</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-600" /> Replacement Warranty Included</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-600" /> In-Store Technical Installation</span>
        </div>
      </div>
    </section>
  );
}