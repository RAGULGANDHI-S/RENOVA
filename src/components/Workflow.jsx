import React from 'react';
import { Building2, Cpu, GitFork, Recycle, Sprout, Tractor, ArrowRight } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      id: 1,
      title: 'Waste Source',
      actor: 'Hotels, Restaurants & Vendors',
      icon: <Building2 size={24} color="#4ade80" />,
      desc: 'Commercial kitchens and wholesale food markets log organic waste stream volume for scheduled eco-pickup.'
    },
    {
      id: 2,
      title: 'AI Detection',
      icon: <Cpu size={24} color="#14b8a6" />,
      actor: 'Computer Vision Scanners',
      desc: 'High-speed camera sensors analyze chemical spectrography and density to classify materials instantly.'
    },
    {
      id: 3,
      title: 'Smart Segregation',
      icon: <GitFork size={24} color="#38bdf8" />,
      actor: 'Automated Sorting Bays',
      desc: 'Robotic diverters route organic waste to bioreactors while non-biodegradable synthetics head to recycling.'
    },
    {
      id: 4,
      title: 'Organic Processing',
      icon: <Recycle size={24} color="#a7f3d0" />,
      actor: 'Anaerobic Bioreactors',
      desc: 'Microbial thermophilic digestion breaks down complex biomass into bio-humus while capturing methane biogas.'
    },
    {
      id: 5,
      title: 'Fertilizer Production',
      icon: <Sprout size={24} color="#22c55e" />,
      actor: 'Bio-NPK Processing Unit',
      desc: 'Stabilization and enrichment produce high-grade bio-NPK fertilizer pellets and concentrated liquid nutrients.'
    },
    {
      id: 6,
      title: 'Farm Usage',
      icon: <Tractor size={24} color="#eab308" />,
      actor: 'Regenerative Agriculture',
      desc: 'Farmers apply organic fertilizer, restoring soil microbiome, improving crop yield, and closing the circular loop.'
    }
  ];

  return (
    <section id="workflow" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <span style={{
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Closed-Loop Circular Economy
          </span>
          <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 1rem 0' }}>
            The Complete <span className="gradient-text">RENOVA Workflow</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            From commercial food waste pickup to regenerative agriculture yield — connecting waste generators with sustainable farmers seamlessly.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(34, 197, 94, 0.12)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {step.icon}
                  </div>
                  <span style={{
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: 'rgba(255, 255, 255, 0.2)',
                    fontFamily: 'monospace'
                  }}>
                    0{step.id}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '0.3rem' }}>{step.title}</h3>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: 600, marginBottom: '0.8rem' }}>
                  {step.actor}
                </span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div style={{
                  marginTop: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--primary)',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>
                  <span>Next Step</span> <ArrowRight size={14} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
