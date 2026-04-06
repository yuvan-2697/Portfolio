import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShare2, FiCopy } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import SiteHeader from "./components/SiteHeader";

import tea1 from "./assets/tea1.jpg";
import tea2 from "./assets/tea2.jpg";
import tea3 from "./assets/tea3.jpg";
import tea4 from "./assets/tea4.jpg";
import tea5 from "./assets/tea5.jpg";
import tea6 from "./assets/tea6.jpg";
import tea7 from "./assets/tea7.jpg";

import dug1 from "./assets/dug1.png";
import dug2 from "./assets/dug2.png";
import dug3 from "./assets/dug3.png";
import dug4 from "./assets/dug4.png";
import dug5 from "./assets/dug5.png";
import dug6 from "./assets/dug6.png";
import dug7 from "./assets/dug7.png";

import br from "./assets/br.png";
import sach from "./assets/sach.png";
import ran1 from "./assets/ran1.png";
import ran2 from "./assets/ran2.png";
import sbv1 from "./assets/sbv1.png";
import sbv2 from "./assets/sbv2.png";
import sr1 from "./assets/sr1.png";
import sr2 from "./assets/sr2.png";
import celeb1 from "./assets/celeb1.png";
import celeb2 from "./assets/celeb2.png";

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  const [shareOpen, setShareOpen] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const youtubeLink = "https://www.youtube.com/embed/l36QKGyqFwE";

  const projects = [
    { image: tea1, title: "Soodana Koppaigal" },
    { image: tea2, title: "Soodana Koppaigal" },
    { image: tea3, title: "Soodana Koppaigal" },
    { image: tea4, title: "Soodana Koppaigal" },
    { image: tea5, title: "Soodana Koppaigal" },
    { image: tea6, title: "Soodana Koppaigal" },
    { image: tea7, title: "Soodana Koppaigal" },

    { image: dug1, title: "Dug Out", type: "dug" },
    { image: dug2, title: "Dug Out", type: "dug" },
    { image: dug3, title: "Dug Out", type: "dug" },
    { image: dug4, title: "Dug Out", type: "dug" },
    { image: dug5, title: "Dug Out", type: "dug" },
    { image: dug6, title: "Dug Out", type: "dug" },
    { image: dug7, title: "Dug Out", type: "dug" },

    { image: br, title: "Kalaignar 100 Tribute" },
    { image: sach, title: "Kalaignar 100 Tribute" },
    { image: ran1, title: "Kalaignar 100 Tribute" },
    { image: ran2, title: "Kalaignar 100 Tribute" },
    { image: sbv1, title: "Kalaignar 100 Tribute" },
    { image: sbv2, title: "Kalaignar 100 Tribute" },
    { image: sr1, title: "Kalaignar 100 Tribute" },
    { image: sr2, title: "Kalaignar 100 Tribute" },
    { image: celeb1, title: "Kalaignar 100 Tribute" },
    { image: celeb2, title: "Kalaignar 100 Tribute" },
  ];

  // ✅ SHARE
  const handleShare = (index) => {
    const url = `${window.location.origin}${window.location.pathname}#img-${index}`;
    setShareLink(url);
    setShareOpen(true);
  };

  // ✅ COPY FIX (works everywhere)
const [, setCopied] = useState(false);

const copyToClipboard = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareLink);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = shareLink;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  // subtle feedback
  setCopied(true);
  setTimeout(() => setCopied(false), 1500);
};

  // ✅ SCROLL
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, []);

  return (

    <div className="relative min-h-screen bg-gradient-to-b from-[#D9D2C8] via-[#CFC8BE] to-[#BFB7AC] text-gray-900 overflow-hidden">

      {/* HEADER */}
      <SiteHeader headerClassName="absolute top-0 left-0 w-full z-20 px-4 py-5 sm:px-8 sm:py-6 flex justify-between items-center" />

      {/* MAIN */}
      <main className="relative z-10 flex flex-col items-center text-center px-4 pt-24 sm:px-6 sm:pt-28">

        <Link to="/about">
        <h1
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="mb-3 text-4xl uppercase tracking-[0.18em] transition hover:opacity-80 sm:mb-4 sm:text-6xl sm:tracking-[0.24em] md:text-8xl md:tracking-widest"
        >
          Ribhu Sarma
        </h1>
      </Link>

        <span
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="mb-5 max-w-[20rem] text-lg uppercase tracking-[0.22em] sm:mb-6 sm:max-w-none sm:text-2xl sm:tracking-[0.28em] md:text-4xl md:tracking-[0.35em]"
        >
          Director of Photography
        </span>

        <div className="mb-8 h-px w-20 bg-gray-400 sm:mb-10 sm:w-24" />

        <p
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="mb-14 max-w-xl px-2 text-base leading-relaxed sm:mb-20 sm:max-w-3xl sm:px-0 sm:text-xl md:text-2xl"
        >
          Crafting images with light, movement, and emotion—across films,
          commercials, music videos and documentaries.
        </p>

        {/* GRID */}
        <div className="grid w-full max-w-[1700px] grid-cols-1 gap-10 sm:gap-14 md:grid-cols-2">

          {projects.map((project, index) => (

            <div
              id={`img-${index}`}
              key={index}
              className="group flex justify-center cursor-pointer"
              onClick={() => project.type === "dug" && setVideoOpen(true)}
            >

              <div className="relative inline-block">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <h2
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                    className="text-center text-lg uppercase tracking-[0.2em] text-white sm:text-2xl sm:tracking-widest"
                  >
                    {project.title}
                  </h2>
                </div>

                {/* SHARE ICON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(index);
                  }}
                  className="absolute bottom-3 right-3 bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <FiShare2 className="text-white text-sm" />
                </button>

              </div>

            </div>
          ))}

        </div>

      </main>

      {/* VIDEO */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setVideoOpen(false)}>
          <div className="w-[90%] md:w-[900px] aspect-video">
            <iframe src={youtubeLink} width="100%" height="100%" allowFullScreen />
          </div>
        </div>
      )}

      {/* SHARE MODAL */}
      {shareOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setShareOpen(false)}>
          <div className="bg-[#f2f2f2] w-[90%] max-w-2xl p-10 relative" onClick={(e) => e.stopPropagation()}>

            <button className="absolute top-6 right-6 text-2xl" onClick={() => setShareOpen(false)}>✕</button>

            <div className="flex justify-center gap-10 mb-8 text-2xl">

              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`} target="_blank">
                <FaFacebookF />
              </a>

              <a href={`https://twitter.com/intent/tweet?url=${shareLink}`} target="_blank">
                <FaTwitter />
              </a>

              <a href={`https://pinterest.com/pin/create/button/?url=${shareLink}`} target="_blank">
                <FaPinterestP />
              </a>

              <a href={`mailto:?subject=Check this out&body=${shareLink}`}>
                <FiMail />
              </a>

            </div>

            <div className="flex border border-gray-400">
              <input value={shareLink} readOnly className="flex-1 px-4 py-3 bg-transparent" />
              <button onClick={copyToClipboard} className="bg-black px-5 flex items-center">
                <FiCopy className="text-white" />
              </button>
            </div>

          </div>
        </div>
      )}

      <footer style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-center py-10 text-xs">
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}
