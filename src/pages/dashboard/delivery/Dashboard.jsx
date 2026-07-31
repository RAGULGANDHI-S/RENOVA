import React, { useState } from 'react';
import { DashboardLayout } from '../../../layouts/DashboardLayout';

export const DeliveryDashboard = () => {
  const [stops, setStops] = useState([
    { id: 1, name: 'Marriott Resort Kitchen', address: '840 Coastal Hwy', stream: 'Organic Food Waste (850kg)', status: 'Pending', fill: '92%' },
    { id: 2, name: 'ITC Grand Garden Bar', address: '102 Eco Drive', stream: 'PET Clear Glass & Plastic (420kg)', status: 'In Transit', fill: '84%' },
    { id: 3, name: 'Verde Bistro Central', address: '55 Gourmet St', stream: 'Mixed Bio-Waste (310kg)', status: 'Completed', fill: '100%' }
  ]);

  const toggleStop = (id) => {
    setStops(stops.map(s => s.id === id ? { ...s, status: s.status === 'Completed' ? 'Pending' : 'Completed' } : s));
  };

  return (
    <DashboardLayout title="Logistics Fleet Dispatch & Turn-by-Turn GPS" role="delivery">
      {/* Top Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #8B5CF6' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Active Vehicle Unit</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>Electric Hauler #409</div>
          <div style={{ fontSize: '0.8rem', color: '#a78bfa' }}>Battery: 88% • Range 210 mi</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #10B981' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Route Optimization Score</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>98.4% Efficient</div>
          <div style={{ fontSize: '0.8rem', color: '#34d399' }}>Saved 14L Diesel fuel today</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #06B6D4' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Assigned Pickups</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>3 Stops</div>
          <div style={{ fontSize: '0.8rem', color: '#22d3ee' }}>1 Completed • 2 Remaining</div>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Interactive Map Visual */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Live GPS Route & Dispatch Vector
          </h3>

          <div style={{
            height: '320px',
            borderRadius: '16px',
            background: '#040812',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Grid Map Styling */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />

            {/* Waypoints */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <div className="badge-glow" style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.2)', borderColor: '#8B5CF6', color: '#a78bfa' }}>
                <span className="glow-dot" style={{ background: '#8B5CF6' }} />
                <span>GPS Route Active: Node #409 En Route to Marriott Kitchen</span>
              </div>
              <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>
                Next Waypoint ETA: 14 Mins (3.2 miles)
              </div>
            </div>
          </div>
        </div>

        {/* Dispatch Stops Manifest */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Pickup Queue Manifest
          </h3>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {stops.map((s) => (
              <div key={s.id} className="glass-panel" style={{ padding: '1rem 1.2rem', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>{s.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{s.address} • {s.stream}</div>
                </div>

                <button
                  onClick={() => toggleStop(s.id)}
                  style={{
                    background: s.status === 'Completed' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                    border: `1px solid ${s.status === 'Completed' ? '#10B981' : '#8B5CF6'}`,
                    color: s.status === 'Completed' ? '#34d399' : '#a78bfa',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {s.status === 'Completed' ? '✓ Completed' : 'Mark Completed'}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
