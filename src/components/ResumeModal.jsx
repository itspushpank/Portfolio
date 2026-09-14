import React from 'react';
import { X, Printer, GraduationCap, Code2, Briefcase, MapPin } from 'lucide-react';
import { Github } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl glass-elevated border border-white/15 spatial-shadow overflow-hidden bg-[#0a0a0a]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111]/90">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f0db7d]" />
            <h2 className="text-sm font-mono font-semibold text-white">
              pushpank_resume.pdf
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#a1a1aa] hover:text-white border border-white/10 transition-colors"
              title="Print or Save PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-white font-sans">
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex items-baseline gap-1.5">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Pushpank
              </h1>
              <span className="text-xl sm:text-2xl font-light text-[#a1a1aa]">Kumar</span>
            </div>
            <p className="text-sm font-mono text-[#f0db7d] mt-1">
              Computer Science & Engineering Student • Aspiring Frontend Developer
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#a1a1aa] mt-3">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#f0db7d]" /> Bihar, India
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap size={13} className="text-white" /> Katihar Engineering College (2025–2029)
              </span>
              <a
                href="https://github.com/itspushpank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#f0db7d] hover:underline"
              >
                <Github size={13} /> github.com/itspushpank
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#f0db7d] mb-3 flex items-center gap-2">
              <GraduationCap size={15} /> Education
            </h3>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-sm sm:text-base text-white">
                  B.Tech in Computer Science & Engineering
                </span>
                <span className="text-xs font-mono text-[#f0db7d]">2025 – 2029</span>
              </div>
              <p className="text-xs text-[#a1a1aa]">
                Katihar Engineering College, Katihar, Bihar
              </p>
              <p className="text-xs text-white/50 pt-1">
                Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Database Systems.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#f0db7d] mb-3 flex items-center gap-2">
              <Code2 size={15} /> Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Frontend Engineering:</span>
                <p className="text-[#a1a1aa] leading-relaxed">
                  React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, CSS 3D Transforms, Responsive Layouts.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Programming & CS:</span>
                <p className="text-[#a1a1aa] leading-relaxed">
                  Python, Java, Data Structures & Algorithms, OOP Architecture, Clean Code Principles.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">Developer Tools:</span>
                <p className="text-[#a1a1aa] leading-relaxed">
                  Git, GitHub, VS Code, Vite, npm, Chrome DevTools, RESTful APIs.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <span className="font-semibold text-white block mb-1">UI & Spatial Design:</span>
                <p className="text-[#a1a1aa] leading-relaxed">
                  Glassmorphism, Spatial Depth, Micro-interactions, Accessibility (a11y), Performance Optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#f0db7d] mb-3 flex items-center gap-2">
              <Briefcase size={15} /> Key Projects
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">Horizon News — Real-Time Reader Portal</h4>
                  <span className="text-[11px] font-mono text-[#f0db7d]">React • Tailwind</span>
                </div>
                <p className="text-xs text-[#a1a1aa] mt-1.5 leading-relaxed">
                  Engineered dynamic topic filtering, responsive card grids, and distraction-free article reader mode with instant state updates.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">Katihar Central Library — Campus System</h4>
                  <span className="text-[11px] font-mono text-white/70">JavaScript • CSS3</span>
                </div>
                <p className="text-xs text-[#a1a1aa] mt-1.5 leading-relaxed">
                  Digital catalog index with real-time textbook availability search, reservation state tracking, and student borrow management.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm text-white">Student Management System</h4>
                  <span className="text-[11px] font-mono text-[#f0db7d]">Python • OOP</span>
                </div>
                <p className="text-xs text-[#a1a1aa] mt-1.5 leading-relaxed">
                  Designed academic record system with automated GPA calculations, attendance analysis, and persistent file-based student logs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#111111]/70 flex items-center justify-between text-xs font-mono text-[#a1a1aa]">
          <span>Katihar Engineering College • 2025–2029</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-sans font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
