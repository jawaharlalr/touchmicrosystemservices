import React from "react";

export default function ExtraInfo() {
  return (
    <section className="py-16 bg-[#111827]">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold" style={{ color: "#FF4C00" }}>
          Serving Chennai for Over Years
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg text-white">
          At TOUCH MICRO SYSTEMS SERVICES, we pride ourselves on delivering top-quality electronics services with good customer support.
        </p>
        <p className="max-w-4xl mx-auto mb-12 text-gray-200">
          Whether you’re an individual looking to repair your phone or a business in need of ongoing IT support, we are your go-to partner for all things electronics.
        </p>
        <a
          href="/about-us"
          className="px-8 py-3 font-semibold text-white transition-colors duration-300 rounded-lg"
          style={{ backgroundColor: "#FF4C00" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e04300")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF4C00")}
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
}
