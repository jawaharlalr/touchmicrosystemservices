import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, X, Phone, ShieldCheck, Star, Activity, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingHUD() {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    { label: "Lab Diagnostic Node", value: "ONLINE [PASS]", color: "text-green-500" },
    { label: "Chennai Node Latency", value: "8 ms", color: "text-brand-orange" },
    { label: "Lab Temperature", value: "23.4 °C", color: "text-blue-400" },
    { label: "Active Engineers", value: "3 ON DUTY", color: "text-green-500" },
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-4 rounded-full bg-black/80 text-brand-orange border border-brand-orange/40 hover:border-brand-orange shadow-[0_0_20px_rgba(255,76,0,0.25)] hover:shadow-[0_0_35px_rgba(255,76,0,0.5)] transition-all duration-300 backdrop-blur-md"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={20} /> : <Cpu size={20} className="animate-pulse" />}
        </motion.button>
      </div>

      {/* Floating HUD Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 left-6 z-50 w-[300px] sm:w-[340px] p-6 rounded-2xl bg-black/90 border border-white/5 shadow-[0_15px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl corner-brackets"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-brand-orange animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-white font-bold uppercase">
                  CONSOLE_OVERLAY
                </span>
              </div>
              <span className="text-[8px] font-mono text-gray-500">[STATUS: STABLE]</span>
            </div>

            {/* Diagnostic Stats */}
            <div className="space-y-3.5 mb-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-white/[0.02] pb-1.5">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</span>
                  <span className={`text-[10px] font-mono font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions Title */}
            <div className="flex items-center gap-1.5 mb-3">
              <Zap size={10} className="text-brand-orange" />
              <span className="text-[8.5px] font-mono tracking-widest text-gray-400 font-bold uppercase">
                QUICK_CHANNELS
              </span>
            </div>

            {/* Channels Grid */}
            <div className="grid grid-cols-2 gap-3.5 font-mono text-[9px] font-bold text-gray-400">
              
              {/* Whatsapp */}
              <a
                href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20System%20Services!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 border rounded-xl bg-white/[0.01] border-white/5 hover:border-green-500/40 hover:bg-green-500/5 hover:text-white transition-colors"
              >
                <FaWhatsapp size={14} className="text-green-500" />
                WHATSAPP
              </a>

              {/* Call */}
              <a
                href="tel:+919790741494"
                className="flex items-center gap-2 p-2.5 border rounded-xl bg-white/[0.01] border-white/5 hover:border-brand-orange/40 hover:bg-brand-orange/5 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-brand-orange" />
                CALL_LAB
              </a>

              {/* Verified Certificate */}
              <div className="flex items-center gap-2 p-2.5 border rounded-xl bg-white/[0.01] border-white/5 hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-white transition-colors">
                <ShieldCheck size={14} className="text-blue-400" />
                SECURE_ID
              </div>

              {/* Google reviews */}
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJKbGLsfhgUjoRr8wX5ngw9vA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 border rounded-xl bg-white/[0.01] border-white/5 hover:border-yellow-500/40 hover:bg-yellow-500/5 hover:text-white transition-colors"
              >
                <Star size={14} className="text-yellow-400" />
                WRITE_REVIEW
              </a>

            </div>

            {/* Custom footer line */}
            <div className="mt-5 pt-3 border-t border-white/5 text-center text-[7px] font-mono text-gray-600 uppercase tracking-widest">
              Touch Microsystems Console Overlay v1.0
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
