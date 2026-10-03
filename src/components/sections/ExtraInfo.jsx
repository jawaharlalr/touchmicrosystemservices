import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, Wrench, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExtraInfo() {
  const trustCards = [
    {
      icon: <Award size={22} className="text-orange-600" />,
      title: "Projects Completed",
      desc: "Proven track record of successful chip-level restorations, custom systems, and surveillance deployments."
    },
    {
      icon: <Users size={22} className="text-orange-600" />,
      title: "Customers Served",
      desc: "Trusted by thousands of individual clients, educational institutions, and businesses across Chennai."
    },
    {
      icon: <Wrench size={22} className="text-orange-600" />,
      title: "Technical Support",
      desc: "Direct access to experienced hardware technicians with honest diagnostic evaluations."
    },
    {
      icon: <ShieldCheck size={22} className="text-orange-600" />,
      title: "Professional Solutions",
      desc: "Standardized testing procedures, official lab warranty on repairs, and reliable OEM component sourcing."
    },
  ];

  return (
    <section className="relative py-20 bg-slate-50 border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* LEFT: Story & Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 text-left"
          >
            <div className="inline-block px-3.5 py-1 mb-4 border rounded-full border-orange-200 bg-orange-50">
              <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
                Established 2011 • Chennai, India
              </span>
            </div>
            
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Serving Chennai with <br className="hidden sm:block" />
              <span className="text-orange-600">Reliable Tech Expertise</span>
            </h2>
            
            <div className="mb-8 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                At <strong className="text-gray-900 font-semibold">Touch Micro Systems Services</strong>, we bridge the gap between complex hardware failures and seamless system performance.
              </p>
              <p>
                Whether you need precision component-level board rework or an enterprise requiring scalable IT hardware maintenance, we deliver solutions engineered for long-term durability.
              </p>
            </div>

            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white transition-all rounded-xl bg-orange-500 hover:bg-orange-600 shadow-sm hover:shadow-md"
            >
              <span>Learn More About Us</span>
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          {/* RIGHT: Trust Cards Grid */}
          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            {trustCards.map((box, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-50 border border-orange-200">
                  {box.icon}
                </div>
                <h3 className="mb-1.5 text-base font-bold text-gray-900">{box.title}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{box.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}