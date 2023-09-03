import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons"; //full
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons"; //normal
import "../../index.css"

const FullScreenButton = ({isFullScreen}) => {
  const [screenType, setScreenType] = useState(isFullScreen ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter);

  function changeScreen() {
    //normal -> full
    if(screenType === faUpRightAndDownLeftFromCenter){
      setScreenType(faDownLeftAndUpRightToCenter);
      document.body.requestFullscreen();

      //full -> normal
    } else {
      setScreenType(faUpRightAndDownLeftFromCenter);
      document.exitFullscreen();
    } 
  }

  return (
    <button className="fullScreenBtn roundBtn">
      <FontAwesomeIcon onClick={changeScreen} icon={screenType} />
    </button>      
  );
}

export default FullScreenButton;
