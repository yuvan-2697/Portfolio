import React from "react";
import { Link, useLocation } from "react-router-dom";
import kk from './assets/kk.png';
import bb from './assets/3bhk.png';
import mb from './assets/mb.png';
import dd from './assets/dance.png';
import bgg from './assets/ws2.jpg'; // background image

export default function WebSeries() {
  const location = useLocation(); // to highlight active tab

  const projects = [
    { title: "Kaiyum Kalavum", image: kk, description: "Assistant Cinematographer", link: "/kaiyum" },
    { title: "3 BHK", image: bb, description: "Associate Cinematographer", link: "/bhk" },
    { title: "Meme Boys", image: mb, description: "Associate Cinematographer", link: "/memeboys" },
    { title: "Five Six Seven Eight", image: dd, description: "Associate Cinematographer", link: "/five" },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20 selection:text-white">
      
      {/* Background */}
      <div className="fixed inset-0 w-full h-full -z-20 bg-cover bg-center" style={{ backgroundImage: `url(${bgg})` }} />
      <div className="fixed inset-0 bg-black/70 -z-10" />

      {/* Header with Tabs */}
      <header className="fixed top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md">
        <Link to="/" className="text-sm tracking-[0.35em] uppercase text-white/80 hover:text-white transition font-sans">
          RS
        </Link>

        <nav className="flex space-x-6">
          <Link to="/" className={`text-white/70 uppercase text-sm transition-colors ${location.pathname === "/" ? "border-b-2 border-white" : "hover:text-white"}`}>Home</Link>
          <Link to="/webseries" className={`text-white/70 uppercase text-sm transition-colors ${location.pathname === "/webseries" ? "border-b-2 border-white" : "hover:text-white"}`}>Webseries</Link>
          <Link to="/movies" className={`text-white/70 uppercase text-sm transition-colors ${location.pathname === "/movies" ? "border-b-2 border-white" : "hover:text-white"}`}>Movies</Link>
          <Link to="/commercials" className={`text-white/70 uppercase text-sm transition-colors ${location.pathname === "/commercials" ? "border-b-2 border-white" : "hover:text-white"}`}>Commercials</Link>
          <Link to="/about" className={`text-white/70 uppercase text-sm transition-colors ${location.pathname === "/about" ? "border-b-2 border-white" : "hover:text-white"}`}>About</Link>
        </nav>
      </header>

      {/* Page Heading */}
      <main className="relative z-10 pt-[120px] px-6 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-6 animate-fade-in-slow">
          Webseries
        </h1>
        <p className="max-w-2xl mx-auto text-white/70 mb-12">
          A collection of my webseries projects. Hover to read description, click to view details.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((proj) => (
            <div key={proj.title} className="flex flex-col items-center group relative">
              <a href={proj.link} target="_blank" rel="noreferrer" className="relative w-full rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img src={proj.image} alt={proj.title} className="w-full h-auto max-h-80 object-contain rounded-2xl" />
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
