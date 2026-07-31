import React, { useState } from 'react';
import { DashboardLayout } from '../../../layouts/DashboardLayout';

export const VendorDashboard = () => {
  const [bids, setBids] = useState([
    { id: 1, material: 'PET Clear Polymer Flakes', purity: '99.4%', weight: '12.5 Tons', currentPrice: '$0.85/kg', myBid: '$0.88/kg', status: 'Leading' },
    { id: 2, material: 'Industrial Aluminum Packaging', purity: '98.8%', weight: '6.2 Tons', currentPrice: '$1.45/kg', myBid: '$1.40/kg', status: 'Outbid' },
    { id: 3, material: 'HDPE Rigid Containers', purity: '99.1%', weight: '8.0 Tons', currentPrice: '$0.62/kg', myBid: '$0.65/kg', status: 'Leading' }
  ]);

  const handlePlaceBid = (id) => {
    setBids(bids.map(b => b.id === id ? { ...b, myBid: '$0.92/kg', status: 'Leading' } : b));
  };

  return (
    <DashboardLayout title="Recycling Vendor Commodity Bidding Exchange" role="vendor">
      {/* Top Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #3B82F6' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Monthly Material Procured</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>142 Tons</div>
          <div style={{ fontSize: '0.8rem', color: '#60a5fa' }}>Pre-Sorted Pure Streams</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #10B981' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Active Bids</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>3 Auctions</div>
          <div style={{ fontSize: '0.8rem', color: '#34d399' }}>2 Leading</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #F59E0B' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Total Payout Distributed</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>$118,400</div>
          <div style={{ fontSize: '0.8rem', color: '#fbbf24' }}>Instant Settlement</div>
        </div>
      </div>

      {/* Commodity Bidding Table */}
      <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
          Live Commodity Auction Desk
        </h3>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {bids.map((b) => (
            <div key={b.id} className="glass-panel" style={{ padding: '1.2rem 1.5rem', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{b.material}</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                  Purity: <span style={{ color: '#10B981' }}>{b.purity}</span> • Volume: <span style={{ color: '#fff' }}>{b.weight}</span>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Current Top Bid</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#06B6D4' }}>{b.currentPrice}</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  background: b.status === 'Leading' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  color: b.status === 'Leading' ? '#34d399' : '#f87171',
                  fontWeight: 700,
                  fontSize: '0.8rem'
                }}>
                  {b.status}
                </div>

                <button onClick={() => handlePlaceBid(b.id)} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
                  Raise Bid +$0.03
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
