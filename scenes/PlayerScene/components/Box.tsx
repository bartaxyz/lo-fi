import { useRef, useState } from "react";
import { MeshProps, useFrame } from "@react-three/fiber";

export const Box: React.FC<MeshProps> = (props) => {
  const ref = useRef<any>();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      rotation={clicked ? [0, 0, 0] : [0, 0, 0]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
