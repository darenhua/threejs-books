import * as THREE from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";
import React, { useRef, useState, useMemo, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { Clone, useGLTF, useAnimations } from "@react-three/drei";
import { SceneContext } from "./App";

export default function Book(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/book_openclose.glb");
  const { actions, mixer } = useAnimations(animations, group);
  const [open, setOpen] = useState(false);
  const { onClickBook } = useContext(SceneContext);
  const { selected } = useContext(SceneContext);

  const cloned = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const handleClick = () => {
    const animation = open ? actions.CloseBook : actions.OpenBook;
    mixer.stopAllAction();

    animation.setLoop(THREE.LoopOnce);
    animation.clampWhenFinished = true;
    animation.enable = true;
    animation.play();
    setOpen(!open);
    onClickBook();
  };

  useFrame((state, delta) => {
    const speed = delta * 0.5;
    mixer.update(speed);
  });

  const { zShift } = useSpring({ zShift: props.bookNum === selected ? 0.5 : 0 });

  return (
    <animated.group ref={group} onClick={onClickBook} position-z={zShift} {...props}>
      <primitive object={cloned} />
    </animated.group>
  );
}

useGLTF.preload("/book_openclose.glb");
