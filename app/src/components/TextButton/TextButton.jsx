import React from 'react';
import "./TextButton.css";
import "../../index.css"

const TextButton = ({text, acceptPermissions}) => {

  return (
    <div className="textButton">
      <button id="textBtn" onClick={acceptPermissions}>{text}</button>
    </div>
  );
}

export default TextButton;
