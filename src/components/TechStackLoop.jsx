import React from 'react';
import { 
  SiPython, 
  SiFastapi, 
  SiFlask, 
  SiPostgresql, 
  SiMongodb, 
  SiLangchain, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiThreedotjs, 
  SiOpencv, 
  SiDocker, 
  SiTailwindcss, 
  SiGit,
  SiPydantic
} from 'react-icons/si';
import LogoLoop from './LogoLoop';

const TECH_ITEMS = [
  {
    name: 'Python',
    category: 'Core Language',
    icon: <SiPython className="text-lg text-[#3776AB] group-hover:scale-110 transition-transform" />,
    href: 'https://python.org'
  },
  {
    name: 'FastAPI',
    category: 'Async ASGI',
    icon: <SiFastapi className="text-lg text-[#009688] group-hover:scale-110 transition-transform" />,
    href: 'https://fastapi.tiangolo.com'
  },
  {
    name: 'LangChain',
    category: 'RAG & Vector Search',
    icon: <SiLangchain className="text-lg text-white group-hover:scale-110 transition-transform" />,
    href: 'https://langchain.com'
  },
  {
    name: 'PostgreSQL',
    category: 'Relational DB',
    icon: <SiPostgresql className="text-lg text-[#4169E1] group-hover:scale-110 transition-transform" />,
    href: 'https://postgresql.org'
  },
  {
    name: 'React 19',
    category: 'Client Architecture',
    icon: <SiReact className="text-lg text-[#61DAFB] group-hover:scale-110 transition-transform" />,
    href: 'https://react.dev'
  },
  {
    name: 'Next.js',
    category: 'Hybrid SSR/SSG',
    icon: <SiNextdotjs className="text-lg text-white group-hover:scale-110 transition-transform" />,
    href: 'https://nextjs.org'
  },
  {
    name: 'TypeScript',
    category: 'Strict Typing',
    icon: <SiTypescript className="text-lg text-[#3178C6] group-hover:scale-110 transition-transform" />,
    href: 'https://www.typescriptlang.org'
  },
  {
    name: 'Three.js',
    category: 'WebGL & 3D Math',
    icon: <SiThreedotjs className="text-lg text-white group-hover:scale-110 transition-transform" />,
    href: 'https://threejs.org'
  },
  {
    name: 'MediaPipe & CV',
    category: 'Computer Vision',
    icon: <SiOpencv className="text-lg text-[#5C3EE8] group-hover:scale-110 transition-transform" />,
    href: 'https://opencv.org'
  },
  {
    name: 'MongoDB',
    category: 'Beanie ODM Store',
    icon: <SiMongodb className="text-lg text-[#47A248] group-hover:scale-110 transition-transform" />,
    href: 'https://mongodb.com'
  },
  {
    name: 'Flask',
    category: 'Microservices',
    icon: <SiFlask className="text-lg text-white group-hover:scale-110 transition-transform" />,
    href: 'https://flask.palletsprojects.com'
  },
  {
    name: 'Docker',
    category: 'Containerization',
    icon: <SiDocker className="text-lg text-[#2496ED] group-hover:scale-110 transition-transform" />,
    href: 'https://docker.com'
  },
  {
    name: 'Tailwind CSS',
    category: 'Design Systems',
    icon: <SiTailwindcss className="text-lg text-[#06B6D4] group-hover:scale-110 transition-transform" />,
    href: 'https://tailwindcss.com'
  },
  {
    name: 'Pydantic',
    category: 'Schema Contracts',
    icon: <SiPydantic className="text-lg text-[#E92063] group-hover:scale-110 transition-transform" />,
    href: 'https://pydantic.dev'
  },
  {
    name: 'Git',
    category: 'Version Control',
    icon: <SiGit className="text-lg text-[#F05032] group-hover:scale-110 transition-transform" />,
    href: 'https://git-scm.com'
  }
];

const TechStackLoop = () => {
  const logos = TECH_ITEMS.map((item) => ({
    node: (
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-lime/50 hover:bg-white/[0.07] transition-all duration-300 group shadow-lg backdrop-blur-md cursor-pointer select-none">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-black/50 border border-white/5 group-hover:border-lime/30 transition-colors">
          {item.icon}
        </div>
        <div className="flex flex-col text-left">
          <span className="font-syne font-bold text-xs text-gray-200 group-hover:text-lime transition-colors tracking-wide">
            {item.name}
          </span>
          <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">
            {item.category}
          </span>
        </div>
      </div>
    ),
    title: item.name,
    href: item.href
  }));

  return (
    <section className="relative w-full py-8 bg-[#08080a] border-y border-white/5 overflow-hidden">
      {/* Header telemetry pill */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse"></span>
          <span className="font-mono text-[11px] text-gray-400 uppercase tracking-[0.25em]">
            SYSTEM ARSENAL // VERIFIED TECHNOLOGIES
          </span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[10px] text-gray-600 uppercase tracking-widest">
          PAUSE ON HOVER • DIRECT DOCS
        </span>
      </div>

      {/* Infinite LogoLoop strip */}
      <div className="w-full relative">
        <LogoLoop
          logos={logos}
          speed={65}
          direction="left"
          gap={20}
          logoHeight={44}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#08080a"
          ariaLabel="Core engineering stack and technologies"
        />
      </div>
    </section>
  );
};

export default TechStackLoop;
