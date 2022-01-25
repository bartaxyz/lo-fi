import React, { Suspense, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { songs } from "../../../music/data";
import { useFrame } from "@react-three/fiber";

export const RecordPlayer = () => {
  const gltf = useGLTF("/models/record-player.gltf");

  useFrame((state, delta) => {
    if (!gltf) return;
    const speed = Math.PI / 2;
    // gltf.scene.rotation.y += speed * delta;
  });

  useEffect(() => {
    if (gltf) {
      gltf.scene.position.set(0, 0, 0);
      gltf.scene.scale.set(0.14, 0.14, 0.14);
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
