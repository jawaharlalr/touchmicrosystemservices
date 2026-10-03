import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="relative py-14 sm:py-16 bg-[#FFF7ED] border-t border-b border-orange-200/80 overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-5xl text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 border rounded-full border-orange-300 bg-white/80 shadow-xs">
          <MessageSquare size={14} className="text-orange-600" />
          <span className="text-xs font-semibold tracking-wide uppercase text-orange-900">
            Consult Our Engineering Team
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
          Have a project or device that needs attention?
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 mb-7 leading-relaxed">
          Talk to our team about your technical requirements, products, component-level repairs, or embedded system needs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Main CTA: Get a Quote */}
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-98"
          >
            <span>Get a Quote</span>
            <ArrowRight size={15} />
          </Link>

          {/* WhatsApp Us */}
          <a
            href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20Systems!%20I%20have%20a%20technical%20requirement%20I%20would%20like%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-gray-800 bg-white hover:bg-emerald-50 border border-gray-300 hover:border-emerald-400 rounded-xl shadow-xs transition-all active:scale-98"
          >
            <FaWhatsapp size={16} className="text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>

          {/* Talk to Us */}
          <a
            href="tel:+919790741494"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-gray-800 bg-white hover:bg-orange-50/50 border border-gray-300 hover:border-orange-400 rounded-xl shadow-xs transition-all active:scale-98"
          >
            <Phone size={15} className="text-orange-600" />
            <span>Talk to Us</span>
          </a>
        </div>

        {/* Business hours note */}
        <p className="mt-6 text-xs text-gray-600">
          Direct Lab Line: +91 9790741494 • Operating Hours: Mon – Sun: 8:30 AM – 7:30 PM
        </p>

      </div>
    </section>
  );
}
