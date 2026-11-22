import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { BookOpen, Workflow, Clock, CheckCircle } from 'lucide-react';
import './AdditionalProjects.css';

export default function AdditionalProjects() {
  const { additionalProjects } = siteConfig;

  return (
    <section className="section additional-projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="additional-header">
          <div className="section-badge">Extended Work</div>
          <h2 className="section-title">Additional Initiatives & Labs</h2>
          <p className="section-subtitle">
            Exploring targeted problem domains through dedicated builds, educational platforms,
            and automated pipeline prototypes.
          </p>
        </div>

        {/* 2-column or Asymmetric Cards */}
        <div className="additional-grid">
          {additionalProjects.map((project) => {
            const isDev = project.isDeveloping;
            const Icon = isDev ? Workflow : BookOpen;

            return (
              <div key={project.id} className={`additional-card ${isDev ? 'card-in-dev' : ''}`}>
                <div className="additional-card-header">
                  <div className="additional-icon-box">
                    <Icon size={22} />
                  </div>
                  <div className="additional-status-slot">
                    {isDev ? (
                      <span className="status-badge status-dev">
                        <Clock size={12} />
                        <span>IN DEVELOPMENT</span>
                      </span>
                    ) : (
                      <span className="status-badge status-complete">
                        <CheckCircle size={12} />
                        <span>IMPLEMENTED BUILD</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="additional-meta-category">{project.category}</div>

                <h3 className="additional-title">{project.name}</h3>

                <p className="additional-desc">{project.description}</p>

                <div className="additional-highlights">
                  <span className="highlights-label">CORE CAPABILITIES</span>
                  <ul className="highlights-list">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="highlight-item">
                        <span className="highlight-bullet"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
