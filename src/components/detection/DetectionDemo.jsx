import React, { useState } from 'react';
import { DEMO_WASTE_SAMPLES } from '../../utils/constants';

export const DetectionDemo = () => {
  const [selectedSample, setSelectedSample] = useState(DEMO_WASTE_SAMPLES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [customImage, setCustomImage] = useState(null);

  const handleSelect = (sample) => {
    setIsScanning(true);
    setSelectedSample(sample);
    setCustomImage(null);
    setTimeout(() => {
      setIsScanning(false);
    }, 600);
  };

  const handleSimulatedUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsScanning(true);
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      setSelectedSample({
        id: 'custom-upload',
        name: file.name,
        category: 'Custom Scanned Stream',
        confidence: 99.3,
        moisture: '42%',
        compostPotential: '88%',
        methaneReduction: '1.8 kg CO2e / kg',
        color: '#10B981',
        valuePerKg: '$0.65',
        image: url,
        details: 'User uploaded sample scanned via RENOVA Neural Net v4.2. Recommended for bio-digestion or polymer recycling.'
      });
      setTimeout(() => {
        setIsScanning(false);
      }, 800);
    }
  };

  return (
    <section id="detection" className="section-padding" style={{ background: '#0b0f19', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-glow" style={{ marginBottom: '1rem' }}>
            <span>LIVE INTERACTIVE AI DEMO</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Experience RENOVA <span className="gradient-emerald-cyan">Multispectral AI Vision</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            Click any waste stream below or upload an image to see real-time computer vision detection, bounding box localization, moisture analysis, and commodity pricing.
          </p>
        </div>

        {/* Preset Selector */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {DEMO_WASTE_SAMPLES.map((sample) => (
            <button
              key={sample.id}
              onClick={() => handleSelect(sample)}
              style={{
                background: selectedSample.id === sample.id ? 'rgba(16, 185, 129, 0.18)' : 'rgba(255,255,255,0.03)',
                border: selectedSample.id === sample.id ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.08)',
                color: selectedSample.id === sample.id ? '#34d399' : '#94a3b8',
                padding: '0.75rem 1.4rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: sample.color }} />
              {sample.name}
            </button>
          ))}

          <label style={{
            background: 'rgba(6, 182, 212, 0.15)',
            border: '1px dashed #06B6D4',
            color: '#22d3ee',
            padding: '0.75rem 1.4rem',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <span>Upload Image</span>
            <input type="file" accept="image/*" onChange={handleSimulatedUpload} style={{ display: 'none' }} />
          </label>
        </div>

        {/* Demo Viewport */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '28px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Visual Bounding Box Viewport */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: '380px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: '#04070d'
            }} className={isScanning ? 'scan-effect' : ''}>
              <img
                src={selectedSample.image}
                alt={selectedSample.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isScanning ? 'brightness(0.7) blur(1px)' : 'brightness(0.9)',
                  transition: 'all 0.3s ease'
                }}
              />

              {/* Simulated AI Vision Overlay Bounding Box */}
              {!isScanning && (
                <div style={{
                  position: 'absolute',
                  top: '18%',
                  left: '18%',
                  width: '64%',
                  height: '64%',
                  border: `2px solid ${selectedSample.color}`,
                  borderRadius: '12px',
                  boxShadow: `0 0 20px ${selectedSample.color}40, inset 0 0 15px ${selectedSample.color}20`,
                  padding: '8px'
                }}>
                  {/* Bounding Box Corners */}
                  <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '14px', height: '14px', borderTop: `4px solid ${selectedSample.color}`, borderLeft: `4px solid ${selectedSample.color}` }} />
                  <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '14px', height: '14px', borderTop: `4px solid ${selectedSample.color}`, borderRight: `4px solid ${selectedSample.color}` }} />
                  <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '14px', height: '14px', borderBottom: `4px solid ${selectedSample.color}`, borderLeft: `4px solid ${selectedSample.color}` }} />
                  <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '14px', height: '14px', borderBottom: `4px solid ${selectedSample.color}`, borderRight: `4px solid ${selectedSample.color}` }} />

                  {/* AI Label Floating Tag */}
                  <div style={{
                    background: selectedSample.color,
                    color: '#090D16',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                  }}>
                    <span>{selectedSample.category}</span>
                    <span>• {selectedSample.confidence}%</span>
                  </div>
                </div>
              )}

              {/* Status Indicator */}
              <div className="glass-panel" style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.82rem',
                color: '#94a3b8'
              }}>
                <div>FPS: <span style={{ color: '#fff', fontWeight: 600 }}>120.4</span></div>
                <div>Model: <span style={{ color: '#10B981', fontWeight: 600 }}>RENOVA-Vision-v4.2</span></div>
                <div>Latency: <span style={{ color: '#34d399', fontWeight: 600 }}>8.2ms</span></div>
              </div>
            </div>

            {/* AI Diagnostics Telemetry Panel */}
            <div>
              <div className="badge-glow" style={{ marginBottom: '1rem' }}>
                <span>NEURAL ANALYSIS REPORT</span>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                {selectedSample.name}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1.8rem' }}>
                {selectedSample.details}
              </p>

              {/* Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>AI Confidence Score</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: selectedSample.color }}>
                    {selectedSample.confidence}%
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Marketplace Value</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>
                    {selectedSample.valuePerKg} <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>/ kg</span>
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Moisture Content</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                    {selectedSample.moisture}
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Methane Prevention</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34d399' }}>
                    {selectedSample.methaneReduction}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#/auth/hotel" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  Dispatch Pickup Batch
                </a>
                <a href="#/auth/vendor" className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                  Bid on Commodity
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
