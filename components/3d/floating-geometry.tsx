"use client"

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { motion } from 'framer-motion-3d';

export default function FloatingGeometry() {
  const groupRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <motion.mesh
        position={[-2, 0, 0]}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <dodecahedronGeometry args={[0.8, 0]} />
        <meshPhongMaterial
          color="#4338ca"
          shininess={100}
          specular="#ffffff"
        />
      </motion.mesh>

      <motion.mesh
        position={[2, 0, 0]}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <icosahedronGeometry args={[0.8, 0]} />
        <meshPhongMaterial
          color="#3b82f6"
          shininess={100}
          specular="#ffffff"
        />
      </motion.mesh>

      <motion.mesh
        position={[0, 2, 0]}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <octahedronGeometry args={[0.8, 0]} />
        <meshPhongMaterial
          color="#6366f1"
          shininess={100}
          specular="#ffffff"
        />
      </motion.mesh>
    </group>
  );
}