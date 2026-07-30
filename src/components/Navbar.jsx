import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, LogIn, User, LogOut, ChevronDown, Sparkles } from 'lucide-react';
import { getStoredUser, logoutUser } from '../services/auth';
import { getRolePath } from '../utils/helpers';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrentUser(getStoredUser());
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setDropdownOpen(false);
    navigate('/');
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
      background: isScrolled ? 'rgba(4, 8, 22, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #38bdf8 0%, #22c55e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)'
          }}>
            <Leaf size={24} color="#040816" strokeWidth={2.5} />
          </div>
          <div>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              letterSpacing: '0.05em',
              background: 'linear-gradient(135deg, #ffffff 0%, #22c55e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              RENOVA
            </span>
            <span style={{
              display: 'block',
              fontSize: '0.65rem',
              color: 'var(--neon-cyan)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginTop: '-4px'
            }}>
              Circular AI Ecosystem
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-links">
          <Link to="/presentation" className="deck-badge" style={{ textDecoration: 'none' }}>
            <Sparkles size={15} color="#22d3ee" /> Keynote Deck Mode
          </Link>
          <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
            Home
          </Link>
          <button 
            onClick={() => scrollToSection('about')} 
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 500, fontSize: '1rem' }}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('workflow')} 
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 500, fontSize: '1rem' }}
          >
            Workflow
          </button>
          <button 
            onClick={() => scrollToSection('ai-detection')} 
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 500, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <Sparkles size={16} color="#4ade80" /> AI Vision
          </button>
          <button 
            onClick={() => scrollToSection('impact')} 
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 500, fontSize: '1rem' }}
          >
            Impact
          </button>

          {/* User Auth state / Quick Login */}
          {currentUser ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <span>{currentUser.name.split(' ')[0]} ({currentUser.role.toUpperCase()})</span>
                <ChevronDown size={16} />
              </button>

              {dropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  width: '220px',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '14px',
                  padding: '0.5rem',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 200
                }}>
                  <Link
                    to={getRolePath(currentUser.role)}
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.6rem 1rem',
                      color: 'var(--text-bright)',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      transition: 'background 0.2s'
                    }}
                  >
                    <User size={16} color="#22c55e" /> My Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.6rem 1rem',
                      color: '#ef4444',
                      background: 'none',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn-primary">
              <LogIn size={18} /> Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-bright)',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(4, 8, 22, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          zIndex: 99
        }}>
          <Link to="/presentation" onClick={() => setMobileMenuOpen(false)} className="deck-badge">
            <Sparkles size={15} color="#22d3ee" /> Keynote Deck Mode
          </Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-bright)', textDecoration: 'none', fontSize: '1.1rem' }}>
            Home
          </Link>
          <button onClick={() => scrollToSection('about')} style={{ background: 'none', border: 'none', color: 'var(--text-bright)', textAlign: 'left', fontSize: '1.1rem' }}>
            About
          </button>
          <button onClick={() => scrollToSection('workflow')} style={{ background: 'none', border: 'none', color: 'var(--text-bright)', textAlign: 'left', fontSize: '1.1rem' }}>
            Workflow
          </button>
          <button onClick={() => scrollToSection('ai-detection')} style={{ background: 'none', border: 'none', color: 'var(--text-bright)', textAlign: 'left', fontSize: '1.1rem' }}>
            AI Waste Detection
          </button>
          <button onClick={() => scrollToSection('impact')} style={{ background: 'none', border: 'none', color: 'var(--text-bright)', textAlign: 'left', fontSize: '1.1rem' }}>
            Environmental Impact
          </button>
          
          {currentUser ? (
            <Link to={getRolePath(currentUser.role)} onClick={() => setMobileMenuOpen(false)} className="btn-primary">
              <User size={18} /> Go to {currentUser.role.toUpperCase()} Dashboard
            </Link>
          ) : (
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="btn-primary">
              <LogIn size={18} /> Login / Select Portal
            </Link>
          )}
        </div>
      )}

      {/* Embedded CSS rule for mobile responsiveness */}
      <style>{`
        @media (max-width: 868px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
