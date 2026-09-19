import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../utils/helpers';
import { personalInfo } from '../data/config';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  const { prefersReducedMotion } = useReducedMotion();

  return (
    <section
      id="about"
      className="py-24 sm:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: 'var(--bg-forest)' }}
    >
      {/* Botanical ambient gradient background with warm red/yellow/orange & blue textures */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-orange-900/15 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] rounded-full bg-amber-800/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-red-950/15 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-sky-950/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Personal Information */}
          <motion.div
            className="lg:col-span-7 flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_8px_#f97316]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-amber)]">
                Roots &amp; Cultivation
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-cream)] mb-6 tracking-tight">
              About Me
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[var(--text-sage)] leading-relaxed mb-8">
              {personalInfo.about.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Quick Stats / Education Cards - Borderless */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-xl flex items-start gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 text-[var(--accent-amber)] shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[var(--text-dim)] font-medium">
                    Education
                  </h4>
                  <p className="text-sm font-semibold text-[var(--text-cream)] mt-0.5">
                    {personalInfo.education.degree}
                  </p>
                  <p className="text-xs text-[var(--text-moss)] mt-0.5">
                    {personalInfo.education.college} · {personalInfo.education.semester}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-xl flex items-start gap-3.5 shadow-[0_8px_25px_rgba(0,0,0,0.35)]">
                <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-sky-500/20 text-[var(--accent-azure)] shrink-0 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[var(--text-dim)] font-medium">
                    Location &amp; Affiliation
                  </h4>
                  <p className="text-sm font-semibold text-[var(--text-cream)] mt-0.5">
                    {personalInfo.location}
                  </p>
                  <p className="text-xs text-[var(--text-moss)] mt-0.5">
                    Affiliated with {personalInfo.education.university}
                  </p>
                </div>
              </div>
            </div>

            {/* Interests Pills - Borderless */}
            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-[var(--text-dim)] mb-3 flex items-center gap-1.5">
                <Sparkles size={14} className="text-[var(--accent-amber)]" />
                Interests &amp; Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-[var(--text-sage)] hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-orange-500/20 hover:text-[var(--accent-amber)] transition-all duration-300 shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Botanical Picture Frame - Borderless */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Outer Decorative Botanical Frame - Borderless with Sunset & Azure Backlight */}
            <div className="relative p-4 rounded-3xl bg-[var(--bg-card)]/80 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] group">
              {/* Warm sunset & sky backlight behind frame */}
              <div className="absolute -top-4 -left-4 w-28 h-28 rounded-full bg-gradient-to-br from-sky-500/20 to-orange-500/20 blur-xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-br from-amber-400/25 to-yellow-500/25 blur-xl pointer-events-none" />

              {/* Decorative Corner Leaves (SVG with warm sunset gradient) */}
              <svg
                className="absolute top-3 right-3 w-8 h-8 text-[var(--accent-amber)]/50 pointer-events-none"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
              </svg>

              {/* Inner Photo Container - Borderless */}
              <div className="relative rounded-2xl overflow-hidden bg-[var(--bg-deep)] aspect-[4/5] shadow-inner group/photo">
                <img
                  src="/profile.jpg"
                  alt="Pushpank Kumar"
                  className="w-full h-full object-cover object-center group-hover/photo:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Soft atmospheric botanical gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating mini status badge in bottom corner */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-xl text-[11px] text-[var(--text-cream)] shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse" />
                    <span className="font-medium">Pushpank Kumar</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xl text-[var(--accent-amber)] font-mono text-[10px]">
                    BEU Patna
                  </span>
                </div>

                {/* Glass reflection sheen sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Botanical caption below photo */}
              <div className="mt-3 px-3 py-1.5 flex items-center justify-between text-xs text-[var(--text-dim)]">
                <span className="italic font-display">Botanical Developer Portrait</span>
                <span className="font-mono text-[10px] text-[var(--accent-amber)]">
                  Bihar, India
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}