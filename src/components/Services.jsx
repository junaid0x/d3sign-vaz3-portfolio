import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const services = [
  { name: 'UI/UX Design', icon: '✨' },
  { name: 'Content Strategy', icon: '📱' },
  { name: 'Web Design', icon: '💻' },
  { name: 'Social Media Campaign', icon: '⚡' },
  { name: 'Branding', icon: '🎨' },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const containerRef = useRef(null);

  // Motion values for custom cursor coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for the cursor following
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <section
      id="services"
      ref={containerRef}
      className={`w-full bg-white dark:bg-[#0A0A0A] flex flex-col items-center justify-center pt-16 pb-24 px-6 lg:px-[40px] relative transition-colors duration-500 ${activeService ? 'cursor-none' : ''}`}
    >
      <div className="w-full">
        {/* Eyebrow */}
        <div className="mb-4">
          <span className="text-[11px] md:text-[12px] uppercase tracking-[0.1em] text-[#888888] dark:text-[#666666] font-medium transition-colors duration-500">
            What we do
          </span>
        </div>

        {/* Services List */}
        <div className="w-full flex flex-col">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full py-10 md:py-12 border-b border-[#F0F0F0] dark:border-[#222222] flex items-center group transition-colors duration-500"
              onMouseEnter={() => setActiveService(service.icon)}
              onMouseLeave={() => setActiveService(null)}
            >
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium text-[#111111] dark:text-white transition-colors duration-500">
                {service.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center text-4xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: activeService ? 1 : 0,
          scale: activeService ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {activeService}
      </motion.div>
    </section>
  );
};

export default Services;
