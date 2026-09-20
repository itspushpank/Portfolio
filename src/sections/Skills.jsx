import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../utils/helpers';
import { skillsData } from '../data/config';
import { Layout, Terminal, Wrench, Lightbulb, Sparkles } from 'lucide-react';

const categoryMeta = {
  frontend: {
    label: 'Frontend Flora',
    subtitle: 'Crafting responsive, immersive user interfaces',
    icon: Layout,
    color: '#f97316', // Sunset Orange
    bgTint: 'rgba(249, 115, 22, 0.15)',
    glow: 'rgba(249, 115, 22, 0.25)',
  },
  programming: {
    label: 'Programming Languages',
    subtitle: 'Core algorithmic and software languages',
    icon: Terminal,
    color: '#eab308', // Radiant Sun Yellow
    bgTint: 'rgba(234, 179, 8, 0.15)',
    glow: 'rgba(234, 179, 8, 0.25)',
  },
  tools: {
    label: 'Cultivation Tools',
    subtitle: 'Version control, environments & workflow',
    icon: Wrench,
    color: '#ef4444', // Fiery Ember Red
    bgTint: 'rgba(239, 68, 68, 0.15)',
    glow: 'rgba(239, 68, 68, 0.25)',
  },
  concepts: {
    label: 'Computer Science Roots',
    subtitle: 'Core algorithmic systems & system architecture',
    icon: Lightbulb,
    color: '#38bdf8', // Celestial Azure
    bgTint: 'rgba(56, 189, 248, 0.15)',
    glow: 'rgba(56, 189, 248, 0.25)',
  },
};

export default function SkillsGarden() {
  const { prefersReducedMotion } = useReducedMotion();
  const categories = Object.keys(skillsData);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, transparent, rgba(12, 27, 16, 0.40) 15%, rgba(12, 27, 16, 0.40) 85%, transparent)' }}
    >
      {/* Ambient background warm & celestial blue glows: Red, Yellow, Orange & Azure */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-amber-900/15 blur-3xl" />
        <div className="absolute top-2/3 right-1/3 w-[350px] h-[350px] rounded-full bg-red-950/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] rounded-full bg-sky-950/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_8px_#f97316]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-amber)]">
              Botanical Mastery
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-cream)] mb-4 tracking-tight">
            Skills Garden
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-sage)] leading-relaxed">
            Technologies represented as vibrant botanical elements — cultivated through curiosity, code, and daily practice.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((catKey, index) => {
            const meta = categoryMeta[catKey];
            const IconComponent = meta.icon;
            const items = skillsData[catKey] || [];

            return (
              <motion.div
                key={catKey}
                className="p-7 sm:p-8 rounded-3xl bg-[var(--bg-card)]/80 backdrop-blur-2xl transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.45)] group flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { y: -6 }
                }
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: meta.bgTint, color: meta.color }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-[var(--text-cream)] group-hover:text-[var(--accent-amber)] transition-colors">
                          {meta.label}
                        </h3>
                        <p className="text-xs text-[var(--text-dim)] mt-0.5">
                          {meta.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] text-[var(--text-moss)]">
                      {items.length} items
                    </span>
                  </div>

                  {/* Skills Tag Pills - Borderless */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {items.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] text-[var(--text-sage)] hover:text-[var(--text-cream)] transition-all duration-300 group/pill shadow-sm"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 shadow-sm"
                          style={{ backgroundColor: meta.color }}
                        />
                        <span className="text-xs sm:text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botanical Bottom Accent */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-[var(--text-dim)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles size={12} style={{ color: meta.color }} />
                    Thriving in production &amp; projects
                  </span>
                  <span className="font-mono text-[10px]" style={{ color: meta.color }}>
                    #0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}