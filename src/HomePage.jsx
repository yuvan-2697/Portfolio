import React from "react";
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
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-lg tracking-[0.35em] uppercase text-white/90 hover:text-white transition"
        >
          RS
        </Link>

        <nav className="flex space-x-6">
          {["/", "/webseries", "/movies", "/commercials", "/about"].map((path, index) => {
            const names = ["Home", "Webseries", "Movies", "Commercials", "About"];
            return (
              <Link
                key={names[index]}
                to={path}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className={`uppercase text-sm tracking-[0.25em] transition-colors ${
                  location.pathname === path
                    ? "text-white border-b-2 border-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {names[index]}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] text-center px-6">
        <h1
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-5xl md:text-7xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-4 animate-fade-in-slow"
        >
          Ribhu Sarma
        </h1>

        <span
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-base md:text-lg tracking-[0.35em] uppercase text-white/70 mb-6"
        >
          Cinematographer
        </span>

        <div className="mx-auto h-px w-24 bg-white/40 mb-10" />

        {/* Static Paragraph */}
        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="max-w-xl text-white/70 mb-12 leading-relaxed"
        >
          Crafting images with light, movement, and emotion—across films, commercials, and documentaries.
        </p>

        {/* Grids with text below and link */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
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
                className="h-64 w-64 object-cover rounded-2xl shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            )}
            <span
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mt-4 text-lg md:text-xl font-bold tracking-[0.35em] uppercase text-white/90 transition group-hover:text-white"
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
