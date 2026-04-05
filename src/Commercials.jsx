import React, { useState } from "react";
import SiteHeader from "./components/SiteHeader";

import cg from "./assets/cg.png";
import nalli from "./assets/nalli.png";
import nn from "./assets/nalli2.png";
import dug from "./assets/dug.png";

export default function Commercials() {

  const [filter, setFilter] = useState("All");
  const [videoOpen, setVideoOpen] = useState(false);

  const [videoList, setVideoList] = useState([]);
  const [videoIndex, setVideoIndex] = useState(0);

  const projects = [
    {
      title: "CasaGrande",
      image: cg,
      description: "Associate Cinematographer",
      videos: [
        "https://www.youtube.com/embed/QfnrZwvFhPM",
        "https://www.youtube.com/embed/V89FyPHkbiY"
      ]
    },
    {
      title: "Nalli",
      image: nalli,
      description: "Associate Cinematographer",
      videos: ["https://www.youtube.com/embed/QfnrZwvFhPM"]
    },
    {
      title: "Nalli 100",
      image: nn,
      description: "Associate Cinematographer",
      videos: ["https://www.youtube.com/embed/rFEGHrUnG8A"]
    },
    {
      title: "Dug Out Trampoline Park",
      image: dug,
      description: "DOP",
      videos: ["https://www.youtube.com/embed/l36QKGyqFwE"]
    }
  ];

  const roles = ["All", "Associate Cinematographer", "DOP"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter(p => p.description === filter);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#D9D2C8] via-[#CFC8BE] to-[#BFB7AC] text-gray-900">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_60%)]"></div>
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* HEADER */}
      <SiteHeader />

      {/* HEADING (MATCHES WEBSERIES) */}
      <div className="relative z-10 pt-28 px-6 max-w-[1700px] mx-auto">

        <div className="relative flex items-center justify-center mb-6">

          <h1
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-6xl md:text-8xl uppercase tracking-widest text-black"
          >
            Commercials
          </h1>

          {/* FILTER RIGHT */}
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

        <div className="h-px w-24 bg-gray-400 mx-auto mb-10" />

      </div>

      {/* GRID (MATCHES WEBSERIES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 pb-20">

        {filteredProjects.map(proj => (

          <div
            key={proj.title}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => {
              setVideoList(proj.videos);
              setVideoIndex(0);
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
              src={videoList[videoIndex]}
              frameBorder="0"
              allowFullScreen
              title="video"
            />

            {videoList.length > 1 && (
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setVideoIndex((videoIndex - 1 + videoList.length) % videoList.length);
                  }}
                  className="bg-white px-4 py-2 rounded"
                >
                  Prev
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setVideoIndex((videoIndex + 1) % videoList.length);
                  }}
                  className="bg-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>
            )}

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
