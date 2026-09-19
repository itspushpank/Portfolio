import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useReducedMotion } from '../../utils/helpers';

const defaultSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ sections = defaultSections }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { prefersReducedMotion } = useReducedMotion();

  const navItems = sections.map((s) =>
    typeof s === 'string'
      ? { id: s, label: s.charAt(0).toUpperCase() + s.slice(1) }
      : s
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 sm:py-4 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--bg-deep)]/85 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2.5 group py-1"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-cream)] group-hover:text-[var(--accent-amber)] transition-colors">
            Pushpank
          </span>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.7)] animate-pulse" />
        </a>

        {/* Desktop Nav - Borderless Pill Container */}
        <nav className="hidden md:flex items-center">
          <div className="bg-[var(--bg-card)]/80 rounded-full px-3 py-1.5 backdrop-blur-2xl flex items-center gap-1 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-cyan-500/20 text-[var(--accent-amber)] font-semibold shadow-[0_0_15px_rgba(249,115,22,0.25)]'
                      : 'text-[var(--text-moss)] hover:text-[var(--text-cream)] hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[var(--text-cream)] hover:text-[var(--accent-amber)] backdrop-blur-xl transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer - Borderless */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-[var(--bg-card)]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-fade-in-up">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-cyan-500/20 text-[var(--accent-amber)] font-semibold'
                      : 'text-[var(--text-cream)] hover:bg-white/[0.06] hover:text-[var(--accent-amber)]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-cyan-400" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}