import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/homelogo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 80) {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gradient-to-b from-slate-300 via-slate-600 to-slate-950 dark:bg-slate-950 shadow-md p-4 flex justify-between items-center z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <img src={logo} alt="sumit-bathe" onClick={() => scrollToSection("landingPage")} className="h-12 w-16"/>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg">
        <li
          className="cursor-pointer text-black dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => scrollToSection("profile")}
        >
          Profile
        </li>
        <li
          className="cursor-pointer text-black dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => scrollToSection("experienceSection")}
        >
          Experience
        </li>
        <li
          className="cursor-pointer text-black dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => scrollToSection("skillCarousel")}
        >
          Skills
        </li>
        <li
          className="cursor-pointer text-black dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => scrollToSection("portfolioProjects")}
        >
          Projects
        </li>
        <li
          className="cursor-pointer text-black dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => scrollToSection("footer")}
        >
          Contact
        </li>
      </ul>

      {/* Theme Toggle Button */}
      <button
        onClick={() => dispatch(toggleTheme())}
        className="text-2xl p-2 rounded-full bg-gray-50 dark:bg-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-800" />
        )}
      </button>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-2xl md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-md md:hidden transition-all">
          <ul className="flex flex-col gap-4 text-lg">
            <li
              className="cursor-pointer  text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection("profile")}
            >
              Profile
            </li>
            <li
              className="cursor-pointer  text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection("experienceSection")}
            >
              Experience
            </li>
            <li
              className="cursor-pointer  text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection("skillCarousel")}
            >
              Skills
            </li>
            <li
              className="cursor-pointer  text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection("portfolioProjects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer  text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => scrollToSection("footer")}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
