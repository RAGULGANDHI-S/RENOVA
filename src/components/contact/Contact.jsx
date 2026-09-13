import React, { useState } from 'react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Hotel Enterprise',
    wasteVolume: '10-50 Tons/month',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: '#0b0f19', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Info */}
          <div>
            <div className="badge-glow" style={{ marginBottom: '1rem' }}>
              <span>ENTERPRISE SALES & DEMO REQUEST</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#fff', marginBottom: '1.2rem' }}>
              Schedule an <span className="gradient-emerald-cyan">Executive Briefing</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Deploy RENOVA AI across your hospitality resorts, municipal collection hubs, or agricultural cooperatives. Speak directly with our circular economy deployment engineers.
            </p>

            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Enterprise Support Line</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>+1 (800) 840-RENOVA</div>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Executive Enquiries</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>enterprise@renova-ai.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '28px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Briefing Request Confirmed
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.98rem' }}>
                  Our enterprise circular economy team will deliver your custom ROI model and technical specs within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.2rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                  Request Enterprise Demo
                </h3>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>Corporate Email</label>
                  <input
                    required
                    type="email"
                    placeholder="s.jenkins@marriott.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>Company / Facility Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Marriott Grand Resort"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '10px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  Submit Executive Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
