import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import ParticleOverlay from "./ParticleOverlay";
import { useControls } from "leva";

export default function Porsche(props) {
  const { nodes, materials } = useGLTF("./Car.glb");

  const { wireframe, minHeight, maxHeight, color1, color2, isShaderApplied } = useControls({
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
    isShaderApplied: {
      value: true,
      label: "Apply Shader",
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

  console.log(isShaderApplied);

  return (
    <>
      {/* <ParticleOverlay meshData={nodes.car.geometry} /> */}
      {isShaderApplied ? (
        <group {...props} dispose={null}>
          <group
            position={[-0.015, -0.009, 0.063]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.578}
          >
            <group position={[0, 0, 0.029]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_0.geometry}
                material={shaderMaterial.current}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_1.geometry}
                material={shaderMaterial.current}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_2.geometry}
                material={shaderMaterial.current}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_3.geometry}
                material={shaderMaterial.current}
              />
            </group>
            <group position={[0, 0, 0.029]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_0.geometry}
                material={shaderMaterial.current}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_1.geometry}
                material={shaderMaterial.current}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_2.geometry}
                material={shaderMaterial.current}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_3.geometry}
                material={shaderMaterial.current}
              />
            </group>
            <group position={[0, -0.003, 0.007]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.windshield_0.geometry}
                material={shaderMaterial.current}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.windshield_1.geometry}
                material={shaderMaterial.current}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot001_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot002_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot003_0.geometry}
              material={shaderMaterial.current}
              position={[0, 0.003, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot004_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot005_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot006_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot007_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot008_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot009_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot010_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot011_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot011_0001.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front001_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front001_1.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front001_2.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front003_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front003_1.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front004_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front004_1.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front004_2.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front007_0.geometry}
              material={shaderMaterial.current}
              rotation={[-0.006, 0, 0]}
              scale={1.036}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front009_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_0.geometry}
              material={shaderMaterial.current}
              position={[0.036, -1.56, 0.333]}
              rotation={[0.709, -0.071, -0.245]}
              scale={[0.014, 0.014, 0.012]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_0.geometry}
              material={shaderMaterial.current}
              scale={[0.332, 0.318, 0.318]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_0.geometry}
              material={shaderMaterial.current}
              position={[0.005, 3.581, 0.107]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_0.geometry}
              material={shaderMaterial.current}
              position={[-1.053, 3.51, -0.126]}
              rotation={[-1.439, -0.62, 0.776]}
              scale={0.024}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane003_0.geometry}
              material={shaderMaterial.current}
              position={[0.436, 3.723, -0.117]}
              rotation={[-1.483, 0.105, 0.803]}
              scale={0.024}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004_0.geometry}
              material={shaderMaterial.current}
              position={[-0.488, 3.684, -0.328]}
              rotation={[-1.415, -0.045, 0.802]}
              scale={0.059}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane005_0.geometry}
              material={shaderMaterial.current}
              position={[0, 3.704, -0.292]}
              rotation={[0.114, 0, 0]}
              scale={[0.393, 0.393, 0.356]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006_0.geometry}
              material={shaderMaterial.current}
              position={[0, -3.75, -0.432]}
              rotation={[0.082, 0, -Math.PI]}
              scale={[0.395, 0.395, 0.357]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.underbody_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.window_rear_0.geometry}
              material={shaderMaterial.current}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.window_rear001_0.geometry}
              material={shaderMaterial.current}
            />
          </group>
        </group>
      ) : (
        <group {...props} dispose={null}>
          <group
            position={[-0.015, -0.009, 0.063]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.578}
          >
            <group position={[0, 0, 0.029]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_0.geometry}
                material={materials.silver}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_1.geometry}
                material={materials.plastic}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_2.geometry}
                material={materials.rubber}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_3.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group position={[0, 0, 0.029]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_0.geometry}
                material={materials.silver}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_1.geometry}
                material={materials.plastic}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_2.geometry}
                material={materials.rubber}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_3.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group position={[0, -0.003, 0.007]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.windshield_0.geometry}
                material={materials.window}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.windshield_1.geometry}
                material={materials.plastic}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot_0.geometry}
              material={materials.full_black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot001_0.geometry}
              material={materials.paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot002_0.geometry}
              material={materials.paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot003_0.geometry}
              material={materials.tex_shiny}
              position={[0, 0.003, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot004_0.geometry}
              material={materials.window}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot005_0.geometry}
              material={materials.paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot006_0.geometry}
              material={materials.full_black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot007_0.geometry}
              material={materials.logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot008_0.geometry}
              material={materials.paint}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot009_0.geometry}
              material={materials.silver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot010_0.geometry}
              material={materials.plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot011_0.geometry}
              material={materials.coat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.boot011_0001.geometry}
              material={materials.coat}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front001_0.geometry}
              material={materials.plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front001_1.geometry}
              material={materials.silver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front001_2.geometry}
              material={materials.lights}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front003_0.geometry}
              material={materials.plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front003_1.geometry}
              material={materials.glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front004_0.geometry}
              material={materials.silver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front004_1.geometry}
              material={materials.lights}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front004_2.geometry}
              material={materials.plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front007_0.geometry}
              material={materials.glass}
              rotation={[-0.006, 0, 0]}
              scale={1.036}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bumper_front009_0.geometry}
              material={materials.tex_shiny}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_0.geometry}
              material={materials.plastic}
              position={[0.036, -1.56, 0.333]}
              rotation={[0.709, -0.071, -0.245]}
              scale={[0.014, 0.014, 0.012]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_0.geometry}
              material={materials.full_black}
              scale={[0.332, 0.318, 0.318]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_0.geometry}
              material={materials.tex_shiny}
              position={[0.005, 3.581, 0.107]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_0.geometry}
              material={materials.paint}
              position={[-1.053, 3.51, -0.126]}
              rotation={[-1.439, -0.62, 0.776]}
              scale={0.024}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane003_0.geometry}
              material={materials.paint}
              position={[0.436, 3.723, -0.117]}
              rotation={[-1.483, 0.105, 0.803]}
              scale={0.024}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004_0.geometry}
              material={materials.paint}
              position={[-0.488, 3.684, -0.328]}
              rotation={[-1.415, -0.045, 0.802]}
              scale={0.059}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane005_0.geometry}
              material={materials.license}
              position={[0, 3.704, -0.292]}
              rotation={[0.114, 0, 0]}
              scale={[0.393, 0.393, 0.356]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006_0.geometry}
              material={materials.license}
              position={[0, -3.75, -0.432]}
              rotation={[0.082, 0, -Math.PI]}
              scale={[0.395, 0.395, 0.357]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.underbody_0.geometry}
              material={materials.full_black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.window_rear_0.geometry}
              material={materials.window}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.window_rear001_0.geometry}
              material={materials.full_black}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("./Car.glb");
