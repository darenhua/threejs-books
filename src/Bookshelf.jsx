import React, { useContext, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { degToRad } from "three/src/math/MathUtils";
import { Text, Html } from "@react-three/drei";
import { SceneContext } from "./App";
import Book from "./Book";
import anticdidone from "./assets/AnticDidone-Regular.ttf";
import { Globals } from "@react-spring/shared";

Globals.assign({
  frameLoop: "always",
});

const AnimatedBook = animated(Book);
const AnimatedText = animated(Text);

const Bookshelf = ({ numBooks, data }) => {
  const { shifted, onChangeSelect, selected } = useContext(SceneContext);

  const spacing = 1.5;

  const books = Array.from({ length: numBooks }, (_, index) => ({
    id: index,
    position: index * spacing,
    shortname: data[index].shortname,
  }));
  const { xShift, yShift, opacity } = useSpring({ xShift: shifted ? -1.5 : 0, yShift: (2 - selected) * 1.5, opacity: shifted ? 0 : 1 });

  return (
    <group>
      {books.map(({ id, position, shortname }) => (
        <animated.group key={id} onClick={() => onChangeSelect(id)} position-x={xShift} position-y={yShift.to(y => position + y)}>
          <AnimatedBook rotation={[degToRad(270), degToRad(90), 0]} bookNum={id} />
          <AnimatedText
            scale={0.8}
            position-x={2}
            position-z={-1}
            font={anticdidone}
            anchorX='left'
            characters='abcdefghijklmnopqrstuvwxyz0123456789!'
          >
            {shortname}
            <animated.meshBasicMaterial opacity={opacity} transparent={true} alphaTest={0.1} color={selected === id ? "white" : "red"} />
          </AnimatedText>
        </animated.group>
      ))}
    </group>
  );
};

export default Bookshelf;
