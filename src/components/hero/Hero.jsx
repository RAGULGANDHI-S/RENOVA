import React from 'react';
import { EarthCanvas } from '../three/Earth';
import { HeroStats } from './HeroStats';

export const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      paddingTop: '8.5rem',
      paddingBottom: '5rem',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Dynamic Background Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Headlines & Call to Action */}
          <div>
            <div className="badge-glow" style={{ marginBottom: '1.5rem' }}>
              <span className="glow-dot" />
              <span>RENOVA AI OS v4.2 – Enterprise Autonomous Circularity</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '1.5rem'
            }}>
              Autonomous <br />
              <span className="gradient-text">Circular Waste</span> <br />
              Intelligence.
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '560px'
            }}>
              Eliminate landfill waste and methane emissions. RENOVA deploys multispectral computer vision, pneumatic segregation, and automated marketplace logistics to transform commercial waste into high-value bio-fertilizer and recycled raw materials.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a href="#detection" className="btn-primary">
                <span>Launch AI Vision Engine</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#/auth/admin" className="btn-secondary">
                Explore Live Dashboards
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: '#64748b', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>ISO 14001 Compliant</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Zero-Landfill Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Earth Globe */}
          <div style={{ position: 'relative', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass-card" style={{
              width: '100%',
              height: '100%',
              borderRadius: '32px',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              position: 'relative'
            }}>
              {/* Floating Floating UI Badge */}
              <div className="glass-panel animate-float" style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                padding: '0.75rem 1.2rem',
                borderRadius: '16px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Global Active Facilities</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>1,842 Smart Nodes</div>
                </div>
              </div>

              <div className="glass-panel animate-float-alt" style={{
                position: 'absolute',
                bottom: '25px',
                right: '20px',
                padding: '0.75rem 1.2rem',
                borderRadius: '16px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Material Value Yield</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#34d399' }}>$48.2M Recovered</div>
                </div>
              </div>

              <EarthCanvas />
            </div>
          </div>
        </div>

        {/* Realtime Stats Bar */}
        <HeroStats />
      </div>
    </section>
  );
};
