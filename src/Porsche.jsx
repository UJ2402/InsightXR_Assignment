import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import ParticleOverlay from "./ParticleOverlay";

export default function Porsche(props) {
  const { nodes, materials } = useGLTF("./porsche_911.glb");
  console.log(nodes);
  const shaderMaterial = useRef(
    new THREE.ShaderMaterial({
      wireframe: true,
      uniforms: {
        minHeight: { value: -1 },
        maxHeight: { value: 0.9 },
      },
      vertexShader: `
      varying float vHeight;
      void main() {
        vHeight = position.z; 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
      
    `,
      fragmentShader: `
      uniform float minHeight;
      uniform float maxHeight;
      varying float vHeight;
       void main() {
       float heightRatio = clamp((vHeight - minHeight) / (maxHeight - minHeight), 0.0, 1.0);
       vec3 color = mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 0.0, 0.0), heightRatio); 
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    })
  );
  return (
    <>
      {/* <ParticleOverlay meshData={nodes.car.geometry} /> */}
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.car.geometry}
          material={shaderMaterial.current}
          position={[0, 0, 0]}
          rotation={[-Math.PI * 0.5, 0, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload("./porsche_911.glb");
