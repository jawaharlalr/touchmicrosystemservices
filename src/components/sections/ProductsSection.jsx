import React from "react";
import { Laptop, Monitor, Cpu, Printer, Camera, Server } from "lucide-react";

export default function ProductsSection() {
  const products = [
    { name: "Laptop", category: "Computers", icon: <Laptop size={48} /> },
    { name: "Desktop", category: "Computers", icon: <Cpu size={48} /> },
    { name: "Server", category: "Networking", icon: <Server size={48} /> },
    { name: "Printer", category: "Office Equipment", icon: <Printer size={48} /> },
    { name: "CCTV", category: "Security", icon: <Camera size={48} /> },
    { name: "Monitor", category: "Peripherals", icon: <Monitor size={48} /> },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#111827]">
      <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl" style={{ color: "#FF4C00" }}>
          Our Products
        </h2>
        <p className="max-w-xs mx-auto mb-8 text-sm text-white sm:max-w-3xl sm:mb-12 sm:text-lg">
          We provide a wide range of electronics products and services, including laptops, desktops, servers, printers, CCTV systems, and monitors.
        </p>

        <div className="grid grid-cols-2 gap-3 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 transition border shadow-md sm:p-6 rounded-xl backdrop-blur-sm bg-white/20 hover:bg-white/30 border-white/20 hover:scale-105"
            >
              <div className="mb-2 sm:mb-4 text-[#FF4C00]">{product.icon}</div>
              <h3 className="mb-1 text-sm font-semibold text-white sm:mb-2 sm:text-lg">
                {product.name}
              </h3>
              <span className="px-2 py-1 text-xs sm:text-sm font-medium rounded-full bg-[#FF4C00] text-white">
                {product.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
