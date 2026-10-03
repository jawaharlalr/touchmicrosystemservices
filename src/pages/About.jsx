import { Wrench, Monitor, Cpu, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function About() {
  const capabilities = [
    {
      icon: <Wrench size={24} className="text-orange-600" />,
      title: "Precision Micro-Soldering",
      desc: "Specialized diagnostics for multi-layer motherboards, GPU rework, power rail tracing, and micro-component replacements under stereo microscopes."
    },
    {
      icon: <Cpu size={24} className="text-orange-600" />,
      title: "Embedded Systems & Firmware",
      desc: "Microcontroller programming (ARM Cortex, STM32, AVR, PIC), IoT telemetry protocols, and sensor interfacing tailored for field reliability."
    },
    {
      icon: <Monitor size={24} className="text-orange-600" />,
      title: "Commercial IT & Security",
      desc: "Custom engineering workstations, server configuration, IP CCTV arrays, printer maintenance, and genuine OEM parts replacement."
    }
  ];

  const companyFacts = [
    { label: "Company", detail: "Touch Micro Systems Services, founded in 2011 in Chennai." },
    { label: "Technical Focus", detail: "Component-level board diagnostics, micro-soldering, and embedded hardware engineering." },
    { label: "Customer Base", detail: "Individual consumers, engineering students, local businesses, and corporate offices." },
    { label: "Lab Location", detail: "8/42 Mount Poonamallee Road, Ramachandran Nagar, Iyyappanthangal, Chennai - 600056." },
    { label: "Verified Spares", detail: "Direct OEM sourcing for replacement screens, batteries, keyboards, and boards." },
    { label: "Official Warranty", detail: "Lab-tested warranty and service documentation provided on all repairs." }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-gray-900 font-sans pb-16">
      
      {/* SEO Tags */}
      <Helmet>
        <title>About Us | Touch Micro Systems - Chennai's Electronics Specialists</title>
        <meta
          name="description"
          content="Learn about Touch Micro Systems Services in Chennai. Over a decade of excellence in embedded systems, component-level electronics repair, and IT solutions."
        />
        <meta
          name="keywords"
          content="About Touch Micro Systems, electronics repair Chennai, device setup, custom tech solutions, embedded systems Chennai"
        />
        <meta property="og:title" content="About Us | Touch Micro Systems" />
        <meta
          property="og:description"
          content="Discover Touch Micro Systems' expertise in electronics repair, embedded solutions, and tailored technology services."
        />
        <meta property="og:image" content="https://www.touchmicrosystemservices.in/images/header.png" />
        <meta property="og:url" content="https://touchmicrosystems.in/about-us" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-8 sm:pt-10 pb-12 bg-white border-b border-gray-300">
        <div className="max-w-5xl px-4 sm:px-6 mx-auto">
          
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors min-h-[36px]"
            >
              <span>&larr; Back to Home</span>
            </Link>
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              Est. 2011 • Chennai, India
            </span>
          </div>

          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3.5 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50">
              <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">Our Company Story</span>
            </div>
            
            <h1 className="mb-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Engineering <span className="text-orange-600">Excellence</span> &amp; Dedicated Service
            </h1>
            
            <p className="text-sm sm:text-base leading-relaxed text-gray-600">
              Since 2011, <strong className="text-gray-900 font-semibold">Touch Micro Systems Services</strong> has provided honest, high-precision electronics diagnostics and embedded hardware engineering to the Chennai community.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl px-4 sm:px-6 mx-auto pt-10">
        
        {/* Core Pillars */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Core Engineering Disciplines</h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-600">High standards of technical precision applied to every customer requirement.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-5 sm:p-6 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 transition-all flex flex-col"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-50 border border-orange-200">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600 flex-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story & Verified Facts Grid */}
        <div className="grid items-center gap-8 lg:grid-cols-12 mb-12 p-6 sm:p-8 bg-white border border-gray-300 rounded-2xl shadow-xs">
          
          <div className="lg:col-span-6 space-y-3.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <Award size={14} />
              <span>Over a Decade of Practical Service</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Laboratory-Grade Diagnostics in Iyyappanthangal
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
              Located on Mount Poonamallee Road in Ramachandran Nagar, our service center operates with specialized equipment including precision soldering irons, digital multimeters, variable power supplies, and logic analyzers.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
              We serve individual users, engineering students, local retail customers, and commercial offices located throughout Porur, Kattupakkam, and the DLF IT Park corridor.
            </p>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-xs transition-colors"
              >
                <span>Visit Our Lab Today</span>
                <ChevronRight size={15} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid gap-3 sm:grid-cols-2">
            {companyFacts.map((fact, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 bg-slate-50 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-2 mb-1 text-xs font-bold text-gray-900">
                  <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>{fact.label}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed pl-5">{fact.detail}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}