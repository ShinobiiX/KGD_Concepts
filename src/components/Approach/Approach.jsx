import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Compass, Lightbulb, Focus } from 'lucide-react';
import './Approach.css';

const approachIcons = {
  '01': Focus,
  '02': Compass,
  '03': Lightbulb
};

export default function Approach() {
  const { approach } = siteConfig;

  return (
    <section className="section approach-section">
      <div className="container">
        {/* Section Header */}
        <div className="approach-header">
          <div className="section-badge">Methodology</div>
          <h2 className="section-title">Built with intention.</h2>
          <p className="section-subtitle">
            Our guiding philosophy anchors every architecture, workflow, and interface we design.
          </p>
        </div>

        {/* 3 Principles Horizontal Cards */}
        <div className="approach-cards-grid">
          {approach.map((item) => {
            const Icon = approachIcons[item.num] || Focus;
            return (
              <div key={item.num} className="approach-card">
                <div className="card-ambient-glow" aria-hidden="true"></div>

                <div className="approach-num-strip">
                  <span className="approach-num">{item.num}</span>
                  <div className="approach-icon-wrap">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="approach-card-title">{item.title}</h3>

                <blockquote className="approach-quote">
                  "{item.quote}"
                </blockquote>

                <p className="approach-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
