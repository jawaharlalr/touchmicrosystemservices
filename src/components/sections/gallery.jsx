import { motion } from "framer-motion";
import { Camera, Maximize2 } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/images/shop_view.png", alt: "Our Shop" },
    { src: "/images/work_view.png", alt: "Our Work" },
  ];

  return (
    <section id="gallery" className="relative py-24 overflow-hidden bg-brand-black bg-grid-tech border-t border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-0 left-0 p-10 pointer-events-none select-none opacity-[0.01]">
        <span className="font-mono font-black tracking-tighter text-white uppercase text-9xl">Visuals</span>
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/5"
          >
            <Camera size={12} className="text-brand-orange" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">
              Service Operations
            </span>
          </motion.div>
          
          <h2 className="text-3xl font-black tracking-tighter text-white uppercase md:text-5xl">
            Inside the <span className="text-brand-orange">Lab</span>
          </h2>
          <p className="max-w-2xl mt-4 text-sm leading-relaxed text-gray-400 font-sans sm:text-base">
            A glimpse into our high-precision workspace and the technical standards we maintain for every system repair.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border group rounded-2xl border-white/5 bg-white/[0.01] backdrop-blur-sm shadow-2xl corner-brackets"
            >
              {/* Hardware Viewport Frame */}
              <div className="relative aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="object-cover w-full h-full transition-all duration-700 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Modern Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 opacity-0 bg-black/60 backdrop-blur-[2px] group-hover:opacity-100">
                  <div className="p-3 mb-3 transition-transform duration-500 scale-50 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange group-hover:scale-100 shadow-[0_0_15px_rgba(255,76,0,0.3)]">
                    <Maximize2 size={22} />
                  </div>
                  <p className="text-sm font-mono tracking-widest text-white uppercase font-bold">
                    {img.alt}
                  </p>
                  
                  {/* Scanning scan line overlay */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-orange/40 -translate-y-full group-hover:animate-scan pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Empty "Add More" Tech Tile (Visual Filler) */}
          <div className="flex-col items-center justify-center hidden border border-dashed lg:flex rounded-2xl border-white/10 opacity-30 bg-white/[0.01]">
             <Camera size={40} className="mb-3 text-gray-500" />
             <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-gray-500">Module_0{images.length + 1}</span>
          </div>
        </div>
      </div>
    </section>
  );
}