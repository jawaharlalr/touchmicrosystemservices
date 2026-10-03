import { Wrench, Monitor, Cpu, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const capabilities = [
    {
      icon: <Wrench size={26} className="text-orange-600" />,
      title: "Precision Micro-Soldering",
      desc: "Specialized diagnostics for motherboards, GPU rework, power rail tracing, and micro-component replacements under stereo microscopes."
    },
    {
      icon: <Monitor size={26} className="text-orange-600" />,
      title: "System Setup & Integration",
      desc: "Comprehensive installation, OS hardening, driver optimization, and peripheral networking for office workstations and institutional setups."
    },
    {
      icon: <Cpu size={26} className="text-orange-600" />,
      title: "Embedded & Custom Hardware",
      desc: "Microcontroller development, firmware flashing, custom telemetry sensors, and tailored performance architectures designed to last."
    }
  ];

  const milestones = [
    { label: "Founded in Chennai", detail: "Serving local businesses, institutions, and professionals with integrity since 2011." },
    { label: "Certified Engineers", detail: "Experienced technicians trained in digital oscilloscopes and BGA rework." },
    { label: "Official Warranty", detail: "Every service performed in our lab is backed by our customer-first service guarantee." },
    { label: "100% Genuine Spares", detail: "Direct OEM sourcing for replacement screens, batteries, keyboards, and boards." }
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-gray-900 font-sans pb-20">
      
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
      <div className="relative pt-12 pb-16 bg-white border-b border-gray-300">
        <div className="max-w-5xl px-4 sm:px-6 mx-auto">
          
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <span>&larr; Back to Home</span>
            </Link>
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              Est. 2011 • Chennai, India
            </span>
          </div>

          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3.5 py-1 mb-4 border rounded-full border-orange-200 bg-orange-50">
              <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">Our Company Story</span>
            </div>
            
            <h1 className="mb-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Engineering <span className="text-orange-600">Excellence</span> &amp; Dedicated Service
            </h1>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              For over a decade, <strong className="text-gray-900 font-semibold">Touch Micro Systems Services</strong> has been a trusted cornerstone of electronics repair and embedded technology solutions in Chennai. We don't just repair devices; we engineer solutions built for durability.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl px-4 sm:px-6 mx-auto pt-16">
        
        {/* Core Pillars */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Core Engineering Disciplines</h2>
            <p className="mt-2 text-sm text-gray-600">High standards of technical precision applied to every customer requirement.</p>
          </div>

          <motion.div 
            className="grid gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {capabilities.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-8 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-lg hover:border-orange-400 transition-all flex flex-col"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-orange-50 border border-orange-200">
                  {item.icon}
                </div>
                <h3 className="mb-2.5 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 flex-1">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Story & Facility Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-12 mb-16 p-8 sm:p-10 bg-white border border-gray-300 rounded-2xl shadow-xs">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <Award size={15} />
              <span>10+ Years of Field Experience</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Laboratory-Grade Diagnostics in Iyyappanthangal
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Located on Mount Poonamallee Road in Ramachandran Nagar, our service center operates with specialized equipment including precision soldering irons, digital multimeters, variable power supplies, and logic analyzers.
            </p>
            <p className="text-sm leading-relaxed text-gray-600">
              We take pride in transparent pricing, thorough diagnostic documentation, and maintaining a personal relationship with every client who entrusts their hardware to us.
            </p>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-xs transition-colors"
              >
                <span>Visit Our Lab Today</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            {milestones.map((m, idx) => (
              <div key={idx} className="p-5 bg-slate-50 border border-gray-300 rounded-xl">
                <div className="flex items-center gap-2 mb-1.5 text-sm font-bold text-gray-900">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                  <span>{m.label}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-6">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}