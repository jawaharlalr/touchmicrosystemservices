import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    { src: "/images/shop.webp", alt: "Our Shop" },
    { src: "/images/work.webp", alt: "Our Work" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#111827]">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2
          className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl"
          style={{ color: "#FF4C00" }}
        >
          Our Gallery
        </h2>
        <p className="max-w-xs mx-auto mb-8 text-sm text-white sm:max-w-3xl sm:mb-12 sm:text-lg">
          A glimpse into our workspace, services, and the quality we deliver to
          our customers.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="relative overflow-hidden border shadow-lg rounded-xl group border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="object-cover w-full transition-transform duration-300 aspect-square group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 group-hover:opacity-100">
                <p className="px-3 text-sm font-medium text-center text-white sm:text-base">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
