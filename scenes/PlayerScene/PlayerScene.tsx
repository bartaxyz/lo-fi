import React, { useEffect, useRef } from "react";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useControls } from "leva";
import { Vinyl } from "./components/Vinyl";
import { RecordPlayer } from "./components/RecordPlayer";
import { Environment } from "./components/Environment";
import { useThree } from "@react-three/fiber";

export const PlayerScene = () => {
  const light1Controls = useControls("Light #1 Controls", {
    color: '#ffffff',
    position: [10, 10, 10],
    intensity: 1,
  });

  const light2Controls = useControls("Light #2 Controls", {
    color: '#ffffff',
    position: [10, 10, 5],
    intensity: 1,
  });

  const cam = useControls("Camera", {
    position: [7, 9, -6],
    rotation: [-2, 0, 2],
    zoom: 2000,
  });

  const orbitCam = useRef<any>();

  console.log(orbitCam.current);
  useEffect(() => {}, [orbitCam.current]);

  return (
    <React.Fragment>
      {/* <Environment
        background={true}
        path="/environments/"
        files="studio_small_09_1k.exr"
      /> */}

      <OrbitControls
        ref={orbitCam}
        enableDamping={false}
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
        enabled={false}
      />

      <OrthographicCamera
        makeDefault
        position={cam.position}
        rotation={cam.rotation}
        zoom={cam.zoom}
      />

      <ambientLight />
      <pointLight
        color={light1Controls.color}
        position={light1Controls.position}
        intensity={light1Controls.intensity}
      />
      <pointLight
        color={light2Controls.color}
        position={light2Controls.position}
        intensity={light2Controls.intensity}
      />

      <Environment />

      <Vinyl />
      <RecordPlayer />
    </React.Fragment>
  );
};
