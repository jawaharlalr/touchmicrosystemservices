import React from "react";
import { motion } from "framer-motion";
import { Wrench, ShieldCheck } from "lucide-react";

export default function Gallery() {
  const projects = [
    {
      name: "Motherboard Power-Rail Fault Isolation & BGA Reballing",
      img: "/images/work.webp",
      facility: "Technical Diagnostic Bench",
      problemSolution: "Diagnosed a complete power cutoff on a multi-layer laptop motherboard. Traced shorted SMD ceramic capacitors on the primary 19V rail using thermal scanning and digital multimeter; replaced power IC and restored voltage delivery under our stereo microscope.",
      technologies: ["Digital Multimeter", "SMD Hot-Air Rework", "Stereomicroscope", "Thermal Scanning"],
    },
    {
      name: "Multi-Point Commercial CCTV & Network Surveillance Setup",
      img: "/images/cctvs.webp",
      facility: "Commercial Security Deployment",
      problemSolution: "Installed and configured high-definition night-vision IP cameras with central multi-channel NVR storage, PoE power distribution, and mobile remote streaming for a local business premises in Chennai.",
      technologies: ["IP Surveillance Cameras", "Multi-Channel NVR", "Cat6 Structured Cabling", "PoE Network"],
    },
    {
      name: "Custom High-Throughput Engineering Workstation Assembly",
      img: "/images/shop.webp",
      facility: "Touch Micro Systems Workshop",
      problemSolution: "Assembled and tuned a specialized multi-drive workstation engineered for continuous CAD and software compilation. Configured NVMe storage arrays, airflow cooling ducts, and performed 48-hour hardware stress testing.",
      technologies: ["Multi-Core Workstation", "NVMe RAID Storage", "80-Plus PSU", "Thermal Engineering"],
    },
  ];

  return (
    <section id="gallery" className="relative py-14 sm:py-16 bg-white border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50"
          >
            <Wrench size={14} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
              Verified Project Showcase
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Completed Works &amp; <span className="text-orange-600">Lab Showcase</span>
          </h2>
          <p className="max-w-2xl mt-2 text-xs sm:text-sm text-gray-600">
            Real technical repairs, custom system assemblies, and surveillance installations completed at our Iyyappanthangal facility.
          </p>
        </div>

        {/* Compact Project Showcase Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col overflow-hidden bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 group transition-all"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-semibold text-orange-800 bg-white/95 backdrop-blur-xs border border-orange-200 rounded-full shadow-xs">
                    <ShieldCheck size={12} className="text-orange-600" />
                    <span>{item.facility}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                  {item.name}
                </h3>
                
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mb-4 flex-1">
                  {item.problemSolution}
                </p>

                {/* Technologies Used */}
                <div className="pt-3 border-t border-gray-100">
                  <span className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] font-medium bg-slate-100 text-gray-700 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}