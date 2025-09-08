import React from "react";
import { Laptop, Cpu, Printer } from "lucide-react";

export default function SecondHandProducts() {
  const products = [
    { name: "2nd Hand Laptop", category: "Computers", icon: <Laptop size={48} /> },
    { name: "2nd Hand Desktop", category: "Computers", icon: <Cpu size={48} /> },
    { name: "2nd Hand Printer", category: "Office Equipment", icon: <Printer size={48} /> },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#111827]">
      <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl" style={{ color: "#FF4C00" }}>
          Second-Hand Electronics
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-base text-white sm:max-w-3xl sm:mb-12 sm:text-lg">
          We offer quality second-hand laptops, desktops, and printers at affordable prices.
        </p>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 transition-transform border shadow-md sm:p-6 rounded-xl backdrop-blur-sm bg-white/20 hover:bg-white/30 hover:scale-105 hover:shadow-xl border-white/20"
            >
              <div className="mb-3 text-[#FF4C00] transition-transform duration-300 hover:rotate-6 hover:scale-110">
                {product.icon}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white sm:mb-2 sm:text-xl">
                {product.name}
              </h3>
              <span className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-[#FF4C00] text-white transition-colors duration-300 hover:bg-[#e04300]">
                {product.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
