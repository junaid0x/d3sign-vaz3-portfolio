import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F6F6F5] dark:bg-[#000000] px-6 lg:px-[40px] pt-32 pb-8 flex flex-col justify-between min-h-[60vh] transition-colors duration-500">

      {/* Top Links Section */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-48 pl-2 md:pl-8">

        {/* Explore */}
        <div className="flex flex-col gap-6">
          <span className="text-[11px] md:text-[12px] uppercase tracking-[0.1em] text-[#888888] font-medium">
            Explore
          </span>
          <div className="flex flex-col gap-4">
            <a href="#services" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#services', { offset: 0, duration: 1.5 }); }} className="text-2xl md:text-[28px] font-medium text-[#111111] dark:text-[#EAEAEA] hover:text-[#888888] dark:hover:text-white transition-colors">Services</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#projects', { offset: 0, duration: 1.5 }); }} className="text-2xl md:text-[28px] font-medium text-[#111111] dark:text-[#EAEAEA] hover:text-[#888888] dark:hover:text-white transition-colors">Projects</a>
            <a href="#team" onClick={(e) => { e.preventDefault(); window.lenis?.scrollTo('#team', { offset: 0, duration: 1.5 }); }} className="text-2xl md:text-[28px] font-medium text-[#111111] dark:text-[#EAEAEA] hover:text-[#888888] dark:hover:text-white transition-colors">Team</a>
          </div>
        </div>

        {/* Stalk Us */}
        <div className="flex flex-col gap-6">
          <span className="text-[11px] md:text-[12px] uppercase tracking-[0.1em] text-[#888888] font-medium">
            Stalk Us
          </span>
          <div className="flex flex-col gap-4">
            <a href="https://www.behance.net/designvaze3" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-[28px] font-medium text-[#111111] dark:text-[#EAEAEA] hover:text-[#888888] dark:hover:text-white transition-colors">Behance</a>
            <a href="https://www.linkedin.com/company/design-vaze" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-[28px] font-medium text-[#111111] dark:text-[#EAEAEA] hover:text-[#888888] dark:hover:text-white transition-colors">Linkedin</a>
            <a href="https://www.instagram.com/design.vaze1/" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-[28px] font-medium text-[#111111] dark:text-[#EAEAEA] hover:text-[#888888] dark:hover:text-white transition-colors">Instagram</a>
            <a href="https://x.com/designvaze1" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-[28px] font-medium text-[#111111] dark:text-[#EAEAEA] hover:text-[#888888] dark:hover:text-white transition-colors">X</a>
            <a href="https://www.tiktok.com/@design.vaze1" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-[28px] font-medium text-[#111111] dark:text-[#EAEAEA] hover:text-[#888888] dark:hover:text-white transition-colors">TikTok</a>
          </div>
        </div>

      </div>

      {/* Bottom Branding Section */}
      <div className="mt-40 md:mt-34 flex flex-col md:flex-row items-end justify-between gap-8">

        {/* Massive Logo */}
        <div className="flex items-start">
          <h1 className="text-[10vw] leading-[0.75] font-medium text-[#111111] dark:text-white tracking-tighter transition-colors duration-500">
            D3SIGN
            VAZ3
          </h1>
          <div className="ml-1 mt-2 md:mt-8 w-4 h-4 md:w-12 md:h-12 rounded-full border-[1px] md:border-[3px] border-[#111111] dark:border-white flex items-center justify-center transition-colors duration-500">
            <span className="text-[8px] md:text-[22px] font-bold text-[#111111] dark:text-white leading-none transition-colors duration-500">R</span>
          </div>
        </div>

        {/* Copyright */}
        <span className="text-[11px] md:text-[13px] text-[#888888] uppercase tracking-wider mb-2">
          TORONTO, ONTARIO, CANADA — 2026
        </span>

      </div>
    </footer>
  );
};

export default Footer;
