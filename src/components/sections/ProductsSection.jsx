import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Tag, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const products = [
    { 
      name: "Business & Performance Laptops", 
      brand: "Dell • HP • Lenovo • Acer • Asus",
      category: "Computers", 
      spec: "Intel Core / AMD Ryzen, Fast NVMe SSD, 8GB/16GB DDR4/DDR5, FHD Anti-Glare Displays.",
      condition: "Brand New / Certified Warranty",
      img: "/images/laptop.webp" 
    },
    { 
      name: "Custom Desktop Workstations", 
      brand: "Custom Architecture / Dell / HP",
      category: "Computers", 
      spec: "Optimized configurations for Engineering CAD, software development, office productivity, and gaming.",
      condition: "Tested & Verified Lab Warranty",
      img: "/images/desktop.webp" 
    },
    { 
      name: "Enterprise Tower & Rack Servers", 
      brand: "Dell PowerEdge • HP ProLiant",
      category: "Networking", 
      spec: "Multi-core server processors, ECC RAM, hardware RAID controllers, and redundant hot-swap PSUs.",
      condition: "Enterprise Hardware Warranty",
      img: "/images/server.webp" 
    },
    { 
      name: "Commercial Office Printers", 
      brand: "HP • Canon • Epson",
      category: "Office Equipment", 
      spec: "High-yield monochrome laser & ink-tank multifunction printers with duplex scanning and network connectivity.",
      condition: "Manufacturer / Tested Warranty",
      img: "/images/printer.webp" 
    },
    { 
      name: "Surveillance & IP CCTV Systems", 
      brand: "CP Plus • Hikvision • Dahua",
      category: "Security", 
      spec: "High-resolution IR night vision cameras, multi-channel NVR arrays, PoE switches, and live mobile viewing.",
      condition: "Official Warranty & Setup Support",
      img: "/images/camera.webp" 
    },
    { 
      name: "Professional Monitors & Displays", 
      brand: "LG • Dell • Samsung • Acer",
      category: "Peripherals", 
      spec: "IPS color-accurate displays, Full HD & 2K resolution, HDMI/DisplayPort inputs, and ergonomic height-adjustable stands.",
      condition: "Brand Manufacturer Warranty",
      img: "/images/monitor.webp" 
    },
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

  return (
    <section id="products" className="relative py-14 sm:py-16 bg-slate-50 border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 mb-10 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50">
              <ShoppingBag size={14} className="text-orange-600" />
              <span className="text-xs font-semibold tracking-wide text-orange-800 uppercase">
                Hardware Inventory
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Commercial &amp; Enterprise <span className="text-orange-600">Products</span>
            </h2>
            <p className="max-w-2xl mt-2 text-sm sm:text-base text-gray-600">
              Lab-tested commercial hardware, corporate computing devices, and authorized brand solutions available in Chennai.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            <span>Request Bulk Quotation</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-lg ${
                activeTab === cat
                  ? "bg-orange-500 text-white shadow-xs"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-orange-400 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 group"
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-50 border-b border-gray-200 flex items-center justify-center p-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-xs">
                      <Tag size={10} className="text-orange-600" />
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                    {product.name}
                  </h3>
                  
                  {/* Brand Line */}
                  <p className="text-xs font-semibold text-orange-600 mb-2">
                    {product.brand}
                  </p>

                  {/* Key Specification */}
                  <p className="flex-1 text-xs sm:text-sm leading-relaxed text-gray-600 mb-4">
                    {product.spec}
                  </p>

                  {/* Warranty/Condition & CTA */}
                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                      <ShieldCheck size={13} className="text-emerald-600" />
                      {product.condition}
                    </span>
                    <a
                      href={`https://wa.me/919790741494?text=Hello%20Touch%20Micro%20Systems!%20I%20would%20like%20to%20get%20a%20quote%20for:%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.brand)})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-xs transition-colors"
                    >
                      <span>Get Quote</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}