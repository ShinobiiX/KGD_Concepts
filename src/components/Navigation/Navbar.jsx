import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'expertise', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Distinctive Typography Wordmark */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="brand-symbol">
            <span className="symbol-inner"></span>
          </span>
          <span className="brand-text">
            <span className="brand-kgd">KGD</span>
            <span className="brand-concepts">CONCEPTS</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {siteConfig.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              const isContact = item.name === 'Contact';

              if (isContact) {
                return (
                  <li key={item.name} className="nav-item">
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="nav-contact-btn"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight size={14} className="nav-arrow" />
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.name} className="nav-item">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            {siteConfig.navigation.map((item) => {
              const isContact = item.name === 'Contact';
              return (
                <li key={item.name} className="mobile-nav-item">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`mobile-nav-link ${isContact ? 'mobile-contact-btn' : ''}`}
                  >
                    {item.name}
                    {isContact && <ArrowUpRight size={16} />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <span className="mobile-drawer-tagline">
              Ideas conceived. Technology crafted. Experiences delivered.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
