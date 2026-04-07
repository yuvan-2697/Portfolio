import React, { useState } from "react";
import kk from "./assets/kk.png";
import bb from "./assets/3bhk.png";
import mb from "./assets/mb.png";
import dd from "./assets/dance.png";
import lb from "./assets/wslb.jpg";
import PageBackdrop from "./components/PageBackdrop";
import SiteHeader from "./components/SiteHeader";

export default function WebSeries() {

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

  const roles = ["All", "Assistant Cinematographer", "Associate Cinematographer"];

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <PageBackdrop />

      {/* HEADER */}
      <SiteHeader />


      {/* HEADING */}

{/* HEADING */}
<div className="relative z-10 pt-28 px-4 sm:px-6 max-w-[1700px] mx-auto">

  {/* TITLE + FILTER ROW */}
  <div className="flex flex-col items-center gap-6 mb-6 lg:relative lg:min-h-[220px] lg:justify-center">

    {/* TITLE (centered) */}
    <h1
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="text-4xl sm:text-6xl md:text-8xl uppercase tracking-[0.2em] sm:tracking-widest text-center text-[#241b15]"
    >
      Webseries
    </h1>

    {/* FILTER (right side, aligned with title) */}
    <div className="w-full max-w-md lg:absolute lg:right-0 lg:top-1/2 lg:w-[260px] lg:max-w-none lg:-translate-y-1/2">

      <h2
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#6f5740] lg:text-right"
      >
        Filter by Role
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {roles.map(role => (

        <button
          key={role}
          onClick={() => setFilter(role)}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className={`w-full rounded-lg px-4 py-3 text-center text-sm transition sm:text-base lg:text-right ${
            filter === role
              ? "bg-[#4a3321] text-[#f4ede3]"
              : "bg-[#d8c7b4] text-[#5c442f] hover:bg-[#ccb79f]"
          }`}
        >
          {role}
        </button>

      ))}
      </div>

    </div>

  </div>

  {/* DIVIDER */}
  <div className="h-px w-24 bg-[#8f6945]/55 mx-auto mb-10" />

  
</div>


      {/* PROJECT GRID */}

      <div className="grid grid-cols-1 gap-10 max-w-6xl mx-auto px-4 pb-20 sm:px-6 md:grid-cols-2">

        {filteredProjects.map(proj => (

          <div
            key={proj.title}
            className="relative group cursor-pointer"
            onClick={() => {
              setCurrentVideo(proj.video);
              setVideoOpen(true);
            }}
          >

            <img
              src={proj.image}
              alt={proj.title}
              className="h-[320px] w-full object-cover shadow-[0_24px_55px_rgba(62,43,19,0.14)] transition duration-500 group-hover:scale-105 sm:h-[420px]"
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
              className="mt-4 text-base uppercase tracking-[0.18em] text-[#4a3321] sm:text-lg sm:tracking-widest"
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
        className="w-full text-center px-6 pb-6 text-xs text-[#6f5740]"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}
