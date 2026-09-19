import React, { useRef, useMemo, useState, useEffect, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '../../utils/helpers';

// WebGL Error Boundary to ensure zero page crashes
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn('Botanical 3D scene fallback triggered:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Procedural Moon Texture generator (realistic craters & lunar maria)
function createMoonTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Base lunar ivory gradient
  const grad = ctx.createRadialGradient(256, 256, 50, 256, 256, 256);
  grad.addColorStop(0, '#f9f6ed');
  grad.addColorStop(0.7, '#e8dfca');
  grad.addColorStop(1, '#cfc1a5');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Soft lunar maria (darker patches)
  ctx.fillStyle = 'rgba(150, 138, 115, 0.22)';
  const patches = [
    { x: 180, y: 190, r: 80 },
    { x: 280, y: 160, r: 90 },
    { x: 330, y: 260, r: 75 },
    { x: 220, y: 310, r: 95 },
    { x: 150, y: 280, r: 65 },
  ];
  patches.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.filter = 'blur(16px)';
    ctx.fill();
  });
  ctx.filter = 'none';

  // Small subtle craters
  ctx.fillStyle = 'rgba(110, 100, 85, 0.18)';
  const craters = [
    { x: 130, y: 140, r: 12 },
    { x: 240, y: 220, r: 18 },
    { x: 310, y: 130, r: 14 },
    { x: 380, y: 290, r: 16 },
    { x: 190, y: 380, r: 22 },
    { x: 290, y: 370, r: 15 },
    { x: 350, y: 190, r: 10 },
  ];
  craters.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    // Inner highlight rim
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// 3D Moon Component with subtle rotation and atmospheric glow
function Moon({ mouseParallax }) {
  const moonRef = useRef();
  const glowRef = useRef();

  const moonTexture = useMemo(() => {
    if (typeof document === 'undefined') return null;
    return createMoonTexture();
  }, []);

  useFrame((state, delta) => {
    if (moonRef.current) {
      // Gentle, majestic rotation
      moonRef.current.rotation.y += delta * 0.03;
      // Parallax tracking
      moonRef.current.position.x = 2.4 + mouseParallax.current.x * 0.4;
      moonRef.current.position.y = 1.6 + mouseParallax.current.y * 0.4;
    }
    if (glowRef.current) {
      glowRef.current.position.x = 2.4 + mouseParallax.current.x * 0.4;
      glowRef.current.position.y = 1.6 + mouseParallax.current.y * 0.4;
    }
  });

  return (
    <group>
      {/* Outer ambient glow halo with subtle cyan/ivory rim */}
      <mesh ref={glowRef} position={[2.4, 1.6, -3]}>
        <sphereGeometry args={[1.55, 32, 32]} />
        <meshBasicMaterial
          color="#93c5fd"
          transparent
          opacity={0.07}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Moon Sphere */}
      <mesh ref={moonRef} position={[2.4, 1.6, -3]}>
        <sphereGeometry args={[1.1, 48, 48]} />
        <meshStandardMaterial
          map={moonTexture}
          color="#fffdf6"
          roughness={0.7}
          metalness={0.05}
          emissive="#d4c47a"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Direct Moonlight casting soft radiance */}
      <pointLight position={[2.4, 1.6, -2]} color="#f7f1df" intensity={2.5} distance={15} />
    </group>
  );
}

// Cached geometries for performance & memory efficiency
const geometryCache = {};

