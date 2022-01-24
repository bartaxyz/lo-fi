import React, { useRef, useState } from "react";
import { MeshDistortMaterial } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import snoise from "../shaders/utils/snoise.glsl";
import vertexShader from "../shaders/gradient/vertex.glsl";
import fragmentShader from "../shaders/gradient/fragment.glsl";

export const GradientPlane: React.FC<MeshProps> = (props) => {
  const gradientPlane = useRef<THREE.Mesh>();

  useFrame((state, delta) => {
    if (!gradientPlane.current) return;

    const speed = 0.15;
    /* gradientPlane.current!.rotation.x += delta * speed;
    gradientPlane.current!.rotation.y += delta * speed;
    gradientPlane.current!.rotation.z += delta * speed; */
  });

  return (
    <React.Fragment>
      <mesh
        {...props}
        ref={gradientPlane}
        position={new THREE.Vector3(0, 0, -20)}
      >
        {/* <planeBufferGeometry args={[10, 10, 40, 40]} attach="geometry" /> */}

        <boxBufferGeometry args={[20, 20, 20, 20, 20, 20]} attach="geometry" />
        <MeshDistortMaterial
          color="black"
          attach="material"
          distort={0.5}
          speed={10}
          reflectivity={1}
          sheen={10}
          roughness={1}
        />

        {/* <shaderMaterial
          args={[
            {
              vertexShader: snoise + vertexShader,
              fragmentShader: snoise + fragmentShader,
            },
          ]}
        /> */}
      </mesh>
    </React.Fragment>
  );
};
