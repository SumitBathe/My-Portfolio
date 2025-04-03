// import React from "react";  

// const Profile = () => {  
//   return (  
//     <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 bg-gray-100 min-h-screen">  
//       {/* Profile Picture Section */}  
//       <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">  
//         <img  
//           src="/path-to-your-image.jpg"  
//           alt="Profile"  
//           className="w-full h-full object-cover"  
//         />  
//       </div>  

//       {/* Bio Information Section */}  
//       <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">  
//         {/* Profession */}  
//         <h1 className="text-3xl font-bold text-gray-800">Your Name</h1>  
//         <p className="text-lg text-gray-600 mt-2">Front-End Engineer</p>  

//         {/* Skills */}  
//         <div className="mt-4">  
//           <h2 className="text-xl font-semibold text-gray-700">Skills:</h2>  
//           <ul className="mt-2 text-gray-600">  
//             <li>- React.js</li>  
//             <li>- JavaScript</li>  
//             <li>- Tailwind CSS</li>  
//             <li>- Node.js</li>  
//           </ul>  
//         </div>  

//         {/* Experience and Education */}  
//         <div className="mt-4">  
//           <h2 className="text-xl font-semibold text-gray-700">Experience:</h2>  
//           <p className="mt-2 text-gray-600">1+ years in the IT industry, specializing in front-end development.</p>  

//           <h2 className="text-xl font-semibold text-gray-700 mt-4">Education:</h2>  
//           <p className="mt-2 text-gray-600">Bachelor's in Computer Science from [Your University].</p>  
//         </div>  
//       </div>  
//     </div>  
//   );  
// };  

// export default Profile;  


// import React from "react";
// import profilePic from '../assets/sbprofile.jpg'

// const Profile = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100 min-h-screen">
//       {/* Profile Picture Section */}
//       <div className="w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0">
//         <img
//           src={profilePic}
//           alt="Profile"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Bio Information Section */}
//       <div className="text-center md:text-left md:ml-8">
//         {/* Name and Profession */}
//         <h1 className="text-3xl font-bold text-gray-800">About me.</h1>
//         <p className="text-lg text-gray-600 mt-2">Hi, I'm Sumit Bathe, a passionate Web Developer based in Pune, Maharashtra. I'm a Computer Science Engineer, and I’m fortunate to work alongside a talented team in the IT industry.

//           With over a year of hands-on experience as a Full-stack Developer, I specialize in creating robust, scalable web applications. I’m skilled in a variety of technologies, including JavaScript, ReactJS, and Node.js, and I love solving complex challenges to deliver seamless user experiences.

//           I’m always open to discussing new opportunities and am deeply curious about learning and growing in the ever-evolving tech landscape.</p>


//       </div>
//     </div>
//   );
// };

// export default Profile;


// import React from "react";
// import profilePic from '../assets/sbprofile.jpg';
// import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// const Profile = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100 min-h-screen">
//   {/* Profile Picture Section */}
//   <div className="flex flex-col items-center mb-6 md:mb-0">
//   <div className="w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0">
//     <img
//       src={profilePic}
//       alt="Profile"
//       className="w-full h-full object-cover"
//     />
//   </div>

//   {/* Social Media Icons Section */}
//   <div className="flex justify-center gap-6 mt-6">
//     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-500 transition-colors">
//       <FaInstagram size={30} />
//     </a>
//     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-500 transition-colors">
//       <FaLinkedin size={30} />
//     </a>
//     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-500 transition-colors">
//       <FaTwitter size={30} />
//     </a>
//     <a href="mailto:your-email@example.com" className="text-gray-700 hover:text-indigo-500 transition-colors">
//       <FaEnvelope size={30} />
//     </a>
//   </div>
//   </div>

//   {/* Bio Information Section */}
//   <div className="text-center md:text-left md:ml-8 max-w-2xl mt-8">
//     {/* Name and Profession */}
//     <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
//     <p className="text-lg text-gray-600 leading-relaxed">
//       Hi, I'm <span className="font-bold">Sumit Bathe</span>, a passionate <span className="font-bold">Web Developer</span> based in <span className="font-bold">Pune, Maharashtra</span>. I'm a <span className="font-bold">Computer Science Engineer</span>, and I’m fortunate to work alongside a talented team in the <span className="font-bold">IT industry</span>.
//     </p>
    
//     <p className="text-lg text-gray-600 leading-relaxed mb-4">
//       With over a year of hands-on experience as a <span className="font-bold">Full-stack Developer</span>, I specialize in creating <span className="font-bold">robust, scalable web applications</span>. I’m skilled in a variety of technologies, including <span className="font-bold">JavaScript</span>, <span className="font-bold">ReactJS</span>, and <span className="font-bold">Node.js</span>, and I love solving complex challenges to deliver seamless user experiences.
//     </p>
    
//     <p className="text-lg text-gray-600 leading-relaxed">
//       I’m always open to discussing <span className="font-bold">new opportunities</span> and am deeply curious about <span className="font-bold">learning</span> and growing in the ever-evolving tech landscape.
//     </p>
//   </div>
// </section>

//   );
// };

// export default Profile;

import React from "react";
import profilePic from '../assets/sbprofile.jpg';
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Profile = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      {/* Profile Picture Section */}
      <div className="flex flex-col items-center mb-6 md:mb-0">
        <div className="w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 border-4 border-black transform transition-all hover:scale-105">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">          
          <a
            href="https://www.linkedin.com/in/sumit-bathe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-indigo-700 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://x.com/Im_sumit_rb?t=VEc2b0ZHPpOIbd_6xc8iLg&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-indigo-900 transition-colors"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com/sumitbathe?igsh=MXJnd2JmcW1lZGNsbg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-red-600 transition-colors"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="mailto:sumitbathe37@gmail.com"
            target="_blank"
            className="text-gray-100 hover:text-red-600 transition-colors"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>

      {/* Bio Information Section */}
      <div className="text-center md:text-left md:ml-8 max-w-3xl mt-8 px-4">
        {/* Name and Profession */}
        <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
        <p className="text-lg text-white leading-relaxed mb-4">
          Hi, I'm <span className="font-bold">Sumit Bathe</span>, a passionate <span className="font-bold">Web Developer</span> based in <span className="font-bold">Pune, Maharashtra</span>. I'm a <span className="font-bold">Computer Science Engineer</span>, and I’m fortunate to work alongside a talented team in the <span className="font-bold">IT industry</span>.
        </p>

        <p className="text-lg text-white leading-relaxed mb-4">
          With over a year of hands-on experience as a <span className="font-bold">Full-stack Developer</span>, I specialize in creating <span className="font-bold">robust, scalable web applications</span>. I’m skilled in a variety of technologies, including <span className="font-bold">JavaScript</span>, <span className="font-bold">ReactJS</span>, and <span className="font-bold">Node.js</span>, and I love solving complex challenges to deliver seamless user experiences.
        </p>

        <p className="text-lg text-white leading-relaxed mb-6">
          I’m always open to discussing <span className="font-bold">new opportunities</span> and am deeply curious about <span className="font-bold">learning</span> and growing in the ever-evolving tech landscape.
        </p>

        {/* Download Resume Button */}
        <a href="https://drive.google.com/file/d/1BZlJUHQqJhMABQHo0tdLXhzKcrdns96Y/view" target="blank" download>
          <button className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition-colors">
            View Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Profile;

