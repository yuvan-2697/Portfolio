// events/Videos.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Videos() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Webseries", link: "/webseries" },
    { name: "Movies", link: "/movies" },
    { name: "Commercials", link: "/commercials" },
    { name: "About", link: "/about" },
    { name: "Videos", link: "/music/videos" }, // updated link to match route
  ];

  const videos = [
    { title: "Dummy Video 1", url: "https://www.youtube.com/embed/Y20Uc_GffDY" },
    { title: "Dummy Video 2", url: "https://www.youtube.com/embed/JPzeJVq0XYU" },
    { title: "Dummy Video 3", url: "https://www.youtube.com/embed/vziFYMEfM_M" },
    { title: "Dummy Video 4", url: "https://www.youtube.com/embed/h-Wo7rWX7Bg" },
    { title: "Dummy Video 5", url: "https://www.youtube.com/embed/VKnAUG99CX0" },
    { title: "Dummy Video 6", url: "https://www.youtube.com/embed/pH0OJnawrL4" },
  ];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20 selection:text-white bg-black">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center">
        <Link
          to="/"
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-lg tracking-[0.35em] uppercase text-white/90 hover:text-white transition"
        >
          RS
        </Link>

        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl focus:outline-none">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          <div className={`absolute right-0 mt-3 w-48 bg-black/90 rounded-xl shadow-lg flex flex-col py-2 z-30 transform transition-all duration-300 ease-in-out origin-top ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}`}>
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.link}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 text-white/80 hover:text-white uppercase tracking-[0.25em] transition-colors ${
                  location.pathname === tab.link ? "font-semibold text-white" : ""
                }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 px-6 pb-16 max-w-7xl mx-auto">
        {/* Overall Heading */}
        <h1
          style={{ fontFamily: "'Simplifica', sans-serif" }}
          className="text-5xl sm:text-6xl md:text-7xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-12 text-center animate-fade-in-slow"
        >
          Music Videos
        </h1>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.map((video, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">

              {/* Embedded YouTube Video */}
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Heading Below Video */}
              <h1
                style={{ fontFamily: "'Simplifica', sans-serif" }}
                className="text-2xl sm:text-3xl md:text-3xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mt-4 animate-fade-in-slow text-center"
              >
                {video.title}
              </h1>

            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

      {/* Animation CSS */}
      <style>{`
        @keyframes fadeInSlow {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-slow {
          animation: fadeInSlow 1.5s ease forwards;
        }
      `}</style>
    </div>
  );
}
