import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteTabs } from "../siteNavigation";

export default function SiteHeader({
  headerClassName = "absolute top-0 left-0 w-full z-20 px-6 py-6 flex justify-between items-center",
  logoClassName = "group relative flex h-11 w-11 items-center justify-center rounded-lg border border-[#6f4a2c]/20 bg-[#eadfce]/46 text-[#4a3321] shadow-[0_12px_30px_rgba(48,31,17,0.11)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#4a3321]/30 hover:bg-[#efe5d8]/68 hover:text-[#3d2b1d] hover:shadow-[0_18px_38px_rgba(48,31,17,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4a2c]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#b8a690]",
  buttonClassName = "group relative flex h-11 w-11 items-center justify-center rounded-lg border border-[#6f4a2c]/20 bg-[#eadfce]/46 text-[#4a3321] shadow-[0_12px_30px_rgba(48,31,17,0.11)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#4a3321]/30 hover:bg-[#efe5d8]/68 hover:text-[#3d2b1d] hover:shadow-[0_18px_38px_rgba(48,31,17,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4a2c]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#b8a690]",
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
        <span className="sr-only">Home</span>
        <span
          aria-hidden="true"
          className="relative h-[20px] w-[22px] transition duration-300 group-hover:scale-105"
        >
          <span className="absolute left-1/2 top-[1px] h-[15px] w-[15px] -translate-x-1/2 rotate-45 rounded-[3px] border-l-2 border-t-2 border-current transition duration-300 group-hover:-translate-y-0.5" />
          <span className="absolute bottom-0 left-[3px] h-[12px] w-4 rounded-[4px] border-2 border-current bg-[#eadfce]/20 transition duration-300 group-hover:bg-[#efe5d8]/50" />
          <span className="absolute bottom-0 left-1/2 h-[7px] w-[5px] -translate-x-1/2 rounded-t-[3px] border-2 border-b-0 border-current transition duration-300 group-hover:h-[8px]" />
          <span className="portfolio-home-dot absolute right-[5px] top-[11px] h-[4px] w-[4px] rounded-full bg-current" />
        </span>
      </Link>

      <div ref={menuRef} className="relative">
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={buttonClassName}
        >
          <span className="sr-only">
            {menuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span
            aria-hidden="true"
            className={`relative h-[18px] w-[22px] transition duration-300 ${
              menuOpen ? "scale-95" : "scale-100"
            }`}
          >
            <span
              className={`absolute -right-[3px] -top-[3px] h-[5px] w-[5px] rounded-full bg-[#efe5d8] transition duration-300 group-hover:scale-125 group-hover:bg-current ${
                menuOpen ? "scale-0 opacity-0" : "scale-100 opacity-70"
              }`}
            />
            <span
              className={`absolute left-[5px] top-0 h-[4px] w-3 rounded-t-md border-2 border-current border-b-0 transition duration-300 group-hover:-translate-y-0.5 ${
                menuOpen ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-[14px] overflow-hidden rounded-[4px] border-2 border-current transition duration-300 group-hover:shadow-[0_0_14px_rgba(74,51,33,0.22)] ${
                menuOpen ? "rounded-full" : "rounded-[4px]"
              }`}
            >
              <span className="absolute -left-6 top-0 h-full w-4 rotate-12 bg-white/35 opacity-0 transition duration-500 group-hover:left-7 group-hover:opacity-100" />
            </span>
            <span
              className={`absolute left-1/2 top-[8px] h-[7px] w-[7px] -translate-x-1/2 rounded-full border-2 border-current transition duration-300 group-hover:scale-125 ${
                menuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            >
              <span className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current opacity-0 transition duration-300 group-hover:opacity-100" />
            </span>
            <span
              className={`absolute right-[3px] top-[7px] h-[2px] w-[2px] rounded-full bg-current transition duration-300 group-hover:scale-150 ${
                menuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-[10px] h-[2px] w-4 -translate-x-1/2 bg-current transition duration-300 ${
                menuOpen ? "rotate-45 opacity-100" : "rotate-0 opacity-0"
              }`}
            />
            <span
              className={`absolute left-1/2 top-[10px] h-[2px] w-4 -translate-x-1/2 bg-current transition duration-300 ${
                menuOpen ? "-rotate-45 opacity-100" : "rotate-0 opacity-0"
              }`}
            />
          </span>
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
