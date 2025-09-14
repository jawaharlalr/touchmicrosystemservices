import { Wrench, Monitor, Cpu, ArrowUp, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

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

  return (
    <div
      className="relative min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/herosection.webp')" }}
    >
      
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Page Content */}
      <div className="relative max-w-6xl px-6 pt-32 pb-16 mx-auto text-center text-white">
        {/* Home Button */}
        <Link
          to="/"
          className="absolute flex items-center gap-2 px-3 py-2 font-semibold text-black transition rounded-lg shadow-lg top-20 right-6"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04300")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF4C00")}
        >
          <Home size={18} />
          Home
        </Link>

        <h2 className="mb-4 text-4xl font-bold">About Us</h2>
        <p className="max-w-2xl mx-auto mb-12">
          For over a decade,{" "}
          <span className="font-semibold" style={{ color: "#FF4C00" }}>
            TOUCH MICRO SYSTEMS SERVICES
          </span>{" "}
          has been a trusted name in electronics repair, setup, and custom tech
          solutions in Chennai. Our experienced team combines expertise with
          genuine customer care.
        </p>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          <div className="p-8 transition duration-300 bg-white shadow-lg bg-opacity-10 backdrop-blur-md rounded-2xl hover:bg-opacity-20">
            <Wrench className="mx-auto" size={48} style={{ color: "#FF4C00" }} />
            <h3 className="mt-6 mb-2 text-lg font-semibold">Expert Repairs</h3>
            <p className="text-sm text-gray-200">
              From Laptop and Desktop to industrial electronics, we handle
              repairs with precision tools and quality components.
            </p>
          </div>

          <div className="p-8 transition duration-300 bg-white shadow-lg bg-opacity-10 backdrop-blur-md rounded-2xl hover:bg-opacity-20">
            <Monitor className="mx-auto" size={48} style={{ color: "#FF4C00" }} />
            <h3 className="mt-6 mb-2 text-lg font-semibold">Device Setup</h3>
            <p className="text-sm text-gray-200">
              We set up and optimize smart TVs, networks, and automation systems
              for peak performance.
            </p>
          </div>

          <div className="p-8 transition duration-300 bg-white shadow-lg bg-opacity-10 backdrop-blur-md rounded-2xl hover:bg-opacity-20">
            <Cpu className="mx-auto" size={48} style={{ color: "#FF4C00" }} />
            <h3 className="mt-6 mb-2 text-lg font-semibold">Tech Solutions</h3>
            <p className="text-sm text-gray-200">
              Need custom software, upgrades, or integrated systems? We deliver
              tailored solutions for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed p-3 text-black rounded-full shadow-lg bottom-6 right-6"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04300")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF4C00")}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}