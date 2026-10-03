import React from "react";
import { Laptop, Cpu, Printer, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SecondHandProducts() {
  const products = [
    { 
      name: "Certified Business Laptop", 
      brand: "Dell Latitude • Lenovo ThinkPad • HP EliteBook",
      category: "Computers", 
      spec: "50-point diagnostic check passed. Intel Core i5/i7, 8GB/16GB RAM, upgraded high-speed NVMe SSD, and fresh battery health.",
      warranty: "30-Day Testing Warranty",
      icon: <Laptop size={24} /> 
    },
    { 
      name: "Bench-Tested Desktop Rig", 
      brand: "Dell OptiPlex • HP ProDesk • Custom Tower",
      category: "Workstations", 
      spec: "Stress-tested power supply, verified motherboard VRMs, dust-free thermals, clean Windows/Linux OS pre-installed.",
      warranty: "Component-Level Tested",
      icon: <Cpu size={24} /> 
    },
    { 
      name: "Refurbished Office Laser Printer", 
      brand: "HP LaserJet • Canon LBP",
      category: "Office Equipment", 
      spec: "Fresh roller assemblies, laser imaging drum calibrated, toner cartridge serviced, network connectivity verified.",
      warranty: "Lab Verified Print Engine",
      icon: <Printer size={24} /> 
    },
  ];

  return (
    <section id="secondhand" className="relative py-14 sm:py-16 bg-white border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3.5 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50">
            <ShieldCheck size={14} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
              Lab-Certified Pre-Owned
            </span>
          </motion.div>
          
          <h2 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Certified Second-Hand <span className="text-orange-600">Hardware</span>
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-600">
            Reliable, technician-verified electronics at an accessible budget. Every unit undergoes rigorous component-level testing before listing.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col p-5 sm:p-6 transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 group"
            >
              {/* Top row: Icon & Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
                  {product.icon}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <CheckCircle2 size={12} className="text-emerald-600" />
                  {product.warranty}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                {product.name}
              </h3>

              <p className="text-xs font-semibold text-orange-600 mb-2.5">
                {product.brand}
              </p>

              <p className="flex-1 text-xs sm:text-sm leading-relaxed text-gray-600 mb-4">
                {product.spec}
              </p>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                <span className="px-2 py-0.5 text-[11px] font-medium text-gray-600 bg-gray-100 rounded">
                  {product.category}
                </span>
                
                <a
                  href={`https://wa.me/919790741494?text=Hello%20Touch%20Micro%20Systems!%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.brand)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  <span>Enquire Availability</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            * Stock subject to daily availability. All second-hand products include our official Touch Micro Systems warranty.
          </p>
        </div>

      </div>
    </section>
  );
}