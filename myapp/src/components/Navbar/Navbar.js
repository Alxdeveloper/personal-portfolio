import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-lg mt-4">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">KRO Welfare-Portal</a>
          </div>

          {/* Menu Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className={`md:flex md:items-center md:space-x-6 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="/"
              className="block mt-2 md:mt-0 text-lg hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="block mt-2 md:mt-0 text-lg hover:text-gray-300"
            >
              About
            </a>
            <a
              href="/services"
              className="block mt-2 md:mt-0 text-lg hover:text-gray-300"
            >
              Services
            </a>
            <a
              href="/contact"
              className="block mt-2 md:mt-0 text-lg hover:text-gray-300"
            >
              Contact
            </a>

            {/* Member Login */}
            <a
              href="/member"
              className="block mt-2 md:mt-0 text-lg bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Member Login
            </a>

            {/* Admin Login */}
            <a
              href="/admin"
              className="block mt-2 md:mt-0 text-lg bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
