import * as THREE from "three";
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler.js";

import { BufferGeometry, PointsMaterial, Points } from "three";
import { useMemo } from "react";

function ParticleOverlay({ meshData}) {
  const sampler = new MeshSurfaceSampler(meshData).build();
  const vertices = [];
   particleCount = 1000 
  const tempPosition = new THREE.Vector3();
  const pointsGeometry = new BufferGeometry();
  for (let i = 0; i < particleCount; i++) {
    sampler.sample(tempPosition);
    vertices.push(tempPosition.x, tempPosition.y, tempPosition.z);
  }

  pointsGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  const pointMaterial = new PointsMaterial({
    color: 0x5c0b17,
    size: 1,
    blending: THREE.AdditiveBlending,
    opacity: 0.8,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const points = new Points(pointsGeometry, pointMaterial);
  return points;
}

export default ParticleOverlay;
