import React from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectCard({ project, isFeatured = false }) {
  // Visual mockup representation tailored for each project
  const renderMockup = () => {
    switch (project.id) {
      case 'horizon-news':
        return (
          <div className="w-full h-full bg-[#08090d] p-4 flex flex-col justify-between border-b border-white/[0.08] relative overflow-hidden group/mock">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8b9cff]" />
                <span className="font-mono text-xs font-semibold text-[#f5f7fb]">HORIZON // TECH NEWS</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-[#6ee7b7]">LIVE FEED</span>
            </div>
            {/* News Cards Grid */}
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2.5 rounded-md bg-[#121722]/80 border border-white/[0.06] space-y-1">
                <div className="h-2 w-16 bg-[#8b9cff]/40 rounded" />
                <div className="h-3 w-full bg-white/20 rounded" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
              </div>
              <div className="p-2.5 rounded-md bg-[#121722]/80 border border-white/[0.06] space-y-1">
                <div className="h-2 w-12 bg-[#6ee7b7]/40 rounded" />
                <div className="h-3 w-full bg-white/20 rounded" />
                <div className="h-2 w-2/3 bg-white/10 rounded" />
              </div>
            </div>
            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#9ba4b5]/70 pt-1">
              <span>Articles indexed: 140+</span>
              <span className="text-[#8b9cff]">Reader Mode: Active</span>
            </div>
          </div>
        );

      case 'katihar-central-library':
        return (
          <div className="w-full h-full bg-[#08090d] p-4 flex flex-col justify-between border-b border-white/[0.08] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6ee7b7]" />
                <span className="font-mono text-xs font-semibold text-[#f5f7fb]">KEC CATALOG PORTAL</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#6ee7b7]/10 text-[#6ee7b7]">LIBRARY</span>
            </div>
            <div className="space-y-1.5 my-2">
              <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.04]">
                <div className="h-2.5 w-32 bg-white/25 rounded" />
                <span className="text-[9px] font-mono text-[#6ee7b7]">Available (8)</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.04]">
                <div className="h-2.5 w-28 bg-white/20 rounded" />
                <span className="text-[9px] font-mono text-[#e3b341]">Reserved (2)</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-[#9ba4b5]/60">
              Department: Computer Science & Eng.
            </div>
          </div>
        );

      case 'student-management-system':
        return (
          <div className="w-full h-full bg-[#08090d] p-4 flex flex-col justify-between border-b border-white/[0.08] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e3b341]" />
                <span className="font-mono text-xs font-semibold text-[#f5f7fb]">STUDENT MATRIX [CLI]</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#e3b341]/10 text-[#e3b341]">v2.4</span>
            </div>
            <div className="font-mono text-[10px] text-[#9ba4b5] space-y-1 my-2 bg-[#050608] p-2 rounded border border-white/[0.05]">
              <div className="text-[#6ee7b7]">{"{ record_id: 'KEC2501', gpa: 8.9 }"}</div>
              <div className="text-white/60">Attendance: 94.2% [PASS]</div>
              <div className="text-[#8b9cff]">Enrolled: Data Structures, OOP</div>
            </div>
            <div className="text-[10px] font-mono text-[#9ba4b5]/60">
              Storage: JSON / Object Graph
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-[#08090d] p-4 flex flex-col justify-between border-b border-white/[0.08] relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8b9cff]" />
                <span className="font-mono text-xs font-semibold text-[#f5f7fb]">SPATIAL WORKSPACE</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#8b9cff]/10 text-[#8b9cff]">3D ENGINE</span>
            </div>
            <div className="flex items-center justify-center my-3">
              <div className="w-16 h-12 rounded border border-[#8b9cff]/40 bg-[#8b9cff]/10 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
                <Layers size={20} className="text-[#8b9cff]" />
              </div>
            </div>
            <div className="text-[10px] font-mono text-[#9ba4b5]/60 text-center">
              CSS Perspective: 1200px • Zero WebGL
            </div>
          </div>
        );
    }
  };

  if (isFeatured) {
    return (
      <div className="project-card-scene w-full">
        <div className="project-card rounded-2xl glass-elevated border border-white/10 hover:border-[#8b9cff]/40 overflow-hidden spatial-shadow transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Visual Column */}
          <div className="lg:col-span-6 h-56 lg:h-auto min-h-[240px] relative bg-[#0a0d14]">
            {renderMockup()}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-[#8b9cff]/20 text-[#8b9cff] border border-[#8b9cff]/30 backdrop-blur-md flex items-center gap-1.5">
                <Sparkles size={12} />
                Featured Project
              </span>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#8b9cff]">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f5f7fb] tracking-tight group-hover:text-[#8b9cff] transition-colors">
                {project.title}
              </h3>

              <p className="text-sm font-medium text-[#9ba4b5] mt-1">
                {project.tagline}
              </p>

              <p className="text-sm text-[#9ba4b5]/90 mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="mt-4 space-y-1.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#9ba4b5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-[#9ba4b5] border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.08]">
                {project.demo && project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8b9cff] hover:bg-[#9fadff] text-[#08090d] text-sm font-semibold transition-all shadow-md shadow-[#8b9cff]/20"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-[#f5f7fb] text-sm font-medium border border-white/[0.08] transition-all"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Project Card
  return (
    <div className="project-card-scene h-full">
      <div className="project-card h-full flex flex-col justify-between rounded-xl glass-elevated border border-white/10 hover:border-[#8b9cff]/30 overflow-hidden card-shadow">
        <div>
          {/* Top Mockup Area */}
          <div className="h-44 relative bg-[#0a0d14]">
            {renderMockup()}
            {project.badge && (
              <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[#9ba4b5] border border-white/10">
                {project.badge}
              </span>
            )}
          </div>

          {/* Card Body */}
          <div className="p-5 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#8b9cff]">
              {project.category}
            </div>

            <h3 className="text-lg font-bold text-[#f5f7fb] tracking-tight">
              {project.title}
            </h3>

            <p className="text-xs text-[#9ba4b5] leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-[#9ba4b5] border border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer Links */}
        <div className="p-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9ba4b5] hover:text-[#f5f7fb] transition-colors"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>

          {project.demo && project.demo !== '#' ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#8b9cff] hover:text-[#9fadff] transition-colors"
            >
              <span>Explore</span>
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-white/30">
              Active Project
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
