import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Mail, Github, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const { contact } = siteConfig;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    // Construct mailto link
    const subject = encodeURIComponent(`Project Inquiry from ${formState.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name || 'Not provided'}\nEmail: ${formState.email}\n\nProject Scope / Idea:\n${formState.message}`
    );

    // Open default email client with inquiry pre-populated
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="glow-orb glow-orb-lime contact-glow-orb" aria-hidden="true"></div>

      <div className="container">
        <div className="contact-card-outer">
          <div className="contact-grid">
            {/* Left Column: Direct Info & GitHub */}
            <div className="contact-info-col">
              <div className="section-badge">Initiate Collaboration</div>
              <h2 className="contact-heading">{contact.heading}</h2>
              <p className="contact-statement">{contact.statement}</p>

              {/* Direct Email Display with Copy Action */}
              <div className="email-action-box">
                <div className="email-label-row">
                  <span className="email-label">DIRECT INQUIRIES</span>
                </div>
                <div className="email-display-row">
                  <a
                    href={`mailto:${contact.email}`}
                    className="email-text-wrap"
                    aria-label="Send direct email"
                  >
                    <Mail size={18} className="email-icon" />
                    <span className="email-value">{contact.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="copy-btn"
                    aria-label="Copy contact email"
                  >
                    {copied ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Verified Channels (GitHub) */}
              <div className="social-links-block">
                <span className="social-kicker">DEVELOPMENT & REPOSITORIES</span>
                <div className="social-links-list">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="GitHub profile ShinobiiX"
                  >
                    <Github size={18} />
                    <span>GitHub: {contact.githubUser}</span>
                    <ArrowUpRight size={13} className="social-arrow" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Message Form */}
            <div className="contact-form-col">
              <div className="form-inner-card">
                <div className="form-card-header">
                  <MessageSquare size={16} className="form-header-icon" />
                  <h3 className="form-card-title">Send a Direct Message</h3>
                </div>

                {formSubmitted ? (
                  <div className="form-success-state">
                    <div className="success-icon-box">
                      <Check size={28} />
                    </div>
                    <h4>Inquiry Prepared</h4>
                    <p>
                      Your mail client has been opened to send your inquiry directly to{' '}
                      <strong>{contact.email}</strong>.
                    </p>
                    <button
                      className="btn btn-secondary reset-btn"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormState({ name: '', email: '', message: '' });
                      }}
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name or Organization</label>
                      <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="Your name or team"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="form-input"
                        placeholder="you@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Project Scope / Idea *</label>
                      <textarea
                        id="message"
                        required
                        rows="4"
                        className="form-input form-textarea"
                        placeholder="Briefly describe what you are looking to build or explore..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary submit-contact-btn">
                      <span>Initiate Conversation</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
