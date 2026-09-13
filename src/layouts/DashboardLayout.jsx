import React from 'react';
import { useAuth } from '../context/AuthContext';

export const DashboardLayout = ({ title, role, children }) => {
  const { user, logout } = useAuth();

  const roleLinks = [
    { title: 'Global Admin', path: '#/admin-dashboard', role: 'admin' },
    { title: 'Hotel Partner', path: '#/hotel-dashboard', role: 'hotel' },
    { title: 'Restaurant Hub', path: '#/restaurant-dashboard', role: 'restaurant' },
    { title: 'Vendor Market', path: '#/vendor-dashboard', role: 'vendor' },
    { title: 'Farmer Store', path: '#/farmer-dashboard', role: 'farmer' },
    { title: 'Fleet Logistics', path: '#/delivery-dashboard', role: 'delivery' }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#070a12', color: '#f8fafc' }}>
      
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        background: '#0a0e1a',
        borderRight: '1px solid rgba(255,255,255,0.08)',
        padding: '1.8rem 1.2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexShrink: 0
      }}>
        <div>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', marginBottom: '2.5rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #10B981, #06B6D4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#090D16" strokeWidth="2.5">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
            </div>
            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>
              RENOVA<span style={{ color: '#10B981' }}>.AI</span>
            </span>
          </a>

          <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.8rem', paddingLeft: '0.5rem' }}>
            Switch Role Dashboard
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {roleLinks.map((link) => (
              <a
                key={link.role}
                href={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: role === link.role ? '#34d399' : '#94a3b8',
                  background: role === link.role ? 'rgba(16, 185, 129, 0.12)' : 'transparent',
                  border: role === link.role ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: role === link.role ? '#10B981' : '#475569' }} />
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* User Card */}
        <div className="glass-panel" style={{ padding: '1rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.8rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#090D16' }}>
              {user ? user.role.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff' }}>
                {user ? user.name : 'Enterprise User'}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {user ? user.organization : 'RENOVA Network'}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              logout();
              window.location.hash = '#';
            }}
            style={{
              width: '100%',
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#f87171',
              padding: '0.5rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2rem 2.5rem', overflowY: 'auto' }}>
        {/* Top Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          paddingBottom: '1.2rem'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Live Telemetry Console
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
              {title}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="badge-glow">
              <span className="glow-dot" />
              <span>IoT Network Active</span>
            </div>
            <a href="#" className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
              Back to Home
            </a>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
};
