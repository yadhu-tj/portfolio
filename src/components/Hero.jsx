import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaArrowDown, FaBrain, FaServer, FaEye, FaCode } from 'react-icons/fa';
import StrokeText from './StrokeText';

const Hero = ({ startAnimation = true }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const metricsRef = useRef(null);
  const glowRef = useRef(null);

  // Kinetic entrance animation with GSAP
  useEffect(() => {
    if (!startAnimation) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '+=0.5'
      )
      .fromTo(
        metricsRef.current?.children,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' },
        '-=0.4'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [startAnimation]);

  // Ambient mouse light
  useEffect(() => {
    if (!glowRef.current || !containerRef.current) return;
    const setGlowX = gsap.quickTo(glowRef.current, 'x', { duration: 0.8, ease: 'power2.out' });
    const setGlowY = gsap.quickTo(glowRef.current, 'y', { duration: 0.8, ease: 'power2.out' });

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setGlowX(x - 250);
      setGlowY(y - 250);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -40, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 pt-28 pb-16 overflow-hidden bg-[#08080a]"
    >
      {/* Ambient reactive cursor glow */}
      <div 
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-radial from-lime/10 via-lime/[0.02] to-transparent blur-3xl opacity-60"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Editorial Grid Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Status & Telemetry Badge */}
        <div ref={badgeRef} className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse"></span>
            <span className="font-mono text-[11px] text-gray-300 uppercase tracking-widest">
              AI &amp; FULL-STACK DEVELOPER
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/5 font-mono text-[11px] text-gray-400">
            <span className="text-lime">LOC:</span>
            <span>ERNAKULAM, KERALA // 10.0° N, 76.3° E</span>
          </div>
        </div>

        {/* Master Kinetic Typographic Headline with Green Stroke to White Wipe Fill */}
        <h1 
          ref={titleRef}
          className="w-full flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 mb-6 sm:mb-8 select-none"
        >
          <StrokeText
            text="YADHU"
            strokeColor="#d4ff00"
            fillColor="#ffffff"
            strokeWidth={1.8}
            drawDuration={1.3}
            fillDelay={0.15}
            stagger={0.06}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={120}
            fontWeight={800}
            fontFamily="Syne, sans-serif"
            letterSpacing={-2}
            start={startAnimation}
          />
          <StrokeText
            text="NANDHAN."
            strokeColor="#d4ff00"
            fillColor="#ffffff"
            strokeWidth={1.8}
            drawDuration={1.3}
            fillDelay={0.25}
            stagger={0.06}
            ease="power2.out"
            trigger="mount"
            fillMode="wipe"
            fontSize={120}
            fontWeight={800}
            fontFamily="Syne, sans-serif"
            letterSpacing={-2}
            start={startAnimation}
          />
        </h1>

        {/* Exact Authentic Bio Narrative */}
        <div ref={descRef} className="max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="font-grotesk text-lg sm:text-xl text-gray-200 font-normal leading-relaxed">
            MCA scholar building <span className="text-white font-medium border-b border-lime/60">AI-integrated full-stack applications end-to-end</span> — RAG pipelines over vector databases, real-time computer vision with MediaPipe, and high-throughput Flask/FastAPI backends.
          </p>
          <p className="font-mono text-xs sm:text-sm text-gray-500 mt-3 tracking-wide">
            OWNING EACH SYSTEM FROM SCHEMA DESIGN THROUGH API LAYER TO 60FPS DEPLOYED FRONTEND
          </p>
        </div>

        {/* Real Engineering Telemetry Cards */}
        <div 
          ref={metricsRef}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12"
        >
          <div className="p-4 rounded-xl glass-panel text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">AI &amp; RAG</span>
              <FaBrain className="text-lime text-xs" />
            </div>
            <span className="font-syne text-base font-bold text-white block">LangChain + RAG</span>
            <span className="font-mono text-[11px] text-gray-400 mt-0.5 block">Pinecone &amp; ChromaDB</span>
          </div>

          <div className="p-4 rounded-xl glass-panel text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Async Backend</span>
              <FaServer className="text-lime text-xs" />
            </div>
            <span className="font-syne text-base font-bold text-white block">FastAPI &amp; Flask</span>
            <span className="font-mono text-[11px] text-gray-400 mt-0.5 block">PostgreSQL &amp; MongoDB</span>
          </div>

          <div className="p-4 rounded-xl glass-panel text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Vision &amp; 3D</span>
              <FaEye className="text-lime text-xs" />
            </div>
            <span className="font-syne text-base font-bold text-white block">MediaPipe &amp; CV</span>
            <span className="font-mono text-[11px] text-gray-400 mt-0.5 block">Three.js &amp; Socket.IO</span>
          </div>

          <div className="p-4 rounded-xl glass-panel text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Client Craft</span>
              <FaCode className="text-lime text-xs" />
            </div>
            <span className="font-syne text-base font-bold text-white block">React 19 &amp; Next.js</span>
            <span className="font-mono text-[11px] text-gray-400 mt-0.5 block">TypeScript &amp; GSAP</span>
          </div>
        </div>

        {/* Magnetic Scroll Action */}
        <button
          onClick={scrollToProjects}
          data-cursor="EXPLORE"
          className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 hover:bg-lime border border-white/10 hover:border-lime text-white hover:text-black transition-all duration-300 font-mono text-xs tracking-widest uppercase cursor-pointer"
        >
          <span>Explore Production Systems</span>
          <FaArrowDown className="text-xs group-hover:translate-y-1 transition-transform" />
        </button>

      </div>

      {/* Bottom Coordinates & Scroll Indicator */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-gray-600 uppercase tracking-widest pointer-events-none">
        <span className="hidden sm:inline-block">// SCROLL FOR PRODUCTION SPECIFICATIONS</span>
        <span className="mx-auto sm:mx-0">SYS_VER: 2026.4 // ERNAKULAM, KERALA</span>
      </div>
    </section>
  );
};

export default Hero;