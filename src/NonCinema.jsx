import React, { useState } from "react";
import PageBackdrop from "./components/PageBackdrop";
import SiteHeader from "./components/SiteHeader";
import kaipulla from "./assets/kaipulla1.jpeg";
import standup from "./assets/sa.png";
import hyderabadGig from "./assets/hq721.jpg";

export default function NonCinema() {

  // ✅ NEW (video popup)
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  // ✅ USE EMBED LINKS
  const projects = [
    {
      image: kaipulla,
      title: "Kaipulla",
      subtitle: "Kaipulla Music Video",
      role: "Associate DOP",
      video: "https://www.youtube.com/embed/mG1ajyL_vX4"
    },
    {
      image: standup,
      title: "We Need to Talk",
      subtitle: "We Need to Talk",
      role: "Associate DOP",
      video: "https://www.youtube.com/embed/IVDxsK6U220"
    },
    {
      image: hyderabadGig,
      title: "Hyderabad Gig",
      subtitle: "Hyderabad Gig",
      role: "Assistant DOP",
      fit: "square",
      link: "https://youtube.com/playlist?list=PLGjAbxgreXJwhBta2dH0gwdBD54bryNKV&si=yfb6tTRAf1jebYm9"
    },
  ];

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <PageBackdrop />

      {/* HEADER */}
      <SiteHeader headerClassName="absolute top-0 left-0 w-full z-20 px-8 py-6 flex justify-between items-center" />

      {/* MAIN */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-28">

        <h1
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="mb-6 text-4xl uppercase tracking-[0.2em] sm:text-6xl md:text-8xl"
        >
          Non Cinema
        </h1>

        <div className="mb-10 h-px w-24 bg-[#8f6945]/55" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-[1700px]">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group flex flex-col items-center cursor-pointer"
              onClick={() => {
                if (project.link) {
                  window.open(project.link, "_blank", "noopener,noreferrer");
                  return;
                }

                if (project.video) {
                  setCurrentVideo(project.video);
                  setVideoOpen(true);
                }
              }}
            >

            <div
              className={
                project.fit === "square"
                  ? "relative h-[560px] w-[95%] max-w-[560px] overflow-hidden shadow-[0_24px_55px_rgba(62,43,19,0.14)]"
                  : "relative inline-block"
              }
            >

                <img
                  src={project.image}
                  alt={project.title}
                  className={
                    project.fit === "square"
                      ? "h-full w-full object-cover object-[78%_center] transition duration-500 group-hover:scale-105"
                      : "mx-auto h-[560px] w-[95%] object-cover shadow-[0_24px_55px_rgba(62,43,19,0.14)] transition duration-500 group-hover:scale-105"
                  }
                />

                <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,rgba(35,25,16,0.14),rgba(35,25,16,0.62))] opacity-0 transition group-hover:opacity-100">
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
                className="mt-4 text-center text-base uppercase tracking-[0.18em] text-[#4a3321] sm:text-lg sm:tracking-widest"
              >
                {project.subtitle}
              </h3>

              <p
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="mt-2 text-center text-xs uppercase tracking-[0.24em] text-[#7f6246] sm:text-sm"
              >
                {project.role}
              </p>

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
        className="w-full text-center px-6 py-10 text-xs text-[#6f5740]"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}
