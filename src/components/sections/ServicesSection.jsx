import React from "react";

export default function ServicesSection() {
  const services = [
    "Laptop Chip Level Service",
    "Desktop Chip Level Service",
    "Printer Service",
    "CCTV Service",
    "Data Recovery",
    "Laptop Upgrade",
    "Desktop Upgrade"
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#111827]">
      <div className="px-4 mx-auto text-center sm:px-6 max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl" style={{ color: "#FF4C00" }}>
          Our Services
        </h2>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
          {services.map((service, idx) => (
            <li
              key={idx}
              className="flex items-center justify-center p-3 text-center text-white transition border rounded-lg shadow-md sm:p-5 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105 border-white/20"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
