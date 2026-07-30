import React from 'react';
import { Cpu, Server, Wifi, Database, Layers, ShieldCheck, Zap, Activity } from 'lucide-react';

const TechArchitecture = () => {
  const layers = [
    {
      title: '01. Edge Perception Layer',
      subtitle: 'Multispectral Camera & Telemetry Sensors',
      desc: 'High-definition optical and NIR spectrography cameras positioned above waste conveyor belts capture material opacity and chemical composition at 60 FPS.',
      icon: <Wifi size={24} color="#38bdf8" />,
      tag: 'Edge Hardware'
    },
    {
      title: '02. AI Inference Engine',
      subtitle: 'TensorRT Deep Convolutional Neural Net',
      desc: 'Local edge compute modules process visual frames in <50ms latency, identifying organic biomass, contaminants, moisture content, and density with 98.4% accuracy.',
      icon: <Cpu size={24} color="#22d3ee" />,
      tag: 'Computer Vision'
    },
    {
      title: '03. Automated Sorting Diverters',
      subtitle: 'Pneumatic Actuation & Robotics',
      desc: 'High-speed air jets and mechanical diverter arms separate non-biodegradable polymers from organic biomass into dedicated processing bins instantly.',
      icon: <Zap size={24} color="#22c55e" />,
      tag: 'Robotics & Automation'
    },
    {
      title: '04. Anaerobic Bioreactors',
      subtitle: 'IoT Microbial Telemetry',
      desc: 'Sub-surface thermophilic digestion units monitor pH levels, core temperature (68°C), and moisture retention continuously via telemetry sensors.',
      icon: <Layers size={24} color="#8b5cf6" />,
      tag: 'Bio-Fermentation'
    },
    {
      title: '05. Cloud ERP & Analytics Platform',
      subtitle: 'Multi-Tenant Microservices Network',
      desc: 'Real-time telemetry stream synchronized to secure cloud database powering hotel carbon credit ledgers, eco-farmer fertilizer ordering, and fleet logistics.',
      icon: <Database size={24} color="#f8fafc" />,
      tag: 'Cloud Infrastructure'
    }
  ];

  return (
    <section id="tech-architecture" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="deck-badge" style={{ marginBottom: '1rem' }}>
            <Activity size={16} color="#22d3ee" /> Industrial System Architecture
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Next-Gen <span className="gradient-text">Edge AI & Telemetry Stack</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Seamlessly integrating multispectral optical hardware, real-time edge inference, pneumatic diverters, and multi-tenant cloud orchestration.
          </p>
        </div>

        {/* 5-Layer Stack Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {layers.map((layer, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem', borderColor: 'rgba(56, 189, 248, 0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {layer.icon}
                </div>
                <span className="badge badge-info">{layer.tag}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.3rem' }}>{layer.title}</h3>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--neon-cyan)', fontWeight: 600, marginBottom: '0.8rem' }}>
                {layer.subtitle}
              </span>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                {layer.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Architecture Specs Table Panel */}
        <div className="glass-panel" style={{ borderColor: 'rgba(34, 197, 94, 0.3)' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={22} color="#22c55e" /> System Reliability & Security Standards
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(56, 189, 248, 0.2)', color: 'var(--neon-cyan)' }}>
                  <th style={{ padding: '0.8rem 1rem' }}>Metric / Parameter</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Specification</th>
                  <th style={{ padding: '0.8rem 1rem' }}>Benchmark Performance</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-main)' }}>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>Computer Vision Accuracy</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--text-muted)' }}>ResNet-50 + Custom Spectral Head</td>
                  <td style={{ padding: '0.8rem 1rem', color: '#22c55e', fontWeight: 700 }}>98.4% Segregation Precision</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: 'rgba(255,255,255,0.02)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>Edge Processing Latency</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--text-muted)' }}>NVIDIA Jetson Orin Nano Edge Unit</td>
                  <td style={{ padding: '0.8rem 1rem', color: '#38bdf8', fontWeight: 700 }}>&lt; 50ms Frame Latency</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '0.8rem 1rem', fontWeight: 600 }}>Methane Capture Efficiency</td>
                  <td style={{ padding: '0.8rem 1rem', color: 'var(--text-muted)' }}>Closed-Loop Anaerobic Fermentation</td>
                  <td style={{ padding: '0.8rem 1rem', color: '#8b5cf6', fontWeight: 700 }}>99.2% Biogas Containment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;
