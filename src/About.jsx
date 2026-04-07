import React, { useEffect, useRef, useState } from "react";
import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";
import portrait from "./assets/ribhuabout.jpg";
import PageBackdrop from "./components/PageBackdrop";
import SiteHeader from "./components/SiteHeader";

export default function About() {
  const [loaded, setLoaded] = useState(false); // ✅ NEW

  const textRef = useRef(null);
  const contactRef = useRef([]);

  // ✅ PAGE LOAD ANIMATION
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  // ✅ SCROLL ANIMATION (UNCHANGED)
  useEffect(() => {
    const handleScroll = () => {
      const elements = [textRef.current, ...contactRef.current];
      elements.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("opacity-100", "translate-x-0", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contacts = [
    {
      label: "Email",
      value: "ribhudop@gmail.com",
      link: "mailto:ribhudop@gmail.com",
      icon: <FiMail />,
    },
    {
      label: "Phone",
      value: "+91 8489746443",
      link: "tel:+918489746443",
      icon: <FiPhone />,
    },
    {
      label: "Instagram",
      value: "@ribhu.sarma",
      link: "https://www.instagram.com/ribhusarma",
      icon: <FiInstagram />,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#b8a690] text-[#241b15]">
      <PageBackdrop />

      {/* HEADER */}
      <SiteHeader />

      {/* MAIN */}
      <main className="relative z-10 pt-32 px-6 pb-16 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* IMAGE */}
        <div className="flex-shrink-0 w-full md:w-1/2 relative overflow-hidden md:-mt-2">

          <img
            src={portrait}
            alt="Ribhu Sarma"
            className={`mx-auto h-auto w-full max-w-[500px] object-cover shadow-[0_24px_55px_rgba(62,43,19,0.14)] transition-all duration-700 md:mx-0 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105`}
          />

        </div>

        {/* TEXT */}
        <div className="flex-1 flex flex-col gap-12 mt-0">

          <div
            ref={textRef}
            className={`transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >

            <h1
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mb-6 text-5xl uppercase tracking-[0.2em] text-[#241b15] md:text-6xl"
            >
              About Me
            </h1>

            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mb-6 text-lg leading-relaxed text-[#3d3126] md:text-xl"
            >
            Hi, I’m Ribhu Sarma, a cinematographer driven by a deep passion for visual storytelling. What started as curiosity has grown into a dedicated pursuit of capturing stories through light, movement, and emotion, turning everyday moments into cinematic experiences.  
            </p>

            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mb-6 text-lg leading-relaxed text-[#3d3126] md:text-xl"
            >
              
            Beyond filmmaking, I’m drawn to observing people, places, and fleeting moments that often go unnoticed—finding inspiration in the details that shape authentic stories. I value creativity, meaningful storytelling, and genuine connections, and I’m always open to collaborating with like-minded individuals who share a passion for visual expression.  
            </p>

          </div>

          {/* CONTACTS */}
          <div className="flex flex-col items-end gap-6">

            {contacts.map((contact, idx) => (
              <a
                key={contact.label}
                ref={(el) => (contactRef.current[idx] = el)}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-4 text-right text-lg font-semibold text-[#5c442f] transition-all duration-700 hover:text-[#241b15] md:text-xl ${
                  loaded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{
                  transitionDelay: `${idx * 200 + 400}ms`,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <span className="text-2xl md:text-3xl">
                  {contact.icon}
                </span>
                <span>{contact.value}</span>
              </a>
            ))}

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-[#6f5740]"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}
