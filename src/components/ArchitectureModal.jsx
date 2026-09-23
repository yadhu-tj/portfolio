import React, { useEffect } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaServer, FaDatabase, FaLayerGroup, FaCheckCircle } from 'react-icons/fa';

const ArchitectureModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
      data-lenis-prevent
      onWheel={(e) => e.stopPropagation()}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl glass-panel-glow p-6 sm:p-10 text-white font-grotesk border border-white/10 shadow-2xl overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-lime bg-lime/10 px-2.5 py-1 rounded-full border border-lime/30 tracking-widest uppercase">
                Architecture Blueprint // {project.id}
              </span>
              <span className="font-mono text-xs text-gray-400 uppercase">{project.category}</span>
            </div>
            <h2 className="font-syne text-2xl sm:text-4xl font-bold tracking-tight">{project.title}</h2>
            <p className="text-gray-400 text-sm mt-1 max-w-2xl">{project.description}</p>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close architecture modal"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {project.metrics?.map((metric, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
              <span className="block font-syne text-xl sm:text-2xl font-bold text-lime">{metric.value}</span>
              <span className="block font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Technical Architecture Sections */}
        <div className="space-y-6">
          {/* Section 1: System Flow & Request Pipeline */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <FaServer className="text-lime text-sm" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-white">System Flow &amp; Request Pipeline</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">{project.architecture?.flowDescription}</p>

            {/* Visual Flow Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
              {project.architecture?.pipelineSteps?.map((step, idx) => (
                <div key={idx} className="relative p-3 rounded-lg bg-black/40 border border-white/10 flex flex-col justify-center">
                  <span className="text-lime font-semibold text-[11px] mb-1">0{idx + 1}. {step.name}</span>
                  <span className="text-[10px] text-gray-400 leading-tight">{step.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Database Schema & Storage Design */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <FaDatabase className="text-lime text-sm" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-white">Data Modeling &amp; Persistence</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">{project.architecture?.databaseDesign}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-white/10">
                <span className="text-lime font-mono block mb-1 font-medium">Core Entities &amp; Relations</span>
                <p className="text-gray-400 leading-relaxed font-mono text-[11px]">{project.architecture?.entities}</p>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/10">
                <span className="text-lime font-mono block mb-1 font-medium">Indexing &amp; Concurrency Strategy</span>
                <p className="text-gray-400 leading-relaxed font-mono text-[11px]">{project.architecture?.concurrencyStrategy}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Engineering Challenges Solved */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <FaLayerGroup className="text-lime text-sm" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-white">Engineering Challenges &amp; Solutions</h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {project.architecture?.challenges?.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-lime text-xs mt-1 shrink-0" />
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-gray-300">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.githubLink && project.githubLink !== '#' && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white font-mono text-xs tracking-wider transition-colors border border-white/10"
              >
                <FaGithub /> Repository
              </a>
            )}
            {project.liveLink && project.liveLink !== '#' && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-lime text-black font-semibold text-xs tracking-wider uppercase hover:bg-lime-muted transition-colors shadow-lg shadow-lime/20"
              >
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureModal;
