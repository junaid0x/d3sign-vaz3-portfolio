import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-white dark:bg-[#0A0A0A] flex flex-col items-center justify-center pt-20 pb-32 px-6 relative transition-colors duration-500">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full max-w-[1200px] mx-auto text-center"
      >
        {/* Eyebrow */}
        <motion.span
          variants={itemVariants}
          className="text-[11px] md:text-[12px] uppercase tracking-[0.1em] text-[#888888] dark:text-[#666666] font-medium mb-2"
        >
          Make it happen
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[140px] leading-[0.9] font-medium tracking-tighter text-center text-[#111111] dark:text-white transition-colors duration-500"
        >
          Let's turn your ideas
          <br className="hidden md:block" />
          <span className="md:ml-12 lg:ml-24">into impactful</span> performance-driven design
        </motion.h1>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#000000] hover:bg-[#111111] dark:bg-white dark:hover:bg-[#EAEAEA] text-white dark:text-[#111111] px-8 py-3.5 rounded-full text-[15px] font-medium transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <span>Say h3y</span>
          <span>👋</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
