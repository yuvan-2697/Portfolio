import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMail, FiPhone, FiInstagram, FiMenu, FiX } from "react-icons/fi";
import portrait from './assets/dp.jpeg';
import aboutBg from './assets/about.jpg';

export default function About() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const textRef = useRef(null);
  const contactRef = useRef([]);

  // Scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = [textRef.current, ...contactRef.current];
      elements.forEach(el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("opacity-100", "translate-x-0", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Webseries", link: "/webseries" },
    { name: "Movies", link: "/movies" },
    { name: "Commercials", link: "/commercials" },
    { name: "About", link: "/about" },
  ];

  const contacts = [
    { label: "Email", value: "ribhudop@gmail.com", link: "mailto:ribhu@example.com", icon: <FiMail /> },
    { label: "Phone", value: "+91 8489746443", link: "tel:+61123456789", icon: <FiPhone /> },
    { label: "Instagram", value: "@ribhu.sarma", link: "https://www.instagram.com/ribhusarma/?hl=en", icon: <FiInstagram /> },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20 selection:text-white">

      {/* Background */}
      <div className="fixed inset-0 bg-cover bg-center -z-10" style={{ backgroundImage: `url(${aboutBg})` }} />
      <div className="fixed inset-0 bg-black/70 -z-5" />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center">
        <Link 
          to="/" 
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-lg tracking-[0.35em] uppercase text-white/90 hover:text-white transition"
        >
          RS
        </Link>

        {/* Responsive Dropdown */}
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className={`absolute right-0 mt-3 w-48 bg-black/90 rounded-xl shadow-lg flex flex-col py-2 z-30 transform transition-all duration-300 ease-in-out origin-top ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}`}>
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.link}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 text-white/80 hover:text-white uppercase tracking-[0.25em] transition-colors ${
                  location.pathname === tab.link ? "font-semibold text-white" : ""
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 px-6 pb-16 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Portrait */}
        <div className="flex-shrink-0 w-full md:w-1/3 relative overflow-hidden">
          <img
            src={portrait}
            alt="Ribhu Sarma"
            className="rounded-full shadow-2xl w-80 h-80 object-cover mx-auto md:mx-0 transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Bio & Contacts */}
        <div className="flex-1 flex flex-col gap-12">

          {/* Bio */}
          <div ref={textRef} className="opacity-0 translate-y-10 transition-all duration-700">
            <div className="flex items-center gap-6 mb-6">
              <h1
                style={{ fontFamily: "'Simplifica', sans-serif" }}
                className="text-5xl md:text-7xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent animate-gradient-text"
              >
                About Me
              </h1>

              {/* Pencil Sketch Camera Animation */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-16 h-16 md:w-24 md:h-24 stroke-white"
                fill="none"
                strokeWidth="2"
              >
                <path
                  d="M80 160h352v224H80zM160 128l32-48h128l32 48"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="draw-animation"
                />
                <circle cx="256" cy="272" r="80" stroke="white" className="draw-animation" />
              </svg>
            </div>

            <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white/70 text-lg md:text-xl mb-6 leading-relaxed">
              Hey there! I’m Ribhu Sarma, an engineering grad from Chennai who accidentally fell in love with cinematography. I chase stories with my camera, playing with light, movement, and emotion to turn ordinary moments into something cinematic.
            </p>
            <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white/70 text-lg md:text-xl mb-6 leading-relaxed">
              When I’m not filming, you’ll find me hunting for the perfect cup of coffee, devouring anything edible, or catching up on my favorite hobby—sleeping like it’s an art form. I’m all about storytelling, good vibes, and connecting with fellow humans who love a little chaos, creativity, and caffeine.
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-end gap-6 mt-22">
            {contacts.map((contact, idx) => (
              <a
                key={contact.label}
                ref={(el) => (contactRef.current[idx] = el)}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="opacity-0 translate-x-10 flex items-center gap-4 text-right text-lg md:text-xl font-semibold transition-all duration-700 hover:text-white"
                style={{ transitionDelay: `${idx * 200}ms`, fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="text-2xl md:text-3xl">{contact.icon}</span>
                <span>{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

      {/* Gradient + Camera Animation CSS */}
      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background: linear-gradient(270deg, #ccc, #fff, #ccc);
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientAnimation 8s ease infinite;
        }

        /* Camera Sketch Loop Animation */
        .draw-animation {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 8s ease-in-out infinite;
        }
        @keyframes draw {
          0% { stroke-dashoffset: 1000; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 1000; }
        }

      `}</style>
    </div>
  );
}
