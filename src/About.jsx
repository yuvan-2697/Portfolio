import React, { useEffect, useRef, useState } from "react";
import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";
import portrait from "./assets/ribhuabout.jpg";
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
    <div className="relative min-h-screen bg-gradient-to-b from-[#D9D2C8] via-[#CFC8BE] to-[#BFB7AC] text-gray-900">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.25),transparent_60%)]"></div>
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* HEADER */}
      <SiteHeader />

      {/* MAIN */}
      <main className="relative z-10 pt-32 px-6 pb-16 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* IMAGE */}
        <div className="flex-shrink-0 w-full md:w-1/2 relative overflow-hidden md:-mt-2">

          <img
            src={portrait}
            alt="Ribhu Sarma"
            className={`shadow-xl w-full max-w-[500px] h-auto object-cover mx-auto md:mx-0 transition-all duration-700 ${
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
              className="text-5xl md:text-6xl tracking-widest uppercase text-black mb-6"
            >
              About Me
            </h1>

            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed"
            >
              Hey there! I’m Ribhu Sarma, an engineering grad from Chennai who
              accidentally fell in love with cinematography. I chase stories
              with my camera, playing with light, movement, and emotion to turn
              ordinary moments into something cinematic.
            </p>

            <p
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed"
            >
              When I’m not filming, you’ll find me hunting for the perfect cup
              of coffee, devouring anything edible, or catching up on my
              favorite hobby—sleeping like it’s an art form. I’m all about
              storytelling, good vibes, and connecting with fellow humans who
              love a little chaos, creativity, and caffeine.
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
                className={`flex items-center gap-4 text-right text-lg md:text-xl font-semibold transition-all duration-700 hover:text-black ${
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
        className="absolute bottom-0 w-full text-center px-6 pb-6 text-xs text-gray-600"
      >
        © {new Date().getFullYear()} Ribhu Sarma. All rights reserved.
      </footer>

    </div>
  );
}
