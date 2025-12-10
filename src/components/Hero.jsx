import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // --- 1. THE SMOOTH STAR ENGINE (Unchanged, it was good) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars = [];
    const starCount = 150; 

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        speed: Math.random() * 0.5 + 0.1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height); 
      stars.forEach(star => {
        star.y -= star.speed; 
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // --- 2. TEXT & 3D ANIMATION (Entrance) ---
  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in text + 3D element simultaneously with Preloader fade out
    tl.fromTo(".hero-content", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.5 } // Delay ensures it starts appearing as preloader dissolves
    );
    
    // Animate the 3D Flux Core entrance
    gsap.fromTo(".flux-core",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out", delay: 0.8 }
    );

  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full relative overflow-hidden bg-black font-['Space_Grotesk'] flex items-center justify-center">
      
      {/* BACKGROUND STARS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />

      {/* GRADIENT GLOW */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full w-full">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="hero-content text-white space-y-6 flex flex-col justify-center">
          <div className="w-fit px-3 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
            <span className="text-xs tracking-[0.2em] text-gray-300 uppercase">HI THERE</span>
          </div>
          
          {/* THE FIX: ONE LINE LAYOUT */}
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold leading-tight tracking-tighter mix-blend-screen whitespace-nowrap">
            I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">YADHU</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg border-l border-gray-700 pl-6 leading-relaxed">
            Crafting digital experiences that feel <span className="text-white">alive</span>. 
            <br/> 
            <span className="text-sm opacity-50 mt-4 block tracking-widest uppercase">BUILD WITH ME</span>
          </p>
        </div>

        {/* RIGHT: THE 3D FLUX CORE */}
        <div className="flux-core flex items-center justify-center perspective-1000">
           <div className="relative w-64 h-64 md:w-80 md:h-80 transform-style-3d animate-float">
              {/* Rings */}
              <div className="absolute inset-0 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ transform: 'rotateX(60deg)' }} />
              <div className="absolute inset-10 border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
              {/* Core Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_50px_rgba(100,100,255,0.3)] animate-pulse" />
           </div>
        </div>

      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes spin { from { transform: rotate(0deg) rotateX(45deg); } to { transform: rotate(360deg) rotateX(45deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
      `}</style>
    </section>
  );
};

export default Hero;