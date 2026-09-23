import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const labelRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktop with mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.body.classList.add('has-custom-cursor');

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const setCursorX = gsap.quickTo(cursor, 'x', { duration: 0.08, ease: 'power3.out' });
    const setCursorY = gsap.quickTo(cursor, 'y', { duration: 0.08, ease: 'power3.out' });

    const setFollowerX = gsap.quickTo(follower, 'x', { duration: 0.28, ease: 'power3.out' });
    const setFollowerY = gsap.quickTo(follower, 'y', { duration: 0.28, ease: 'power3.out' });

    const onMouseMove = (e) => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
      setCursorX(e.clientX);
      setCursorY(e.clientY);
      setFollowerX(e.clientX);
      setFollowerY(e.clientY);

      // Check if target or any parent has data-cursor attribute
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none">
      {/* Precision Core Dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-lime z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${cursorText ? 'scale-0' : 'scale-100'}`}
      />

      {/* Adaptive Ring / Context Pill Follower */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 pointer-events-none flex items-center justify-center ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          cursorText
            ? 'px-3 py-1.5 rounded-full bg-lime text-black border border-lime shadow-lg shadow-lime/30'
            : isHovered
            ? 'w-10 h-10 rounded-full border border-lime/80 bg-lime/10'
            : 'w-7 h-7 rounded-full border border-white/20 bg-transparent'
        }`}
      >
        {cursorText && (
          <span
            ref={labelRef}
            className="font-mono text-[10px] font-bold tracking-widest uppercase text-black"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;