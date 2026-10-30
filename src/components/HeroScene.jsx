import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { MathUtils } from 'three'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'
import './HeroScene.css'

function Sculpture({ animate }) {
    const knot = useRef(null)
    const halo = useRef(null)

    useFrame((_, delta) => {
        if (!animate || !knot.current || !halo.current) return
        knot.current.rotation.y += delta * 0.35
        knot.current.rotation.x += delta * 0.12
        halo.current.rotation.z -= delta * 0.18
        halo.current.rotation.y += delta * 0.08
    })

    return (
        <group scale={1.2}>
            <Float speed={animate ? 1.2 : 0} rotationIntensity={0.25} floatIntensity={0.45}>
                <mesh ref={knot} castShadow>
                    <torusKnotGeometry args={[0.72, 0.22, 160, 18]} />
                    <meshStandardMaterial
                        color="#8b7cff"
                        metalness={0.72}
                        roughness={0.22}
                        emissive="#312e81"
                        emissiveIntensity={0.45}
                    />
                </mesh>
            </Float>
            <mesh ref={halo}>
                <icosahedronGeometry args={[1.85, 1]} />
                <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.35} />
            </mesh>
            <mesh rotation={[Math.PI / 2.2, 0.4, 0]}>
                <torusGeometry args={[2.15, 0.012, 12, 80]} />
                <meshBasicMaterial color="#22d3ee" transparent opacity={0.8} />
            </mesh>
            <mesh rotation={[0.8, 0.2, 0.6]}>
                <torusGeometry args={[2.45, 0.008, 12, 80]} />
                <meshBasicMaterial color="#6366f1" transparent opacity={0.45} />
            </mesh>
            <Orbits animate={animate} />
        </group>
    )
}

function Orbits({ animate }) {
    const group = useRef(null)
    const colors = ['#818cf8', '#c084fc', '#22d3ee', '#fbbf24', '#34d399', '#fb7185']

    useFrame((_, delta) => {
        if (!animate || !group.current) return
        group.current.rotation.y += delta * 0.22
    })

    return (
        <group ref={group}>
            {colors.map((color, index) => {
                const angle = (index / colors.length) * Math.PI * 2
                return (
                    <mesh
                        key={color}
                        position={[Math.cos(angle) * 2.15, Math.sin(angle * 2) * 0.28, Math.sin(angle) * 2.15]}
                    >
                        <sphereGeometry args={[0.075, 18, 18]} />
                        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.85} />
                    </mesh>
                )
            })}
        </group>
    )
}

function CameraRig({ animate }) {
    const target = useRef({ x: 0, y: 0 })

    useFrame(({ camera, pointer }) => {
        if (!animate) return
        target.current.x = pointer.x * 0.45
        target.current.y = pointer.y * 0.28
        camera.position.x = MathUtils.lerp(camera.position.x, target.current.x, 0.05)
        camera.position.y = MathUtils.lerp(camera.position.y, target.current.y, 0.05)
        camera.lookAt(0, 0, 0)
    })

    return null
}

const HeroScene = () => {
    const reduced = usePrefersReducedMotion()

    return (
        <div className="hero-canvas" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0.15, 4.15], fov: 42 }}
                dpr={[1, 1.6]}
                frameloop={reduced ? 'demand' : 'always'}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0)
                    gl.toneMappingExposure = 1.35
                }}
            >
                <ambientLight intensity={0.7} />
                <hemisphereLight args={['#ddd6fe', '#09090b', 0.85]} />
                <pointLight position={[4, 3, 4]} intensity={28} color="#818cf8" />
                <pointLight position={[-3.5, -1.5, 2]} intensity={18} color="#e879f9" />
                <Sculpture animate={!reduced} />
                <CameraRig animate={!reduced} />
            </Canvas>
        </div>
    )
}

export default HeroScene
