import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform AI', href: '#detection' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Environmental Impact', href: '#impact' },
    { name: 'Partners', href: '#partners' },
    { name: 'FAQ', href: '#faq' }
  ];

  const roles = [
    { title: 'Platform Admin', path: '#/auth/admin', role: 'admin' },
    { title: 'Hotel Partner', path: '#/auth/hotel', role: 'hotel' },
    { title: 'Restaurant Hub', path: '#/auth/restaurant', role: 'restaurant' },
    { title: 'Recycling Vendor', path: '#/auth/vendor', role: 'vendor' },
    { title: 'Organic Farmer', path: '#/auth/farmer', role: 'farmer' },
    { title: 'Logistics Partner', path: '#/auth/delivery', role: 'delivery' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(9, 13, 22, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.8rem 0' : '1.2rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#090D16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
            </svg>
          </div>
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>
              RENOVA<span style={{ color: '#10B981' }}>.AI</span>
            </span>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '-4px' }}>
              Circular Intelligence
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', '@media (max-width: 900px)': { display: 'none' } }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#94a3b8',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#34d399')}
              onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions & Role Login */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <a
                href={`#/${user.role}-dashboard`}
                className="btn-primary"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
              >
                Dashboard ({user.role})
              </a>
              <button
                onClick={logout}
                className="btn-secondary"
                style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setLoginDropdown(!loginDropdown)}
                className="btn-primary"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}
              >
                <span>Platform Login</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Login Dropdown */}
              {loginDropdown && (
                <div
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    top: '120%',
                    right: 0,
                    width: '260px',
                    borderRadius: '16px',
                    padding: '0.75rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    zIndex: 1000
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, padding: '0.4rem 0.6rem', textTransform: 'uppercase' }}>
                    Select Enterprise Role
                  </div>
                  {roles.map((roleItem) => (
                    <a
                      key={roleItem.role}
                      href={roleItem.path}
                      onClick={() => setLoginDropdown(false)}
                      style={{
                        display: 'block',
                        padding: '0.6rem 0.8rem',
                        borderRadius: '8px',
                        color: '#f8fafc',
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => (e.target.style.background = 'rgba(16, 185, 129, 0.15)')}
                      onMouseLeave={(e) => (e.target.style.background = 'transparent')}
                    >
                      {roleItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
