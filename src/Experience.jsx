import {
  Grid,
  OrbitControls,
  TransformControls,
  useGLTF,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { Suspense } from "react";
import Porsche from "./Porsche";
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler.js";

import ParticleOverlay from "./ParticleOverlay";
import { useControls } from "leva";

export default function Experience() {
  const { position, scale } = useControls({
    position: {
      value: { x: 0, y: 0, z: 0 },
      step: 0.01,
    },
    scale: {
      value: 1,
      min: 0.1,
      max: 3,
      step: 0.01,
    },
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial side={2} color="black" />
      </mesh>

      <Suspense>
        <Porsche
          position={[position.x, position.y, position.z]}
          scale={scale}
        />
      </Suspense>
    </>
  );
}
