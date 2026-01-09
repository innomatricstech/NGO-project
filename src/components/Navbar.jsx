// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone, FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Causes", path: "/causes" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white text-sm py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="mailto:trishulatrust@gmail.com"
              className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors"
            >
              <FiMail className="text-yellow-300" />
              trishulatrust@gmail.com
            </a>
            <a
              href="tel:+917483664359"
              className="flex items-center gap-1.5 hover:text-yellow-300 transition-colors"
            >
              <FiPhone className="text-yellow-300" />
              +91 74836 64359
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center gap-1 hover:text-yellow-300 transition-colors"
              >
                <FiSearch />
                <span className="hidden sm:inline">Search</span>
              </button>
              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-2 min-w-[200px]">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-yellow-300 transition-colors"><FaFacebookF size={14} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors"><FaTwitter size={14} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors"><FaInstagram size={14} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors"><FaLinkedinIn size={14} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors"><FaYoutube size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-300 ${
          scroll
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-white to-blue-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 p-2.5 group-hover:scale-105 transition-transform">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">TT</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Trishula Trust</h1>
                <p className="text-xs text-gray-600">Educational & Charitable</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                </Link>
              ))}
              <Link
                to="/donate"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-2.5 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl"
              >
                ❤️ Donate Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/donate"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-6 py-3 rounded-full text-center mt-2"
                >
                  ❤️ Donate Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}