import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'

function Shape({ geometry, color, position, rotationSpeed, scale = 1 }) {
  const meshRef = useRef()
  
  useFrame(() => {
    meshRef.current.rotation.x += rotationSpeed.x
    meshRef.current.rotation.y += rotationSpeed.y
  })

  const getGeometry = () => {
    switch(geometry) {
      case 'sphere': return <sphereGeometry args={[0.7, 16, 16]} />
      case 'box': return <boxGeometry args={[0.8, 0.8, 0.8]} />
      case 'torus': return <torusGeometry args={[0.5, 0.12, 8, 16]} />
      case 'cone': return <coneGeometry args={[0.6, 1, 12]} />
      default: return <sphereGeometry args={[0.7, 16, 16]} />
    }
  }

  return (
    <Float
      speed={0.3}
      rotationIntensity={0.2}
      floatIntensity={0.3}
      position={position}
    >
      <mesh ref={meshRef} scale={scale}>
        {getGeometry()}
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingShapesWireframe() {
  const shapes = [
    { geometry: 'sphere', color: '#8b5cf6', position: [-3, 2.5, 0], rotationSpeed: { x: 0.004, y: 0.008 }, scale: 1 },
    { geometry: 'box', color: '#ec4899', position: [3.5, -2, -1], rotationSpeed: { x: 0.008, y: 0.004 }, scale: 0.8 },
    { geometry: 'torus', color: '#06b6d4', position: [-2.8, -2.5, 1.5], rotationSpeed: { x: 0.01, y: 0.004 }, scale: 0.7 },
    { geometry: 'cone', color: '#f59e0b', position: [2.8, 2, -1.5], rotationSpeed: { x: 0.004, y: 0.01 }, scale: 0.9 },
    { geometry: 'sphere', color: '#10b981', position: [0, 0.5, 3], rotationSpeed: { x: 0.006, y: 0.006 }, scale: 0.6 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        {shapes.map((shape, i) => (
          <Shape key={i} {...shape} />
        ))}
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.15}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}