import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../utils/helpers';
import { personalInfo } from '../data/config';
import { Sprout, Compass, Code2, Flower2 } from 'lucide-react';

const milestoneMeta = [
  {
    icon: Sprout,
    glow: 'rgba(239, 68, 68, 0.4)',
    badgeBg: 'bg-red-500/20 text-red-400',
    color: '#ef4444',
  },
  {
    icon: Compass,
    glow: 'rgba(249, 115, 22, 0.4)',
    badgeBg: 'bg-orange-500/20 text-orange-400',
    color: '#f97316',
  },
  {
    icon: Code2,
    glow: 'rgba(234, 179, 8, 0.4)',
    badgeBg: 'bg-amber-500/20 text-amber-300',
    color: '#eab308',
  },
  {
    icon: Flower2,
    glow: 'rgba(56, 189, 248, 0.4)',
    badgeBg: 'bg-sky-500/20 text-sky-300',
    color: '#38bdf8',
  },
];

export default function Journey() {
  const { prefersReducedMotion } = useReducedMotion();
  const milestones = personalInfo.journey;

  return (
    <section
      id="journey"
      className="py-24 sm:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: 'var(--bg-moss)' }}
    >
      {/* Background warm and celestial blue botanical atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-orange-950/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-sky-950/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-amber-950/15 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_8px_#f97316]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-amber)]">
              Chronicles of Growth
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-cream)] mb-4 tracking-tight">
            My Journey
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-sage)] leading-relaxed">
            A botanical timeline of growth and learning — illuminated by the warm hues of dawn and celestial moonlight.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Glowing Botanical Vine - Warm Red, Orange & Yellow to Celestial Azure Gradient */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-red-500/40 via-orange-500/60 via-amber-500/50 to-sky-400/60">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_#ef4444]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8]" />
          </div>

          {/* Milestones */}
          <div className="space-y-12 sm:space-y-16">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const meta = milestoneMeta[index % milestoneMeta.length];
              const IconComponent = meta.icon;

              return (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  } flex-row`}
                >
                  {/* Central Blooming Flower Node - Borderless */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-[var(--bg-card)] flex items-center justify-center shadow-lg"
                      style={{
                        boxShadow: `0 0 25px ${meta.glow}`,
                      }}
                      whileHover={prefersReducedMotion ? {} : { scale: 1.15, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <IconComponent size={20} style={{ color: meta.color }} />
                    </motion.div>
                  </div>

                  {/* Content Card (Half-width on desktop, offset on mobile) - Borderless */}
                  <motion.div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pl-12' : 'md:pr-12'
                    } w-full`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="p-6 sm:p-7 rounded-3xl bg-[var(--bg-card)]/80 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.45)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 group">
                      {/* Milestone Header */}
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span
                          className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold ${meta.badgeBg} shadow-sm`}
                        >
                          {milestone.year}
                        </span>
                        <span className="text-[11px] font-mono text-[var(--text-dim)] uppercase tracking-wider">
                          Phase {index + 1}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-cream)] mb-2 group-hover:text-[var(--accent-amber)] transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Milestone Description */}
                      <p className="text-sm sm:text-base text-[var(--text-sage)] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}