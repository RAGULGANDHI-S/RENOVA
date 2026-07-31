import React, { useState } from 'react';

export const About = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const pillars = [
    {
      id: 'vision',
      title: 'Multispectral Vision',
      subtitle: '120 FPS Real-time Chemical & Visual Identification',
      content: 'Our proprietary deep neural network model is trained on over 14 million industrial material samples. Operating at 120 frames per second on edge devices, RENOVA vision hardware detects moisture, organic composition, polymer sub-grades (PET, HDPE, PP), non-ferrous metals, and bio-contamination in real time.',
      metrics: [
        { label: 'Classification FPS', value: '120 Frames/sec' },
        { label: 'Trained Samples', value: '14,200,000+' },
        { label: 'Visual Precision', value: '99.6%' }
      ]
    },
    {
      id: 'segregation',
      title: 'Pneumatic Sorting Engine',
      subtitle: 'Sub-Millimeter Robotic Deflection System',
      content: 'Eliminate manual sorting bottlenecks. High-speed pneumatic air nozzles receive bounding box telemetry from the vision server and divert waste items into distinct recovery chutes in under 40 milliseconds with sub-millimeter positioning accuracy.',
      metrics: [
        { label: 'Deflection Speed', value: '< 40 ms' },
        { label: 'Throughput', value: '12 Tons/Hour' },
        { label: 'Chute Segregation', value: '8 Sub-streams' }
      ]
    },
    {
      id: 'bioreactor',
      title: '72hr Bio-Transformation',
      subtitle: 'Aerobic Thermophilic Digestor Technology',
      content: 'Kitchen and organic food waste diverted from hotels is processed inside modular high-temperature aerobic digestion tanks. In 72 hours, bio-waste is reduced by 90% by volume into certified pathogen-free, NPK-rich organic fertilizer.',
      metrics: [
        { label: 'Digestion Cycle', value: '72 Hours' },
        { label: 'Volume Reduction', value: '90%' },
        { label: 'Methane Prevented', value: '100%' }
      ]
    },
    {
      id: 'blockchain',
      title: 'Auditable ESG Ledger',
      subtitle: 'Automated Carbon Credit & Scope 3 Verification',
      content: 'Every kilogram of diverted waste generates an immutable digital manifest. Enterprise partners access real-time ISO-14064 verified carbon offset records for corporate sustainability reporting and ESG regulatory filings.',
      metrics: [
        { label: 'ISO Standard', value: '14064 & 14001' },
        { label: 'Audit Trail', value: 'Immutable' },
        { label: 'Scope 3 Reports', value: 'Automated' }
      ]
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', background: '#090d16' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="badge-glow" style={{ marginBottom: '1rem' }}>
            <span>ABOUT RENOVA PLATFORM</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1.2rem' }}>
            Engineering the Infrastructure for <span className="gradient-emerald-cyan">Zero-Landfill Future</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Linear waste disposal costs global enterprises $280B annually in lost resources and carbon taxes. RENOVA provides the complete end-to-end hardware and AI software platform to automate waste recovery.
          </p>
        </div>

        {/* Interactive Matrix Tabs */}
        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
          <div style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            paddingBottom: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            {pillars.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                  border: activeTab === tab.id ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.08)',
                  color: activeTab === tab.id ? '#34d399' : '#94a3b8',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {pillars.map((tab) => {
            if (tab.id !== activeTab) return null;
            return (
              <div key={tab.id} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                    {tab.title}
                  </h3>
                  <div style={{ color: '#06B6D4', fontWeight: 600, fontSize: '1rem', marginBottom: '1.2rem' }}>
                    {tab.subtitle}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                    {tab.content}
                  </p>
                </div>

                <div style={{ display: 'grid', gap: '1rem' }}>
                  {tab.metrics.map((m, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '1.2rem 1.5rem', borderRadius: '14px' }}>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#10B981', marginTop: '0.2rem' }}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
