import Marquee from "react-fast-marquee";
import { useState } from "react";
import { FaJava } from "react-icons/fa";
import { SiI18Next } from "react-icons/si";
import { SiFilezilla } from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

import { 
  SiReact, SiJavascript, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiCss3, SiTypescript, SiGit, SiGithub, 
  SiNextdotjs, SiMui, SiBootstrap, SiPostman, SiWebpack, SiVite,  SiSqlite, SiNginx ,SiSwagger,SiSass
} from "react-icons/si";

const skills = [
  ["React", SiReact, "#61DAFB"], 
  ["JavaScript", SiJavascript, "#F7DF1E"], 
  ["Tailwind CSS", SiTailwindcss, "#38BDF8"], 
  ["Redux", SiRedux, "#764ABC"], 
  ["Node.js", SiNodedotjs, "#68A063"],
  ["Express.js", SiExpress, "#ffffff"], 
  ["MongoDB", SiMongodb, "#47A248"], 
  ["HTML", SiHtml5, "#E34F26"], 
  ["CSS", SiCss3, "#1572B6"], 
  ["TypeScript", SiTypescript, "#3178C6"],
  ["Git", SiGit, "#F05032"], 
  ["GitHub", SiGithub, "#181717"],  
  ["Material UI", SiMui, "#0081CB"], 
  ["Bootstrap", SiBootstrap, "#7952B3"],
  ["Socket.io", SiNextdotjs, "#6DA7F7"], 
  ["React Query", SiNextdotjs, "#FF4154"], 
  ["REST API", TbApi, "#FF6C37"], 
  ["Webpack", SiWebpack, "#8DD6F9"],
  ["Vite", SiVite, "#646CFF"], 
  ["Java", FaJava, "#F8B800"], 
  ["SQL", SiSqlite, "#003B57"], 
  ["NGINX", SiNginx, "#009639"], 
  ["Putty", VscTerminalCmd, "#603F8C"], 
  ["FileZilla",SiFilezilla , "#F77825"], 
  ["i18n",SiI18Next , "#F7775C"],
  ["Postman", SiPostman, "#FF6C37"],
  ["Swagger", SiSwagger, "#85EA2D"],
  ["SCSS", SiSass, "#CC6699"]

];

const SkillCarousel = () => {
  const [pause, setPause] = useState(false);
  const speeds = [30, 40, 50, 60];

  return (
    <div className="w-full h-screen bg-white dark:bg-black dark:text-white text-black py-10 flex flex-col justify-center items-center relative ">
      <h2 className="text-4xl font-bold mb-6 text-neon">Skill Set</h2>
      <div className="w-full space-y-6 [mask-image:linear-gradient(to_left,transparent,black,black,transparent)] ">
        {[0, 1, 2, 3].map((rowIndex) => (
          <Marquee
            key={rowIndex}
            speed={speeds[rowIndex]}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            pauseOnHover
            className="scrollbar-hide px-5"
          >
            {skills.slice(rowIndex * 7, (rowIndex + 1) * 7).map(([skill, Icon, color], index) => (
              <div
                key={index}
                className="mx-4 text-lg font-bold dark:bg-gray-700 bg-gray-400 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center justify-center min-w-[200px] hover:scale-110 hover:shadow-neon transition-transform"
              >
                <Icon className="text-5xl mb-3" style={{ color: color }} />
                <span className="text-black dark:text-white text-xl font-semibold">{skill}</span>
              </div>
            ))}
          </Marquee>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;
