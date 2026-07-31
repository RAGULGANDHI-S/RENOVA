import React, { useState } from 'react';
import { DashboardLayout } from '../../../layouts/DashboardLayout';

export const RestaurantDashboard = () => {
  const [credits, setCredits] = useState(1480);
  const [redeemSuccess, setRedeemSuccess] = useState(false);

  const handleRedeem = () => {
    if (credits >= 500) {
      setCredits(prev => prev - 500);
      setRedeemSuccess(true);
      setTimeout(() => setRedeemSuccess(false), 3000);
    }
  };

  return (
    <DashboardLayout title="Restaurant Food Waste Hub" role="restaurant">
      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #F59E0B' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Compost Credit Balance</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>{credits} PTS</div>
          <div style={{ fontSize: '0.8rem', color: '#fbbf24' }}>Worth $148 in Organic Produce</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #10B981' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Kitchen Waste Diverted</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>8.4 Tons</div>
          <div style={{ fontSize: '0.8rem', color: '#34d399' }}>100% Bio-Digested</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #06B6D4' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Methane Prevented</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>11,760 kg</div>
          <div style={{ fontSize: '0.8rem', color: '#22d3ee' }}>Scope 3 Reduction</div>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Redeem Credits */}
        <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Redeem Organic Compost Credits
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
            Convert your kitchen bio-waste diversion credits into organic farm vouchers or local partner discounts.
          </p>

          {redeemSuccess && (
            <div style={{ padding: '0.8rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', fontSize: '0.88rem', marginBottom: '1rem', textAlign: 'center' }}>
              ✓ 500 Credits Redeemed! Farm Voucher code: RENOVA-AGRI-500
            </div>
          )}

          <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '14px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, color: '#fff' }}>Organic Vegetable Box Voucher</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Cost: 500 Credits</div>
            </div>
            <button onClick={handleRedeem} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}>
              Redeem Now
            </button>
          </div>
        </div>

        {/* Collection History */}
        <div className="glass-card" style={{ padding: '1.8rem', borderRadius: '20px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Recent Kitchen Collection Log
          </h3>

          <div style={{ display: 'grid', gap: '0.8rem' }}>
            {[
              { date: 'Today, 08:30 AM', weight: '240 kg Organic', status: 'Bioreactor Tank #2', credits: '+240 pts' },
              { date: 'Yesterday, 09:15 AM', weight: '310 kg Organic', status: 'Bioreactor Tank #1', credits: '+310 pts' },
              { date: '28 Jul 2026', weight: '180 kg Organic', status: 'Bioreactor Tank #4', credits: '+180 pts' }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '0.9rem 1.2rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff' }}>{item.weight}</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{item.date} • {item.status}</div>
                </div>
                <div style={{ color: '#10B981', fontWeight: 700, fontSize: '0.9rem' }}>{item.credits}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
