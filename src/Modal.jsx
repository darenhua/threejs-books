import React, { useContext } from "react";
import { Html } from "@react-three/drei";
import { SceneContext } from "./App";

const Modal = ({ data }) => {
  const { shifted } = useContext(SceneContext);

  const outerShow = shifted ? "outer-show" : "outer-hide";
  const innerShow = shifted ? "inner-show" : "inner-hide";

  const paragraphs = data.description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
      <br />
    </React.Fragment>
  ));

  return (
    <Html fullscreen wrapperClass={`${outerShow} modal-outer-container`}>
      <div className={`${innerShow} modal-inner-container`}>
        <div className='modal'>
          <h5 className='modal-category'>{data.category}</h5>
          <h3 className='modal-title'>{data.title}</h3>
          <h5 className='modal-authors'>{data.authors}</h5>
          <div className='modal-description'>{paragraphs}</div>
        </div>
      </div>
    </Html>
  );
};

export default Modal;
