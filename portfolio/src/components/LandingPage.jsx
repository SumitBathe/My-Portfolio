import React, { useState, useRef, useCallback } from "react";
// import logo from "../assets/LP-BG.png";
import logo from "../assets/BGLP.png";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import bgvideo from "../assets/bg-video.mp4";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const spotlightSize = 360;

  const handleMouseMove = useCallback((event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  }, []);

  const roles = ["FrontEnd Engineer", "React Developer", "JavaScript Enthusiast","Proud Indian","Computer Engineer"];

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden text-white"
    >
      <Navbar />

      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgvideo} type="video/mp4" />
      </video> */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* Particle Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

      <div
        className="absolute z-20 pointer-events-none hidden md:block"
        style={{
          left: mousePosition.x - spotlightSize / 2,
          top: mousePosition.y - spotlightSize / 2,
          width: `${spotlightSize}px`,
          height: `${spotlightSize}px`,
          background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 60%)",
          borderRadius: "9999px",
          mixBlendMode: "screen",
          position: "absolute",
        }}
      />

      <div className="relative z-40 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.img
          src={logo}
          alt="Logo"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-78 h-80 md:w-74 md:h-72 mb-6 "
        />

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold hover:text-yellow-400 cursor-pointer transition duration-300">
          Sumit Bathe
        </h1>

        <div className="text-base sm:text-lg md:text-2xl text-gray-100 mt-4">
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
      </div>
    </div>
  );
};

export default LandingPage;
