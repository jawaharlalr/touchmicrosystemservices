import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Tag } from "lucide-react";

export default function ProductsSection() {
  const products = [
    { name: "Laptop", category: "Computers", img: "/images/laptop.webp" },
    { name: "Desktop", category: "Computers", img: "/images/desktop.webp" },
    { name: "Server", category: "Networking", img: "/images/server.webp" },
    { name: "Printer", category: "Office Equipment", img: "/images/printer.webp" },
    { name: "CCTV", category: "Security", img: "/images/camera.webp" },
    { name: "Monitor", category: "Peripherals", img: "/images/monitor.webp" },
  ];

  const placeholder = "/images/placeholder.webp";

  return (
    <section id="products" className="relative py-24 overflow-hidden bg-brand-black">
      {/* Decorative Grid Background for this section */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between gap-4 mb-16 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 mb-4 md:justify-start">
              <ShoppingBag size={18} className="text-brand-orange" />
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-500">
                Hardware Inventory
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
              Our <span className="text-brand-orange">Products</span>
            </h2>
          </div>
          <div className="flex-grow hidden h-px mx-8 bg-white/5 md:block" />
          <p className="text-sm font-medium text-gray-500 max-w-[200px] text-center md:text-right">
            Enterprise grade equipment for professional environments.
          </p>
        </div>

        {/* Product Grid */}
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden transition-all duration-500 border rounded-xl bg-white/[0.02] border-white/5 group-hover:border-brand-orange/40 group-hover:shadow-[0_0_30px_rgba(255,76,0,0.1)] sm:h-56 md:h-64">
                
                {/* Product Image */}
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-contain w-full h-full p-6 transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => (e.currentTarget.src = placeholder)}
                />

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 transition-colors border-t border-r rounded-tr-xl border-white/10 group-hover:border-brand-orange" />
              </div>

              {/* Product Info Area */}
              <div className="flex flex-col items-center mt-5 text-center">
                <span className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-brand-orange">
                  {product.name}
                </span>

                {/* Modern Category Tag */}
                <div className="flex items-center gap-1.5 mt-2">
                  <Tag size={10} className="text-brand-orange" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">
                    {product.category}
                  </span>
                </div>

                {/* Hidden Quick View Button (Desktop) */}
                <button className="mt-4 text-[10px] font-bold tracking-widest uppercase text-white/40 border-b border-white/5 pb-1 opacity-0 group-hover:opacity-100 transition-all hover:text-brand-orange hover:border-brand-orange">
                  Inquire Now
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}