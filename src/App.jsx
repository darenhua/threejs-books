import React, { useEffect, createContext, useState } from "react";
import Scene from "./Scene";

export const SceneContext = createContext();

const App = () => {
  const [shifted, setShifted] = useState(false);
  const [selected, setSelected] = useState(2);
  // const { scrollYProgress } = useScroll();

  const onClickAnywhere = () => {
    setShifted(false);
  };
  const onClickBook = () => {
    setShifted(!shifted);
  };
  const onChangeSelect = newSelected => {
    setSelected(newSelected);
  };

  const sceneContext = {
    shifted,
    onClickAnywhere,
    onClickBook,
    onChangeSelect,
    selected,
  };

  return (
    <SceneContext.Provider value={sceneContext}>
      <Scene />
    </SceneContext.Provider>
  );
};

export default App;
