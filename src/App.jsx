import React, { useState, useEffect, useLayoutEffect } from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor'; // <-- Import Cursor

const App = () => {
  useSmoothScroll(); 
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen w-full selection:bg-cyan-500 selection:text-white cursor-none"> 
      {/* Added 'cursor-none' class to hide default cursor */}

      {/* GLOBAL FILM GRAIN OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[50] opacity-5 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <CustomCursor /> {/* The Magic Wand */}
      
      <Preloader onComplete={() => setLoading(false)} />
      
      <Hero startAnimation={!loading} />
      
      <div id="next-section">
        <Gallery />
      </div>

      <About />

      <Contact />

    </main>
  );
};

export default App;