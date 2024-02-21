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
  
  export default function Experience() {
    const gltf = useGLTF("./porsche_911.glb");
    console.log(gltf);
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
          <meshStandardMaterial color="black" />
        </mesh>
  
        <Suspense>
          <TransformControls>
            <Porsche position={[0, 0, 0]} />
          </TransformControls>
        </Suspense>
        {/* <Grid infiniteGrid /> */}
      </>
    );
  }
  