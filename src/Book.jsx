import * as THREE from "three";
import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Book({ position, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/book_openclose.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const animation = open ? actions.CloseBook : actions.OpenBook;
    mixer.stopAllAction();

    animation.setLoop(THREE.LoopOnce);
    animation.clampWhenFinished = true;
    animation.enable = true;
    // mixer.addEventListener("finished", () => {
    //   console.log("Animation finished");
    //   console.log("Animation reset:", animation);
    // });
    animation.play();
    setOpen(!open);
  };
  const clonedNodes = useMemo(() => {
    return {
      Book: nodes.Book.clone(),
      Book001: nodes.Book001.clone(),
      Book002: nodes.Book002.clone(),
      LStr: nodes.LStr.clone(),
      RStr: nodes.RStr.clone(),
      Bone002: nodes.Bone002.clone(),
    };
  }, [nodes]);

  useFrame((state, delta) => {
    const speed = delta * 0.5;
    mixer.update(speed);
  });
  return (
    <group ref={group} position={position} {...props} dispose={null}>
      <group name='Scene' onClick={handleClick}>
        <group name='Armature' scale={[0.846, 0.81, 1]}>
          <skinnedMesh name='Book' geometry={nodes.Book.geometry} material={materials["Material.002"]} skeleton={nodes.Book.skeleton} />
          <skinnedMesh
            name='Book001'
            geometry={nodes.Book001.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Book001.skeleton}
          />
          <skinnedMesh
            name='Book002'
            geometry={nodes.Book002.geometry}
            material={materials["Material.002"]}
            skeleton={nodes.Book002.skeleton}
          />
          <primitive object={nodes.LStr} />
          <primitive object={nodes.RStr} />
          <primitive object={nodes.Bone002} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/book_openclose.glb");
