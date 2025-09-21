"use client";
import { ThemeToggle } from "./toggle-theme";

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="flex flex-row justify-between items-center p-3 text-md font-bold text-gray-900 dark:text-gray-100 max-w-7xl mx-auto">
        <a href="/" className="text-lg text-red-500">DPSDQMUN</a>
        <div className="flex flex-row font-normal text-md">
          <div className="px-3"><a href="/about">About</a></div>
          <div className="px-3"><a href="/committees">Committees</a></div>
          <div className="px-3"><a href="/team">Team</a></div>
          <div className="px-3"><a href="/contact">Contact</a></div>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
