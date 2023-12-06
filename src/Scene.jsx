import React, { useContext, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, OrbitControls, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import FX from "./FX";
import Book from "./Book";
import Bookshelf from "./Bookshelf";
import { SceneContext } from "./App";

const Scene = () => {
  const cameraOptions = {
    position: [1, 0, 5],
    rotation: [0, 0, 0],
    fov: 60,
  };

  const { onClickAnywhere, onScroll } = useContext(SceneContext);

  return (
    <Canvas shadows camera={cameraOptions} onWheel={onScroll} onPointerMissed={onClickAnywhere}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Center>
        <Bookshelf />
      </Center>
      <Environment preset='city' />
      <FX />
    </Canvas>
  );
};

export default Scene;
