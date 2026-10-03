import React from "react";
import { motion } from "framer-motion";
import { Wrench, Settings2, ShieldCheck, Headphones, Clock, Cpu } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Cpu,
      title: "Technical Expertise",
      desc: "Over a decade of component-level diagnostic precision, micro-soldering mastery, and embedded engineering."
    },
    {
      icon: Settings2,
      title: "Customized Solutions",
      desc: "Hardware architectures and system setups tailored exactly for corporate, educational, and individual performance needs."
    },
    {
      icon: ShieldCheck,
      title: "Quality-Focused Service",
      desc: "Every device repair is verified with laboratory stress benchmarks and backed by our formal service guarantee."
    },
    {
      icon: Headphones,
      title: "Dedicated Customer Support",
      desc: "Direct access to our senior hardware technicians for transparent turnaround updates and troubleshooting guidance."
    },
    {
      icon: Clock,
      title: "Reliable Technical Assistance",
      desc: "Fast turnaround lanes for critical workstation breakdowns, emergency data recoveries, and urgent board repairs."
    },
    {
      icon: Wrench,
      title: "Comprehensive Lab Facility",
      desc: "In-house Chennai facility equipped with digital oscilloscopes, SMD rework stations, and BIOS programmers."
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-20 bg-white border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 mb-3.5 border rounded-full border-orange-200 bg-orange-50"
          >
            <ShieldCheck size={14} className="text-orange-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
              Why Touch Micro Systems
            </span>
          </motion.div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Engineered for Reliability &amp; <span className="text-orange-600">Peace of Mind</span>
          </h2>
          <p className="max-w-2xl mt-3 text-base text-gray-600">
            We deliver honest diagnostics, transparent component pricing, and durable hardware solutions that keep your systems running at peak capability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-7 transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 group"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-12 h-12 mb-5 transition-colors duration-200 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500">
                <Icon size={22} />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-orange-600">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}