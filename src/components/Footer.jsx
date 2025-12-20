import { MapPin, Phone, Mail, ChevronRight, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-auto overflow-hidden border-t-2 bg-brand-black border-brand-orange/30">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 px-6 pt-16 pb-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 sm:grid-cols-2">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded bg-brand-orange/10 border border-brand-orange/20">
                <Cpu size={20} className="text-brand-orange" />
              </div>
              <h4 className="text-lg font-black tracking-tighter text-white uppercase">
                Touch <span className="text-brand-orange">Micro</span> System Services
              </h4>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Reliable and affordable electronics repair, hardware servicing,
              software installation, and custom tech solutions tailored for performance.
            </p>
            <div className="pt-2">
              <h5 className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase">Connect with us</h5>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919790741494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-lg bg-white/5 border-white/10 hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/10"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="pl-3 mb-6 text-sm font-bold tracking-widest text-white uppercase border-l-2 border-brand-orange">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about-us" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="flex items-center text-sm text-gray-400 transition-colors duration-200 group hover:text-brand-orange"
                  >
                    <ChevronRight size={14} className="mr-1 transition-transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-brand-orange" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-2">
            <h4 className="pl-3 mb-6 text-sm font-bold tracking-widest text-white uppercase border-l-2 border-brand-orange">
              Get In Touch
            </h4>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="p-2 transition-colors border rounded bg-white/5 border-white/10 group-hover:border-brand-orange/50">
                    <Mail size={16} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-tighter text-gray-500 uppercase">Email Support</p>
                    <a href="mailto:keepntouchmicro@gmail.com" className="text-sm text-gray-300 transition-colors hover:text-brand-orange">
                      keepntouchmicro@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="p-2 transition-colors border rounded bg-white/5 border-white/10 group-hover:border-brand-orange/50">
                    <Phone size={16} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-tighter text-gray-500 uppercase">Call Us</p>
                    <div className="flex flex-wrap items-center text-sm text-gray-300 gap-x-2">
                      <a href="tel:+919790741494" className="transition-colors hover:text-brand-orange">+91 9790741494</a>
                      <span className="text-gray-600">|</span>
                      <a href="tel:+914446065723" className="transition-colors hover:text-brand-orange">044 46065723</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 transition-colors border rounded bg-white/5 border-white/10 group-hover:border-brand-orange/50">
                  <MapPin size={16} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-tighter text-gray-500 uppercase">Location</p>
                  <address className="text-sm not-italic leading-relaxed text-gray-300">
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
            <p className="text-xs tracking-wide text-gray-500">
              © {new Date().getFullYear()} <span className="text-gray-300">Touch Micro System Services</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
              <span>Hardware</span>
              <span className="w-1 h-1 rounded-full bg-brand-orange" />
              <span>Software</span>
              <span className="w-1 h-1 rounded-full bg-brand-orange" />
              <span>Embedded</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}