import React, { useState } from 'react';
import { DashboardLayout } from '../../../layouts/DashboardLayout';

export const FarmerDashboard = () => {
  const [compostQty, setCompostQty] = useState(5);
  const [ordered, setOrdered] = useState(false);

  const pricePerTon = 120;
  const totalPrice = compostQty * pricePerTon;

  const handleOrder = () => {
    setOrdered(true);
  };

  return (
    <DashboardLayout title="Organic Farmer Bio-Compost Marketplace" role="farmer">
      {/* Top Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #10B981' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Compost Grade</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>NPK 4-3-2 Organic</div>
          <div style={{ fontSize: '0.8rem', color: '#34d399' }}>USDA Certified Bio-Nutrient</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #06B6D4' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Soil Moisture & Yield Boost</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>+28% Crop Yield</div>
          <div style={{ fontSize: '0.8rem', color: '#22d3ee' }}>Pathogen-Free Guarantee</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '18px', borderLeft: '4px solid #F59E0B' }}>
          <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase' }}>Active Fertilizer Orders</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: '0.3rem 0' }}>2 Deliveries</div>
          <div style={{ fontSize: '0.8rem', color: '#fbbf24' }}>En Route via Fleet</div>
        </div>
      </div>

      {/* Order & Soil Insights */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        
        {/* Order Form */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Procure High-NPK Bio-Compost
          </h3>

          {ordered ? (
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid #10B981' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34d399', marginBottom: '0.5rem' }}>
                ✓ Bio-Compost Order Confirmed!
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                {compostQty} Tons of NPK 4-3-2 fertilizer dispatched to GreenAcres Bio Farm. Arrival tomorrow morning.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1.2rem' }}>
              <div>
                <label style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>Select Quantity (Tons)</label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={compostQty}
                  onChange={(e) => setCompostQty(Number(e.target.value))}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '0.75rem', color: '#fff' }}
                />
              </div>

              <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Unit Price</div>
                  <div style={{ fontWeight: 700, color: '#fff' }}>${pricePerTon} / Ton</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Total Investment</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#10B981' }}>${totalPrice}</div>
                </div>
              </div>

              <button onClick={handleOrder} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Confirm Bio-Fertilizer Delivery
              </button>
            </div>
          )}
        </div>

        {/* Soil NPK Diagnostics */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
            Soil NPK & Micronutrient Diagnostic
          </h3>

          <div style={{ display: 'grid', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#fff', marginBottom: '0.3rem' }}>
                <span>Nitrogen (N) Content</span>
                <span style={{ color: '#10B981', fontWeight: 700 }}>4.2% (Optimal)</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: '85%', height: '100%', background: '#10B981', borderRadius: '3px' }} />
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#fff', marginBottom: '0.3rem' }}>
                <span>Phosphorus (P) Retention</span>
                <span style={{ color: '#06B6D4', fontWeight: 700 }}>3.1% (High)</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: '75%', height: '100%', background: '#06B6D4', borderRadius: '3px' }} />
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '1rem', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#fff', marginBottom: '0.3rem' }}>
                <span>Potassium (K) Availability</span>
                <span style={{ color: '#F59E0B', fontWeight: 700 }}>2.4% (Good)</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
                <div style={{ width: '65%', height: '100%', background: '#F59E0B', borderRadius: '3px' }} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};
