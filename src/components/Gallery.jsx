import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Digital Canvas",
    category: "MCA Mini-Project",
    description: "An immersive digital art gallery experience built to redefine how we view creativity on the web.",
    tech: ["Python", "WebGL", "SQL"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    githubLink: "https://github.com/yourusername/project1", // REPLACE THESE
    liveLink: "#"
  },
  {
    id: "02",
    title: "EduTech Core",
    category: "Mobile Application",
    description: "A comprehensive training and exam platform featuring real-time analytics and article sharing.",
    tech: ["Flutter", "Django", "SQL"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    githubLink: "https://github.com/yourusername/project2",
    liveLink: "#"
  },
  {
    id: "03",
    title: "Portfolio 2025",
    category: "Creative Development",
    description: "The very site you are looking at. A performance-first showcase of motion, physics, and design.",
    tech: ["React", "GSAP", "Lenis"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2680&auto=format&fit=crop",
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "#"
  }
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    let scrollWidth = section.offsetWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        pin: true,
        scrub: 1, // Smoothness (1 is standard, 2 is floaty). NO SNAP.
        start: "top top",
        end: "+=3000",
      }
    });

    tl.to(section, {
      x: -scrollWidth,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="bg-black overflow-hidden">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen flex flex-row w-[300vw] relative">
          
          {projects.map((project, index) => (
            <div key={index} className="w-screen h-screen flex items-center justify-center p-6 md:p-20 border-r border-white/10 relative">
              
              {/* Background Number */}
              <h2 className="absolute top-10 left-10 text-[20vw] font-bold text-white/5 font-['Space_Grotesk'] leading-none select-none pointer-events-none">
                {project.id}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center z-10">
                
                {/* LEFT: TEXT */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="h-[1px] w-10 bg-cyan-500"></span>
                    <span className="text-cyan-400 tracking-[0.3em] text-sm uppercase font-bold">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-5xl md:text-7xl font-bold text-white font-['Space_Grotesk'] leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex gap-3 flex-wrap">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="px-4 py-2 border border-white/20 rounded-full text-xs text-white uppercase tracking-wider">
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* ACTION BUTTONS (GitHub / Live) */}
                  <div className="flex gap-6 pt-4">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex items-center gap-3 text-white hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                      <span className="text-sm tracking-widest uppercase border-b border-transparent group-hover:border-cyan-400">View Code</span>
                    </a>

                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer" 
                      className="group flex items-center gap-3 text-white hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      <FaExternalLinkAlt className="text-xl group-hover:scale-110 transition-transform" />
                      <span className="text-sm tracking-widest uppercase border-b border-transparent group-hover:border-cyan-400">Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* RIGHT: IMAGE CARD */}
<div className="relative group perspective-1000">
  <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-lg border border-white/10 transition-all duration-500 group-hover:scale-[1.01] group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]">
    <img 
      src={project.image} 
      alt={project.title} 
      // Added slight scale to image on hover for depth
      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
  </div>
</div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Gallery;