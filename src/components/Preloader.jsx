import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const text = textRef.current;
    const container = containerRef.current;
    if (!text || !container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
          if (onCompleteRef.current) onCompleteRef.current();
        },
      });

      // 1. "IMAGINE"
      tl.set(text, { textContent: "IMAGINE" })
        .fromTo(
          text,
          { opacity: 0, y: 20, filter: 'blur(12px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }
        )
        .to(text, { opacity: 0, y: -20, filter: 'blur(12px)', duration: 0.45, delay: 0.35 })

      // 2. "CREATE"
        .set(text, { textContent: "CREATE" })
        .fromTo(
          text,
          { opacity: 0, y: 20, filter: 'blur(12px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }
        )
        .to(text, { opacity: 0, y: -20, filter: 'blur(12px)', duration: 0.45, delay: 0.35 })

      // 3. "ELEVATE"
        .set(text, { textContent: "ELEVATE" })
        .fromTo(
          text,
          { opacity: 0, y: 20, filter: 'blur(12px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }
        )
        .to(text, { opacity: 0, y: -20, filter: 'blur(12px)', duration: 0.45, delay: 0.35 })

      // 4. THE EXIT
        .call(() => {
          if (text) text.innerText = "";
        })
        .to(container, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });
    }, container);

    // Safeguard fallback to ensure preloader never gets stuck
    const fallbackTimer = setTimeout(() => {
      setIsDone(true);
      if (onCompleteRef.current) onCompleteRef.current();
    }, 4500);

    return () => {
      clearTimeout(fallbackTimer);
      ctx.revert();
    };
  }, []);

  const handleSkip = () => {
    setIsDone(true);
    if (onCompleteRef.current) onCompleteRef.current();
  };

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      onClick={handleSkip}
      className="fixed inset-0 z-[9999] bg-[#08080a] flex flex-col items-center justify-center pointer-events-auto cursor-pointer select-none overflow-hidden"
      title="Click to skip"
    >
      {/* Background ambient glow */}
      <div className="absolute w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Kinetic Text */}
      <h1
        ref={textRef}
        className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-[0.25em] uppercase font-syne select-none text-center px-4"
      >
        IMAGINE
      </h1>

      {/* Subtle Skip Hint */}
      <div className="absolute bottom-10 font-mono text-[10px] text-gray-600 tracking-widest uppercase">
        [ CLICK ANYWHERE TO SKIP ]
      </div>
    </div>
  );
};

export default Preloader;