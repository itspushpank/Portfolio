import React from 'react';
import { Calendar, MapPin, Award, BookCheck, Sparkles, Building2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#f0db7d] uppercase tracking-widest mb-2">
            <Sparkles size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Journey
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] mt-2 max-w-xl text-center md:text-left">
            Undergraduate foundation in Computer Science & Engineering, core algorithms, and software architecture.
          </p>
        </div>

        {/* Education Timeline / Spotlight Card */}
        <div className="relative">
          {/* Vertical timeline rule on desktop */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#f0db7d]/40 via-white/15 to-transparent" />

          <div className="space-y-8">
            {/* Primary Degree Card */}
            <div className="relative md:pl-20">
              {/* Timeline Node Marker */}
              <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0a0a0a] border-2 border-[#f0db7d] items-center justify-center z-10 shadow-lg shadow-[#f0db7d]/20">
                <span className="w-2 h-2 rounded-full bg-[#f0db7d]" />
              </div>

              <GlassCard elevated className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#f0db7d]/10 border border-[#f0db7d]/25 text-xs font-mono text-[#f0db7d]">
                      Undergraduate Degree
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white pt-1">
                      Bachelor of Technology in Computer Science & Engineering
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#a1a1aa] pt-1">
                      <span className="flex items-center gap-1.5 text-white">
                        <Building2 size={14} className="text-[#f0db7d]" />
                        Katihar Engineering College
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#f0db7d]" />
                        Katihar, Bihar, India
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#f0db7d] self-start">
                    <Calendar size={14} />
                    <span>2025 – 2029 (Session)</span>
                  </div>
                </div>

                {/* Coursework & Focus Areas */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#a1a1aa] flex items-center gap-2">
                    <BookCheck size={14} className="text-[#f0db7d]" />
                    <span>Core Curricular Studies & Focus Areas</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-xs font-semibold text-white block">Data Structures</span>
                      <span className="text-[11px] text-[#a1a1aa]">Trees, Graphs, Sorting</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-xs font-semibold text-white block">Algorithms</span>
                      <span className="text-[11px] text-[#a1a1aa]">Time/Space Complexity</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-xs font-semibold text-white block">OOP & Systems</span>
                      <span className="text-[11px] text-[#a1a1aa]">Java, Python Architecture</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-xs font-semibold text-white block">Web Engineering</span>
                      <span className="text-[11px] text-[#a1a1aa]">Modern DOM & React</span>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="p-4 rounded-xl bg-[#050505]/70 border border-white/[0.06] text-xs text-[#a1a1aa] leading-relaxed flex items-start gap-3">
                  <Award size={18} className="text-[#f0db7d] flex-shrink-0 mt-0.5" />
                  <p>
                    Actively applying classroom computer science theory into open-source repositories, developer tools, and responsive web platforms. Committed to combining rigorous foundational CS knowledge with high-polish frontend engineering.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
