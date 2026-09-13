import React, { useState } from 'react';
import { DashboardLayout } from '../../../layouts/DashboardLayout';

export const HotelDashboard = () => {
  const [scheduled, setScheduled] = useState(false);
  const [activeBinTab, setActiveBinTab] = useState('organic');

  const bins = [
    { id: 'organic', name: 'Kitchen Bio-Bin #A1', fillLevel: '88%', fillNum: 88, type: 'Organic Food Waste', qr: 'RENOVA-QR-ORGANIC-881' },
    { id: 'plastic', name: 'Bar & Dining Bin #P3', fillLevel: '45%', fillNum: 45, type: 'PET Plastic Packaging', qr: 'RENOVA-QR-PET-104' },
    { id: 'glass', name: 'Banquet Glass Bin #G2', fillLevel: '62%', fillNum: 62, type: 'Glass Bottles & Containers', qr: 'RENOVA-QR-GLASS-302' }
  ];

  return (
    <DashboardLayout title="Hotel Partner Waste & ESG Telemetry" role="hotel">
      {/* Top Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #06B6D4' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>This Month Diversion</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>42.8 Tons</div>
          <div style={{ fontSize: '0.8rem', color: '#22d3ee' }}>98.2% Zero-Landfill</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #10B981' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Scope 3 Carbon Saved</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>76.4 MT</div>
          <div style={{ fontSize: '0.8rem', color: '#34d399' }}>ISO 14064 Certified</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #F59E0B' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Waste Haul Cost Savings</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>$14,250</div>
          <div style={{ fontSize: '0.8rem', color: '#fbbf24' }}>-45% Hauling Expense</div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* QR Code Bin Management & Telemetry */}
        <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            IoT Container Fill Telemetry & QR Codes
          </h3>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {bins.map((bin) => (
              <button
                key={bin.id}
                onClick={() => setActiveBinTab(bin.id)}
                style={{
                  background: activeBinTab === bin.id ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                  border: activeBinTab === bin.id ? '1px solid #06B6D4' : '1px solid rgba(255,255,255,0.08)',
                  color: activeBinTab === bin.id ? '#22d3ee' : '#94a3b8',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {bin.name}
              </button>
            ))}
          </div>

          {bins.map((bin) => {
            if (bin.id !== activeBinTab) return null;
            return (
              <div key={bin.id} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{bin.name}</div>
                    <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{bin.type}</div>
                  </div>
                  <div style={{
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    background: bin.fillNum > 80 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                    color: bin.fillNum > 80 ? '#f87171' : '#34d399',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>
                    {bin.fillNum > 80 ? 'PICKUP REQUIRED' : 'NORMAL LEVEL'}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' }}>
                    <span>Bin Capacity</span>
                    <span style={{ color: '#fff', fontWeight: 700 }}>{bin.fillLevel}</span>
                  </div>
                  <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{ width: bin.fillLevel, height: '100%', background: bin.fillNum > 80 ? '#ef4444' : '#10B981', transition: 'width 0.5s ease' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                  <div style={{ width: '60px', height: '60px', background: '#fff', borderRadius: '8px', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Simulated QR Code Graphic */}
                    <div style={{ width: '100%', height: '100%', background: '#000', borderRadius: '4px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', padding: '4px' }}>
                      <div style={{ background: '#fff' }} /><div style={{ background: '#000' }} /><div style={{ background: '#fff' }} />
                      <div style={{ background: '#000' }} /><div style={{ background: '#fff' }} /><div style={{ background: '#000' }} />
                      <div style={{ background: '#fff' }} /><div style={{ background: '#000' }} /><div style={{ background: '#fff' }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Scannable Container ID</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{bin.qr}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pickup Dispatcher */}
        <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Schedule On-Demand Fleet Pickup
          </h3>

          {scheduled ? (
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #10B981' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34d399', marginBottom: '0.5rem' }}>
                ✓ Driver Dispatched
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                Electric Hauler Unit #409 is en route. ETA: 24 minutes.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>Pickup Stream Type</label>
                <select style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '0.75rem', color: '#fff' }}>
                  <option>Kitchen Bio-Waste (High Moisture)</option>
                  <option>PET Plastics & Glass Stream</option>
                  <option>Corrugated Cardboard Bales</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>Estimated Weight</label>
                <input type="text" defaultValue="850 kg" style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '0.75rem', color: '#fff' }} />
              </div>

              <button onClick={() => setScheduled(true)} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                Request Immediate AI Dispatch
              </button>
            </div>
          )}
        </div>

      </div>
    </DashboardLayout>
  );
};
