import React, { useState } from "react";
import PageBackdrop from "./components/PageBackdrop";
import SiteHeader from "./components/SiteHeader";
import ProjectGrid from "./components/ProjectGrid";

import cg from "./assets/cg.png";
import nalli from "./assets/nalli.png";
import nn from "./assets/nalli2.png";
import dug from "./assets/dug.png";
import echoes from "./assets/echoes.jpeg";

export default function Commercials() {

  const [filter, setFilter] = useState("All");
  const [videoOpen, setVideoOpen] = useState(false);

  const [videoList, setVideoList] = useState([]);
  const [videoIndex, setVideoIndex] = useState(0);
  const [instagramList, setInstagramList] = useState([]);
  const [instagramIndex, setInstagramIndex] = useState(0);
  const [instagramOpen, setInstagramOpen] = useState(false);

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
    },
    {
      title: "ECHOS ABOVE",
      image: echoes,
      description: "Associate Cinematographer",
      mediaFit: "contain",
      mediaClassName: "rounded-full",
      mediaBackground: "bg-[#9eb9cf]",
      instagramLinks: [
        "https://www.instagram.com/reel/DWluUBCER0M/",
        "https://www.instagram.com/reel/DWtdt-iEd9C/",
        "https://www.instagram.com/reel/DW33GZDEUnp/",
        "https://www.instagram.com/reel/DXCG8kKEeCL/",
        "https://www.instagram.com/reel/DXO9Iy0kcNq/"
      ]
    }
  ];

  const roles = ["All", "Associate Cinematographer", "DOP"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter(p => p.description === filter);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <PageBackdrop />

      {/* HEADER */}
      <SiteHeader />

      {/* HEADING (MATCHES WEBSERIES) */}
      <div className="relative z-10 pt-28 px-4 sm:px-6 max-w-[1700px] mx-auto">

        <div className="mb-8 flex flex-col items-center gap-6">

          <h1
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-4xl sm:text-6xl md:text-8xl uppercase tracking-[0.2em] sm:tracking-widest text-center text-[#241b15]"
          >
            Commercials
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

        <div className="mx-auto mb-10 h-px w-24 bg-[#8f6945]/55" />

      </div>

      <ProjectGrid
        projects={filteredProjects}
        className="relative z-10 mx-auto w-full max-w-[1748px] px-6 pb-20 md:grid-cols-3"
        mediaAspectClass="aspect-[16/10]"
        onProjectClick={proj => {
          if (proj.instagramLinks) {
            setInstagramList(proj.instagramLinks);
            setInstagramIndex(0);
            setInstagramOpen(true);
            return;
          }

          setVideoList(proj.videos);
          setVideoIndex(0);
          setVideoOpen(true);
        }}
      />

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

      {/* INSTAGRAM REELS VIEWER */}
      {instagramOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setInstagramOpen(false)}
        >
          <div
            className="w-[min(90vw,440px)] rounded-xl bg-[#241b15] p-5 text-[#f4ede3] shadow-2xl sm:p-6"
            onClick={event => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#d8c7b4]">Commercials</p>
                <h2 className="mt-1 text-sm font-semibold uppercase tracking-[0.18em]">Echos Above</h2>
              </div>
              <button
                onClick={() => setInstagramOpen(false)}
                aria-label="Close Echos Above viewer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-white/20"
              >
                ×
              </button>
            </div>

            <a
              href={instagramList[instagramIndex]}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg bg-[#9eb9cf]"
            >
              <img
                src={echoes}
                alt="Echos Above reel preview"
                className="h-full aspect-square rounded-full object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 transition group-hover:bg-black/50">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-black/30 text-2xl text-white transition group-hover:scale-105">
                  ▶
                </span>
                <span className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Watch on Instagram
                </span>
              </div>
              <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-[11px] uppercase tracking-widest text-white">
                Reel {instagramIndex + 1} / {instagramList.length}
              </span>
            </a>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                onClick={() => setInstagramIndex((instagramIndex - 1 + instagramList.length) % instagramList.length)}
                className="rounded-md bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
              >
                Previous
              </button>
              <span className="text-xs uppercase tracking-widest text-[#d8c7b4]">
                {instagramIndex + 1} / {instagramList.length}
              </span>
              <button
                onClick={() => setInstagramIndex((instagramIndex + 1) % instagramList.length)}
                className="rounded-md bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20"
              >
                Next
              </button>
            </div>
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
