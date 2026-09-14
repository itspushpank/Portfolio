import React from 'react';
import { BookOpen, Compass, Sparkles, Terminal } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#f0db7d] uppercase tracking-widest mb-2">
            <Sparkles size={14} />
            <span>Developer Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Pushpank
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] mt-2 max-w-xl text-center md:text-left">
            Crafting purposeful web interfaces with attention to ergonomics, performance, and spatial interaction.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Bio Card */}
          <GlassCard className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#f0db7d]">
                <Terminal size={14} />
                <span>workspace / bio.md</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Computer Science undergraduate focused on modern frontend architecture.
              </h3>

              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                I am currently pursuing my Bachelor of Technology in Computer Science & Engineering at <span className="text-white font-medium">Katihar Engineering College</span> (Session 2025–2029). My focus centers on architecting clean, maintainable web applications using React, modern JavaScript, and spatial CSS techniques.
              </p>

              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                I enjoy engineering modular UI systems that look refined and feel natural to navigate. Beyond frontend development, I continually practice Data Structures & Algorithms, object-oriented programming in Python and Java, and fundamental software engineering principles.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08]">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="text-[11px] font-mono text-[#a1a1aa]">Institution</div>
                <div className="text-sm font-semibold text-white truncate">KEC Katihar</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                <div className="text-[11px] font-mono text-[#a1a1aa]">Session</div>
                <div className="text-sm font-semibold text-[#f0db7d]">2025–2029</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] col-span-2 sm:col-span-1">
                <div className="text-[11px] font-mono text-[#a1a1aa]">Location</div>
                <div className="text-sm font-semibold text-white truncate">Bihar, India</div>
              </div>
            </div>
          </GlassCard>

          {/* Right Column Mini Panels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Currently Learning Panel */}
            <GlassCard elevated className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#f0db7d]">
                  <BookOpen size={15} />
                  <span className="uppercase tracking-wider">CURRENTLY LEARNING</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f0db7d]/10 text-[#f0db7d] border border-[#f0db7d]/20">
                  Active Sprint
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#f0db7d]" />
                    <span className="text-sm font-semibold text-white">React Ecosystem</span>
                  </div>
                  <span className="text-xs font-mono text-[#a1a1aa]">Hooks & State</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                    <span className="text-sm font-semibold text-white">Modern JavaScript</span>
                  </div>
                  <span className="text-xs font-mono text-[#a1a1aa]">ES6+, Async, DOM</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#f0db7d]" />
                    <span className="text-sm font-semibold text-white">Data Structures & Algo</span>
                  </div>
                  <span className="text-xs font-mono text-[#a1a1aa]">LeetCode & Logic</span>
                </div>
              </div>
            </GlassCard>

            {/* Core Focus & Principles Panel */}
            <GlassCard className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#f0db7d] uppercase tracking-wider border-b border-white/[0.08] pb-3">
                <Compass size={15} />
                <span>CORE DEVELOPMENT INTERESTS</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#a1a1aa]">
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-white">
                  • Spatial UI & CSS 3D
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-white">
                  • Responsive Web Apps
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-white">
                  • Component Systems
                </div>
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04] text-white">
                  • Web Accessibility
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
