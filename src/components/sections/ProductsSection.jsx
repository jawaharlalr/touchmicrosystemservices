import React from "react";

export default function ProductsSection() {
  const products = [
    { name: "Laptop", category: "Computers", img: "/images/laptop.webp" },
    { name: "Desktop", category: "Computers", img: "/images/desktop.webp" },
    { name: "Server", category: "Networking", img: "/images/server.webp" },
    { name: "Printer", category: "Office Equipment", img: "/images/printer.webp" },
    { name: "CCTV", category: "Security", img: "/images/camera.webp" },
    { name: "Monitor", category: "Peripherals", img: "/images/monitor.webp" },
  ];

  // default placeholder image
  const placeholder = "/images/placeholder.webp";

  return (
    <section className="py-12 sm:py-16 bg-[#111827]">
      <div className="px-4 mx-auto text-center sm:px-6 max-w-7xl">
        <h2
          className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl"
          style={{ color: "#FF4C00" }}
        >
          Our Products
        </h2>

        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, idx) => (
            <li key={idx} className="flex flex-col items-center">
              {/* Image box */}
              <div className="w-full h-40 overflow-hidden transition border rounded-lg shadow-md sm:h-48 md:h-56 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  onError={(e) => (e.currentTarget.src = placeholder)}
                />
              </div>

              {/* Product Name */}
              <span className="mt-3 font-semibold text-white">
                {product.name}
              </span>

              {/* Category Tag */}
              <span className="mt-1 text-xs sm:text-sm font-medium rounded-full bg-[#FF4C00] text-white px-2 py-1">
                {product.category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
