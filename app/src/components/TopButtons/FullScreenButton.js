import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons"; //full
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons"; //small

const FullScreenButton = () => {
  const [screenType, setScreenType] = useState(faUpRightAndDownLeftFromCenter);

  function changeScreen() {
    //small -> full
    if(screenType === faUpRightAndDownLeftFromCenter){
      setScreenType(faDownLeftAndUpRightToCenter);
      document.body.requestFullscreen();

      //full -> small
    } else {
      setScreenType(faUpRightAndDownLeftFromCenter);
      document.body.requestFullscreen();
      document.exitFullscreen();
    } 
  }

  return (
    <button className="fullScreenBtn" id="roundBtn">
      <FontAwesomeIcon onClick={changeScreen} icon={screenType} />
    </button>      
  );
}

export default FullScreenButton;
