import React from 'react';
import "./TextButton.css";
import "../../index.css"

const TextButton = (text) => {
  return (
    <div className="textButton">
      <button id="textBtn">{text.text}</button>
    </div>
  );
}

export default TextButton;
