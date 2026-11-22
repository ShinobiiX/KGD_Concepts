import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Bot, Network, ShieldCheck, TerminalSquare, Compass, Radio } from 'lucide-react';
import './CurrentExplorations.css';

const explorationIcons = [Bot, Network, ShieldCheck, TerminalSquare, Compass, Radio];

export default function CurrentExplorations() {
  const { currentExplorations } = siteConfig;

  return (
    <section className="section explorations-section">
      <div className="container">
        {/* Section Header */}
        <div className="explorations-header">
          <div className="section-badge">R&D Roadmap</div>
          <h2 className="section-title">What's Next?</h2>
          <p className="section-subtitle">
            Continuous technical experimentation across frontier domains. We invest actively in
            researching autonomous agents, security guardrails, and reactive architectural patterns.
          </p>
        </div>

        {/* Visual Explorations Mosaic / Radar Layout */}
        <div className="explorations-mosaic">
          {currentExplorations.map((item, index) => {
            const Icon = explorationIcons[index % explorationIcons.length];
            return (
              <div key={item.title} className="mosaic-item">
                <div className="mosaic-top">
                  <div className="mosaic-icon-wrap">
                    <Icon size={18} />
                  </div>
                  <div className="mosaic-status">
                    <span className="live-ping"></span>
                    <span className="status-label">ACTIVE LAB</span>
                  </div>
                </div>

                <h3 className="mosaic-title">{item.title}</h3>
                <p className="mosaic-desc">{item.desc}</p>

                <div className="mosaic-bar">
                  <div className="mosaic-progress" style={{ width: `${65 + (index * 6)}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
