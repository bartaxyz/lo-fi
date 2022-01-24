import { useRef } from "react";
import { MeshProps } from "@react-three/fiber";

export const Floor: React.FC<MeshProps> = (props) => {
  const ref = useRef<any>();

  return (
    <mesh {...props} ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
};
