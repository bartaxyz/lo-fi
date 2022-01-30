import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

export const Environment = () => {
  const gltf = useGLTF("/models/environment.gltf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
};
