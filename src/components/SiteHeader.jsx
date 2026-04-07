import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { siteTabs } from "../siteNavigation";

export default function SiteHeader({
  headerClassName = "absolute top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center",
  logoClassName = "text-lg tracking-[0.35em] uppercase text-[#4a3321] hover:text-[#241b15] transition",
  buttonClassName = "text-[#4a3321] text-3xl",
}) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className={headerClassName}>
      <Link
        to="/"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className={logoClassName}
      >
        RS
      </Link>

      <div ref={menuRef} className="relative">
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={buttonClassName}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`absolute right-0 mt-3 w-48 rounded-xl border border-[#6f4a2c]/14 bg-[linear-gradient(180deg,rgba(222,208,192,0.94),rgba(210,194,176,0.96))] py-2 shadow-[0_18px_40px_rgba(48,31,17,0.14)] backdrop-blur-md transition-all duration-200 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          {siteTabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.link}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className={`block px-4 py-2 uppercase tracking-[0.25em] transition-colors ${
                location.pathname === tab.link
                  ? "font-semibold text-[#241b15]"
                  : "text-[#5c442f] hover:text-[#241b15]"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
