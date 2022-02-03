import React, { useEffect, useRef } from "react";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { useControls } from "leva";
import { Vinyl } from "./components/Vinyl";
import { RecordPlayer } from "./components/RecordPlayer";
import { Environment as EnvironmentModels } from "./components/Environment";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import {
  MusicPlayer,
  MusicPlayerContext,
} from "../../src/contexts/MusicPlayer";

function Rig() {
  const controls = useThree((state) => state.controls as any);
  const { azimuth, polar, fov } = useControls("Camera", {
    azimuth: { value: Math.PI / 2, min: 0, max: Math.PI },
    polar: { value: 0.8, min: 0, max: Math.PI / 2 },
    fov: { value: 50, min: 0, max: 100 },
  });
  useFrame(() => {
    controls?.setAzimuthalAngle(azimuth);
    controls?.setPolarAngle(polar);
    (controls.object as PerspectiveCamera).fov = fov;
  });
  return null;
}

export const PlayerScene: React.FC<{
  musicPlayer: MusicPlayerContext;
}> = ({ musicPlayer }) => {
  const light1Controls = useControls("Light #1 Controls", {
    color: "#ffffff",
    position: [10, 10, 10],
    intensity: 1,
  });

  const light2Controls = useControls("Light #2 Controls", {
    color: "#ffffff",
    position: [-5, 8, 6],
    intensity: 1,
  });

  const orbitCam = useRef<any>();

  console.log(orbitCam.current);
  useEffect(() => {}, [orbitCam.current]);

  return (
    <React.Fragment>
      {/* <Environment
        background={true}
        files="/environments/studio_small_09_1k.exr"
      /> */}

      <OrbitControls makeDefault ref={orbitCam} enabled={true} zoom0={1000} />
      <Rig />

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

      <EnvironmentModels />

      <Vinyl musicPlayer={musicPlayer} />
      <RecordPlayer />
    </React.Fragment>
  );
};
