import React, { useState, useLayoutEffect } from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStackLoop from './components/TechStackLoop';
import Gallery from './components/Gallery';
import ScrollExpand from './components/ScrollExpand';
import About from './components/About';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';

const App = () => {
  useSmoothScroll();
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#08080a] text-[#f4f4f5] min-h-screen w-full relative selection:bg-lime selection:text-black">
      
      {/* FILM GRAIN TEXTURE */}
      <div className="grain-overlay" />

      {/* ADAPTIVE CONTEXTUAL CURSOR */}
      <CustomCursor />

      {/* EDITORIAL LUXURY SHUTTER PRELOADER */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* FLOATING ISLAND CAPSULE NAVBAR */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* RESUME / VERIFIED DOSSIER MODAL */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* HERO MASTHEAD */}
      <Hero startAnimation={!loading} />

      {/* INFINITE REAL-TIME TECH ARSENAL LOOP */}
      <TechStackLoop />

      {/* STACKED STICKY DECK WORK SHOWCASE */}
      <Gallery />

      {/* CINEMATIC SCROLL EXPAND TRANSITION INTO ABOUT */}
      <ScrollExpand
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
        alt="System Architecture & Dossier"
        title="THE ARCHITECT"
        scrollHint="SCROLL TO ENTER DOSSIER"
        useWindowScroll
        startWidth={44}
        startHeight={58}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.28}
        scrollDistance={1.0}
        holdDistance={0.35}
        smoothing={0.08}
        overlayScrim={0.65}
        enabled
      >
        <div className="max-w-3xl text-center space-y-4 px-6 select-none pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime/10 border border-lime/30 text-lime font-mono text-[11px] uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-ping" />
            <span>INDEX // 02 DOSSIER &amp; CREDENTIALS</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            ARCHITECTURAL GRIT &amp; SENSORY CRAFT
          </h2>
          <p className="font-grotesk text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Bridging mathematical backend rigor and high-concurrency systems with 60fps interactive elegance.
          </p>
          <div className="pt-2 font-mono text-xs text-lime tracking-widest uppercase flex items-center justify-center gap-2">
            <span>SCROLL TO ENTER THE STACK</span>
            <span>↓</span>
          </div>
        </div>
      </ScrollExpand>

      {/* ABOUT & DUAL-MODE ARCHITECTURE SPECTRUM */}
      <About />

      {/* CONTACT & TRANSMISSION */}
      <Contact />

    </div>
  );
};

export default App;