import React from "react";

export default function AccessoriesSection() {
  const laptopAccessories = [
    "Laptop RAM",
    "Hard Disk",
    "SATA SSD",
    "NVMe SSD",
    "Laptop Screen",
    "Laptop Battery",
    "Laptop Adaptor",
    "Laptop Power Cable",
    "Laptop Motherboard",
    "Laptop Panel",
    "Laptop Display Cable",
    "Laptop Keyboard"
  ];

  const desktopAccessories = [
    "Desktop Motherboard",
    "Desktop RAM",
    "Desktop Hard Disk",
    "Desktop SATA SSD",
    "Desktop Fan",
    "Desktop Processor",
    "Desktop SMPS",
    "Desktop Keyboard & Mouse",
    "Desktop Graphics Card",
    "Desktop Cabinet",
    "Gaming Cabinet",
    "Gaming Keyboard & Mouse"
  ];

  return (
    <section className="py-10 sm:py-16 bg-[#111827]">
      <div className="max-w-6xl px-4 mx-auto text-center sm:px-6">
        <h2
          className="mb-4 text-xl font-bold sm:mb-6 sm:text-3xl"
          style={{ color: "#FF4C00" }}
        >
          Laptop & Desktop Accessories
        </h2>
        <p className="max-w-xs mx-auto mb-8 text-sm text-white sm:max-w-3xl sm:mb-12 sm:text-lg">
          We offer a wide range of laptop and desktop accessories for sale.
        </p>

        {/* Laptop Accessories */}
        <h3 className="mb-3 text-lg sm:mb-4 sm:text-2xl font-semibold text-[#FF4C00]">
          Laptop Accessories
        </h3>
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {laptopAccessories.map((item, idx) => (
            <li
              key={idx}
              className="p-2 text-sm text-white transition border rounded-lg sm:p-4 sm:text-base backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Accessories */}
        <h3 className="mt-14 mb-3 text-lg sm:mb-4 sm:text-2xl font-semibold text-[#FF4C00]">
          Desktop Accessories
        </h3>
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
          {desktopAccessories.map((item, idx) => (
            <li
              key={idx}
              className="p-2 text-sm text-white transition border rounded-lg sm:p-4 sm:text-base backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
