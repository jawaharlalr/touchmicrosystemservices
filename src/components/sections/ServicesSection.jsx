import React from "react";

export default function ServicesSection() {
  const services = [
    { name: "Laptop Chip Level Service", img: "/images/lcls.webp" },
    { name: "Desktop Chip Level Service", img: "/images/lcls.webp" },
    { name: "Printer Service", img: "/images/ps.webp" },
    { name: "CCTV Service", img: "/images/cctvs.webp" },
    { name: "Data Recovery Service", img: "/images/drs.webp" },
    { name: "Laptop Upgrade Service", img: "/images/lus.webp" },
    { name: "Desktop Upgrade Service", img: "/images/lus.webp" },
  ];

  // default placeholder image (make sure it's inside /public/images/)
  const placeholder = "/images/placeholder.webp";

  return (
    <section className="py-12 sm:py-16 bg-[#111827]">
      <div className="px-4 mx-auto text-center sm:px-6 max-w-7xl">
        <h2
          className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl"
          style={{ color: "#FF4C00" }}
        >
          Our Services
        </h2>

        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, idx) => (
            <li key={idx} className="flex flex-col items-center">
              {/* Image box */}
              <div className="w-full h-40 overflow-hidden transition border rounded-lg shadow-md sm:h-48 md:h-56 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105">
                <img
                  src={service.img}
                  alt={service.name}
                  className="object-cover w-full h-full"
                  onError={(e) => (e.currentTarget.src = placeholder)}
                />
              </div>

              {/* Placeholder text below box */}
              <span className="mt-3 text-white">{service.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