function getBotanicalGeometry(type = 'leaf') {
  if (geometryCache[type]) return geometryCache[type];

  const shape = new THREE.Shape();
  let depthFactor = 0.16;

  if (type === 'broadLeaf') {
    // Broad tropical / monstera style leaf
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.55, 0.4, 0.75, 1.0, 0, 1.8);
    shape.bezierCurveTo(-0.75, 1.0, -0.55, 0.4, 0, 0);
    depthFactor = 0.22;
  } else if (type === 'fernLeaf') {
    // Slender elongated frond / fern leaf
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.25, 0.5, 0.35, 1.3, 0, 2.1);
    shape.bezierCurveTo(-0.35, 1.3, -0.25, 0.5, 0, 0);
    depthFactor = 0.18;
  } else if (type === 'petal') {
    // Soft curved flower petal
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.45, 0.3, 0.5, 0.85, 0, 1.25);
    shape.bezierCurveTo(-0.5, 0.85, -0.45, 0.3, 0, 0);
    depthFactor = 0.12;
  } else {
    // Standard organic curved leaf
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.35, 0.4, 0.5, 0.95, 0, 1.6);
    shape.bezierCurveTo(-0.5, 0.95, -0.35, 0.4, 0, 0);
    depthFactor = 0.16;
  }

  const geometry = new THREE.ShapeGeometry(shape, 12);
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const x = pos.getX(i);
    pos.setZ(i, -Math.sin((y / 1.6) * Math.PI) * depthFactor + (x * x) * 0.25);
  }
  geometry.computeVertexNormals();
  geometryCache[type] = geometry;
  return geometry;
}

