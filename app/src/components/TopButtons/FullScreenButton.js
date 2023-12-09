import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons"; //full
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons"; //normal
import "../../index.css"
import { setFullScreen } from '../../utils/utils';

const FullScreenButton = ({isFullScreen, setIsFullScreen, clickFullScreen }) => {
  const [screenType, setScreenType] = useState(isFullScreen ? faDownLeftAndUpRightToCenter : faUpRightAndDownLeftFromCenter);
  const fullScreenBtnRef = useRef();

  useEffect(() => {
    if (clickFullScreen) {
      fullScreenBtnRef.current.click();
    }
}, [clickFullScreen]);


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
    <button className="fullScreenBtn roundBtn" id="fullScreenBtn" ref={fullScreenBtnRef} onClick={changeScreen}>
      <FontAwesomeIcon icon={screenType} />
    </button>      
  );
}

export default FullScreenButton;
