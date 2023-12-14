import React, { useReducer, createContext, useState } from "react";
import Scene from "./Scene";
import AboutPage from "./AboutPage";
import TitlePage from "./TitlePage";

export const SceneContext = createContext();

const App = () => {
  const [shifted, setShifted] = useState(false);
  const [selected, setSelected] = useState(2);
  const [screenState, screenDispatch] = useReducer(screenReducer, { screen: "title" });
  // const { scrollYProgress } = useScroll();
  console.log(screenState.screen);
  const handleEnter = () => screenDispatch({ type: "enter" });
  const handleAbout = () => screenDispatch({ type: "about" });
  const handleReturn = () => screenDispatch({ type: "return" });

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
      {screenState.screen === "title" && <TitlePage handleAbout={handleAbout} handleEnter={handleEnter} />}
      {screenState.screen === "about" && <AboutPage handleReturn={handleReturn} />}
      <Scene />
    </SceneContext.Provider>
  );
};

const screenReducer = (state, { type }) => {
  switch (type) {
    case "enter":
      return { screen: "main" };
    case "about":
      return { screen: "about" };
    case "return":
      return { screen: "title" };
    default:
      return state;
  }
};

export default App;
