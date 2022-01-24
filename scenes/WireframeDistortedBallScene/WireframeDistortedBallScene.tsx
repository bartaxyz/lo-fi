import React from "react";
import { IcosahedronWireframe } from "./components/IcosahedronWireframe";

export const WireframeDistortedBallScene = () => {
  return (
    <React.Fragment>
      <ambientLight />
      <pointLight intensity={10} position={[4, 4, 4]} color="blue" />
      <IcosahedronWireframe />
    </React.Fragment>
  );
};
