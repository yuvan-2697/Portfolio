import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import b from './assets/home1.png';
import web1 from './assets/ws.png';
import web2 from './assets/web2.png';
import web3 from './assets/comm.jpg';
import { FiMenu, FiX } from "react-icons/fi";

export default function Home() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    { name: "Webseries", image: web1, link: "/webseries" },
    { name: "Movies", image: web2, link: "/movies" },
    { name: "Commercials", image: web3, link: "/commercials" },
  ];

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Webseries", link: "/webseries" },
    { name: "Movies", link: "/movies" },
    { name: "Commercials", link: "/commercials" },
    { name: "About", link: "/about" },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20 selection:text-white">

      {/* Background */}
      <div
        className="fixed inset-0 h-full w-full bg-cover bg-top -z-10"
        style={{
          backgroundImage: `url(${b})`,
          backgroundPosition: "top 20% right 10%",
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 -z-5" />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center">
        <Link
          to="/"
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-lg tracking-[0.35em] uppercase text-white/90 hover:text-white transition"
        >
          RS
        </Link>

        {/* Dropdown Menu Toggle */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-3 w-48 bg-black/90 rounded-xl shadow-lg flex flex-col py-2 z-30 transform transition-all duration-300 ease-in-out origin-top ${
              menuOpen
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0 pointer-events-none"
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

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] text-center px-4 sm:px-6 md:px-8">
        <h1
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-4 animate-fade-in-slow"
        >
          Ribhu Sarma
        </h1>

        <span
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-sm sm:text-base md:text-lg tracking-[0.35em] uppercase text-white/70 mb-6"
        >
          Cinematographer
        </span>

        <div className="mx-auto h-px w-20 sm:w-24 bg-white/40 mb-8 sm:mb-10" />

        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="max-w-full sm:max-w-xl md:max-w-2xl text-white/70 mb-12 leading-relaxed text-sm sm:text-base md:text-lg"
        >
          Crafting images with light, movement, and emotion—across films, commercials, and documentaries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-6">
          {categories.map((cat, idx) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="flex flex-col items-center group cursor-pointer transform transition duration-500 ease-in-out hover:-translate-y-2 hover:scale-105"
              style={{ animation: `fadeInUp 0.6s ease forwards`, animationDelay: `${idx * 0.2}s`, opacity: 0 }}
            >
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-48 sm:h-56 md:h-64 w-48 sm:w-56 md:w-64 object-cover rounded-2xl shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              )}
              <span
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-xl font-bold tracking-[0.35em] uppercase text-white/90 transition group-hover:text-white text-center"
              >
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60">
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>
    </div>
  );
}
