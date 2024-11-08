import React, { useEffect, useState } from "react";
import Login from "./Login";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      {/* <li>
        <a>Contact</a>
      </li> */}
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg${
        sticky ? "bg-opacity-90 shadow-md" : "bg-opacity-100"
      }`}
    >
      <div className="navbar bg-base-100 mx-auto px-4 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-pink-400">bookStore</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        <div className="navbar-end space-x-3">
          <div className="hidden md:flex items-center gap-1">
            <label className="input flex items-center outline-none">
              <input
                type="text"
                className="outline-none"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          <div>
            <label className="swap swap-rotate mx-4">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />
            </label>
          </div>

          <div>
            <a
              className="bg-black text-white px-3 py-2 rounded-lg hover:bg-slate-800 duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </a>
            <Login />
          </div>
        </div>
      </div>
      <hr className="w-full opacity-30 border-t-2 border-gray-300" />
    </div>
  );
};

export default Navbar;
