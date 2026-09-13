import React, { useEffect, useRef } from 'react';

export const EarthCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !window.THREE) return;

    const THREE = window.THREE;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for Earth + Satellites
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // Main Sphere Geo
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Custom Wireframe & Point Grid Shader Effect for Earth
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x10B981,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMat);
    earthGroup.add(wireframeMesh);

    // Solid Inner Core with Dark Emerald Cyan Gradient
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x052e16,
      emissive: 0x064e3b,
      shininess: 25,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(geometry, coreMat);
    coreMesh.scale.set(0.99, 0.99, 0.99);
    earthGroup.add(coreMesh);

    // Outer Glowing Atmosphere Ring
    const atmosphereGeo = new THREE.SphereGeometry(1.15, 32, 32);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.18
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    scene.add(atmosphereMesh);

    // Orbiting AI Nodes / Satellites
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.1 + Math.random() * 0.4;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color mix green / cyan
      const isGreen = Math.random() > 0.4;
      colors[i * 3] = isGreen ? 0.06 : 0.02;
      colors[i * 3 + 1] = isGreen ? 0.72 : 0.71;
      colors[i * 3 + 2] = isGreen ? 0.5 : 0.83;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    earthGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x10b981, 1.2);
    dirLight1.position.set(5, 3, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 0.8);
    dirLight2.position.set(-5, -3, -2);
    scene.add(dirLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / width - 0.5) * 0.5;
      mouseY = ((e.clientY - rect.top) / height - 0.5) * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      earthGroup.rotation.y += 0.003;
      earthGroup.rotation.x += 0.0008;

      // Smooth mouse tilt
      earthGroup.rotation.x += (mouseY - earthGroup.rotation.x) * 0.05;
      earthGroup.rotation.y += (mouseX - earthGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{ width: '100%', height: '100%', minHeight: '400px', position: 'relative' }} 
    />
  );
};
