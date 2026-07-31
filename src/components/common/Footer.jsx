import React from 'react';

export const Footer = () => {
  return (
    <footer style={{
      background: '#060911',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '5rem',
      paddingBottom: '3rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#090D16" strokeWidth="2.5">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
                RENOVA<span style={{ color: '#10B981' }}>.AI</span>
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Autonomous circular waste intelligence transforming enterprise hospitality, logistics, and agriculture into zero-waste ecosystems.
            </p>
            <div className="badge-glow">
              <span className="glow-dot"></span>
              <span>AI System Status: Operational (99.99%)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Platform Features</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><a href="#detection" style={{ transition: 'color 0.2s' }}>Multispectral Computer Vision</a></li>
              <li><a href="#workflow" style={{ transition: 'color 0.2s' }}>Robotic Air Jet Sorting</a></li>
              <li><a href="#impact" style={{ transition: 'color 0.2s' }}>ESG Ledger & Methane Tracking</a></li>
              <li><a href="#partners" style={{ transition: 'color 0.2s' }}>Bio-Compost Marketplace</a></li>
              <li><a href="#faq" style={{ transition: 'color 0.2s' }}>IoT Bin Telemetry Sensors</a></li>
            </ul>
          </div>

          {/* Portal Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Role Portals</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><a href="#/auth/admin">Enterprise HQ Admin</a></li>
              <li><a href="#/auth/hotel">Hotel Partner Portal</a></li>
              <li><a href="#/auth/restaurant">Restaurant Hub</a></li>
              <li><a href="#/auth/vendor">Recycling Bidding Desk</a></li>
              <li><a href="#/auth/farmer">Organic Compost Exchange</a></li>
              <li><a href="#/auth/delivery">Smart Dispatch Fleet</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginBottom: '1.2rem' }}>Stay Informed</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '1rem' }}>
              Subscribe to enterprise circular economy research and AI updates.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="enterprise@domain.com"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  padding: '0.6rem 0.9rem',
                  color: '#fff',
                  fontSize: '0.88rem',
                  width: '100%'
                }}
              />
              <button className="btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}>
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} RENOVA AI Corporation. All rights reserved. Investor & Enterprise Grade Platform.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Security Protocol</a>
            <a href="#">API Documentation</a>
            <a href="#">SOC2 Type II Certified</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
