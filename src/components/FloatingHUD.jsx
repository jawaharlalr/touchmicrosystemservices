import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, X, Phone, ShieldCheck, Star, Activity, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingHUD() {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    { label: "Lab Diagnostic Station", value: "ONLINE [PASS]", color: "text-emerald-600" },
    { label: "Chennai Node Latency", value: "8 ms", color: "text-orange-600" },
    { label: "Lab Temperature", value: "23.4 °C", color: "text-blue-600" },
    { label: "Active Engineers", value: "3 ON DUTY", color: "text-emerald-600" },
  ];

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Quick Hardware Console"
          className="flex items-center justify-center p-3.5 rounded-full bg-white text-orange-600 border border-gray-300 hover:border-orange-400 shadow-md hover:shadow-lg transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={20} className="text-gray-700" /> : <Cpu size={20} className="text-orange-600" />}
        </motion.button>
      </div>

      {/* Floating Light Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 left-6 z-50 w-[300px] sm:w-[330px] p-5 rounded-2xl bg-white border border-gray-300 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Activity size={15} className="text-orange-600" />
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Lab Status Overlay
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ACTIVE
              </span>
            </div>

            {/* Diagnostic Stats */}
            <div className="space-y-2.5 mb-5 text-xs">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-50">
                  <span className="text-gray-500 font-medium">{stat.label}</span>
                  <span className={`font-mono font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions Title */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <Zap size={13} className="text-orange-600" />
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                Quick Channels
              </span>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-2 gap-2.5 text-xs font-medium">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20System%20Services!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 border rounded-xl bg-emerald-50/50 border-emerald-200 text-emerald-800 hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
              >
                <FaWhatsapp size={16} className="text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href="tel:+919790741494"
                className="flex items-center gap-2 p-2.5 border rounded-xl bg-orange-50/50 border-orange-200 text-orange-800 hover:bg-orange-50 hover:border-orange-300 transition-colors"
              >
                <Phone size={14} className="text-orange-600" />
                <span>Call Lab</span>
              </a>

              {/* Verified Certificate */}
              <div className="flex items-center gap-2 p-2.5 border rounded-xl bg-blue-50/50 border-blue-200 text-blue-800">
                <ShieldCheck size={15} className="text-blue-600" />
                <span>Verified Lab</span>
              </div>

              {/* Google Reviews */}
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJKbGLsfhgUjoRr8wX5ngw9vA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 border rounded-xl bg-amber-50/50 border-amber-200 text-amber-800 hover:bg-amber-50 hover:border-amber-300 transition-colors"
              >
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span>Review Us</span>
              </a>

            </div>

            {/* Custom footer line */}
            <div className="mt-4 pt-3 border-t border-gray-200 text-center text-[10px] text-gray-500">
              Touch Micro Systems • Diagnostics v2.0
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
