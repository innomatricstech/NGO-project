import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 COMMON SCROLL FUNCTION (KEY FIX)
  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

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

      {/* ================= TOP BAR ================= */}
      <div className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">

          <div className="flex items-center gap-6 text-sm md:text-base">
            <a
              href="mailto:trishulatrust@gmail.com"
              className="flex items-center gap-2 hover:text-yellow-300"
            >
              <FiMail size={18} className="text-yellow-300" />
              trishulatrust@gmail.com
            </a>

            <a
              href="tel:+917483664359"
              className="flex items-center gap-2 hover:text-yellow-300"
            >
              <FiPhone size={18} className="text-yellow-300" />
              +91 74836 64359
            </a>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <FaFacebookF className="hover:text-yellow-300 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-300 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-300 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-300 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className={`transition-all duration-300 ${
          scroll
            ? "bg-white/95 backdrop-blur shadow-xl"
            : "bg-gradient-to-r from-white to-blue-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" onClick={handleNavClick} className="flex items-center gap-4">
            <img
  src={logo}
  alt="Trishula Trust Logo"
  className="
    h-[80px] w-[220px]
    sm:h-[90px] sm:w-[300px]
    md:h-[100px] md:w-[300px]
    ml-0 md:-ml-[280px]
    object-contain
    transition-transform duration-300 hover:scale-105
  "
/>


              <div className="ml-0 text-center md:-ml-[50px] md:text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900 tracking-wide">
                  TRISHULA TRUST
                </h1>
                <p className="text-sm sm:text-base text-blue-700 font-semibold">
                  Educational & Charitable
                </p>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleNavClick}   // 🔥 IMPORTANT
                  className={`text-lg font-semibold transition ${
                    location.pathname === link.path
                      ? "text-blue-800 border-b-2 border-blue-600"
                      : "text-gray-800 hover:text-blue-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/donate"
                onClick={handleNavClick}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-7 py-3 rounded-full font-bold text-base shadow-lg hover:scale-105 transition"
              >
                ❤️ Donate Now
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden text-3xl font-bold text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-xl border">
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleNavClick}   // 🔥 IMPORTANT
                    className="px-6 py-3 text-lg font-semibold text-gray-800 hover:bg-blue-50"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/donate"
                  onClick={handleNavClick}
                  className="mx-6 mt-3 bg-red-600 text-white py-3 rounded-full text-center font-bold text-lg"
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
