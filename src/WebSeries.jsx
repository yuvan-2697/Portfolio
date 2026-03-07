import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import kk from './assets/kk.png';
import bb from './assets/3bhk.png';
import mb from './assets/mb.png';
import dd from './assets/dance.png';
import { FiMenu, FiX } from "react-icons/fi";

export default function WebSeries() {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

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

    <div className="relative min-h-screen bg-[#CFC8BE] text-gray-900">

      {/* Header */}

      <header className="fixed top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center">

        <Link
          to="/"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-lg tracking-[0.35em] uppercase text-gray-800 hover:text-black transition"
        >
          RS
        </Link>

        <div className="relative">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 text-3xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className={`absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg flex flex-col py-2 z-30 transform transition-all duration-300 ease-in-out origin-top ${
            menuOpen
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 pointer-events-none"
          }`}>

            {tabs.map(tab => (

              <Link
                key={tab.name}
                to={tab.link}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className={`px-4 py-2 text-gray-700 hover:text-black uppercase tracking-[0.25em] transition-colors ${
                  location.pathname === tab.link ? "font-semibold text-black" : ""
                }`}
              >
                {tab.name}
              </Link>

            ))}

          </div>

        </div>

      </header>


      {/* Page Heading */}

      <main className="relative z-10 pt-[120px] px-6 pb-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">

        <div className="flex-1">

          <h1
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-5xl md:text-6xl tracking-widest uppercase text-black mb-6"
          >
            Webseries
          </h1>

          <p
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="max-w-xl text-gray-600 leading-relaxed"
          >
            A collection of my webseries projects. Click to view details.
          </p>

        </div>


        {/* Filter */}

        <div className="flex flex-col gap-4 md:flex-shrink-0">

          <h2
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="uppercase font-semibold text-gray-500 tracking-wider"
          >
            Filter by Role
          </h2>

          {roles.map(role => (

            <button
              key={role}
              onClick={() => setFilter(role)}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className={`px-4 py-2 rounded-lg transition ${
                filter === role
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {role}
            </button>

          ))}

        </div>

      </main>


      {/* Projects Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 pb-20">

        {filteredProjects.map(proj => (

          <div
            key={proj.title}
            className="relative group overflow-hidden"
          >

            <Link to={proj.link}>

              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                <p
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-white text-lg uppercase tracking-widest"
                >
                  {proj.description}
                </p>

              </div>

            </Link>

            <h3
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mt-4 text-lg uppercase tracking-widest text-gray-800"
            >
              {proj.title}
            </h3>

          </div>

        ))}

      </div>


      {/* Footer */}

      <footer
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="w-full text-center px-6 pb-6 text-xs text-gray-500"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>

  );

}