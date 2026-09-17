import React from 'react';
import "./AligmentButton.css";
import "../../index.css"

const AligmentButton = ({ onClick }) => {

  return (  
    <button className="aligmentButton" onClick={onClick}>
      Alinhado
    </button>
  );
}

export default AligmentButton;
