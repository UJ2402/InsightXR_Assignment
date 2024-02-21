import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import ParticleOverlay from "./ParticleOverlay";
import { useControls } from "leva";


export default function Porsche(props) {
  const { nodes, materials } = useGLTF("./porsche_911.glb");
  console.log(nodes.car.geometry);

  const { wireframe, minHeight, maxHeight, color1, color2 } = useControls({
    wireframe: {
      value: true,
    },
    minHeight: {
      value: -1,
      label: "Min Height",
      step: 0.01,
    },
    maxHeight: {
      value: 1,
      label: "Max Height",
      step: 0.01,
    },
    color1: {
      value: "#ff0000",
      label: "Color 1",
      render: (get) => <input type="color" {...get()} />,
    },
    color2: {
      value: "#0000ff",
      label: "Color 2",
      render: (get) => <input type="color" {...get()} />,
    },
  });

  const shaderMaterial = useRef(
    new THREE.ShaderMaterial({
      wireframe: wireframe,
      uniforms: {
        minHeight: { value: minHeight },
        maxHeight: { value: maxHeight },
        color1: { value: new THREE.Color(color1) },
        color2: { value: new THREE.Color(color2) },
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
      uniform vec3 color1;
      uniform vec3 color2;
      varying float vHeight;
      void main() {
        float heightRatio = clamp((vHeight - minHeight) / (maxHeight - minHeight), 0.0, 1.0);
        vec3 color = mix(color2, color1, heightRatio); 
        gl_FragColor = vec4(color, 1.0);
      }
    `,
    })
  );

  useEffect(() => {
    shaderMaterial.current.wireframe = wireframe;
    shaderMaterial.current.uniforms.minHeight.value = minHeight;
    shaderMaterial.current.uniforms.maxHeight.value = maxHeight;
    shaderMaterial.current.uniforms.color1.value = new THREE.Color(color1);
    shaderMaterial.current.uniforms.color2.value = new THREE.Color(color2);
  }, [wireframe, minHeight, maxHeight, color1, color2]);

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
