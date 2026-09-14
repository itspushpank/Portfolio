import React, { useState } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { Github } from '../components/Icons';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const featuredProject = projects.find((p) => p.featured);
  const remainingProjects = projects.filter((p) => !p.featured);

  const filteredRemaining = filter === 'all'
    ? remainingProjects
    : remainingProjects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#f0db7d] uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              <span>Engineered Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mt-2 max-w-xl">
              Real-world web applications, campus utilities, and software systems built with modern web technologies.
            </p>
          </div>

          <a
            href="https://github.com/itspushpank"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-white/10 text-xs font-mono text-[#a1a1aa] hover:text-white border border-white/10 hover:border-[#f0db7d]/30 transition-all self-start md:self-auto"
          >
            <Github size={15} />
            <span>github.com/itspushpank</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Featured Project Showcase */}
        {featuredProject && (
          <div className="mb-12">
            <ProjectCard project={featuredProject} isFeatured={true} />
          </div>
        )}

        {/* Filter Pills for Other Projects */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
              Other Projects ({remainingProjects.length})
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                filter === 'all'
                  ? 'bg-[#f0db7d]/15 text-[#f0db7d] font-semibold border border-[#f0db7d]/30'
                  : 'text-[#a1a1aa] hover:text-white'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter('campus')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                filter === 'campus'
                  ? 'bg-[#f0db7d]/15 text-[#f0db7d] font-semibold border border-[#f0db7d]/30'
                  : 'text-[#a1a1aa] hover:text-white'
              }`}
            >
              Campus
            </button>
            <button
              type="button"
              onClick={() => setFilter('management')}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                filter === 'management'
                  ? 'bg-[#f0db7d]/15 text-[#f0db7d] font-semibold border border-[#f0db7d]/30'
                  : 'text-[#a1a1aa] hover:text-white'
              }`}
            >
              Systems
            </button>
          </div>
        </div>

        {/* Responsive Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRemaining.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
