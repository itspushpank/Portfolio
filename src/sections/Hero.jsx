import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import DeveloperTerminal from '../components/DeveloperTerminal';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Spatial Grid & Radial Glow in Black & Dim Warm Yellow */}
      <div className="absolute inset-0 background-grid pointer-events-none opacity-80" />
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      {/* Floating subtle ambient orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#f0db7d]/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-subtle border border-[#f0db7d]/30 text-xs font-mono text-[#f0db7d]">
              <span className="w-2 h-2 rounded-full bg-[#f0db7d] pulse-dot" />
              <span className="tracking-wide">AVAILABLE FOR INTERNSHIPS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building digital experiences with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f7ecd0] to-[#f0db7d]">
                code and creativity.
              </span>
            </h1>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              I'm <span className="text-white font-semibold">Pushpank</span>, a Computer Science & Engineering student at <span className="text-white font-medium">Katihar Engineering College</span> and aspiring frontend developer who enjoys turning ideas into clean, interactive web experiences.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f0db7d] hover:bg-[#f7e7a0] text-[#000000] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#f0db7d]/15 hover:shadow-[#f0db7d]/25 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-elevated hover:bg-white/10 text-white font-medium text-sm border border-white/10 hover:border-[#f0db7d]/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText size={16} className="text-[#f0db7d]" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social & Verification Badges */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs font-mono text-[#a1a1aa]">
              <span className="text-white/40">Connect:</span>
              <a
                href="https://github.com/itspushpank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github size={15} />
                <span>itspushpank</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://linkedin.com/in/itspushpank"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#f0db7d] transition-colors"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Signature DeveloperTerminal in CSS 3D Scene */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <DeveloperTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
