import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroMask = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Simple zoom in effect
    gsap.fromTo(textRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Grain */}
      <div className="grain-overlay" /> 
      
      <h1 
        ref={textRef}
        className="text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-center bg-cover select-none"
        style={{
          // Using a high-res abstract liquid GIF for the demo
          backgroundImage: "url('https://media.giphy.com/media/26BRy95p16uJ3qPmM/giphy.gif')",
        }}
      >
        PANAKALI
      </h1>
      
      <p className="text-white/50 mt-10 tracking-[0.5em] text-sm uppercase">
        Option 1: The Mask
      </p>
    </div>
  );
};

export default HeroMask;