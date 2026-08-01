"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Bottle() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={group} position={[0, -0.3, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.9, 0.9, 2.1, 48]} />
        <meshPhysicalMaterial
          color="#C9A96E"
          transmission={0.92}
          thickness={0.6}
          roughness={0.05}
          ior={1.5}
          envMapIntensity={1.2}
          clearcoat={1}
        />
      </mesh>

      {/* Shoulder taper */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <cylinderGeometry args={[0.35, 0.9, 0.35, 48]} />
        <meshPhysicalMaterial
          color="#C9A96E"
          transmission={0.92}
          thickness={0.4}
          roughness={0.05}
          ior={1.5}
          clearcoat={1}
        />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.3, 32]} />
        <meshPhysicalMaterial
          color="#C9A96E"
          transmission={0.92}
          thickness={0.3}
          roughness={0.05}
          ior={1.5}
        />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 1.75, 0]} castShadow>
        <cylinderGeometry args={[0.32, 0.32, 0.4, 32]} />
        <meshStandardMaterial color="#0A0A0A" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Cap gold band */}
      <mesh position={[0, 1.58, 0]}>
        <cylinderGeometry args={[0.335, 0.335, 0.04, 32]} />
        <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.9} />
      </mesh>
    </group>
  );
}

export function PerfumeBottle() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: 360 }}>
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 40 }}
        shadows
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <spotLight
            position={[3, 4, 3]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <spotLight
            position={[-3, 2, -2]}
            angle={0.4}
            penumbra={1}
            intensity={0.8}
            color="#E8B4B8"
          />
          <Bottle />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.5}
            scale={6}
            blur={2.5}
            far={2}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
