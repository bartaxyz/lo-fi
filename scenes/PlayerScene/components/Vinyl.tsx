import React, { Suspense, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { songs } from "../../../music/data";
import { useFrame, useThree } from "@react-three/fiber";
import { useMusicPlayer } from "../../../src/contexts/MusicPlayer";
import { Material, MeshPhongMaterial, MeshPhysicalMaterial, Vector2 } from "three";
import { useControls } from "leva";

export const Vinyl = () => {
  const gltf = useGLTF("/models/vinyl.gltf");
  const [texture1] = useTexture([songs[0].cover]);
  const vinylTexture = useTexture("/models/vinyl-texture.png");
  const vinylNormal = useTexture("/models/vinyl-normal.png");
  const musicPlayer = useMusicPlayer();
  const state = useThree();

  const controls = useControls({
    reflectivity: 100,
    flatShading: true,
    metalness: 0.75
  })

  console.log({ musicPlayer });

  useFrame((state, delta) => {
    // if (!gltf || !musicPlayer.isPlaying) return;
    const speed = Math.PI / 2;
    gltf.scene.rotation.y += speed * delta;
  });

  useEffect(() => {
    if (gltf && texture1 && controls) {
      vinylTexture.anisotropy = state.gl.capabilities.getMaxAnisotropy();
      console.log(gltf.scene.children);
      ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).map = vinylTexture;
      ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).roughnessMap = vinylNormal;
      // ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).normalMap = vinylNormal;
      ((gltf.scene.children[0] as THREE.Mesh).material as MeshPhysicalMaterial).map = texture1;
      ((gltf.scene.children[0] as THREE.Mesh).material as MeshPhysicalMaterial).reflectivity = controls.reflectivity;
      ((gltf.scene.children[0] as THREE.Mesh).material as MeshPhysicalMaterial).flatShading = controls.flatShading;
      ((gltf.scene.children[0] as THREE.Mesh).material as MeshPhysicalMaterial).metalness = controls.metalness;
    }
  }, [gltf, texture1, controls]);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};
