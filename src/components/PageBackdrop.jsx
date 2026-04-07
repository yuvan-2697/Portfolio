import React from "react";

export default function PageBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(239,230,217,0.52),rgba(184,166,144,0.96))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,245,234,0.58),transparent_56%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#d2b89a]/24 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-20 top-[24rem] h-72 w-72 rounded-full bg-[#6b4728]/18 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[18rem] bg-[linear-gradient(180deg,transparent,rgba(86,58,35,0.14))]" />
      <div className="pointer-events-none absolute left-6 top-28 h-24 w-px bg-[#3d2b1d]/14 sm:left-10 sm:h-32" />
      <div className="pointer-events-none absolute right-6 top-28 h-24 w-px bg-[#3d2b1d]/14 sm:right-10 sm:h-32" />
    </>
  );
}
