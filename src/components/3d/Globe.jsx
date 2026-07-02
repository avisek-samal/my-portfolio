import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedGlobe() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.y += 0.002
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
  })

  // Create wireframe points
  const createPoints = () => {
    const positions = []
    const colors = []
    const radius = 2.1
    
    for (let i = 0; i < 800; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      positions.push(x, y, z)
      
      const color = new THREE.Color().setHSL(0.75 + Math.random() * 0.2, 0.8, 0.5)
      colors.push(color.r, color.g, color.b)
    }
    
    return { positions, colors }
  }

  const { positions, colors } = createPoints()

  return (
    <>
      {/* Glowing core */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          metalness={0.9}
          roughness={0.1}
          distort={0.2}
          speed={1}
          transparent
          opacity={0.3}
        />
      </Sphere>
      
      {/* Wireframe sphere */}
      <Sphere args={[2.05, 32, 32]}>
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
      
      {/* Points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={new Float32Array(positions)}
            count={positions.length / 3}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={new Float32Array(colors)}
            count={colors.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  )
}

export default function Globe() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedGlobe />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}