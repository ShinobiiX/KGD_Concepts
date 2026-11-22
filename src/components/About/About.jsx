import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Code2, Cpu, ShieldCheck, Palette, ArrowRight } from 'lucide-react';
import './About.css';

const pillarIcons = {
  '01': Code2,
  '02': Cpu,
  '03': ShieldCheck,
  '04': Palette
};

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="section about-section">
      <div className="glow-orb glow-orb-lime about-glow" aria-hidden="true"></div>

      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <div className="section-badge">Brand Narrative</div>
          <h2 className="section-title">{about.heading}</h2>
          <p className="about-lead">{about.lead}</p>
        </div>

        {/* Brand Focus Layout */}
        <div className="about-grid">
          <div className="about-narrative-card">
            <div className="narrative-badge">
              <span>THE PHILOSOPHY</span>
            </div>
            <div className="narrative-body">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="narrative-paragraph">
                  {p}
                </p>
              ))}
            </div>

            <div className="narrative-footer">
              <span className="tagline-kicker">KGD CONCEPTS IDENTITY</span>
              <p className="tagline-quote">
                "Ideas conceived. Technology crafted. Experiences delivered."
              </p>
            </div>
          </div>

          {/* 4 Highlight Areas / Pillars */}
          <div className="about-pillars">
            {about.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.id] || Code2;
              return (
                <div key={pillar.id} className="pillar-card">
                  <div className="pillar-top">
                    <span className="pillar-num">{pillar.id}</span>
                    <div className="pillar-icon-box">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
