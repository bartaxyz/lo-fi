import React, { useRef } from "react";
import { MeshDistortMaterial } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import * as THREE from "three";

import snoise from "../shaders/utils/snoise.glsl";
import vertexShader from "../shaders/gradient/vertex.glsl";
import fragmentShader from "../shaders/gradient/fragment.glsl";

export const GradientPlane: React.FC<MeshProps> = (props) => {
  const gradientPlane = useRef<THREE.Mesh>();

  return (
    <React.Fragment>
      <mesh
        {...props}
        ref={gradientPlane}
        position={new THREE.Vector3(0, 0, -28)}
      >
        <boxBufferGeometry args={[50, 50, 50, 5, 5, 5]} attach="geometry" />
        <MeshDistortMaterial
          color="black"
          attach="material"
          distort={0.25}
          speed={0.25}
          reflectivity={0.5}
          sheen={200}
          roughness={1}
        />
      </mesh>
    </React.Fragment>
  );
};
