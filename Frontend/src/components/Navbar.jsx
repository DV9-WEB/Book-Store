import React, { useState, useEffect } from "react";
import Login from "./Login";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Track scroll to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check localStorage for authentication status on component mount
  useEffect(() => {
    const user = localStorage.getItem("User");
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("User");
      setIsAuthenticated(false); // Update state to reflect logout
    }
  };

  // Navbar items
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
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all shadow-lg ${
        sticky ? "bg-opacity-90 shadow-md" : "bg-opacity-100"
      }`}
    >
      <div className="navbar bg-base-100 mx-auto px-4 md:px-10">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl text-pink-400">bookStore</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        <div className="navbar-end">
          <div className="hidden md:flex items-center gap-1">
            <label className="input flex items-center outline-none border border-gray-600 rounded-md px-2 mr-8">
              <input
                type="text"
                className="outline-none bg-transparent w-full"
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
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-pink-600 text-white px-3 py-2 rounded-lg hover:bg-pink-500 duration-300 cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="bg-black text-white px-3 py-2 hover:bg-slate-800 duration-300 border border-pink-600 rounded-lg  cursor-pointer"
              >
                Login
              </button>
            )}
          </div>
          <Login onLogin={() => setIsAuthenticated(true)} />{" "}
          {/* Pass onLogin as a prop */}
        </div>
      </div>
      <hr className="w-full opacity-30 border-t-2 border-gray-300" />
    </div>
  );
};

export default Navbar;
