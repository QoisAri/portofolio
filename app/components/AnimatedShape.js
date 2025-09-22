import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// props: position, scale, rotationSpeed
export default function AnimatedShape({ position, scale, rotationSpeed = 0.5 }) {
  const meshRef = useRef();

  // Membuat geometri bintang kustom
  const starShape = new THREE.Shape();
  const outerRadius = 1;
  const innerRadius = 0.5;
  const numPoints = 5;
  starShape.moveTo(outerRadius, 0);
  for (let i = 1; i <= numPoints * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / numPoints;
    starShape.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
  }
  const extrudeSettings = {
    steps: 2,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 2,
  };
  const starGeometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);
  starGeometry.center(); // Pusatkan geometri

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed * 0.5;
      meshRef.current.rotation.y += delta * rotationSpeed * 0.3;
      meshRef.current.rotation.z -= delta * rotationSpeed * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={starGeometry}>
      <meshPhysicalMaterial
        color="#C77DFF" // Menambahkan warna ungu muda
        transmission={1}
        thickness={1.5}
        roughness={0.2}
        ior={1.5}
        envMapIntensity={1}
      />
    </mesh>
  );
}

