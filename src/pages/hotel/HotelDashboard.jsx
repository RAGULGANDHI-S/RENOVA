import React, { useState } from 'react';
import { Hotel, Calendar, Clock, Plus, ArrowLeft, LogOut, CheckCircle2, Truck, History } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getStoredUser, logoutUser } from '../../services/auth';
import { apiService, mockDataStore } from '../../services/api';

const HotelDashboard = () => {
  const user = getStoredUser() || { name: 'Grand Eco Luxury Resort', role: 'hotel' };
  const [pickups, setPickups] = useState(mockDataStore.pickupRequests);
  const [modalOpen, setModalOpen] = useState(false);
  const [wasteType, setWasteType] = useState('Organic Kitchen Scraps');
  const [weightKg, setWeightKg] = useState('350');
  const [preferredTime, setPreferredTime] = useState('Today, 4:00 PM');
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const handleCreateRequest = async (e) => {
    e.preventDefault();
    const res = await apiService.createPickupRequest({
      source: user.name,
      type: 'Hotel',
      wasteType,
      weightKg: Number(weightKg),
      scheduledTime: preferredTime
    });
    if (res.success) {
      setPickups([res.data, ...pickups]);
      setModalOpen(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: '#fff' }}>
      {/* Header */}
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
            <Hotel size={22} color="#22c55e" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Hotel Sustainability Portal</h2>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
          <LogOut size={14} /> Exit
        </button>
      </header>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {/* Hotel Profile Banner */}
        <div className="glass-panel" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem',
          background: 'linear-gradient(135deg, rgba(22, 38, 28, 0.8) 0%, rgba(10, 18, 13, 0.9) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=80"
              alt="Hotel Profile"
              style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover', border: '2px solid #22c55e' }}
            />
            <div>
              <span className="badge badge-organic" style={{ marginBottom: '0.3rem' }}>Gold Zero-Waste Partner</span>
              <h1 style={{ fontSize: '1.6rem', color: '#fff' }}>{user.name}</h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>742 Eco Boulevard, Bay Area • Sustainability ID: HTL-8821</p>
            </div>
          </div>

          <button onClick={() => setModalOpen(true)} className="btn-primary">
            <Plus size={18} /> Schedule New Pickup
          </button>
        </div>

        {/* Metrics Cards */}
        <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Hotel Waste Diverted</span>
            <h3 style={{ fontSize: '2rem', color: '#4ade80', margin: '0.4rem 0' }}>14,850 kg</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>85% diverted from landfill</span>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bio-Fertilizer Conversion</span>
            <h3 style={{ fontSize: '2rem', color: '#38bdf8', margin: '0.4rem 0' }}>12,620 kg</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Yielded for local organic farms</span>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Carbon Credit Balance</span>
            <h3 style={{ fontSize: '2rem', color: '#fde047', margin: '0.4rem 0' }}>4,250 PTS</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Redeemable for eco-certification</span>
          </div>
        </div>

        {/* Waste History & Active Pickups Table */}
        <div className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <History size={20} color="#22c55e" />
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Waste Collection History & Status</h3>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Showing recent requests</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Request ID</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Waste Description</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Estimated Weight</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Scheduled Time</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {pickups.map((p) => (
                  <tr key={p.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#4ade80' }}>{p.id}</td>
                    <td style={{ padding: '1rem' }}>{p.wasteType}</td>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{p.weightKg} kg</td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{p.scheduledTime}</td>
                    <td style={{ padding: '1rem' }}>
                      <span className={`badge ${p.status === 'Completed' ? 'badge-organic' : p.status === 'In-Transit' ? 'badge-info' : 'badge-warning'}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Schedule Pickup Modal */}
      {modalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}>
          <div className="glass-panel" style={{ maxWidth: '500px', width: '100%', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.2rem' }}>Request Organic Waste Pickup</h3>
            <form onSubmit={handleCreateRequest} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Waste Type</label>
                <select
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(10,18,13,0.8)', border: '1px solid var(--border-color)', color: '#fff' }}
                >
                  <option value="Organic Kitchen Scraps">Organic Kitchen Scraps</option>
                  <option value="Buffet & Banquet Food Waste">Buffet & Banquet Food Waste</option>
                  <option value="Coffee Grounds & Tea Residue">Coffee Grounds & Tea Residue</option>
                  <option value="Mixed Biodegradables">Mixed Biodegradables</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Estimated Weight (kg)</label>
                <input
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(10,18,13,0.8)', border: '1px solid var(--border-color)', color: '#fff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>Preferred Pickup Window</label>
                <input
                  type="text"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', background: 'rgba(10,18,13,0.8)', border: '1px solid var(--border-color)', color: '#fff' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" onClick={() => setModalOpen(false)} className="btn-secondary" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDashboard;
