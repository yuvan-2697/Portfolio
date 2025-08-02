import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import nature from './assets/IMG_1561.jpg';
import nature1 from './assets/nature.JPG';
import animal from './assets/animal.jpg';
import a from './assets/1.jpeg';
import b from './assets/2.jpeg';
import c from './assets/3.jpg';
import d from './assets/cricket.jpg';
import e from './assets/lion.jpg';
import f from './assets/train.jpg';
import g from './assets/sunset.jpeg';
import h from './assets/beach.jpeg';
import i from './assets/mist.jpg';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const photos = [
    { src: nature, alt: "Water" },
    { src: animal, alt: "Wildlife" },
    { src: a, alt: "Landscape" },
    { src: h, alt: "Portrait" },
    { src: c, alt: "Urban" },
    { src: nature1, alt: "Macro" },
    { src: d, alt: "Mountains" },
    { src: e, alt: "Beach" },
    { src: f, alt: "Sunset" },
    { src: g, alt: "Forest" },
    { src: b, alt: "Night" },
    { src: i, alt: "Desert" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-gray-100 p-6 relative">
      {/* Home icon */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-gray-700 hover:text-black text-3xl transition-all duration-300"
        title="Back to Home"
      >
        <FaHome className="hover:scale-110 transition-transform duration-300" />
      </Link>

      {/* Top-right nav menu */}
      <div className="absolute top-6 right-6 z-50" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-3xl focus:outline-none hover:text-gray-600 transition"
          title="Menu"
        >
          &#9776;
        </button>

        {menuOpen && (
          <div className="mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48 py-2">
            <a
              href="/"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              Home
            </a>
            <a
              href="#gallery"
              className="block px-4 py-2 hover:bg-gray-100 transition"
            >
              Gallery
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

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase text-center text-gray-800 mb-12 mt-8">
        My Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {photos.slice(0, visibleCount).map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              onClick={() => setSelectedImage(photo.src)}
              className={`w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer ${
                photo.alt === "Wildlife" ? "object-[center_25%]" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {visibleCount < photos.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount(visibleCount + 6)}
            className="px-6 py-3 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          >
            View More
          </button>
        </div>
      )}

      {visibleCount >= photos.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={scrollToTop}
            className="px-6 py-3 bg-gray-800 text-white rounded-full text-lg font-semibold hover:bg-black transition"
          >
            Go to Top
          </button>
        </div>
      )}

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Yuvan. All rights reserved.
      </footer>
    </div>
  );
}
