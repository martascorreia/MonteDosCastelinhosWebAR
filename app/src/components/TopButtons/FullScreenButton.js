import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons"; //full
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons"; //normal

const FullScreenButton = (isFullScreen) => {
  console.log(isFullScreen.isFullScreen)
  const [screenType, setScreenType] = useState(isFullScreen.isFullScreen ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter);

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
    <button className="fullScreenBtn" id="roundBtn">
      <FontAwesomeIcon onClick={changeScreen} icon={screenType} />
    </button>      
  );
}

export default FullScreenButton;
