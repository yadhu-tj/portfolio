import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5, // The higher the value, the smoother/slower the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing curve
      smoothWheel: true,
    });

    // The Animation Loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;