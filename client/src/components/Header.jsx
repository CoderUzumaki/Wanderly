import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-4 bg-sky-200 shadow-md z-50 absolute top-0 w-screen">
      <div className="container flex justify-between items-center max-w-6xl mx-auto px-3">
        {/* Logo Section */}
        <Link to="/">
          <h1 className="font-bold text-xl sm:text-xl flex flex-wrap items-center justify-center">
            <span className="text-slate-900 hover:text-teal-600">Wanderly</span>
            <span className="text-teal-700 text-3xl">.</span>
          </h1>
        </Link>

        {/* Navigation Section */}
        <div>
        <ul
            className={`${
              isOpen ? "absolute top-16 left-0 w-full gap-8 bg-sky-200 shadow-lg p-4 z-10" : "hidden"
            } sm:flex gap-4 text-indigo-900 font-semibold`}
          >
            <Link to="/">
              <li className="hover:underline hover:text-indigo-700">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:underline hover:text-indigo-700">About</li>
            </Link>
            <Link to="/trips">
              <li className="hover:underline hover:text-indigo-700">Trips</li>
            </Link>
            <Link to="/gallery">
              <li className="hover:underline hover:text-indigo-700">Gallery</li>
            </Link>
          </ul>
        </div>

        {/* User Section */}
        <div className="flex gap-4 ">

          {/* Nav Toggle */}
          <button onClick={toggle}>
            {isOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 sm:hidden text-slate-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          {/* user */}
          <Link to={"/login"}  className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
