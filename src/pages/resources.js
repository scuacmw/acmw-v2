import React from 'react';
import './resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <div className="resources-header">
        <h1 className="resources-title">Resources & Slides</h1>
        <p className="resources-subtitle">Access our presentations, materials, and other helpful resources</p>
      </div>

      <div className="resources-content">
        <section className="resource-section">
          <h2 className="section-title">Slides</h2>
          <div className="resource-grid">
          </div>
        </section>

        <section className="resource-section">
          <h2 className="section-title">Resources</h2>
          <div className="resource-grid">
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;

