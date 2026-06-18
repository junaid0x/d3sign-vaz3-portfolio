import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full min-h-[90px] px-6 lg:px-[40px] py-4 md:py-0 flex items-center justify-between transition-all duration-500 sticky top-0 z-50 ${scrolled ? 'bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-md shadow-sm' : 'bg-white dark:bg-[#0A0A0A]'}`}
    >
      {/* Left side */}
      <div className="flex items-center gap-2">
        {/* Logo Pill */}
        <div className="flex items-center bg-white dark:bg-[#0A0A0A] border border-[#EFEFEF] dark:border-[#222222] rounded-full p-1.5 sm:pr-2 transition-colors duration-500">
          <img src="/dv icon.svg" alt="D3sign Vaz3 Logo" className="w-9 h-9 rounded-full flex-shrink-0 object-cover bg-white dark:bg-black" />
          <span className="hidden sm:block font-medium text-[20px] tracking-tight text-[#111111] dark:text-white px-2">D3sign Vaz3</span>
        </div>

        {/* Status Pill */}
        <div className="hidden sm:flex items-center justify-center gap-2 bg-[#F6F6F5] dark:bg-[#111111] rounded-full px-4 py-2.5 transition-colors duration-500">
          <div className="w-1.5 h-1.5 bg-[#2ECC71] rounded-full" />
          <span className="text-[14px] text-[#111111] dark:text-[#EAEAEA] tracking-wide transition-colors duration-500">Open for new projects</span>
        </div>

      </div>

      {/* Right side CTA & Dark Mode Toggle */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F6F6F5] dark:bg-[#111111] text-[#111111] dark:text-white hover:bg-[#EAEAEA] dark:hover:bg-[#222222] transition-colors duration-300"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const formElement = document.getElementById('contact');
            if (formElement) {
              formElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-[#000000] hover:bg-[#111111] text-white px-7 py-3 rounded-full text-[14px] font-medium transition-all duration-300 ease-out"
        >
          Let's talk
        </motion.button>
      </div>

    </motion.nav>
  );
};

export default Navbar;
