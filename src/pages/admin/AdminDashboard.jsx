import React, { useState } from 'react';
import { Shield, Trash2, Users, Sprout, TrendingUp, Activity, CheckCircle, Server, FileText, ArrowUpRight, LogOut, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mockDataStore } from '../../services/api';
import { logoutUser, getStoredUser } from '../../services/auth';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const user = getStoredUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: '#fff' }}>
      {/* Header Bar */}
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
            <ArrowLeft size={16} /> Back to Site
          </Link>
          <div style={{ height: '20px', width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield size={22} color="#22c55e" />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>RENOVA System Governance</h2>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src={user?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80'} alt="Admin" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{user?.name || 'Admin'}</span>
          </div>
          <button onClick={handleLogout} className="btn-outline" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
            <LogOut size={14} /> Exit
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container" style={{ padding: '2rem 1.5rem' }}>
        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['overview', 'users', 'facilities', 'reports'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                border: activeTab === tab ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                background: activeTab === tab ? 'rgba(34, 197, 94, 0.2)' : 'rgba(15, 26, 19, 0.6)',
                color: activeTab === tab ? '#4ade80' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.88rem',
                fontWeight: 600,
                textTransform: 'capitalize'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4 Primary Key Performance Indicators */}
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Waste Collected</span>
              <Trash2 size={20} color="#22c55e" />
            </div>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
              {(mockDataStore.stats.totalWasteCollectedKg / 1000).toFixed(1)} Tons
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#4ade80', fontSize: '0.78rem', marginTop: '0.4rem' }}>
              <ArrowUpRight size={14} /> +14.2% from last month
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Active Registered Users</span>
              <Users size={20} color="#38bdf8" />
            </div>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
              {mockDataStore.stats.activeHotels + mockDataStore.stats.activeRestaurants + mockDataStore.stats.activeVendors + mockDataStore.stats.farmersSupported}
            </span>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              Across 6 stakeholder roles
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bio-Fertilizer Produced</span>
              <Sprout size={20} color="#eab308" />
            </div>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
              {(mockDataStore.stats.fertilizerProducedKg / 1000).toFixed(1)} Tons
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#4ade80', fontSize: '0.78rem', marginTop: '0.4rem' }}>
              <ArrowUpRight size={14} /> 92% yield efficiency
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Carbon Footprint Offset</span>
              <TrendingUp size={20} color="#14b8a6" />
            </div>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
              {(mockDataStore.stats.co2SavedKg / 1000).toFixed(1)} Tons
            </span>
            <div style={{ fontSize: '0.78rem', color: '#2dd4bf', marginTop: '0.4rem' }}>
              Methane reduction verified
            </div>
          </div>
        </div>

        {/* Analytics & Activity Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Collection Analytics Graph Simulation */}
          <div className="glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>Weekly Waste Intake Trends</h3>
              <span className="badge badge-organic">Live Feed</span>
            </div>

            {/* Custom Bar Graph */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '180px', paddingTop: '1rem' }}>
              {[
                { day: 'Mon', organic: 65, inorganic: 20 },
                { day: 'Tue', organic: 80, inorganic: 15 },
                { day: 'Wed', organic: 95, inorganic: 25 },
                { day: 'Thu', organic: 70, inorganic: 18 },
                { day: 'Fri', organic: 110, inorganic: 30 },
                { day: 'Sat', organic: 130, inorganic: 35 },
                { day: 'Sun', organic: 85, inorganic: 22 }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '140px' }}>
                    <div style={{ width: '14px', height: `${item.organic}%`, background: 'linear-gradient(180deg, #4ade80 0%, #22c55e 100%)', borderRadius: '4px 4px 0 0' }} />
                    <div style={{ width: '14px', height: `${item.inorganic}%`, background: 'linear-gradient(180deg, #f87171 0%, #ef4444 100%)', borderRadius: '4px 4px 0 0' }} />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.day}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.2rem', fontSize: '0.8rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4ade80' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#22c55e' }} /> Organic Waste
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f87171' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '2px', background: '#ef4444' }} /> Recyclable Synthetics
              </span>
            </div>
          </div>

          {/* Real-time Activity Log */}
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1.2rem' }}>
              System Activity Audit Trail
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { time: '10 mins ago', title: 'New Organic Waste Batch Uploaded', user: 'Grand Eco Hotel (350kg)', type: 'Intake' },
                { time: '25 mins ago', title: 'Bio-NPK Fertilizer Batch Released', user: 'Digestor Unit B (1.2 Tons)', type: 'Production' },
                { time: '1 hour ago', title: 'Farmer Bulk Order Confirmed', user: 'David Miller Farms (500kg)', type: 'Order' },
                { time: '2 hours ago', title: 'EV Fleet Pickup Completed', user: 'Driver Alex Rivers (Route #4)', type: 'Logistics' }
              ].map((log, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', paddingBottom: '0.8rem', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <Activity size={18} color="#22c55e" style={{ marginTop: '0.2rem' }} />
                  <div>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', display: 'block' }}>{log.title}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{log.user} • {log.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
