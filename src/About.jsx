import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import portrait from './assets/dp.jpeg';
import aboutBg from './assets/about.jpg';
import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";

export default function About() {
  const location = useLocation(); 
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

      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${aboutBg})` }}
      />
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/70 -z-5" />

      {/* Header */}
      <header className="w-full z-20 px-6 py-6 flex justify-between items-center bg-black/30 backdrop-blur-md fixed top-0">
        <Link to="/" className="text-sm tracking-[0.35em] uppercase text-white/80 hover:text-white transition font-sans">
          RS
        </Link>
        <nav className="flex space-x-6">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.link}
              className={`relative text-white/70 uppercase text-sm transition-colors pb-1 ${
                location.pathname === tab.link ? "text-white font-semibold border-b-2 border-white" : "hover:text-white"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
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
          <div
            ref={textRef}
            className="opacity-0 translate-y-10 transition-all duration-700"
          >
            <h1 className="text-5xl md:text-6xl font-serif tracking-widest uppercase mb-6 animate-gradient-text">
              About Me
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-6">
              I am Ribhu Sarma, a cinematographer passionate about capturing stories through light, movement, and emotion. My work spans films, commercials, and documentaries, each crafted to leave a lasting impression.
            </p>
            <p className="text-white/70 text-lg md:text-xl">
              You can reach me through the contact details below—I’d love to connect!
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-end gap-6 mt-24">
            {contacts.map((contact, idx) => (
              <a
                key={contact.label}
                ref={(el) => (contactRef.current[idx] = el)}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="opacity-0 translate-x-10 flex items-center gap-4 text-right text-lg md:text-xl font-semibold transition-all duration-700 hover:text-white"
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <span className="text-2xl md:text-3xl">{contact.icon}</span>
                <span>{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60">
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

      {/* Extra CSS */}
      <style>
        {`
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
        `}
      </style>
    </div>
  );
}
