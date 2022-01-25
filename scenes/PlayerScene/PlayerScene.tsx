import React from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Box } from "./components/Box";
import { Floor } from "./components/Floor";
import { Vinyl } from "./components/Vinyl";
import { RecordPlayer } from "./components/RecordPlayer";

export const PlayerScene = () => {
  return (
    <React.Fragment>
      <OrbitControls />
      <ambientLight />
      <pointLight
        position={[10, 10, 10]}
        castShadow={true}
        shadowMapHeight={800}
        shadowMapWidth={800}
      />
      <Floor />
      {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
      <Vinyl />
      <RecordPlayer />
    </React.Fragment>
  );
};
