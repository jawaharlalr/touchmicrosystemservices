import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "bg-[#1E1E1E] bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" onClick={scrollToTop} className="flex items-center">
          <img
            src="/images/header.png"
            alt="Touch Micro System Services Logo"
            className="object-contain -my-8 transition-transform duration-300 scale-110 bg-transparent h-28 hover:scale-120"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="absolute hidden space-x-10 transform -translate-x-1/2 md:flex left-1/2">
          <button
            onClick={() => scrollToSection("services")}
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("accessories")}
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
          >
            Accessories
          </button>
          <Link
            to="/about-us"
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
            onClick={scrollToTop}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="text-[#F0F0F0] hover:text-[#FF4C00] transition-colors"
            onClick={scrollToTop}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-[#FF4C00] rounded-lg"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-[#1E1E1E] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button inside menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#F0F0F0] hover:text-[#FF4C00] focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center pt-10 space-y-6">
          <button
            onClick={() => scrollToSection("services")}
            className="w-full text-center text-lg text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="w-full text-center text-lg text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("accessories")}
            className="w-full text-center text-lg text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
          >
            Accessories
          </button>
          <Link
            to="/about-us"
            className="w-full text-center text-lg text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
            onClick={scrollToTop}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="w-full text-center text-lg text-[#F0F0F0] hover:text-[#FF4C00] py-2 transition-colors"
            onClick={scrollToTop}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
