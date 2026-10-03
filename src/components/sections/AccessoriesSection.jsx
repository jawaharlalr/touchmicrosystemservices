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
    <section id="accessories" className="relative py-20 bg-slate-50 border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 mb-3.5 border rounded-full border-orange-200 bg-orange-50"
          >
            <Cog size={14} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
              Genuine Spare Parts
            </span>
          </motion.div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Parts &amp; <span className="text-orange-600">Accessories</span>
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-base text-gray-600">
            Original replacement components and performance upgrades available for all major PC and laptop brands.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Laptop Accessories Category */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 bg-white border border-gray-300 rounded-2xl shadow-xs"
          >
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-gray-200">
              <div className="p-3 border rounded-xl bg-orange-50 border-orange-200 text-orange-600">
                <Laptop size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Laptop Spares &amp; Upgrades</h3>
                <p className="text-xs text-gray-500">Genuine OEM compatibility</p>
              </div>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {laptopAccessories.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-gray-300 hover:border-orange-400 hover:bg-orange-50/40 transition-colors"
                >
                  <CheckCircle2 size={15} className="flex-shrink-0 text-orange-600" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
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
            className="p-8 bg-white border border-gray-300 rounded-2xl shadow-xs"
          >
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-gray-200">
              <div className="p-3 border rounded-xl bg-orange-50 border-orange-200 text-orange-600">
                <Monitor size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Desktop Components</h3>
                <p className="text-xs text-gray-500">Performance parts &amp; peripherals</p>
              </div>
            </div>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {desktopAccessories.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-gray-300 hover:border-orange-400 hover:bg-orange-50/40 transition-colors"
                >
                  <CheckCircle2 size={15} className="flex-shrink-0 text-orange-600" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Footer info tag */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 py-6 mt-12 border-t border-gray-300 text-xs font-medium text-gray-500">
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-600" /> 100% Genuine OEM Spares</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-600" /> Replacement Warranty Included</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-600" /> On-Spot Technical Installation</span>
        </div>
      </div>
    </section>
  );
}