import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import GlassCard from '../components/GlassCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Engineering Opportunity',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'pushpank.contact@gmail.com';

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Pushpank,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${contactEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#f0db7d] uppercase tracking-widest mb-2">
            <Sparkles size={14} />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-[#a1a1aa] mt-2 max-w-xl text-center md:text-left">
            I am currently looking for frontend development internships and collaborative engineering projects. Send a message or reach out on GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Links & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard elevated className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Direct Coordinates
                </h3>
                <p className="text-xs text-[#a1a1aa] mt-1">
                  Always open to technical discussions and internship interviews.
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Email Card with Copy button */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#f0db7d]/10 text-[#f0db7d] flex items-center justify-center flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-[#a1a1aa]">Email</div>
                      <div className="text-xs sm:text-sm font-mono text-white truncate">
                        {contactEmail}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#a1a1aa] hover:text-white transition-colors flex-shrink-0"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check size={16} className="text-[#f0db7d]" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* GitHub Card */}
                <a
                  href="https://github.com/itspushpank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#f0db7d]/40 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Github size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#a1a1aa]">GitHub Profile</div>
                    <div className="text-xs sm:text-sm font-mono text-white group-hover:text-[#f0db7d] transition-colors">
                      github.com/itspushpank
                    </div>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://linkedin.com/in/itspushpank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#f0db7d]/40 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#a1a1aa]">LinkedIn Profile</div>
                    <div className="text-xs sm:text-sm font-mono text-white group-hover:text-[#f0db7d] transition-colors">
                      linkedin.com/in/itspushpank
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#f0db7d]/10 text-[#f0db7d] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#a1a1aa]">Location</div>
                    <div className="text-xs sm:text-sm font-mono text-white">
                      Bihar, India (Katihar / Purnia Region)
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard elevated className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#a1a1aa] mt-1">
                  Fill out the form below. On submit, this will formulate your message and open your mail application directly.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#f0db7d]/10 border border-[#f0db7d]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#f0db7d]/20 text-[#f0db7d] flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Prepared & Ready!
                  </h4>
                  <p className="text-xs text-[#a1a1aa] max-w-sm mx-auto">
                    Your email composer should have launched. If it didn't open automatically, you can also write directly to <span className="text-[#f0db7d] font-mono">{contactEmail}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Internship / Engineering Opportunity', message: '' });
                    }}
                    className="mt-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-[#a1a1aa]">
                      Your Name <span className="text-[#e07a5f]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#050505] border ${
                        errors.name ? 'border-[#e07a5f]' : 'border-white/10 focus:border-[#f0db7d]'
                      } text-sm text-white placeholder:text-white/20 outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-[#e07a5f] flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-[#a1a1aa]">
                      Email Address <span className="text-[#e07a5f]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#050505] border ${
                        errors.email ? 'border-[#e07a5f]' : 'border-white/10 focus:border-[#f0db7d]'
                      } text-sm text-white placeholder:text-white/20 outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-[#e07a5f] flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono text-[#a1a1aa]">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship / Engineering Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#f0db7d] text-sm text-white placeholder:text-white/20 outline-none transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-[#a1a1aa]">
                      Message <span className="text-[#e07a5f]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the opportunity, project, or role you have in mind..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#050505] border ${
                        errors.message ? 'border-[#e07a5f]' : 'border-white/10 focus:border-[#f0db7d]'
                      } text-sm text-white placeholder:text-white/20 outline-none transition-colors resize-y`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-[#e07a5f] flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f0db7d] hover:bg-[#f7e7a0] text-[#000000] font-semibold text-sm transition-all shadow-lg shadow-[#f0db7d]/15 hover:shadow-[#f0db7d]/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Composing...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
