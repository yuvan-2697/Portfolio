import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import kk from "./assets/kk.png";
import bb from "./assets/3bhk.png";
import mb from "./assets/mb.png";
import dd from "./assets/dance.png";
import lb from "./assets/wslb.jpg";
import { FiMenu, FiX } from "react-icons/fi";

export default function WebSeries() {

  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const projects = [

      {
        title: "Local Times",
        image: lb,
        description: "Associate Cinematographer",
        video: "https://www.youtube.com/embed/dne2oxzGaBk"
      },
      {
      title: "Kaiyum Kalavum",
      image: kk,
      description: "Assistant Cinematographer",
      video: "https://www.youtube.com/embed/sZzcP1Ttwik"
    },
    {
      title: "3 BHK",
      image: bb,
      description: "Associate Cinematographer",
      video: "https://www.youtube.com/embed/EI8s_HHeias"
    },
    {
      title: "Meme Boys",
      image: mb,
      description: "Associate Cinematographer",
      video: "https://www.youtube.com/embed/YFDRukyFFz4"
    },
    {
      title: "Five Six Seven Eight",
      image: dd,
      description: "Associate Cinematographer",
      video: "https://www.youtube.com/embed/cfLW49qHN54"
    }
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter(p => p.description === filter);

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Webseries", link: "/webseries" },
    { name: "Movies", link: "/movies" },
    { name: "Commercials", link: "/commercials" },
    
    { name: "About", link: "/about" }
  ];

  const roles = ["All", "Assistant Cinematographer", "Associate Cinematographer"];

  return (

    <div className="relative min-h-screen bg-[#CFC8BE] text-gray-900">

      {/* HEADER */}

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
            className="text-gray-800 text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className={`absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg flex flex-col py-2 transform transition-all duration-300 origin-top ${
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


      {/* HEADING */}

{/* HEADING */}
<div className="relative z-10 pt-28 px-6 max-w-[1700px] mx-auto">

  {/* TITLE + FILTER ROW */}
  <div className="relative flex items-center justify-center mb-6">

    {/* TITLE (centered) */}
    <h1
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="text-6xl md:text-8xl uppercase tracking-widest text-black"
    >
      Webseries
    </h1>

    {/* FILTER (right side, aligned with title) */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 w-[260px]">

      <h2
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="uppercase font-semibold text-gray-500 tracking-wider text-right text-sm"
      >
        Filter by Role
      </h2>

      {roles.map(role => (

        <button
          key={role}
          onClick={() => setFilter(role)}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className={`w-full text-right px-4 py-2 rounded-lg transition ${
            filter === role
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {role}
        </button>

      ))}

    </div>

  </div>

  {/* DIVIDER */}
  <div className="h-px w-24 bg-gray-400 mx-auto mb-10" />

  
</div>


      {/* PROJECT GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 pb-20">

        {filteredProjects.map(proj => (

          <div
            key={proj.title}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => {
              setCurrentVideo(proj.video);
              setVideoOpen(true);
            }}
          >

            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-white text-lg uppercase tracking-widest"
              >
                {proj.description}
              </p>

            </div>

            <h3
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mt-4 text-lg uppercase tracking-widest text-gray-800"
            >
              {proj.title}
            </h3>

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
        className="w-full text-center px-6 pb-6 text-xs text-gray-500"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}