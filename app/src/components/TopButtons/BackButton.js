import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton() {
  return (
    <button className="btn" id="roundBtn">
      <FontAwesomeIcon icon={faArrowLeft}/>
    </button>      
  );
}

export default BackButton;
