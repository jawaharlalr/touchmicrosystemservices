import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Tag } from "lucide-react";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const products = [
    { name: "Laptop", category: "Computers", img: "/images/laptop_product.png" },
    { name: "Desktop", category: "Computers", img: "/images/desktop_product.png" },
    { name: "Server", category: "Networking", img: "/images/server_product.png" },
    { name: "Printer", category: "Office Equipment", img: "/images/printer_product.png" },
    { name: "CCTV", category: "Security", img: "/images/camera_product.png" },
    { name: "Monitor", category: "Peripherals", img: "/images/monitor_product.png" },
  ];

  const categories = ["All", "Computers", "Networking & Security", "Peripherals & Office"];

  const filteredProducts = products.filter((product) => {
    if (activeTab === "All") return true;
    if (activeTab === "Computers") return product.category === "Computers";
    if (activeTab === "Networking & Security") {
      return product.category === "Networking" || product.category === "Security";
    }
    if (activeTab === "Peripherals & Office") {
      return product.category === "Peripherals" || product.category === "Office Equipment";
    }
    return true;
  });

  const placeholder = "/images/placeholder.webp";

  return (
    <section id="products" className="relative py-24 overflow-hidden bg-brand-black bg-grid-tech border-t border-white/5">
      {/* Decorative Grid and Blur */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between gap-4 mb-12 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 mb-4 md:justify-start">
              <ShoppingBag size={16} className="text-brand-orange" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">
                Hardware Inventory
              </span>
            </div>
            <h2 className="text-3xl font-black tracking-tighter text-white uppercase md:text-5xl">
              Our <span className="text-brand-orange">Products</span>
            </h2>
          </div>
          <div className="flex-grow hidden h-[1px] mx-8 bg-white/5 md:block" />
          <p className="text-sm font-mono text-gray-500 max-w-[220px] text-center md:text-right">
            [CLASS_A EQUIPMENT FOR ENTERPRISE & CONSUMER APPLICATIONS]
          </p>
        </div>

        {/* Categories Tab Selector - PREMIUM UX */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 text-xs font-mono font-bold tracking-widest uppercase border transition-all duration-300 rounded-full ${
                activeTab === cat
                  ? "text-white bg-brand-orange border-brand-orange/50 shadow-[0_0_15px_rgba(255,76,0,0.35)]"
                  : "text-gray-400 border-white/5 bg-white/[0.01] hover:text-white hover:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.ul 
          layout
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.li 
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col group relative p-6 border rounded-2xl bg-white/[0.01] border-white/5 hover:border-brand-orange/30 hover:bg-white/[0.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden rounded-xl bg-black/40 border border-white/5 flex items-center justify-center sm:h-56">
                  
                  {/* Product Image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="object-contain w-full h-full p-6 transition-transform duration-500 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                    onError={(e) => (e.currentTarget.src = placeholder)}
                    loading="lazy"
                  />

                  {/* Cyber Corner brackets inside card */}
                  <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-white/10 group-hover:border-brand-orange transition-colors" />
                  <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-white/10 group-hover:border-brand-orange transition-colors" />
                </div>

                {/* Product Info Area */}
                <div className="flex flex-col items-center mt-5 text-center">
                  <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-brand-orange font-mono">
                    {product.name}
                  </span>

                  {/* Modern Category Tag */}
                  <div className="flex items-center gap-1.5 mt-2 bg-white/[0.03] border border-white/5 px-2.5 py-0.5 rounded-full">
                    <Tag size={10} className="text-brand-orange" />
                    <span className="text-[9px] font-mono tracking-widest uppercase text-gray-400">
                      {product.category}
                    </span>
                  </div>

                  {/* Inquiry Button */}
                  <button className="mt-4 text-[10px] font-mono tracking-widest uppercase text-white/40 border-b border-white/5 pb-0.5 opacity-50 group-hover:opacity-100 transition-all hover:text-brand-orange hover:border-brand-orange">
                    Inquire Now
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}