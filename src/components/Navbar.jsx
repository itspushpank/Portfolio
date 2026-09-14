import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for glass effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl px-5 py-3 transition-all duration-300 ${
          isScrolled
            ? 'glass-elevated border border-white/10 shadow-lg shadow-black/80 backdrop-blur-xl'
            : 'bg-[#0a0a0a]/50 border border-white/[0.06] backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo — Clean "Pushpank" only, no PK monogram */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-baseline gap-1 group py-1"
          >
            <span className="font-bold text-lg tracking-tight text-white group-hover:text-[#f0db7d] transition-colors">
              Pushpank
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#f0db7d] opacity-90 inline-block transition-transform duration-300 group-hover:scale-125" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/[0.06]">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#f0db7d]/15 text-[#f0db7d] border border-[#f0db7d]/30 font-semibold shadow-sm'
                      : 'text-[#a1a1aa] hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#f0db7d]/10 hover:bg-[#f0db7d]/20 border border-[#f0db7d]/30 text-xs font-semibold text-[#f0db7d] hover:text-white transition-all shadow-sm shadow-[#f0db7d]/10"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-[#a1a1aa] hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 mt-3 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#f0db7d]/15 text-[#f0db7d] font-semibold'
                        : 'text-[#a1a1aa] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-2 mt-2 border-t border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#f0db7d] text-[#000000] text-sm font-semibold transition-colors"
                >
                  <FileText size={16} />
                  <span>View Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
