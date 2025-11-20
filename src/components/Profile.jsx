import React from "react";
import profilePic from '../assets/sbprofile.jpg';
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { trackEvent } from "../analytics";

const Profile = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 dark:bg-gradient-to-bl dark:from-purple-600 dark:via-amber-600 dark:to-fuchsia-500 min-h-screen">   
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <div className="w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 border-4 border-black transform transition-all hover:scale-105">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-center gap-6 mt-6 flex-wrap">          
          <a
            onClick={()=>trackEvent("Linkdin vist", "User view linkdin")}
            href="https://www.linkedin.com/in/sumit-bathe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-indigo-700 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            onClick={()=>trackEvent("X vist", "User view X")}
            href="https://x.com/Im_sumit_rb?t=VEc2b0ZHPpOIbd_6xc8iLg&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-indigo-900 transition-colors"
          >
            <FaTwitter size={30} />
          </a>
          <a
            onClick={()=>trackEvent("Instagram vist", "User view instagram")}
            href="https://www.instagram.com/sumitbathe?igsh=MXJnd2JmcW1lZGNsbg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-red-600 transition-colors"
          >
            <FaInstagram size={30} />
          </a>
          <a
            onClick={()=>trackEvent("Email vist", "User view email")}
            href="mailto:sumitbathe37@gmail.com"
            target="_blank"
            className="text-gray-100 hover:text-red-600 transition-colors"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>

      <div className="text-center md:text-left md:ml-8 max-w-3xl mt-8 px-4">
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-lg text-white leading-relaxed mb-4">
          Hi, I'm <span className="font-bold">Sumit Bathe</span>, a passionate <span className="font-bold">Web Developer</span> based in <span className="font-bold">Pune, Maharashtra</span>. I'm a <span className="font-bold">Computer Science Engineer</span>, and I’m fortunate to work alongside a talented team in the <span className="font-bold">IT industry</span>.
        </p>

        <p className="text-lg text-white leading-relaxed mb-4">
          With over 2.5 year of hands-on experience as a <span className="font-bold">Full-stack Developer</span>, I specialize in creating <span className="font-bold">robust, scalable web applications</span>. I’m skilled in a variety of technologies, including <span className="font-bold">JavaScript</span>, <span className="font-bold">ReactJS</span>, and <span className="font-bold">Node.js</span>, and I love solving complex challenges to deliver seamless user experiences.
        </p>

        <p className="text-lg text-white leading-relaxed mb-6">
          I’m always open to discussing <span className="font-bold">new opportunities</span> and am deeply curious about <span className="font-bold">learning</span> and growing in the ever-evolving tech landscape.
        </p>

        <a href="https://drive.google.com/file/d/1X98IWOJN10RSTmHQkAB05h4IMaPwT8or/view?usp=drivesdk" target="blank" download>
          <button className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition-colors"
          onClick={() => trackEvent("Resume Download", "User downloaded resume")}
          >
            View Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Profile;

