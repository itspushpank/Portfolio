import React, { useState } from 'react';
import { Sparkles, Code2, TerminalSquare, Wrench, Layers } from 'lucide-react';
import { skillCategories } from '../data/skills';
import SkillBadge from '../components/SkillBadge';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8b9cff] uppercase tracking-widest mb-2">
            <Sparkles size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f5f7fb]">
            Skills & Toolchain
          </h2>
          <p className="text-sm sm:text-base text-[#9ba4b5] mt-2 max-w-xl text-center md:text-left">
            A comprehensive matrix of programming languages, modern frontend libraries, and engineering tools I use daily.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'all'
                ? 'bg-[#8b9cff] text-[#08090d] font-bold shadow-md shadow-[#8b9cff]/20'
                : 'glass hover:bg-white/10 text-[#9ba4b5] hover:text-[#f5f7fb]'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === category.id
                  ? 'bg-[#8b9cff] text-[#08090d] font-bold shadow-md shadow-[#8b9cff]/20'
                  : 'glass hover:bg-white/10 text-[#9ba4b5] hover:text-[#f5f7fb]'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Categories Display */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8b9cff]" />
                  <h3 className="text-lg font-bold text-[#f5f7fb] tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#9ba4b5]">
                  {category.skills.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
