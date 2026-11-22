import React, { useState, useEffect } from 'react';
import Navbar from './components/Navigation/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import AdditionalProjects from './components/AdditionalProjects/AdditionalProjects';
import CurrentExplorations from './components/CurrentExplorations/CurrentExplorations';
import Approach from './components/Approach/Approach';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = (totalScroll / windowHeight) * 100;
        setScrollProgress(scroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Scroll Depth Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Expertise />
        <FeaturedProjects />
        <AdditionalProjects />
        <CurrentExplorations />
        <Approach />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
