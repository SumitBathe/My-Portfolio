// import Marquee from "react-fast-marquee";
// import { useState } from "react";
// import { SiReact, SiJavascript, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiCss3, SiTypescript, SiGit, SiGithub, SiNextdotjs, SiBootstrap, SiJest, SiGraphql, SiPostman, SiFigma, SiWebpack } from "react-icons/si";
// // import { SiMaterialui } from "react-icons/si";


// const skills = [
//   ["React", SiReact], ["JavaScript", SiJavascript], ["Tailwind CSS", SiTailwindcss], ["Redux", SiRedux], ["Node.js", SiNodedotjs],
//   ["Express.js", SiExpress], ["MongoDB", SiMongodb], ["HTML", SiHtml5], ["CSS", SiCss3], ["TypeScript", SiTypescript],
//   ["Git", SiGit], ["GitHub", SiGithub], ["Next.js", SiNextdotjs], ["Material UI", SiWebpack], ["Bootstrap", SiBootstrap],
//   ["Jest", SiJest], ["GraphQL", SiGraphql], ["REST API", SiPostman], ["Figma", SiFigma], ["Webpack", SiWebpack]
// ];

// const SkillCarousel = () => {
//   const [pause, setPause] = useState(false);
//   const speeds = [30, 40, 50, 60];

//   return (
//     <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white py-10 flex flex-col justify-center items-center">
//       <h2 className="text-4xl font-bold mb-6 text-neon">Skill Set</h2>
//       <div className="w-full max-w-6xl space-y-6">
//         {[0, 1, 2, 3].map((rowIndex) => (
//           <Marquee
//             key={rowIndex}
//             speed={speeds[rowIndex]}
//             direction={rowIndex % 2 === 0 ? "left" : "right"}
//             pauseOnHover
//           >
//             {skills.slice(rowIndex * 5, (rowIndex + 1) * 5).map(([skill, Icon], index) => (
//               <div
//                 key={index}
//                 className="mx-4 text-lg font-bold bg-gray-700 px-6 py-3 rounded-lg shadow-lg flex items-center justify-center min-w-[180px] hover:scale-110 hover:shadow-neon transition-transform"
//               >
//                 <Icon className="mr-2 text-2xl text-neon" />
//                 {skill}
//               </div>
//             ))}
//           </Marquee>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillCarousel;

import Marquee from "react-fast-marquee";
import { useState } from "react";
import { SiReact, SiJavascript, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiCss3, SiTypescript, SiGit, SiGithub, SiNextdotjs, SiMui, SiBootstrap, SiJest, SiGraphql, SiPostman, SiFigma, SiWebpack } from "react-icons/si";

const skills = [
  ["React", SiReact, "#61DAFB"], ["JavaScript", SiJavascript, "#F7DF1E"], ["Tailwind CSS", SiTailwindcss, "#38BDF8"], ["Redux", SiRedux, "#764ABC"], ["Node.js", SiNodedotjs, "#68A063"],
  ["Express.js", SiExpress, "#ffffff"], ["MongoDB", SiMongodb, "#47A248"], ["HTML", SiHtml5, "#E34F26"], ["CSS", SiCss3, "#1572B6"], ["TypeScript", SiTypescript, "#3178C6"],
  ["Git", SiGit, "#F05032"], ["GitHub", SiGithub, "#181717"], ["Next.js", SiNextdotjs, "#000000"], ["Material UI", SiMui, "#0081CB"], ["Bootstrap", SiBootstrap, "#7952B3"],
  ["Jest", SiJest, "#C21325"], ["GraphQL", SiGraphql, "#E10098"], ["REST API", SiPostman, "#FF6C37"], ["Figma", SiFigma, "#F24E1E"], ["Webpack", SiWebpack, "#8DD6F9"]
];

const SkillCarousel = () => {
  const [pause, setPause] = useState(false);
  const speeds = [30, 40, 50, 60];

  return (
    <div className="w-full h-screen bg-gradient-to-r from-black via gray-800 to-gray-950 text-white py-10 flex flex-col justify-center items-center relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-6 text-neon">Skill Set</h2>
      <div className="w-full max-w-6xl space-y-6">
        {[0, 1, 2, 3].map((rowIndex) => (
          <Marquee
            key={rowIndex}
            speed={speeds[rowIndex]}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            pauseOnHover
          >
            {skills.slice(rowIndex * 5, (rowIndex + 1) * 5).map(([skill, Icon, color], index) => (
              <div
                key={index}
                className="mx-4 text-lg font-bold bg-gray-950 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center min-w-[200px] hover:scale-110 hover:shadow-neon transition-transform"
              >
                <Icon className="text-6xl mb-3" style={{ color: color }} />
                <span className="text-white text-xl font-semibold">{skill}</span>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
