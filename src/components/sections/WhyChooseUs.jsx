import React from "react";
import { Wrench, Monitor, Network, ShieldCheck, Clock, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Wrench,
      title: "Expert Repairs",
      desc: "Our skilled technicians handle everything from Laptop, Desktop and other products with precision and care, using genuine parts for durability."
    },
    {
      icon: Monitor,
      title: "Fast Device Setup",
      desc: "Get your new devices up and running quickly with our hassle-free installation, configuration, and optimization services."
    },
    {
      icon: Network,
      title: "Custom Tech Solutions",
      desc: "We provide tailored hardware and software solutions to suit your business and personal needs, ensuring maximum efficiency."
    },
    {
      icon: ShieldCheck,
      title: "Warranty Assurance",
      desc: "All repairs come with a service warranty for peace of mind, so you can trust the quality of our work."
    },
    {
      icon: Clock,
      title: "Same-Day Service",
      desc: "We value your time. Many of our services are available with same-day completion for your convenience."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our customer service team is available around the clock to assist with any queries or emergencies."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#111827]">
      <div className="px-4 mx-auto text-center sm:px-6 max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-2 gap-4 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-3 text-center transition border rounded-lg shadow-md sm:p-6 backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105 border-white/20"
            >
              <Icon className="w-12 h-12 mb-3 text-[#FF4C00] sm:mb-4" />
              <h3 className="mb-1 text-base font-semibold text-white sm:mb-2 sm:text-lg">
                {title}
              </h3>
              <p className="text-xs text-gray-200 sm:text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
