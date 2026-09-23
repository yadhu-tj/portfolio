import React, { useState } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaCopy, 
  FaCheck, 
  FaExternalLinkAlt, 
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const MY_EMAIL = "yadhunandhantj@gmail.com";
  const MY_PHONE = "+91 8086811056";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenMail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${MY_EMAIL}`, '_blank');
  };

  return (
    <section id="contact" className="relative pt-24 pb-16 bg-[#08080a] text-white overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. INFINITE KINETIC MARQUEE BANNER                                        */}
      {/* ========================================================================= */}
      <div className="py-6 border-y border-white/10 overflow-hidden select-none bg-white/[0.01]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white/20">
              <span className="hover:text-lime transition-colors">AI &amp; FULL-STACK DEVELOPER</span>
              <span className="text-lime text-2xl">•</span>
              <span className="text-stroke hover:text-white transition-colors">RAG &amp; COMPUTER VISION</span>
              <span className="text-lime text-2xl">•</span>
              <span className="hover:text-lime transition-colors">FASTAPI &amp; FLASK ARCHITECTURES</span>
              <span className="text-lime text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. TRANSMISSION CENTERPIECE & ACTION CARDS                                */}
      {/* ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse"></span>
              <span className="font-mono text-xs text-lime uppercase tracking-[0.3em]">
                INDEX // 04 INITIATE TRANSMISSION
              </span>
            </div>
            <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
              HAVE A VISION? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-white to-gray-400">
                LET'S BUILD IT.
              </span>
            </h2>
          </div>

          <p className="font-grotesk text-sm sm:text-base text-gray-400 max-w-sm leading-relaxed">
            Open for AI &amp; Full-Stack developer opportunities, RAG pipeline engineering, and high-impact commercial collaborations.
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-16">
          
          {/* Main Direct Interaction Card (7 cols) */}
          <div className="md:col-span-7 rounded-3xl glass-panel-glow p-8 sm:p-10 flex flex-col justify-between border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-lime block mb-2">
                // Direct Electronic Mail &amp; Tel
              </span>
              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white mb-2 break-all">
                {MY_EMAIL}
              </h3>
              <p className="font-mono text-sm text-gray-300 mb-4 flex items-center gap-2">
                <FaPhone className="text-lime text-xs" /> {MY_PHONE}
              </p>
              <p className="font-grotesk text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
                Available for engineering interviews, RAG architecture discussions, or technical project consultations. Guaranteed response within 24 hours.
              </p>
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-8 mt-6 border-t border-white/10">
              <button
                onClick={handleCopyEmail}
                data-cursor="COPY"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-lime text-black font-syne font-bold text-xs tracking-wider uppercase hover:bg-lime-muted transition-all duration-200 shadow-lg shadow-lime/20 cursor-pointer"
              >
                {copied ? <FaCheck className="text-xs" /> : <FaCopy className="text-xs" />}
                <span>{copied ? "Email Copied!" : "1-Click Copy Email"}</span>
              </button>

              <button
                onClick={handleOpenMail}
                data-cursor="SEND"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/15 text-white font-mono text-xs tracking-wider transition-colors border border-white/10 cursor-pointer"
              >
                <FaPaperPlane className="text-xs" />
                <span>Launch Gmail Client</span>
              </button>

              <a
                href={`tel:${MY_PHONE.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/15 text-white font-mono text-xs tracking-wider transition-colors border border-white/10 cursor-pointer"
              >
                <FaPhone className="text-xs text-lime" />
                <span>Call Directly</span>
              </a>
            </div>

            {/* Instant Toast Feedback */}
            {copied && (
              <div className="absolute top-4 right-4 bg-lime text-black font-mono text-xs px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-lg animate-fadeIn">
                <FaCheck /> Copied to Clipboard!
              </div>
            )}
          </div>

          {/* Social Profiles & Coordinates (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            
            {/* GitHub Card */}
            <a
              href="https://github.com/yadhu-tj"
              target="_blank"
              rel="noreferrer"
              data-cursor="GITHUB"
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-lime/50 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white text-lg group-hover:bg-lime group-hover:text-black transition-colors">
                  <FaGithub />
                </div>
                <div>
                  <span className="font-syne font-bold text-sm block text-white group-hover:text-lime transition-colors">
                    GitHub Repositories
                  </span>
                  <span className="font-mono text-xs text-gray-400">@yadhu-tj // Public Code</span>
                </div>
              </div>
              <FaExternalLinkAlt className="text-xs text-gray-500 group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/yadhunandhan-tj"
              target="_blank"
              rel="noreferrer"
              data-cursor="LINKEDIN"
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-lime/50 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white text-lg group-hover:bg-lime group-hover:text-black transition-colors">
                  <FaLinkedin />
                </div>
                <div>
                  <span className="font-syne font-bold text-sm block text-white group-hover:text-lime transition-colors">
                    LinkedIn Network
                  </span>
                  <span className="font-mono text-xs text-gray-400">/in/yadhunandhantj // Connect</span>
                </div>
              </div>
              <FaExternalLinkAlt className="text-xs text-gray-500 group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Telemetry Status Card */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-gray-500 uppercase block text-[10px] tracking-widest flex items-center gap-1">
                  <FaMapMarkerAlt className="text-lime" /> Base Location
                </span>
                <span className="text-white mt-0.5 block font-medium">Ernakulam, Kerala</span>
              </div>
              <div className="text-right">
                <span className="text-lime uppercase block text-[10px] tracking-widest">Notice Period</span>
                <span className="text-gray-300 mt-0.5 block font-medium">Available Immediately</span>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. EDITORIAL FOOTER                                                       */}
        {/* ========================================================================= */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-500">
          <div>
            <span>© {new Date().getFullYear()} Yadhunandhan — AI &amp; Full-Stack Developer</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-600">// PERFORMANCE-FIRST ARCHITECTURE</span>
            <button
              onClick={() => {
                if (window.lenis) {
                  window.lenis.scrollTo(0, { duration: 1.2 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-gray-400 hover:text-lime transition-colors cursor-pointer"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Contact;