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
      <header className="fixed top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md">
        <Link
          to="/"
          className="text-sm tracking-[0.35em] uppercase text-white/80 hover:text-white transition font-sans"
        >
          RS
        </Link>

        <nav className="flex space-x-6">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.link}
              className={`text-white/70 uppercase text-sm transition-colors pb-1 ${
                location.pathname === tab.link
                  ? "border-b-2 border-white font-semibold text-white"
                  : "hover:text-white"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-[120px] px-6 pb-16 max-w-5xl mx-auto flex flex-col items-center gap-12 text-center">

        <h1 className="text-5xl md:text-6xl font-serif tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-6 animate-fade-in-slow">
          3 BHK
        </h1>

        {/* YouTube Video Embed */}
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

        <p className="text-white/70 text-lg md:text-xl mb-6">
          "3 BHK" – Associate Cinematographer. A captivating story showcasing light, movement, and emotion. This project highlights my role in cinematography and collaboration with the team to bring the narrative to life.
        </p>

        {/* Back Link */}
        <Link
          to="/webseries"
          className="mt-4 inline-block px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition"
        >
          ← Back to Webseries
        </Link>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60">
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>
    </div>
  );
}
