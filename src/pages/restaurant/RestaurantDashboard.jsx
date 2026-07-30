import React, { useState } from 'react';
import { Utensils, Calendar, Clock, ArrowLeft, LogOut, CheckCircle, Flame, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getStoredUser, logoutUser } from '../../services/auth';

const RestaurantDashboard = () => {
  const user = getStoredUser() || { name: 'Green Leaf Organic Bistro', role: 'restaurant' };
  const navigate = useNavigate();

  const [dailyLogs, setDailyLogs] = useState([
    { date: 'Today, Lunch Service', prepWaste: '18 kg', tableScraps: '24 kg', status: 'Logged', type: 'Organic' },
    { date: 'Yesterday, Dinner', prepWaste: '32 kg', tableScraps: '45 kg', status: 'Picked Up', type: 'Organic' },
    { date: 'Jul 28, Full Day', prepWaste: '40 kg', tableScraps: '52 kg', status: 'Converted to Fertilizer', type: 'Organic' }
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
            <Utensils size={22} color="#22c55e" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>Restaurant Kitchen Waste Portal</h2>
          </div>
        </div>

        <button onClick={handleLogout} className="btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
          <LogOut size={14} /> Exit
        </button>
      </header>

      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {/* Restaurant Header */}
        <div className="glass-panel" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-organic" style={{ marginBottom: '0.4rem' }}>Zero-Waste Certified Kitchen</span>
              <h1 style={{ fontSize: '1.8rem', color: '#fff' }}>{user.name}</h1>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Daily Kitchen Prep & Dining Scraps Logging</p>
            </div>
            <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', padding: '0.8rem 1.5rem', borderRadius: '12px', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Next Pickup Window</span>
              <h4 style={{ color: '#4ade80', fontSize: '1.1rem' }}>Today at 10:30 PM</h4>
            </div>
          </div>
        </div>

        {/* Kitchen Metrics */}
        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Prep Waste vs Table Waste Ratio</span>
            <h3 style={{ fontSize: '1.8rem', color: '#4ade80', margin: '0.4rem 0' }}>42% / 58%</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>High organic fraction</span>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Monthly Food Waste Diverted</span>
            <h3 style={{ fontSize: '1.8rem', color: '#38bdf8', margin: '0.4rem 0' }}>2,450 kg</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>100% bio-processed</span>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Eco-Reward Discount Earned</span>
            <h3 style={{ fontSize: '1.8rem', color: '#fde047', margin: '0.4rem 0' }}>$340.00</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>On organic farm produce purchases</span>
          </div>
        </div>

        {/* Food Waste Daily Tracking Table */}
        <div className="glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Daily Kitchen Waste Log</h3>
            <button className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
              <Plus size={16} /> Add Shift Log
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Shift / Date</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Kitchen Prep Waste</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Plate Scraps</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Waste Type</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Collection Status</th>
                </tr>
              </thead>
              <tbody>
                {dailyLogs.map((log, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{log.date}</td>
                    <td style={{ padding: '1rem', color: '#4ade80' }}>{log.prepWaste}</td>
                    <td style={{ padding: '1rem', color: '#2dd4bf' }}>{log.tableScraps}</td>
                    <td style={{ padding: '1rem' }}>
                      <span className="badge badge-organic">{log.type}</span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span className="badge badge-info">{log.status}</span>
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

export default RestaurantDashboard;
