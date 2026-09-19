import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../utils/helpers';
import { personalInfo } from '../data/config';
import { GlassButton } from '../components/ui/GlassComponents';
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from '../components/ui/Icons';
import {
  Send,
  Flower2,
  CheckCircle2,
} from 'lucide-react';

export default function Contact() {
  const { prefersReducedMotion } = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 lg:py-40 relative overflow-hidden"
      style={{ background: 'var(--bg-moss)' }}
    >
      {/* Botanical ambient warm night glow: Red, Yellow, Orange & Azure */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(249,115,22,0.12),transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(234,179,8,0.1),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(239,68,68,0.08),transparent_70%)]" />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_8px_#f97316]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-amber)]">
              Digital Night Garden
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-cream)] mb-4 tracking-tight">
            Let&apos;s Grow Something.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-sage)] leading-relaxed">
            Have an idea, project, collaboration, or simply want to connect? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Form Container - Borderless */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)]/85 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.65)] relative overflow-hidden">
          <AnimatePresence mode="wait">
            {submitted ? (
              /* Success Botanical Bloom Animation */
              <motion.div
                key="success"
                className="text-center py-12 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Blooming Flower Graphic with warm sunset orange and golden yellow tones */}
                <motion.div
                  className="relative w-28 h-28 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-red-500/20 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(249,115,22,0.4)]"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { scale: [0.9, 1.05, 1], rotate: [0, 15, 0] }
                  }
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                >
                  <Flower2 size={56} className="text-[var(--accent-amber)] animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 flex items-center justify-center text-[var(--bg-deep)] shadow-md">
                    <CheckCircle2 size={16} />
                  </div>
                </motion.div>

                <h3 className="font-display text-3xl font-bold text-[var(--text-cream)] mb-2">
                  Message Transmitted!
                </h3>
                <p className="text-base text-[var(--text-sage)] max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for reaching out. Your message has taken root, and I will get back to you shortly.
                </p>

                <GlassButton
                  variant="secondary"
                  size="md"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </GlassButton>
              </motion.div>
            ) : (
              /* Contact Form */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input - Borderless */}
                  <div className="relative rounded-2xl bg-white/[0.03] focus-within:bg-white/[0.06] focus-within:ring-2 focus-within:ring-orange-500/30 transition-all duration-300 overflow-hidden shadow-inner">
                    <label
                      htmlFor="contact-name"
                      className="block px-4 pt-3 text-[11px] font-mono uppercase tracking-wider text-[var(--accent-amber)] select-none"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Maya Lin"
                      className="w-full px-4 pb-3.5 pt-0.5 bg-transparent text-[var(--text-cream)] placeholder-[var(--text-dim)]/40 text-base focus:outline-none"
                    />
                  </div>

                  {/* Email Input - Borderless */}
                  <div className="relative rounded-2xl bg-white/[0.03] focus-within:bg-white/[0.06] focus-within:ring-2 focus-within:ring-orange-500/30 transition-all duration-300 overflow-hidden shadow-inner">
                    <label
                      htmlFor="contact-email"
                      className="block px-4 pt-3 text-[11px] font-mono uppercase tracking-wider text-[var(--accent-amber)] select-none"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. maya@example.com"
                      className="w-full px-4 pb-3.5 pt-0.5 bg-transparent text-[var(--text-cream)] placeholder-[var(--text-dim)]/40 text-base focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message Input - Borderless */}
                <div className="relative rounded-2xl bg-white/[0.03] focus-within:bg-white/[0.06] focus-within:ring-2 focus-within:ring-orange-500/30 transition-all duration-300 overflow-hidden shadow-inner">
                  <label
                    htmlFor="contact-message"
                    className="block px-4 pt-3 text-[11px] font-mono uppercase tracking-wider text-[var(--accent-amber)] select-none"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    className="w-full px-4 pb-3.5 pt-0.5 bg-transparent text-[var(--text-cream)] placeholder-[var(--text-dim)]/40 text-base focus:outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[var(--text-dim)] font-mono">
                    ✦ Responses typically within 24-48 hours
                  </span>

                  <GlassButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    disabled={loading}
                    className="w-full sm:w-auto min-w-[200px]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>Send Message</span>
                      <Send size={16} />
                    </span>
                  </GlassButton>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Social Links Bar - Borderless */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {[
            {
              label: 'GitHub',
              href: personalInfo.social.github,
              icon: GithubIcon,
            },
            {
              label: 'Instagram',
              href: personalInfo.social.instagram,
              icon: InstagramIcon,
            },
            {
              label: 'LinkedIn',
              href: personalInfo.social.linkedin,
              icon: LinkedinIcon,
            },
            {
              label: 'Email',
              href: personalInfo.social.email,
              icon: MailIcon,
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-orange-500/20 text-[var(--text-sage)] hover:text-[var(--accent-amber)] transition-all duration-300 shadow-sm"
              >
                <Icon size={16} />
                <span className="text-xs sm:text-sm font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}