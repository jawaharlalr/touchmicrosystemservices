import { motion } from "framer-motion";
import { Camera, Maximize2 } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: "/images/shop.webp", alt: "Our Shop" },
    { src: "/images/work.webp", alt: "Our Work" },
  ];

  return (
    <section id="gallery" className="relative py-24 overflow-hidden bg-brand-black">
      {/* Subtle Background Text */}
      <div className="absolute top-0 left-0 p-10 pointer-events-none select-none opacity-[0.02]">
        <span className="font-black tracking-tighter text-white uppercase text-9xl">Visuals</span>
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/10"
          >
            <Camera size={14} className="text-brand-orange" />
            <span className="text-[10px] font-black tracking-widest uppercase text-brand-orange">
              Service Operations
            </span>
          </motion.div>
          
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
            Inside the <span className="text-brand-orange">Lab</span>
          </h2>
          <p className="max-w-2xl mt-4 text-base leading-relaxed text-gray-400">
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
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden border group rounded-2xl border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-2xl"
            >
              {/* Hardware Viewport Frame */}
              <div className="relative aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="object-cover w-full h-full transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Modern Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 opacity-0 bg-brand-black/60 backdrop-blur-[2px] group-hover:opacity-100">
                  <div className="p-3 mb-3 transition-transform duration-500 scale-50 rounded-full bg-brand-orange/20 text-brand-orange group-hover:scale-100">
                    <Maximize2 size={24} />
                  </div>
                  <p className="text-sm font-black tracking-widest text-white uppercase sm:text-base">
                    {img.alt}
                  </p>
                  
                  {/* Decorative Scan Lines */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />
                </div>

                {/* Corner Technical Accents */}
                <div className="absolute w-4 h-4 transition-colors border-t-2 border-l-2 top-4 left-4 border-white/20 group-hover:border-brand-orange" />
                <div className="absolute w-4 h-4 transition-colors border-b-2 border-r-2 bottom-4 right-4 border-white/20 group-hover:border-brand-orange" />
              </div>
            </motion.div>
          ))}
          
          {/* Empty "Add More" Tech Tile (Optional Visual Filler) */}
          <div className="flex-col items-center justify-center hidden border-2 border-dashed lg:flex rounded-2xl border-white/5 opacity-20">
             <Camera size={48} className="mb-4" />
             <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Module_0{images.length + 1}</span>
          </div>
        </div>
      </div>
    </section>
  );
}