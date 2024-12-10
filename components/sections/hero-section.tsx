"use client"

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import FloatingGeometry from '@/components/3d/floating-geometry';
import ParticleField from '@/components/3d/particle-field';
import HeroContent from '@/components/3d/hero-content';

export default function HeroSection() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/80">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <spotLight position={[-10, 10, -5]} intensity={0.8} />
          
          <Suspense fallback={null}>
            <ParticleField />
            <Float
              speed={1.5}
              rotationIntensity={1}
              floatIntensity={2}
            >
              <FloatingGeometry />
            </Float>
            <HeroContent />
          </Suspense>
        </Canvas>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Creative Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto mb-8">
            Crafting immersive digital experiences through code and creativity
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}