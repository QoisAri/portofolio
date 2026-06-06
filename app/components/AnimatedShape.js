import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// props: position, scale, rotationSpeed
export default function AnimatedShape({ position, scale, rotationSpeed = 0.5 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed * 0.5;
      meshRef.current.rotation.y += delta * rotationSpeed * 0.3;
      meshRef.current.rotation.z -= delta * rotationSpeed * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshPhysicalMaterial
        color="#3b82f6" // Subtle blue tint
        transmission={1}
        thickness={1.5}
        roughness={0.1}
        ior={1.5}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

