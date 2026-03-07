import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import kali from "./assets/kali.png";
import boo from "./assets/boo.png";
import lucky from "./assets/lucky.png";
import miss from "./assets/mission.png";

export default function Movies() {

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const projects = [
    {
      title: "Kaliyugam",
      image: kali,
      description: "Assistant Cinematographer",
      video: "https://www.youtube.com/embed/-rFIQTutUzo"
    },
    {
      title: "Boo",
      image: boo,
      description: "Assistant Cinematographer",
      video: "https://www.youtube.com/embed/cTv0-2TFrYk"
    },
    {
      title: "Lucky Man",
      image: lucky,
      description: "Associate Cinematographer",
      video: "https://www.youtube.com/embed/ZQSZd5KT_f8"
    },
    {
      title: "Mission",
      image: miss,
      description: "Associate Cinematographer",
      video: "https://www.youtube.com/embed/U1A9UWPAnNA"
    }
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
    <div className="relative min-h-screen bg-gradient-to-b from-[#D9D2C8] via-[#CFC8BE] to-[#BFB7AC] text-gray-900">

      {/* Radial highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_60%)]"></div>

      {/* Grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>


      {/* HEADER */}

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


      {/* PAGE HEADING */}

      <main className="relative z-10 pt-[140px] px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        <div className="flex-1">

          <h1
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-5xl md:text-7xl uppercase tracking-widest text-black mb-6"
          >
            Movies
          </h1>

          <p
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="max-w-2xl text-gray-700 mb-10 leading-relaxed text-lg"
          >
            From vision to screen. Click to watch.
          </p>

        </div>


        {/* FILTER */}

        <div className="flex flex-col gap-4">

          <h2
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="uppercase font-semibold text-gray-700 tracking-wider"
          >
            Filter by Role
          </h2>

          {roles.map(role => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`px-4 py-2 rounded-lg transition ${
                filter === role
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {role}
            </button>
          ))}

        </div>

      </main>


      {/* PROJECT GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-[1700px] mx-auto mt-20 px-6">

        {filteredProjects.map((proj) => (

          <div
            key={proj.title}
            className="group flex justify-center cursor-pointer"
            onClick={() => {
              setCurrentVideo(proj.video);
              setVideoOpen(true);
            }}
          >

            <div className="relative inline-block">

              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[500px] object-contain transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                <p
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-white text-xl tracking-widest uppercase text-center px-6"
                >
                  {proj.description}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>


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
              src={currentVideo}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      )}


      {/* FOOTER */}

      <footer
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="w-full text-center px-6 py-12 text-xs text-black"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}