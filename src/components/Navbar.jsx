import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "#", text: "Terms and Condition" },
    { href: "/privacy", text: "Privacy" },
    { href: "#", text: "Access Portal" },
    { href: "#", text: "FAQ" },
  ];

  return (
    <nav className="w-full bg-white py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold">
              <img
                src={logo}
                className="w-auto  object-contain h-16"
                alt="thumplocal"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-[#4B5563] hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-[24px] font-medium ${
                  link.text === "FAQ"
                    ? "border-[#8BB353] border-2 p-1 text-[#8BB353] rounded"
                    : ""
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 bg-[#8BB353] text-white rounded font-medium text-[19px] hover:bg-[#659621] transition">
              Sign Up
            </button>
            <button className="px-4 py-2 border border-[#8BB353] rounded-lg text-[19px] font-medium text-[#8BB353] hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white p-2"
            >
              {/* Simple hamburger / close icon */}
              {isMobileMenuOpen ? (
                <span className="text-xl">&times;</span> // X icon
              ) : (
                <span className="text-2xl">&#9776;</span> // Hamburger icon
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800 transition"
                >
                  {link.text}
                </a>
              ))}

              {/* Mobile Actions */}
              <div className="flex flex-col space-y-2 pt-4">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
                  Sign Up
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
