// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import showreelBg from './assets/bgimage1.png'; // your background image

// export default function Showreel() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   // Close dropdown on click outside
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setMenuOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <div className="relative min-h-screen text-white font-sans selection:bg-white/20 selection:text-white">

//       {/* Background */}
//       <div
//         className="fixed inset-0 h-full w-full bg-cover bg-center -z-10"
//         style={{
//           backgroundImage: `url(${showreelBg})`,
//           backgroundPosition: 'top 20% right 10%',
//         }}
//       />
//       <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 -z-5" />

//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-black/30 backdrop-blur-sm">
//         <Link
//           to="/"
//           className="text-sm tracking-[0.35em] uppercase text-white/80 hover:text-white transition font-sans"
//         >
//           RS
//         </Link>

//         <div className="relative" ref={menuRef}>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white text-3xl focus:outline-none hover:text-gray-300 transition"
//             title="Menu"
//           >
//             &#9776;
//           </button>

//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-black/40 backdrop-blur-md border border-white/20 rounded-md shadow-lg z-50">
//               {[
//                 { label: "Showreel", link: "/showreel" },
//                 { label: "Selected Work", link: "/works" },
//                 { label: "Stills", link: "/stills" },
//                 { label: "About", link: "/about" },
//                 { label: "Contact", link: "/contact" },
//                 { label: "Instagram", link: "https://abc.in", external: true }
//               ].map((item) =>
//                 item.external ? (
//                   <a
//                     key={item.label}
//                     href={item.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="block px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/80 hover:text-white hover:bg-white/10 transition"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {item.label}
//                   </a>
//                 ) : (
//                   <Link
//                     key={item.label}
//                     to={item.link}
//                     className="block px-4 py-2 text-sm uppercase tracking-[0.35em] text-white/80 hover:text-white hover:bg-white/10 transition"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 )
//               )}
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Page Heading */}
//       <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase 
//                      bg-gradient-to-r from-gray-300 via-white to-gray-300 
//                      bg-clip-text text-transparent mb-12 animate-fade-in-slow text-center mx-auto mt-32">
//       </h1>

//       {/* Grids Diagonal Layout */}
//       <div className="relative z-10 h-[70vh] max-w-6xl mx-auto">
//         {/* First Grid - Top Left */}
//         <div className="absolute top-0 left-0 group flex h-60 w-60 items-center justify-center rounded-2xl bg-black/90 p-6 shadow-lg hover:bg-black/70 transition-all duration-300 cursor-pointer">
//           <span className="relative z-10 text-lg md:text-xl font-bold tracking-[0.35em] uppercase text-white/70 group-hover:text-white transition">
//             Webseries
//           </span>
//           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-white/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
//         </div>

//         {/* Second Grid - Center */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group flex h-60 w-60 items-center justify-center rounded-2xl bg-black/90 p-6 shadow-lg hover:bg-black/70 transition-all duration-300 cursor-pointer">
//           <span className="relative z-10 text-lg md:text-xl font-bold tracking-[0.35em] uppercase text-white/70 group-hover:text-white transition">
//             Movies
//           </span>
//           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-white/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
//         </div>

//         {/* Third Grid - Bottom Right */}
//         <div className="absolute bottom-0 right-0 group flex h-60 w-60 items-center justify-center rounded-2xl bg-black/90 p-6 shadow-lg hover:bg-black/70 transition-all duration-300 cursor-pointer">
//           <span className="relative z-10 text-lg md:text-xl font-bold tracking-[0.35em] uppercase text-white/70 group-hover:text-white transition">
//             Commercials
//           </span>
//           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-white/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
//         </div>
//       </div>

//     </div>
//   );
// }
