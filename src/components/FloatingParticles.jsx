import React from 'react';

const FloatingParticles = () => {
  // Pre-generated positions for floating ambient lights
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 90 + 5}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 6 + 4}s`
  }));

  return (
    <div className="floating-particles-container" style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0
    }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(20,184,166,0.2) 70%, transparent 100%)',
            boxShadow: '0 0 12px rgba(34, 197, 94, 0.6)',
            animation: `float ${p.duration} ease-in-out infinite alternate`,
            animationDelay: p.delay,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
