import React from 'react';
import "./SquareButton.css";

function SquareButton ({ text, icon, onClick }) {
 
  return (
    <div className="squareButton">
      <div id="squareBtn" onClick={onClick}>
        {icon}
      </div>
      <div id="squareDescription">
        {text}
      </div>
    </div>
  );
}

export default SquareButton;
