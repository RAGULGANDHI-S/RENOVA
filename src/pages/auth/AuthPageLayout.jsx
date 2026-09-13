import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export const AuthPageLayout = ({ role, title, subtitle, color, iconName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(role, email || `${role}@renova-ai.com`);
      window.location.hash = `#/${role}-dashboard`;
    }, 600);
  };

  const handleQuickDemoLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login(role, `${role}.demo@renova-ai.com`);
      window.location.hash = `#/${role}-dashboard`;
    }, 400);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#090d16',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div style={{ width: '100%', maxWidth: '440px', position: 'relative', zIndex: 2 }}>
        {/* Logo Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#090D16" strokeWidth="2.5">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
            </div>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>
              RENOVA<span style={{ color: '#10B981' }}>.AI</span>
            </span>
          </a>
        </div>

        {/* Card */}
        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', border: `1px solid ${color}40` }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: `${color}20`,
              color: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto',
              fontWeight: 800
            }}>
              {role.charAt(0).toUpperCase()}
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.3rem' }}>
              {title}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
              {subtitle}
            </p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'grid', gap: '1.2rem' }}>
            <div>
              <label style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem', fontWeight: 500 }}>
                Enterprise Email
              </label>
              <input
                required
                type="email"
                placeholder={`${role}@renova-ai.com`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '10px',
                  padding: '0.75rem 1rem',
                  color: '#fff',
                  fontSize: '0.92rem'
                }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <label style={{ fontSize: '0.82rem', color: '#94a3b8', fontWeight: 500 }}>Password</label>
                <a href="#" style={{ fontSize: '0.78rem', color: '#06B6D4' }}>Forgot Password?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    fontSize: '0.92rem'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <input type="checkbox" id="remember" defaultChecked style={{ accentColor: '#10B981' }} />
              <label htmlFor="remember">Remember session for 30 days</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
            >
              {loading ? 'Authenticating...' : `Sign In to ${title}`}
            </button>
          </form>

          <div style={{ textAlign: 'center', margin: '1.5rem 0', color: '#64748b', fontSize: '0.8rem' }}>
            OR INSTANT DEMO ACCESS
          </div>

          <button
            onClick={handleQuickDemoLogin}
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center', borderColor: color }}
          >
            Instant Demo Login ({role.toUpperCase()})
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="#" style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
            ← Back to RENOVA Home
          </a>
        </div>
      </div>
    </div>
  );
};
