import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import b from './assets/home1.png';
import web1 from './assets/ws.png';
import web2 from './assets/web2.png';
import web3 from './assets/comm.jpg';

export default function Home() {
  const location = useLocation(); // to highlight active tab
  const categories = [
    { name: "Webseries", image: web1, link: "/webseries" },
    { name: "Movies", image: web2, link: "/movies" },
    { name: "Commercials", image: web3, link: "/commercials" },
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

      {/* Header with Tabs */}
      <header className="absolute top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-sm tracking-[0.35em] uppercase text-white/80 hover:text-white transition font-sans"
        >
          RS
        </Link>

        <nav className="flex space-x-6">
          <Link
            to="/"
            className={`text-white/70 uppercase text-sm transition-colors ${
              location.pathname === "/" ? "border-b-2 border-white" : "hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/webseries"
            className={`text-white/70 uppercase text-sm transition-colors ${
              location.pathname === "/webseries" ? "border-b-2 border-white" : "hover:text-white"
            }`}
          >
            Webseries
          </Link>
          <Link
            to="/movies"
            className={`text-white/70 uppercase text-sm transition-colors ${
              location.pathname === "/movies" ? "border-b-2 border-white" : "hover:text-white"
            }`}
          >
            Movies
          </Link>
          <Link
            to="/commercials"
            className={`text-white/70 uppercase text-sm transition-colors ${
              location.pathname === "/commercials" ? "border-b-2 border-white" : "hover:text-white"
            }`}
          >
            Commercials
          </Link>
          <Link
            to="/about"
            className={`text-white/70 uppercase text-sm transition-colors ${
              location.pathname === "/about" ? "border-b-2 border-white" : "hover:text-white"
            }`}
          >
            About
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-4 animate-fade-in-slow">
          Ribhu Sarma
        </h1>
        <span className="text-base md:text-lg tracking-[0.35em] uppercase text-white/70 mb-6">
          Cinematographer
        </span>
        <div className="mx-auto h-px w-24 bg-white/40 mb-10" />
        <p className="max-w-xl text-white/70 mb-12">
          Crafting images with light, movement, and emotion—across films, commercials, and documentaries.
        </p>

        {/* Grids with text below and link */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.link}
              className="flex flex-col items-center group cursor-pointer"
            >
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-64 w-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              )}
              <span className="mt-4 text-lg md:text-xl font-bold tracking-[0.35em] uppercase text-white/90 transition group-hover:text-white">
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
