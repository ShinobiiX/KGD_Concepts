import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Code, Workflow, ShieldAlert, Layers, CheckCircle2 } from 'lucide-react';
import './Expertise.css';

const expertiseIcons = {
  '01': Code,
  '02': Workflow,
  '03': ShieldAlert,
  '04': Layers
};

export default function Expertise() {
  const { expertise } = siteConfig;
  const [activeTab, setActiveTab] = useState('01');

  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        {/* Section Header */}
        <div className="expertise-header">
          <div className="section-badge">Capabilities</div>
          <h2 className="section-title">Core Disciplines & Stack</h2>
          <p className="section-subtitle">
            Exploring the synthesis of modern frontend engineering, automated agent workflows,
            defensive cyber simulations, and human-centered design.
          </p>
        </div>

        {/* Desktop Interactive Layout / Asymmetric 4-area Grid */}
        <div className="expertise-grid">
          {expertise.map((area) => {
            const Icon = expertiseIcons[area.id] || Code;
            const isSelected = activeTab === area.id;

            return (
              <div
                key={area.id}
                className={`expertise-card ${isSelected ? 'is-selected' : ''}`}
                onMouseEnter={() => setActiveTab(area.id)}
                onClick={() => setActiveTab(area.id)}
              >
                <div className="expertise-card-inner">
                  {/* Card Top */}
                  <div className="card-top-row">
                    <span className="expertise-num">{area.id}</span>
                    <div className="expertise-icon">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="expertise-title">{area.title}</h3>
                  <p className="expertise-desc">"{area.description}"</p>
                  <p className="expertise-details">{area.details}</p>

                  {/* Tech / Area Tag Chips */}
                  <div className="expertise-tags-wrapper">
                    <span className="tags-kicker">FOCUS & TECHNOLOGIES</span>
                    <div className="expertise-tags">
                      {area.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          <CheckCircle2 size={12} className="tech-badge-icon" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
