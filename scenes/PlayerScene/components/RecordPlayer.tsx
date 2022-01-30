import React, { Suspense, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { songs } from "../../../music/data";
import { useFrame } from "@react-three/fiber";
import {
  Material,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  Vector2,
} from "three";

export const RecordPlayer = () => {
  const gltf = useGLTF("/models/record-player.gltf");
  /* const recordPlayerWoodenDeskTexture = useTexture(
    "/models/record-player-wooden-desk-texture.png"
  ); */

  useFrame((state, delta) => {
    if (!gltf) return;
    const speed = Math.PI / 2;
    // gltf.scene.rotation.y += speed * delta;
  });

  useEffect(() => {
    if (gltf) {
      /* (
        (gltf.scene.children[0] as THREE.Mesh).material as MeshPhysicalMaterial
      ).map = recordPlayerWoodenDeskTexture; */
      /* gltf.scene.children[0].castShadow = true;
      gltf.scene.children[1].castShadow = true; */
    }
  }, [gltf]);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};
