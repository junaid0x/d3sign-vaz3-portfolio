import React from 'react';
import { ArrowRight } from 'lucide-react';

const teamData = [
  {
    name: "Delfina Gatti",
    role: "Product Designer",
    image: "" // Placeholder
  },
  {
    name: "Juan Pablo Cornalba",
    role: "Product Designer",
    image: "" // Placeholder
  }
];

const Team = () => {
  return (
    <section id="team" className="w-full bg-white dark:bg-[#0A0A0A] px-6 lg:px-[40px] py-24 transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        
        {/* Left Column - Empty on Desktop for layout purposes */}
        <div className="hidden md:block"></div>

        {/* Right Column - Content */}
        <div className="flex flex-col">
          
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#111111] dark:text-white mb-16 tracking-tight transition-colors duration-500">
            Meet the h3y team
          </h2>

          {/* Team List */}
          <div className="flex flex-col gap-12">
            {teamData.map((member, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between group cursor-pointer"
              >
                
                {/* Avatar and Info Container */}
                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F6F6F5] dark:bg-[#111111] flex-shrink-0 transition-colors duration-500">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-[#EAEAEA] dark:bg-[#1A1A1A] transition-colors duration-500" />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="text-[22px] font-medium text-[#111111] dark:text-white mb-1 group-hover:text-[#2B32FF] dark:group-hover:text-[#4F55FF] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[15px] text-[#888888] dark:text-[#A0A0A0] transition-colors duration-500">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="w-11 h-11 rounded-full bg-[#F6F6F5] dark:bg-[#111111] flex items-center justify-center text-[#111111] dark:text-[#EAEAEA] group-hover:bg-[#111111] dark:group-hover:bg-[#EAEAEA] group-hover:text-white dark:group-hover:text-[#111111] transition-all duration-300">
                  <ArrowRight size={18} strokeWidth={2} />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
