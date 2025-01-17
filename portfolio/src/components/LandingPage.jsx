// import React, { useState, useEffect } from "react";  
// import logo from "../assets/LP-BG.png"

// const LandingPage = () => {  
//   const roles = ["Full Stack Developer", "React Developer", "JavaScript Enthusiast"];  
//   const [currentRole, setCurrentRole] = useState(roles[0]);  
//   let roleIndex = 0;  

//   useEffect(() => {  
//     const interval = setInterval(() => {  
//       roleIndex = (roleIndex + 1) % roles.length;  
//       setCurrentRole(roles[roleIndex]);  
//     }, 3000);  
//     return () => clearInterval(interval);  
//   }, [roles]);  

//   return (  
//     <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">  
//       {/* Logo Animation */}  
//       <div className="animate-pulse">  
//         <img  
//           src={logo}  
//           alt="Logo"  
//           className="w-100 h-80 mb-4"  
//         />  
//       </div>  

//       {/* Name */}  
//       <h1 className="text-4xl md:text-6xl font-bold text-white">  
//         Sumit Bathe  
//       </h1>  

//       {/* Dynamic Role */}  
//       <p className="text-lg md:text-2xl text-gray-200 mt-4 transition-opacity duration-500 ease-in-out">  
//         {currentRole}  
//       </p>  
//     </div>  
//   );  
// };  

// export default LandingPage;  


import React, { useState, useEffect } from "react";
import logo from "../assets/LP-BG.png";
import Typewriter from "typewriter-effect";

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

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 bg-gradient-animation">
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
        See My Work
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <span className="text-white text-2xl">↓</span>
      </div>
    </div>
  );
};

export default LandingPage;
