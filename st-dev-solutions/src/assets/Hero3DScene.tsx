"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text3D,
  Center,
  MeshTransmissionMaterial,
  Environment,
  Float,
  Sparkles,
  Cylinder,
  Torus,
  Tube,
} from "@react-three/drei";
import * as THREE from "three";

// Heavy Brushed Chrome Gear (Matches the 2 large gears on the right of "T")
function IndustrialChromeGear({
  position,
  rotation = [0, -0.35, 0],
  scale = 1,
  speed = 0.35,
  teeth = 12,
  reverse = false,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  speed?: number;
  teeth?: number;
  reverse?: boolean;
}) {
  const gearRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (gearRef.current) {
      gearRef.current.rotation.z += (reverse ? -1 : 1) * speed * delta;
    }
  });

  const toothAngles = useMemo(
    () => Array.from({ length: teeth }, (_, i) => (i * Math.PI * 2) / teeth),
    [teeth]
  );

  const brushedSteel = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#d4d4d8",
        metalness: 0.92,
        roughness: 0.18,
      }),
    []
  );

  const innerRecess = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#52525b",
        metalness: 0.85,
        roughness: 0.35,
      }),
    []
  );

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <group ref={gearRef}>
        {/* Outer Rim */}
        <Torus args={[1.25, 0.24, 20, 48]} material={brushedSteel} />
        {/* Recessed Inner Disc */}
        <Cylinder
          args={[1.05, 1.05, 0.22, 36]}
          rotation={[Math.PI / 2, 0, 0]}
          material={innerRecess}
        />
        {/* Inner Hub Lip */}
        <Torus args={[0.55, 0.14, 16, 36]} material={brushedSteel} />
        {/* Center Bore Ring */}
        <Torus args={[0.28, 0.08, 16, 32]} material={brushedSteel} />

        {/* Extruded Gear Teeth */}
        {toothAngles.map((angle, i) => (
          <mesh
            key={i}
            position={[Math.cos(angle) * 1.48, Math.sin(angle) * 1.48, 0]}
            rotation={[0, 0, angle]}
            material={brushedSteel}
          >
            <boxGeometry args={[0.38, 0.3, 0.36]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

// Snaking 3D Wireframe Mesh Tube + Industrial Scaffolding Frame + Dual Pipes
function IndustrialRigAndWireframe() {
  // Custom S-curve path matching the wireframe tube in the image
  const wireframeCurve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.8, 3.2, -0.8),
      new THREE.Vector3(0.6, 1.5, -0.6),
      new THREE.Vector3(0.1, -0.8, -0.4),
      new THREE.Vector3(-1.3, -1.6, 0.2),
      new THREE.Vector3(-0.3, -2.5, 0.1),
      new THREE.Vector3(1.8, -2.6, -0.4),
      new THREE.Vector3(2.5, -1.2, -0.7),
    ]);
  }, []);

  const darkFrameMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#27272a",
        metalness: 0.8,
        roughness: 0.4,
      }),
    []
  );

  const chromePipeMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#e4e4e7",
        metalness: 0.96,
        roughness: 0.1,
      }),
    []
  );

  return (
    <group>
      {/* 3D Wireframe Mesh Tube */}
      <Tube args={[wireframeCurve, 70, 0.34, 16, false]}>
        <meshStandardMaterial
          color="#d4d4d8"
          wireframe
          transparent
          opacity={0.45}
        />
      </Tube>

      {/* Dark Industrial Rectangular Scaffolding Behind "ST" */}
      <mesh position={[0.9, 0.2, -1.4]} material={darkFrameMat}>
        <boxGeometry args={[0.12, 6.2, 0.12]} />
      </mesh>
      <mesh position={[2.7, 0.2, -1.4]} material={darkFrameMat}>
        <boxGeometry args={[0.12, 6.2, 0.12]} />
      </mesh>
      <mesh position={[1.8, 3.1, -1.4]} material={darkFrameMat}>
        <boxGeometry args={[2.2, 0.12, 0.12]} />
      </mesh>

      {/* Dual Vertical Chrome Pipes with Joints on Far Right */}
      <Cylinder
        args={[0.09, 0.09, 5.5, 20]}
        position={[2.35, 0.5, -0.2]}
        material={chromePipeMat}
      />
      <Cylinder
        args={[0.09, 0.09, 5.5, 20]}
        position={[2.6, 0.5, -0.3]}
        material={chromePipeMat}
      />
      {/* Pipe Joint Rings */}
      <Torus
        args={[0.11, 0.03, 12, 24]}
        position={[2.35, 0.6, -0.2]}
        rotation={[Math.PI / 2, 0, 0]}
        material={chromePipeMat}
      />
      <Torus
        args={[0.11, 0.03, 12, 24]}
        position={[2.6, 0.2, -0.3]}
        rotation={[Math.PI / 2, 0, 0]}
        material={chromePipeMat}
      />
    </group>
  );
}

