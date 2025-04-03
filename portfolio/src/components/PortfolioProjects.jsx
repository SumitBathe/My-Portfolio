import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Carousel } from "antd";


const projects = [
  {
    title: "Strishakti Portal",
    thumbnail: "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
    description: [
      "Developed key UI components for the government-backed Strishakti platform using React and Tailwind CSS.",
      "Developed key UI components for the Strishakti platform using React ",
      "Developed key UI components using Tailwind CSS."
    ],
    workPicture:[
      "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo4.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo3.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo.34961b6aa0d7e950f4c3.jpg",

    ],
    link: "https://example.com/strishakti"
  },
  {
    title: "CRI Platform",
    thumbnail: "https://childrightsinstitute.org/static/media/c1.f784812eabc5865c8c80.png",
    description: [
      "Developed key UI components for the government-backed Strishakti platform using React and Tailwind CSS.",
      "Developed key UI components for the Strishakti platform using React ",
      "Developed key UI components using Tailwind CSS."
    ],
    workPicture:[
      "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo4.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo3.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo.34961b6aa0d7e950f4c3.jpg",

    ],
    link: "https://childrightsinstitute.org/"
  },
  {
    title: "Bharat Sports",
    thumbnail: "https://frontend.bharatsports.org/static/media/LogoImage.3f741cdbbf9aba8eb566.png",
    description: [
      "Developed key UI components for the government-backed Strishakti platform using React and Tailwind CSS.",
      "Developed key UI components for the Strishakti platform using React ",
      "Developed key UI components using Tailwind CSS."
    ],
    workPicture:[
      "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo4.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo3.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo.34961b6aa0d7e950f4c3.jpg",

    ],
    link: "https://frontend.bharatsports.org/"
  },
  {
    title: "Saksham-Balak",
    thumbnail: "https://sakshambalak.org/static/media/sb-logo.b6295535a786612f96a0.png",
    description: [
      "Developed key UI components for the government-backed Strishakti platform using React and Tailwind CSS.",
      "Developed key UI components for the Strishakti platform using React ",
      "Developed key UI components using Tailwind CSS."
    ],
    workPicture:[
      "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo4.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo3.34961b6aa0d7e950f4c3.jpg",
      "https://strishakti.org/static/media/logo.34961b6aa0d7e950f4c3.jpg",

    ],
    link: "https://sakshambalak.org/"
  }
];

const PortfolioProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject?.workPicture.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + selectedProject?.workPicture.length) % selectedProject?.workPicture.length
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full justify-center">
        {projects.map((project) => (
          <div
            key={project.title}  // Using project.title as key
            className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 hover:shadow-lg transition transform cursor-pointer text-center flex flex-col items-center"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
          </div>
        ))}
      </div>

      <Transition appear show={!!selectedProject} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClose={() => setSelectedProject(null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <div className="bg-gray-800 p-6 rounded-lg max-w-lg text-center shadow-xl">
              
            <Carousel
              autoplay
              className="w-full h-80 overflow-hidden"
            >
              {selectedProject?.workPicture.map((url, index) => (
                <div key={index} className="relative">                 
                    <img src={url} alt="img" className="w-full h-64 object-cover rounded-t-lg" />
                </div>
              ))}
            </Carousel>


              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-3 text-white underline underline-offset-2">{selectedProject?.title.toUpperCase()}</h3>

              {/* Description as Bullet Points */}
              <ul className="list-disc list-inside mb-4 text-left">
                {selectedProject?.description.map((desc, idx) => (
                  <li key={idx} className="mb-2 text-white">{desc}</li>
                ))}
              </ul>

              {/* View Project Link */}
              <a href={selectedProject?.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Visit Project</a>

              {/* Close Button */}
              <button onClick={() => setSelectedProject(null)} className="block mt-4 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">Close</button>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PortfolioProjects;



// import { useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment } from "react";

// const projects = [
//   {
//     title: "Strishakti Portal",
//     thumbnail: "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
//     description: [
//       "Developed key UI components for the government-backed Strishakti platform using React and Tailwind CSS.",
//       "Developed key UI components for the Strishakti platform using React ",
//       "Developed key UI components using Tailwind CSS."
//     ],
//     workPicture:[
//       "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo4.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo3.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo.34961b6aa0d7e950f4c3.jpg",

//     ],
//     link: "https://example.com/strishakti"
//   },
//   {
//     title: "CRI Platform",
//     thumbnail: "https://childrightsinstitute.org/static/media/c1.f784812eabc5865c8c80.png",
//     description: [
//       "Developed key UI components for the government-backed Strishakti platform using React and Tailwind CSS.",
//       "Developed key UI components for the Strishakti platform using React ",
//       "Developed key UI components using Tailwind CSS."
//     ],
//     workPicture:[
//       "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo4.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo3.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo.34961b6aa0d7e950f4c3.jpg",

//     ],
//     link: "https://childrightsinstitute.org/"
//   },
//   {
//     title: "Bharat Sports",
//     thumbnail: "https://frontend.bharatsports.org/static/media/LogoImage.3f741cdbbf9aba8eb566.png",
//     description: [
//       "Developed key UI components for the government-backed Strishakti platform using React and Tailwind CSS.",
//       "Developed key UI components for the Strishakti platform using React ",
//       "Developed key UI components using Tailwind CSS."
//     ],
//     workPicture:[
//       "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo4.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo3.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo.34961b6aa0d7e950f4c3.jpg",

//     ],
//     link: "https://frontend.bharatsports.org/"
//   },
//   {
//     title: "Saksham-Balak",
//     thumbnail: "https://sakshambalak.org/static/media/sb-logo.b6295535a786612f96a0.png",
//     description: [
//       "Developed key UI components for the government-backed Strishakti platform using React and Tailwind CSS.",
//       "Developed key UI components for the Strishakti platform using React ",
//       "Developed key UI components using Tailwind CSS."
//     ],
//     workPicture:[
//       "https://strishakti.org/static/media/logo5.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo4.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo3.34961b6aa0d7e950f4c3.jpg",
//       "https://strishakti.org/static/media/logo.34961b6aa0d7e950f4c3.jpg",

//     ],
//     link: "https://sakshambalak.org/"
//   }
// ];

// const PortfolioProjects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
//       <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full justify-center">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-105 hover:shadow-lg transition transform cursor-pointer text-center flex flex-col items-center"
//             onClick={() => setSelectedProject(project)}
//           >
//             <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
//             <h3 className="text-xl font-semibold">{project.title}</h3>
//           </div>
//         ))}
//       </div>

//       <Transition appear show={!!selectedProject} as={Fragment}>
//         <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClose={() => setSelectedProject(null)}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-90"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-90"
//           >
//             <div className="bg-gray-800 p-6 rounded-lg max-w-lg text-center shadow-xl">
//               <h3 className="text-2xl font-bold mb-3">{selectedProject?.title}</h3>
//               <p className="mb-4">{selectedProject?.description}</p>
//               <a href={selectedProject?.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View Project</a>
//               <button onClick={() => setSelectedProject(null)} className="block mt-4 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">Close</button>
//             </div>
//           </Transition.Child>
//         </Dialog>
//       </Transition>
//     </div>
//   );
// };

// export default PortfolioProjects;
