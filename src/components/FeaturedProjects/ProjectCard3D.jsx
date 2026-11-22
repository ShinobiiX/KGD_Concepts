import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ExternalLink, ShieldAlert, Cpu, Globe, AlertCircle } from 'lucide-react';

export default function ProjectCard3D({ project }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch or pointer coarse
    const checkTouch = () => {
      return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    };
    setIsTouchDevice(checkTouch());
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isTouchDevice || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalizing between -1 and 1
    const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
    const rotateY = ((x - centerX) / centerX) * 9;

    setTransformStyle(
      `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px) scale3d(1.02, 1.02, 1.02)`
    );

    const posX = (x / rect.width) * 100;
    const posY = (y / rect.height) * 100;
    setMousePos({ x: posX, y: posY });
  }, [isTouchDevice]);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false);
      setTransformStyle('perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)');
      setMousePos({ x: 50, y: 50 });
    }
  };

  // Safe fallback mock if image doesn't load
  const renderFallbackMockup = () => (
    <div className="card-browser-mockup-fallback">
      <div className="mockup-header-area">
        <span className="mockup-tag">{project.category}</span>
        <h4>{project.name}</h4>
      </div>
      <p>{project.tagline}</p>
      <div className="mockup-wires">
        <div className="mockup-line" style={{ width: '80%' }}></div>
        <div className="mockup-line" style={{ width: '60%' }}></div>
        <div className="mockup-line" style={{ width: '90%' }}></div>
      </div>
    </div>
  );

  return (
    <div
      className={`project-card-3d-wrapper ${isHovered ? 'hovered' : ''}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease'
      }}
    >
      {/* Dynamic Cursor Light Spotlight */}
      <div
        className="card-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(180, 240, 0, 0.15) 0%, transparent 65%)`
        }}
        aria-hidden="true"
      />

      <div className="card-browser-frame">
        {/* Browser Top Bar with Window Controls */}
        <div className="browser-topbar">
          <div className="browser-dots" aria-hidden="true">
            <span className="dot dot-close"></span>
            <span className="dot dot-minimize"></span>
            <span className="dot dot-maximize"></span>
          </div>

          <div className="browser-url-pill">
            <Globe size={11} className="url-globe" />
            <span className="url-text">{project.liveUrl.replace('https://', '')}</span>
          </div>

          <div className="browser-badge-slot">
            <span className="project-badge-pill">{project.badge}</span>
          </div>
        </div>

        {/* Browser Screen / Screenshot Area */}
        <div className="browser-viewport">
          {!imgError ? (
            <img
              src={project.image}
              alt={`${project.name} live website preview`}
              className="browser-screenshot"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            renderFallbackMockup()
          )}

          <div className="viewport-overlay-gradient" />
        </div>

        {/* Card Content & Meta */}
        <div className="card-body-content">
          <div className="card-meta-row">
            <span className="card-category-tag">{project.category}</span>
            <span className="card-number-tag">{project.number}</span>
          </div>

          <h3 className="card-project-title">{project.name}</h3>
          
          <p className="card-description">{project.description}</p>

          {/* Project Accuracy / Simulation Note */}
          {project.disclaimer && (
            <div className="card-disclaimer-box">
              <AlertCircle size={13} className="disclaimer-icon" />
              <span className="disclaimer-text">{project.disclaimer}</span>
            </div>
          )}

          {/* Card Tech Chips */}
          <div className="card-tech-chips">
            {project.technologies.map((t) => (
              <span key={t} className="card-tech-chip">
                {t}
              </span>
            ))}
          </div>

          {/* Working Visit Website Button */}
          <div className="card-actions-row">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary visit-btn"
              aria-label={`Visit ${project.name} live website in new tab`}
            >
              <span>Visit Website</span>
              <ExternalLink size={15} />
            </a>

            <span className="live-status-pill">
              <span className="live-pulse"></span>
              <span>LIVE DEMO</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
