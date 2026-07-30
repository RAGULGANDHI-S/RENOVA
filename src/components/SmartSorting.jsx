import React, { useState } from 'react';
import { ArrowDown, Flame, Thermometer, Activity, Layers, Check, Zap } from 'lucide-react';

const SmartSorting = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      title: 'Organic Waste Input',
      sub: 'Raw Biomass Segregation',
      desc: 'Separating pure organic kitchen scraps, food leftovers, and agricultural residues from non-biodegradables.',
      metrics: { temp: '24°C', moisture: '65%', time: 'Day 1', status: 'Intake Complete' },
      icon: '🥗',
      color: '#22c55e'
    },
    {
      title: 'Thermophilic Processing',
      sub: 'Anaerobic Digestion & Shredding',
      desc: 'High-speed shredding followed by controlled microbial inoculation in high-temp aerobic digestors.',
      metrics: { temp: '68°C', moisture: '55%', time: 'Days 2-5', status: 'Active Fermentation' },
      icon: '⚙️',
      color: '#10b981'
    },
    {
      title: 'Bio-Compost Curing',
      sub: 'Nutrient Stabilization',
      desc: 'Earthworm vermicomposting and mineral stabilization, creating humus rich in nitrogen, phosphorus, and potassium.',
      metrics: { temp: '38°C', moisture: '40%', time: 'Days 6-12', status: 'Maturation Phase' },
      icon: '🌱',
      color: '#14b8a6'
    },
    {
      title: 'High-Grade Bio-Fertilizer',
      sub: 'Pelletization & Distribution',
      desc: 'Final screening, liquid extract concentration, and bio-fertilizer packaging for direct delivery to eco-farms.',
      metrics: { temp: '22°C', moisture: '12%', time: 'Day 14', status: 'Ready for Farms' },
      icon: '📦',
      color: '#4ade80'
    }
  ];

  return (
    <section id="smart-sorting" style={{ padding: '5rem 0', background: 'rgba(5, 12, 8, 0.5)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '99px',
            background: 'rgba(20, 184, 166, 0.12)',
            border: '1px solid rgba(20, 184, 166, 0.3)',
            color: '#2dd4bf',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            <Zap size={16} /> Automated Bio-Conversion Technology
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Smart <span className="gradient-text">Segregation & Conversion</span> Pipeline
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Trace how municipal food waste undergoes high-tech bio-fermentation to produce nutrient-rich organic fertilizer.
          </p>
        </div>

        {/* Step Progression Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          {stages.map((stage, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="glass-card"
                style={{
                  padding: '1.25rem',
                  cursor: 'pointer',
                  borderColor: isActive ? stage.color : 'rgba(34, 197, 94, 0.15)',
                  background: isActive ? 'rgba(22, 38, 28, 0.9)' : 'rgba(15, 26, 19, 0.5)',
                  transform: isActive ? 'scale(1.03)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{stage.icon}</span>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: isActive ? stage.color : 'var(--text-dim)',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    STEP 0{idx + 1}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#fff', marginBottom: '0.2rem' }}>{stage.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stage.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Live Active Stage Panel */}
        <div className="glass-panel" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <div>
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: stages[activeStep].color
            }}>
              Active Process Telemetry • Step {activeStep + 1} of 4
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', margin: '0.5rem 0 1rem 0' }}>
              {stages[activeStep].title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              {stages[activeStep].desc}
            </p>

            {/* Stage Telemetry Gauges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div style={{ background: 'rgba(10, 18, 13, 0.8)', padding: '0.8rem 1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Thermometer color={stages[activeStep].color} size={24} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-dim)' }}>Core Temperature</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{stages[activeStep].metrics.temp}</span>
                </div>
              </div>

              <div style={{ background: 'rgba(10, 18, 13, 0.8)', padding: '0.8rem 1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Activity color="#14b8a6" size={24} />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-dim)' }}>Moisture Level</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{stages[activeStep].metrics.moisture}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical Pipeline Flow Diagram */}
          <div style={{
            background: 'rgba(7, 12, 9, 0.8)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${stages[activeStep].color}40 0%, transparent 70%)`,
              border: `2px solid ${stages[activeStep].color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              boxShadow: `0 0 30px ${stages[activeStep].color}60`
            }}>
              {stages[activeStep].icon}
            </div>

            <div style={{ textAlign: 'center' }}>
              <span className="badge badge-organic" style={{ marginBottom: '0.5rem' }}>
                <Check size={12} /> {stages[activeStep].metrics.status}
              </span>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginTop: '0.4rem' }}>{stages[activeStep].metrics.time}</h4>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-dim)',
              fontSize: '0.8rem'
            }}>
              <span>Organic Waste</span>
              <ArrowDown size={14} />
              <span>Processing</span>
              <ArrowDown size={14} />
              <span>Compost</span>
              <ArrowDown size={14} />
              <span style={{ color: '#22c55e', fontWeight: 600 }}>Fertilizer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSorting;
