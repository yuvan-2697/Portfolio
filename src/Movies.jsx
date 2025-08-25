import React from "react";
import { Link, useLocation } from "react-router-dom";
import kali from './assets/kali.png';
import boo from './assets/boo.png';
import lucky from './assets/lucky.png';
import miss from './assets/mission.png';
import movieBg from './assets/moviebg1.jpg';

export default function Movies() {
  const location = useLocation(); // for active tab highlight

  const projects = [
    { title: "Kaliyugam", image: kali, description: "A short description of Kaliyugam with highlights and key storyline details.", link: "/kali" },
    { title: "Boo", image: boo, description: "A short description of Boo covering its main plot and critical acclaim.", link: "/boo" },
    { title: "Lucky Man", image: lucky, description: "A short description highlighting Lucky Man’s unique aspects.", link: "/luckyman" },
    { title: "Mission", image: miss, description: "A short description of Mission covering its main plot and critical acclaim.", link: "/mission" },
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

      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${movieBg})` }}
      />
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/70 -z-5" />

      {/* Header with Tabs */}
      <header className="fixed top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center bg-black/30 backdrop-blur-md">
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
              className={`relative text-white/70 uppercase text-sm transition-colors pb-1 ${
                location.pathname === tab.link ? "text-white font-semibold border-b-2 border-white" : "hover:text-white"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Page Heading */}
      <main className="relative z-10 pt-[120px] px-6 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-6 animate-fade-in-slow">
          Movies
        </h1>
        <p className="max-w-2xl mx-auto text-white/70 mb-12">
          A collection of my movie projects. Hover to read description, click to view details.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((proj) => (
            <div key={proj.title} className="flex flex-col items-center group relative">
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="relative w-full rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-auto max-h-80 object-contain rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <p className="text-white text-base md:text-lg leading-relaxed">{proj.description}</p>
                </div>
              </a>

              <span className="mt-4 text-lg md:text-xl font-bold tracking-[0.35em] uppercase text-white/90 transition group-hover:text-white">
                {proj.title}
              </span>
            </div>
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
