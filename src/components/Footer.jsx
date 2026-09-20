import React from 'react';
import { personalInfo } from '../data/config';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './ui/Icons';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative py-16 sm:py-20 border-t border-white/[0.04] overflow-hidden"
      style={{ background: 'rgba(12, 27, 16, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
    >
      {/* Botanical ambient gradient with warm sunset orange and golden yellow undertones */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(249,115,22,0.08)_0%,_rgba(42,107,42,0.1)_40%,_transparent_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-[var(--text-cream)]">
                PUSHPANK
              </span>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_8px_#f97316]" />
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-dim)]">
              A developer portfolio hidden inside a moonlit digital botanical garden.
            </p>
          </div>

          {/* Center Note - Borderless */}
          <div className="flex items-center gap-2 text-xs text-[var(--text-moss)] px-5 py-2.5 rounded-full bg-white/[0.04] backdrop-blur-xl shadow-sm">
            <Sparkles size={14} className="text-[var(--accent-amber)]" />
            <span>Built with curiosity, code &amp; a little moonlight.</span>
          </div>

          {/* Social Links - Borderless */}
          <div className="flex items-center gap-3">
            {[
              { label: 'GitHub', href: personalInfo.social.github, icon: GithubIcon },
              { label: 'Instagram', href: personalInfo.social.instagram, icon: InstagramIcon },
              { label: 'LinkedIn', href: personalInfo.social.linkedin, icon: LinkedinIcon },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.04] hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-orange-500/20 text-[var(--text-moss)] hover:text-[var(--accent-amber)] transition-all duration-300 shadow-sm"
                  aria-label={item.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="mt-12 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-dim)]">
          <p>© {new Date().getFullYear()} Pushpank Kumar. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[var(--text-dim)]">
            Designed with botanical glassmorphism, Three.js &amp; twilight textures
          </p>
        </div>
      </div>
    </footer>
  );
}