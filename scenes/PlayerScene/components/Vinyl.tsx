import React, { Suspense, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { songs } from "../../../music/data";
import { useFrame } from "@react-three/fiber";
import { useMusicPlayer } from "../../../src/contexts/MusicPlayer";

export const Vinyl = () => {
  const gltf = useGLTF("/models/vinyl.gltf");
  const [texture1] = useTexture([songs[0].cover]);
  const musicPlayer = useMusicPlayer();

  console.log({musicPlayer});

  useFrame((state, delta) => {
    if (!gltf || !musicPlayer.isPlaying) return;
    const speed = Math.PI / 2;
    gltf.scene.rotation.y += speed * delta;
  });

  useEffect(() => {
    if (gltf && texture1) {
      gltf.scene.children[0].castShadow = true;
      gltf.scene.children[1].castShadow = true;
      console.log(gltf.scene.children[1]);
      (gltf.scene.children[1] as any).material.map = texture1;
      console.log((gltf.scene.children[1] as any).material);
    }
  }, [gltf, texture1]);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};
