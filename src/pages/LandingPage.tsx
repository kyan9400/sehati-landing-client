import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CalendarDaysIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  LockClosedIcon,
  ArrowTrendingUpIcon,
  PencilSquareIcon,
  UserPlusIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  KeyIcon,
  CheckBadgeIcon,
  BuildingOffice2Icon,
  Bars3Icon, // Added for hamburger menu
  XMarkIcon, // Added for close icon
} from "@heroicons/react/24/outline";

// Navbar Component (with Hamburger Menu)
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#why-sehati", label: "Why Sehati" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-bold text-purple-700">
              Sehati 💜
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 transition px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book-demo-final"
              className="ml-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-full shadow-md transition duration-300 text-sm"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-600 hover:text-purple-700 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                className="text-gray-700 hover:bg-purple-100 hover:text-purple-700 block px-3 py-2 rounded-md text-base font-medium transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book-demo-final"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              className="mt-2 bg-purple-600 hover:bg-purple-700 text-white block w-full text-center font-semibold py-2 px-5 rounded-md shadow-md transition duration-300 text-base"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const LandingPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    clinicName: "",
  });

  const handleDemoFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDemoForm({ ...demoForm, [e.target.name]: e.target.value });
  };

  const handleDemoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Demo form submitted:", demoForm);
    alert("Thank you! We'll be in touch shortly.");
    setDemoForm({ name: "", email: "", clinicName: "" });
  };

  const featuresList = [
    {
      title: "Smart Appointment Scheduling",
      desc: "Reduce no-shows and optimize your calendar with intelligent scheduling, automated reminders, and conflict prevention.",
      icon: <CalendarDaysIcon className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Comprehensive Patient Profiles",
      desc: "Access complete patient histories, notes, and documents instantly for more informed and personalized care.",
      icon: <UserGroupIcon className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Doctor & Staff Management",
      desc: "Empower your medical team with dedicated dashboards, streamlined workflows, and role-based access.",
      icon: <BriefcaseIcon className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Insightful Analytics Dashboard",
      desc: "Make data-driven decisions by tracking key clinic performance indicators in real-time.",
      icon: <ChartPieIcon className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Customizable Settings",
      desc: "Tailor Sehati to your clinic's specific needs with flexible configurations for language, branding, and more.",
      icon: <Cog6ToothIcon className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Billing & Invoicing",
      desc: "Streamline your financial operations with integrated billing, invoicing, and payment tracking.",
      icon: <DocumentTextIcon className="w-10 h-10 text-purple-600" />,
    },
  ];

  const whySehatiPoints = [
    {
      title: "Smart & Intuitive",
      desc: "Designed for ease of use by all staff, regardless of technical background, ensuring quick adoption.",
      icon: <LightBulbIcon className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Fully Secure & Compliant",
      desc: "Your patient data is protected with bank-grade encryption and adherence to regional data privacy laws.",
      icon: <LockClosedIcon className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Arabic-First Design",
      desc: "Seamlessly switch between Arabic and English with full RTL support, tailored for clinics in the MENA region.",
      icon: <span className="text-3xl">🇸🇦</span>,
    },
    {
      title: "Results-Driven Growth",
      desc: "Leverage powerful analytics to optimize operations, enhance patient satisfaction, and grow your practice.",
      icon: <ArrowTrendingUpIcon className="w-8 h-8 text-purple-600" />,
    },
  ];

  const howItWorksSteps = [
    {
      title: "Sign Up & Configure",
      desc: "Create your clinic account and set up essential details like services, staff, and working hours in minutes.",
      icon: <PencilSquareIcon className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Onboard Your Team",
      desc: "Invite doctors and staff, assign roles, and customize permissions to fit your clinic's structure.",
      icon: <UserPlusIcon className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Manage Operations Seamlessly",
      desc: "Start booking appointments, managing patient records, handling billing, and utilizing dashboards.",
      icon: <ClipboardDocumentListIcon className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Track, Analyze & Grow",
      desc: "Use real-time analytics to monitor performance, identify areas for improvement, and scale your clinic.",
      icon: <ChartBarIcon className="w-10 h-10 text-purple-600" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Sehati revolutionized our clinic's workflow. We're more efficient, and our patients have noticed the difference!",
      name: "Dr. Fatima Al-Jamil",
      role: "Owner, Al-Nour Clinic",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "The Arabic interface and dedicated support made adoption incredibly easy for my entire team. Highly recommended!",
      name: "Dr. Omar Hassan",
      role: "Director, Modern Dental Center",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Access to real-time KPIs through the dashboard has been a game-changer for managing our multi-branch operations.",
      name: "Ms. Layla Ibrahim",
      role: "Operations Manager, Gulf Medical Group",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const securityPoints = [
    {
      title: "End-to-End Encryption",
      desc: "All data is encrypted in transit (SSL/TLS) and at rest (AES-256), ensuring utmost confidentiality.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Regulatory Compliance",
      desc: "Built in alignment with MOH guidelines and global standards like HIPAA & GDPR principles.",
      icon: <DocumentTextIcon className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Robust Role-Based Access",
      desc: "Granular permission controls ensure that staff only access the information relevant to their roles.",
      icon: <KeyIcon className="w-8 h-8 text-purple-600" />,
    },
  ];

  const whoIsSehatiForItems = [
    {
      name: "Solo Practitioner Clinics",
      icon: <UserPlusIcon className="w-7 h-7 text-purple-600 inline mr-2" />,
    },
    {
      name: "Small to Medium Polyclinics",
      icon: (
        <BuildingOffice2Icon className="w-7 h-7 text-purple-600 inline mr-2" />
      ),
    },
    {
      name: "Specialized Centers (Dental, Derma, etc.)",
      icon: <CheckBadgeIcon className="w-7 h-7 text-purple-600 inline mr-2" />,
    },
    {
      name: "Multi-Branch Medical Groups",
      icon: <BriefcaseIcon className="w-7 h-7 text-purple-600 inline mr-2" />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F5F3FF] flex flex-col items-center px-6 text-center pb-0">
        <section
          id="hero"
          className="w-full pt-20 pb-16 flex flex-col items-center"
        >
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-6xl font-bold text-purple-700 leading-tight mb-6 mt-10"
          >
            Your Clinic. Reimagined with Sehati 💜
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10"
          >
            Empower your team with smart tools. Delight your patients with
            seamless experiences. Grow your practice with confidence. Sehati
            provides the digital advantage your clinic deserves.
          </p>
          <a
            href="#book-demo-final"
            data-aos="zoom-in"
            data-aos-delay="200"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 text-lg"
          >
            Book a Free Demo
          </a>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-16 w-full max-w-5xl px-4"
          >
            <img
              src="https://via.placeholder.com/1000x550?text=Impressive+Sehati+Dashboard+Showcase"
              alt="Sehati Dashboard Preview"
              className="w-full rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        </section>

        <section id="features" className="mt-24 max-w-6xl w-full">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold text-purple-700 mb-12 text-center"
          >
            Everything Your Modern Clinic Needs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {featuresList.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-left border border-gray-100 flex flex-col"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 flex-grow">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="why-sehati"
          className="mt-28 max-w-6xl w-full text-center px-4"
        >
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6"
          >
            Why Choose Sehati?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-3xl mx-auto mb-16"
          >
            Sehati is more than just software — it's a dedicated partner in
            elevating patient care, empowering your staff, and driving
            sustainable growth for your clinic in the digital age.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySehatiPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center text-3xl mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="who-for"
          className="mt-28 max-w-5xl w-full text-center px-4"
        >
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6"
          >
            Designed for Clinics Like Yours
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-3xl mx-auto mb-12"
          >
            Whether you're a solo practitioner or a multi-branch medical group,
            Sehati scales to meet your unique operational needs and growth
            ambitions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {whoIsSehatiForItems.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.icon} {item.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section id="in-depth-features" className="mt-28 max-w-6xl w-full px-4">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6 text-center"
          >
            A Closer Look at Key Features
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-3xl mx-auto mb-16 text-center"
          >
            Discover how Sehati's core functionalities streamline everyday tasks
            and provide critical insights, helping your clinic operate at its
            best.
          </p>
          <div
            className="flex flex-col lg:flex-row items-center gap-10 mb-20"
            data-aos="fade-right"
          >
            <div className="lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-3 flex items-center">
                <CalendarDaysIcon className="w-7 h-7 mr-2 text-purple-600" />{" "}
                Advanced Appointment Management
              </h3>
              <p className="text-gray-600 mb-4">
                Effortlessly manage schedules with our intuitive drag-and-drop
                calendar. Automate reminders via SMS/Email, handle recurring
                appointments, and customize views by doctor or resource.
              </p>
              <ul className="list-disc list-inside ml-5 text-gray-600 space-y-1">
                <li>Drag-and-drop multi-doctor calendar</li>
                <li>Automated SMS/Email/WhatsApp reminders</li>
                <li>Customizable appointment types & durations</li>
                <li>Waiting list management</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/500x350?text=Actual+Appointment+Calendar+UI"
                alt="Appointment Scheduling UI"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div
            className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-20"
            data-aos="fade-left"
          >
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/500x350?text=Comprehensive+Patient+Profile+View"
                alt="Patient Records UI"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="lg:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-purple-700 mb-3 flex items-center">
                <UserGroupIcon className="w-7 h-7 mr-2 text-purple-600" /> 360°
                Patient Profiles
              </h3>
              <p className="text-gray-600 mb-4">
                Access everything you need to know about your patients in one
                secure place. View medical history, track visits, manage
                documents, and record detailed clinical notes.
              </p>
              <ul className="list-disc list-inside ml-5 text-gray-600 space-y-1">
                <li>Complete medical & visit history timeline</li>
                <li>Secure document & lab report attachments</li>
                <li>Customizable medical forms & templates</li>
                <li>Allergy & medication tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="mt-20 max-w-6xl w-full px-4 text-center"
        >
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6"
          >
            Get Started with Sehati in 4 Simple Steps
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-2xl mx-auto mb-16"
          >
            Transitioning to Sehati is quick and straightforward. We'll guide
            you at every step to ensure a smooth start for your clinic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-4 bg-purple-100 rounded-full mb-5 inline-block">
                  {step.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div
          className="mt-28 max-w-4xl mx-auto px-6 text-center text-gray-800"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-bold text-purple-700 mb-5">
            The Sehati Transformation: Before & After
          </h3>
          <div className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-left">
              <h4 className="font-semibold text-purple-600 text-lg mb-2">
                Before Sehati:
              </h4>
              <p className="text-md mb-4">
                Dr. Lina's clinic struggled with disorganized paper files,
                frequent missed appointments due to manual reminders, and
                time-consuming Excel reports that offered little real insight.
                Staff were stressed, and patient experience suffered.
              </p>
            </div>
            <div className="text-left md:border-l md:pl-6 border-purple-200">
              <h4 className="font-semibold text-green-600 text-lg mb-2">
                After Sehati:
              </h4>
              <p className="text-md">
                Now, Dr. Lina starts her day with a clear dashboard view of
                schedules and key metrics. Her team manages appointments,
                patient records, and billing efficiently. Automated reminders
                have reduced no-shows, and patients appreciate the streamlined
                digital experience. The clinic is calmer, more organized, and
                growing.
              </p>
            </div>
          </div>
        </div>

        <section
          id="testimonials"
          className="mt-28 max-w-7xl w-full px-4 text-center"
        >
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6"
          >
            Loved by Clinics Like Yours
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-2xl mx-auto mb-16"
          >
            Hear directly from healthcare professionals who have transformed
            their practices with Sehati.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg min-w-[300px] text-left flex flex-col"
                data-aos={
                  index === 0
                    ? "fade-right"
                    : index === 1
                    ? "fade-up"
                    : "fade-left"
                }
                data-aos-delay={index * 100}
              >
                <p className="italic text-gray-700 mb-6 text-md flex-grow">
                  “{testimonial.quote}”
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-purple-500 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-purple-700">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div
          className="mt-28 max-w-4xl mx-auto px-6 text-center text-gray-700"
          data-aos="fade-up"
        >
          <img
            src="https://via.placeholder.com/100x100?text=Founder+Photo"
            alt="Alhassan Alfarran"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-300"
          />
          <blockquote className="italic text-xl font-medium mb-4 text-gray-800">
            “We created Sehati not just to digitize clinics — but to empower
            every healthcare professional to deliver exceptional care with
            confidence, efficiency, and genuine compassion.”
          </blockquote>
          <p className="font-semibold text-purple-700">
            — Alhassan Alfarran, Founder of Sehati
          </p>
        </div>

        <section
          id="trusted-by"
          className="mt-28 max-w-6xl w-full px-4 text-center"
        >
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6"
          >
            Trusted Across the Region
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-2xl mx-auto mb-12"
          >
            Join over <strong className="text-purple-700">150+ clinics</strong>{" "}
            and medical centers across Saudi Arabia and the Gulf who rely on
            Sehati to optimize their operations and enhance patient care.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center">
            {[
              "Al Hayat National Clinic",
              "Riyadh Premier Dental Care",
              "Noor Specialized Medical Center",
              "Shifa Modern Polyclinic",
              "Al Waha General Hospital",
              "Najd Elite Health Group",
              "Jeddah Derma & Beauty",
              "Vision First Eye Clinic",
            ].map((name, index) => (
              <div
                key={index}
                className="bg-white border border-purple-100 shadow-sm rounded-lg py-5 px-3 text-center hover:shadow-md transition text-gray-800 text-sm font-medium"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                {name}
              </div>
            ))}
          </div>
        </section>

        <section
          id="security"
          className="mt-28 max-w-6xl w-full px-4 text-center"
        >
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6"
          >
            Your Data Security is Our Priority
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-3xl mx-auto mb-16"
          >
            We understand that privacy and compliance are non-negotiable in
            healthcare. Sehati is architected with robust security measures to
            meet the highest data protection standards.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-left border border-purple-100 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center text-3xl mb-4">
                  {point.icon}
                  <h4 className="ml-3 text-lg font-semibold text-gray-800">
                    {point.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
          <div
            className="mt-12 flex flex-wrap justify-center gap-4"
            data-aos="zoom-in-up"
          >
            {[
              "ISO 27001 Ready Infrastructure",
              "HIPAA-Aligned Practices",
              "KSA Data Residency Option",
              "Continuous 24/7 Monitoring",
              "Regular Security Audits",
            ].map((badge, index) => (
              <div
                key={index}
                className="bg-purple-100 text-purple-700 text-sm font-medium px-4 py-2 rounded-full border border-purple-300"
              >
                {badge}
              </div>
            ))}
          </div>
        </section>

        <div
          className="mt-28 max-w-4xl mx-auto px-6 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            The Future of Clinic Management is Here. Why Wait?
          </h2>
          <p className="text-gray-700 text-lg">
            Healthcare is evolving rapidly. Patients expect modern, efficient,
            and digitally-enabled care. Don’t let your clinic fall behind.
            Sehati empowers you to not just keep up, but to lead the way in
            providing exceptional patient experiences.
          </p>
        </div>

        <section
          id="pricing"
          className="mt-28 max-w-7xl w-full px-4 text-center"
        >
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6"
          >
            Simple, Transparent Pricing
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-2xl mx-auto mb-16"
          >
            Choose the plan that best fits your clinic's size and needs. All
            plans come with our commitment to excellent support and continuous
            improvement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div
              className="bg-white border border-purple-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col"
              data-aos="zoom-in"
              data-aos-delay="0"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">
                Starter
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                Ideal for solo practitioners or new clinics.
              </p>
              <p className="text-4xl font-bold text-purple-600 my-4">
                SAR 199{" "}
                <span className="text-sm font-normal text-gray-500">/mo</span>
              </p>
              <ul className="text-sm text-gray-600 mb-8 list-disc list-inside text-left space-y-2 flex-grow">
                <li>Up to 2 Staff Users</li>
                <li>Appointments & Calendar</li>
                <li>Basic Patient Profiles</li>
                <li>Standard Email Reminders</li>
                <li>Community Support</li>
              </ul>
              <button className="w-full mt-auto bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
                Choose Starter
              </button>
            </div>
            <div
              className="bg-white border-2 border-purple-600 rounded-2xl p-8 shadow-xl transform md:scale-105 flex flex-col relative"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="absolute top-0 -mt-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-semibold text-purple-800 mb-2 mt-3">
                Growth
              </h3>
              <p className="text-gray-700 text-sm mb-1">
                Perfect for growing clinics and small teams.
              </p>
              <p className="text-4xl font-bold text-purple-700 my-4">
                SAR 499{" "}
                <span className="text-sm font-normal text-gray-500">/mo</span>
              </p>
              <ul className="text-sm text-gray-700 mb-8 list-disc list-inside text-left space-y-2 flex-grow">
                <li>Up to 10 Staff Users</li>
                <li>All Starter Features</li>
                <li>Advanced Analytics Dashboard</li>
                <li>SMS & WhatsApp Reminders</li>
                <li>Custom Clinic Branding (Logo)</li>
                <li>Priority Email Support</li>
              </ul>
              <button className="w-full mt-auto bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition font-semibold">
                Choose Growth
              </button>
            </div>
            <div
              className="bg-white border border-purple-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow flex flex-col"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">
                Enterprise
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                For larger centers and multi-branch operations.
              </p>
              <p className="text-4xl font-bold text-purple-600 my-4">
                Custom{" "}
                <span className="text-sm font-normal text-gray-500">
                  Pricing
                </span>
              </p>
              <ul className="text-sm text-gray-600 mb-8 list-disc list-inside text-left space-y-2 flex-grow">
                <li>Unlimited Staff Users</li>
                <li>All Growth Features</li>
                <li>Multi-branch Management</li>
                <li>Dedicated Account Manager</li>
                <li>API Access & Integrations</li>
                <li>On-site Training Option</li>
              </ul>
              <button className="w-full mt-auto bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-600" data-aos="fade-up">
            All prices in SAR. Special annual plans available with up to 20%
            discount.{" "}
            <a
              href="#book-demo-final"
              className="text-purple-600 hover:underline"
            >
              Book a demo
            </a>{" "}
            to discuss your specific needs.
          </p>
        </section>

        <section
          id="faq"
          className="mt-28 max-w-4xl w-full px-4 mx-auto text-left"
        >
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-purple-700 mb-6 text-center"
          >
            Frequently Asked Questions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-700 text-lg max-w-2xl mx-auto mb-12 text-center"
          >
            Have questions? We’ve answered the most common ones below. For
            anything else, feel free to reach out.
          </p>
          <div className="space-y-6">
            {[
              {
                q: "Is Sehati fully available and optimized for Arabic language and regional needs?",
                a: "Yes! Sehati offers a complete Arabic user interface with full RTL support, Hijri calendar options, and features tailored for clinics in the KSA and MENA region.",
              },
              {
                q: "What kind of technical expertise is needed to use Sehati?",
                a: "None at all. Sehati is designed with user-friendliness at its core. Its intuitive interface ensures that your entire team, regardless of their tech skills, can start using it effectively with minimal training.",
              },
              {
                q: "Can Sehati manage multiple clinic branches?",
                a: "Absolutely. Our Enterprise plan is specifically designed for multi-branch operations, allowing centralized oversight while providing distinct dashboards, staff management, and performance tracking for each location.",
              },
              {
                q: "How secure is our patient data with Sehati?",
                a: "Extremely secure. We employ bank-grade encryption, strict access controls, and comply with regional data privacy regulations (e.g., KSA's PDPL) and global best practices. Your data's security and privacy are paramount.",
              },
              {
                q: "What support and training options are available?",
                a: "We offer comprehensive support including an online knowledge base, email support, and priority support for higher-tier plans. Personalized onboarding and training sessions are also available to ensure your team gets the most out of Sehati.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-purple-600 p-6 rounded-r-md shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <details>
                  <summary className="font-semibold text-purple-700 text-lg cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="text-gray-600 text-sm mt-3">{item.a}</p>
                </details>
              </div>
            ))}
          </div>
        </section>

        <section
          id="book-demo-final"
          className="mt-28 w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 px-6 text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Experience firsthand how Sehati can streamline your operations,
            enhance patient care, and drive growth. Schedule your personalized
            demo today!
          </p>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-2xl text-gray-700">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              Book Your Free Demo
            </h3>
            <form onSubmit={handleDemoSubmit} className="space-y-4 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={demoForm.name}
                  onChange={handleDemoFormChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={demoForm.email}
                  onChange={handleDemoFormChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="clinicName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Clinic Name
                </label>
                <input
                  type="text"
                  name="clinicName"
                  id="clinicName"
                  value={demoForm.clinicName}
                  onChange={handleDemoFormChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-lg"
              >
                Request My Demo
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </section>

        <footer
          id="contact"
          className="mt-0 w-full bg-purple-50 border-t border-purple-200 text-gray-600 py-10 px-6"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-lg font-semibold text-purple-700 mb-3">
                Sehati 💜
              </h4>
              <p className="text-sm">
                Empowering clinics across the MENA region with innovative and
                intuitive management solutions.
              </p>
              <p className="text-sm mt-3">Riyadh, Saudi Arabia</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700 mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#features"
                    className="hover:text-purple-600 transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-purple-600 transition"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-purple-600 transition">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#book-demo-final"
                    className="hover:text-purple-600 transition"
                  >
                    Book a Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-700 mb-3">
                Legal & Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/terms" className="hover:text-purple-600 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-purple-600 transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@sehati.app"
                    className="hover:text-purple-600 transition"
                  >
                    info@sehati.app
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+966000000000"
                    className="hover:text-purple-600 transition"
                  >
                    +966 11 XXX XXXX
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-purple-200 pt-8 text-center text-sm">
            © {new Date().getFullYear()} Sehati Technologies. All rights
            reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
