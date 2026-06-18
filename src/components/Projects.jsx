import React from 'react';
import paoCover from '../../references/projects/PÃO Cover.png';
import lovisaCover from '../../references/projects/Lovisa Cover.png';
import sebastianCover from '../../references/projects/Sebastian Voyage Cover.png';
import spanxCover from '../../references/projects/SpanX cover.png';
import jassCover from '../../references/projects/Jass Cover.png';

const projectsData = [
  {
    title: "PÃO — Visual Identity & Bakery Branding",
    description: (
      <>
        <strong className="font-semibold text-black dark:text-white">The Overview:</strong> Bridging a decade of authentic Brazilian heritage with a modern, editorial aesthetic for the US retail market.
        <br /><br />
        <strong className="font-semibold text-black dark:text-white">The Strategy:</strong> Developed a comprehensive brand identity, layout systems, and a rich "golden-hour" yellow and brown color palette. Leveraging advanced AI tools, we generated premium packaging mechanics and handmade vector assets to elevate a beloved community staple into a high-end luxury retail experience.
      </>
    ),
    image: paoCover,
    tags: ["BakeryBranding", "PackagingDesign", "VisualIdentity", "BrandSystem", "AIBranding"],
    link: "https://www.behance.net/gallery/249665143/PAO-Visual-Identity-Bakery-Branding"
  },
  {
    title: "Lovisa Jewelry — Brand Identity & Creative Direction",
    description: (
      <>
        <strong className="font-semibold text-black dark:text-white">The Overview:</strong> Positioning a global fashion jewelry destination at the intersection of runway trends and accessible luxury.
        <br /><br />
        <strong className="font-semibold text-black dark:text-white">The Strategy:</strong> Crafting a premium visual system that underscores bold, versatile silhouettes and sophisticated editorial aesthetics. Using AI-driven commercial photography concepts, the branding serves as the definitive finishing touch for a high-end personal style statement.
      </>
    ),
    image: lovisaCover,
    tags: ["LuxuryJewelry", "BrandIdentity", "FashionBranding", "ArtDirection", "MinimalistDesign"],
    link: "https://www.behance.net/gallery/248019425/Lovisa-Jewelry-Brand-Identity"
  },
  {
    title: "Sebastian Voyage — Travel & Tourism Agency Branding",
    description: (
      <>
        <strong className="font-semibold text-black dark:text-white">The Overview:</strong> Engineering a premium identity for a top-tier travel agency dedicated to curating unforgettable, authentic journeys.
        <br /><br />
        <strong className="font-semibold text-black dark:text-white">The Strategy:</strong> A vibrant yet structured visual layout system balancing exploration with elite service. The brand identity moves beyond traditional destination marketing, creating a nostalgic, premium visual narrative focused on authentic moments, memories, and high-end travel lifestyles.
      </>
    ),
    image: sebastianCover,
    tags: ["TravelBranding", "TourismDesign", "VisualNarrative", "Typography", "IdentitySystems"],
    link: "https://www.behance.net/gallery/245712709/Sebastian-Voyage-I-Travel-Tourism-Agency-Branding"
  },
  {
    title: "Spanx — Brand Identity & Visual System",
    description: (
      <>
        <strong className="font-semibold text-black dark:text-white">The Overview:</strong> Reimagining an iconic apparel brand as a high-performance movement rooted in confidence, support, and transformation.
        <br /><br />
        <strong className="font-semibold text-black dark:text-white">The Strategy:</strong> A striking visual ecosystem where soft minimalism meets structural strength. Built for real bodies and modern lifestyles, the identity highlights clean geometry, high-impact contrast, and high-performance design layouts engineered to empower movement and redefine functional luxury.
      </>
    ),
    image: spanxCover,
    tags: ["ApparelBranding", "ActivewearDesign", "VisualSystem", "MinimalistOpulence", "PremiumIdentity"],
    link: "https://www.behance.net/gallery/246512657/SpanX-Brand-Identity"
  },
  {
    title: "Jass Fitness — Corporate Brand Design",
    description: (
      <>
        <strong className="font-semibold text-black dark:text-white">The Overview:</strong> Capturing the raw power and technical precision of peak physical performance for the competitive fitness landscape.
        <br /><br />
        <strong className="font-semibold text-black dark:text-white">The Strategy:</strong> Engineered a bold, geometric icon paired with high-energy, forward-leaning typography. This structured foundation blends high-octane performance aesthetics with a professional corporate framework, designed to command attention in a modern athletic ecosystem.
      </>
    ),
    image: jassCover,
    tags: ["FitnessBranding", "LogoDesign", "GeometricIcon", "Typography", "CorporateIdentity"],
    link: "https://www.behance.net/gallery/250372533/Jass-Fitness-Brand-Design"
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
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col group cursor-pointer block"
          >

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

          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
