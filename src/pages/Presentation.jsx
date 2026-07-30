import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, Home as HomeIcon, 
  Sparkles, Leaf, Cpu, Layers, Activity, CheckCircle, Shield, Award, 
  ArrowRight, RefreshCw, AlertOctagon, CheckCircle2, Building2, GitFork, 
  Recycle, Sprout, Tractor, Trash2, CloudOff, Users, Trees, Car, Droplets, 
  TrendingUp, Wifi, Database, Zap, Play, Pause
} from 'lucide-react';
import ThreeBackground from '../components/ThreeBackground';
import FloatingParticles from '../components/FloatingParticles';
import WasteDetection from '../components/WasteDetection';
import SmartSorting from '../components/SmartSorting';
import Workflow from '../components/Workflow';
import Impact from '../components/Impact';
import TechArchitecture from '../components/TechArchitecture';
import InvestorDeckSummary from '../components/InvestorDeckSummary';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const navigate = useNavigate();

  const totalSlides = 10;

  const slidesMeta = [
    { title: 'Title & Vision', icon: <Leaf size={16} /> },
    { title: 'Problem vs Solution', icon: <AlertOctagon size={16} /> },
    { title: 'AI Computer Vision Engine', icon: <Cpu size={16} /> },
    { title: 'Bio-Conversion Pipeline', icon: <Layers size={16} /> },
    { title: 'Circular System Workflow', icon: <GitFork size={16} /> },
    { title: 'Sustainability Impact', icon: <Trash2 size={16} /> },
    { title: 'Agriculture Impact', icon: <Sprout size={16} /> },
    { title: 'Stakeholder Portals', icon: <Building2 size={16} /> },
    { title: 'Technology Architecture', icon: <Wifi size={16} /> },
    { title: 'Investor Deck Summary', icon: <Award size={16} /> }
  ];

  // Navigation handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // AutoPlay Timer
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-dark)',
      color: 'var(--text-main)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {/* 3D Neural Canvas Background */}
      <ThreeBackground />
      <FloatingParticles />

      {/* Top Presentation Bar */}
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(4, 8, 22, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', textDecoration: 'none' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg, #38bdf8 0%, #22c55e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Leaf size={20} color="#040816" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '0.05em' }} className="gradient-text">RENOVA</span>
          </Link>

          <span className="deck-badge" style={{ fontSize: '0.75rem', padding: '0.3rem 0.8rem' }}>
            <Sparkles size={14} color="#22d3ee" /> Keynote Presentation Deck
          </span>
        </div>

        {/* Slide Selector Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="btn-outline"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            {autoPlay ? <Pause size={14} color="#22c55e" /> : <Play size={14} color="#38bdf8" />}
            {autoPlay ? 'Pause Auto' : 'Auto Play'}
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="btn-outline"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            {isFullscreen ? 'Exit' : 'Fullscreen (F)'}
          </button>

          <Link to="/" className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
            <HomeIcon size={14} /> Return to Site
          </Link>
        </div>
      </header>

      {/* Main Slide Viewer Canvas */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.5rem', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          {/* SLIDE 1: Title & Hero */}
          {currentSlide === 0 && (
            <div className="slide-view" style={{ textAlign: 'center' }}>
              <div className="deck-badge" style={{ marginBottom: '1.8rem', alignSelf: 'center' }}>
                <Leaf size={18} /> Circular Economy Platform 2.0
              </div>
              
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Transform Waste Into <br />
                <span className="gradient-text">Sustainable Growth</span>
              </h1>

              <p style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
                AI powered waste classification and organic fertilizer ecosystem
              </p>

              <div className="glass-panel" style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                textAlign: 'center',
                borderColor: 'rgba(56, 189, 248, 0.3)'
              }}>
                <div>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#4ade80', display: 'block' }}>98.4%</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>AI Detection Precision</span>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#22d3ee', display: 'block' }}>140+ Tons</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Organic Waste Recycled</span>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, color: '#8b5cf6', display: 'block' }}>1,280+</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Farms Powered</span>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: Problem vs Solution */}
          {currentSlide === 1 && (
            <div className="slide-view">
              <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
                <span className="badge badge-warning" style={{ marginBottom: '0.8rem' }}>
                  Why RENOVA Matters
                </span>
                <h2 style={{ fontSize: '2.8rem', marginBottom: '0.8rem' }}>
                  Solving the <span className="gradient-text">Urban Organic Waste Crisis</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                  Traditional linear waste models overflow landfills while farmers struggle with degraded soil and expensive chemical fertilizers.
                </p>
              </div>

              <div className="grid-2">
                <div className="glass-card" style={{ padding: '2.5rem', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <AlertOctagon size={32} color="#ef4444" />
                    <h3 style={{ fontSize: '1.8rem', color: '#f87171' }}>The Waste Problem</h3>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                      <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span> Over 1.3 billion tons of food waste rots in landfills globally each year.
                    </li>
                    <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                      <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span> Decomposing organic waste emits potent Methane (CH4) gas driving global warming.
                    </li>
                    <li style={{ display: 'flex', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                      <span style={{ color: '#ef4444', fontWeight: 900 }}>✕</span> Commercial hotels and restaurants pay high hauling costs without sustainability metrics.
                    </li>
                  </ul>
                </div>

                <div className="glass-card" style={{ padding: '2.5rem', borderColor: 'rgba(34, 197, 94, 0.5)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <CheckCircle size={32} color="#22c55e" />
                    <h3 style={{ fontSize: '1.8rem', color: '#4ade80' }}>The RENOVA Solution</h3>
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <li style={{ display: 'flex', gap: '0.8rem', color: '#fff', fontSize: '1.05rem' }}>
                      <span style={{ color: '#22c55e', fontWeight: 900 }}>✓</span> AI spectral scanning sorts organic materials at the point of collection instantly.
                    </li>
                    <li style={{ display: 'flex', gap: '0.8rem', color: '#fff', fontSize: '1.05rem' }}>
                      <span style={{ color: '#22c55e', fontWeight: 900 }}>✓</span> Anaerobic fermentation converts waste into premium Bio-NPK organic fertilizer.
                    </li>
                    <li style={{ display: 'flex', gap: '0.8rem', color: '#fff', fontSize: '1.05rem' }}>
                      <span style={{ color: '#22c55e', fontWeight: 900 }}>✓</span> Farmers receive affordable eco-fertilizer, boosting crop yield by up to 35%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: AI Computer Vision Scanner */}
          {currentSlide === 2 && (
            <div className="slide-view">
              <WasteDetection />
            </div>
          )}

          {/* SLIDE 4: Smart Bio-Conversion Pipeline */}
          {currentSlide === 3 && (
            <div className="slide-view">
              <SmartSorting />
            </div>
          )}

          {/* SLIDE 5: System Workflow */}
          {currentSlide === 4 && (
            <div className="slide-view">
              <Workflow />
            </div>
          )}

          {/* SLIDE 6: Environmental Impact */}
          {currentSlide === 5 && (
            <div className="slide-view">
              <Impact />
            </div>
          )}

          {/* SLIDE 7: Agriculture Impact */}
          {currentSlide === 6 && (
            <div className="slide-view">
              <div className="glass-panel" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}>
                <div>
                  <span className="badge badge-organic" style={{ marginBottom: '1rem' }}>
                    <TrendingUp size={14} /> Agriculture Impact
                  </span>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>
                    Empowering Farmers With <br />
                    <span className="gradient-text">Bio-Active Bio-Fertilizer</span>
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '2rem' }}>
                    Our bio-fertilizers replenish essential N-P-K nutrient ratios, restore earthworm soil microbiota, and retain 40% more soil moisture during heatwaves.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                    <div style={{ background: 'rgba(4, 8, 22, 0.85)', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid rgba(34,197,94,0.3)' }}>
                      <span style={{ color: '#4ade80', fontWeight: 900, fontSize: '1.8rem' }}>+35%</span>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Higher Yield</span>
                    </div>
                    <div style={{ background: 'rgba(4, 8, 22, 0.85)', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid rgba(56,189,248,0.3)' }}>
                      <span style={{ color: '#38bdf8', fontWeight: 900, fontSize: '1.8rem' }}>-50%</span>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cost vs Synthetic</span>
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
          )}

          {/* SLIDE 8: Stakeholder Portals */}
          {currentSlide === 7 && (
            <div className="slide-view">
              <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
                <div className="deck-badge" style={{ marginBottom: '0.8rem' }}>
                  <Building2 size={16} /> Stakeholder Ecosystem
                </div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>
                  Connected Multi-Tenant <span className="gradient-text">Role Portals</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                  Empowering every link in the circular supply chain with dedicated real-time telemetry dashboards.
                </p>
              </div>

              <div className="grid-3">
                {[
                  { role: 'Hotel Portal', desc: 'Commercial kitchen waste logging, carbon offset tracking, and ESG compliance certificates.', link: '/hotel', icon: '🏨', color: '#38bdf8' },
                  { role: 'Restaurant Portal', desc: 'Real-time waste weight monitoring, automated pickup dispatch, and eco-credit rewards.', link: '/restaurant', icon: '🍽️', color: '#22d3ee' },
                  { role: 'Vendor Portal', desc: 'Wholesale organic waste trading, segregation analytics, and raw biomass supply management.', link: '/vendor', icon: '🏬', color: '#22c55e' },
                  { role: 'Eco-Farmer Portal', desc: 'Bio-NPK organic fertilizer ordering, soil telemetry tracking, and crop yield calculator.', link: '/farmer', icon: '🌾', color: '#8b5cf6' },
                  { role: 'Delivery Fleet Portal', desc: 'EV route optimization, dynamic pickup scheduling, and IoT weight verification.', link: '/delivery', icon: '🚚', color: '#f59e0b' },
                  { role: 'Admin Command', desc: 'City-wide circular economy governance, bioreactor telemetry, and system analytics.', link: '/admin', icon: '🛡️', color: '#ef4444' }
                ].map((portal, i) => (
                  <div key={i} className="glass-card" style={{ padding: '1.5rem', borderColor: portal.color }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>{portal.icon}</div>
                    <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.4rem' }}>{portal.role}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                      {portal.desc}
                    </p>
                    <Link to={portal.link} className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', width: '100%' }}>
                      Access Portal <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 9: System Architecture */}
          {currentSlide === 8 && (
            <div className="slide-view">
              <TechArchitecture />
            </div>
          )}

          {/* SLIDE 10: Investor Summary */}
          {currentSlide === 9 && (
            <div className="slide-view">
              <InvestorDeckSummary />
            </div>
          )}

        </div>
      </main>

      {/* Bottom Keynote Controls & Slide Thumbnails */}
      <footer style={{
        padding: '1rem 2rem',
        background: 'rgba(4, 8, 22, 0.9)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(56, 189, 248, 0.2)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem'
      }}>
        {/* Thumbnail Dots & Title Selector */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.3rem' }}>
          {slidesMeta.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '20px',
                border: currentSlide === idx ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                background: currentSlide === idx ? 'rgba(56, 189, 248, 0.2)' : 'rgba(11, 18, 32, 0.6)',
                color: currentSlide === idx ? '#38bdf8' : 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              {slide.icon} <span>Slide {idx + 1}: {slide.title}</span>
            </button>
          ))}
        </div>

        {/* Prev / Next & Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            onClick={prevSlide}
            className="btn-secondary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            <ChevronLeft size={18} /> Previous
          </button>

          {/* Slide Progress Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--neon-cyan)' }}>
              Slide {currentSlide + 1} of {totalSlides}
            </span>
            <div style={{ width: '160px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{
                width: `${((currentSlide + 1) / totalSlides) * 100}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #38bdf8 0%, #22c55e 100%)',
                borderRadius: '3px',
                transition: 'width 0.3s ease'
              }} />
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;
