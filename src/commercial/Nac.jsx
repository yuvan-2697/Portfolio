// src/commercials/Nac.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Nac() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Webseries", link: "/webseries" },
    { name: "Movies", link: "/movies" },
    { name: "Commercials", link: "/commercials" },
    { name: "About", link: "/about" },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20 selection:text-white bg-black">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center">
        <Link
          to="/"
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-lg tracking-[0.35em] uppercase text-white/90 hover:text-white transition"
        >
          RS
        </Link>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div
            className={`absolute right-0 mt-3 w-48 bg-black/90 rounded-xl shadow-lg flex flex-col py-2 z-30 transform transition-all duration-300 ease-in-out origin-top ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-5 opacity-0 pointer-events-none"
            }`}
          >
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
      <main className="relative z-10 pt-[120px] px-6 pb-16 max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">
        <h1
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-5xl md:text-6xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-0 animate-fade-in-slow"
        >
          Nac Grand
        </h1>
        <h2
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-xl md:text-2xl tracking-wider uppercase text-white animate-fade-in-slow mt-0"
        >
          Commercial
        </h2>

        {/* YouTube Video Embed */}
        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/cIFAuSGQ17Y"
            title="Nac Grand"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-white/70 text-lg md:text-xl mb-6 max-w-3xl"
        >
          A commercial highlighting Nac Grand’s unique aspects. Update description as needed.
        </p>

        {/* Back Link */}
        <Link
          to="/commercials"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="mt-4 inline-block px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition"
        >
          ← Back to Commercials
        </Link>
      </main>

      {/* Footer */}
      <footer style={{ fontFamily: "'Montserrat', sans-serif" }} className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60">
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>
    </div>
  );
}
