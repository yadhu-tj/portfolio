import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const canvasRef = useRef(null);
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [buttonText, setButtonText] = useState("EMAIL ME"); // State for text change
  
  // REPLACE THIS WITH YOUR REAL EMAIL
  const MY_EMAIL = "yadhunandhantj@gmail.com"; 

  const mouse = useRef({ x: 0, y: 0 });
  const xTo = useRef(null);
  const yTo = useRef(null);

  // --- 1. MOUSE FOLLOWER ---
  useEffect(() => {
    xTo.current = gsap.quickTo(buttonRef.current, "x", { duration: 0.5, ease: "power3.out" });
    yTo.current = gsap.quickTo(buttonRef.current, "y", { duration: 0.5, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY - rect.top;

        if (isHovering) {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            xTo.current((e.clientX - centerX) * 0.2);
            yTo.current((e.clientY - rect.top - centerY) * 0.2);
        } else {
            xTo.current(0);
            yTo.current(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering]);

  // --- 2. STAR ENGINE (Unchanged) ---
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
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5,
        friction: 0.96
      });
    }

    const render = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; 
      ctx.fillRect(0, 0, width, height);
      
      stars.forEach(star => {
        const dx = mouse.current.x - star.x;
        const dy = mouse.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const safeDistance = Math.max(distance, 10); 
        const force = isHovering ? 500 / safeDistance : 0;
        const angle = Math.atan2(dy, dx);
        
        if (isHovering) {
            star.vx += Math.cos(angle) * force * 0.05;
            star.vy += Math.sin(angle) * force * 0.05;
        }

        const maxSpeed = isHovering ? 15 : 2;
        const speed = Math.sqrt(star.vx * star.vx + star.vy * star.vy);
        if (speed > maxSpeed) {
            star.vx = (star.vx / speed) * maxSpeed;
            star.vy = (star.vy / speed) * maxSpeed;
        }

        star.x += star.vx;
        star.y += star.vy;
        star.vx *= star.friction;
        star.vy *= star.friction;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = speed > 3 ? '#22d3ee' : 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });

      requestAnimationFrame(render);
    };

    const animationId = requestAnimationFrame(render);
    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
    };
  }, [isHovering]);

  // --- 3. COPY TO CLIPBOARD FUNCTION ---
  const handleCopy = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setButtonText("COPIED!");
    setIsHovering(false); // Optional: Release the physics slightly
    
    // Reset text after 2 seconds
    setTimeout(() => {
        setButtonText("EMAIL ME");
    }, 2000);
  };

  return (
    <section 
        ref={containerRef} 
        className="h-screen relative overflow-hidden bg-black flex flex-col items-center justify-center font-['Space_Grotesk']"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 flex flex-col items-center text-center mix-blend-difference pointer-events-none">
        <h2 className="text-sm md:text-xl tracking-[0.5em] text-gray-500 mb-6 uppercase">
          Transmission
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter">
          HAVE AN IDEA?
        </h1>
      </div>

      {/* THE INTERACTIVE BUTTON */}
      <div 
          className="relative z-20"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleCopy} // CLICK TO COPY
      >
          <div 
              ref={buttonRef}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-black border border-white/20 text-white flex items-center justify-center text-lg font-bold tracking-widest hover:scale-110 transition-transform duration-300 group overflow-hidden relative cursor-pointer"
          >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-white/5 blur-xl group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
              
              <div className="relative flex flex-col items-center gap-2 z-10">
                  <span>{buttonText}</span>
                  {/* Change Icon based on state */}
                  {buttonText === "EMAIL ME" ? (
                     <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  ) : (
                     <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  )}
              </div>
          </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="absolute bottom-10 w-full flex justify-between px-6 md:px-10 text-[10px] md:text-xs text-gray-600 uppercase tracking-widest z-20">
        <div>© 2025 YADHU</div>
        <div className="flex gap-6 pointer-events-auto">
            <a href="https://www.linkedin.com/in/yadhunandhan-tj" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/yadhu-tj" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>

    </section>
  );
};

export default Contact;