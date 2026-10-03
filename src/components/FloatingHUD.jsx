import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, X, Phone, ShieldCheck, Star, Activity, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingHUD() {
  const [isOpen, setIsOpen] = useState(false);

  const labDetails = [
    { label: "Lab Facility", value: "Iyyappanthangal, Chennai", icon: MapPin },
    { label: "Operating Hours", value: "8:30 AM – 7:30 PM (Mon-Sun)", icon: Clock },
    { label: "Diagnostic Scope", value: "Chip-Level & Embedded", icon: Cpu },
    { label: "Direct Assistance", value: "+91 9790741494", icon: Phone },
  ];

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Quick Lab Information" : "Open Quick Lab Information"}
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-orange-600 border border-gray-300 hover:border-orange-400 shadow-md hover:shadow-lg transition-all duration-200"
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
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-20 sm:bottom-22 left-4 sm:left-6 z-50 w-[290px] sm:w-[320px] p-4 sm:p-5 rounded-2xl bg-white border border-gray-300 shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Activity size={15} className="text-orange-600" />
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                  Touch Micro Systems
                </span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                LAB ACTIVE
              </span>
            </div>

            {/* Factual Information */}
            <div className="space-y-2 mb-4 text-xs">
              {labDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="text-gray-500 font-medium flex items-center gap-1.5">
                      <Icon size={12} className="text-orange-600" />
                      {item.label}
                    </span>
                    <span className="font-semibold text-gray-800 text-[11px] text-right truncate max-w-[150px]">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Direct Channels Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20Systems!"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Message"
                className="flex items-center gap-1.5 p-2 border rounded-xl bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <FaWhatsapp size={15} className="text-[#25D366]" />
                <span className="text-xs">WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href="tel:+919790741494"
                aria-label="Call Touch Micro Systems Lab"
                className="flex items-center gap-1.5 p-2 border rounded-xl bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100 transition-colors"
              >
                <Phone size={13} className="text-orange-600" />
                <span className="text-xs">Call Lab</span>
              </a>

              {/* Directions */}
              <a
                href="https://www.google.com/maps/place/8%2F42+Mount+Poonamallee+Rd,+Iyyappanthangal,+Chennai,+Tamil+Nadu+600056"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Directions on Google Maps"
                className="flex items-center gap-1.5 p-2 border rounded-xl bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100 transition-colors"
              >
                <MapPin size={13} className="text-blue-600" />
                <span className="text-xs">Directions</span>
              </a>

              {/* Google Reviews */}
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJKbGLsfhgUjoRr8wX5ngw9vA"
                target="_blank"
                rel="noreferrer"
                aria-label="Write a Review on Google"
                className="flex items-center gap-1.5 p-2 border rounded-xl bg-amber-50 border-amber-200 text-amber-800 hover:bg-amber-100 transition-colors"
              >
                <Star size={13} className="text-amber-500 fill-amber-500" />
                <span className="text-xs">Review Us</span>
              </a>

            </div>

            {/* Verification Footer */}
            <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
              <span className="flex items-center gap-1">
                <ShieldCheck size={11} className="text-emerald-600" />
                Verified Chennai Facility
              </span>
              <span>Est. 2011</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
