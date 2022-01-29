import React, { Suspense, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { songs } from "../../../music/data";
import { useFrame } from "@react-three/fiber";
import { useMusicPlayer } from "../../../src/contexts/MusicPlayer";

export const Vinyl = () => {
  const gltf = useGLTF("/models/vinyl.gltf");
  const [texture1] = useTexture([songs[0].cover]);
  const vinylTexture = useTexture("/models/vinyl-texture.png");
  const musicPlayer = useMusicPlayer();

  console.log({ musicPlayer });

  useFrame((state, delta) => {
    // if (!gltf || !musicPlayer.isPlaying) return;
    const speed = Math.PI / 2;
    gltf.scene.rotation.y += speed * delta;
  });

  useEffect(() => {
    if (gltf && texture1) {
      vinylTexture.anisotropy = 1;
      console.log(gltf.scene.children);
      (gltf.scene.children[1] as any).material.map = vinylTexture;
      (gltf.scene.children[0] as any).material.map = texture1;
    }
  }, [gltf, texture1]);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};
