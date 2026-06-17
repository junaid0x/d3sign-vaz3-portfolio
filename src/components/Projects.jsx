import React from 'react';

const projectsData = [
  {
    title: "Order — Finance Management App",
    description: "Order is a digital finance app designed to help individuals and teams bring clarity, structure, and flow to their money. Unlike traditional finance tools, we focuses on mental ease—making it simple to track incomes, log expenses, and understand financial insights without friction.",
    image: "", 
    tags: ["Branding", "UI/UX", "App Design"]
  },
  {
    title: "getupandwalk — Step Tracker",
    description: "getupandwalk helps you build a simple daily walking habit with clear goals and effortless tracking.",
    image: "",
    tags: ["Branding", "UI/UX", "App Design"]
  },
  {
    title: "muta — No Code Onboarding",
    description: "Muta is the fastest way to build, test, and optimize mobile onboarding flows without code.",
    image: "",
    tags: ["Branding", "UI/UX", "Web Design"]
  },
  {
    title: "Bite — AI-curated food planner",
    description: "Bite is the ultimate AI-curated food planner, designed to simplify and enhance how users discover dining experiences.",
    image: "",
    tags: ["Branding", "UI/UX", "App Design"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white dark:bg-[#0A0A0A] px-6 lg:px-[40px] pt-12 pb-24 transition-colors duration-500">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#111111] dark:text-white mb-12 tracking-tight transition-colors duration-500">
        Latest's projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            
            {/* Image Container */}
            <div className="w-full aspect-[4/3] bg-[#F6F6F5] dark:bg-[#111111] rounded-[32px] overflow-hidden mb-6 relative transition-colors duration-500">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              ) : (
                /* Fallback empty state */
                <div className="w-full h-full bg-[#F6F6F5] dark:bg-[#111111] group-hover:bg-[#EFEFEF] dark:group-hover:bg-[#1A1A1A] transition-colors duration-500" />
              )}
            </div>

            {/* Content */}
            <h3 className="text-[22px] font-medium text-[#111111] dark:text-white mb-2.5 transition-colors duration-500">
              {project.title}
            </h3>
            
            <p className="text-[15px] text-[#666666] dark:text-[#A0A0A0] leading-[1.6] mb-6 pr-4 transition-colors duration-500">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mt-auto">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="bg-[#F6F6F5] dark:bg-[#111111] text-[#666666] dark:text-[#A0A0A0] text-[12px] px-4 py-1.5 rounded-full transition-colors duration-500"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
