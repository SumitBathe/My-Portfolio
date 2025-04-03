// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTheme } from "../redux/themeSlice";
// import { FaSun, FaMoon, FaBars } from "react-icons/fa";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const theme = useSelector((state) => state.theme.mode);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed w-full p-4 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center">
//       <div className="text-2xl font-bold">Sumit Bathe</div>
      
//       {/* Menu for Large Screens */}
//       <ul className="hidden md:flex gap-6 text-lg">
//         <li><a href="#about" className="hover:underline">About</a></li>
//         <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
//         <li><a href="#experience" className="hover:underline">Experience</a></li>
//         <li><a href="#contact" className="hover:underline">Contact</a></li>
//       </ul>
      
//       <div className="flex items-center gap-4">
//         {/* Theme Toggle */}
//         <button onClick={() => dispatch(toggleTheme())} className="text-xl">
//           {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
//         </button>
        
//         {/* Menu Bar for Small Screens */}
//         <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
//           <FaBars />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-16 right-0 w-48 bg-white dark:bg-gray-800 shadow-lg p-4 md:hidden">
//           <ul className="flex flex-col gap-4">
//             <li><a href="#about" className="hover:underline">About</a></li>
//             <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
//             <li><a href="#experience" className="hover:underline">Experience</a></li>
//             <li><a href="#contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on selection (for mobile)
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-slate-950 shadow-md p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection("landingPage")}>
        Portfolio
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("profile")}>Profile</li>
        <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("experienceSection")}>Experience</li>
        <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("skillCarousel")}>Skills</li>
        <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("portfolioProjects")}>Projects</li>
        {/* <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("quotesCaraousel")}>Quotes</li> */}
        <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("footer")}>Contact</li>
      </ul>

      {/* Theme Toggle & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        <button onClick={() => dispatch(toggleTheme())} className="text-2xl">
          {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl md:hidden">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-md md:hidden">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("profile")}>Profile</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("experienceSection")}>Experience</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("skillCarousel")}>Skills</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("portfolioProjects")}>Projects</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("quotesCaraousel")}>Quotes</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("footer")}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