function SceneAssembly() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Base perspective angle matching the photo + subtle mouse parallax
    const baseRotY = -0.22;
    const baseRotX = 0.06;
    const targetY = baseRotY + state.pointer.x * 0.18;
    const targetX = baseRotX - state.pointer.y * 0.12;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.05
    );
  });

  const FONT_URL =
    "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json";

  return (
    <group ref={groupRef} position={[0.35, 0.05, 0]}>
      {/* Extruded Refractive Clear Glass "ST" */}
      <Float speed={1.6} rotationIntensity={0.12} floatIntensity={0.35}>
        <Center position={[-0.25, 0.15, 0.55]}>
          <Text3D
            font={FONT_URL}
            size={2.35}
            height={0.62}
            curveSegments={32}
            bevelEnabled
            bevelThickness={0.09}
            bevelSize={0.045}
            bevelOffset={0}
            bevelSegments={10}
            letterSpacing={-0.05}
          >
            ST
            <MeshTransmissionMaterial
              backside
              samples={8}
              thickness={0.75}
              roughness={0.05}
              transmission={0.99}
              ior={1.52}
              chromaticAberration={0.25}
              anisotropy={0.35}
              distortion={0.12}
              distortionScale={0.2}
              temporalDistortion={0.08}
              color="#ffffff"
            />
          </Text3D>
        </Center>
      </Float>

      {/* Upper-Right & Lower-Right Chrome Gears Behind the "T" */}
      <IndustrialChromeGear
        position={[1.55, 1.05, -0.35]}
        scale={0.82}
        speed={0.4}
        teeth={12}
      />
      <IndustrialChromeGear
        position={[1.65, -1.05, -0.15]}
        scale={0.96}
        speed={0.32}
        teeth={13}
        reverse
      />

      {/* Wireframe Tube & Scaffolding */}
      <IndustrialRigAndWireframe />

      {/* Concentrated Golden Glitter Stream Behind "ST" */}
      <Sparkles
        count={260}
        scale={[5.5, 3.2, 2.5]}
        position={[-0.5, 0.2, 0.1]}
        size={3.8}
        speed={0.5}
        opacity={0.95}
        color="#FDE047"
      />
      <Sparkles
        count={120}
        scale={[4.5, 2.5, 2]}
        position={[-0.4, 0.1, 0.3]}
        size={2.2}
        speed={0.3}
        opacity={0.75}
        color="#F59E0B"
      />
    </group>
  );
}

export default function Hero3DScene() {
  return (
    <div className="w-full h-full relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6.3], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[6, 6, 5]} intensity={3} color="#ffffff" />
        <pointLight position={[-2, 0.5, 2]} intensity={4} color="#FDE047" />
        <pointLight position={[2, -1.5, 2]} intensity={2.5} color="#a855f7" />
        <pointLight position={[0, 2, 3]} intensity={2} color="#38bdf8" />
        <Environment preset="warehouse" />
        <SceneAssembly />
      </Canvas>
    </div>
  );
}
