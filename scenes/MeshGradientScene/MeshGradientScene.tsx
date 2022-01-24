import React from "react";
import { IcosahedronWireframe } from "./components/IcosahedronWireframe";
import { GradientPlane } from "./components/GradientPlane";

export const MeshGradientScene = () => {
  return (
    <React.Fragment>
      <ambientLight />
      <pointLight intensity={1} position={[4, 4, 4]} color="blue" />
      <IcosahedronWireframe />
      <GradientPlane />
    </React.Fragment>
  );
};
