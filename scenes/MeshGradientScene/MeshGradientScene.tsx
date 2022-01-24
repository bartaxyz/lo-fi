import React, { useRef } from "react";
import { OrbitControls, useHelper } from "@react-three/drei";
import { IcosahedronWireframe } from "./components/IcosahedronWireframe";
import { GradientPlane } from "./components/GradientPlane";
import { useControls } from "leva";
import { PointLight, PointLightHelper } from "three";

export const MeshGradientScene = () => {
  const light = useRef<PointLight>();

  const { name, lightPosition, lightIntensity, lightColor } = useControls({
    name: "World",
    lightPosition: [4, 4, 4],
    lightIntensity: 1,
    lightColor: '#fff',
  });

  useHelper(light, PointLightHelper);

  return (
    <React.Fragment>
      <OrbitControls />
      <ambientLight />
      <pointLight
        ref={light}
        intensity={lightIntensity}
        position={lightPosition}
        color={lightColor}
      />
      <IcosahedronWireframe />
      <GradientPlane />
    </React.Fragment>
  );
};
