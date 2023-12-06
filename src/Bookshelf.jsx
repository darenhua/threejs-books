import React, { useContext } from "react";
import { useSpring, animated } from "@react-spring/three";
import { degToRad } from "three/src/math/MathUtils";
import { Text, Html } from "@react-three/drei";
import { SceneContext } from "./App";
import Book from "./Book";

const AnimatedBook = animated(Book);
const AnimatedText = animated(Text);

const Bookshelf = () => {
  const { shifted, onChangeSelect, selected } = useContext(SceneContext);

  const numberOfBooks = 5;
  const spacing = 1.5;

  const books = Array.from({ length: numberOfBooks }, (_, index) => ({
    id: index,
    position: index * spacing,
  }));
  const { xShift, yShift } = useSpring({ xShift: shifted ? -1 : 0, yShift: (2 - selected) * 1.5 });

  return (
    <group>
      {books.map(({ id, position }) => (
        <animated.group key={id} onClick={() => onChangeSelect(id)} position-x={xShift} position-y={yShift.to(y => position + y)}>
          <AnimatedBook rotation={[degToRad(270), degToRad(90), 0]} />
          <AnimatedText
            scale={0.8}
            position-x={3.5}
            position-z={-1}
            color={selected === id ? "white" : "red"}
            anchorX='center' // default
            anchorY='middle' // default
          >
            Topic 1
          </AnimatedText>
        </animated.group>
      ))}
      <Html scale={100}>HELLO WORLD</Html>
    </group>
  );
};

export default Bookshelf;
