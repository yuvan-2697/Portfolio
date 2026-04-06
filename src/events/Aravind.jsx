// events/Aravind.jsx
import React from "react";
import SiteHeader from "../components/SiteHeader";

export default function Aravind() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-white/20 selection:text-white bg-black">

      {/* Header */}
      <SiteHeader
        logoClassName="text-lg tracking-[0.35em] uppercase text-white/90 hover:text-white transition"
        buttonClassName="text-white text-3xl focus:outline-none"
      />

      {/* Main Content */}
      <main className="relative z-10 pt-32 px-6 pb-16 max-w-6xl mx-auto flex flex-col items-center gap-12">

        {/* Heading */}
        <h1
            style={{ fontFamily: "'Simplifica', sans-serif" }}
            className="text-5xl md:text-7xl tracking-widest uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-6 animate-fade-in-slow text-center"
            >
            We Need to Talk – A Standup Show
            </h1>


        {/* Embedded YouTube Video */}
        <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/xPt1j0HZFOo"
            title="We Need to Talk Da – A Standup Show"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-white/60" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

      {/* Gradient Animation CSS */}
      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-text {
          background: linear-gradient(270deg, #ccc, #fff, #ccc);
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientAnimation 8s ease infinite;
        }
      `}</style>
    </div>
  );
}
