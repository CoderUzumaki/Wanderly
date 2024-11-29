import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-4 bg-slate-300 shadow-md">
      <div className="container flex justify-between items-center max-w-6xl mx-auto px-3">

        {/* Logo Section */}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-700">Wander</span>
            <span className="text-slate-500">ly.</span>
          </h1>
        </Link>

        {/* Navigation Section */}
        <div>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="sm-inline hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="sm-inline hover:underline">About</li>
            </Link>
            <Link to="/trips">
              <li className="sm-inline hover:underline">Trips</li>
            </Link>
            <Link to="/gallery">
              <li className="sm-inline hover:underline">Gallery</li>
            </Link>
          </ul>
        </div>

        {/* User Section */}

      </div>
    </header>
  );
}
