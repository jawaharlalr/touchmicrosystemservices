import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"; // ✅ WhatsApp icon

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="px-4 pt-10 mt-auto"
      style={{ backgroundColor: "#1E1E1E", color: "#F0F0F0" }}
    >
      <div className="grid grid-cols-1 gap-10 mx-auto text-sm max-w-7xl sm:grid-cols-2 md:grid-cols-4 sm:text-base">
        {/* Company Info */}
        <div>
          <h4 className="mb-3 text-lg font-bold" style={{ color: "#FF4C00" }}>
            TOUCH MICRO SYSTEMS SERVICES
          </h4>
          <p style={{ color: "#F0F0F0" }}>
            Reliable and affordable electronics repair, hardware servicing,
            software installation, and custom solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-lg font-bold" style={{ color: "#FF4C00" }}>
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="inline-block transition-transform duration-200"
                style={{ color: "#F0F0F0" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4C00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F0F0")}
                onClick={scrollToTop}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="inline-block transition-transform duration-200"
                style={{ color: "#F0F0F0" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4C00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F0F0")}
                onClick={scrollToTop}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="inline-block transition-transform duration-200"
                style={{ color: "#F0F0F0" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4C00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F0F0")}
                onClick={scrollToTop}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links (moved here) */}
        <div>
          <h4 className="mb-3 text-lg font-bold" style={{ color: "#FF4C00" }}>
            Social Links
          </h4>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919790741494"
              target="_blank"
              rel="noopener noreferrer"
              className="transition"
              style={{ color: "#F0F0F0" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F0F0")}
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-3 text-lg font-bold" style={{ color: "#FF4C00" }}>
            Contact
          </h4>

          {/* Email */}
          <div className="flex items-start gap-2 mb-3">
            <Mail className="mt-1" size={18} color="#FF4C00" />
            <a
              href="mailto:keepntouchmicro@gmail.com"
              className="no-underline transition"
              style={{ color: "#F0F0F0" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4C00")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F0F0")}
            >
              keepntouchmicro@gmail.com
            </a>
          </div>

          {/* Phones in same line */}
          <div className="flex items-center gap-2 mb-3">
            <Phone size={18} color="#FF4C00" />
            <span>
              <a
                href="tel:+919790741494"
                className="no-underline transition"
                style={{ color: "#F0F0F0" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4C00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F0F0")}
              >
                +91 9790741494
              </a>
              <span className="mx-2">|</span>
              <a
                href="tel:+914446065723"
                className="no-underline transition"
                style={{ color: "#F0F0F0" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4C00")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#F0F0F0")}
              >
                044 46065723
              </a>
            </span>
          </div>

          {/* Address */}
          <div
            className="flex items-start gap-2 mb-3"
            style={{ color: "#F0F0F0" }}
          >
            <MapPin className="mt-1" size={18} color="#FF4C00" />
            <span>
              8/42, Mount Poonamallee Road, 
              <br />
              Ramachandran Nagar, Iyyappanthangal,
              <br />
              Chennai-600056
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Center Copyright */}
      <div
        className="pt-10 text-center pb-14 sm:text-sm"
        style={{ color: "#FFFFFF" }}
      >
        © {new Date().getFullYear()} Touch Micro System Services. All rights
        reserved.
      </div>
    </footer>
  );
}
