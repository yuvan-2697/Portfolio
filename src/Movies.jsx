import React, { useState } from "react";
import PageBackdrop from "./components/PageBackdrop";
import SiteHeader from "./components/SiteHeader";

import kali from "./assets/kali.png";
import boo from "./assets/boo.png";
import lucky from "./assets/lucky.png";
import miss from "./assets/mission.png";

export default function Movies() {

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

  const roles = ["All", "Assistant Cinematographer", "Associate Cinematographer"];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <PageBackdrop />

      {/* HEADER */}
      <SiteHeader />

      {/* HEADING */}
      <div className="relative z-10 pt-28 px-4 sm:px-6 max-w-[1700px] mx-auto">

        <div className="mb-8 flex flex-col items-center gap-6">

          {/* TITLE */}
          <h1
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-4xl sm:text-6xl md:text-8xl uppercase tracking-[0.2em] sm:tracking-widest text-center text-[#241b15]"
          >
            Movies
          </h1>

          {/* ROLE FILTER */}
          <div className="flex w-full flex-col items-center gap-3">

            <h2
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5740]"
            >
              Filter by Role
            </h2>

            <div className="flex w-full flex-wrap items-center justify-center gap-2">
            {roles.map(role => (

              <button
                key={role}
                onClick={() => setFilter(role)}
                aria-pressed={filter === role}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className={`min-h-10 rounded-md border px-4 py-2 text-xs font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a3321] sm:text-sm ${
                  filter === role
                    ? "border-[#4a3321] bg-[#4a3321] text-[#f4ede3]"
                    : "border-[#8f6945]/35 bg-[#f4ede3]/35 text-[#5c442f] hover:bg-[#d8c7b4]/75"
                }`}
              >
                {role}
              </button>

            ))}
            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mx-auto mb-10 h-px w-24 bg-[#8f6945]/55" />

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 gap-10 max-w-[1700px] mx-auto px-6 pb-20 md:grid-cols-3">

        {filteredProjects.map((proj) => (

          <div
            key={proj.title}
            className="relative group flex flex-col items-center cursor-pointer"
            onClick={() => {
              setCurrentVideo(proj.video);
              setVideoOpen(true);
            }}
          >

            <img
              src={proj.image}
              alt={proj.title}
              className="h-[320px] w-auto max-w-full object-contain sm:h-[420px]"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(35,25,16,0.14),rgba(35,25,16,0.62))] opacity-0 transition duration-300 group-hover:opacity-100">

              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-white text-lg uppercase tracking-widest"
              >
                {proj.description}
              </p>

            </div>

            <h3
              style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="mt-4 text-center text-base uppercase tracking-[0.18em] text-[#4a3321] sm:text-lg sm:tracking-widest"
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
              frameBorder="0"
              allowFullScreen
              title="video"
            ></iframe>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="w-full text-center px-6 pb-6 text-xs text-[#6f5740]"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}
