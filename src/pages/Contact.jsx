import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Laptop Chip Level Service",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Read query params or hash if directed from another section
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category") || params.get("service") || params.get("product");
    if (categoryParam) {
      setFormData((prev) => ({ ...prev, serviceType: categoryParam }));
    }

    if (location.hash === "#enquiry") {
      const el = document.getElementById("enquiry");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
      }
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Touch Micro Systems!%0A%0A*Enquiry Category:* ${encodeURIComponent(formData.serviceType)}%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone/WhatsApp:* ${encodeURIComponent(formData.phone)}%0A*Requirement Details:* ${encodeURIComponent(formData.message || "Requesting quotation/consultation")}`;
    window.open(`https://wa.me/919790741494?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-gray-900 font-sans pb-16">
      
      {/* SEO Tags */}
      <Helmet>
        <title>Contact Us | Touch Micro Systems - Chennai Computer &amp; Electronics Service</title>
        <meta
          name="description"
          content="Get in touch with Touch Micro Systems for expert electronics repair, embedded systems, and device setup in Iyyappanthangal, Chennai. Call, email, or visit our lab."
        />
        <meta
          name="keywords"
          content="Contact Touch Micro Systems, electronics repair Chennai, laptop service Iyyappanthangal, computer repair Chennai"
        />
        <meta property="og:title" content="Contact Us | Touch Micro Systems" />
        <meta
          property="og:description"
          content="Need assistance with electronics repair, hardware diagnostics, or embedded systems? Contact Touch Micro Systems in Chennai today."
        />
        <meta property="og:image" content="https://www.touchmicrosystemservices.in/images/header.png" />
        <meta property="og:url" content="https://touchmicrosystems.in/contact-us" />
      </Helmet>

      {/* Header Banner */}
      <div className="relative pt-8 sm:pt-10 pb-12 bg-white border-b border-gray-300">
        <div className="max-w-5xl px-4 sm:px-6 mx-auto">
          
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors min-h-[36px]"
            >
              <span>&larr; Back to Home</span>
            </Link>
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              Prompt Support Guaranteed
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block px-3.5 py-1 mb-3 border rounded-full border-orange-200 bg-orange-50">
              <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">Support &amp; Lab Center</span>
            </div>
            
            <h1 className="mb-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              Get in <span className="text-orange-600">Touch</span>
            </h1>
            
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-8">
              Reach our technical engineers for embedded development, chip-level diagnostics, component repairs, and hardware requirements.
            </p>

            {/* 11. MOBILE-FRIENDLY PRIMARY ACTIONS: Call, WhatsApp, Email, Directions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-left">
              
              {/* Call Now */}
              <a
                href="tel:+919790741494"
                className="min-h-[48px] flex items-center gap-2.5 p-3 rounded-xl bg-orange-50/80 border border-orange-200 text-orange-800 hover:bg-orange-100 transition-colors shadow-xs"
              >
                <div className="p-1.5 rounded-lg bg-orange-500 text-white flex-shrink-0">
                  <Phone size={15} />
                </div>
                <div>
                  <span className="block text-[10px] font-medium text-orange-700 uppercase">Direct Call</span>
                  <span className="text-xs font-bold text-gray-900">Call Now</span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919790741494?text=Hello%20Touch%20Micro%20Systems!"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-colors shadow-xs"
              >
                <div className="p-1.5 rounded-lg bg-[#25D366] text-white flex-shrink-0">
                  <FaWhatsapp size={15} />
                </div>
                <div>
                  <span className="block text-[10px] font-medium text-emerald-700 uppercase">Instant Chat</span>
                  <span className="text-xs font-bold text-gray-900">WhatsApp</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:keepntouchmicro@gmail.com"
                className="min-h-[48px] flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-800 hover:bg-blue-100 transition-colors shadow-xs"
              >
                <div className="p-1.5 rounded-lg bg-blue-600 text-white flex-shrink-0">
                  <Mail size={15} />
                </div>
                <div>
                  <span className="block text-[10px] font-medium text-blue-700 uppercase">Inquiries</span>
                  <span className="text-xs font-bold text-gray-900">Email Us</span>
                </div>
              </a>

              {/* Get Directions */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=8%2F42+Mount+Poonamallee+Rd+Ramachandran+Nagar+Iyyappanthangal+Chennai+Tamil+Nadu+600056"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] flex items-center gap-2.5 p-3 rounded-xl bg-slate-100 border border-gray-300 text-gray-800 hover:bg-gray-200 transition-colors shadow-xs"
              >
                <div className="p-1.5 rounded-lg bg-gray-800 text-white flex-shrink-0">
                  <Navigation size={15} />
                </div>
                <div>
                  <span className="block text-[10px] font-medium text-gray-600 uppercase">Navigation</span>
                  <span className="text-xs font-bold text-gray-900">Get Directions</span>
                </div>
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl px-4 sm:px-6 mx-auto pt-10">
        
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* LEFT: Contact Cards & Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Contact Info Grid */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              
              {/* Address */}
              <div className="p-4 sm:p-5 bg-white border border-gray-300 rounded-2xl shadow-xs">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <MapPin size={20} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Visit Our Lab</h3>
                <address className="text-xs not-italic leading-relaxed text-gray-600">
                  8/42, Mount Poonamallee Road, Ramachandran Nagar, Iyyappanthangal, Chennai - 600056
                </address>
              </div>

              {/* Call Support */}
              <div className="p-4 sm:p-5 bg-white border border-gray-300 rounded-2xl shadow-xs">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <Phone size={20} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Call Support</h3>
                <div className="flex flex-col text-xs text-gray-600 space-y-0.5">
                  <a href="tel:+919790741494" className="font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                    +91 9790741494
                  </a>
                  <a href="tel:+914446065723" className="hover:text-orange-600 transition-colors">
                    044 46065723
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 sm:p-5 bg-white border border-gray-300 rounded-2xl shadow-xs">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <Mail size={20} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Email Inquiries</h3>
                <a href="mailto:keepntouchmicro@gmail.com" className="text-xs text-gray-600 hover:text-orange-600 transition-colors truncate block">
                  keepntouchmicro@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div className="p-4 sm:p-5 bg-white border border-gray-300 rounded-2xl shadow-xs">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <Clock size={20} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Operating Hours</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Monday &ndash; Sunday<br />
                  <span className="font-semibold text-gray-900">8:30 AM &ndash; 7:30 PM</span>
                </p>
              </div>

            </div>

            {/* 6. GET A QUOTE: Direct Enquiry Flow */}
            <div id="enquiry" className="p-5 sm:p-7 bg-white border border-gray-300 rounded-2xl shadow-xs scroll-mt-28">
              <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-orange-600 uppercase">
                <MessageSquare size={14} />
                <span>Instant Consultation Flow</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
                Send a Service or Quotation Request
              </h3>
              <p className="text-xs text-gray-600 mb-5">
                Provide your requirement details below to send an instant pre-formatted enquiry directly to our engineering team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Requirement category */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Requirement Category *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                  >
                    <option value="Embedded Systems / IoT Development">Embedded Systems &amp; IoT Development</option>
                    <option value="Laptop Chip Level Service">Laptop Chip Level Service</option>
                    <option value="Desktop Service / Workstation Build">Desktop Service &amp; Workstations</option>
                    <option value="Data Recovery Service">Data Recovery Service</option>
                    <option value="Printer Service">Printer Service</option>
                    <option value="CCTV Installation / Surveillance">CCTV &amp; Surveillance Systems</option>
                    <option value="Hardware / Spares Purchase Inquiry">Hardware &amp; Spares Purchase Inquiry</option>
                    <option value="General Technical Consultation">General Technical Consultation</option>
                  </select>
                </div>

                {/* 2. Name & Phone */}
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Requirement / Message */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Requirement / Device Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the fault, model number, device specifications, or project details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                  />
                </div>

                {/* 4. Submit & WhatsApp button */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-xs transition-colors"
                  >
                    <span>Submit via WhatsApp</span>
                    <Send size={15} />
                  </button>

                  <a
                    href="https://wa.me/919790741494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors"
                  >
                    <FaWhatsapp size={16} className="text-[#25D366]" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>

                {submitted && (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 pt-2">
                    <CheckCircle2 size={15} />
                    WhatsApp chat opened! Our technicians will attend to your request shortly.
                  </p>
                )}
              </form>
            </div>

          </div>

          {/* RIGHT: Map & Location Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-2.5 bg-white border border-gray-300 rounded-2xl shadow-xs overflow-hidden">
              <iframe
                title="Touch Micro Systems Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.890596023022!2d80.131796!3d13.037587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f8b18b16b9%3A0x1234567890abcdef!2s8%2F42%20Mount%20Poonamallee%20Rd%2C%20Iyyappanthangal%2C%20Chennai%2C%20Tamil%20Nadu%20600056!5e0!3m2!1sen!2sin!4v1736022000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-xl"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/8%2F42+Mount+Poonamallee+Rd,+Iyyappanthangal,+Chennai,+Tamil+Nadu+600056"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center gap-2 w-full py-2.5 text-xs sm:text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-xs transition-colors"
            >
              <MapPin size={16} />
              <span>Open in Google Maps</span>
            </a>

            <div className="p-4 bg-white border border-gray-300 rounded-2xl text-xs text-gray-600 space-y-1.5">
              <p className="font-bold text-gray-900">Landmarks &amp; Transit:</p>
              <p>Located on Mount Poonamallee Road near Ramachandran Nagar bus stop, easily accessible from Porur, DLF IT Park corridor, and Kattupakkam.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}