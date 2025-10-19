import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import kk from './assets/kk.png';
import bb from './assets/3bhk.png';
import mb from './assets/mb.png';
import dd from './assets/dance.png';
import bgg from './assets/ws2.jpg';
import { FiMenu, FiX } from "react-icons/fi";

export default function WebSeries() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All"); // State for filter

  const projects = [
    { title: "Kaiyum Kalavum", image: kk, description: "Assistant Cinematographer", link: "/kaiyum" },
    { title: "3 BHK", image: bb, description: "Associate Cinematographer", link: "/bhk" },
    { title: "Meme Boys", image: mb, description: "Associate Cinematographer", link: "/memeboys" },
    { title: "Five Six Seven Eight", image: dd, description: "Associate Cinematographer", link: "/five" },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter(p => p.description === filter);

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Webseries", link: "/webseries" },
    { name: "Movies", link: "/movies" },
    { name: "Commercials", link: "/commercials" },
    { name: "About", link: "/about" },
  ];

  const roles = ["All", "Assistant Cinematographer", "Associate Cinematographer"];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20 selection:text-white">
      {/* Background */}
      <div
        className="fixed inset-0 w-full h-full -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgg})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95 -z-10" />


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

          <div className={`absolute right-0 mt-3 w-48 bg-black/90 rounded-xl shadow-lg flex flex-col py-2 z-30 transform transition-all duration-300 ease-in-out origin-top ${
              menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
            }`}>
            {tabs.map(tab => (
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

      {/* Page Heading + Filter */}
      <main className="relative z-10 pt-[120px] px-6 pb-16 text-center flex flex-col md:flex-row max-w-6xl mx-auto gap-8 items-start">

        <div className="flex-1 text-center md:text-left">
  <h1
    style={{ fontFamily: "'Simplifica', sans-serif" }}
    className="text-5xl md:text-7xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-6 animate-fade-in-slow"
  >
    Webseries
  </h1>
  <p
    style={{ fontFamily: "'Montserrat', sans-serif" }}
    className="max-w-2xl text-white/70 mb-12 leading-relaxed"
  >
    A collection of my webseries projects. Click to view details.
  </p>
</div>


        {/* Filter */}
        <div className="flex flex-col gap-4 md:flex-shrink-0">
          <h2 style={{ fontFamily: "'Montserrat', sans-serif" }} className="uppercase font-semibold text-white/70 tracking-wider">Filter by Role</h2>
          {roles.map(role => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-4 py-2 rounded-lg transition ${filter === role ? "bg-white/20 text-white font-semibold" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {role}
            </button>
          ))}
        </div>
      </main>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-12 px-6">
        {filteredProjects.map(proj => (
          <div key={proj.title} className="flex flex-col items-center group relative">
            <Link to={proj.link} className="relative w-full rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={proj.image} alt={proj.title} className="w-full h-auto max-h-80 object-contain rounded-2xl" />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white text-base md:text-lg leading-relaxed">{proj.description}</p>
              </div>
            </Link>
            <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="mt-4 text-lg md:text-xl font-bold tracking-[0.35em] uppercase text-white/90 transition group-hover:text-white">
              {proj.title}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ fontFamily: "'Montserrat', sans-serif" }} className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60">
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>
    </div>
  );
}
