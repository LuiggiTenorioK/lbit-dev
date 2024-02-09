"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-[5vh] right-[5vh] bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <div><i className="fa-solid fa-circle-half-stroke"></i></div> :  <div><i className="fa-solid fa-circle-half-stroke"></i></div>}
    </button>
  );
}
