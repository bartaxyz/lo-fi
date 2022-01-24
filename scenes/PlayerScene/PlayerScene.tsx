import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./components/Box";
import { Floor } from "./components/Floor";

export const PlayerScene = () => {
  return (
    <React.Fragment>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Floor />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </React.Fragment>
  );
};
