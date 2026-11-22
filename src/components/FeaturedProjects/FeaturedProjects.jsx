import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import ProjectCard3D from './ProjectCard3D';
import { Layers } from 'lucide-react';
import './FeaturedProjects.css';

export default function FeaturedProjects() {
  const { featuredProjects } = siteConfig;

  return (
    <section id="projects" className="section featured-projects-section">
      <div className="glow-orb glow-orb-lime projects-glow-orb" aria-hidden="true"></div>

      <div className="container">
        {/* Section Header */}
        <div className="projects-header-block">
          <div className="header-meta">
            <div className="section-badge">Portfolio Showcase</div>
            <h2 className="section-title">Selected Projects.</h2>
            <p className="section-subtitle">
              Exploring ideas, building solutions, and bringing digital experiences to life.
            </p>
          </div>

          <div className="contribution-notice">
            <Layers size={14} className="notice-icon" />
            <span>
              Showcasing live production applications and platforms contributed to across AI, Web3, and cybersecurity.
            </span>
          </div>
        </div>

        {/* 3D Interactive Project Showcase Grid */}
        <div className="projects-3d-grid">
          {featuredProjects.map((project) => (
            <ProjectCard3D key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
