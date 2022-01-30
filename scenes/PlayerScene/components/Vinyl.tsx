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
  const vinylInvertedNormal = useTexture("/models/vinyl-inverted-normal.png");
  const musicPlayer = useMusicPlayer();
  const state = useThree();

  const vinyl = useControls('Vinyl', {
    reflectivity: 100,
    metalness: 1.4,
    roughness: 0.5,
  })
  const cover = useControls('Cover', {
    reflectivity: 100,
    metalness: 1.4
  })

  console.log({ musicPlayer });

  useFrame((state, delta) => {
    // if (!gltf || !musicPlayer.isPlaying) return;
    const speed = Math.PI / 2;
    gltf.scene.rotation.y += speed * delta;
  });

  useEffect(() => {
    if (gltf && texture1 && cover && vinyl) {
      vinylTexture.anisotropy = state.gl.capabilities.getMaxAnisotropy();
      console.log(gltf.scene.children);
      ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).map = texture1;
      ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).roughnessMap = vinylInvertedNormal;
      ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).metalnessMap = vinylNormal;
      // ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).normalMap = vinylInvertedNormal;
      ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).roughness = vinyl.roughness;
      ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).reflectivity = vinyl.reflectivity;
      ((gltf.scene.children[1] as THREE.Mesh).material as MeshPhysicalMaterial).metalness = vinyl.metalness;

      ((gltf.scene.children[0] as THREE.Mesh).material as MeshPhysicalMaterial).map = texture1;
      ((gltf.scene.children[0] as THREE.Mesh).material as MeshPhysicalMaterial).reflectivity = cover.reflectivity;
      // ((gltf.scene.children[0] as THREE.Mesh).material as MeshPhysicalMaterial).metalness = cover.metalness;
    }
  }, [gltf, texture1, cover, vinyl]);

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};
