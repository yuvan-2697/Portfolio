import React from "react";
import PageBackdrop from "../components/PageBackdrop";
import SiteHeader from "../components/SiteHeader";

export default function Aravind() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <PageBackdrop />

      <SiteHeader />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-16 pt-32">
        <h1
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="mb-6 text-center text-4xl uppercase tracking-[0.2em] text-[#241b15] md:text-6xl"
        >
          We Need to Talk - A Standup Show
        </h1>

        <div className="aspect-video w-full max-w-4xl overflow-hidden shadow-[0_24px_55px_rgba(62,43,19,0.14)]">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/xPt1j0HZFOo"
            title="We Need to Talk Da - A Standup Show"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </main>

      <footer
        className="absolute bottom-0 w-full px-6 pb-6 text-center text-xs text-[#6f5740]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>
    </div>
  );
}
