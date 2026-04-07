import React from "react";
import PageBackdrop from "../components/PageBackdrop";
import SiteHeader from "../components/SiteHeader";

export default function Videos() {
  const videos = [
    { title: "Dummy Video 1", url: "https://www.youtube.com/embed/Y20Uc_GffDY" },
    { title: "Dummy Video 2", url: "https://www.youtube.com/embed/JPzeJVq0XYU" },
    { title: "Dummy Video 3", url: "https://www.youtube.com/embed/vziFYMEfM_M" },
    { title: "Dummy Video 4", url: "https://www.youtube.com/embed/h-Wo7rWX7Bg" },
    { title: "Dummy Video 5", url: "https://www.youtube.com/embed/VKnAUG99CX0" },
    { title: "Dummy Video 6", url: "https://www.youtube.com/embed/pH0OJnawrL4" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <PageBackdrop />

      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-32">
        <h1
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="mb-12 text-center text-4xl uppercase tracking-[0.2em] text-[#241b15] sm:text-5xl md:text-6xl"
        >
          Music Videos
        </h1>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="aspect-video w-full overflow-hidden shadow-[0_24px_55px_rgba(62,43,19,0.14)]">
                <iframe
                  className="h-full w-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <h2
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="mt-4 text-center text-lg uppercase tracking-[0.18em] text-[#4a3321] sm:text-xl md:text-2xl"
              >
                {video.title}
              </h2>
            </div>
          ))}
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
