import React from 'react';
import { RENOVA_STATS } from '../../utils/constants';

export const HeroStats = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginTop: '4rem',
      width: '100%'
    }}>
      {RENOVA_STATS.map((stat) => (
        <div key={stat.id} className="glass-card" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #10B981, #06B6D4)'
          }} />
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
            {stat.prefix || ''}
            {stat.value.toLocaleString()}
            <span style={{ color: '#10B981', fontSize: '1.8rem' }}>{stat.suffix}</span>
          </div>
          <div style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 500 }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};
