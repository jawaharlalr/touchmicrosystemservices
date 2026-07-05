import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, ChevronRight } from "lucide-react";

export default function ExtraInfo() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-black bg-grid-tech border-t border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter uppercase whitespace-nowrap">
        Touch Micro
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-block px-3 py-1 mb-6 border rounded-full border-brand-orange/30 bg-brand-orange/5">
              <span className="text-[10px] font-mono tracking-widest uppercase text-brand-orange font-bold">
                Est. 2011 • Chennai, India
              </span>
            </div>
            
            <h2 className="mb-8 text-4xl font-black tracking-tighter text-white md:text-5xl uppercase leading-[0.9]">
              Serving Chennai <br />
              <span className="text-brand-orange">for over a decade</span>
            </h2>
            
            <div className="mb-10 space-y-6 font-sans">
              <p className="text-lg leading-relaxed text-gray-300">
                At <span className="text-white border-b border-brand-orange/30">TOUCH MICRO SYSTEMS SERVICES</span>, we bridge the gap between complex hardware issues and seamless performance.
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                Whether you’re an individual requiring precision chip-level repair or an enterprise seeking scalable IT infrastructure support, we deliver solutions engineered for reliability and long-term uptime.
              </p>
            </div>

            <a
              href="/about-us"
              className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-mono tracking-widest font-bold text-white transition-all bg-brand-orange hover:bg-orange-600 shadow-[0_10px_30px_rgba(255,76,0,0.15)] rounded-sm"
            >
              LEARN MORE ABOUT US
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT: Trust Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: <Award size={20} />, title: "Certified Expertise", desc: "Trained hardware engineers." },
              { icon: <ShieldCheck size={20} />, title: "Secure Service", desc: "Data privacy & part warranty." },
              { icon: <Users size={20} />, title: "Client First", desc: "Dedicated support team." },
              { icon: <div className="text-base font-bold font-mono">10+</div>, title: "Years Experience", desc: "Solving tech challenges." },
            ].map((box, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 border rounded-2xl bg-white/[0.01] border-white/5 backdrop-blur-sm hover:border-brand-orange/30 transition-all duration-300 group corner-brackets"
              >
                <div className="flex items-center justify-center w-11 h-11 mb-4 transition-all border rounded-xl bg-black border-white/5 text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange/40">
                  {box.icon}
                </div>
                <h4 className="mb-2 text-base font-bold text-white font-mono">{box.title}</h4>
                <p className="text-xs text-gray-500 font-sans">{box.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}