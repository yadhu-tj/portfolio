import React, { useState, useEffect } from 'react';
import { FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  // Live IST Clock (Kerala, India)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection for backdrop glow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -60, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-3 sm:p-5 pointer-events-none">
        <nav 
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 rounded-full border transition-all duration-300 w-full max-w-5xl ${
            scrolled 
              ? 'glass-panel-glow bg-[#08080a]/90 border-white/15 shadow-2xl backdrop-blur-xl' 
              : 'bg-[#0f0f14]/60 border-white/10 backdrop-blur-md'
          }`}
        >
          {/* LEFT: Monogram & Status */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 group cursor-pointer"
              aria-label="Home"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-syne font-extrabold text-sm text-white group-hover:bg-lime group-hover:text-black transition-colors duration-300">
                YN
              </div>
              <span className="font-syne font-bold text-xs tracking-wider text-white hidden sm:inline-block">
                YADHUNANDHAN <span className="font-mono text-[10px] text-gray-400 font-normal ml-1">// AI &amp; FULL-STACK</span>
              </span>
            </button>

            {/* Live Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime"></span>
              </span>
              <span className="font-mono text-[10px] text-gray-300 tracking-wider uppercase">
                Open for roles
              </span>
            </div>
          </div>

          {/* CENTER: Navigation Links */}
          <div className="hidden md:flex items-center gap-1 font-mono text-xs">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              // 01 WORK
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              // 02 ABOUT
            </button>
            <button 
              onClick={() => scrollToSection('stack')}
              className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              // 03 ARCHITECTURE
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-3 py-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              // 04 CONTACT
            </button>
          </div>

          {/* RIGHT: Live IST Clock + Resume Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {time && (
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/5 font-mono text-[11px] text-gray-400">
                <span className="text-lime">IST</span>
                <span>{time}</span>
              </div>
            )}

            <button 
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-lime text-black font-syne font-bold text-xs tracking-wider uppercase hover:bg-lime-muted transition-all duration-200 shadow-md shadow-lime/20 cursor-pointer"
              aria-label="View Resume Dossier"
            >
              <FaFileAlt className="text-[10px]" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-[#08080a]/95 backdrop-blur-2xl flex flex-col justify-center items-center p-6 md:hidden animate-fadeIn overscroll-contain"
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center gap-6 font-syne text-2xl font-bold tracking-tight">
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-lime transition-colors"
            >
              01 // FEATURED WORK
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-lime transition-colors"
            >
              02 // ABOUT &amp; PHILOSOPHY
            </button>
            <button 
              onClick={() => scrollToSection('stack')}
              className="text-gray-300 hover:text-lime transition-colors"
            >
              03 // SYSTEM ARCHITECTURE
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-lime transition-colors"
            >
              04 // TRANSMISSION
            </button>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-lime text-black text-sm tracking-widest font-mono uppercase"
            >
              VIEW RESUME DOSSIER
            </button>
          </div>

          <div className="absolute bottom-10 flex flex-col items-center gap-1 font-mono text-xs text-gray-500">
            <span>KERALA, INDIA // IST {time}</span>
            <span className="text-lime mt-1">AVAILABLE IMMEDIATELY</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
