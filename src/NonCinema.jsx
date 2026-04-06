import React, { useState } from "react";
import SiteHeader from "./components/SiteHeader";
import kaipulla from "./assets/kaipulla1.jpeg";

export default function NonCinema() {

  // ✅ NEW (video popup)
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // ✅ USE EMBED LINKS
  const projects = [
    {
      image: kaipulla,
      title: "Kaipulla",
      video: "https://www.youtube.com/embed/mG1ajyL_vX4"
    },
  ];

  return (

    <div className="relative min-h-screen bg-gradient-to-b from-[#D9D2C8] via-[#CFC8BE] to-[#BFB7AC] text-gray-900 overflow-hidden">

      {/* HEADER */}
      <SiteHeader headerClassName="absolute top-0 left-0 w-full z-20 px-8 py-6 flex justify-between items-center" />

      {/* MAIN */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-28">

        <h1
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-6xl md:text-8xl uppercase tracking-widest mb-6"
        >
          Non Cinema
        </h1>

        <div className="h-px w-24 bg-gray-400 mb-10" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-[1700px]">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group flex flex-col items-center cursor-pointer"
              onClick={() => {
                if (project.video) {
                  setCurrentVideo(project.video);
                  setVideoOpen(true);
                }
              }}
            >

            <div className="relative inline-block">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[95%] mx-auto h-[560px] object-cover transition duration-500 group-hover:scale-105"
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

              <h3
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="mt-4 text-center text-base uppercase tracking-[0.18em] text-gray-800 sm:text-lg sm:tracking-widest"
              >
                Kaipulla Music Video
              </h3>

            </div>

          ))}

        </div>

      </main>

      {/* ✅ VIDEO POPUP */}
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
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="w-full text-center px-6 py-10 text-xs text-black"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}
