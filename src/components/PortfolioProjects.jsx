import { useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Carousel } from "antd";
import sshome from '../assets/strishakti/home.png'
import sshomereel from '../assets/strishakti/homereel.png'
import ssmsg from '../assets/strishakti/message.png'
import ssreeladd from '../assets/strishakti/reeladd.png'
import competiton from '../assets/CRI/competition.png'
import crihome from '../assets/CRI/home.png'
import profile from '../assets/CRI/profile.png'
import socialfeed from '../assets/CRI/socialfeed.png'
import bshashtag from '../assets/bharatsport/hashtag.png'
import bshome from '../assets/bharatsport/home.png'
import bsreelhome from '../assets/bharatsport/reelhome.png'
import bssaved from '../assets/bharatsport/saved.png'
import sbhome from '../assets/sakshambalak/home.png'
import sbcircles from '../assets/sakshambalak/circles.png'
import sbchannels from '../assets/sakshambalak/channels.png'
import sbmessage from '../assets/sakshambalak/sbmessage.png'
import eoclogo from '../assets/EOC/EOClogo.png'
import eochome from '../assets/EOC/home.png'
import eocgroup from '../assets/EOC/group.png'
import eoccollege from '../assets/EOC/college.png'
import eocuniversity from '../assets/EOC/university.png'
import sjsahome from '../assets/RDCSWD/home.png'
import sjsalanguage from '../assets/RDCSWD/language.png'
import sjsatheme from '../assets/RDCSWD/theme.png'
import sjscheme from '../assets/RDCSWD/scheme.png'
import { trackEvent } from "../analytics";

const projects = [
  {
    title: "Strishakti",
    thumbnail: "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
    description: [
      "Developed key project modules like Reel, GroupChat, Announcement, and SocialEvents, with seamless API integrations for enhanced functionality and user experience.",
      "Optimized performance and executed enhancements by implementing client-side cache data management.",
      "Enhanced the project's CSS by migrating to Tailwind for an improved UI experience and a more polished look."
    ],
    workPicture:[
      sshome,sshomereel,ssmsg,ssreeladd
    ],
    link: "https://strishakti.org/"
  },
  {
    title: "CRI Platform",
    thumbnail: "https://childrightsinstitute.org/static/media/c1.f784812eabc5865c8c80.png",
    description: [
      "Working on key project module like competition, Events, organisation  ",
      "Implement react query for data cacheing and do the seamless API integration for enhanced functionality",
      "Enhanced the project's CSS by migrating to SCSS for an improved UI experience"
    ],
    workPicture:[
      competiton,crihome,profile,socialfeed
    ],
    link: "https://childrightsinstitute.org/"
  },
  {
    title: "Bharat Sports",
    thumbnail: "https://frontend.bharatsports.org/static/media/LogoImage.3f741cdbbf9aba8eb566.png",
    description: [
      "Designed key UI components for the Bharat Sport platform using React and Tailwind CSS, including Posts, Reels, and Universities Updates.",
      "Implementing theme and multi-language support for a website using Context API",
      "Give a polished look to the site."
    ],
    workPicture:[
      bshashtag,bshome,bsreelhome,bssaved
    ],
    link: "https://frontend.bharatsports.org/"
  },
  {
    title: "Saksham-Balak",
    thumbnail: "https://sakshambalak.org/static/media/sb-logo.b6295535a786612f96a0.png",
    description: [
      "Developed core UI components for the government-backed Saksham-Balak platform using React and Tailwind CSS.",
      "Developed key project modules, including contests, channels, and circles, with seamless API integrations to enhance functionality and user experience. ",
      "Designed an engaging UI with Tailwind CSS, incorporating animated elements to create an interactive experience tailored for students."
    ],
    workPicture:[
      sbhome,sbcircles,sbmessage,sbchannels
    ],
    link: "https://sakshambalak.org/"
  },
  {
    title: "Equal Opportunity Center",
    thumbnail: eoclogo,
    description: [
      "Developed core UI components for the government-backed Equal Opportunity Center using React and Tailwind CSS.",
      "Developed key project modules, including Home, post, Groups and reel, with seamless API integrations to enhance functionality and user experience. ",
      "Designed an engaging UI with Tailwind CSS, incorporating animated elements to create an interactive experience tailored for users."
    ],
    workPicture:[
      eochome,eocgroup,eocuniversity,eoccollege
    ],
    link: "https://indiaeoc.org/"
  },
  {
    title: "RDCSWD",
    thumbnail: "https://sjsamumbairegion.in/assets/Emblem-of-India-CiVDOhoK.png",
    description: [
      "Developed core UI components for the government-backed Regional Deputy Commissioner Social Welfare Department platform using React and Tailwind CSS.",
      "Developed key project modules, including theme and language management, utilizing Redux Toolkit for efficient state management ",
      "Designed an engaging UI with Tailwind CSS."
    ],
    workPicture:[
      sjsahome,sjsalanguage,sjsatheme,sjscheme
    ],
    link: "https://sjsamumbairegion.in/"
  }
];

const PortfolioProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedProject]);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full justify-center">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md hover:scale-[1.03] hover:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer text-center flex flex-col items-center border border-gray-300 dark:border-gray-600"
            onClick={() => {setSelectedProject(project);
              trackEvent("Project Viewd", `${project} viewd by someone`)}
            }
          >
            <div className="relative w-full h-48 overflow-hidden rounded-md mb-4 flex items-center justify-center">
              <img src={project.thumbnail} alt={project.title} className="max-h-full w-auto object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white line-clamp-2 leading-snug">
              {project.title}
            </h3>
            <p className="text-xs text-blue-600 underline underline-offset-2">View Details</p>
          </div>
        ))}
      </div>

      <Transition appear show={!!selectedProject} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2 sm:px-4" onClose={() => setSelectedProject(null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <div ref={modalRef} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg max-w-3xl w-full text-center shadow-xl relative">
              <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-2 sm:top-3 sm:right-3 text-black dark:text-white text-lg sm:text-xl hover:text-red-500"></button>
              <Carousel autoplay className="w-full max-h-[60vh] mb-4 rounded-md overflow-hidden">
                {selectedProject?.workPicture.map((url, index) => (
                  <div key={index} className="relative w-full h-full flex items-center justify-center">
                    <img src={url} alt="img" className="max-h-[60vh] w-auto object-contain" />
                  </div>
                ))}
              </Carousel>

              <h3 className="text-2xl font-bold mb-3 text-black dark:text-white underline underline-offset-2">{selectedProject?.title.toUpperCase()}</h3>
              <p className="text-gray-700 dark:text-gray-200 text-left">My Top Work :</p>

              <ul className="list-disc list-inside mb-4 pl-2 text-left">
                {selectedProject?.description.map((desc, idx) => (
                  <li key={idx} className="mb-2 text-black dark:text-white">{desc}</li>
                ))}
              </ul>

              <a
              onClick={()=>trackEvent(`Project vist`, `User visit ${selectedProject.title}`)}
              href={selectedProject?.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Visit Project</a>

            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PortfolioProjects;