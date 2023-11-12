import React from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons"; //full
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons"; //normal
import "../../index.css"
import { setFullScreen } from '../../utils/utils';

const FullScreenButton = ({isFullScreen, setIsFullScreen}) => {
  const [screenType, setScreenType] = useState(isFullScreen ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter);

  function changeScreen() {
    //normal -> full
    if(screenType === faUpRightAndDownLeftFromCenter){
      setScreenType(faDownLeftAndUpRightToCenter);
      setFullScreen(isFullScreen, true);
      setIsFullScreen(true);
      //full -> normal
    } else {
      setScreenType(faUpRightAndDownLeftFromCenter);
      setFullScreen(isFullScreen, false);
      setIsFullScreen(false);
    } 
  }

  return (
    <button className="fullScreenBtn roundBtn">
      <FontAwesomeIcon onClick={changeScreen} icon={screenType} />
    </button>      
  );
}

export default FullScreenButton;
