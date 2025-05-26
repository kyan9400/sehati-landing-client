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
      {/* Why Sehati Section */}
      <div
        className="mt-24 max-w-6xl w-full text-center px-4"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          Why Choose Sehati?
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          More than just clinic software — Sehati is your partner in delivering
          excellent care, empowering your staff, and growing your practice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            data-aos="zoom-in"
          >
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Smart & Intuitive
            </h3>
            <p className="text-sm text-gray-600">
              Designed for ease of use by doctors and staff with zero technical
              background.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fully Secure
            </h3>
            <p className="text-sm text-gray-600">
              All data is encrypted and stored with the highest standards of
              privacy and security.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="text-3xl mb-3">🇸🇦</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Built for Arabic Clinics
            </h3>
            <p className="text-sm text-gray-600">
              Arabic-first UI, RTL support, and localized for clinics in the
              Gulf and MENA region.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Results-Driven
            </h3>
            <p className="text-sm text-gray-600">
              Track KPIs, monitor patient flow, and make data-driven decisions
              in real time.
            </p>
          </div>
        </div>
      </div>
      {/* In-Depth Features Section */}
      <div
        className="mt-24 max-w-6xl w-full text-center px-4"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          Everything Your Clinic Needs
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          From front-desk scheduling to real-time dashboards — Sehati is the
          all-in-one solution for modern clinics.
        </p>

        <div className="space-y-16">
          {/* Appointments */}
          <div
            className="flex flex-col lg:flex-row items-center gap-10"
            data-aos="fade-right"
          >
            <div className="lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">
                📅 Appointments
              </h3>
              <p className="text-gray-600 mb-3">
                Smart scheduling that prevents overlaps, sends reminders, and
                keeps your clinic running smoothly.
              </p>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Drag-and-drop calendar</li>
                <li>SMS/email reminders</li>
                <li>Doctor-specific availability</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/500x300?text=Appointment+Scheduling"
                alt="Appointments Screenshot"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Patients */}
          <div
            className="flex flex-col-reverse lg:flex-row items-center gap-10"
            data-aos="fade-left"
          >
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/500x300?text=Patient+Records"
                alt="Patients Screenshot"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">
                🧑‍⚕️ Patient Profiles
              </h3>
              <p className="text-gray-600 mb-3">
                View full patient history, medical notes, files, and visit
                summaries — all in one place.
              </p>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Complete health records</li>
                <li>File attachments & lab reports</li>
                <li>Visit history timeline</li>
              </ul>
            </div>
          </div>

          {/* Doctors */}
          <div
            className="flex flex-col lg:flex-row items-center gap-10"
            data-aos="fade-right"
          >
            <div className="lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">
                👨‍⚕️ Doctor Dashboard
              </h3>
              <p className="text-gray-600 mb-3">
                Each doctor gets a secure dashboard with upcoming visits, tasks,
                and clinical notes.
              </p>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Role-based access</li>
                <li>Private & shared notes</li>
                <li>Daily schedule overview</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/500x300?text=Doctor+Dashboard"
                alt="Doctor View"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Dashboard */}
          <div
            className="flex flex-col-reverse lg:flex-row items-center gap-10"
            data-aos="fade-left"
          >
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/500x300?text=Analytics+Dashboard"
                alt="Admin Dashboard"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">
                📊 Admin Dashboard
              </h3>
              <p className="text-gray-600 mb-3">
                Real-time insights on clinic performance: visits, revenue,
                no-shows, and more.
              </p>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Live statistics</li>
                <li>Downloadable reports</li>
                <li>Visual KPIs</li>
              </ul>
            </div>
          </div>

          {/* Settings */}
          <div
            className="flex flex-col lg:flex-row items-center gap-10"
            data-aos="fade-right"
          >
            <div className="lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-3">
                ⚙️ Custom Settings
              </h3>
              <p className="text-gray-600 mb-3">
                Make Sehati fit your clinic’s exact needs — language, access
                levels, branding.
              </p>
              <ul className="list-disc ml-5 text-gray-600">
                <li>Arabic + English support</li>
                <li>Theme + logo branding</li>
                <li>Role-based permissions</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/500x300?text=Settings+Panel"
                alt="Settings"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* How It Works Section */}
      <div
        className="mt-24 max-w-6xl w-full px-4 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          How Sehati Works
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Get started in minutes and empower your clinic with a complete digital
          system.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div
            className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <div className="text-4xl mb-3">📝</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Create Your Clinic Account
            </h4>
            <p className="text-sm text-gray-600">
              Sign up and set up your clinic’s basic info, working hours, and
              contact details.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-4xl mb-3">👨‍⚕️</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Add Your Staff & Doctors
            </h4>
            <p className="text-sm text-gray-600">
              Invite doctors, assign roles, and customize permissions as needed.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-4xl mb-3">📋</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Start Managing Patients
            </h4>
            <p className="text-sm text-gray-600">
              Book appointments, enter medical data, upload reports, and more.
            </p>
          </div>

          {/* Step 4 */}
          <div
            className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-4xl mb-3">📈</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Track Your Growth
            </h4>
            <p className="text-sm text-gray-600">
              Use live dashboards to measure visits, performance, revenue, and
              engagement.
            </p>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div
        className="mt-24 max-w-6xl w-full px-4 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Clinics across the region are transforming their workflow with Sehati.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 overflow-x-auto snap-x">
          {/* Testimonial 1 */}
          <div
            className="bg-white rounded-2xl p-6 shadow-md min-w-[300px] snap-start"
            data-aos="fade-right"
          >
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Client"
              className="w-14 h-14 rounded-full mx-auto mb-3 border-2 border-purple-500"
            />
            <p className="italic text-gray-700 mb-3">
              “Sehati gave us full control over our clinic’s operations.
              Everything is in one place — it's life changing.”
            </p>
            <h4 className="font-semibold text-purple-700">Dr. Lina Al-Harbi</h4>
            <p className="text-sm text-gray-500">Clinic Owner, Riyadh</p>
          </div>

          {/* Testimonial 2 */}
          <div
            className="bg-white rounded-2xl p-6 shadow-md min-w-[300px] snap-start"
            data-aos="fade-up"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Client"
              className="w-14 h-14 rounded-full mx-auto mb-3 border-2 border-purple-500"
            />
            <p className="italic text-gray-700 mb-3">
              “My staff learned it within days. It's intuitive, reliable, and
              the support is fantastic.”
            </p>
            <h4 className="font-semibold text-purple-700">
              Dr. Ahmed Al-Nasseri
            </h4>
            <p className="text-sm text-gray-500">Dental Center Director</p>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-white rounded-2xl p-6 shadow-md min-w-[300px] snap-start"
            data-aos="fade-left"
          >
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Client"
              className="w-14 h-14 rounded-full mx-auto mb-3 border-2 border-purple-500"
            />
            <p className="italic text-gray-700 mb-3">
              “The dashboard lets me track KPIs in real time. I feel in control
              like never before.”
            </p>
            <h4 className="font-semibold text-purple-700">
              Dr. Sara Al-Rashid
            </h4>
            <p className="text-sm text-gray-500">Medical Director, Jeddah</p>
          </div>
        </div>
      </div>
      {/* Trusted by Clinics Section */}
      <div
        className="mt-24 max-w-6xl w-full px-4 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          Trusted Across the Region
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Sehati is trusted by over{" "}
          <strong className="text-purple-700">150+ clinics</strong> across Saudi
          Arabia and the Gulf.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
          {[
            "Al Hayat Clinic",
            "Riyadh Dental Care",
            "Noor Medical Center",
            "Shifa Plus",
            "Al Waha Hospital",
            "Najd Health Group",
            "Elite Derma",
            "Vision Eye Clinic",
          ].map((name, index) => (
            <div
              key={index}
              className="bg-white border border-purple-100 shadow-sm rounded-lg py-4 px-2 text-center hover:shadow-md transition text-gray-800 text-sm font-medium"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      {/* Security & Compliance Section */}
      <div
        className="mt-24 max-w-6xl w-full px-4 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          Your Data. Fully Protected.
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          We understand that privacy and compliance are non-negotiable. Sehati
          is built to meet the highest healthcare data standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-white rounded-xl shadow-md p-6 text-left border border-purple-100"
            data-aos="fade-up"
          >
            <div className="text-3xl mb-3">🔐</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              End-to-End Encryption
            </h4>
            <p className="text-gray-600 text-sm">
              All patient data is encrypted in transit and at rest using AES-256
              and SSL/TLS.
            </p>
          </div>

          <div
            className="bg-white rounded-xl shadow-md p-6 text-left border border-purple-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-3xl mb-3">📜</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Regulatory Compliant
            </h4>
            <p className="text-gray-600 text-sm">
              Sehati aligns with MOH regulations and global standards like HIPAA
              and GDPR.
            </p>
          </div>

          <div
            className="bg-white rounded-xl shadow-md p-6 text-left border border-purple-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Role-Based Access
            </h4>
            <p className="text-gray-600 text-sm">
              Secure role management to ensure only the right users access
              sensitive data.
            </p>
          </div>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-4"
          data-aos="zoom-in-up"
        >
          {[
            "ISO 27001 Ready",
            "HIPAA-Aligned",
            "Data Hosted in KSA",
            "24/7 Monitoring",
          ].map((badge, index) => (
            <div
              key={index}
              className="bg-purple-100 text-purple-700 text-sm font-medium px-4 py-2 rounded-full border border-purple-300"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
      {/* Pricing Section */}
      <div
        className="mt-24 max-w-6xl w-full px-4 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          Simple Plans for Every Clinic
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Whether you're a single-doctor clinic or a growing medical center —
          Sehati has the right plan for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic */}
          <div
            className="bg-white border border-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Basic
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              For solo practices or small clinics
            </p>
            <ul className="text-sm text-gray-600 mb-6 list-disc list-inside text-left">
              <li>Appointments & Calendar</li>
              <li>Patient Profiles</li>
              <li>Email Reminders</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Book a Demo
            </button>
          </div>

          {/* Standard */}
          <div
            className="bg-purple-50 border-2 border-purple-600 rounded-2xl p-6 shadow-lg transform scale-105"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              Standard
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Best for growing clinics
            </p>
            <ul className="text-sm text-gray-700 mb-6 list-disc list-inside text-left">
              <li>All Basic Features</li>
              <li>Multi-doctor Support</li>
              <li>Advanced Analytics</li>
              <li>Custom Branding</li>
            </ul>
            <button className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800">
              Book a Demo
            </button>
          </div>

          {/* Premium */}
          <div
            className="bg-white border border-purple-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              Premium
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              For large centers and enterprises
            </p>
            <ul className="text-sm text-gray-600 mb-6 list-disc list-inside text-left">
              <li>All Standard Features</li>
              <li>Priority Support</li>
              <li>Dedicated Account Manager</li>
              <li>API Access</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div
        className="mt-24 max-w-6xl w-full px-4 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-purple-700 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          Have questions? We’ve answered the most common ones below.
        </p>

        <div className="text-left space-y-6">
          {/* Question 1 */}
          <div
            className="bg-white border-l-4 border-purple-600 p-5 rounded-md shadow"
            data-aos="fade-up"
          >
            <h4 className="font-semibold text-purple-700 mb-1">
              Is Sehati available in Arabic?
            </h4>
            <p className="text-gray-600 text-sm">
              Yes! Sehati is fully localized for Arabic-speaking users and
              supports both RTL and LTR layouts.
            </p>
          </div>

          {/* Question 2 */}
          <div
            className="bg-white border-l-4 border-purple-600 p-5 rounded-md shadow"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="font-semibold text-purple-700 mb-1">
              Do I need technical experience to use Sehati?
            </h4>
            <p className="text-gray-600 text-sm">
              Not at all. Sehati is designed for ease of use — no technical
              knowledge required. Your team will be up and running in minutes.
            </p>
          </div>

          {/* Question 3 */}
          <div
            className="bg-white border-l-4 border-purple-600 p-5 rounded-md shadow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="font-semibold text-purple-700 mb-1">
              Can I manage multiple branches?
            </h4>
            <p className="text-gray-600 text-sm">
              Yes. The system supports multiple branches with separate
              dashboards, staff, and performance tracking.
            </p>
          </div>

          {/* Question 4 */}
          <div
            className="bg-white border-l-4 border-purple-600 p-5 rounded-md shadow"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="font-semibold text-purple-700 mb-1">
              Is patient data secure?
            </h4>
            <p className="text-gray-600 text-sm">
              Absolutely. We follow strict data protection protocols, including
              encryption, role-based access, and full compliance with regional
              standards.
            </p>
          </div>

          {/* Question 5 */}
          <div
            className="bg-white border-l-4 border-purple-600 p-5 rounded-md shadow"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="font-semibold text-purple-700 mb-1">
              Do you offer support or training?
            </h4>
            <p className="text-gray-600 text-sm">
              Yes. Our support team is available to assist you anytime. We also
              offer onboarding and training upon request.
            </p>
          </div>
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

      {/* Final CTA Section */}
      <div
        className="mt-24 w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-20 px-6 text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Empower Your Clinic?
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Start delivering smarter care, saving time, and building stronger
          patient relationships — all with Sehati.
        </p>
        <button className="bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 transition">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default LandingPage;