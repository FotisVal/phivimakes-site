"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

function Model({ fileUrl }: { fileUrl: string }) {
  const geometry = useLoader(STLLoader, fileUrl);

  return (
    <Center>
      <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#67e8f9" metalness={0.25} roughness={0.35} />
      </mesh>
    </Center>
  );
}

export default function STLViewer({ fileUrl }: { fileUrl: string }) {
  return (
    <div className="h-[420px] overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/70">
      <Canvas camera={{ position: [0, 0, 120], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <Model fileUrl={fileUrl} />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}