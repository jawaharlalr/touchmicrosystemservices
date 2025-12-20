import { Wrench, Monitor, Cpu, ArrowUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function About() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-300 bg-brand-black selection:bg-brand-orange selection:text-white">
      
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>About Us | Touch Microsystems</title>
        <meta
          name="description"
          content="Touch Microsystems has been serving Chennai for over a decade with expert electronics repair, setup, and custom tech solutions. Learn more about our journey."
        />
        <meta
          name="keywords"
          content="About Touch Microsystems, electronics repair Chennai, device setup, custom tech solutions"
        />

        <meta property="og:title" content="About Us | Touch Microsystems" />
        <meta
          property="og:description"
          content="Discover Touch Microsystems’ expertise in electronics repair, smart device setup, and tailored technology solutions."
        />
        <meta
          property="og:image"
          content="https://www.touchmicrosystemservices.in/images/header.png"
        />
        <meta property="og:url" content="https://touchmicrosystems.in/about-us" />
        <meta property="og:type" content="website" />

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Touch Microsystems" />
        <meta
          name="twitter:description"
          content="Discover Touch Microsystems’ expertise in electronics repair, smart device setup, and tailored technology solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.touchmicrosystemservices.in/images/header.png"
        />
      </Helmet>

      {/* --- BACKGROUND GRID EFFECT --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="relative z-10 max-w-6xl px-6 pt-32 pb-20 mx-auto">
        
        {/* --- BACK TO HOME BUTTON (Inside Page Flow) --- */}
        <div className="absolute top-10 right-6">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white transition-all duration-300 border rounded-full group bg-brand-dark/50 border-white/10 hover:border-brand-orange hover:bg-brand-orange/10 backdrop-blur-sm"
          >
            Back to Home
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/10">
             <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">Our Story</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">EXCELLENCE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-400">
            For over a decade, <strong className="text-white">Touch Micro System Services</strong> has been the backbone of electronics repair in Chennai. 
            We don't just fix devices; we engineer solutions that last.
          </p>
        </motion.div>

        {/* --- CARDS GRID --- */}
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="group relative p-8 bg-[#111111] border border-white/5 rounded-xl hover:border-brand-orange/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,76,0,0.1)]">
            <div className="absolute top-0 right-0 p-4 transition-opacity opacity-10 group-hover:opacity-20">
              <Wrench size={64} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors border rounded-lg bg-brand-dark border-white/10 group-hover:border-brand-orange group-hover:text-brand-orange">
              <Wrench size={24} className="text-gray-300 group-hover:text-brand-orange" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Expert Repairs</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Precision diagnostics for Laptops, Desktops, and Industrial Electronics using advanced component-level tools.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="group relative p-8 bg-[#111111] border border-white/5 rounded-xl hover:border-brand-orange/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,76,0,0.1)]">
             <div className="absolute top-0 right-0 p-4 transition-opacity opacity-10 group-hover:opacity-20">
              <Monitor size={64} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors border rounded-lg bg-brand-dark border-white/10 group-hover:border-brand-orange group-hover:text-brand-orange">
              <Monitor size={24} className="text-gray-300 group-hover:text-brand-orange" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Device Setup</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Complete installation and optimization for Smart TVs, Home Networks, and Office Automation systems.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="group relative p-8 bg-[#111111] border border-white/5 rounded-xl hover:border-brand-orange/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,76,0,0.1)]">
             <div className="absolute top-0 right-0 p-4 transition-opacity opacity-10 group-hover:opacity-20">
              <Cpu size={64} />
            </div>
            <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors border rounded-lg bg-brand-dark border-white/10 group-hover:border-brand-orange group-hover:text-brand-orange">
              <Cpu size={24} className="text-gray-300 group-hover:text-brand-orange" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">Tech Solutions</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Custom-tailored software configurations, hardware upgrades, and integrated system architecture tailored to your needs.
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* --- SCROLL TO TOP --- */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-4 text-white transition-all rounded-full shadow-lg bottom-6 right-6 bg-brand-orange hover:bg-orange-600 animate-fade-in-up"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}