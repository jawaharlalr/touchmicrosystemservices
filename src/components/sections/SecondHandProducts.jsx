import React from "react";
import { Laptop, Cpu, Printer, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SecondHandProducts() {
  const products = [
    { 
      name: "Certified Business Laptop", 
      category: "Computers", 
      desc: "50-point diagnostics passed. Multi-core processor, upgraded NVMe SSD, pristine display, and fresh battery health.",
      icon: <Laptop size={26} /> 
    },
    { 
      name: "Bench-Tested Desktop Rig", 
      category: "Workstations", 
      desc: "Stress-tested power supply, motherboard VRMs verified, dust-free thermals, clean Windows/Linux OS pre-installed.",
      icon: <Cpu size={26} /> 
    },
    { 
      name: "Refurbished Laser Printer", 
      category: "Office Equipment", 
      desc: "Fresh roller assemblies, laser imaging drum calibrated, toner serviced, full network connectivity verified.",
      icon: <Printer size={26} /> 
    },
  ];

  return (
    <section id="secondhand" className="relative py-20 bg-white border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-14 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3.5 py-1 mb-3.5 border rounded-full border-orange-200 bg-orange-50">
            <ShieldCheck size={14} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
              Lab-Certified Pre-Owned
            </span>
          </motion.div>
          
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Certified Second-Hand <span className="text-orange-600">Hardware</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-gray-600">
            Reliable, technician-verified electronics at an accessible budget. Every unit undergoes rigorous component-level testing before listing.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col p-7 transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 group"
            >
              {/* Hardware Icon Container */}
              <div className="flex items-center justify-center w-14 h-14 mb-6 transition-colors duration-200 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500">
                {product.icon}
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 mb-3 text-xs font-semibold text-emerald-700">
                <CheckCircle2 size={14} className="text-emerald-600" />
                50-Point Certified Check
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                {product.name}
              </h3>

              <p className="flex-1 text-sm leading-relaxed text-gray-600 mb-6">
                {product.desc}
              </p>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <span className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md">
                  {product.category}
                </span>
                
                <a
                  href={`https://wa.me/919790741494?text=Hello%20Touch%20Micro%20Systems!%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700"
                >
                  <span>Enquire Availability</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-500">
            * Stock subject to daily availability. All second-hand products include our official Touch Micro Systems warranty.
          </p>
        </div>

      </div>
    </section>
  );
}