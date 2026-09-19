import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, personalInfo } from '../data/config';
import { useReducedMotion } from '../utils/helpers';
import { GithubIcon } from '../components/ui/Icons';
import {
  ExternalLink,
  Maximize2,
  X,
  Code2,
  Sparkles,
  ArrowUpRight,
  FolderGit2,
} from 'lucide-react';

export default function Projects() {
  const { prefersReducedMotion } = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: 'var(--bg-forest)' }}
    >
      {/* Background ambient lighting: Red, Yellow, Orange & Azure */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(234,179,8,0.1),transparent_70%)]" />
        <div className="absolute top-2/3 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(239,68,68,0.08),transparent_70%)]" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_8px_#f97316]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-amber)]">
              Greenhouse Bento
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-cream)] mb-4 tracking-tight">
            Things I&apos;ve Built
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-sage)] leading-relaxed">
            A curated greenhouse of digital artifacts, web applications, and interactive 3D experiments.
          </p>
        </div>

        {/* Bento Greenhouse Grid - Borderless */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {projectsData.map((project) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                className={`rounded-3xl bg-[var(--bg-card)]/80 backdrop-blur-2xl transition-all duration-500 overflow-hidden group flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] ${
                  isFeatured
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[var(--bg-card)]/90 to-[var(--bg-deep)]/90'
                    : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                whileHover={prefersReducedMotion ? {} : { y: -4 }}
              >
                <div className="p-6 sm:p-8">
                  {/* Top Bar / Status */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-amber)] font-medium">
                        {isFeatured ? 'Featured Specimen' : `Project #0${project.id}`}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-[var(--text-moss)] hover:text-[var(--accent-amber)] transition-colors"
                      aria-label={`Expand details for ${project.name}`}
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>

                  {/* Featured Project Browser Window Preview - Borderless */}
                  {isFeatured ? (
                    <div className="mb-6 rounded-2xl overflow-hidden bg-[var(--bg-deep)] shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                      {/* Browser Header */}
                      <div className="px-4 py-2.5 bg-white/[0.03] flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.5)]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/90 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                        </div>
                        <div className="px-4 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-[var(--text-dim)] truncate max-w-xs">
                          pushpank-portfolio.dev
                        </div>
                        <div className="w-8" />
                      </div>

                      {/* Mock Preview Content */}
                      <div className="p-6 sm:p-8 bg-gradient-to-b from-sky-950/20 via-orange-950/15 via-[var(--bg-moss)] to-[var(--bg-deep)] flex flex-col items-center justify-center text-center min-h-[160px] relative overflow-hidden">
                        <div className="absolute -top-10 right-0 w-52 h-52 rounded-full bg-amber-500/15 blur-2xl pointer-events-none" />
                        <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full bg-cyan-500/15 blur-2xl pointer-events-none" />
                        <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-cream)] mb-2">
                          Moonlit Botanical Garden
                        </h4>
                        <p className="text-xs sm:text-sm text-[var(--text-sage)] max-w-md">
                          Three.js 3D botanical canvas with realistic moonlight, celestial blue accents, warm autumn textures, and smooth physics.
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* Standard Card Botanical Visual Banner - Borderless */
                    <div className="relative mb-6 h-36 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-950/30 via-[var(--bg-moss)] to-[var(--bg-deep)] flex items-center justify-center p-4 shadow-inner">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center text-[var(--accent-amber)] group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <Code2 size={24} />
                      </div>
                      <span className="absolute bottom-3 right-3 text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)]">
                        Artifact 0{project.id}
                      </span>
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="font-display text-2xl font-bold text-[var(--text-cream)] mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[var(--text-sage)] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills - Borderless */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-[var(--text-sage)] shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 sm:p-8 pt-0 mt-auto border-t border-white/[0.04] flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.1] text-[var(--text-cream)] hover:text-[var(--accent-amber)] transition-all duration-300 shadow-sm"
                    >
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500/25 to-orange-500/25 text-[var(--accent-amber)] hover:from-amber-500/35 hover:to-orange-500/35 transition-all duration-300 shadow-md"
                    >
                      <ExternalLink size={15} />
                      <span>Demo</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[var(--text-moss)] hover:text-[var(--text-cream)] transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Connection Banner - Borderless with Warm Sunset Glow */}
        <motion.div
          className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)]/90 backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center text-[var(--accent-amber)] shrink-0 shadow-md">
              <FolderGit2 size={28} />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-cream)]">
                More experiments live on GitHub
              </h3>
              <p className="text-sm text-[var(--text-sage)] mt-1">
                Explore open-source repositories, algorithms, web prototypes, and daily commits.
              </p>
            </div>
          </div>

          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500/25 via-orange-500/25 to-red-500/20 hover:from-amber-500/35 hover:to-orange-500/35 text-[var(--text-cream)] font-semibold text-sm transition-all duration-300 shrink-0 shadow-[0_4px_25px_rgba(249,115,22,0.25)]"
          >
            <GithubIcon size={18} />
            <span>Visit GitHub</span>
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Click-to-Expand Project Modal - Borderless */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Card - Borderless with Sunset Accent */}
            <motion.div
              className="relative w-full max-w-2xl rounded-3xl bg-[var(--bg-card)]/95 backdrop-blur-2xl p-6 sm:p-8 z-10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-[var(--text-cream)] transition-colors"
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-[var(--accent-amber)] mb-4 shadow-sm">
                <Sparkles size={12} />
                <span>Botanical Greenhouse Specimen #{selectedProject.id}</span>
              </div>

              <h3 className="font-display text-3xl font-bold text-[var(--text-cream)] mb-3">
                {selectedProject.name}
              </h3>

              <p className="text-base text-[var(--text-sage)] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Technologies - Borderless */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-dim)] mb-3">
                  Technologies Cultivated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/[0.05] text-[var(--accent-amber)] shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/[0.06]">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[var(--text-cream)] hover:text-[var(--accent-amber)] font-medium text-sm transition-all shadow-sm"
                  >
                    <GithubIcon size={18} />
                    <span>View Repository on GitHub</span>
                  </a>
                )}

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500/25 to-orange-500/25 text-[var(--accent-amber)] font-medium text-sm transition-all shadow-md"
                  >
                    <ExternalLink size={18} />
                    <span>Launch Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}