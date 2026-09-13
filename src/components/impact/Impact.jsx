import React, { useState } from 'react';

export const Impact = () => {
  const [wasteTonsPerMonth, setWasteTonsPerMonth] = useState(50);

  // Calculations
  const co2OffsetTons = (wasteTonsPerMonth * 1.82 * 12).toFixed(1);
  const compostProducedTons = (wasteTonsPerMonth * 0.35 * 12).toFixed(1);
  const methanePreventedKg = (wasteTonsPerMonth * 420 * 12).toLocaleString();
  const estimatedCostSavings = (wasteTonsPerMonth * 85 * 12).toLocaleString();

  return (
    <section id="impact" className="section-padding" style={{ background: '#0b0f19', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <div className="badge-glow" style={{ marginBottom: '1rem' }}>
            <span>ENTERPRISE ESG CALCULATOR</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Quantifiable <span className="gradient-emerald-cyan">Environmental Savings</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
            Adjust your facility’s monthly waste tonnage to calculate real-time carbon offsets, bio-compost output, and Scope 3 compliance credits.
          </p>
        </div>

        <div className="glass-card" style={{ padding: '3rem', borderRadius: '32px', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Interactive Slider Input */}
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
                Facility Waste Output Simulator
              </h3>

              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#94a3b8', fontWeight: 500 }}>Monthly Waste Generated</span>
                  <span style={{ color: '#10B981', fontWeight: 800, fontSize: '1.4rem' }}>
                    {wasteTonsPerMonth} <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Tons/month</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={wasteTonsPerMonth}
                  onChange={(e) => setWasteTonsPerMonth(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: '#10B981',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#64748b', marginTop: '0.5rem' }}>
                  <span>5 Tons (Boutique Hotel)</span>
                  <span>250 Tons (City District)</span>
                  <span>500 Tons (Resort Cluster)</span>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '16px' }}>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  Verified ISO-14064 Carbon Audit
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  Data computed using IPCC guidelines for municipal solid waste landfill diversion and aerobic bio-fermentation.
                </p>
              </div>
            </div>

            {/* Simulated Yield Results Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px', borderLeft: '4px solid #10B981' }}>
                <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Annual CO₂ Offset</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#34d399', margin: '0.4rem 0' }}>
                  {co2OffsetTons} <span style={{ fontSize: '0.9rem' }}>MT</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Equivalent to planting {(co2OffsetTons * 45).toLocaleString()} trees</div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px', borderLeft: '4px solid #06B6D4' }}>
                <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Organic Compost Yield</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#22d3ee', margin: '0.4rem 0' }}>
                  {compostProducedTons} <span style={{ fontSize: '0.9rem' }}>Tons</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>High NPK fertilizer for local farms</div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px', borderLeft: '4px solid #3B82F6' }}>
                <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Methane Prevented</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#60a5fa', margin: '0.4rem 0' }}>
                  {methanePreventedKg} <span style={{ fontSize: '0.9rem' }}>kg</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Direct landfill degassing prevention</div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '20px', borderLeft: '4px solid #F59E0B' }}>
                <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Net Material Value</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fbbf24', margin: '0.4rem 0' }}>
                  ${estimatedCostSavings}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Recovered raw material revenue</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
