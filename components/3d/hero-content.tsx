"use client"

import { useState } from 'react';
import { Text3D, Center, useMatcapTexture } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

export default function HeroContent() {
  const [matcap] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);
  const [loaded, setLoaded] = useState(false);

  return (
    <Center position={[0, -2, 0]}>
      <motion.group
        initial={{ opacity: 0, z: -10 }}
        animate={{ opacity: loaded ? 1 : 0, z: loaded ? 0 : -10 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Text3D
          font="/fonts/inter_bold.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          onLoad={() => setLoaded(true)}
        >
          Portfolio
          <meshMatcapMaterial matcap={matcap} />
        </Text3D>
      </motion.group>
    </Center>
  );
}