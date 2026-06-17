import React, { useEffect } from 'react'
import Home from './pages/Home'
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Expose globally for components to access
    window.lenis = lenis;

    // Setup the requestAnimationFrame loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Global event delegation for smooth scrolling to anchor links
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const target = anchor.getAttribute('href');
        if (target && target.length > 1) { // ensures it's not just "#"
          e.preventDefault();
          lenis.scrollTo(target, { offset: 0, duration: 1.2 });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('click', handleGlobalClick);
      lenis.destroy();
    }
  }, [])

  return (
    <div className="app">
      <Home />
    </div>
  )
}

export default App
