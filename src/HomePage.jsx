import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import tea1 from "./assets/tea1.jpg";
import tea2 from "./assets/tea2.jpg";
import tea3 from "./assets/tea3.jpg";
import tea4 from "./assets/tea4.jpg";
import tea5 from "./assets/tea5.jpg";
import tea6 from "./assets/tea6.jpg";
import tea7 from "./assets/tea7.jpg";

import dug1 from "./assets/dug1.png";
import dug2 from "./assets/dug2.png";
import dug3 from "./assets/dug3.png";
import dug4 from "./assets/dug4.png";
import dug5 from "./assets/dug5.png";
import dug6 from "./assets/dug6.png";
import dug7 from "./assets/dug7.png";

import br from "./assets/br.png";
import sach from "./assets/sach.png";
import ran1 from "./assets/ran1.png";
import ran2 from "./assets/ran2.png";
import sbv1 from "./assets/sbv1.png";
import sbv2 from "./assets/sbv2.png";
import sr1 from "./assets/sr1.png";
import sr2 from "./assets/sr2.png";
import celeb1 from "./assets/celeb1.png";
import celeb2 from "./assets/celeb2.png";

export default function Home() {

  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const youtubeLink = "https://www.youtube.com/embed/l36QKGyqFwE";

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Webseries", link: "/webseries" },
    { name: "Movies", link: "/movies" },
    { name: "Commercials", link: "/commercials" },
    { name: "About", link: "/about" },
  ];

  const projects = [
    { image: tea1, title: "Soodana Koppaigal" },
    { image: tea2, title: "Soodana Koppaigal" },
    { image: tea3, title: "Soodana Koppaigal" },
    { image: tea4, title: "Soodana Koppaigal" },
    { image: tea5, title: "Soodana Koppaigal" },
    { image: tea6, title: "Soodana Koppaigal" },
    { image: tea7, title: "Soodana Koppaigal" },

    { image: dug1, title: "Dug Out", type: "dug" },
    { image: dug2, title: "Dug Out", type: "dug" },
    { image: dug3, title: "Dug Out", type: "dug" },
    { image: dug4, title: "Dug Out", type: "dug" },
    { image: dug5, title: "Dug Out", type: "dug" },
    { image: dug6, title: "Dug Out", type: "dug" },
    { image: dug7, title: "Dug Out", type: "dug" },

    { image: br, title: "Kalaignar 100 Tribute" },
    { image: sach, title: "Kalaignar 100 Tribute" },
    { image: ran1, title: "Kalaignar 100 Tribute" },
    { image: ran2, title: "Kalaignar 100 Tribute" },
    { image: sbv1, title: "Kalaignar 100 Tribute" },
    { image: sbv2, title: "Kalaignar 100 Tribute" },
    { image: sr1, title: "Kalaignar 100 Tribute" },
    { image: sr2, title: "Kalaignar 100 Tribute" },
    { image: celeb1, title: "Kalaignar 100 Tribute" },
    { image: celeb2, title: "Kalaignar 100 Tribute" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#D9D2C8] via-[#CFC8BE] to-[#BFB7AC] text-gray-900">

      {/* Radial highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_60%)]"></div>

      {/* Grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>


      {/* Header */}

      <header className="absolute top-0 left-0 w-full z-20 px-8 py-6 flex justify-between items-center">

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
            className="text-gray-800 text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Dropdown */}

          <div
            className={`absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg flex flex-col py-2 transform transition-all duration-300 origin-top ${
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
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className={`px-4 py-2 text-gray-700 hover:text-black uppercase tracking-[0.25em] ${
                  location.pathname === tab.link
                    ? "font-semibold text-black"
                    : ""
                }`}
              >
                {tab.name}
              </Link>
            ))}

          </div>

        </div>

      </header>


      {/* Hero */}

      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-28">

        <Link to="/about">
          <h1
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-6xl sm:text-7xl md:text-8xl text-black mb-4 uppercase tracking-widest"
          >
            Ribhu Sarma
          </h1>
        </Link>

        <span
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-lg sm:text-xl md:text-4xl tracking-[0.35em] uppercase text-black mb-6"
        >
          Director of Photography
        </span>

        <div className="mx-auto h-px w-24 bg-gray-400 mb-10" />

        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="max-w-3xl text-black mb-20 leading-relaxed text-lg sm:text-xl md:text-2xl"
        >
          Crafting images with light, movement, and emotion—across films,
          commercials, and music videos.
        </p>


        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-[1700px]">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group flex justify-center cursor-pointer"
              onClick={() => project.type === "dug" && setVideoOpen(true)}
            >

              <div className="relative inline-block">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                  <h2
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-white text-2xl tracking-widest uppercase"
                  >
                    {project.title}
                  </h2>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>


      {/* VIDEO POPUP */}

      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setVideoOpen(false)}
        >

          <div className="w-[90%] md:w-[900px] aspect-video">

            <iframe
              width="100%"
              height="100%"
              src={youtubeLink}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>

          </div>

        </div>
      )}


      {/* Footer */}

      <footer
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="w-full text-center px-6 py-10 text-xs text-black"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}