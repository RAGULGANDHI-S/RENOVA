import React, { useState } from 'react';
import { Store, ArrowLeft, LogOut, PackageCheck, AlertCircle, Plus, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getStoredUser, logoutUser } from '../../services/auth';

const VendorDashboard = () => {
  const user = getStoredUser() || { name: 'Agro Fresh Wholesale Market', role: 'vendor' };
  const navigate = useNavigate();

  const [produceBatches, setProduceBatches] = useState([
    { id: 'VND-901', produceType: 'Spoiled Tomatoes & Peppers', weightKg: '850', grade: 'High Bio-Fermentation Value', status: 'In-Transit to Bioreactor' },
    { id: 'VND-902', produceType: 'Overripe Citrus & Melons', weightKg: '1,200', grade: 'High Citric Nitrogen Content', status: 'Scheduled for 3:00 PM' },
    { id: 'VND-903', produceType: 'Leafy Vegetable Residue', weightKg: '640', grade: 'High Potassium Content', status: 'Processed into Bio-NPK' }
  ]);

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: '#fff' }}>
      <header style={{
        background: 'rgba(10, 18, 13, 0.9)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} /> Site
          </Link>
          <div style={{ height: '20px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Store size={22} color="#22c55e" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Wholesale Produce Waste Hub</h2>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
          <LogOut size={14} /> Exit
        </button>
      </header>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {/* Vendor Header */}
        <div className="glass-panel" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-organic" style={{ marginBottom: '0.4rem' }}>Wholesale Market Hub</span>
              <h1 style={{ fontSize: '1.8rem', color: '#fff' }}>{user.name}</h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Fruit & Vegetable Bulk Waste Processing Hub</p>
            </div>
            <button className="btn-primary">
              <Plus size={16} /> Log Bulk Produce Waste
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Produce Salvaged This Week</span>
            <h3 style={{ fontSize: '1.8rem', color: '#4ade80', margin: '0.4rem 0' }}>2.69 Tons</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>diverted from municipal dumps</span>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fertilizer Credits Earned</span>
            <h3 style={{ fontSize: '1.8rem', color: '#38bdf8', margin: '0.4rem 0' }}>$1,120.00</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Transferable to farmer network</span>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Average Bio-Quality Score</span>
            <h3 style={{ fontSize: '1.8rem', color: '#fde047', margin: '0.4rem 0' }}>96.8 / 100</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Optimal moisture & nutrient ratio</span>
          </div>
        </div>

        {/* Vendor Waste Batches Table */}
        <div className="glass-panel">
          <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1.5rem' }}>Fruit & Vegetable Waste Dispatch Log</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Batch ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Produce Category</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Weight (kg)</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Bio-Fermentation Grade</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Pickup Status</th>
                </tr>
              </thead>
              <tbody>
                {produceBatches.map((b) => (
                  <tr key={b.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#4ade80' }}>{b.id}</td>
                    <td style={{ padding: '1rem' }}>{b.produceType}</td>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{b.weightKg} kg</td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{b.grade}</td>
                    <td style={{ padding: '1rem' }}>
                      <span className="badge badge-info">{b.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
