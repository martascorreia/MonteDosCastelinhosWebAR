import React from 'react';
import {useState} from 'react';
import "./TextButton.css";

const TextButton = (text) => {
  return (
    <div className="textButton">
      <button id="textBtn">{text.text}</button>    
    </div>
  );
}

export default TextButton;
