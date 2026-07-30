import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, ShieldCheck, Heart, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, rgba(7,10,8,0.8) 0%, rgba(3,8,5,1) 100%)',
      borderTop: '1px solid rgba(34, 197, 94, 0.15)',
      padding: '4rem 0 2rem 0',
      position: 'relative',
      marginTop: '5rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Leaf size={20} color="#052e16" />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>RENOVA</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.2rem' }}>
              AI-driven circular waste management & sustainable agriculture platform closing the loop between urban waste and farm productivity.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', color: 'var(--primary)' }}>
              <Globe size={18} />
              <ShieldCheck size={18} />
              <Heart size={18} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1rem' }}>Platform Features</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="#ai-detection" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>AI Neural Waste Scanner</a></li>
              <li><a href="#smart-sorting" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Smart Segregation Pipeline</a></li>
              <li><a href="#workflow" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Circular Lifecycle Workflow</a></li>
              <li><a href="#impact" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Real-time CO2 Dashboard</a></li>
            </ul>
          </div>

          {/* Stakeholder Portals */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1rem' }}>Role Portals</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link to="/login" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Hotel Sustainability Portal</Link></li>
              <li><Link to="/login" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Restaurant Kitchen Tracker</Link></li>
              <li><Link to="/login" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Wholesale Vendor Hub</Link></li>
              <li><Link to="/login" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Farmer Bio-Fertilizer Catalog</Link></li>
              <li><Link to="/login" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>EV Fleet Logistics</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '1rem' }}>Stay Connected</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Receive monthly circular economy insights & bio-fertilizer supply reports.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Enter email address"
                style={{
                  flex: 1,
                  background: 'rgba(15,26,19,0.8)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.8rem',
                  color: '#fff',
                  fontSize: '0.85rem'
                }}
              />
              <button className="btn-primary" style={{ padding: '0.5rem 1rem' }}>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} RENOVA Sustainability Platform. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Zero Waste Certification</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
