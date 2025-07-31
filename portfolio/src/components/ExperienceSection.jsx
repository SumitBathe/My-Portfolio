// const experiences = [
//     {
//       company: "Sapours Technology Pvt. Ltd.",
//       role: "Trainee Developer",
//       duration: "Feb 2023 - Mar 2024",
//       techStack: "JavaScript, Node.js, SAP Hybris, Java",
//       description: "Developed and maintained user-friendly web pages, optimized performance, integrated APIs, and collaborated on UI/UX improvements."
//     },
//     {
//       company: "Mandate IT Solution",
//       role: "Front-End Engineer",
//       duration: "Mar 2024 - Present",
//       techStack: "ReactJS, JavaScript, Tailwind CSS, HTML",
//       description: "Worked on scalable web applications, implementing dynamic UI components, integrating APIs, providing deployment support, enhancing UI/UX, and optimizing performance."
//     }
//   ];
  
//   const ExperienceSection = () => {
//     return (
//       <div className="w-full h-screen bg-gray-100 text-black dark:bg-gray-800 dark:text-white flex flex-col items-center py-10">
//         <h2 className="text-4xl text-black dark:text-white font-bold mb-8">Experience</h2>
//         <div className="w-full max-w-4xl space-y-6">
//           {experiences.map((exp, index) => (
//             <div key={index} className="bg-gray-300 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
//               <h3 className="text-2xl font-bold underline underline-offset-2">{exp.role.toUpperCase()} </h3>
//               <h4 className="text-xl text-gray-700 dark:text-gray-400 font-semibold">{exp.company}</h4>
//               <p className="text-gray-500 text-sm">{exp.duration}</p>
//               <p className="mt-2">{exp.description}</p>
//               <p className="mt-2 text-blue-500 font-semibold">{exp.techStack}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default ExperienceSection;
  

import { FiExternalLink } from 'react-icons/fi';
import { trackEvent } from '../analytics';

const experiences = [
  {
    company: "Sapours Technology Pvt. Ltd.",
    company_site:"https://sapours.com/",
    role: "Trainee Developer",
    duration: "Feb 2023 - Mar 2024",
    techStack: "JavaScript, Node.js, SAP Hybris, Java",
    description:
      "Developed and maintained user-friendly web pages, optimized performance, integrated APIs, and collaborated on UI/UX improvements.",
  },
  {
    company: "Mandate IT Solution",
    company_site:"https://mandates.in/",
    role: "Front-End Developer",
    duration: "Apr 2024 - Present",
    techStack: "ReactJS, JavaScript, Redux, Tailwind CSS, HTML",
    description:
      "Worked on scalable web applications, implementing dynamic UI components, integrating APIs, providing deployment support, enhancing UI/UX, and optimizing performance.",
  },
];

const ExperienceSection = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white flex flex-col items-center py-10 px-4">
      <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
      <div className="w-full max-w-4xl space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                {exp.duration}
              </p>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2 flex items-center gap-2">
              {exp.company}
              <a
                onClick={()=>trackEvent("company page vist", `User view company page of ${exp.company}`)}
                href={exp.company_site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FiExternalLink size={12} />
              </a>
            </h4>
            <p className="text-gray-700 dark:text-gray-400 mb-3">{exp.description}</p>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {exp.techStack}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