// Botanical Floating Element (leaf, fern, broad leaf, or petal)
function BotanicalElement({ initialPos, initialRot, scale, speed, color, type = 'leaf', mouseParallax, opacity = 0.88 }) {
  const meshRef = useRef();
  const geometry = useMemo(() => getBotanicalGeometry(type), [type]);
  const randOffset = useMemo(() => Math.random() * 100, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed + randOffset;

    // Gentle floating and swaying with depth parallax
    meshRef.current.position.y = initialPos[1] + Math.sin(t * 0.75) * 0.35;
    meshRef.current.position.x = initialPos[0] + Math.cos(t * 0.55) * 0.25 + mouseParallax.current.x * (initialPos[2] > 0 ? 0.7 : 0.25);
    meshRef.current.position.z = initialPos[2] + Math.sin(t * 0.4) * 0.18;

    // Organic rotation wobble
    meshRef.current.rotation.x = initialRot[0] + Math.sin(t * 0.45) * 0.2;
    meshRef.current.rotation.y = initialRot[1] + Math.cos(t * 0.35) * 0.25;
    meshRef.current.rotation.z = initialRot[2] + Math.sin(t * 0.25) * 0.18;
  });

  return (
    <mesh ref={meshRef} position={initialPos} rotation={initialRot} scale={scale} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        roughness={0.55}
        metalness={0.08}
        side={THREE.DoubleSide}
        transparent
        opacity={opacity}
        emissive={color}
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

// Luminescent Pollen / Firefly Dust Particles (Dual Gold & Cyan Radiancy)
function LuminescentDust({ count = 180, mouseParallax }) {
  const pointsRef = useRef();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1;
      spd[i] = 0.2 + Math.random() * 0.5;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const t = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      let y = posAttr.getY(i) - delta * speeds[i] * 0.4;
      if (y < -7) y = 7;
      posAttr.setY(i, y);

      let x = positions[i * 3] + Math.sin(t * 0.5 + i) * 0.15 + mouseParallax.current.x * 0.2;
      posAttr.setX(i, x);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#7dd3fc"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// Scene Root with Light, Camera Controls & Lush Botanical Canopy
function BotanicalSceneContent({ mouseParallax }) {
  // Rich, full botanical collection framing the entire viewport
  const botanicalItems = useMemo(
    () => [
      // ==========================================
      // 1. TOP-LEFT CANOPY (Cascading leaves)
      // ==========================================
      { initialPos: [-5.0, 3.4, -3.5], initialRot: [0.6, 0.4, -1.2], scale: 1.9, speed: 0.7, color: '#163516', type: 'broadLeaf' },
      { initialPos: [-3.8, 3.2, -2.5], initialRot: [0.4, 0.7, -1.0], scale: 1.5, speed: 0.8, color: '#2d6b2d', type: 'fernLeaf' },
      { initialPos: [-4.4, 2.3, -2.0], initialRot: [0.3, 0.5, -0.8], scale: 1.4, speed: 0.9, color: '#ea580c', type: 'leaf' },
      { initialPos: [-3.1, 3.5, -3.0], initialRot: [0.5, 0.3, -1.1], scale: 1.3, speed: 0.85, color: '#38bdf8', type: 'leaf' },
      { initialPos: [-2.2, 3.2, -1.8], initialRot: [0.7, -0.2, -0.6], scale: 1.1, speed: 0.95, color: '#facc15', type: 'leaf' },
      { initialPos: [-1.4, 3.4, -2.2], initialRot: [0.4, 0.3, -0.9], scale: 1.0, speed: 1.0, color: '#1e4228', type: 'fernLeaf' },

      // ==========================================
      // 2. TOP-RIGHT CANOPY (Framing the Moon)
      // ==========================================
      { initialPos: [4.8, 3.5, -4.0], initialRot: [-0.5, -0.4, 1.2], scale: 2.0, speed: 0.7, color: '#122617', type: 'broadLeaf' },
      { initialPos: [3.8, 3.2, -2.8], initialRot: [-0.4, -0.6, 0.9], scale: 1.5, speed: 0.8, color: '#dc2626', type: 'leaf' },
      { initialPos: [4.5, 2.2, -2.2], initialRot: [-0.6, -0.3, 1.1], scale: 1.3, speed: 0.85, color: '#60a5fa', type: 'leaf' },
      { initialPos: [3.3, 3.6, -3.2], initialRot: [-0.3, -0.5, 0.8], scale: 1.4, speed: 0.9, color: '#2d6b2d', type: 'broadLeaf' },
      { initialPos: [1.8, 3.3, -2.0], initialRot: [-0.5, 0.3, 0.5], scale: 1.1, speed: 1.0, color: '#f97316', type: 'leaf' },
      { initialPos: [0.8, 3.4, -2.4], initialRot: [-0.3, 0.4, 0.3], scale: 0.95, speed: 1.05, color: '#eab308', type: 'fernLeaf' },

      // ==========================================
      // 3. LEFT FLANK (Lush vertical foliage)
      // ==========================================
      { initialPos: [-5.4, 1.2, -3.0], initialRot: [0.2, 0.8, -0.5], scale: 1.7, speed: 0.75, color: '#163516', type: 'broadLeaf' },
      { initialPos: [-4.6, 0.3, -1.8], initialRot: [0.4, 0.6, -0.3], scale: 1.3, speed: 0.9, color: '#f97316', type: 'leaf' },
      { initialPos: [-5.0, -1.0, -2.2], initialRot: [0.1, 0.7, -0.7], scale: 1.5, speed: 0.85, color: '#eab308', type: 'fernLeaf' },
      { initialPos: [-4.1, -0.3, -1.2], initialRot: [0.3, 0.5, -0.4], scale: 1.2, speed: 0.95, color: '#ef4444', type: 'leaf' },
      { initialPos: [-3.5, 1.1, -1.0], initialRot: [0.5, 0.4, -0.6], scale: 1.0, speed: 1.05, color: '#38bdf8', type: 'leaf' },
      { initialPos: [-3.2, -0.8, -1.4], initialRot: [0.2, -0.5, -0.3], scale: 1.1, speed: 1.0, color: '#2d6b2d', type: 'broadLeaf' },

      // ==========================================
      // 4. RIGHT FLANK (Lush vertical foliage)
      // ==========================================
      { initialPos: [5.2, 0.9, -3.2], initialRot: [-0.3, -0.7, 0.6], scale: 1.8, speed: 0.75, color: '#1a3d1a', type: 'broadLeaf' },
      { initialPos: [4.6, -0.1, -2.0], initialRot: [-0.2, -0.5, 0.4], scale: 1.4, speed: 0.85, color: '#ea580c', type: 'leaf' },
      { initialPos: [4.3, 0.7, -1.4], initialRot: [-0.4, -0.6, 0.5], scale: 1.1, speed: 0.95, color: '#facc15', type: 'fernLeaf' },
      { initialPos: [4.8, -1.2, -2.5], initialRot: [-0.5, -0.4, 0.8], scale: 1.4, speed: 0.9, color: '#dc2626', type: 'leaf' },
      { initialPos: [3.9, -0.7, -1.2], initialRot: [-0.3, -0.7, 0.3], scale: 1.15, speed: 1.0, color: '#22d3ee', type: 'leaf' },
      { initialPos: [3.6, 1.3, -1.8], initialRot: [-0.3, -0.6, 0.4], scale: 1.05, speed: 1.05, color: '#4ade80', type: 'broadLeaf' },

      // ==========================================
      // 5. BOTTOM UNDERGROWTH (Ground foliage)
      // ==========================================
      { initialPos: [-4.4, -2.9, -3.0], initialRot: [-0.3, 0.5, 0.7], scale: 1.8, speed: 0.75, color: '#163516', type: 'broadLeaf' },
      { initialPos: [-3.3, -2.5, -2.2], initialRot: [-0.2, 0.4, 0.6], scale: 1.4, speed: 0.85, color: '#ef4444', type: 'leaf' },
      { initialPos: [-2.6, -3.3, -2.5], initialRot: [-0.4, 0.6, 0.5], scale: 1.5, speed: 0.8, color: '#ea580c', type: 'broadLeaf' },
      { initialPos: [-1.8, -2.7, -1.5], initialRot: [-0.1, 0.3, 0.4], scale: 1.15, speed: 0.95, color: '#38bdf8', type: 'fernLeaf' },

      { initialPos: [4.2, -2.8, -3.0], initialRot: [0.3, -0.5, -0.7], scale: 1.7, speed: 0.75, color: '#1a3d1a', type: 'broadLeaf' },
      { initialPos: [3.1, -2.6, -2.0], initialRot: [0.2, -0.4, -0.5], scale: 1.3, speed: 0.9, color: '#facc15', type: 'leaf' },
      { initialPos: [2.3, -3.2, -2.4], initialRot: [0.4, -0.6, -0.6], scale: 1.4, speed: 0.85, color: '#b91c1c', type: 'leaf' },
      { initialPos: [1.6, -2.9, -1.6], initialRot: [0.2, -0.3, -0.4], scale: 1.1, speed: 0.95, color: '#60a5fa', type: 'fernLeaf' },

      { initialPos: [0.0, -3.3, -2.2], initialRot: [0.1, 0.2, 0.1], scale: 1.4, speed: 0.85, color: '#2d6b2d', type: 'broadLeaf' },
      { initialPos: [-0.8, -2.9, -1.8], initialRot: [-0.2, 0.3, 0.3], scale: 1.05, speed: 1.0, color: '#f97316', type: 'leaf' },
      { initialPos: [0.9, -3.0, -1.9], initialRot: [0.2, -0.3, -0.2], scale: 1.05, speed: 1.0, color: '#eab308', type: 'leaf' },

      // ==========================================
      // 6. FLOATING MIDGROUND & FOREGROUND LEAVES
      // ==========================================
      { initialPos: [-2.4, 1.5, 0.6], initialRot: [0.5, -0.3, 0.4], scale: 0.8, speed: 1.1, color: '#38bdf8', type: 'leaf' },
      { initialPos: [2.5, -1.4, 0.8], initialRot: [-0.4, 0.6, -0.3], scale: 0.85, speed: 1.15, color: '#f97316', type: 'leaf' },
      { initialPos: [-1.7, -1.7, 0.9], initialRot: [0.3, 0.4, 0.5], scale: 0.75, speed: 1.2, color: '#facc15', type: 'leaf' },
      { initialPos: [2.1, 1.7, 0.7], initialRot: [-0.3, 0.5, -0.4], scale: 0.8, speed: 1.05, color: '#4ade80', type: 'leaf' },
      { initialPos: [-1.0, 2.3, 0.5], initialRot: [0.4, -0.2, 0.6], scale: 0.7, speed: 1.25, color: '#ef4444', type: 'leaf' },
      { initialPos: [1.3, 2.1, 0.6], initialRot: [-0.2, 0.4, -0.5], scale: 0.7, speed: 1.2, color: '#22d3ee', type: 'leaf' },
      { initialPos: [2.7, 0.2, 0.9], initialRot: [-0.5, 0.3, -0.2], scale: 0.75, speed: 1.15, color: '#fb923c', type: 'leaf' },
      { initialPos: [-2.6, -0.2, 0.8], initialRot: [0.4, -0.5, 0.3], scale: 0.75, speed: 1.2, color: '#dc2626', type: 'leaf' },

      // ==========================================
      // 7. DELICATE FLOATING PETALS
      // ==========================================
      { initialPos: [-1.4, 0.8, 1.1], initialRot: [0.6, -0.4, 0.3], scale: 0.5, speed: 1.3, color: '#fb923c', type: 'petal' },
      { initialPos: [1.6, -0.5, 1.2], initialRot: [-0.4, 0.7, -0.2], scale: 0.55, speed: 1.25, color: '#fde047', type: 'petal' },
      { initialPos: [-0.4, -1.3, 1.3], initialRot: [0.3, -0.3, 0.5], scale: 0.5, speed: 1.35, color: '#38bdf8', type: 'petal' },
      { initialPos: [0.8, 1.2, 1.1], initialRot: [-0.2, 0.5, -0.4], scale: 0.5, speed: 1.3, color: '#f43f5e', type: 'petal' },
      { initialPos: [-0.5, 1.9, 1.2], initialRot: [0.1, 0.5, -0.4], scale: 0.45, speed: 1.4, color: '#fffbeb', type: 'petal' },
    ],
    []
  );

  return (
    <>
      {/* Nocturnal Ambient Light with deep botanical green undertone */}
      <ambientLight color="#163820" intensity={1.9} />

      {/* Moon directional source */}
      <directionalLight position={[5, 8, 4]} color="#f5f0e4" intensity={1.4} />

      {/* Ethereal celestial blue moonlight rim light */}
      <directionalLight position={[6, -2, 3]} color="#60a5fa" intensity={0.85} />

      {/* Warm Sunset/Autumn backfill rim light (Orange & Amber highlights) */}
      <directionalLight position={[-6, 3, 2]} color="#f97316" intensity={0.75} />

      {/* Ground bounce light */}
      <directionalLight position={[0, -5, -2]} color="#1b4d2e" intensity={0.6} />

      {/* Realistic 3D Celestial Moon */}
      <Moon mouseParallax={mouseParallax} />

      {/* Full collection of 3D botanical leaves and petals */}
      {botanicalItems.map((item, idx) => (
        <BotanicalElement key={idx} {...item} mouseParallax={mouseParallax} />
      ))}

      {/* Luminescent starlight/firefly dust */}
      <LuminescentDust count={180} mouseParallax={mouseParallax} />
    </>
  );
}

// Fallback component for devices without WebGL or with prefers-reduced-motion
function BotanicalFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft Moon glow with cyan/ivory tone */}
      <div className="absolute top-12 right-[18%] w-36 h-36 rounded-full bg-gradient-to-br from-[#fffbeb] via-[#fed7aa] to-[#7dd3fc] opacity-85 shadow-[0_0_90px_rgba(56,189,248,0.25)]" />
      {/* Ambient lush botanical foliage silhouettes */}
      <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full bg-emerald-950/50 blur-3xl" />
      <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-sky-950/40 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-[28rem] h-[28rem] rounded-full bg-emerald-950/50 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-[28rem] h-[28rem] rounded-full bg-orange-950/35 blur-3xl" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-amber-950/25 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-sky-950/25 blur-3xl" />
    </div>
  );
}

export default function BotanicalScene() {
  const { prefersReducedMotion } = useReducedMotion();
  const mouseParallax = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = -(e.clientY / window.innerHeight - 0.5) * 2;
      mouseParallax.current.x = x;
      mouseParallax.current.y = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return <BotanicalFallback />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <WebGLErrorBoundary fallback={<BotanicalFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 25 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
          style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        >
          <BotanicalSceneContent mouseParallax={mouseParallax} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
