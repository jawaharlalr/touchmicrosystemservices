import React from "react";

export default function HeroSection() {
  const brands = [
    { name: "Dell", src: "/images/dell.webp" },
    { name: "HP", src: "/images/hp.webp" },
    { name: "Acer", src: "/images/acer.webp" },
    { name: "Lenovo", src: "/images/lenovo.webp" },
    { name: "Samsung", src: "/images/samsung.webp", noBlur: true },
    { name: "Asus", src: "/images/asus.webp", noBlur: true },
    { name: "Zebronics", src: "/images/zeb.webp" },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-center bg-cover md:px-12"
      style={{ backgroundImage: "url('/images/herosection.webp')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-full px-4 text-center text-white">
        {/* Heading */}
        <h1 className="mb-3 text-2xl font-bold leading-snug sm:text-3xl md:text-5xl lg:text-6xl drop-shadow-lg">
          Your Trusted Electronics Service Partner
        </h1>

        {/* Subtitle */}
        <p className="max-w-lg mx-auto mb-5 text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg lg:text-xl">
          From repairs to installations, we provide fast, reliable, and
          affordable electronics services in Chennai.
        </p>

        {/* CTA Button */}
        <a
          href="/contact-us"
          className="inline-block px-6 py-3 font-semibold text-white transition transform rounded-lg shadow-md hover:scale-105"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e04300")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF4C00")
          }
        >
          Get in Touch
        </a>

        {/* Brand Title */}
        <h2 className="mb-6 text-2xl font-semibold mt-14 sm:text-3xl">
          We Service All Leading Brands
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full sm:w-[90%] md:w-[700px] mx-auto">
          {/* Fade Edges */}
          <div className="absolute top-0 left-0 z-20 w-16 h-full pointer-events-none bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute top-0 right-0 z-20 w-16 h-full pointer-events-none bg-gradient-to-l from-black/50 to-transparent"></div>

          {/* Scrolling Logos */}
          <div className="flex gap-6 whitespace-nowrap animate-scroll-loop">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center w-24 h-24 p-4 transition-transform bg-white rounded-lg shadow-md hover:scale-110 sm:w-28 sm:h-28"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`w-full h-full object-contain ${
                    brand.noBlur ? "" : "blur-[0.3px]"
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes scrollLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-loop {
          display: inline-flex;
          animation: scrollLoop 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
