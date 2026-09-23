import React, { useEffect } from 'react';
import { FaTimes, FaDownload, FaExternalLinkAlt, FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      data-lenis-prevent
      onWheel={(e) => e.stopPropagation()}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl glass-panel-glow p-6 sm:p-10 text-white font-grotesk border border-white/10 shadow-2xl overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse"></span>
              <span className="font-mono text-xs text-lime tracking-widest uppercase">Official Dossier</span>
            </div>
            <h2 className="font-syne text-2xl sm:text-4xl font-bold tracking-tight">YADHUNANDHAN</h2>
            <p className="text-gray-300 text-sm mt-0.5 font-medium">AI &amp; Full-Stack Developer</p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs text-gray-400 mt-2">
              <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-lime" /> Ernakulam, Kerala</span>
              <span className="flex items-center gap-1.5"><FaPhone className="text-lime" /> +91 8086811056</span>
              <span className="flex items-center gap-1.5"><FaEnvelope className="text-lime" /> yadhunandhantj@gmail.com</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close dossier"
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-sm">
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime mb-2">// Executive Summary</h3>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
              MCA student and developer who builds AI-integrated full-stack applications end to end — RAG pipelines over vector databases, real-time computer vision, and Flask/FastAPI backends — owning each project from schema design through API layer to deployed frontend.
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime mb-3">// Technical Skills Matrix</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-white font-medium block mb-1">Languages:</span>
                <span className="text-gray-400 font-mono">Python, JavaScript, TypeScript, SQL, HTML/CSS</span>
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Backend Frameworks:</span>
                <span className="text-gray-400 font-mono">FastAPI, Flask, REST APIs, JWT, Socket.IO, Pydantic, Uvicorn</span>
              </div>
              <div>
                <span className="text-white font-medium block mb-1">AI, RAG &amp; Computer Vision:</span>
                <span className="text-gray-400 font-mono">Gemini API, LangChain, Pinecone, ChromaDB, MediaPipe, OpenCV</span>
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Frontend &amp; Motion:</span>
                <span className="text-gray-400 font-mono">React 19, Next.js, Three.js, Tailwind CSS, Vite, GSAP</span>
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Databases:</span>
                <span className="text-gray-400 font-mono">PostgreSQL, MySQL 8, MongoDB (Beanie ODM), SQLite</span>
              </div>
              <div>
                <span className="text-white font-medium block mb-1">Tools &amp; Languages:</span>
                <span className="text-gray-400 font-mono">Git, Pytest, Jinja2, bcrypt | Spoken: English, Malayalam</span>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime mb-3">// Academic Credentials</h3>
            <div className="space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-l-2 border-lime pl-3">
                <div>
                  <span className="font-bold text-white text-sm block">Master of Computer Applications (MCA)</span>
                  <span className="text-gray-400">UC College, Aluva</span>
                </div>
                <span className="font-mono text-lime mt-1 sm:mt-0">2025 – 2027</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-l-2 border-white/20 pl-3">
                <div>
                  <span className="font-bold text-white text-sm block">Bachelor of Computer Applications (BCA)</span>
                  <span className="text-gray-400">NSS College, Rajakumari</span>
                </div>
                <span className="font-mono text-gray-400 mt-1 sm:mt-0">2022 – 2025</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-l-2 border-white/20 pl-3">
                <div>
                  <span className="font-medium text-white block">Higher Secondary Education (Class XII)</span>
                  <span className="text-gray-400">HSS Poothotta</span>
                </div>
                <span className="font-mono text-gray-400 mt-1 sm:mt-0">2020 – 2022</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-l-2 border-white/20 pl-3">
                <div>
                  <span className="font-medium text-white block">SSLC (Class X)</span>
                  <span className="text-gray-400">KPMVHSS Poothotta</span>
                </div>
                <span className="font-mono text-gray-400 mt-1 sm:mt-0">2019 – 2020</span>
              </div>
            </div>
          </div>

          {/* Commercial Experience */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lime mb-2">// Commercial &amp; Academic Experience</h3>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between font-bold text-white">
                <span>Web Developer — Freelance</span>
                <span className="font-mono text-lime font-normal">2023 – 2025</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                • Delivered a commercial business website and an art e-commerce store for two local clients, working directly with their teams through iterative review and troubleshooting cycles.
              </p>
              <p className="text-gray-400 leading-relaxed">
                • Collaborate with UC College, Aluva on internal software projects for the department, taking them from requirements through to deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 mt-6">
          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <a 
              href="https://github.com/yadhu-tj" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-lime transition-colors"
            >
              <FaGithub /> github.com/yadhu-tj
            </a>
            <a 
              href="https://linkedin.com/in/yadhunandhantj" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-lime transition-colors"
            >
              <FaLinkedin /> in/yadhunandhantj
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a 
              href="mailto:yadhunandhantj@gmail.com?subject=Regarding%20AI%20%26%20Full-Stack%20Opportunities" 
              className="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-mono tracking-wider transition-colors border border-white/10"
            >
              Contact Directly
            </a>
            <a 
              href="/Yadhu_Nandhan_CV.pdf"
              download="Yadhu_Nandhan_CV.pdf"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-lime text-black font-semibold text-xs tracking-wider uppercase hover:bg-lime-muted transition-colors shadow-lg shadow-lime/20 cursor-pointer"
            >
              <FaDownload className="text-xs" /> Download PDF CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
