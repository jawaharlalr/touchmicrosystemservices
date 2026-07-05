import { MapPin, Phone, Mail, ChevronRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto overflow-hidden border-t bg-[#080808] border-white/5 bg-grid-tech">
      {/* Glow Backing */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/[0.02] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 px-6 pt-20 pb-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 sm:grid-cols-2">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 border rounded-xl bg-white/[0.02] border-white/10 text-brand-orange shadow-[0_0_15px_rgba(255,76,0,0.15)]">
                <Cpu size={22} className="text-brand-orange animate-pulse" />
              </div>
              <h4 className="text-lg font-bold font-mono tracking-tight text-white uppercase">
                Touch <span className="text-brand-orange">Micro</span> Systems
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 font-sans">
              Reliable and affordable electronics repair, hardware servicing,
              software installation, and custom tech solutions tailored for high-performance operations.
            </p>
            <div className="space-y-3">
              <h5 className="text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase">Connect with us</h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919790741494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 text-gray-400 transition-all duration-300 border rounded-xl bg-white/[0.02] border-white/5 hover:text-green-500 hover:border-green-500/30 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                >
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="pl-3 mb-6 text-xs font-mono font-bold tracking-[0.2em] text-white uppercase border-l border-brand-orange">
              Quick Links
            </h4>
            <ul className="space-y-3 font-mono text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="flex items-center text-gray-400 transition-colors duration-200 group hover:text-brand-orange"
                  >
                    <ChevronRight size={14} className="mr-1.5 transition-transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-brand-orange" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2">
            <h4 className="pl-3 mb-6 text-xs font-mono font-bold tracking-[0.2em] text-white uppercase border-l border-brand-orange">
              Get In Touch
            </h4>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 transition-colors border rounded-xl bg-white/[0.02] border-white/5 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/[0.02]">
                    <Mail size={16} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-1">Email Support</p>
                    <a href="mailto:keepntouchmicro@gmail.com" className="text-sm font-sans text-gray-300 transition-colors hover:text-brand-orange">
                      keepntouchmicro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 transition-colors border rounded-xl bg-white/[0.02] border-white/5 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/[0.02]">
                    <Phone size={16} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-1">Call Us</p>
                    <div className="flex flex-col gap-y-1 text-sm font-mono text-gray-300">
                      <a href="tel:+919790741494" className="transition-colors hover:text-brand-orange">+91 9790741494</a>
                      <a href="tel:+914446065723" className="transition-colors hover:text-brand-orange">044 46065723</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2.5 transition-colors border rounded-xl bg-white/[0.02] border-white/5 group-hover:border-brand-orange/30 group-hover:bg-brand-orange/[0.02]">
                  <MapPin size={16} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[9px] font-mono font-bold tracking-widest text-gray-500 uppercase mb-1">Location</p>
                  <address className="text-sm not-italic leading-relaxed text-gray-300 font-sans">
                    8/42, Mount Poonamallee Road, <br />
                    Ramachandran Nagar, Iyyappanthangal,<br />
                    Chennai - 600056
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-16 border-t border-white/5">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs font-mono text-gray-500">
              © {new Date().getFullYear()} <span className="text-gray-300">Touch Microsystems</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-5 text-[9px] font-mono tracking-widest text-gray-500 uppercase">
              <span>Hardware</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#FF4C00]" />
              <span>Software</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_#FF4C00]" />
              <span>Embedded</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}