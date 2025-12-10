import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  
  const moveCursor = useRef(null);
  const moveFollower = useRef(null);

  useEffect(() => {
    // 1. SETUP GSAP QUICKTO (For performance)
    moveCursor.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3.out" });
    const moveCursorY = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3.out" });
    
    moveFollower.current = gsap.quickTo(followerRef.current, "x", { duration: 0.5, ease: "power3.out" });
    const moveFollowerY = gsap.quickTo(followerRef.current, "y", { duration: 0.5, ease: "power3.out" });

    // 2. MOUSE LISTENER
    const handleMouseMove = (e) => {
      // Move the dot instantly
      moveCursor.current(e.clientX);
      moveCursorY(e.clientY);

      // Move the ring with lag
      moveFollower.current(e.clientX);
      moveFollowerY(e.clientY);
    };

    // 3. HOVER LISTENER (Scales the cursor when hovering links/buttons)
    const handleHover = () => {
        gsap.to(followerRef.current, { scale: 3, opacity: 0.5, duration: 0.3 });
    };
    const handleUnhover = () => {
        gsap.to(followerRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    };

    // Attach listeners to all clickable elements
    const clickables = document.querySelectorAll('a, button, .cursor-pointer');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clickables.forEach(el => {
          el.removeEventListener('mouseenter', handleHover);
          el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []); // Run once on mount (Note: dynamic content might need re-binding, but this covers 90%)

  return (
    <>
      {/* The Main Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      
      {/* The Ghost Ring */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
};

export default CustomCursor;