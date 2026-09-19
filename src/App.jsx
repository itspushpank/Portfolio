import React from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import SkillsGarden from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-deep)] text-[var(--text-cream)] selection:bg-[var(--accent-amber)] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <SkillsGarden />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}