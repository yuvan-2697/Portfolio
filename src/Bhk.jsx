import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Bhk() {
  const location = useLocation();

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
        <nav className="flex space-x-6">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.link}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className={`uppercase text-sm tracking-[0.25em] transition-colors pb-1 ${
                location.pathname === tab.link
                  ? "text-white font-semibold border-b-2 border-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-[120px] px-6 pb-16 max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">

        <h1
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-5xl md:text-6xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-0 animate-fade-in-slow"
        >
          3 BHK
        </h1>
        <h2
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-xl md:text-2xl tracking-wider uppercase text-white animate-fade-in-slow mt-0"
        >
          Associate Cinematographer
        </h2>


        {/* YouTube Video */}
        <div className="w-full max-w-3xl aspect-video mb-6 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/EI8s_HHeias"
            title="3 BHK"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-white/70 text-lg md:text-xl mb-6"
        >
           A captivating story showcasing light, movement, and emotion. This project highlights my role in cinematography and collaboration with the team to bring the narrative to life.
        </p>

        {/* Back Link */}
        <Link
          to="/webseries"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="mt-4 inline-block px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition"
        >
          ← Back to Webseries
        </Link>
      </main>

      {/* Footer */}
      <footer style={{ fontFamily: "'Montserrat', sans-serif" }} className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60">
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>
    </div>
  );
}
