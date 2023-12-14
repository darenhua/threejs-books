import React, { useContext, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Html, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import FX from "./FX";
import Bookshelf from "./Bookshelf";
import Modal from "./Modal";
import { SceneContext } from "./App";
import data from "./assets/data.json";

const Scene = () => {
  const cameraOptions = {
    position: [1, 0, 5],
    rotation: [0, 0, 0],
    fov: 60,
  };

  const { onClickAnywhere, selected } = useContext(SceneContext);

  const text =
    "Language is important. Not all indigenous people identify with their traditions and values as a religion. For example, the Bribri people in Talamanca, Costa Rica generally prefer the terms “culture” and “tradition” over religion. Indigenous studies scholars like Philip P. Arnold use “Indigenous Values” rather than “Indigenous Religions” because values better represent the relationship that indigenous people have with their belief systems. \n One explanation that I found particularly interesting about the odds between indigeneity and religion is that the world religions like Christianity, Islam, Buddhism and more, tend to be centered around individual salvation. Meanwhile, indigenous life is centered around relationships/kinship. So, it is difficult to accept the theme that people opt into religions like Christianity in order to enter Heaven and save their own souls into a indigenous “religion”. \n Furthermore, the history between the world religons and indigenous people is bad. Missionaries attempt to erase “indigenous religions” and convert people. War and violence upon the Native Americans is justified by Christianity. Since indigenous people have had a bad experience with external organized religion, it makes sense that many do not agree with traditions being religion as well.";

  return (
    <Canvas shadows camera={cameraOptions} onPointerMissed={onClickAnywhere}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Center>
        <Bookshelf numBooks={data.length} data={data} />
      </Center>
      <Modal data={data[selected]} />
      <Environment preset='city' />
      <FX />
    </Canvas>
  );
};

export default Scene;
