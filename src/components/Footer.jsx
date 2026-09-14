import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#000000] relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Info — Clean "Pushpank" only */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-baseline gap-1">
              <span className="font-bold text-lg tracking-tight text-white">
                Pushpank
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#f0db7d] opacity-90 inline-block" />
            </div>
            <p className="text-xs text-[#a1a1aa] mt-1.5 font-mono">
              B.Tech CSE • Katihar Engineering College (2025–2029)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/itspushpank"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-[#a1a1aa] hover:text-white hover:border-[#f0db7d]/40 transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/itspushpank"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-[#a1a1aa] hover:text-white hover:border-[#f0db7d]/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-[#a1a1aa] hover:text-[#f0db7d] hover:border-[#f0db7d]/40 transition-all flex items-center gap-1 text-xs font-mono"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#a1a1aa]/60">
          <div>
            © {new Date().getFullYear()} Pushpank. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with pure CSS 3D & React</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[#f0db7d]">Zero WebGL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
