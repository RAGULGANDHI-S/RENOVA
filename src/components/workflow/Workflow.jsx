import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../../utils/constants';

export const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="section-padding" style={{ background: '#090d16', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="badge-glow" style={{ marginBottom: '1rem' }}>
            <span>AUTONOMOUS SEGREGATION PIPELINE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            The 5-Stage <span className="gradient-emerald-cyan">Circular Loop</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            From camera scanning to organic compost delivery—see how RENOVA seamlessly orchestrates waste recovery across the value chain.
          </p>
        </div>

        {/* Stepper Timeline Nav */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {WORKFLOW_STEPS.map((item, idx) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className="glass-card"
              style={{
                padding: '1.2rem',
                cursor: 'pointer',
                border: activeStep === idx ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.08)',
                background: activeStep === idx ? 'rgba(16, 185, 129, 0.12)' : 'rgba(15, 23, 42, 0.5)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                color: activeStep === idx ? '#10B981' : '#64748b',
                marginBottom: '0.4rem'
              }}>
                STAGE {item.step}
              </div>
              <div style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: activeStep === idx ? '#fff' : '#94a3b8',
                lineHeight: '1.3'
              }}>
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Stage Detail Display */}
        <div className="glass-card" style={{ padding: '3rem', borderRadius: '28px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-flex',
                padding: '0.4rem 1rem',
                borderRadius: '99px',
                background: 'rgba(6, 182, 212, 0.15)',
                color: '#22d3ee',
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1.2rem'
              }}>
                STAGE {WORKFLOW_STEPS[activeStep].step} OF 05
              </div>

              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
                {WORKFLOW_STEPS[activeStep].title}
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {WORKFLOW_STEPS[activeStep].description}
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="btn-secondary"
                  style={{ opacity: activeStep === 0 ? 0.4 : 1, padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}
                >
                  Previous Stage
                </button>
                <button
                  disabled={activeStep === WORKFLOW_STEPS.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="btn-primary"
                  style={{ opacity: activeStep === WORKFLOW_STEPS.length - 1 ? 0.4 : 1, padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}
                >
                  Next Stage
                </button>
              </div>
            </div>

            {/* Workflow Animation Graphic Mockup */}
            <div className="glass-panel" style={{
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '260px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #10B981, #06B6D4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)',
                marginBottom: '1.5rem'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#090D16" strokeWidth="2.5">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                Operational Mode: Active
              </div>
              <div style={{ fontSize: '0.9rem', color: '#34d399', fontWeight: 600 }}>
                Real-time Feedback Loop • Sub-10ms Signal Relay
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
