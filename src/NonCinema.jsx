import React, { useState } from "react";
import PageBackdrop from "./components/PageBackdrop";
import SiteHeader from "./components/SiteHeader";
import ProjectGrid from "./components/ProjectGrid";
import kaipulla from "./assets/kaipulla1.jpeg";
import paalMazhai from "./assets/paal.jpeg";
import standup from "./assets/sa.png";
import thePaiyen from "./assets/pai.png";
import hyderabadGig from "./assets/hq721.jpg";
import modharathri from "./assets/modharathri.jpeg";

export default function NonCinema() {
  const [filter, setFilter] = useState("All");

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
      image: paalMazhai,
      title: "Paal Mazhai",
      subtitle: "Paal Mazhai",
      role: "Associate DOP",
      fit: "wide",
      video: "https://www.youtube.com/embed/wH2XBhfxCdw"
    },
    {
      image: thePaiyen,
      title: "THE PAIYEN",
      subtitle: "THE PAIYEN",
      role: "DOP",
      fit: "wide",
      video: "https://www.youtube.com/embed/muUZc6Msu3w"
    },
    {
      image: hyderabadGig,
      title: "Hyderabad Gig",
      subtitle: "Hyderabad Gig",
      role: "Assistant DOP",
      fit: "square",
      link: "https://youtube.com/playlist?list=PLGjAbxgreXJwhBta2dH0gwdBD54bryNKV&si=yfb6tTRAf1jebYm9"
    },
    {
      image: modharathri,
      title: "Modha rathri Promo",
      subtitle: "Modha rathri Promo",
      role: "Associate DOP",
      fit: "natural",
      link: "https://youtu.be/C9fSuoVoluY?si=Qv4D63O_6UkJ-8Ae"
    },
  ];

  const roles = ["All", "Associate DOP", "Assistant DOP", "DOP"];
  const filteredProjects =
    filter === "All" ? projects : projects.filter(project => project.role === filter);

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <PageBackdrop />

      {/* HEADER */}
      <SiteHeader headerClassName="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center" />

      {/* MAIN */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-28">

        <div className="mb-8 flex w-full flex-col items-center gap-6">
          <h1
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-4xl uppercase tracking-[0.2em] sm:text-6xl md:text-8xl"
          >
            Non Cinema
          </h1>

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

        <div className="mb-10 h-px w-24 bg-[#8f6945]/55" />

        <ProjectGrid
          projects={filteredProjects}
          getCategory={project => project.role}
          className="w-full max-w-[1700px] md:grid-cols-3"
          mediaAspectClass="aspect-[16/10]"
          onProjectClick={project => {
            if (project.link) {
              window.open(project.link, "_blank", "noopener,noreferrer");
              return;
            }

            if (project.video) {
              setCurrentVideo(project.video);
              setVideoOpen(true);
            }
          }}
        />

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
