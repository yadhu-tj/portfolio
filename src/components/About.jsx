import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myPhoto from '../assets/me.jpg.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    
    // Split text logic stays the same
    const words = text.innerText.split(" ");
    text.innerHTML = words.map(word => `<span class="word opacity-30 transition-opacity duration-300">${word} </span>`).join("");
    
    const spans = text.querySelectorAll('span');

    gsap.to(spans, {
      opacity: 1,
      color: "#ffffff",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
        end: "bottom center",
        scrub: 1,
      }
    });

  }, []);

  return (
    <section ref={container} className="min-h-screen bg-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* LEFT: THE PHOTO */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] group">
          <div className="absolute inset-0 border-2 border-white/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          <div className="absolute inset-0 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
            {/* REPLACE WITH YOUR PHOTO */}
            <img 
             src={myPhoto} 
              alt="Yadhu" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-black font-bold px-4 py-2 text-sm tracking-widest">
            FULL STACK
          </div>
        </div>
      </div>

      {/* RIGHT: THE STORY (The Diplomat) */}
      <div className="w-full md:w-1/2 md:pl-20">
        <h2 className="text-sm tracking-[0.4em] text-gray-500 mb-8 uppercase">The Architect</h2>
        
        {/* NEUTRAL & POWERFUL COPY */}
        <p ref={textRef} className="text-3xl md:text-5xl font-['Space_Grotesk'] font-bold leading-[1.2]">
          Great design needs a powerful core. I believe in bridging the gap between visuals and logic.
          While this portfolio showcases my eye for detail, my true expertise lies deep in the stack—architecting robust Backends, scalable APIs, and secure Databases. 
          I ensure the system works as beautifully as it looks.
        </p>

        {/* SKILLS */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap gap-4">
            {["Django", "Python", "React", "PostgreSQL", "System Design", "Docker"].map((skill, i) => (
              <div key={i} className="group relative cursor-default">
                <span className="text-gray-400 text-sm font-mono group-hover:text-cyan-400 transition-colors">
                  &lt;{skill} /&gt;
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default About;