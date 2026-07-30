import React from 'react';
import { Trash2, CloudOff, Users, Sprout, Trees, Car, Droplets } from 'lucide-react';
import { formatWeight } from '../utils/helpers';

const Impact = () => {
  const stats = [
    {
      label: 'Organic Waste Diverted',
      value: 142500,
      unit: 'kg',
      formatted: formatWeight(142500),
      icon: <Trash2 size={28} color="#22c55e" />,
      subText: 'Diverted from city landfills'
    },
    {
      label: 'CO2 Emissions Offset',
      value: 320000,
      unit: 'kg',
      formatted: formatWeight(320000),
      icon: <CloudOff size={28} color="#14b8a6" />,
      subText: 'Greenhouse gas prevented'
    },
    {
      label: 'Farmers Supported',
      value: 1280,
      unit: '',
      formatted: '1,280+',
      icon: <Users size={28} color="#eab308" />,
      subText: 'Regenerative agri partners'
    },
    {
      label: 'Bio-Fertilizer Produced',
      value: 94000,
      unit: 'kg',
      formatted: formatWeight(94000),
      icon: <Sprout size={28} color="#4ade80" />,
      subText: 'High-nutrient soil input'
    }
  ];

  const equivalencies = [
    { icon: <Trees size={22} color="#22c55e" />, text: 'Equivalent to planting 15,200 mature trees annually' },
    { icon: <Car size={22} color="#38bdf8" />, text: 'Equivalent to removing 680 cars from roads for a year' },
    { icon: <Droplets size={22} color="#a7f3d0" />, text: 'Over 450,000 liters of synthetic chemical runoff prevented' }
  ];

  return (
    <section id="impact" style={{ padding: '5rem 0', background: 'rgba(5, 12, 8, 0.6)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span style={{
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Measurable Sustainability
          </span>
          <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 1rem 0' }}>
            Environmental & Economic <span className="gradient-text">Impact</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Real-time telemetry tracking our collective footprint reduction across municipal waste networks and farming communities.
          </p>
        </div>

        {/* 4 Primary Cards */}
        <div className="grid-4" style={{ marginBottom: '3rem' }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem 1.5rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)'
              }}>
                {stat.icon}
              </div>
              <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                {stat.formatted}
              </span>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
                {stat.label}
              </h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {stat.subText}
              </span>
            </div>
          ))}
        </div>

        {/* Impact Equivalency Bar */}
        <div className="glass-panel" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(15, 26, 19, 0.8) 0%, rgba(5, 15, 9, 0.9) 100%)',
          borderColor: 'rgba(34, 197, 94, 0.3)'
        }}>
          {equivalencies.map((eq, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                padding: '0.75rem',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {eq.icon}
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500, lineHeight: '1.4' }}>
                {eq.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
