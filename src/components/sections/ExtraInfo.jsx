import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, Wrench, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExtraInfo() {
  const trustCards = [
    {
      icon: <Award size={20} className="text-orange-600" />,
      title: "Completed Restorations",
      desc: "Track record of successful chip-level restorations, custom systems, and surveillance deployments."
    },
    {
      icon: <Users size={20} className="text-orange-600" />,
      title: "Trusted Customer Base",
      desc: "Serving individual users, students, engineering professionals, and local enterprises across Chennai."
    },
    {
      icon: <Wrench size={20} className="text-orange-600" />,
      title: "Direct Technical Support",
      desc: "Direct access to experienced hardware technicians with honest diagnostic evaluations."
    },
    {
      icon: <ShieldCheck size={20} className="text-orange-600" />,
      title: "Quality Assured",
      desc: "Standardized testing procedures, official lab warranty on repairs, and reliable OEM component sourcing."
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 bg-slate-50 border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT: Story & Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-6 text-left"
          >
            <div className="inline-block px-3.5 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50">
              <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
                Established 2011 • Chennai, India
              </span>
            </div>
            
            <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Serving Chennai with <br className="hidden sm:block" />
              <span className="text-orange-600">Reliable Tech Expertise</span>
            </h2>
            
            <div className="mb-6 space-y-3 text-xs sm:text-sm leading-relaxed text-gray-600">
              <p>
                At <strong className="text-gray-900 font-semibold">Touch Micro Systems Services</strong>, we bridge the gap between complex hardware failures and seamless system performance.
              </p>
              <p>
                Whether you need precision component-level board rework or an enterprise requiring scalable IT hardware maintenance, we deliver solutions engineered for long-term durability.
              </p>
            </div>

            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all rounded-xl bg-orange-500 hover:bg-orange-600 shadow-sm hover:shadow-md"
            >
              <span>Learn More About Us</span>
              <ChevronRight size={15} />
            </Link>
          </motion.div>

          {/* RIGHT: Trust Cards Grid */}
          <div className="lg:col-span-6 grid gap-3.5 sm:grid-cols-2">
            {trustCards.map((box, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-4 sm:p-5 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-orange-50 border border-orange-200">
                  {box.icon}
                </div>
                <h3 className="mb-1 text-sm sm:text-base font-bold text-gray-900">{box.title}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{box.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}