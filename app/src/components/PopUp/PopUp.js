import React from 'react';
import "./PopUp.css";

const PopUp = ({ text, icon, onClose }) => {

  return (
    <div className="popUp">
      <div className="popUpContent">
        <h2>Popup Content</h2>
        <p>This is a simple popup.</p>
        <button onClose={onClose}>X</button>
      </div>
    </div>
  );
}

export default PopUp;
