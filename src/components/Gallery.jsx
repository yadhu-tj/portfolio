import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaLayerGroup, FaArrowRight, FaBrain, FaGamepad, FaShoppingBag, FaGraduationCap } from 'react-icons/fa';
import ArchitectureModal from './ArchitectureModal';

const projectsData = [
  {
    id: "01",
    title: "NestQuest — AI Real Estate Matchmaker",
    category: "AI, RAG & Dual-Database System",
    tagline: "Natural language rental discovery with grounded AI recommendation explanations.",
    description: "Replaces rigid dropdown filters with semantic understanding. Users describe ideal living arrangements in natural language (e.g., 'a quiet apartment near Infopark for night-shift work'), and a custom RAG pipeline retrieves and justifies matching properties using real broker notes.",
    tech: ["Python", "Flask", "PostgreSQL", "ChromaDB", "LangChain", "Gemini API", "React"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
    githubLink: "https://github.com/yadhu-tj",
    liveLink: "#",
    metrics: [
      { label: "Vector Search", value: "ChromaDB" },
      { label: "Relational DB", value: "PostgreSQL" },
      { label: "LLM Pipeline", value: "LangChain" },
      { label: "Grounding", value: "100% Real Data" }
    ],
    architecture: {
      flowDescription: "The recommendation engine follows a strict dual-database sequence: (1) Query authenticated via JWT; (2) PostgreSQL pre-filters vacant properties only; (3) ChromaDB performs semantic similarity search constrained to available IDs; (4) LangChain synthesizes query + property context; (5) Gemini generates natural-language justification for each match.",
      pipelineSteps: [
        { name: "Auth & Ingress", detail: "Flask REST API with JWT role validation" },
        { name: "Availability Lock", detail: "PostgreSQL filters currently active vacancies" },
        { name: "Vector Search", detail: "ChromaDB embeddings similarity retrieval" },
        { name: "Grounded Synthesis", detail: "LangChain + Gemini creates match explanations" }
      ],
      databaseDesign: "Six relational entities in PostgreSQL (Administrator, Broker, User, Property, PropertyImage, Booking) enforcing foreign key cascading, paired with ChromaDB vector collections indexing unstructured broker notes.",
      entities: "Properties (1:N) Bookings (1:N) Images (N:M) VectorEmbeddings",
      concurrencyStrategy: "Transactional state of record in PostgreSQL ensures zero hallucinated availability while ChromaDB handles fast approximate nearest neighbor (ANN) retrieval.",
      challenges: [
        "Eliminated AI hallucinations by strictly constraining vector search to verified available PostgreSQL listing IDs before prompt generation.",
        "Built role-based access control (RBAC) separating Admin oversight, Broker inventory portals, and public User visit-booking workflows.",
        "Engineered response latency optimizations through batch embedding queries and caching top property descriptors."
      ]
    }
  },
  {
    id: "02",
    title: "Motion Link — Full-Body Gesture 3D Game",
    category: "Computer Vision & Three.js Speedrun",
    tagline: "Real-time webcam pose-driven speedrun game — zero physical controllers.",
    description: "Players physically walk in place and lean their body to race through a procedurally generated neon 3D maze, answering quiz questions at blast doors using arm gestures. Auto-calibrates to individual player noise and streams live telemetry over WebSockets. Drew acquisition interest from an AI/robotics company at an exhibition.",
    tech: ["MediaPipe Pose", "OpenCV", "Three.js r160", "Python", "Socket.IO", "Gemini 2.5"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    githubLink: "https://github.com/yadhu-tj",
    liveLink: "#",
    metrics: [
      { label: "Frame Telemetry", value: "Real-Time" },
      { label: "Input Hardware", value: "Webcam Only" },
      { label: "3D Engine", value: "Three.js" },
      { label: "Exhibition", value: "Acquisition Interest" }
    ],
    architecture: {
      flowDescription: "Webcam frames are analyzed by MediaPipe Pose Landmarker Lite in Python. The math engine calculates shoulder bounce deltas (walking), nose lean limits (turning), and wrist-to-shoulder angles (arm raises). Telemetry is pushed via eventlet Socket.IO at 60Hz to drive Three.js character physics and procedural chunk streaming.",
      pipelineSteps: [
        { name: "Pose Estimation", detail: "OpenCV + MediaPipe 33-point body tracking" },
        { name: "Motion Math", detail: "Momentum gain, bounce threshold & lean angles" },
        { name: "WebSocket Bus", detail: "Socket.IO broadcasts coordinate stream" },
        { name: "WebGL Scene", detail: "Three.js procedural neon corridors & state machine" }
      ],
      databaseDesign: "In-memory state machine (RUNNING, AT_JUNCTION, AT_DOOR, VICTORY) with leaderboard JSON persistence and dynamic Gemini-generated trivia questions.",
      entities: "PlayerState (1:1) TelemetryPacket (1:N) LevelChunks (1:N) Leaderboard",
      concurrencyStrategy: "Zero-latency eventlet green threads handling frame capture and broadcast asynchronously without blocking the Three.js render loop.",
      challenges: [
        "Engineered an auto-calibration algorithm in Python that samples 2 seconds of ambient body noise to establish custom lean and step thresholds.",
        "Built procedural corridor and blast door chunk streaming in Three.js with automatic geometry disposal to keep memory footprint under 90MB.",
        "Designed arm-raise gesture debounce frames so players don't trigger accidental quiz selections."
      ]
    }
  },
  {
    id: "03",
    title: "S-TORE — AI-Powered E-Commerce Platform",
    category: "Full-Stack E-Commerce & Semantic Search",
    tagline: "Conversational shopping assistant with Pinecone vector discovery & tool calling.",
    description: "Modern e-commerce platform featuring an intelligent conversational AI shopping assistant with a 1M token context window, vector-based product discovery with Pinecone, sentence-transformer embeddings, persistent cart management, and real-time inventory synchronization.",
    tech: ["Flask", "Next.js", "Pinecone", "LangChain", "Gemini Flash 2.0", "Sentence Transformers"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2668&auto=format&fit=crop",
    githubLink: "https://github.com/yadhu-tj",
    liveLink: "#",
    metrics: [
      { label: "Vector Search", value: "Pinecone" },
      { label: "Context Window", value: "1M Tokens" },
      { label: "Architecture", value: "Tool Calling" },
      { label: "Frontend", value: "Next.js" }
    ],
    architecture: {
      flowDescription: "Users explore products through either traditional UI browsing or conversational chat. The AI assistant uses LangChain tool calling to orchestrate live product queries against Pinecone vector indexes, modify user cart states, and check stock levels via a JWT-authenticated Flask REST API.",
      pipelineSteps: [
        { name: "Embedding", detail: "Sentence Transformers generates product vectors" },
        { name: "Vector Index", detail: "Pinecone evaluates multi-feature similarity" },
        { name: "Tool Calling", detail: "Gemini executes cart & stock API functions" },
        { name: "Next.js UI", detail: "Real-time chat drawer & persistent cart sync" }
      ],
      databaseDesign: "Product catalogs with vector embeddings, user session management, and persistent cart storage with relational order records.",
      entities: "Users (1:N) Orders (1:N) CartItems (N:M) PineconeVectorEmbeddings",
      concurrencyStrategy: "Stateless JWT authorization across Flask micro-endpoints with real-time stock locking during checkout.",
      challenges: [
        "Enabled shoppers to find items by ambiguous descriptions or use cases ('comfortable shoes for rainy hikes') rather than exact brand names.",
        "Implemented tool orchestration ensuring the conversational agent can programmatically add items to cart and check availability without human handoff.",
        "Optimized vector search recall using sentence-transformer semantic embeddings."
      ]
    }
  },
  {
    id: "04",
    title: "Automated-MCA — Department Portal & Auto-Greeter",
    category: "FastAPI, MongoDB & AI Automation",
    tagline: "Production academic portal with automated certificates, greetings & member management.",
    description: "Enterprise portal built for the UCC MCA Department automating event announcements, achievement walls, and AI-generated celebration messages via Google Gemini. Features role-based administration, CSV batch import/export, photo upload pipelines, and a full Pytest validation suite.",
    tech: ["FastAPI", "MongoDB", "Beanie ODM", "React 19", "TypeScript", "Pydantic", "Gemini API"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
    githubLink: "https://github.com/yadhu-tj/Automated-MCA.git",
    liveLink: "#",
    metrics: [
      { label: "Backend", value: "FastAPI / Async" },
      { label: "Database", value: "MongoDB + Beanie" },
      { label: "Test Suite", value: "Pytest" },
      { label: "Frontend", value: "React 19 + TS" }
    ],
    architecture: {
      flowDescription: "FastAPI handles asynchronous request routing with Uvicorn. Data integrity is enforced using Pydantic schemas and Beanie asynchronous ODM over MongoDB. An approval workflow buffers submitted student achievements before public display, while Gemini synthesizes personalized greetings based on event types.",
      pipelineSteps: [
        { name: "Request Ingress", detail: "FastAPI router with token-based admin auth" },
        { name: "Validation", detail: "Pydantic models with email & photo validators" },
        { name: "ODM Storage", detail: "Beanie document mapping over MongoDB Atlas" },
        { name: "AI Moderation", detail: "Gemini 2.5 generates context-tailored greetings" }
      ],
      databaseDesign: "Document-oriented MongoDB collections: Members (with photo binaries/paths), Events (upcoming/past), Achievements (Pending/Approved), and Templates.",
      entities: "Members (1:N) Events (1:N) Achievements (with certificates) (1:N) Greetings",
      concurrencyStrategy: "Asynchronous non-blocking I/O using Python asyncio and Beanie ODM for high concurrent API throughput.",
      challenges: [
        "Architected a two-stage approval workflow (Pending → Approved/Rejected) preventing unverified public achievement postings.",
        "Built a robust CSV batch parser handling bulk member imports with validation and error rollbacks.",
        "Wrote an automated Pytest test suite covering authentication, file uploads, and CRUD API operations."
      ]
    }
  }
];

// Additional verified projects
const additionalProjects = [
  {
    name: "ART-BAY Marketplace",
    desc: "Flask (Python 3.13) + MySQL 8 marketplace with 3D canvas stage, RBAC, Bcrypt, and email OTP.",
    link: "https://Yadhu4u.pythonanywhere.com",
    github: "https://github.com/yadhu-tj/ART-BAY.git",
    tech: "Flask, MySQL, Pytest, Jinja2",
    badge: "Live on PythonAnywhere"
  },
  {
    name: "Thought Tracker",
    desc: "Daily cognitive velocity tracker with rolling odometer digits, particle physics, and GitHub Gist cloud sync.",
    link: "#",
    github: "https://github.com/yadhu-tj",
    tech: "React 19, TypeScript, Tailwind v4, Framer Motion",
    badge: "Offline-First Gist DB"
  },
  {
    name: "Furniture Store",
    desc: "Minimalist component-driven storefront featuring responsive hero showcases and catalogue navigation.",
    link: "https://shopfurnitures.netlify.app/",
    github: "https://github.com/yadhu-tj",
    tech: "React, Vite, CSS Modules",
    badge: "Live on Netlify"
  }
];

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-[#08080a] text-white">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime"></span>
            <span className="font-mono text-xs text-lime uppercase tracking-[0.3em]">
              INDEX // 01 FEATURED PRODUCTION ARCHITECTURES
            </span>
          </div>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight uppercase">
            FLAGSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-white">AI &amp; FULL-STACK</span> SYSTEMS
          </h2>
        </div>

        <p className="font-grotesk text-sm sm:text-base text-gray-400 max-w-md leading-relaxed">
          Production RAG pipelines, real-time computer vision engines, and high-concurrency async APIs. Built from ground up with real-world engineering depth.
        </p>
      </div>

      {/* Stacked Sticky Deck Container */}
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-20 mb-20">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="sticky top-24 rounded-3xl glass-panel-glow p-6 sm:p-10 md:p-12 border border-white/10 transition-all duration-300 shadow-2xl"
            style={{ zIndex: 10 + index }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* LEFT: Project Narrative & Metrics (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Meta Bar */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-syne font-extrabold text-2xl text-lime">
                    {project.id}
                  </span>
                  <span className="h-4 w-[1px] bg-white/20"></span>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-syne text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-lime font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-grotesk text-gray-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
                      <span className="block font-syne text-sm sm:text-base font-bold text-white">
                        {m.value}
                      </span>
                      <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    data-cursor="INSPECT"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime text-black font-syne font-bold text-xs tracking-wider uppercase hover:bg-lime-muted transition-all duration-200 shadow-lg shadow-lime/20 cursor-pointer"
                  >
                    <FaLayerGroup className="text-xs" />
                    <span>Inspect Architecture Blueprint</span>
                  </button>

                  {project.githubLink && project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="CODE"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white font-mono text-xs tracking-wider transition-colors border border-white/10"
                    >
                      <FaGithub /> Repository
                    </a>
                  )}

                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="LIVE"
                      className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-lime transition-colors group"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

              </div>

              {/* RIGHT: Visual Card Preview (5 cols) */}
              <div className="lg:col-span-5">
                <div 
                  onClick={() => setSelectedProject(project)}
                  data-cursor="INSPECT"
                  className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black/60 aspect-[4/3] sm:aspect-[16/11] cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Hover Overlay Hint */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10">
                      RAG / System Spec // Click to Expand
                    </span>
                    <span className="w-8 h-8 rounded-full bg-lime text-black flex items-center justify-center font-bold text-xs transform group-hover:scale-110 transition-transform">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* SECONDARY DELIVERABLES: OTHER VERIFIED BUILDS                            */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-xs text-lime uppercase tracking-widest block mb-1">
              // Extended Deliverables
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl font-bold">Additional Commercial &amp; Open-Source Builds</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {additionalProjects.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between group hover:border-lime/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] text-lime bg-lime/10 px-2.5 py-0.5 rounded-full border border-lime/30">
                    {p.badge}
                  </span>
                  {p.link && p.link !== '#' && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
                <h4 className="font-syne font-bold text-lg text-white mb-2 group-hover:text-lime transition-colors">
                  {p.name}
                </h4>
                <p className="font-grotesk text-xs text-gray-400 leading-relaxed mb-4">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-gray-500">
                <span>{p.tech}</span>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Deep-Dive Modal */}
      <ArchitectureModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Gallery;