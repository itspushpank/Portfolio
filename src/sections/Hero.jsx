import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../utils/helpers';
import { personalInfo } from '../data/config';

export default function Hero() {
  const { prefersReducedMotion } = useReducedMotion();
  const heroRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
    >

      {/* Atmospheric rich texture overlays: Blue, Red, Yellow, Orange blending with moonlit garden */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: `
            radial-gradient(ellipse 75% 55% at 80% 20%, rgba(56, 189, 248, 0.14) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 75% 35%, rgba(249, 115, 22, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 45% at 20% 65%, rgba(234, 179, 8, 0.13) 0%, transparent 55%),
            radial-gradient(ellipse 55% 40% at 50% 85%, rgba(239, 68, 68, 0.11) 0%, transparent 60%),
            radial-gradient(ellipse 50% 35% at 25% 25%, rgba(34, 211, 238, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse 95% 75% at 50% 40%, transparent 35%, rgba(12, 27, 16, 0.72) 85%, var(--bg-deep) 100%)
          `,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-16 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Central Landing Page Name - Marigold Luxury Editorial Typography */}
          <div className="relative mb-6">
            {/* Ambient behind-the-text color bloom */}
            <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-sky-500/20 blur-3xl pointer-events-none -z-10 rounded-full" />
            
            <h1
              className="font-marigold font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] tracking-wider select-none leading-none landing-name drop-shadow-sm"
              style={{
                fontFamily: "'Marigold', 'Marry Gold', serif",
                fontWeight: 700,
                WebkitTextStroke: '1.2px rgba(254, 240, 138, 0.45)',
                paintOrder: 'stroke fill',
                background: 'linear-gradient(135deg, #fffbeb 0%, #fde047 22%, #fb923c 48%, #ef4444 72%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
                paddingBottom: '0.08em',
              }}
            >
              PUSHPANK
            </h1>
          </div>

          {/* Role / Subtitle */}
          <motion.p
            className="font-body text-xl sm:text-2xl md:text-3xl font-light text-[var(--text-sage)] mb-3 tracking-wide"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            {personalInfo.title}
          </motion.p>

          {/* Bio tagline - Small, refined description */}
          <motion.p
            className="font-body text-xs sm:text-sm text-[var(--text-dim)] max-w-lg mx-auto mb-6 leading-relaxed tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          type="button"
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-dim)] hover:text-[var(--accent-azure)] transition-colors cursor-pointer group"
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] tracking-widest uppercase font-medium group-hover:text-[var(--text-cream)] transition-colors">
            Scroll To Wander
          </span>
          <svg
            className="w-4 h-4 text-[var(--accent-azure)] group-hover:translate-y-0.5 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}