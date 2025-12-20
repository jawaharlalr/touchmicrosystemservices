import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, ChevronRight } from "lucide-react";

export default function ExtraInfo() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-black">
      {/* --- BACKGROUND DECOR --- */}
      {/* Huge subtle watermark text for 'Zoomer' tech feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap">
        Touch Micro
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-block px-3 py-1 mb-6 border rounded-full border-brand-orange/30 bg-brand-orange/10">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-orange">
                Est. 2011 • Chennai, India
              </span>
            </div>
            
            <h2 className="mb-8 text-5xl font-black tracking-tighter text-white md:text-6xl uppercase leading-[0.9]">
              Serving Chennai <br />
              <span className="text-brand-orange">for over a decade</span>
            </h2>
            
            <div className="mb-10 space-y-6">
              <p className="text-xl font-medium leading-relaxed text-gray-300">
                At <span className="text-white border-b border-brand-orange/50">TOUCH MICRO SYSTEMS SERVICES</span>, we bridge the gap between complex hardware issues and seamless performance.
              </p>
              <p className="leading-relaxed text-gray-500">
                Whether you’re an individual requiring precision chip-level repair or an enterprise seeking scalable IT infrastructure support, we deliver solutions engineered for reliability and long-term uptime.
              </p>
            </div>

            <a
              href="/about-us"
              className="group inline-flex items-center gap-3 px-8 py-4 font-bold text-white transition-all bg-brand-orange rounded-sm hover:bg-orange-600 shadow-[0_10px_30px_rgba(255,76,0,0.2)]"
            >
              LEARN MORE ABOUT US
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-1.5" />
            </a>
          </motion.div>

          {/* RIGHT: Trust Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: <Award />, title: "Certified Expertise", desc: "Trained hardware engineers." },
              { icon: <ShieldCheck />, title: "Secure Service", desc: "Data privacy & part warranty." },
              { icon: <Users />, title: "Client First", desc: "Dedicated support team." },
              { icon: <div className="text-xl font-black">10+</div>, title: "Years Experience", desc: "Solving tech challenges." },
            ].map((box, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border rounded-2xl bg-white/[0.02] border-white/5 backdrop-blur-sm hover:border-brand-orange/30 transition-all group"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 transition-all border rounded-xl bg-brand-dark border-white/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white">
                  {box.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold text-white">{box.title}</h4>
                <p className="text-sm text-gray-500">{box.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}