import { MapPin, Phone, Mail, Clock, ArrowUp, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

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

  return (
    <div
      className="relative min-h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/images/herosection.webp')" }}
    >
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Page Content */}
      <div className="relative max-w-6xl px-6 pt-32 pb-16 mx-auto text-white">
        {/* Home Button */}
        <Link
          to="/"
          className="absolute flex items-center gap-2 px-3 py-2 font-semibold text-black transition rounded-lg shadow-lg top-20 right-6"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e04300")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF4C00")
          }
        >
          <Home size={18} />
          Home
        </Link>

        <h2 className="mb-6 text-3xl font-bold text-center">Contact Us</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="flex items-start">
              <MapPin
                className="flex-shrink-0 mt-1 mr-3"
                style={{ color: "#FF4C00" }}
              />
              8/42, Mount Poonamallee Road, Ramachandran Nagar,
              Iyyappanthangal, Chennai-600056
            </p>

            {/* Phone */}
            <div className="flex items-center">
              <Phone className="mr-3" style={{ color: "#FF4C00" }} />
              <span className="text-white transition-colors duration-200 hover:text-red-500">
                <a href="tel:+919790741494">+91 9790741494</a>
              </span>
              <span className="mx-2">|</span>
              <span className="text-white transition-colors duration-200 hover:text-red-500">
                <a href="tel:+914446065723">044 46065723</a>
              </span>
            </div>

            {/* Email */}
            <a
              href="mailto:keepntouchmicro@gmail.com"
              className="flex items-center no-underline"
            >
              <Mail className="mr-3" style={{ color: "#FF4C00" }} />
              <span className="text-white transition-colors duration-200 hover:text-red-500">
                keepntouchmicro@gmail.com
              </span>
            </a>

            {/* Working Hours */}
            <div className="flex items-start">
              <Clock
                className="flex-shrink-0 mt-1 mr-3"
                style={{ color: "#FF4C00" }}
              />
              <div>
                <p className="font-semibold">Working Hours</p>
                <p>Mon - Sat: 8:30 AM – 7:30 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map + Button */}
          <div className="flex flex-col items-center w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.890596023022!2d80.131796!3d13.037587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f8b18b16b9%3A0x1234567890abcdef!2s8%2F42%20Mount%20Poonamallee%20Rd%2C%20Iyyappanthangal%2C%20Chennai%2C%20Tamil%20Nadu%20600056!5e0!3m2!1sen!2sin!4v1736022000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>

            <a
              href="https://www.google.com/maps/place/8%2F42+Mount+Poonamallee+Rd,+Iyyappanthangal,+Chennai,+Tamil+Nadu+600056"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 mt-5 font-semibold text-gray-900 transition rounded-lg"
              style={{ backgroundColor: "#FF4C00" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#e04300")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#FF4C00")
              }
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed p-3 text-black transition rounded-full shadow-lg bottom-6 right-6"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e04300")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FF4C00")
          }
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}