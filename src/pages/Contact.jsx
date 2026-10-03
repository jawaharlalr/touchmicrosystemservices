import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Laptop Service",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate pre-filled WhatsApp message
    const text = `Hello Touch Micro Systems!%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.serviceType)}%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/919790741494?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-gray-900 font-sans pb-20">
      
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
      <div className="relative pt-12 pb-16 bg-white border-b border-gray-300">
        <div className="max-w-5xl px-4 sm:px-6 mx-auto">
          
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <span>&larr; Back to Home</span>
            </Link>
            <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
              Prompt Support Guaranteed
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-block px-3.5 py-1 mb-4 border rounded-full border-orange-200 bg-orange-50">
              <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">Support Center</span>
            </div>
            
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Get in <span className="text-orange-600">Touch</span>
            </h1>
            
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              Ready to upgrade your system or need a precision component-level repair? Our technical team is standing by to help.
            </p>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl px-4 sm:px-6 mx-auto pt-14">
        
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* LEFT: Contact Cards & Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Contact Info Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              
              {/* Address */}
              <div className="p-6 bg-white border border-gray-300 rounded-2xl shadow-xs">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <MapPin size={22} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Visit Our Lab</h3>
                <address className="text-xs not-italic leading-relaxed text-gray-600">
                  8/42, Mount Poonamallee Road, Ramachandran Nagar, Iyyappanthangal, Chennai - 600056
                </address>
              </div>

              {/* Call Support */}
              <div className="p-6 bg-white border border-gray-300 rounded-2xl shadow-xs">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <Phone size={22} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Call Support</h3>
                <div className="flex flex-col text-xs text-gray-600 space-y-1">
                  <a href="tel:+919790741494" className="font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                    +91 9790741494
                  </a>
                  <a href="tel:+914446065723" className="hover:text-orange-600 transition-colors">
                    044 46065723
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 bg-white border border-gray-300 rounded-2xl shadow-xs">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <Mail size={22} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Email Inquiries</h3>
                <a href="mailto:keepntouchmicro@gmail.com" className="text-xs text-gray-600 hover:text-orange-600 transition-colors truncate block">
                  keepntouchmicro@gmail.com
                </a>
              </div>

              {/* Hours */}
              <div className="p-6 bg-white border border-gray-300 rounded-2xl shadow-xs">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-600">
                  <Clock size={22} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">Operating Hours</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Monday &ndash; Sunday<br />
                  <span className="font-semibold text-gray-900">8:30 AM &ndash; 7:30 PM</span>
                </p>
              </div>

            </div>

            {/* Direct Quote Request Form */}
            <div className="p-7 bg-white border border-gray-300 rounded-2xl shadow-xs">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send an Instant Service Request</h3>
              <p className="text-xs text-gray-600 mb-6">
                Fill in your details to directly send your service or project requirement to our engineers.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Required Service / Product</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                  >
                    <option value="Laptop Chip Level Service">Laptop Chip Level Service</option>
                    <option value="Desktop Service / Upgrade">Desktop Service / Upgrade</option>
                    <option value="Embedded Systems / IoT Development">Embedded Systems / IoT Development</option>
                    <option value="Printer Service">Printer Service</option>
                    <option value="CCTV Installation / Maintenance">CCTV Installation / Maintenance</option>
                    <option value="Data Recovery Service">Data Recovery Service</option>
                    <option value="Hardware Purchase Inquiry">Hardware Purchase Inquiry</option>
                    <option value="General Technical Consultation">General Technical Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Device or Project Details</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the issue, model number, or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-xs transition-colors"
                  >
                    <span>Submit via WhatsApp</span>
                    <Send size={15} />
                  </button>

                  <a
                    href="https://wa.me/919790741494"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors"
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
          <div className="lg:col-span-5 space-y-5">
            <div className="p-3 bg-white border border-gray-300 rounded-2xl shadow-xs overflow-hidden">
              <iframe
                title="Touch Micro Systems Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.890596023022!2d80.131796!3d13.037587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260f8b18b16b9%3A0x1234567890abcdef!2s8%2F42%20Mount%20Poonamallee%20Rd%2C%20Iyyappanthangal%2C%20Chennai%2C%20Tamil%20Nadu%20600056!5e0!3m2!1sen!2sin!4v1736022000000!5m2!1sen!2sin"
                width="100%"
                height="380"
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
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-xs transition-colors"
            >
              <MapPin size={17} />
              <span>Open in Google Maps</span>
            </a>

            <div className="p-5 bg-white border border-gray-300 rounded-2xl text-xs text-gray-600 space-y-2">
              <p className="font-semibold text-gray-900">Landmarks &amp; Directions:</p>
              <p>Located on Mount Poonamallee Road, near Ramachandran Nagar bus stop, easily accessible from Porur, DLF IT Park, and Kattupakkam.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}