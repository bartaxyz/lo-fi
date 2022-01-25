import { useRef } from "react";
import { MeshProps } from "@react-three/fiber";
import { useControls } from "leva";

export const Floor: React.FC<MeshProps> = (props) => {
  const ref = useRef<any>();

  const { position } = useControls({
    position: [0, -0.06, 0],
  });

  return (
    <mesh
      {...props}
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={position}
      receiveShadow={true}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="#111" />
    </mesh>
  );
};
