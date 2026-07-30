import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    // 2. WebGL Renderer with High Precision
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 3. AI Neural Network Nodes & Particle Constellation
    const particleCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const electricBlue = new THREE.Color('#38bdf8');
    const neonCyan = new THREE.Color('#22d3ee');
    const emeraldGreen = new THREE.Color('#22c55e');
    const purpleAccent = new THREE.Color('#8b5cf6');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 90;

      const rand = Math.random();
      let chosenColor = electricBlue;
      if (rand > 0.75) chosenColor = purpleAccent;
      else if (rand > 0.5) chosenColor = neonCyan;
      else if (rand > 0.25) chosenColor = emeraldGreen;

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // 4. Floating Holographic Neural Core (Icosahedron & Torus Knots)
    const icosaGeometry = new THREE.IcosahedronGeometry(7, 2);
    const icosaMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosaMesh.position.set(-18, 6, -12);
    scene.add(icosaMesh);

    // Outer Neon Ring
    const torusGeometry = new THREE.TorusGeometry(14, 0.35, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      wireframe: true,
      transparent: true,
      opacity: 0.14
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    torusMesh.position.set(20, -10, -16);
    scene.add(torusMesh);

    // Purple Secondary Knot
    const knotGeometry = new THREE.TorusKnotGeometry(5, 0.2, 100, 16);
    const knotMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    knotMesh.position.set(0, 15, -20);
    scene.add(knotMesh);

    // 5. Mouse Parallax & Interactive Trajectory
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Responsive Window Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Render & Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particleSystem.rotation.y += 0.0008;
      particleSystem.rotation.x += 0.0004;

      icosaMesh.rotation.x += 0.003;
      icosaMesh.rotation.y += 0.004;

      torusMesh.rotation.x -= 0.002;
      torusMesh.rotation.z += 0.003;

      knotMesh.rotation.x += 0.002;
      knotMesh.rotation.y += 0.003;

      camera.position.x += (targetX * 24 - camera.position.x) * 0.05;
      camera.position.y += (-targetY * 24 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleMaterial.dispose();
      icosaGeometry.dispose();
      icosaMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      knotGeometry.dispose();
      knotMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    />
  );
};

export default ThreeBackground;
