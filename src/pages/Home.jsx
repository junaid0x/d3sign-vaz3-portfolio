import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Form from '../components/Form';
import Footer from '../components/Footer';

const Home = () => {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    
    // Initial measurement
    handleResize();
    
    // Small delay to ensure styles and fonts are loaded
    setTimeout(handleResize, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F6F5] dark:bg-[#000000] transition-colors duration-500">
      
      {/* Main Content Box (sits on top and scrolls) */}
      <main 
        className="relative z-10 bg-white dark:bg-[#0A0A0A] transition-colors duration-500" 
        style={{ marginBottom: `${footerHeight}px` }}
      >
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Team />
        <Form />
      </main>

      {/* Hidden Fixed Footer (revealed when main content scrolls up) */}
      <div 
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full z-0"
      >
        <Footer />
      </div>

    </div>
  );
};

export default Home;
