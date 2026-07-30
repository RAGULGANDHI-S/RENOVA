import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Leaf, Shield, Hotel, Utensils, Store, Sprout, Truck, Lock, Mail, ArrowRight } from 'lucide-react';
import { loginUser, DEMO_USERS } from '../services/auth';
import ThreeBackground from '../components/ThreeBackground';
import FloatingParticles from '../components/FloatingParticles';

const Login = () => {
  const [selectedRole, setSelectedRole] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('demo1234');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const roleOptions = [
    { key: 'admin', label: 'Admin', icon: <Shield size={20} />, path: '/admin', desc: 'System governance & overall metrics' },
    { key: 'hotel', label: 'Hotel', icon: <Hotel size={20} />, path: '/hotel', desc: 'Commercial hotel waste pickup logging' },
    { key: 'restaurant', label: 'Restaurant', icon: <Utensils size={20} />, path: '/restaurant', desc: 'Kitchen food waste schedule & metrics' },
    { key: 'vendor', label: 'Vendor', icon: <Store size={20} />, path: '/vendor', desc: 'Produce wholesale market waste hub' },
    { key: 'farmer', label: 'Farmer', icon: <Sprout size={20} />, path: '/farmer', desc: 'Bio-fertilizer catalog & soil ordering' },
    { key: 'delivery', label: 'Delivery Partner', icon: <Truck size={20} />, path: '/delivery', desc: 'EV Logistics fleet & route tracking' }
  ];

  const handleSelectRole = (key) => {
    setSelectedRole(key);
    if (DEMO_USERS[key]) {
      setEmail(DEMO_USERS[key].email);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await loginUser(selectedRole, email, password);
    setLoading(false);

    if (result.success) {
      const targetPath = roleOptions.find(r => r.key === selectedRole)?.path || '/admin';
      navigate(targetPath);
    }
  };

  const handleQuickDemo = async (roleKey) => {
    setSelectedRole(roleKey);
    setLoading(true);
    const demoUser = DEMO_USERS[roleKey];
    const result = await loginUser(roleKey, demoUser.email, 'demo1234');
    setLoading(false);
    if (result.success) {
      const targetPath = roleOptions.find(r => r.key === roleKey)?.path || '/admin';
      navigate(targetPath);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      position: 'relative'
    }}>
      <ThreeBackground />
      <FloatingParticles />

      <div className="glass-panel" style={{
        maxWidth: '900px',
        width: '100%',
        padding: '2.5rem',
        position: 'relative',
        zIndex: 2,
        borderRadius: '24px'
      }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '1rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Leaf size={24} color="#052e16" />
            </div>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>RENOVA</span>
          </Link>
          <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>Role-Based Portal Authentication</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
            Select your stakeholder account type to access your tailored dashboard
          </p>
        </div>

        {/* Role Selection Grid */}
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Select Account Role:
          </label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '0.75rem'
          }}>
            {roleOptions.map((role) => {
              const isSelected = selectedRole === role.key;
              return (
                <button
                  key={role.key}
                  type="button"
                  onClick={() => handleSelectRole(role.key)}
                  style={{
                    padding: '0.8rem 0.5rem',
                    borderRadius: '12px',
                    border: isSelected ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                    background: isSelected ? 'rgba(34, 197, 94, 0.2)' : 'rgba(10, 18, 13, 0.6)',
                    color: isSelected ? '#4ade80' : 'var(--text-main)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ color: isSelected ? '#4ade80' : 'var(--text-muted)' }}>{role.icon}</div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Login Form & Quick Demo Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* Main Credentials Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="email"
                  required
                  value={email || DEMO_USERS[selectedRole]?.email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.8rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(10, 18, 13, 0.8)',
                    color: '#fff',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.8rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'rgba(10, 18, 13, 0.8)',
                    color: '#fff',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', padding: '0.85rem', marginTop: '0.5rem', fontSize: '1rem' }}
            >
              {loading ? 'Authenticating...' : `Enter ${selectedRole.toUpperCase()} Portal`} <ArrowRight size={18} />
            </button>
          </form>

          {/* Quick Demo Shortcuts */}
          <div style={{
            background: 'rgba(10, 18, 13, 0.6)',
            border: '1px solid rgba(34, 197, 94, 0.15)',
            borderRadius: '16px',
            padding: '1.25rem'
          }}>
            <h4 style={{ fontSize: '0.9rem', color: '#4ade80', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              ⚡ Quick Demo Shortcuts:
            </h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Instantly test any role dashboard with pre-loaded demo data:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {roleOptions.map((r) => (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => handleQuickDemo(r.key)}
                  className="btn-secondary"
                  style={{
                    justifyContent: 'space-between',
                    padding: '0.45rem 0.8rem',
                    fontSize: '0.8rem',
                    borderRadius: '8px'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {r.icon} {r.label}
                  </span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Access {r.path}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
