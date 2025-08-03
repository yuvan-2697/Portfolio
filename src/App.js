import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import GalleryPage from "./GalleryPage";
import FavoritesPage from "./favorites";

function App() {
  const [favorites, setFavorites] = useState(() => {
    // Load from localStorage initially
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync favorites to localStorage on any change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/gallery"
          element={<GalleryPage favorites={favorites} setFavorites={setFavorites} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} setFavorites={setFavorites} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
