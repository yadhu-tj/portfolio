import React, { useState } from 'react';
import myPhoto from '../assets/me.jpg.jpg';
import { 
  FaBrain, 
  FaServer, 
  FaDatabase, 
  FaEye, 
  FaCode,
  FaShieldAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCheckCircle
} from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('ai_backend'); // 'ai_backend' or 'vision_creative'

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-12 bg-[#08080a] text-white">
      
      {/* Editorial Section Header */}
      <div className="max-w-6xl mx-auto mb-16 sm:mb-20 border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-lime"></span>
          <span className="font-mono text-xs text-lime uppercase tracking-[0.3em]">
            INDEX // 02 DOSSIER &amp; CREDENTIALS
          </span>
        </div>
        <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight uppercase">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-white">ENGINEER</span> BEHIND THE STACK
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start mb-24">
        
        {/* LEFT: Portrait & Verified Coordinates (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[360px] group">
            
            {/* Outer Offset Wireframe Border */}
            <div className="absolute inset-0 border border-lime/30 rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-500 pointer-events-none" />
            
            {/* Inner Photo Container */}
            <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/15 aspect-[3/4] shadow-2xl">
              <img
                src={myPhoto}
                alt="Yadhunandhan"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Status pill overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                <span className="h-2 w-2 rounded-full bg-lime animate-pulse"></span>
                <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest">
                  ERNAKULAM, KERALA
                </span>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px]">
                <span className="text-white font-bold bg-lime text-black px-2.5 py-1 rounded tracking-wider">
                  AI &amp; FULL STACK
                </span>
                <span className="text-gray-400 bg-black/70 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                  MCA CANDIDATE
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT: Biography & Real Experience Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 block">
            // Professional Profile
          </span>

          <p className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-white">
            "I build AI-integrated full-stack applications end to end — owning each system from schema design and vector embeddings through to the 60fps deployed frontend."
          </p>

          <p className="font-grotesk text-base sm:text-lg text-gray-300 leading-relaxed font-light">
            Currently pursuing my Master of Computer Applications (MCA) at UC College, Aluva. My development philosophy focuses on production readiness: writing type-safe FastAPI/Flask backends, structuring dual-database RAG pipelines, training computer-vision gesture engines, and validating every endpoint with automated Pytest suites.
          </p>

          {/* Real Education & Experience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            
            {/* Education */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-lime font-mono text-xs uppercase tracking-wider">
                <FaGraduationCap />
                <span>Academic Record</span>
              </div>
              <div>
                <span className="font-syne font-bold text-sm block text-white">MCA (Master of Computer Applications)</span>
                <span className="font-mono text-xs text-gray-400 block">UC College, Aluva (2025 – 2027)</span>
              </div>
              <div className="border-t border-white/5 pt-2">
                <span className="font-syne font-bold text-sm block text-white">BCA (Bachelor of Computer Applications)</span>
                <span className="font-mono text-xs text-gray-400 block">NSS College, Rajakumari (2022 – 2025)</span>
              </div>
            </div>

            {/* Experience */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-lime font-mono text-xs uppercase tracking-wider">
                <FaBriefcase />
                <span>Commercial Experience</span>
              </div>
              <div>
                <span className="font-syne font-bold text-sm block text-white">Freelance Web Developer (2023 – 2025)</span>
                <span className="text-xs text-gray-300 mt-1 block leading-relaxed">
                  Delivered commercial platforms including an art e-commerce store for two clients through end-to-end review cycles.
                </span>
              </div>
              <div className="border-t border-white/5 pt-2">
                <span className="font-syne font-bold text-xs block text-white">Departmental Systems Architect</span>
                <span className="text-xs text-gray-400 block">Automated portal &amp; certificate pipelines for UC College.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* THE SHOWSTOPPER: DUAL CAPABILITY SPECTRUM                                 */}
      {/* ========================================================================= */}
      <div id="stack" className="max-w-6xl mx-auto pt-12 border-t border-white/10">
        
        {/* Toggle Header & Segmented Pill */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-lime uppercase tracking-widest block mb-1">
              Interactive System Inspection
            </span>
            <h3 className="font-syne text-2xl sm:text-4xl font-bold tracking-tight">
              DUAL CAPABILITY SPECTRUM
            </h3>
          </div>

          {/* Mode Switcher Button */}
          <div className="flex items-center p-1.5 rounded-full bg-[#121217] border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('ai_backend')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'ai_backend'
                  ? 'bg-lime text-black font-bold shadow-lg shadow-lime/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaBrain className="text-xs" />
              <span>AI, RAG &amp; Deep Backend</span>
            </button>

            <button
              onClick={() => setActiveTab('vision_creative')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === 'vision_creative'
                  ? 'bg-lime text-black font-bold shadow-lg shadow-lime/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaEye className="text-xs" />
              <span>Computer Vision, 3D &amp; UI</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'ai_backend' ? (
          /* TAB 1: AI, RAG & DEEP BACKEND */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
            
            {/* Left: Real Code Snippet (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#0b0b0f] border border-white/10 p-6 flex flex-col justify-between font-mono">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs text-gray-400 ml-2 font-mono">rag_retrieval_pipeline.py</span>
                </div>
                <span className="text-[10px] text-lime uppercase bg-lime/10 px-2.5 py-0.5 rounded border border-lime/30">
                  LangChain // ChromaDB // Gemini
                </span>
              </div>

              {/* Code Snippet: Real RAG Pipeline Logic */}
              <div className="overflow-x-auto text-xs text-gray-300 space-y-1.5 leading-relaxed py-2">
                <p><span className="text-purple-400">from</span> langchain.chains <span className="text-purple-400">import</span> create_retrieval_chain</p>
                <p><span className="text-purple-400">from</span> chromadb <span className="text-purple-400">import</span> PersistentClient</p>
                <p><span className="text-purple-400">from</span> models <span className="text-purple-400">import</span> Property, db</p>
                <p className="text-gray-500">// Dual-database retrieval: constrain vectors to available SQL IDs</p>
                <p><span className="text-yellow-400">def</span> <span className="text-lime">query_matchmaker</span>(user_prompt: <span className="text-blue-400">str</span>):</p>
                <p className="pl-4">available_ids = db.session.query(Property.id).filter_by(status=<span className="text-emerald-300">"available"</span>).all()</p>
                <p className="pl-4">filter_ids = [r[<span className="text-orange-300">0</span>] <span className="text-purple-400">for</span> r <span className="text-purple-400">in</span> available_ids]</p>
                <p className="pl-4">results = chroma_collection.query(</p>
                <p className="pl-8">query_texts=[user_prompt],</p>
                <p className="pl-8">where=&#123;<span className="text-emerald-300">"property_id"</span>: &#123;<span className="text-emerald-300">"$in"</span>: filter_ids&#125;&#125;,</p>
                <p className="pl-8">n_results=<span className="text-orange-300">3</span></p>
                <p className="pl-4">)</p>
                <p className="pl-4"><span className="text-purple-400">return</span> gemini_llm.generate_grounded_summary(user_prompt, results)</p>
              </div>

              <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between text-[11px] text-gray-500">
                <span>// DUAL-DATABASE HYBRID RETRIEVAL</span>
                <span className="text-lime">ZERO HALLUCINATED VACANCIES</span>
              </div>
            </div>

            {/* Right: Technical Architecture Pillars (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FaDatabase className="text-lime text-base" />
                  <h4 className="font-syne font-bold text-white text-base">RAG &amp; Vector Databases</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-grotesk">
                  Building semantic search pipelines with ChromaDB and Pinecone, pairing sentence-transformer embeddings with LangChain for grounded contextual recommendations.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FaServer className="text-lime text-base" />
                  <h4 className="font-syne font-bold text-white text-base">Asynchronous FastAPI &amp; Flask</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-grotesk">
                  High-performance Python backends with Pydantic validation, Beanie asynchronous ODM over MongoDB, Uvicorn ASGI servers, and Pytest coverage.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FaShieldAlt className="text-lime text-base" />
                  <h4 className="font-syne font-bold text-white text-base">Security &amp; Relational Schemas</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-grotesk">
                  PostgreSQL &amp; MySQL 8 relational schema normalization, connection pooling, Bcrypt password hashing, and stateless JWT token authentication.
                </p>
              </div>
            </div>

          </div>
        ) : (
          /* TAB 2: COMPUTER VISION, 3D & CREATIVE CRAFT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fadeIn">
            
            {/* Left: Computer Vision Telemetry & 3D Math (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#0b0b0f] border border-white/10 p-6 flex flex-col justify-between font-mono">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
                  <span className="text-xs text-gray-400 ml-2 font-mono">gesture_geometry.py</span>
                </div>
                <span className="text-[10px] text-lime uppercase bg-lime/10 px-2.5 py-0.5 rounded border border-lime/30">
                  MediaPipe // OpenCV // Three.js
                </span>
              </div>

              {/* Code Snippet: Real Computer Vision Pose Math */}
              <div className="overflow-x-auto text-xs text-gray-300 space-y-1.5 leading-relaxed py-2">
                <p><span className="text-purple-400">import</span> cv2, mediapipe <span className="text-purple-400">as</span> mp</p>
                <p><span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np</p>
                <p className="text-gray-500">// Real-time arm-raise angle calculation</p>
                <p><span className="text-yellow-400">def</span> <span className="text-lime">evaluate_arm_gesture</span>(wrist, shoulder):</p>
                <p className="pl-4">delta_y = shoulder.y - wrist.y</p>
                <p className="pl-4">delta_x = abs(shoulder.x - wrist.x)</p>
                <p className="pl-4">angle = np.degrees(np.arctan2(delta_y, delta_x))</p>
                <p className="pl-4"><span className="text-purple-400">if</span> angle &gt; ARM_RAISE_THRESHOLD <span className="text-purple-400">and</span> delta_y &gt; <span className="text-orange-300">0.12</span>:</p>
                <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-emerald-300">"QUIZ_OPTION_A"</span> <span className="text-purple-400">if</span> wrist.x &gt; shoulder.x <span className="text-purple-400">else</span> <span className="text-emerald-300">"QUIZ_OPTION_B"</span></p>
                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-purple-400">None</span></p>
              </div>

              <div className="border-t border-white/10 pt-4 mt-4 flex items-center justify-between text-[11px] text-gray-500">
                <span>// ZERO HARDWARE CONTROLLERS REQUIRED</span>
                <span className="text-lime">60FPS WEBCAM TRACKING</span>
              </div>
            </div>

            {/* Right: Vision & 3D Pillars (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FaEye className="text-lime text-base" />
                  <h4 className="font-syne font-bold text-white text-base">Real-Time Computer Vision</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-grotesk">
                  MediaPipe Pose Landmarker Lite and OpenCV integration for live human body tracking, shoulder bounce velocity calculation, and ambient noise auto-calibration.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FaCode className="text-lime text-base" />
                  <h4 className="font-syne font-bold text-white text-base">Three.js 3D Procedural Scenes</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-grotesk">
                  Streaming chunk-based 3D neon maze corridors in Three.js, coordinating dynamic camera damping and WebGL context lifecycle management.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FaCheckCircle className="text-lime text-base" />
                  <h4 className="font-syne font-bold text-white text-base">React 19 &amp; TypeScript</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-grotesk">
                  Strictly typed component architectures, Tailwind CSS design systems, GSAP animation orchestration, and offline-first cloud synchronization.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>

    </section>
  );
};

export default About;