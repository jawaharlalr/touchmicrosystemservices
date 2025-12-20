import { MapPin, Phone, Mail, Clock, ArrowUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Contact() {
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
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-300 bg-brand-black selection:bg-brand-orange selection:text-white">
      
      {/* --- SEO TAGS --- */}
       <Helmet>
        <title>Contact Us | Touch Microsystems</title>
        <meta
          name="description"
          content="Get in touch with Touch Microsystems for expert electronics repair, device setup, and custom tech solutions in Chennai. Call, email, or visit us today."
        />
        <meta
          name="keywords"
          content="Contact Touch Microsystems, electronics repair Chennai, device setup, support, services"
        />

        
        <meta property="og:title" content="Contact Us | Touch Microsystems" />
        <meta
          property="og:description"
          content="Need help with electronics repair, setup, or custom solutions? Contact Touch Microsystems in Chennai today."
        />
        <meta
          property="og:image"
          content="https://www.touchmicrosystemservices.in/images/header.png"
        />
        <meta
          property="og:url"
          content="https://touchmicrosystems.in/contact-us"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Touch Microsystems" />
        <meta
          name="twitter:description"
          content="Need help with electronics repair, setup, or custom solutions? Contact Touch Microsystems in Chennai today."
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
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className="relative z-10 max-w-6xl px-6 pt-32 pb-20 mx-auto">
        
        {/* --- BACK TO HOME BUTTON (Inside Page Flow) --- */}
        {/* Positioned absolutely within the content container, so it scrolls WITH the page */}
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
          className="mb-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="inline-block px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/10">
             <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">Support Center</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">TOUCH</span>
          </h1>
          <p className="max-w-lg mx-auto text-gray-400">
            Ready to upgrade your system or need a quick repair? Our team is standing by to help you with expert solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-12 md:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          {/* LEFT: Contact Info Cards */}
          <div className="space-y-6">
            
            {/* Address */}
            <div className="group flex items-start p-6 bg-[#111111] border border-white/5 rounded-xl hover:border-brand-orange/30 transition-all duration-300">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 transition-colors border rounded-lg flex-center bg-brand-dark border-white/10 group-hover:border-brand-orange group-hover:text-brand-orange">
                <MapPin size={24} className="text-gray-300 group-hover:text-brand-orange" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">Visit Our Lab</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  8/42, Mount Poonamallee Road, <br/>
                  Ramachandran Nagar, Iyyappanthangal, <br/>
                  Chennai-600056
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex items-start p-6 bg-[#111111] border border-white/5 rounded-xl hover:border-brand-orange/30 transition-all duration-300">
               <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 transition-colors border rounded-lg flex-center bg-brand-dark border-white/10 group-hover:border-brand-orange group-hover:text-brand-orange">
                <Phone size={24} className="text-gray-300 group-hover:text-brand-orange" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">Call Support</h3>
                <div className="flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:items-center">
                  <a href="tel:+919790741494" className="font-mono tracking-wide transition-colors hover:text-brand-orange">+91 9790741494</a>
                  <span className="hidden sm:inline text-white/20">|</span>
                  <a href="tel:+914446065723" className="font-mono tracking-wide transition-colors hover:text-brand-orange">044 46065723</a>
                </div>
              </div>
            </div>

            {/* Email */}
            <a href="mailto:keepntouchmicro@gmail.com" className="block">
              <div className="group flex items-start p-6 bg-[#111111] border border-white/5 rounded-xl hover:border-brand-orange/30 transition-all duration-300">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 transition-colors border rounded-lg flex-center bg-brand-dark border-white/10 group-hover:border-brand-orange group-hover:text-brand-orange">
                  <Mail size={24} className="text-gray-300 group-hover:text-brand-orange" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">Email Us</h3>
                  <p className="text-sm text-gray-400 transition-colors hover:text-brand-orange">
                    keepntouchmicro@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Hours */}
            <div className="group flex items-start p-6 bg-[#111111] border border-white/5 rounded-xl hover:border-brand-orange/30 transition-all duration-300">
               <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 transition-colors border rounded-lg flex-center bg-brand-dark border-white/10 group-hover:border-brand-orange group-hover:text-brand-orange">
                <Clock size={24} className="text-gray-300 group-hover:text-brand-orange" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">Working Hours</h3>
                <p className="text-sm text-gray-400">
                  <span className="font-medium text-white">Mon - Sun:</span> 8:30 AM – 7:30 PM
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: Map & Directions */}
          <div className="flex flex-col space-y-6">
            <div className="flex-grow w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111111] p-2">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.890596023022!2d80.131796!3d13.037587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f8b18b16b9%3A0x1234567890abcdef!2s8%2F42%20Mount%20Poonamallee%20Rd%2C%20Iyyappanthangal%2C%20Chennai%2C%20Tamil%20Nadu%20600056!5e0!3m2!1sen!2sin!4v1736022000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>

            <a
              href="https://www.google.com/maps/place/8%2F42+Mount+Poonamallee+Rd,+Iyyappanthangal,+Chennai,+Tamil+Nadu+600056"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold text-center rounded-lg transition-all shadow-[0_0_20px_rgba(255,76,0,0.2)] hover:shadow-[0_0_30px_rgba(255,76,0,0.4)] flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Get Directions
            </a>
          </div>

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