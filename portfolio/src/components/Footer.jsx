import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import footerImage from "../assets/foot.png";
import MessageBox from "../components/MessageBox";
import { trackEvent } from "../analytics";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center py-6 bg-white dark:bg-slate-900 space-y-8 w-full">
      <div className="w-full max-w-lg">
        <MessageBox />
      </div>
      <div>
        <p className="text-lg font-semibold">No © copyright issues.</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Feel free to copy. If you need any help, ping me!</p>
      </div>

      <div className="flex justify-center gap-6 text-2xl">
        <a
        onClick={()=>trackEvent("Linkedin vist", "User view linkedin")}
        href="https://www.linkedin.com/in/sumit-bathe/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
          <FaLinkedin />
        </a>
        <a 
        onClick={()=>trackEvent("Github vist", "User view github")}
        href="https://github.com/SumitBathe" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:scale-110 transition-transform">
          <FaGithub />
        </a>
        <a 
        onClick={()=>trackEvent("Instagram vist", "User view instagram")}
        href="https://www.instagram.com/sumitbathe?igsh=MXJnd2JmcW1lZGNsbg==" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:scale-110 transition-transform">
          <FaInstagram />
        </a>
        <a
        onClick={()=>trackEvent("X vist", "User view X")}
        href="https://x.com/Im_sumit_rb?t=VEc2b0ZHPpOIbd_6xc8iLg&s=08" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition-transform">
          <FaTwitter />
        </a>
        <a
        onClick={()=>trackEvent("Email vist", "User view email")}
        href="mailto:sumitbathe37@gmail.com" className="text-red-600 hover:scale-110 transition-transform">
          <FaEnvelope />
        </a>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400">Made with ❤️ in India</p>
      <img src={footerImage} alt="Footer Graphic" className="mt-4 w-[60%]   mx-auto" />
    </footer>
  );
};

export default Footer;
