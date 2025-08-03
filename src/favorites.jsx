import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaHeart } from "react-icons/fa";

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

const allPhotos = [
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

export default function FavoritesPage({ favorites, setFavorites }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const favoritePhotos = allPhotos.filter(photo => favorites.includes(photo.src));

  const toggleFavorite = (src) => {
    setFavorites((prev) =>
      prev.includes(src) ? prev.filter((item) => item !== src) : [...prev, src]
    );
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
      {/* Fixed Home Icon */}
      <Link
        to="/"
        className="fixed top-6 left-6 text-gray-700 hover:text-black text-3xl transition-all duration-300 z-50"
        title="Back to Home"
      >
        <FaHome className="hover:scale-110 transition-transform duration-300" />
      </Link>

      {/* Fixed Hamburger Menu */}
      <div className="fixed top-6 right-6 z-50" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-3xl focus:outline-none hover:text-gray-600 transition"
          title="Menu"
        >
          &#9776;
        </button>

        {menuOpen && (
          <div className="mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48 py-2">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-100 transition">Home</Link>
            <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100 transition">My Gallery</Link>
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100 transition">Contact</a>
            <Link to="/favorites" className="block px-4 py-2 hover:bg-gray-100 transition">Favorites</Link>
          </div>
        )}
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase text-center text-gray-800 mb-12 mt-8">
        My Favorites
      </h1>

      {favoritePhotos.length === 0 ? (
        <p className="text-center text-gray-500">No favorite images yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {favoritePhotos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                onClick={() => setSelectedImage(photo.src)}
                className={`w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer ${photo.alt === "Wildlife" ? "object-[center_25%]" : ""}`}
              />
              <button
                onClick={() => toggleFavorite(photo.src)}
                onDoubleClick={() => toggleFavorite(photo.src)}
                className={`absolute top-3 right-3 text-white text-xl bg-black bg-opacity-50 rounded-full p-2 ${favorites.includes(photo.src) ? "text-red-500" : "text-white"}`}
                title="Unlike"
              >
                <FaHeart />
              </button>
            </div>
          ))}
        </div>
      )}

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
                className={`absolute top-3 right-3 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80`}
                >
                &times;
                </button>

          </div>
        </div>
      )}

      {/* Go back to gallery */}
      <div className="flex justify-center mt-10">
        <Link
          to="/gallery"
          className="px-6 py-3 bg-gray-800 text-white rounded-full text-lg font-semibold hover:bg-black transition"
        >
          Back to Gallery
        </Link>
      </div>

      <footer className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Yuvan. All rights reserved.
      </footer>
    </div>
  );
}
