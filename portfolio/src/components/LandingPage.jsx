
import React, { useState, useEffect, useRef, useState as useReactState } from "react";
import logo from "../assets/LP-BG.png";
import Typewriter from "typewriter-effect";
import { motion, useAnimation } from "framer-motion";
import Navbar from "./Navbar";

const LandingPage = () => {
  const roles = ["Full Stack Developer", "React Developer", "JavaScript Enthusiast"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  let roleIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      setCurrentRole(roles[roleIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles]);

  // Background Animation Logic
  const [mousePosition, setMousePosition] = useReactState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 150; // Adjust the cell size here to fit better on the screen

  const Pattern = ({ className, cellClassName }) => {
    const x = new Array(40).fill(0); // Reduce the number of columns to fit on screen
    const y = new Array(25).fill(0); // Reduce the number of rows to fit on screen
    const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
    const [clickedCell, setClickedCell] = useReactState(null);

    return (
      <div className={className}>
        {matrix.map((row, rowIdx) => (
          <div key={`matrix-row-${rowIdx}`} className="flex flex-col relative z-20 border-b">
            {row.map((column, colIdx) => {
              const controls = useAnimation();

              useEffect(() => {
                if (clickedCell) {
                  const distance = Math.sqrt(
                    Math.pow(clickedCell[0] - rowIdx, 2) + Math.pow(clickedCell[1] - colIdx, 2)
                  );
                  controls.start({
                    opacity: [0, 1 - distance * 0.1, 0],
                    transition: { duration: distance * 0.2 },
                  });
                }
              }, [clickedCell]);

              return (
                <div
                  key={`matrix-col-${colIdx}`}
                  className={`bg-transparent border-l border-b border-neutral-600 ${cellClassName}`}
                  onClick={() => setClickedCell([rowIdx, colIdx])}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: [0, 1, 0.5] }}
                    transition={{
                      duration: 0.5,
                      ease: "backOut",
                    }}
                    animate={controls}
                    className="bg-[rgba(14,165,233,0.3)] h-12 w-12" // Adjust cell size here
                  ></motion.div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar/>
      {/* Background Animation */}
      <div ref={ref} onMouseMove={handleMouseMove} className="absolute inset-0">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_top,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-blue-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-500 to-purple-600 bg-gradient-animation">
        {/* Logo Animation */}
        <div className="animate-[logoAnimation_1s_ease-out]">
          <img src={logo} alt="Logo" className="w-100 h-80 mb-4" />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white hover:text-yellow-400 cursor-pointer transition duration-300 ease-in-out">
          Sumit Bathe
        </h1>

        {/* Typewriter Effect for Dynamic Role */}
        <div className="text-lg md:text-2xl text-gray-200 mt-4 transition-opacity duration-500 ease-in-out">
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </div>

        {/* Call-to-Action Button */}
        <button className="mt-8 px-8 py-3 text-white bg-purple-700 rounded-full hover:bg-purple-500 transition duration-300">
          See My Profile
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <span className="text-white text-2xl">↓</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
