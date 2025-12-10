import React, { useEffect, useRef } from 'react';

const HeroGlitch = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
  const textRef = useRef(null);
  
  const animateText = () => {
    let iteration = 0;
    const originalText = "PANAKALI";
    const element = textRef.current;
    if(!element) return;

    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) return originalText[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3; 
    }, 30);
  };

  useEffect(() => {
    setTimeout(animateText, 500);
  }, []);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <h1 
          ref={textRef}
          onMouseOver={animateText} 
          className="text-[12vw] font-mono font-bold text-white tracking-tighter cursor-pointer z-10 mix-blend-difference"
        >
          PANAKALI
        </h1>

        <p className="text-green-500 mt-10 tracking-widest font-mono text-sm uppercase z-10">
            Option 2: The Glitch (Hover Me)
        </p>
    </div>
  );
};

export default HeroGlitch;