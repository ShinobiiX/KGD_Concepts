import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { ArrowUp, Github } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand, navigation, contact } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main Footer Row */}
        <div className="footer-main-row">
          {/* Brand & Tagline */}
          <div className="footer-brand-col">
            <div className="footer-wordmark">
              <span className="footer-symbol"></span>
              <span className="footer-brand-name">KGD CONCEPTS</span>
            </div>
            <p className="footer-tagline">
              {brand.tagline}
            </p>
            <p className="footer-positioning">
              {brand.positioning}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-col">
            <span className="footer-col-title">NAVIGATION</span>
            <ul className="footer-nav-list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="footer-nav-link"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social-col">
            <span className="footer-col-title">CONNECT</span>
            <ul className="footer-social-list">
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Github size={15} />
                  <span>GitHub: {contact.githubUser}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="footer-social-link"
                >
                  <span>{contact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="footer-top-col">
            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top of page">
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © {currentYear} KGD Concepts. All rights reserved.
          </span>
          <span className="footer-meta-note">
            Digital Technology & Creative Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
