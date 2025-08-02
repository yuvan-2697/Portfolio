import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import myphoto from './assets/yuvan.jpeg';
import heroImage from './assets/IMG_1561.jpg';
import heroImage1 from './assets/IMG_0133.jpg';

const photos = [
  {
    src: "https://source.unsplash.com/featured/?nature,water",
    alt: "Nature and water",
  },
  {
    src: "https://source.unsplash.com/featured/?wildlife",
    alt: "Wildlife",
  },
  {
    src: "https://source.unsplash.com/featured/?landscape",
    alt: "Landscape",
  },
  {
    src: "https://source.unsplash.com/featured/?portrait",
    alt: "Portrait",
  },
  {
    src: "https://source.unsplash.com/featured/?urban",
    alt: "Urban",
  },
  {
    src: "https://source.unsplash.com/featured/?macro",
    alt: "Macro",
  },
];

export default function Portfolio() {
  // ✅ HOOKS MUST BE INSIDE COMPONENT
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowAbout(true);
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect(); // cleanup
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <div className="z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase">
            Through My Lens
          </h1>
          <p className="text-xl mt-4 tracking-wide">
            Capturing stories through light, shadow, and stillness
          </p>
        </div>
      </header>
      {/* Navigation button */}
      <div className="absolute top-6 right-6 z-50" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-3xl focus:outline-none hover:text-gray-600 transition"
          title="Menu"
        >
          &#9776; {/* hamburger icon */}
        </button>

        {menuOpen && (
          <div className="mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48 py-2">
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              About Me
            </a>
            <a
              href="/gallery"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              My Gallery
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              Contact
            </a>
            <a
              href="#more"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              More
            </a>
          </div>
        )}
      </div>



      <section
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white pb-40"
        style={{ backgroundImage: `url(${heroImage1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase">
            Yuvan Shankar
          </h1>
          <p className="text-xl mt-6 tracking-wide italic text-gray-200">
            This is how I see the world.
          </p>
          <Link to="/gallery" className="mt-4 block animate-bounce text-white text-3xl" title="View my photos">
            &#8593;
          </Link>

        </div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className={`max-w-5xl mx-auto -mt-60 px-4 flex flex-col md:flex-row items-center gap-10 relative z-20 ${
          showAbout ? "fade-up" : ""
        }`}
      >
        <div className="w-60 h-60 items-center justify-center shadow-lg overflow-hidden bg-white rounded-full flex">
          <div className="w-64 h-96 bg-white rounded-[50%] shadow-lg overflow-hidden flex items-center justify-center">
            <img
              src={myphoto}
              alt="My portrait"
              className="relative top-[40px] h-full object-cover scale-125 transition-transform duration-500 ease-in-out hover:scale-135"
              style={{ transformOrigin: 'center' }}
            />
          </div>

        </div>

        <div>
          <h2 className="text-3xl font-serif text-gray-200 mb-4">About Me</h2>
          <p className="text-gray-200 text-lg leading-relaxed max-w-xl">
            I’m a passionate photographer who finds stories in everyday light, shadow, and stillness. Whether it’s a fleeting moment in nature or the subtle elegance of city life, I love capturing the beauty others might overlook. My lens is my voice, and through it, I hope to move, connect, and inspire.
          </p>
        </div>
      </section>

      <footer className="text-center mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} Yuvan. All rights reserved.
      </footer>
    </div>
  );
}
