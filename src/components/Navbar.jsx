import React, { useState } from "react";
import logo from "../assets/logo_without_bg.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <nav className="relative flex items-center justify-between sm:h-10 h-17 md:justify-center py-6 px-4 m-2">
      <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/" aria-label="Home">
            <img src={logo} height="90" width="90" />
          </Link>
          <div className="flex items-center md:hidden overflow-x-hidden">
            <div className={`md:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-[200%]"}`}>

              <a
                href="https://x.com/shubh_rana01"
                target="_blank"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                  <lord-icon
                      src="https://cdn.lordicon.com/cbxaxfqs.json"
                      trigger="hover"
                      style={{width:"34px", height:"50px"}}>
                  </lord-icon>
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-rana45/"
                target="_blank"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                  <lord-icon
                      className="cursor-pointer"
                      src="https://cdn.lordicon.com/nwqudhei.json"
                      trigger="hover"
                      style={{width:"40px", height:"50px"}}>
                  </lord-icon>
              </a>

              <a
                href="https://github.com/Shubham-Rana-cse"
                target="_blank"
                className="font-medium text-gray-500 hover:text-gray-900"
              >
                  <lord-icon
                      className="cursor-pointer"
                      src="https://cdn.lordicon.com/ioihllwu.json"
                      trigger="hover"
                      style={{width:"40px", height:"50px"}}>
                  </lord-icon>
              </a>

            </div>
            <button
              type="button"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              onClick={handleHamburgerClick}
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10">

        <a
          href="https://x.com/shubh_rana01"
          target="_blank"
          className="font-medium text-gray-500 hover:text-gray-900"
        >
            <lord-icon
                src="https://cdn.lordicon.com/cbxaxfqs.json"
                trigger="hover"
                style={{width:"34px", height:"50px"}}>
            </lord-icon>
        </a>

        <a
          href="https://www.linkedin.com/in/shubham-rana45/"
          target="_blank"
          className="font-medium text-gray-500 hover:text-gray-900"
        >
            <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/nwqudhei.json"
                trigger="hover"
                style={{width:"40px", height:"50px"}}>
            </lord-icon>
        </a>

        <a
          href="https://github.com/Shubham-Rana-cse"
          target="_blank"
          className="font-medium text-gray-500 hover:text-gray-900"
        >
            <lord-icon
                className="cursor-pointer"
                src="https://cdn.lordicon.com/ioihllwu.json"
                trigger="hover"
                style={{width:"40px", height:"50px"}}>
            </lord-icon>
        </a>

        {/* <a
          href=""
          target="_blank"
          className="font-medium text-gray-500 hover:text-gray-900"
        >
          Contact
        </a> */}
      </div>
      <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        {/* <span className="inline-flex">
          <a
            href="/login"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
          >
            Login
          </a>
        </span>
        <button className="inline-flex rounded-md shadow ml-2">
          <a
            href="/signup"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
          >
            Get started
          </a>
        </button> */}
        <lord-icon
            className="shadow rounded-full m-2"
            src="https://cdn.lordicon.com/hroklero.json"
            trigger="hover"
            style={{width:"50px", height:"50px"}}>
        </lord-icon>
        <div>Welcome, Shubham Rana</div>
      </div>
    </nav>
  );
};

export default Navbar;
