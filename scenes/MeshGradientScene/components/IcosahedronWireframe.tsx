import React, { useRef, useState } from "react";
import { MeshDistortMaterial } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const IcosahedronWireframe: React.FC<MeshProps> = (props) => {
  const gradientPlane = useRef<Mesh>();

  useFrame((state, delta) => {
    if (!gradientPlane.current) return;

    const speed = 0.15;
    gradientPlane.current!.rotation.x += delta * speed;
    gradientPlane.current!.rotation.y += delta * speed;
    gradientPlane.current!.rotation.z += delta * speed;
  });

  return (
    <React.Fragment>
      <mesh {...props} ref={gradientPlane}>
        <icosahedronBufferGeometry args={[1, 5]} attach="geometry" />
        <MeshDistortMaterial
          color="red"
          attach="material"
          distort={0.6}
          speed={1}
          wireframe={true}
          thickness={2}
        />
      </mesh>
    </React.Fragment>
  );
};
