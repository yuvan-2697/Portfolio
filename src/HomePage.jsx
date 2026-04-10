import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiCopy, FiMail, FiShare2 } from "react-icons/fi";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
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
  const [, setCopied] = useState(false);

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

  const handleShare = (index) => {
    const url = `${window.location.origin}${window.location.pathname}#img-${index}`;
    setShareLink(url);
    setShareOpen(true);
  };

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

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(239,230,217,0.52),rgba(184,166,144,0.96))]" />
      <div className="portfolio-breathe pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,245,234,0.58),transparent_56%)]" />
      <div className="portfolio-drift-left pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#d2b89a]/24 blur-3xl sm:h-96 sm:w-96" />
      <div className="portfolio-drift-right pointer-events-none absolute -right-20 top-[24rem] h-72 w-72 rounded-full bg-[#6b4728]/18 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18rem] bg-[linear-gradient(180deg,transparent,rgba(86,58,35,0.14))]" />
      <div className="portfolio-line-draw pointer-events-none absolute left-6 top-28 h-24 w-px bg-[#3d2b1d]/14 sm:left-10 sm:h-32" />
      <div className="portfolio-line-draw pointer-events-none absolute right-6 top-28 h-24 w-px bg-[#3d2b1d]/14 sm:right-10 sm:h-32" />

      <SiteHeader headerClassName="absolute top-0 left-0 w-full z-20 px-4 py-5 sm:px-8 sm:py-6 flex justify-between items-center" />

      <main className="relative z-10 flex flex-col items-center px-4 pt-24 text-center sm:px-6 sm:pt-28">
        <section className="portfolio-rise mb-14 w-full max-w-6xl border border-[#6f4a2c]/14 bg-[linear-gradient(180deg,rgba(222,208,192,0.86),rgba(210,194,176,0.9))] px-5 py-8 shadow-[0_22px_45px_rgba(42,27,15,0.12),0_55px_120px_rgba(83,54,28,0.18)] sm:mb-20 sm:px-8 sm:py-12 md:px-12">
          <div className="portfolio-line-draw mx-auto mb-6 h-px w-24 bg-[#8f6945]/55 sm:mb-8 sm:w-32" />

          <Link to="/about">
            <h1
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mb-4 text-4xl uppercase tracking-[0.16em] transition hover:opacity-80 sm:text-6xl sm:tracking-[0.2em] md:text-8xl md:tracking-[0.24em]"
            >
              Ribhu Sarma
            </h1>
          </Link>

          <span
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="mb-6 inline-block max-w-[20rem] text-sm uppercase tracking-[0.38em] text-[#5c442f] sm:max-w-none sm:text-lg md:text-2xl"
          >
            Director of Photography
          </span>

          <div className="portfolio-line-draw mx-auto mb-8 h-px w-16 bg-[#8f6945]/55 sm:mb-10 sm:w-24" />

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[minmax(0,2.2fr)_minmax(220px,1fr)] md:items-start md:text-left">
            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="text-base leading-relaxed text-[#2f241c] sm:text-xl md:text-2xl"
            >
              Crafting images with light, movement, and emotion across films,
              commercials, music videos and documentaries.
            </p>

            <div
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="pt-4 text-center text-xs uppercase tracking-[0.28em] text-[#5c442f] md:text-left"
            >
              <div className="mx-auto mb-4 h-px w-16 bg-[#8f6945]/55 md:mx-0 md:w-20" />
              <div className="text-sm font-semibold tracking-[0.32em] text-[#4a3321] sm:text-base">
                Chennai
              </div>
              <Link
                to="/movies"
                className="mt-3 block text-[0.7rem] tracking-[0.22em] text-[#7f6246] transition hover:text-[#4a3321]"
              >
                Feature Films
              </Link>
              <Link
                to="/webseries"
                className="mt-2 block text-[0.7rem] tracking-[0.22em] text-[#7f6246] transition hover:text-[#4a3321]"
              >
                Webseries
              </Link>
              <Link
                to="/commercials"
                className="mt-2 block text-[0.7rem] tracking-[0.22em] text-[#7f6246] transition hover:text-[#4a3321]"
              >
                Commercials
              </Link>
            </div>
          </div>
        </section>

        <div className="grid w-full max-w-[1700px] grid-cols-1 gap-10 sm:gap-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              id={`img-${index}`}
              key={index}
              className="portfolio-gallery-card group flex justify-center cursor-pointer"
              style={{ animationDelay: `${Math.min(index * 55, 660)}ms` }}
              onClick={() => project.type === "dug" && setVideoOpen(true)}
            >
              <div className="portfolio-gallery-frame relative inline-block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="block h-auto w-full"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(index);
                  }}
                  className="absolute bottom-4 right-4 rounded-full bg-[#dcc8af]/92 p-2 opacity-0 transition group-hover:opacity-100"
                >
                  <FiShare2 className="text-[#4a3321] text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setVideoOpen(false)}
        >
          <div className="aspect-video w-[90%] md:w-[900px]">
            <iframe src={youtubeLink} width="100%" height="100%" allowFullScreen />
          </div>
        </div>
      )}

      {shareOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShareOpen(false)}
        >
          <div
            className="relative w-[90%] max-w-2xl bg-[#f2f2f2] p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 text-2xl sm:right-6 sm:top-6"
              onClick={() => setShareOpen(false)}
            >
              x
            </button>

            <div className="mb-8 flex justify-center gap-6 text-2xl sm:gap-10">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`} target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>

              <a href={`https://twitter.com/intent/tweet?url=${shareLink}`} target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>

              <a href={`https://pinterest.com/pin/create/button/?url=${shareLink}`} target="_blank" rel="noreferrer">
                <FaPinterestP />
              </a>

              <a href={`mailto:?subject=Check this out&body=${shareLink}`}>
                <FiMail />
              </a>
            </div>

            <div className="flex border border-gray-400">
              <input value={shareLink} readOnly className="flex-1 bg-transparent px-4 py-3 text-sm sm:text-base" />
              <button onClick={copyToClipboard} className="flex items-center bg-black px-4 sm:px-5">
                <FiCopy className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <footer style={{ fontFamily: "'Montserrat', sans-serif" }} className="py-10 text-center text-xs">
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>
    </div>
  );
}
