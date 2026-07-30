import React from 'react';
import { Award, Globe, Rocket, Shield, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestorDeckSummary = () => {
  const milestones = [
    { phase: 'Q1 2026', title: 'Phase 1: Regional Pilot', desc: 'Deploying edge AI vision units across 45 luxury hotels and 120 commercial restaurants.' },
    { phase: 'Q3 2026', title: 'Phase 2: Automated Hubs', desc: 'Opening 5 centralized municipal anaerobic bioreactor hubs with 500-ton monthly capacity.' },
    { phase: 'Q1 2027', title: 'Phase 3: National Rollout', desc: 'Expanding to 12 major metro hubs in partnership with MSME Green Tech Initiatives & Startup India.' },
    { phase: 'Q4 2027', title: 'Phase 4: Global Scale', desc: 'Licensing hardware-software AI circular tech to international municipal waste authorities.' }
  ];

  return (
    <section id="investor-summary" style={{ padding: '5rem 0', background: 'rgba(4, 8, 22, 0.7)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div className="deck-badge" style={{ marginBottom: '1rem' }}>
            <Award size={16} color="#8b5cf6" /> Investor & Pitch Summary
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Investor-Ready <span className="gradient-text-purple">Growth & Execution Roadmap</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Designed for National MSME Hackathons, Startup India Pitch Competitions, International Tech Expos, and Venture Capital Investment.
          </p>
        </div>

        {/* 4 Cards Roadmap Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          {milestones.map((m, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--purple-accent)', background: 'rgba(139, 92, 246, 0.15)', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                  {m.phase}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem', fontWeight: 900 }}>0{idx + 1}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.5rem' }}>{m.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Keynote Deck Callout Banner */}
        <div className="glass-panel" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(7, 17, 31, 0.95) 0%, rgba(11, 18, 32, 0.95) 100%)',
          borderColor: 'rgba(56, 189, 248, 0.4)',
          padding: '3rem 2rem'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(34, 197, 94, 0.2) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem',
            boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)'
          }}>
            <Rocket size={32} color="#22d3ee" />
          </div>
          <h3 style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>
            Experience the Full <span className="gradient-text">Keynote Presentation Deck</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto 1.8rem auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Full screen keyboard interactive slide presentation preserving every word, table, graph, flowchart, bullet point, and 3D visual.
          </p>
          <Link to="/presentation" className="btn-primary" style={{ padding: '0.95rem 2.5rem', fontSize: '1.1rem' }}>
            Launch Keynote Presentation Deck <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestorDeckSummary;
