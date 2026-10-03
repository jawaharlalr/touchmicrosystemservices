import { MapPin, Phone, Mail, ChevronRight, Cpu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative mt-auto bg-slate-50 border-t border-gray-300 text-gray-700">
      <div className="relative z-10 px-4 sm:px-6 pt-16 pb-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 sm:grid-cols-2">

          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 border rounded-xl bg-orange-50 border-orange-200 text-orange-600 shadow-xs">
                <Cpu size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 tracking-tight">
                  Touch Micro Systems
                </h3>
                <span className="text-xs text-orange-600 font-medium">Services &amp; Solutions</span>
              </div>
            </div>
            
            <p className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              Embedded Systems | Electronics | Computer Solutions | Technical Services
            </p>

            <p className="text-sm leading-relaxed text-gray-600">
              Reliable electronics repair, component-level micro-soldering, software configuration, and tailored embedded solutions for businesses, institutions and individuals.
            </p>

            <div className="pt-2">
              <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Connect with us</span>
              <a
                href="https://wa.me/919790741494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 text-emerald-600 transition-colors bg-white border border-gray-300 rounded-xl hover:bg-emerald-50 hover:border-emerald-300 shadow-xs"
                aria-label="Connect on WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-900 uppercase border-l-2 border-orange-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="flex items-center text-gray-600 transition-colors hover:text-orange-600"
                >
                  <ChevronRight size={14} className="mr-1 text-orange-500" />
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="flex items-center text-gray-600 transition-colors hover:text-orange-600"
                >
                  <ChevronRight size={14} className="mr-1 text-orange-500" />
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="flex items-center text-gray-600 transition-colors hover:text-orange-600"
                >
                  <ChevronRight size={14} className="mr-1 text-orange-500" />
                  Products
                </button>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={scrollToTop}
                  className="flex items-center text-gray-600 transition-colors hover:text-orange-600"
                >
                  <ChevronRight size={14} className="mr-1 text-orange-500" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  onClick={scrollToTop}
                  className="flex items-center text-gray-600 transition-colors hover:text-orange-600"
                >
                  <ChevronRight size={14} className="mr-1 text-orange-500" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-900 uppercase border-l-2 border-orange-500 pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="hover:text-orange-600 transition-colors cursor-pointer" onClick={() => scrollToSection("embedded")}>
                Embedded Systems
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer" onClick={() => scrollToSection("embedded")}>
                Electronics Solutions
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer" onClick={() => scrollToSection("services")}>
                Computer Services
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer" onClick={() => scrollToSection("services")}>
                Laptop &amp; Desktop Repairs
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer" onClick={() => scrollToSection("products")}>
                Networking &amp; CCTV
              </li>
              <li className="hover:text-orange-600 transition-colors cursor-pointer" onClick={() => scrollToSection("why-choose-us")}>
                Technical Support
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-900 uppercase border-l-2 border-orange-500 pl-2.5">
              Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+919790741494" className="text-gray-700 hover:text-orange-600 font-medium">
                    +91 9790741494
                  </a>
                  <a href="tel:+914446065723" className="text-gray-700 hover:text-orange-600 text-xs">
                    044 46065723
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <FaWhatsapp size={16} className="text-emerald-600 flex-shrink-0" />
                <a
                  href="https://wa.me/919790741494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-orange-600"
                >
                  WhatsApp: +91 9790741494
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-orange-600 flex-shrink-0" />
                <a href="mailto:keepntouchmicro@gmail.com" className="text-gray-700 hover:text-orange-600 text-xs truncate">
                  keepntouchmicro@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <address className="text-xs not-italic leading-relaxed text-gray-600">
                  8/42, Mount Poonamallee Road, Ramachandran Nagar, Iyyappanthangal, Chennai - 600056
                </address>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-gray-300">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Touch Micro Systems. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
              <span>Hardware</span>
              <span className="w-1 h-1 rounded-full bg-orange-500" />
              <span>Software</span>
              <span className="w-1 h-1 rounded-full bg-orange-500" />
              <span>Embedded</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}