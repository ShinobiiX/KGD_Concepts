import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import GridCanvas from './GridCanvas';
import { ArrowDown, ArrowUpRight, Terminal, Shield, Cpu, Layout } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const { brand } = siteConfig;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <GridCanvas />

      {/* Atmospheric Lighting Orbs */}
      <div className="hero-glow-lime" aria-hidden="true"></div>
      <div className="hero-glow-secondary" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Small Introductory Badge */}
          <div className="hero-intro-badge">
            <span className="badge-pulse-dot"></span>
            <span className="badge-label">{brand.introBadge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-headline">
            Building Digital <span className="headline-highlight">Experiences.</span>
            <br />
            Automating What <span className="headline-accent">Matters.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="hero-statement">
            {brand.statement}
          </p>

          {/* Call to Actions */}
          <div className="hero-actions">
            <button
              onClick={() => scrollTo('projects')}
              className="btn btn-primary hero-btn-primary"
            >
              <span>Explore Our Work</span>
              <ArrowDown size={16} />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="btn btn-secondary hero-btn-secondary"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Refined Geometric Feature Ribbon */}
          <div className="hero-metrics-strip">
            <div className="metric-item">
              <span className="metric-icon-box"><Terminal size={16} /></span>
              <div className="metric-info">
                <span className="metric-label">Software Dev</span>
                <span className="metric-sub">Modern Web Architectures</span>
              </div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-icon-box"><Cpu size={16} /></span>
              <div className="metric-info">
                <span className="metric-label">AI & Automation</span>
                <span className="metric-sub">Workflow Engineering</span>
              </div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-icon-box"><Shield size={16} /></span>
              <div className="metric-info">
                <span className="metric-label">Cybersecurity</span>
                <span className="metric-sub">Security Simulations</span>
              </div>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-icon-box"><Layout size={16} /></span>
              <div className="metric-info">
                <span className="metric-label">Digital Design</span>
                <span className="metric-sub">Creative Interfaces</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small Scroll Indicator */}
        <div className="scroll-indicator" onClick={() => scrollTo('about')}>
          <span className="scroll-text">SCROLL TO DISCOVER</span>
          <div className="scroll-track">
            <div className="scroll-thumb"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
