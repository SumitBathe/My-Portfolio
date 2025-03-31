const experiences = [
    {
      company: "Sapours Technology",
      role: "Front-End Developer",
      duration: "Feb 2023 - Mar 2024",
      techStack: "ReactJS, JavaScript, Tailwind CSS, Redux, Node.js",
      description: "Developed and maintained user-friendly web applications, optimized performance, and collaborated on UI/UX improvements."
    },
    {
      company: "Mandate",
      role: "Front-End Engineer",
      duration: "Mar 2024 - Present",
      techStack: "ReactJS, JavaScript, TypeScript, Next.js, Tailwind CSS",
      description: "Working on scalable web applications, implementing dynamic UI components, and enhancing user experience."
    }
  ];
  
  const ExperienceSection = () => {
    return (
      <div className="w-full h-screen bg-gray-900 text-white flex flex-col items-center py-10">
        <h2 className="text-4xl font-bold mb-6">Experience</h2>
        <div className="w-full max-w-4xl space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold">{exp.role} @ {exp.company}</h3>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
              <p className="mt-2 text-blue-400 font-semibold">Tech Stack: {exp.techStack}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExperienceSection;
  