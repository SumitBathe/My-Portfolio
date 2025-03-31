// import React from "react";
// import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
// import footerImage from "../assets/foot.jpg"; 
// import MessageBox from "../components/MessageBox"

// const Footer = () => {
//   return (
//     <footer className="text-center py-6 bg-white dark:bg-white">
//       <div>
//         <MessageBox/>
//       </div>
//       <p className="text-lg font-semibold">No © copyright issues.</p>
//       <p className="text-sm text-gray-600 dark:text-gray-400">Feel free to copy. If you need any help, ping me!</p>
      
//       <div className="flex justify-center gap-4 my-4">
//         <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl">
//           <FaLinkedin />
//         </a>
//         <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl">
//           <FaGithub />
//         </a>
//         <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl">
//           <FaInstagram />
//         </a>
//         <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl">
//           <FaTwitter />
//         </a>
//         <a href="mailto:your.email@example.com" className="text-red-600 text-2xl">
//           <FaEnvelope />
//         </a>
//       </div>
      
//       <p className="text-gray-600 dark:text-gray-400">Made with ❤️ in India</p>
//       <img src={footerImage} alt="Footer Graphic" className="mt-4 w-full max-w-md mx-auto" />
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import footerImage from "../assets/foot.jpg";
import MessageBox from "../components/MessageBox";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center py-6 bg-white dark:bg-white space-y-4">
      <div className="w-full max-w-lg">
        <MessageBox />
      </div>
      <div>
        <p className="text-lg font-semibold">No © copyright issues.</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Feel free to copy. If you need any help, ping me!</p>
      </div>

      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:scale-110 transition-transform">
          <FaGithub />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition-transform">
          <FaTwitter />
        </a>
        <a href="mailto:your.email@example.com" className="text-red-600 hover:scale-110 transition-transform">
          <FaEnvelope />
        </a>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400">Made with ❤️ in India</p>
      <img src={footerImage} alt="Footer Graphic" className="mt-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto" />
    </footer>
  );
};

export default Footer;
