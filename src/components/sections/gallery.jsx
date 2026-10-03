import React from "react";
import { motion } from "framer-motion";
import { Camera, ShieldCheck } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/images/shop_view.png", title: "Touch Micro Systems Workshop", desc: "Customer reception and retail component showroom in Iyyappanthangal, Chennai." },
    { src: "/images/work_view.png", title: "Technical Diagnostic Bench", desc: "High-precision soldering, oscilloscope testing, and component-level repair workspace." },
  ];

  return (
    <section id="gallery" className="relative py-20 bg-white border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-14 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 mb-3.5 border rounded-full border-orange-200 bg-orange-50"
          >
            <Camera size={14} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
              Our Facility
            </span>
          </motion.div>
          
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Inside the <span className="text-orange-600">Lab &amp; Workshop</span>
          </h2>
          <p className="max-w-2xl mt-3 text-base text-gray-600">
            A look into our Chennai facility and the precision workspace where complex diagnostic and electronics repairs are performed.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col overflow-hidden bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-lg transition-all"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-100">
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-103"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  <span>Verified Service Center</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {img.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {img.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}