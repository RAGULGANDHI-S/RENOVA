import React, { useState } from 'react';
import { Upload, Sparkles, CheckCircle2, AlertTriangle, RefreshCw, Cpu, Layers, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_WASTE_DATA, mockAnalyzeImage } from '../utils/helpers';

const WasteDetection = () => {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_WASTE_DATA[0]);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(SAMPLE_WASTE_DATA[0]);
  const [customImage, setCustomImage] = useState(null);

  const handleRunAnalysis = async (itemToAnalyze) => {
    setAnalyzing(true);
    setResult(null);

    const analyzed = await mockAnalyzeImage(itemToAnalyze);
    setAnalyzing(false);
    setResult(analyzed);

    if (analyzed.isOrganic) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#22c55e', '#14b8a6', '#4ade80']
      });
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomImage(url);
      handleRunAnalysis({ name: file.name, file, imageUrl: url });
    }
  };

  return (
    <section id="ai-detection" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '99px',
            background: 'rgba(34, 197, 94, 0.12)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            color: '#4ade80',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            <Sparkles size={16} /> Computer Vision AI Engine
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Instant <span className="gradient-text">AI Waste Classification</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Our deep learning neural networks analyze municipal and commercial waste streams in real-time, categorizing organic vs inorganic composition with over 98% precision.
          </p>
        </div>

        {/* Demo Scanner Interface */}
        <div className="glass-panel" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Sample Selectors */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Choose a Sample Waste Image or Upload Your Own:
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {SAMPLE_WASTE_DATA.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => {
                    setSelectedSample(sample);
                    setCustomImage(null);
                    handleRunAnalysis(sample);
                  }}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '10px',
                    border: selectedSample?.id === sample.id && !customImage
                      ? '1px solid #22c55e'
                      : '1px solid rgba(255,255,255,0.1)',
                    background: selectedSample?.id === sample.id && !customImage
                      ? 'rgba(34, 197, 94, 0.2)'
                      : 'rgba(15, 26, 19, 0.6)',
                    color: selectedSample?.id === sample.id && !customImage ? '#4ade80' : 'var(--text-main)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                  }}
                >
                  {sample.name}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {/* Image Preview & Upload Box */}
            <div>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px dashed var(--border-color)',
                background: 'rgba(5, 12, 8, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={customImage || selectedSample.imageUrl}
                  alt="Waste to inspect"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: analyzing ? 0.4 : 1,
                    transition: 'opacity 0.3s'
                  }}
                />

                {/* AI Laser Scanner Effect */}
                {analyzing && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(34,197,94,0.3) 0%, transparent 100%)',
                    boxShadow: '0 4px 20px rgba(34, 197, 94, 0.8)',
                    animation: 'scanline 1.5s ease-in-out infinite alternate',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    zIndex: 10
                  }}>
                    <Cpu size={40} color="#4ade80" style={{ animation: 'spin 3s linear infinite' }} />
                    <span style={{ color: '#4ade80', fontWeight: 600, fontSize: '0.9rem', textShadow: '0 0 10px #22c55e' }}>
                      Neural Model Analyzing Spectral Density...
                    </span>
                  </div>
                )}

                {!analyzing && (
                  <label style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(7, 10, 8, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.4rem 0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: '#fff'
                  }}>
                    <Upload size={14} color="#22c55e" /> Upload Custom Photo
                    <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
                  </label>
                )}
              </div>
            </div>

            {/* AI Analysis Results Card */}
            <div>
              {result ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {/* Category & Status */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className={`badge ${result.isOrganic ? 'badge-organic' : 'badge-inorganic'}`}>
                      {result.isOrganic ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                      {result.isOrganic ? 'ORGANIC WASTE' : 'INORGANIC / RECYCLABLE'}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      ID: {result.id}
                    </span>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>{result.name}</h3>
                    <p style={{ color: 'var(--accent-teal)', fontSize: '0.9rem', fontWeight: 500 }}>
                      Category: {result.category}
                    </p>
                  </div>

                  {/* Confidence Bar */}
                  <div style={{ background: 'rgba(10, 18, 13, 0.8)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>AI Model Confidence</span>
                      <span style={{ color: '#4ade80', fontWeight: 700 }}>{result.confidence}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${result.confidence}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #22c55e 0%, #14b8a6 100%)',
                        borderRadius: '4px'
                      }} />
                    </div>
                  </div>

                  {/* Details & Compost Potential */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ background: 'rgba(20, 35, 26, 0.5)', padding: '0.8rem', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.15)' }}>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>ESTIMATED COMPOST YIELD</span>
                      <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>{result.compostYield}</span>
                    </div>
                    <div style={{ background: 'rgba(20, 35, 26, 0.5)', padding: '0.8rem', borderRadius: '10px', border: '1px solid rgba(34,197,94,0.15)' }}>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>FACILITY ROUTING</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: result.isOrganic ? '#4ade80' : '#f87171' }}>
                        {result.isOrganic ? 'Bio-Composter A2' : 'Recycling Plant B'}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {result.details}
                  </p>

                  <button
                    onClick={() => handleRunAnalysis(selectedSample)}
                    className="btn-secondary"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    <RefreshCw size={16} /> Re-scan Sample
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                  Click a sample or upload a photo to start AI detection.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteDetection;
