import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F3FF] flex flex-col items-center px-6 text-center pb-20">
      {/* Hero Section */}
      <h1
        data-aos="fade-up"
        className="text-5xl md:text-6xl font-bold text-purple-700 leading-tight mb-4 mt-20"
      >
        Bringing Care Closer to Clinics 💜
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-lg md:text-xl text-gray-700 max-w-xl mb-8"
      >
        Sehati helps your clinic deliver better care, streamline operations, and
        grow — all in one elegant platform.
      </p>
      <button
        data-aos="zoom-in"
        data-aos-delay="200"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
      >
        Book a Demo
      </button>

      {/* Hero Image */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="mt-12 w-full max-w-4xl"
      >
        <img
          src="https://via.placeholder.com/800x400?text=Sehati+Dashboard+Preview"
          alt="Dashboard Preview"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Features Section */}
      <div className="mt-20 max-w-6xl w-full">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-purple-700 mb-10 text-center"
        >
          What Sehati Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {[
            {
              title: "Appointments",
              desc: "Never miss a moment of care with smart scheduling.",
              icon: "📅",
            },
            {
              title: "Patients",
              desc: "Know your patients like family, instantly.",
              icon: "🧑‍⚕️",
            },
            {
              title: "Doctors",
              desc: "Support your team with centralized insights.",
              icon: "👨‍⚕️",
            },
            {
              title: "Dashboard",
              desc: "Track what truly matters in real time.",
              icon: "📊",
            },
            {
              title: "Settings",
              desc: "Make it yours with flexible configuration.",
              icon: "⚙️",
            },
          ].map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-left border border-gray-100"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div data-aos="fade-right" className="mt-24 w-full max-w-4xl text-center">
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <div className="flex flex-col items-center space-y-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Happy Client"
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
            />
            <p className="text-lg italic text-gray-700 max-w-2xl">
              “Sehati transformed the way we manage our clinic. Everything is
              faster, clearer, and my team feels empowered. I can't imagine
              going back.”
            </p>
            <h4 className="font-semibold text-purple-700 mt-2">
              Dr. Lina Al-Harbi
            </h4>
            <span className="text-sm text-gray-500">
              Clinic Administrator, Riyadh
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Preview Section */}
      <div
        data-aos="zoom-in-up"
        className="mt-24 w-full max-w-3xl text-center px-4"
      >
        <div className="bg-gradient-to-br from-purple-100 via-white to-purple-50 border border-purple-200 shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Simple Pricing, Big Impact
          </h2>
          <p className="text-gray-600 mb-6">
            Our pricing plans are crafted to suit clinics of every size.
            Transparent, flexible, and launching very soon.
          </p>
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
            Plans coming in Summer 2025 ☀️
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-24 w-full bg-purple-50 border-t border-purple-200 text-gray-600 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="text-sm">
            © {new Date().getFullYear()} Sehati. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/terms" className="hover:text-purple-600 transition">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-purple-600 transition">
              Privacy Policy
            </a>
            <a href="/contact" className="hover:text-purple-600 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
