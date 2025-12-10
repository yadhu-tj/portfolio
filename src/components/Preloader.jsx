import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const app = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const text = textRef.current;

      // 1. "IMAGINE"
      tl.set(text, { textContent: "IMAGINE" }) 
        .fromTo(text, 
          { opacity: 0, y: 20, filter: 'blur(10px)' }, 
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
        )
        .to(text, { opacity: 0, y: -20, filter: 'blur(10px)', duration: 0.5, delay: 0.4 })

      // 2. "CREATE"
        .set(text, { textContent: "CREATE" })
        .fromTo(text, 
          { opacity: 0, y: 20, filter: 'blur(10px)' }, 
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
        )
        .to(text, { opacity: 0, y: -20, filter: 'blur(10px)', duration: 0.5, delay: 0.4 })

      // 3. "ELEVATE"
        .set(text, { textContent: "ELEVATE" })
        .fromTo(text, 
          { opacity: 0, y: 20, filter: 'blur(10px)' }, 
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }
        )
        .to(text, { opacity: 0, y: -20, filter: 'blur(10px)', duration: 0.5, delay: 0.4 })

      // 4. THE EXIT
        .call(() => {
           if(text) text.innerText = ""; 
        })
        .to(containerRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
          onStart: () => {
             setTimeout(() => {
               if(onComplete) onComplete();
             }, 200); 
          }
        });

    }, app);

    return () => ctx.revert();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div ref={app}>
      <div 
        ref={containerRef}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center pointer-events-none"
      >
        <h1 
          ref={textRef} 
          className="text-6xl md:text-8xl font-bold text-white tracking-widest uppercase font-['Space_Grotesk']"
        >
        </h1>
      </div>
    </div>
  );
};

export default Preloader;