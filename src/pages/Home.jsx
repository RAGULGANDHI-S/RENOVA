import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, LogIn, AlertOctagon, CheckCircle, Leaf, Shield, Cpu, TrendingUp } from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import FloatingParticles from '../components/FloatingParticles';
import WasteDetection from '../components/WasteDetection';
import SmartSorting from '../components/SmartSorting';
import Workflow from '../components/Workflow';
import Impact from '../components/Impact';
import TechArchitecture from '../components/TechArchitecture';
import InvestorDeckSummary from '../components/InvestorDeckSummary';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Dynamic 3D Three.js & Floating Backgrounds */}
      <ThreeBackground />
      <FloatingParticles />

      <Navbar />

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Tagline Badge */}
          <div className="deck-badge" style={{ marginBottom: '1.8rem' }}>
            <Leaf size={18} /> Circular Economy Platform 2.0
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto 1.5rem auto'
          }}>
            Transform Waste Into <br className="desktop-only" />
            <span className="gradient-text">Sustainable Growth</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: 'var(--text-muted)',
            maxWidth: '780px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6
          }}>
            AI powered waste classification and organic fertilizer ecosystem
          </p>

          {/* Call to Action Buttons */}
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/presentation" className="btn-primary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
              Launch Keynote Deck <ArrowRight size={20} />
            </Link>
            <Link to="/login" className="btn-secondary" style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}>
              <LogIn size={20} /> Login to Portals
            </Link>
          </div>

          {/* Quick Stats Pill Header */}
          <div className="glass-panel" style={{
            marginTop: '4rem',
            padding: '1.5rem 2rem',
            maxWidth: '900px',
            margin: '4rem auto 0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center',
            borderColor: 'rgba(56, 189, 248, 0.3)'
          }}>
            <div>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: '#4ade80' }}>98.4%</span>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI Detection Precision</span>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: '#22d3ee' }}>140+ Tons</span>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Organic Waste Recycled</span>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: '#8b5cf6' }}>1,280+</span>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Farms Powered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Problem vs RENOVA Solution Section */}
      <section id="about" style={{ padding: '5rem 0', background: 'rgba(4, 8, 22, 0.7)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-warning" style={{ marginBottom: '0.8rem' }}>
              Why RENOVA Matters
            </span>
            <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 1rem 0' }}>
              Solving the <span className="gradient-text">Urban Organic Waste Crisis</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Traditional linear waste models overflow landfills while farmers struggle with degraded soil and expensive chemical fertilizers.
            </p>
          </div>

          <div className="grid-2">
            {/* Problem Card */}
            <div className="glass-card" style={{ padding: '2.5rem', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <AlertOctagon size={28} color="#ef4444" />
                <h3 style={{ fontSize: '1.5rem', color: '#f87171' }}>The Waste Problem</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span> Over 1.3 billion tons of food waste rots in landfills globally each year.
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span> Decomposing organic waste emits potent Methane (CH4) gas driving global warming.
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span> Commercial hotels and restaurants pay high hauling costs without sustainability metrics.
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="glass-card" style={{ padding: '2.5rem', borderColor: 'rgba(34, 197, 94, 0.5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <CheckCircle size={28} color="#22c55e" />
                <h3 style={{ fontSize: '1.5rem', color: '#4ade80' }}>The RENOVA Solution</h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', gap: '0.8rem', color: '#fff', fontSize: '0.95rem' }}>
                  <span style={{ color: '#22c55e', fontWeight: 900 }}>✓</span> AI spectral scanning sorts organic materials at the point of collection instantly.
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', color: '#fff', fontSize: '0.95rem' }}>
                  <span style={{ color: '#22c55e', fontWeight: 900 }}>✓</span> Anaerobic fermentation converts waste into premium Bio-NPK organic fertilizer.
                </li>
                <li style={{ display: 'flex', gap: '0.8rem', color: '#fff', fontSize: '0.95rem' }}>
                  <span style={{ color: '#22c55e', fontWeight: 900 }}>✓</span> Farmers receive affordable eco-fertilizer, boosting crop yield by up to 35%.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Components */}
      <WasteDetection />
      <SmartSorting />
      <Workflow />
      <Impact />

      {/* Agriculture Benefits Highlight Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="glass-panel" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            borderColor: 'rgba(56, 189, 248, 0.3)'
          }}>
            <div>
              <span className="badge badge-organic" style={{ marginBottom: '1rem' }}>
                <TrendingUp size={14} /> Agriculture Impact
              </span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                Empowering Farmers With <br />
                <span className="gradient-text">Bio-Active Bio-Fertilizer</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Our bio-fertilizers replenish essential N-P-K nutrient ratios, restore earthworm soil microbiota, and retain 40% more soil moisture during heatwaves.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ background: 'rgba(4, 8, 22, 0.85)', padding: '0.8rem 1.2rem', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.2)' }}>
                  <span style={{ color: '#4ade80', fontWeight: 900, fontSize: '1.4rem' }}>+35%</span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Higher Yield</span>
                </div>
                <div style={{ background: 'rgba(4, 8, 22, 0.85)', padding: '0.8rem 1.2rem', borderRadius: '10px', border: '1px solid rgba(56,189,248,0.2)' }}>
                  <span style={{ color: '#38bdf8', fontWeight: 900, fontSize: '1.4rem' }}>-50%</span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Cost vs Synthetic</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
                alt="Green sustainable farm"
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-glow)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Keynote Architecture & Pitch Sections */}
      <TechArchitecture />
      <InvestorDeckSummary />

      <Footer />
    </div>
  );
};

export default Home;
