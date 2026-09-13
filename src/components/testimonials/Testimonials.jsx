import React, { useState } from 'react';
import { TESTIMONIALS } from '../../utils/constants';

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="section-padding" style={{ background: '#0b0f19', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="badge-glow" style={{ marginBottom: '1rem' }}>
            <span>CUSTOMER SUCCESS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Validated by <span className="gradient-emerald-cyan">Industry Operators</span>
          </h2>
        </div>

        {/* Carousel / Cards */}
        <div className="glass-card" style={{ padding: '3.5rem', borderRadius: '32px', maxWidth: '900px', margin: '0 auto', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <div style={{ fontSize: '1.4rem', color: '#f8fafc', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            "{TESTIMONIALS[current].quote}"
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={TESTIMONIALS[current].image}
                alt={TESTIMONIALS[current].author}
                style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #10B981' }}
              />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
                  {TESTIMONIALS[current].author}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
                  {TESTIMONIALS[current].role} • <span style={{ color: '#06B6D4' }}>{TESTIMONIALS[current].company}</span>
                </div>
              </div>
            </div>

            {/* Stepper Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  style={{
                    width: idx === current ? '32px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    background: idx === current ? '#10B981' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
