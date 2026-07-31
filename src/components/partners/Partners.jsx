import React from 'react';
import { PARTNERS } from '../../utils/constants';

export const Partners = () => {
  return (
    <section id="partners" style={{ background: '#090d16', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
          TRUSTED BY GLOBAL ENTERPRISES & SUSTAINABILITY LEADERS
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              style={{
                fontSize: '1.2rem',
                fontWeight: 800,
                color: '#475569',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#10B981')}
              onMouseLeave={(e) => (e.target.style.color = '#475569')}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
